const fs = require('fs');
const https = require('https');

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
          content  # ✅ this includes full HTML description
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
      'Content-Length': data.length
    }
  };

  const req = https.request(options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
      responseBody += chunk;
    });

    res.on('end', () => {
      const json = JSON.parse(responseBody);
      const question = json.data.activeDailyCodingChallengeQuestion.question;
      fs.writeFileSync('scripts/currentProblem.json', JSON.stringify(question, null, 2));
      callback(question);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}

fetchDailyProblem(() => {});
