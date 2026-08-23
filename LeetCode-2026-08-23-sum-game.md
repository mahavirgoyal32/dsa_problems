# LeetCode Daily – 2026-08-23

## 🧠 Problem #1927 – **Sum Game**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sum-game)

---

### 📝 Problem Description

Alice and Bob take turns playing a game, with Alice starting first.

You are given a string num of even length consisting of digits and &#39;?&#39; characters. On each turn, a player will do the following if there is still at least one &#39;?&#39; in num:


	Choose an index i where num[i] == &#39;?&#39;.
	Replace num[i] with any digit between &#39;0&#39; and &#39;9&#39;.


The game ends when there are no more &#39;?&#39; characters in num.

For Bob to win, the sum of the digits in the first half of num must be equal to the sum of the digits in the second half. For Alice to win, the sums must not be equal.


	For example, if the game ended with num = &quot;243801&quot;, then Bob wins because 2+4+3 = 8+0+1. If the game ended with num = &quot;243803&quot;, then Alice wins because 2+4+3 != 8+0+3.


Assuming Alice and Bob play optimally, return true if Alice will win and false if Bob will win.

 
Example 1:


Input: num = &quot;5023&quot;
Output: false
Explanation: There are no moves to be made.
The sum of the first half is equal to the sum of the second half: 5 + 0 = 2 + 3.


Example 2:


Input: num = &quot;25??&quot;
Output: true
Explanation: Alice can replace one of the &#39;?&#39;s with &#39;9&#39; and it will be impossible for Bob to make the sums equal.


Example 3:


Input: num = &quot;?3295???&quot;
Output: false
Explanation: It can be proven that Bob will always win. One possible outcome is:
- Alice replaces the first &#39;?&#39; with &#39;9&#39;. num = &quot;93295???&quot;.
- Bob replaces one of the &#39;?&#39; in the right half with &#39;9&#39;. num = &quot;932959??&quot;.
- Alice replaces one of the &#39;?&#39; in the right half with &#39;2&#39;. num = &quot;9329592?&quot;.
- Bob replaces the last &#39;?&#39; in the right half with &#39;7&#39;. num = &quot;93295927&quot;.
Bob wins because 9 + 3 + 2 + 9 = 5 + 9 + 2 + 7.


 
Constraints:


	2 <= num.length <= 105
	num.length is even.
	num consists of only digits and &#39;?&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Sum Game" problem from LeetCode involves calculating whether two players (Alice and Bob) end up with the same total score after taking turns to place digits in predefined positions. Let's break down how to approach this problem, and then I'll provide a C++ solution with explanations.

### Problem Breakdown

1. **Understanding the Score:** The players can fill in digits in specific positions of a number. The first half of the digits corresponds to Alice's score, and the second half to Bob's.

2. **Input Details:** We need to simulate how digits are filled from the strings representing Alice's and Bob's contributions to the score. The digits in some positions may be placeholders that require further evaluation.

3. **Scoring Calculation:**
    - For positions filled with specific digits, you can directly add them to the respective scores.
    - For positions with a '?', you need to consider that they could be filled with any digit from 0 to 9.

4. **Difference Evaluation:** After evaluating positions, we need to check:
   - Determine if the scores can equalize to each other by possibly adjusting the values represented by the '?' positions.

### Algorithm Steps

1. Traverse the first half of Alice's string and compute the sum of digits while counting any '?', which could potentially add values.
2. Repeat the above for Bob’s string.
3. Calculate the total effects of '?'. Each '?' for Alice can be filled with digits maximally up to 9 and minimally up to 0, while each '?' for Bob can be similarly adjusted.
4. Use the potential extremes from '?' counts to see if the two totals can be made equal.

### C++ Implementation

Here's the C++ code for the above logic:

```cpp
#include <string>

class Solution {
public:
    bool sumGame(std::string num) {
        // Initializing sums and question marks
        int aliceSum = 0, bobSum = 0;
        int aliceQuestionMarks = 0, bobQuestionMarks = 0;
        int n = num.size();
        
        // Splitting the num into two halves
        for (int i = 0; i < n / 2; ++i) {
            if (num[i] == '?') {
                aliceQuestionMarks++;
            } else {
                aliceSum += (num[i] - '0');
            }
        }
        
        for (int i = n / 2; i < n; ++i) {
            if (num[i] == '?') {
                bobQuestionMarks++;
            } else {
                bobSum += (num[i] - '0');
            }
        }
        
        // Now we check if it can be balanced
        int totalAlice = aliceSum + aliceQuestionMarks * 9;
        int totalBob = bobSum + bobQuestionMarks * 0; // Maximize the other side
        
        // Define the potential values for '?' for both sides
        // We want to see if there's a way to balance the equation:
        // totalAlice - totalBob = difference
        // It can be achieved if the difference can be made with the shifts due to '?'
        int maxPossibleSizeDifference = totalAlice - totalBob;
        int minPossibleAdjustment = -bobQuestionMarks * 9;
        int maxPossibleAdjustment = aliceQuestionMarks * 9;

        // We check if it is possible to equalize now
        // If the `maxPossibleSizeDifference` is within the boundary of the adjustments
        return !(maxPossibleSizeDifference < minPossibleAdjustment || maxPossibleSizeDifference > maxPossibleAdjustment);
    }
};
```

### Explanation of the Code:

- We initialize counters for Alice's and Bob's sums, as well as for their '?' counts.
- We loop through the first half of the string to calculate Alice's total sum and count '?'. The second half does the same for Bob.
- After gathering totals, we calculate:
  - The maximum possible score Alice could reach by treating all '?' as '9'.
  - The minimum score Bob could reach by treating all '?' as '0'.
- Finally, we check if the difference between Alice's maximum potential score and Bob's minimum potential score can be adjusted to equal. If it can be done, the result is `false` (they can meet); otherwise, `true`.

This solution fulfills the conditions of the problem using variable score assessments and simple arithmetic checks, providing a clear and efficient way to determine the game result.