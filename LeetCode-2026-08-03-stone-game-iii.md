# LeetCode Daily – 2026-08-03

## 🧠 Problem #1406 – **Stone Game III**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game-iii)

---

### 📝 Problem Description

Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.

Alice and Bob take turns, with Alice starting first. On each player&#39;s turn, that player can take 1, 2, or 3 stones from the first remaining stones in the row.

The score of each player is the sum of the values of the stones taken. The score of each player is 0 initially.

The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken.

Assume Alice and Bob play optimally.

Return &quot;Alice&quot; if Alice will win, &quot;Bob&quot; if Bob will win, or &quot;Tie&quot; if they will end the game with the same score.

 
Example 1:


Input: stoneValue = [1,2,3,7]
Output: &quot;Bob&quot;
Explanation: Alice will always lose. Her best move will be to take three piles and the score become 6. Now the score of Bob is 7 and Bob wins.


Example 2:


Input: stoneValue = [1,2,3,-9]
Output: &quot;Alice&quot;
Explanation: Alice must choose all the three piles at the first move to win and leave Bob with negative score.
If Alice chooses one pile her score will be 1 and the next move Bob&#39;s score becomes 5. In the next move, Alice will take the pile with value = -9 and lose.
If Alice chooses two piles her score will be 3 and the next move Bob&#39;s score becomes 3. In the next move, Alice will take the pile with value = -9 and also lose.
Remember that both play optimally so here Alice will choose the scenario that makes her win.


Example 3:


Input: stoneValue = [1,2,3,6]
Output: &quot;Tie&quot;
Explanation: Alice cannot win this game. She can end the game in a draw if she decided to choose all the first three piles, otherwise she will lose.


 
Constraints:


	1 <= stoneValue.length <= 5 * 104
	-1000 <= stoneValue[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the "Stone Game III" problem from LeetCode and explain the solution step by step.

### Problem Overview

In this problem, you are given an array of integers `stoneValue`, where `stoneValue[i]` represents the value of the stones in index `i`. Two players take turns to pick stones, where in each turn, a player can pick between 1 to 3 stones. The goal is to maximize the score of the player who starts the turn.

You need to determine whether the first player can win the game and if so, the required maximum score difference from the second player.

### Solution Outline

To solve this problem, we will use dynamic programming (DP). Here's a step-by-step explanation of the approach:

1. **State Definition**:
   - Let `dp[i]` represent the maximum score difference the current player can achieve over the opponent, starting from stone index `i`.

2. **Recurrence Relation**:
   - For each position `i`, the current player can take between 1 and 3 stones:
     - If the player takes 1 stone: `stoneValue[i] - dp[i + 1]`
     - If the player takes 2 stones: `stoneValue[i] + stoneValue[i + 1] - dp[i + 2]`
     - If the player takes 3 stones: `stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]`
   - Therefore, we can express `dp[i]` as:
     ```cpp
     dp[i] = max(stoneValue[i] - dp[i + 1], 
                 stoneValue[i] + stoneValue[i + 1] - (i + 2 < n ? dp[i + 2] : 0), 
                 stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - (i + 3 < n ? dp[i + 3] : 0))
     ```

3. **Base Case**:
   - If `i` is beyond the length of the array, the score difference is `0`.

4. **Final Result**:
   - After filling the DP table, `dp[0]` will give the maximum score difference that the first player can achieve. If it's greater than `0`, the first player can win.

### C++ Code Implementation

Below is the C++ code implementation of the above approach:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string stoneGameIII(vector<int>& stoneValue) {
        int n = stoneValue.size();
        vector<int> dp(n + 1, 0); // We initialize a dp array of size n + 1.

        // Bottom-Up DP
        for (int i = n - 1; i >= 0; --i) {
            dp[i] = stoneValue[i] - dp[i + 1]; // Picking 1 stone
            if (i + 1 < n) {
                dp[i] = max(dp[i], stoneValue[i] + stoneValue[i + 1] - dp[i + 2]); // Picking 2 stones
            }
            if (i + 2 < n) {
                dp[i] = max(dp[i], stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]); // Picking 3 stones
            }
        }

        // Building up the result
        if (dp[0] > 0) return "Alice"; // First player (Alice) wins
        else if (dp[0] < 0) return "Bob"; // Second player (Bob) wins
        else return "Tie"; // Tie situation
    }
};

// Example Usage
int main() {
    Solution sol;
    vector<int> stoneValue = {1, 2, 3, 7}; // Example Input
    cout << sol.stoneGameIII(stoneValue) << endl; // Output: "Alice"
    return 0;
}
```

### Explanation of the Code:

- We define a vector `dp` of size `n + 1` initialized with zeros to store the maximum score difference starting from each index.
- We iterate backward through the `stoneValue` array to fill up our `dp` states based on the calculated values.
- Finally, we check the result from `dp[0]` to determine if Alice (the first player) wins, loses, or ties the game.

This solution runs in O(n) time complexity and O(n) space complexity, making it efficient for the problem constraints.