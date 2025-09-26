import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the problem JSON
import problem from './currentProblem.json' assert { type: 'json' };

// Read the template
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
console.log(`✅ Markdown file created: LeetCode-${today}-${problem.titleSlug}.md`);
