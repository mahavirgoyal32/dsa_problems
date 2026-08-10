# LeetCode Daily – 2026-08-10

## 🧠 Problem #1510 – **Stone Game IV**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game-iv)

---

### 📝 Problem Description

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there are n stones in a pile. On each player&#39;s turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.

Also, if a player cannot make a move, he/she loses the game.

Given a positive integer n, return true if and only if Alice wins the game otherwise return false, assuming both players play optimally.

 
Example 1:


Input: n = 1
Output: true
Explanation: Alice can remove 1 stone winning the game because Bob doesn&#39;t have any moves.

Example 2:


Input: n = 2
Output: false
Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).


Example 3:


Input: n = 4
Output: true
Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).


 
Constraints:


	1 <= n <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Stone Game IV" from LeetCode is a dynamic programming problem that requires finding out if starting first leads to a win in a game involving stones and possible moves. Let's break down the problem and solve it step by step.

### Problem Description:

You are playing a game with `n` stones. On your turn, you can remove any square number of stones (1, 4, 9, 16, etc.) from the pile. The player who cannot make a move (i.e., when there are no stones left) loses the game. Your task is to determine if the first player can always win given `n` stones.

### Approach:

1. **Dynamic Programming**: We will use a dynamic programming (DP) array where `dp[i]` indicates whether the player whose turn it is can win with `i` stones left.
  
2. **Base Case**: 
   - If there are 0 stones left (`dp[0]`), the current player loses (thus `dp[0] = false`).

3. **Transition**: For every stone count from 1 to n:
   - The player can win if there exists a square number `k` such that upon removing `k*k` stones, the opponent is left in a losing position:
     ```cpp
     dp[i] = dp[i - k*k] is false for some k such that k*k <= i
     ```

4. **Optimization**: You will need to iterate through all possible square numbers less than or equal to `i` for each `i` to update the DP array.

### C++ Implementation:

Here's how the implementation looks in C++:

```cpp
class Solution {
public:
    bool winnerSquareGame(int n) {
        // DP array, initialized to false
        vector<bool> dp(n + 1, false);
        
        // Loop through all stone counts from 1 to n
        for (int i = 1; i <= n; ++i) {
            // Check all square numbers
            for (int j = 1; j * j <= i; ++j) {
                int square = j * j; // Calculate the square
                
                // If by taking 'square' stones, the opponent is in a losing position
                if (!dp[i - square]) {
                    dp[i] = true; // We can win from this position
                    break; // No need to check further squares
                }
            }
        }
        
        // The result for n stones
        return dp[n];
    }
};
```

### Explanation:

1. **Initialization**: We create a vector `dp` with length `n + 1` initialized to `false`, meaning no positions are won yet.

2. **Filling DP Array**:
   - For each possible number of stones from 1 to `n`, we check each possible square number that can be removed.
   - If removing a square number leads the opponent to a losing state (`!dp[i - square]`), we set `dp[i]` to `true` and break out of the inner loop since we found that the current player can win starting with `i` stones.

3. **Result**: Finally, we return `dp[n]`, which indicates whether the player can win with `n` stones.

### Complexity:
- **Time Complexity**: O(n * sqrt(n)), because for each of the `n` states, we might check all perfect squares up to `n`.
- **Space Complexity**: O(n), which is the space used by the DP array.

This C++ solution effectively determines whether the first player has a winning strategy given the number of stones.