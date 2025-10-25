# LeetCode Daily – 2025-10-25

## 🧠 Problem #1716 – **Calculate Money in Leetcode Bank**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/calculate-money-in-leetcode-bank)

---

### 📝 Problem Description

Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday. 

Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

 
Example 1:


Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.


Example 2:


Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.


Example 3:


Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.


 
Constraints:


	1 <= n <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's first summarize the problem statement for "Calculate Money in Leetcode Bank" and then I'll provide you with a C++ solution along with an explanation.

### Problem Statement:

You have a Leetcode bank that initially has `money` amount of money in it. You make a daily deposit starting from day 1 and increasing the deposit amount by 1 dollar each day. You've been tasked with calculating the amount of money in your Leetcode bank after `n` days.

The formula for the deposit is as follows:
- On day 1, you deposit $1.
- On day 2, you deposit $2.
- ...
- On day n, you deposit $n.

Additionally, every 7 days (i.e., on weeks), you will receive an additional $1 as a bonus.

Your final task is to compute the total amount of money in the bank after `n` days.

### Solution in C++

The solution involves calculating the total deposits over `n` days and factoring in the bonuses received.

Here's the C++ code to achieve this:

```cpp
class Solution {
public:
    int totalMoney(int n) {
        int fullWeeks = n / 7; // Number of complete weeks in n days
        int remainingDays = n % 7; // Remaining days after counting full weeks

        // Total money from complete weeks
        int weeklyDeposit = 0;
        if (fullWeeks > 0) {
            // Each week contributes a sum of 7 days starting from 1 + fullWeeks
            // The sums can be computed as follows:
            // (1 + 2 + ... + 7) + 7*fullWeeks
            weeklyDeposit = (fullWeeks * (7 * (fullWeeks + 1)) / 2) + (fullWeeks * 7);
        }

        // Total money from remaining days
        int remainingDeposit = (remainingDays * (remainingDays + 1)) / 2 + (remainingDays * fullWeeks);

        return weeklyDeposit + remainingDeposit;
    }
};
```

### Explanation of the Code:

1. **Calculate Full Weeks and Remaining Days:**
   - First, we calculate `fullWeeks`, which is the number of complete weeks in `n`. This is done using integer division `n / 7`.
   - `remainingDays` gives the leftover days after full weeks, calculated using `n % 7`.

2. **Calculating Total Money from Complete Weeks:**
   - Each complete week has deposit amounts ranging from an incremented start value through to 7 days. 
   - The sum of deposits given by the formula for natural numbers from 1 to 7 is `7 * (7 + 1) / 2 = 28`.
   - Therefore, for each complete week, you also need an additional `7 * fullWeeks` because after every week, the base deposit amount starts increasing by 1.
   - The total money from full weeks can be calculated as:
     - `(fullWeeks * (7 * (fullWeeks + 1)) / 2) + (fullWeeks * 7)`

3. **Calculating Money from Remaining Days:**
   - For the days that don't complete the next week, we calculate how much was deposited in those remaining days:
     - This is given by the formula for the sum of the first `remainingDays` natural numbers, which is `(remainingDays * (remainingDays + 1)) / 2`.
     - We also consider the fact that these remaining days will also inherit the bonus of `fullWeeks`.

4. **Final Calculation:**
   - Finally, sum the total from complete weeks and remaining days, returning it as the result.

This solution efficiently calculates the total amount by using arithmetic properties rather than iterating over each day, ensuring that it runs in constant time.