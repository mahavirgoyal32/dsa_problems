# LeetCode Daily – 2026-10-28

## 🧠 Problem #3882 – **Minimum XOR Path in a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-xor-path-in-a-grid)

---

### 📝 Problem Description

You are given a 2D integer array grid of size m * n.

You start at the top-left cell (0, 0) and want to reach the bottom-right cell (m - 1, n - 1).

At each step, you may move either right or down.

The cost of a path is defined as the bitwise XOR of all the values in the cells along that path, including the start and end cells.

Return the minimum possible XOR value among all valid paths from (0, 0) to (m - 1, n - 1).

 
Example 1:


Input: grid = [[1,2],[3,4]]

Output: 6

Explanation:

There are two valid paths:


	(0, 0) &rarr; (0, 1) &rarr; (1, 1) with XOR: 1 XOR 2 XOR 4 = 7
	(0, 0) &rarr; (1, 0) &rarr; (1, 1) with XOR: 1 XOR 3 XOR 4 = 6


The minimum XOR value among all valid paths is 6.


Example 2:


Input: grid = [[6,7],[5,8]]

Output: 9

Explanation:

There are two valid paths:


	(0, 0) &rarr; (0, 1) &rarr; (1, 1) with XOR: 6 XOR 7 XOR 8 = 9
	(0, 0) &rarr; (1, 0) &rarr; (1, 1) with XOR: 6 XOR 5 XOR 8 = 11


The minimum XOR value among all valid paths is 9.


Example 3:


Input: grid = [[2,7,5]]

Output: 0

Explanation:

There is only one valid path:


	(0, 0) &rarr; (0, 1) &rarr; (0, 2) with XOR: 2 XOR 7 XOR 5 = 0


The XOR value of this path is 0, which is the minimum possible.


 
Constraints:


	1 <= m == grid.length <= 1000
	1 <= n == grid[i].length <= 1000
	m * n <= 1000
	0 <= grid[i][j] <= 1023​

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Minimum XOR Path in a Grid" involves finding the path in a grid from the top-left corner to the bottom-right corner such that the XOR of all elements along the path is minimized.

### Problem Explanation
Given an `m x n` grid of integers, we can only move down or right at any point in time. Our goal is to determine the path from the top-left corner `(0, 0)` to the bottom-right corner `(m-1, n-1)` that minimizes the XOR of the elements along the path.

### Key Insights
1. **Dynamic Programming Approach**: We can use dynamic programming to find the minimum XOR for each cell based on the choices from the cells above (if we moved down) and from the cells to the left (if we moved right).
  
2. **XOR Property**: The XOR operation is both associative and commutative, meaning that the order of operations does not matter.

3. **Initialization**: We will initialize a DP array `dp` where `dp[i][j]` holds the minimum XOR value to reach cell `(i, j)`.

### Steps to Solve the Problem
1. Initialize a 2D array `dp` with size `m x n`. Set `dp[0][0]` to the value of the grid at `(0,0)`.
2. Fill in the first row and first column since they can be reached from only one direction: either from the left (first row) or from above (first column).
3. For each cell `(i, j)`, compute the minimum XOR by considering the values from the cells above and from the left.
4. Return the value in `dp[m-1][n-1]` which represents the minimum XOR to reach the bottom-right corner.

### C++ Implementation
Here's how the above steps translate into C++ code:

```cpp
#include <vector>
#include <iostream>
#include <limits.h>

using namespace std;

class Solution {
public:
    int minXorPath(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<int>> dp(m, vector<int>(n, INT_MAX));
        
        // Initialize the starting point
        dp[0][0] = grid[0][0];

        // Fill the first row (can only come from the left)
        for (int j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] ^ grid[0][j];
        }

        // Fill the first column (can only come from above)
        for (int i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] ^ grid[i][0];
        }

        // Fill the rest of the dp table
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = min(dp[i - 1][j] ^ grid[i][j], dp[i][j - 1] ^ grid[i][j]);
            }
        }

        // The answer is the value at the bottom-right corner
        return dp[m - 1][n - 1];
    }
};

int main() {
    Solution sol;
    vector<vector<int>> grid = {
        {0, 1, 2},
        {1, 2, 3},
        {2, 3, 0}
    };
    cout << "Minimum XOR Path: " << sol.minXorPath(grid) << endl;
    return 0;
}
```

### Explanation of Code
1. The `minXorPath` function accepts a 2D grid of integers. It initializes a DP table to store the minimum XOR values for each cell.
2. It sets the starting point `(0, 0)` in the DP table to the value of the grid at that position.
3. It fills in the first row and column with cumulative XOR values.
4. For each cell `(i, j)`, it computes the minimum XOR value by checking the values from the cell above and the cell to the left, and applying the XOR operation.
5. Finally, it returns the value found in the bottom-right corner of the DP table, which represents the minimum XOR path to that cell.

### Conclusion
This solution efficiently computes the minimum XOR path in `O(m * n)` time complexity and also uses `O(m * n)` space for the DP table, which is acceptable for medium-sized grids.