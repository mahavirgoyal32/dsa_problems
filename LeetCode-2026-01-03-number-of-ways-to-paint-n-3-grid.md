# LeetCode Daily – 2026-01-03

## 🧠 Problem #1411 – **Number of Ways to Paint N × 3 Grid**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid)

---

### 📝 Problem Description

You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.

 
Example 1:


Input: n = 1
Output: 12
Explanation: There are 12 possible way to paint the grid as shown.


Example 2:


Input: n = 5000
Output: 30228214


 
Constraints:


	n == grid.length
	1 <= n <= 5000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Number of Ways to Paint N × 3 Grid" asks us to determine how many ways we can paint an \(N \times 3\) grid using three different colors, with certain constraints on how we can paint the cells. Specifically, no two adjacent cells horizontally or vertically can have the same color.

### Problem Breakdown

1. **Grid Structure**: The grid has \(N\) rows and 3 columns.
2. **Colors**: There are 3 colors available.
3. **Constraint**: No two cells in the same column can be of the same color - this applies both to rows and also to columns.

### Dynamic Programming Approach

To solve this problem, we will use a dynamic programming approach to calculate the number of ways to paint the grid while respecting the constraints.

1. **State Definitions**:
    - Let `dp[n][0]` represent the number of ways to paint the first `n` rows of the grid such that the last row is painted in a way that the first column's color is different from the second and third.
    - Let `dp[n][1]` represent the number of ways to paint the first `n` rows of the grid such that the last row is painted in a way that the first column's color is the same as the second but different from the third.
    - Let `dp[n][2]` represent the number of ways to paint the first `n` rows of the grid such that the last row is painted in a way that the first column's color is the same as the third but different from the second.

2. **Transition Functions**:
    - `dp[n][0]`: Last row's first cell has new color (3 options), plus the combinations of the previous row's valid arrangements that fulfills the conditions.
    - `dp[n][1]`: Last row's first cell has color same as second (2 options remain for the row).
    - `dp[n][2]`: Last row's first cell same as the third (2 options remain for the row).

3. **Base Case**:
   For a single row, the number of ways to paint it is simple:
   - 3 options for the first column.
   - 2 options for the second column 
   - 2 options for the third column.

Using the above, we can build the solution iteratively.

### C++ Implementation

Here is the C++ implementation:

```cpp
class Solution {
public:
    int numOfWays(int n) {
        if (n == 0) return 0;

        long long same = 6;  // 3 * 2 (choices of colors for each cell)
        long long diff = 6;  // 3 * 2 (choices for different cells)
        
        for (int i = 2; i <= n; ++i) {
            long long newSame = (2 * diff + 2 * same) % 1000000007; // Add the new configurations resulting from previous state 
            long long newDiff = (2 * same + 2 * diff) % 1000000007; // Add the new configurations resulting from previous state
            
            same = newSame;
            diff = newDiff;
        }

        return (same + diff) % 1000000007;
    }
};
```

### Explanation of the Code

1. We initialize two variables `same` and `diff`, which respectively keep track of the number of valid configurations for the last row.
2. For every new row starting from the second, we compute the new `same` and `diff` based on the previous values.
3. The result is given by the sum of both `same` and `diff` configurations, modulo \(10^9 + 7\).

### Complexity

- **Time Complexity**: \(O(N)\) because we are iterating through each row once.
- **Space Complexity**: \(O(1)\) as we use a constant amount of space regardless of \(N\) due to the iterative calculation. 

This is an efficient solution considering the constraints specified in the problem.