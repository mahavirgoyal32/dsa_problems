const fs = require('fs');
const path = require('path');

const problem = require('./currentProblem.json');
const template = fs.readFileSync(path.join(__dirname, 'problemTemplate.md'), 'utf-8');

const today = new Date().toISOString().split('T')[0];

// Basic HTML to text conversion
const htmlToText = (html) =>
  html
    .replace(/<\/?[^>]+(>|$)/g, '') // Remove tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();

const description = htmlToText(problem.content);

const output = template
  .replace(/{{TITLE}}/g, problem.title)
  .replace(/{{ID}}/g, problem.questionFrontendId)
  .replace(/{{DIFFICULTY}}/g, problem.difficulty)
  .replace(/{{LINK}}/g, `https://leetcode.com/problems/${problem.titleSlug}`)
  .replace(/{{DATE}}/g, today)
  .replace(/{{DESCRIPTION}}/g, description);

fs.writeFileSync(`LeetCode-${today}-${problem.titleSlug}.md`, output);
