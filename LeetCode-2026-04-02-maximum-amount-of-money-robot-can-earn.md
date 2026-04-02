# LeetCode Daily – 2026-04-02

## 🧠 Problem #3418 – **Maximum Amount of Money Robot Can Earn**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn)

---

### 📝 Problem Description

You are given an m x n grid. A robot starts at the top-left corner of the grid (0, 0) and wants to reach the bottom-right corner (m - 1, n - 1). The robot can move either right or down at any point in time.

The grid contains a value coins[i][j] in each cell:


	If coins[i][j] >= 0, the robot gains that many coins.
	If coins[i][j] < 0, the robot encounters a robber, and the robber steals the absolute value of coins[i][j] coins.


The robot has a special ability to neutralize robbers in at most 2 cells on its path, preventing them from stealing coins in those cells.

Note: The robot&#39;s total coins can be negative.

Return the maximum profit the robot can gain on the route.

 
Example 1:


Input: coins = [[0,1,-1],[1,-2,3],[2,-3,4]]

Output: 8

Explanation:

An optimal path for maximum coins is:


	Start at (0, 0) with 0 coins (total coins = 0).
	Move to (0, 1), gaining 1 coin (total coins = 0 + 1 = 1).
	Move to (1, 1), where there&#39;s a robber stealing 2 coins. The robot uses one neutralization here, avoiding the robbery (total coins = 1).
	Move to (1, 2), gaining 3 coins (total coins = 1 + 3 = 4).
	Move to (2, 2), gaining 4 coins (total coins = 4 + 4 = 8).



Example 2:


Input: coins = [[10,10,10],[10,10,10]]

Output: 40

Explanation:

An optimal path for maximum coins is:


	Start at (0, 0) with 10 coins (total coins = 10).
	Move to (0, 1), gaining 10 coins (total coins = 10 + 10 = 20).
	Move to (0, 2), gaining another 10 coins (total coins = 20 + 10 = 30).
	Move to (1, 2), gaining the final 10 coins (total coins = 30 + 10 = 40).



 
Constraints:


	m == coins.length
	n == coins[i].length
	1 <= m, n <= 500
	-1000 <= coins[i][j] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Maximum Amount of Money Robot Can Earn," we will utilize a dynamic programming approach. Let's start by breaking down the problem and providing an explanation of the solution.

### Problem Understanding
The robot operates in a 1D array of houses, where each house has a certain amount of money. The robot can either rob a house or skip it, but cannot rob two adjacent houses. Our goal is to maximize the amount of money the robot can earn by choosing the optimal houses to rob.

### Dynamic Programming Approach
1. **Define the DP Array**: We'll maintain a `dp` array where `dp[i]` represents the maximum amount of money the robot can earn by considering the first `i` houses.

2. **State Transition**:
   - If the robot robs the i-th house, it cannot rob the (i-1)-th house, so we can accumulate money from the i-th house and the optimal amount from `i-2` houses: `money[i] + dp[i-2]`.
   - If the robot skips the i-th house, then the maximum amount would just be the optimal amount from `i-1` houses: `dp[i-1]`.
   - Thus, the recurrence relation is:
     \[
     dp[i] = \max(dp[i-1], money[i] + (i > 1 ? dp[i-2] : 0))
     \]

3. **Base Cases**:
   - For `dp[0]`: When there's only one house, the maximum money is simply the amount in that house. Hence, `dp[0] = money[0]`.
   - For `dp[1]`: When there are two houses, the robot will take the maximum of the two, i.e., `dp[1] = max(money[0], money[1])`.

4. **Final Result**: The final solution will be in `dp[n-1]`, where `n` is the number of houses.

### Code Implementation
Here's a C++ solution implementing the above logic:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int rob(std::vector<int>& money) {
        int n = money.size();
        if (n == 0) return 0;
        if (n == 1) return money[0];
        
        // Create the dp array
        std::vector<int> dp(n);
        
        // Base cases
        dp[0] = money[0];
        dp[1] = std::max(money[0], money[1]);
        
        // Fill the dp array
        for (int i = 2; i < n; ++i) {
            dp[i] = std::max(dp[i - 1], money[i] + dp[i - 2]);
        }
        
        // The answer will be in dp[n-1]
        return dp[n - 1];
    }
};
```

### Explanation of the Code:
1. **Input Handling**: First, we check the number of houses. If there are none, we return 0. If there's only one, we return the amount in that house.
  
2. **Dynamic Programming Array**: We initialize a `dp` vector of size `n`. The first two values are initialized based on the base cases described.

3. **Loop Through Houses**: We loop from `2` to `n-1` (the index of the last house) to fill our `dp` array based on the recurrence relation.

4. **Return Result**: Finally, we return the last entry in the `dp` array, which holds the maximum amount of money the robot can earn.

This solution runs in O(n) time, where n is the number of houses, and O(n) space due to the additional `dp` array used to store interim results. This is efficient for this problem and should perform well for larger inputs within the problem's constraints.