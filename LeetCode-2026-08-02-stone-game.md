# LeetCode Daily – 2026-08-02

## 🧠 Problem #877 – **Stone Game**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game)

---

### 📝 Problem Description

Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.

Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.

 
Example 1:


Input: piles = [5,3,4,5]
Output: true
Explanation: 
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.


Example 2:


Input: piles = [3,7,2,3]
Output: true


 
Constraints:


	2 <= piles.length <= 500
	piles.length is even.
	1 <= piles[i] <= 500
	sum(piles[i]) is odd.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's discuss the "Stone Game" problem from LeetCode, providing both the solution and a detailed explanation.

### Problem Description

In the "Stone Game" problem, you and your friend Alex are playing a game with a pile of stones. The pile has `2n` stones, and they are arranged in a row. You can choose to take either the first or the last stone from the row, and your friend does the same with the remaining stones. The goal is to maximize the number of stones you collect. 

You need to determine if you (the first player) can always win, assuming both players play optimally.

### Key Insight

The game boils down to a strategy where, at every turn, the player must choose between two options (first stone or last stone). The critical observation is that the total number of stones is even, and since both players play optimally, the player who goes first will always have a winning strategy. 

This is because:
- If you remove a stone from either end, you will leave an odd number of stones for your opponent, allowing you to always respond optimally to the opponent's choice on their turn.

### Solution

Here's a simple C++ solution to the problem:

```cpp
class Solution {
public:
    bool stoneGame(vector<int>& piles) {
        // Given that the game can always be won by the first player
        // if both play optimally
        return true;
    }
};
```

### Explanation

1. **Input**: We expect a vector of integers called `piles`, which represents the number of stones in each pile. However, the values in `piles` are not necessary for determining the result, as the result will always be `true`.

2. **Output**: The function should return a boolean value, `true` in this case, since the first player can always win.

3. **Optimal Play**: The assumption that both players play optimally means that they will always make the best possible move. The first player can strategically ensure that they end up with more stones than the second player due to the nature of the pile being even.

### Conclusion

This problem is a classic example of a game theory problem where understanding the structure of the game leads to a straightforward solution. The conclusion is quite simple, as the first player has a winning strategy regardless of how stones are played. Hence, the solution is to return `true`.

This concise solution captures both the essence of the problem and leverages logical reasoning rather than extensive computation.