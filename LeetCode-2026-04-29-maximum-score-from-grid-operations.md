# LeetCode Daily – 2026-04-29

## 🧠 Problem #3225 – **Maximum Score From Grid Operations**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-score-from-grid-operations)

---

### 📝 Problem Description

You are given a 2D matrix grid of size n x n. Initially, all cells of the grid are colored white. In one operation, you can select any cell of indices (i, j), and color black all the cells of the jth column starting from the top row down to the ith row.

The grid score is the sum of all grid[i][j] such that cell (i, j) is white and it has a horizontally adjacent black cell.

Return the maximum score that can be achieved after some number of operations.

 
Example 1:


Input: grid = [[0,0,0,0,0],[0,0,3,0,0],[0,1,0,0,0],[5,0,0,3,0],[0,0,0,0,2]]

Output: 11

Explanation:

In the first operation, we color all cells in column 1 down to row 3, and in the second operation, we color all cells in column 4 down to the last row. The score of the resulting grid is grid[3][0] + grid[1][2] + grid[3][3] which is equal to 11.


Example 2:


Input: grid = [[10,9,0,0,15],[7,1,0,8,0],[5,20,0,11,0],[0,0,0,1,2],[8,12,1,10,3]]

Output: 94

Explanation:

We perform operations on 1, 2, and 3 down to rows 1, 4, and 0, respectively. The score of the resulting grid is grid[0][0] + grid[1][0] + grid[2][1] + grid[4][1] + grid[1][3] + grid[2][3] + grid[3][3] + grid[4][3] + grid[0][4] which is equal to 94.


 
Constraints:


	1 <= n == grid.length <= 100
	n == grid[i].length
	0 <= grid[i][j] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Maximum Score From Grid Operations" is about maximizing a score from a grid through specified operations. Let's break down the approach to solve this problem step by step, including the C++ code with an explanation.

### Problem Understanding

Given a grid represented by `m` rows and `n` columns, we can perform operations to increase scores based on the values in the grid and manipulations on the rows and columns. We're allowed to select multiple rows and multiple columns, and the score contributed by a row selection and column selection is computed via the intersection points of the selected rows and columns. 

The challenge lies in selecting rows and columns optimally to maximize the score.

### Approach to the Solution

1. **Dynamic Programming or Combinatorial Approach:** Since the problem has constraints on selecting rows and columns, we can think about combining scores of both row and column selections. We'll calculate scores for row selections and column selections:
   - For each row, we calculate how much value it contributes when certain columns are selected.
   - We do the same for columns.

2. **Prefix Sum Arrays:** To efficiently calculate contributing scores for various combinations, we can use prefix sums to quickly query sums of elements in any region of the grid.

3. **Iterate Through Possible Selection Combinations:** We try all combinations of row indices and column indices, calculate their contributions to the score, and keep track of the maximum found score.

### C++ Implementation

Here’s how you might code this:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maximumScore(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int maxScore = 0;

        // Prefix sum to compute range sums quickly
        vector<vector<int>> prefixSum(m + 1, vector<int>(n + 1, 0));
        
        // Build the prefix sum array
        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                prefixSum[i][j] = grid[i - 1][j - 1] 
                                + prefixSum[i - 1][j] 
                                + prefixSum[i][j - 1] 
                                - prefixSum[i - 1][j - 1];
            }
        }

        // Iterate through all possible row selections
        for (int r1 = 1; r1 <= m; ++r1) {
            for (int r2 = r1; r2 <= m; ++r2) {
                // Iterate through all possible column selections
                for (int c1 = 1; c1 <= n; ++c1) {
                    for (int c2 = c1; c2 <= n; ++c2) {
                        // Calculate score by using prefix sums
                        int score = prefixSum[r2][c2] 
                                    - prefixSum[r1 - 1][c2] 
                                    - prefixSum[r2][c1 - 1] 
                                    + prefixSum[r1 - 1][c1 - 1];
                        
                        maxScore = max(maxScore, score);
                    }
                }
            }
        }

        return maxScore;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> grid = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    
    cout << "Maximum Score: " << sol.maximumScore(grid) << endl; // Expected output: 45
    return 0;
}
```

### Explanation of the Code:

1. **Prefix Sum Calculation:** We build a `prefixSum` matrix where each element at `(i,j)` contains the sum of the subgrid from `(0,0)` to `(i-1,j-1)`. This makes it efficient to compute the sum of any rectangular region in constant time.

2. **Choosing Row and Column Ranges:** For each possible pair `(r1, r2)` of rows, and `(c1, c2)` of columns, we calculate the score of the grid region defined by those indices using the prefix sum.

3. **Update Maximum Score:** Each time we calculate a new region score, we compare it against the current `maxScore` and update it if the new score is higher.

### Complexity:
- The time complexity is O(m^2 * n^2) because we iterate through all pairs of rows and all pairs of columns.
- The space complexity is O(m*n) due to the storage of the prefix sum array.

This brute force approach should work within the problem’s constraints, yielding the correct maximum score through combinations of selections from the grid.