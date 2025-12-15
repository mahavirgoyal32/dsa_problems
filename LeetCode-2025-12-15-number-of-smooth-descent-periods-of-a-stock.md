# LeetCode Daily – 2025-12-15

## 🧠 Problem #2110 – **Number of Smooth Descent Periods of a Stock**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock)

---

### 📝 Problem Description

You are given an integer array prices representing the daily price history of a stock, where prices[i] is the stock price on the ith day.

A smooth descent period of a stock consists of one or more contiguous days such that the price on each day is lower than the price on the preceding day by exactly 1. The first day of the period is exempted from this rule.

Return the number of smooth descent periods.

 
Example 1:


Input: prices = [3,2,1,4]
Output: 7
Explanation: There are 7 smooth descent periods:
[3], [2], [1], [4], [3,2], [2,1], and [3,2,1]
Note that a period with one day is a smooth descent period by the definition.


Example 2:


Input: prices = [8,6,7,7]
Output: 4
Explanation: There are 4 smooth descent periods: [8], [6], [7], and [7]
Note that [8,6] is not a smooth descent period as 8 - 6 &ne; 1.


Example 3:


Input: prices = [1]
Output: 1
Explanation: There is 1 smooth descent period: [1]


 
Constraints:


	1 <= prices.length <= 105
	1 <= prices[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Number of Smooth Descent Periods of a Stock" requires us to find the number of continuous periods where the stock prices show a smooth descent. 

### Problem Description:
A smooth descent period occurs when the stock price is strictly decreasing over consecutive days. For an array of stock prices, we need to count all the contiguous subarrays where for every pair of consecutive elements in that subarray, the condition `prices[i] > prices[i + 1]` holds true.

### Steps to Solve:
1. **Initialize a Counter**: We will maintain a counter to track the number of smooth descent periods.
2. **Use a Variable for Current Length**: We'll maintain a variable that tracks the length of the current smooth descent subarray.
3. **Iterate Through Prices**: We will loop through the prices array starting from the second element, and if we find that the current element is less than the previous one, we will increase the current length counter. If not, we will reset it.
4. **Count the Periods**: For each descent period, we can derive the number of smooth descent subarrays from the current length. If the current length of descent is `len`, the number of valid subarrays is `len * (len + 1) / 2`.

### Implementation:

Here’s how you can implement this in C++:

```cpp
#include <vector>

class Solution {
public:
    int getDescentPeriods(std::vector<int>& prices) {
        int count = 0;
        int currentLength = 1; // Start with the first day
        
        for (int i = 1; i < prices.size(); i++) {
            if (prices[i] < prices[i - 1]) { // If it's a smooth descent
                currentLength++;
            } else { // If not, we reset the length
                currentLength = 1;
            }
            count += currentLength; // Add counts of continuous sensible descent
        }
        
        return count; // Return total count of descent periods
    }
};
```

### Explanation:
1. **Initialization**: We set `count` to zero and `currentLength` to one (as each single day is a descent period on its own).
2. **Iteration**: Starting from the second price:
   - If the current price is less than the previous price, we increase the current descent length.
   - If it is not, we reset the current length back to one.
3. **Counting**: After each evaluation of `currentLength`, we add the current length to `count`.
   - This is because, for every new element in a smooth descent, it generates multiple subarrays, as discussed before.
4. **Returning Result**: Finally, we return the accumulated count of descent periods.

### Complexity:
- **Time Complexity**: O(n), where n is the number of days (length of prices array). We only make a single pass through the array.
- **Space Complexity**: O(1), as we only use a fixed amount of extra space for counters.

This solution effectively counts all the contiguous descent periods while iterating through the prices once, making it efficient and straightforward.