# LeetCode Daily – 2026-01-15

## 🧠 Problem #2943 – **Maximize Area of Square Hole in Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid)

---

### 📝 Problem Description

You are given the two integers, n and m and two integer arrays, hBars and vBars. The grid has n + 2 horizontal and m + 2 vertical bars, creating 1 x 1 unit cells. The bars are indexed starting from 1.

You can remove some of the bars in hBars from horizontal bars and some of the bars in vBars from vertical bars. Note that other bars are fixed and cannot be removed.

Return an integer denoting the maximum area of a square-shaped hole in the grid, after removing some bars (possibly none).

 
Example 1:




Input: n = 2, m = 1, hBars = [2,3], vBars = [2]

Output: 4

Explanation:

The left image shows the initial grid formed by the bars. The horizontal bars are [1,2,3,4], and the vertical bars are [1,2,3].

One way to get the maximum square-shaped hole is by removing horizontal bar 2 and vertical bar 2.


Example 2:




Input: n = 1, m = 1, hBars = [2], vBars = [2]

Output: 4

Explanation:

To get the maximum square-shaped hole, we remove horizontal bar 2 and vertical bar 2.


Example 3:




Input: n = 2, m = 3, hBars = [2,3], vBars = [2,4]

Output: 4

Explanation:

One way to get the maximum square-shaped hole is by removing horizontal bar 3, and vertical bar 4.


 
Constraints:


	1 <= n <= 109
	1 <= m <= 109
	1 <= hBars.length <= 100
	2 <= hBars[i] <= n + 1
	1 <= vBars.length <= 100
	2 <= vBars[i] <= m + 1
	All values in hBars are distinct.
	All values in vBars are distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Maximize Area of Square Hole in Grid" can be approached by analyzing the size of square holes that can be created in a grid, where each cell in the grid can have a certain value indicating if it is filled or empty.

### Problem Understanding and Approach

We are given a binary grid where:
- '0' represents an empty cell.
- '1' represents a filled cell.

The goal is to find the largest square hole (made of '0's) that can be created in this grid.

### Steps to Solve the Problem:

1. **Dynamic Programming Table:** 
   - Use a 2D dynamic programming table `dp` where `dp[i][j]` will represent the size of the largest square whose bottom-right corner is at cell `(i, j)`.

2. **Initialization:**
   - If `grid[i][j]` is '0', then we can potentially form a square here.
   - If `grid[i][j]` is '1', then `dp[i][j]` would be `0` since a square cannot end at a filled cell.

3. **DP Relation:**
   - If `grid[i][j]` is '0', then:
     ```cpp
     dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
     ```
   - This means the size of the square at position `(i, j)` depends on the smallest size of square that can be formed from its top, left, and top-left cells.

4. **Iterate Through the Grid:**
   - Loop through each cell of the grid and update the `dp` table based on the above relation. Keep track of the maximum size of squares found during the iteration.

5. **Result:**
   - The area of the largest square hole can be computed by squaring the maximum size found.

### C++ Implementation

Here is the C++ code implementing the above logic:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maximalSquare(std::vector<std::vector<char>>& grid) {
        if (grid.empty() || grid[0].empty()) return 0;
        
        int m = grid.size(), n = grid[0].size();
        std::vector<std::vector<int>> dp(m, std::vector<int>(n, 0));
        int max_len = 0;

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == '0') {
                    // Only start calculating if we are not at the first row or first column
                    if (i > 0 && j > 0) {
                        dp[i][j] = std::min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]}) + 1;
                    } else {
                        // Edge cases for the first row or column
                        dp[i][j] = 1; // It can always form at least a 1x1 square
                    }
                    // Update the maximal length
                    max_len = std::max(max_len, dp[i][j]);
                }
            }
        }

        // Area of the largest square is max_len squared
        return max_len * max_len;
    }
};
```

### Explanation of the Code:

1. **Initialization:** We check if the grid is empty. We create a 2D vector `dp` of the same size as the grid initialized to zero.

2. **Iterating through the Grid:** Using nested loops, we traverse each cell of the grid. 
   - For every cell containing '0', if it’s not on the first row or column, we calculate the size of the largest square that can be formed ending at that cell. 
   - If it’s on the boundary (first row or column), we simply set it to 1 since it can only form a 1x1 square.

3. **Update Maximum Length:** We keep track of the maximum square length found so far.

4. **Return the Area:** Finally, we return the area of the largest square by squaring the maximum side length found.

This solution runs in O(m * n) time complexity and uses O(m * n) space complexity due to the `dp` table.