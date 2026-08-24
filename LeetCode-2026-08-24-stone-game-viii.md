# LeetCode Daily – 2026-08-24

## 🧠 Problem #1872 – **Stone Game VIII**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game-viii)

---

### 📝 Problem Description

Alice and Bob take turns playing a game, with Alice starting first.

There are n stones arranged in a row. On each player&#39;s turn, while the number of stones is more than one, they will do the following:


	Choose an integer x > 1, and remove the leftmost x stones from the row.
	Add the sum of the removed stones&#39; values to the player&#39;s score.
	Place a new stone, whose value is equal to that sum, on the left side of the row.


The game stops when only one stone is left in the row.

The score difference between Alice and Bob is (Alice&#39;s score - Bob&#39;s score). Alice&#39;s goal is to maximize the score difference, and Bob&#39;s goal is the minimize the score difference.

Given an integer array stones of length n where stones[i] represents the value of the ith stone from the left, return the score difference between Alice and Bob if they both play optimally.

 
Example 1:


Input: stones = [-1,2,-3,4,-5]
Output: 5
Explanation:
- Alice removes the first 4 stones, adds (-1) + 2 + (-3) + 4 = 2 to her score, and places a stone of
  value 2 on the left. stones = [2,-5].
- Bob removes the first 2 stones, adds 2 + (-5) = -3 to his score, and places a stone of value -3 on
  the left. stones = [-3].
The difference between their scores is 2 - (-3) = 5.


Example 2:


Input: stones = [7,-6,5,10,5,-2,-6]
Output: 13
Explanation:
- Alice removes all stones, adds 7 + (-6) + 5 + 10 + 5 + (-2) + (-6) = 13 to her score, and places a
  stone of value 13 on the left. stones = [13].
The difference between their scores is 13 - 0 = 13.


Example 3:


Input: stones = [-10,-12]
Output: -22
Explanation:
- Alice can only make one move, which is to remove both stones. She adds (-10) + (-12) = -22 to her
  score and places a stone of value -22 on the left. stones = [-22].
The difference between their scores is (-22) - 0 = -22.


 
Constraints:


	n == stones.length
	2 <= n <= 105
	-104 <= stones[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The Stone Game VIII problem involves a simulation of a game where players can remove stones from an array, and you're tasked with determining the maximum score that Alice can achieve if both players play optimally. Here's how the problem can be formulated and solved in C++.

### Problem Understanding

You are given an array `stones` which contains positive integers representing the "value" of each position. Alice starts the game, and she has two options:

1. Remove stones from the beginning of the array.
2. Remove stones from the end of the array.

After removing a stone (or stones), the sum of the remaining stones will be accumulated to Alice's score. The goal is to maximize Alice's score after all stones are considered.

### Key Observations

1. Since Alice wants to maximize her score and Bob (the opponent) will try to minimize it:
   - After Alice removes stones from either end, Bob will also choose his move optimally.
   
2. After removing any number of stones from the beginning, Alice will subsequently deal with the remaining stones, which can result in a simple max decision based on the current total sum.

3. We can compute the prefix sum of the stones to easily derive the remaining stones' sum after a particular index is removed.

### Dynamic Programming Approach

1. We will keep track of the current total sum of stones as we start from the end of the array and move backwards.
2. We'll also track a potential score that Alice can achieve.
3. As we iterate backward through the list:
   - We update the current total sum.
   - For each index (from n-1 to 1), we also compute the maximum score Alice can achieve by considering the choices available depending on how many stones are removed.

### Implementation in C++

Here’s how you can implement the above logic in C++:

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

class Solution {
public:
    int stoneGameVIII(std::vector<int>& stones) {
        int n = stones.size();
        // Calculate prefix sums
        for (int i = 1; i < n; ++i) {
            stones[i] += stones[i - 1];
        }
        
        // Alice's maximum score starts from the last element
        int maxScore = stones[n - 1]; // score if Alice chooses all stones
        
        // Iterate from the second last stone to the first stone
        for (int i = n - 2; i >= 1; --i) {
            // Update the maximum score based on the prefix sums
            maxScore = std::max(maxScore, stones[i] - maxScore);
        }
        
        return maxScore;
    }
};

// Example usage
int main() {
    Solution sol;
    std::vector<int> stones = {7, 5, 8, 8}; // Example input
    std::cout << sol.stoneGameVIII(stones) << std::endl; // Output the result
    return 0;
}
```

### Explanation of the Code

1. **Prefix Sum Calculation**: 
   - The prefix sums are updated by accumulating the values from the start (or initial moving index) of the vector. This helps in calculating the remaining stones’ sum quickly.

2. **Iterating Backwards**: 
   - We start from the second last index because by that point, Alice must decide optimally to maximize her score considering Bob's choices.

3. **Score Calculation**: 
   - At each step, we compute the maximum score Alice can achieve considering all previous prefix sums against the already calculated maximum score.

### Complexity

- Time Complexity: O(n) - We iterate through the array a couple of times.
- Space Complexity: O(1) - We do not use any extra space besides variables for calculations.

This implementation efficiently determines the maximum score for Alice while considering optimal plays from both players.