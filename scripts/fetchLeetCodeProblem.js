const fs = require('fs');
const https = require('https');

const sessionCookie = process.env.LEETCODE_SESSION;

function fetchDailyProblem(callback) {
  const query = `
    query questionOfToday {
      activeDailyCodingChallengeQuestion {
        date
        question {
          questionFrontendId
          title
          titleSlug
          difficulty
          content  # Full HTML description
        }
      }
    }
  `;

  const data = JSON.stringify({ query });

  const options = {
    hostname: 'leetcode.com',
    path: '/graphql',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Cookie': `LEETCODE_SESSION=${sessionCookie};`,
      'Referer': 'https://leetcode.com/',
      'Origin': 'https://leetcode.com',
      'User-Agent': 'Mozilla/5.0'
    }
  };

  const req = https.request(options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
      responseBody += chunk;
    });

    res.on('end', () => {
      try {
        const json = JSON.parse(responseBody);
        const question = json.data.activeDailyCodingChallengeQuestion.question;
        fs.writeFileSync('scripts/currentProblem.json', JSON.stringify(question, null, 2));
        callback(question);
      } catch (error) {
        console.error('Failed to parse response:\n', responseBody);
        process.exit(1);
      }
    });
  });

  req.on('error', (error) => {
    console.error(error);
    process.exit(1);
  });

  req.write(data);
  req.end();
}

fetchDailyProblem(() => {});
