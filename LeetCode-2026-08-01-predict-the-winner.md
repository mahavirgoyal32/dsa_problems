# LeetCode Daily – 2026-08-01

## 🧠 Problem #486 – **Predict the Winner**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/predict-the-winner)

---

### 📝 Problem Description

You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.

Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

Return true if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return true. You may assume that both players are playing optimally.

 
Example 1:


Input: nums = [1,5,2]
Output: false
Explanation: Initially, player 1 can choose between 1 and 2. 
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
Hence, player 1 will never be the winner and you need to return false.


Example 2:


Input: nums = [1,5,233,7]
Output: true
Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.


 
Constraints:


	1 <= nums.length <= 20
	0 <= nums[i] <= 107

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Predict the Winner" is a classic example of a game theory problem where two players are playing a game with a set of numbers. The players take turns picking numbers from either end of the array, and we want to determine if the player who starts first (Player 1) will win or not, assuming both players play optimally.

### Problem Summary
You are given an integer array `nums` representing scores in a game. Player 1 picks a number first, and players alternate picking numbers from either end of the remaining array. The goal is to determine if Player 1 can score at least as much as Player 2 by the end of the game.

### Key Observations
1. **Optimal Play:** Both players will always make the move that maximizes their score while minimizing their opponent's score.
2. **Dynamic Programming:** We can use a 2D dynamic programming (DP) table to record the maximum score difference Player 1 can achieve over Player 2 given the subarray defined by indices `[i, j]`.

### Dynamic Programming Approach
1. Create a DP table with dimensions `[n][n]` where `n` is the length of `nums`.
2. The entry `dp[i][j]` will represent the maximum score Player 1 can achieve over Player 2 when considering the subarray `nums[i]` to `nums[j]`.
3. If Player 1 picks `nums[i]`, then the score will be `nums[i]` plus the difference of scores from the range `nums[i+1]` to `nums[j]` (which becomes Player 2's turn). 
4. If Player 1 picks `nums[j]`, a similar calculation occurs.
5. We will fill this DP table in a bottom-up manner, starting from the smallest subarrays (single elements) to the full array.
6. Finally, we check if `dp[0][n-1] >= 0` to determine if Player 1 can win.

### C++ Implementation
Here is the C++ code implementing the above logic:

```cpp
#include <vector>
#include <iostream>

using namespace std;

bool PredictTheWinner(vector<int>& nums) {
    int n = nums.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    
    // Base case: when the subarray length is 1 (i == j)
    for (int i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    // Fill the dp table for subarrays of length 2 to n
    for (int length = 2; length <= n; length++) {
        for (int i = 0; i <= n - length; i++) {
            int j = i + length - 1; // j is the end index of the current subarray
            // If player chooses nums[i], we subtract the score of the optimal response
            // If player chooses nums[j], we do similarly
            dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    // If dp[0][n-1] is non-negative, Player 1 can at least tie
    return dp[0][n - 1] >= 0;
}

int main() {
    vector<int> nums = {1, 5, 2};
    cout << (PredictTheWinner(nums) ? "Player 1 can win!" : "Player 2 can win!") << endl;
    return 0;
}
```

### Explanation of the Code
1. **Initialization of DP Table:** A 2D vector `dp` is initialized where `dp[i][i]` is set to `nums[i]` since if there's only one choice, Player 1 can take that score.
2. **Filling the Table:** We iterate over all possible lengths of subarrays from 2 to `n`:
   - For each starting index `i`, calculate the end index `j` based on the chosen length of the subarray.
   - Compute the optimal scores based on whether Player 1 picks from the left end (`nums[i]`) or the right end (`nums[j]`).
3. **Final Check:** After populating the DP table, we check the score difference for the full range (from `0` to `n-1`). If `dp[0][n-1]` is greater than or equal to `0`, Player 1 can win, otherwise Player 2 will win.

This approach assures that we evaluate all possible actions of both players and optimally select the strategy yields the score difference needed for a win or tie. The running time of this solution is O(n^2) due to the nested loops filling the DP table.