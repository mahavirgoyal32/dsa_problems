# LeetCode Daily – 2026-08-09

## 🧠 Problem #1140 – **Stone Game II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game-ii)

---

### 📝 Problem Description

Alice and Bob continue their games with piles of stones. There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i]. The objective of the game is to end with the most stones.

Alice and Bob take turns, with Alice starting first.

On each player&#39;s turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M. Then, we set M = max(M, X). Initially, M = 1.

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

 
Example 1:


Input: piles = [2,7,9,4,4]

Output: 10

Explanation:


	If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get 2 + 4 + 4 = 10 stones in total.
	If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get 2 + 7 = 9 stones in total.


So we return 10 since it&#39;s larger.


Example 2:


Input: piles = [1,2,3,4,5,100]

Output: 104


 
Constraints:


	1 <= piles.length <= 100
	1 <= piles[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Stone Game II" problem is an interesting problem that revolves around game theory. Here's how you can solve it using dynamic programming in C++. First, I will describe the problem, then walk through the solution step by step.

### Problem Statement

In the Stone Game II, there are `n` piles of stones, each pile `i` has `stones[i]` stones. Two players take turns removing stones, and each player can take between 1 and `2 * m` stones from the current pile, where `m` is the maximum number of stones that the player can take in the previous turn. The goal is for each player to maximize their number of stones.

The task is to determine the maximum number of stones you can get if both players play optimally.

### Approach

To solve this problem, we can use Dynamic Programming (DP). The main idea is to maintain a DP table where `dp[i][m]` represents the maximum number of stones the current player can collect from the `i-th` pile onwards when `m` is the maximum number of stones that can be taken in the previous turn.

Here's the strategy:
1. **Initialization:** Create a prefix sum array to quickly calculate the sum of stones remaining.
2. **Recursive Relation:** For each pile, explore the options of taking `x` stones (where `x` ranges from 1 to `2 * m`) and calculate the resulting stones the opponent would leave.
3. **DP Table Update:** Use the results of these calculations to update the DP table.

### C++ Implementation

Here’s the C++ code to solve the problem along with comments explaining each part.

```cpp
#include <vector>
#include <algorithm>
#include <cstring>

class Solution {
public:
    int stoneGameII(std::vector<int>& piles) {
        int n = piles.size();
        std::vector<int> prefixSum(n + 1, 0);
        
        // Fill the prefix sum array
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + piles[i];
        }
        
        // Dynamic programming table
        // The dimensions are (n + 1) x (n + 1) for dp[i][m]
        std::vector<std::vector<int>> dp(n + 1, std::vector<int>(n + 1, -1));
        
        // Function to compute the maximum stones we can collect
        return dfs(0, 1, piles, prefixSum, dp);
    }
    
    // Helper function for DFS and DP
    int dfs(int i, int m, std::vector<int>& piles, std::vector<int>& prefixSum, std::vector<std::vector<int>>& dp) {
        // Base case: If we're at the last pile, return the sum of remaining stones
        if (i >= piles.size()) {
            return 0;
        }
        
        // Check if already computed
        if (dp[i][m] != -1) {
            return dp[i][m];
        }
        
        int maxStones = 0;
        int sum = 0;
        
        // Explore taking 1 to 2 * m stones
        for (int x = 1; x <= 2 * m && i + x <= piles.size(); x++) {
            sum += piles[i + x - 1]; // piles[i] to piles[i+x-1] are the stones taken
            // The stones left after the opponent's turn is total stones - sum of taken stones
            maxStones = std::max(maxStones, sum + (prefixSum.back() - prefixSum[i + x] - dfs(i + x, std::max(m, x), piles, prefixSum, dp)));
        }
        
        // Save computed result in DP table
        dp[i][m] = maxStones;
        return maxStones;
    }
};
```

### Explanation of the Code

1. **Prefix Sum Calculation:** 
   - We first calculate the prefix sum of the piles, which allows us to quickly calculate the total stones remaining after some are taken.

2. **Dynamic Programming Table:** 
   - `dp[i][m]` is initialized to `-1` to signify that we haven't computed the value yet.

3. **Recursive DFS Function:**
   - The `dfs` function computes the maximum number of stones the current player can collect starting from `i-th` pile with a max of `m` stones that can be taken.
   - We loop through how many stones we can take (from 1 to `2 * m`), update our sum of taken stones, and use the prefix sum to find the remaining stones.
   - The recursive call to `dfs` considers the opponent's potential maximum stones in their turn, which we attempt to minimize.

### Conclusion

This solution efficiently calculates the maximum stones a player can collect while considering optimal plays from both players. The use of dynamic programming combined with prefix sums ensures that we can quickly compute the results while avoiding redundant calculations. The overall complexity is O(n^3) due to the nested loops, which is feasible for the given constraints.