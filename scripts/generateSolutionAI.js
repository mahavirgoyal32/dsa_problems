import fs from "fs";
import OpenAI from "openai";
import problem from "./currentProblem.json" assert { type: "json" };

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const today = new Date().toISOString().split("T")[0];
const filePath = `LeetCode-${today}-${problem.titleSlug}.md`;

async function generateSolution() {
  try {
    const prompt = `Solve this LeetCode problem in C++ with explanation:\n\n
    Title: ${problem.title}\n
    Difficulty: ${problem.difficulty}\n
    Link: https://leetcode.com/problems/${problem.titleSlug}\n\n`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const solution = response.choices[0].message.content;
    fs.appendFileSync(filePath, `\n\n---\n\n## AI Generated Solution\n\n${solution}`);
    console.log("✅ AI solution appended to", filePath);
  } catch (err) {
    console.error("⚠️ Failed to fetch AI solution:", err.message);
    fs.appendFileSync(filePath, `\n\n---\n\n## AI Generated Solution\n\n⚠️ Failed to fetch AI solution today.`);
  }
}

generateSolution();
