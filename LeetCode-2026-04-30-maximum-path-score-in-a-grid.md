# LeetCode Daily – 2026-04-30

## 🧠 Problem #3742 – **Maximum Path Score in a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-path-score-in-a-grid)

---

### 📝 Problem Description

You are given an m x n grid where each cell contains one of the values 0, 1, or 2. You are also given an integer k.

You start from the top-left corner (0, 0) and want to reach the bottom-right corner (m - 1, n - 1) by moving only right or down.

Each cell contributes a specific score and incurs an associated cost, according to their cell values:


	0: adds 0 to your score and costs 0.
	1: adds 1 to your score and costs 1.
	2: adds 2 to your score and costs 1. ​​​​​​​


Return the maximum score achievable without exceeding a total cost of k, or -1 if no valid path exists.

Note: If you reach the last cell but the total cost exceeds k, the path is invalid.

 
Example 1:


Input: grid = [[0, 1],[2, 0]], k = 1

Output: 2

Explanation:​​​​​​​

The optimal path is:


	
		
			Cell
			grid[i][j]
			Score
			Total
			Score
			Cost
			Total
			Cost
		
	
	
		
			(0, 0)
			0
			0
			0
			0
			0
		
		
			(1, 0)
			2
			2
			2
			1
			1
		
		
			(1, 1)
			0
			0
			2
			0
			1
		
	


Thus, the maximum possible score is 2.


Example 2:


Input: grid = [[0, 1],[1, 2]], k = 1

Output: -1

Explanation:

There is no path that reaches cell (1, 1)​​​​​​​ without exceeding cost k. Thus, the answer is -1.


 
Constraints:


	1 <= m, n <= 200
	0 <= k <= 103​​​​​​​
	​​​​​​​grid[0][0] == 0
	0 <= grid[i][j] <= 2

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem titled "Maximum Path Score in a Grid." 

### Problem Summary

Given an `m x n` grid, where each cell in the grid contains a score of traversing that cell. You can only move either down or right from a cell. The goal is to find the maximum path score from the top-left corner to the bottom-right corner of the grid. The maximum path score is defined as the sum of the values of all the cells visited.

### Approach

1. **Dynamic Programming**: We can utilize a dynamic programming (DP) approach to solve this problem. We'll create a `dp` table (2D vector) where `dp[i][j]` will hold the maximum path score to reach cell (i, j).

2. **Initialization**: The starting point `dp[0][0]` will be equal to the score of the top-left cell.

3. **Filling the DP Table**: For each cell in the grid:
   - If moving down is possible, update `dp[i][j]` based on `dp[i-1][j]`.
   - If moving right is possible, update `dp[i][j]` based on `dp[i][j-1]`.
   - The value of `dp[i][j]` for each cell will be the cell's score plus the maximum of the scores from the above or left cells.

4. **Returning the Result**: The value at `dp[m-1][n-1]` will contain the maximum path score to the bottom-right corner.

### C++ Implementation

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

class Solution {
public:
    long long maximumPathScore(std::vector<std::vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        std::vector<std::vector<long long>> dp(m, std::vector<long long>(n, 0));

        // Initialize the starting point
        dp[0][0] = grid[0][0];

        // Fill the first row
        for (int j = 1; j < n; ++j) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }

        // Fill the first column
        for (int i = 1; i < m; ++i) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }

        // Fill the rest of the DP table
        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                dp[i][j] = grid[i][j] + std::max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        // The maximum path score will be in the bottom-right corner
        return dp[m - 1][n - 1];
    }
};

int main() {
    Solution solution;
    std::vector<std::vector<int>> grid = {
        {5, 3, 2},
        {1, 4, 1},
        {2, 1, 8}
    };
    
    long long result = solution.maximumPathScore(grid);
    std::cout << "Maximum Path Score: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code

1. **Initialization**: We define a DP table `dp` with the same dimensions as the grid to help us store the maximum scores. The starting point is initialized to the top-left cell of the grid.

2. **Filling the DP Table**:
   - We handle the first row and column separately, as they only have one way to be filled (either from the left or from above).
   - For the remaining cells, we compute the maximum score by taking the current cell's score and adding it to the maximum of the scores from the top cell and the left cell.

3. **Final Result**: After filling the DP table, the bottom-right cell `dp[m-1][n-1]` contains the maximum path score from the top-left to the bottom-right corner.

### Complexity

- **Time Complexity**: O(m * n), where m is the number of rows and n is the number of columns in the grid. This complexity arises from traversing each cell of the grid once.
- **Space Complexity**: O(m * n) for the DP table, but this can be reduced to O(n) by using a 1D DP array if storage optimization is necessary. However, we kept it as a 2D array for simplicity in this implementation.

This solution is efficient and straightforward, making it suitable for handling the problem constraints.