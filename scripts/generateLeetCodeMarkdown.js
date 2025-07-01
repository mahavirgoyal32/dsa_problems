const fs = require('fs');
const path = require('path');

const problem = require('./currentProblem.json');
const template = fs.readFileSync(path.join(__dirname, 'problemTemplate.md'), 'utf-8');

const today = new Date().toISOString().split('T')[0];
const output = template
  .replace(/{{TITLE}}/g, problem.title)
  .replace(/{{ID}}/g, problem.questionFrontendId)
  .replace(/{{DIFFICULTY}}/g, problem.difficulty)
  .replace(/{{LINK}}/g, `https://leetcode.com/problems/${problem.titleSlug}`)
  .replace(/{{DATE}}/g, today);

fs.writeFileSync(`LeetCode-${today}-${problem.titleSlug}.md`, output);
