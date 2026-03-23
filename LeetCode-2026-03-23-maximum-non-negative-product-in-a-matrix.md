# LeetCode Daily – 2026-03-23

## 🧠 Problem #1594 – **Maximum Non Negative Product in a Matrix**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix)

---

### 📝 Problem Description

You are given a m x n matrix grid. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.

Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (m - 1, n - 1), find the path with the maximum non-negative product. The product of a path is the product of all integers in the grid cells visited along the path.

Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative, return -1.

Notice that the modulo is performed after getting the maximum product.

 
Example 1:


Input: grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
Output: -1
Explanation: It is not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.


Example 2:


Input: grid = [[1,-2,1],[1,-2,1],[3,-4,1]]
Output: 8
Explanation: Maximum non-negative product is shown (1 * 1 * -2 * -4 * 1 = 8).


Example 3:


Input: grid = [[1,3],[0,-4]]
Output: 0
Explanation: Maximum non-negative product is shown (1 * 0 * -4 = 0).


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 15
	-4 <= grid[i][j] <= 4

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Non Negative Product in a Matrix" asks us to find the maximum product of a path in a given grid from the top-left cell to the bottom-right cell, while only moving either down or right. The additional constraint is that the product must be non-negative; if the maximum product is negative, we should return -1.

To solve this problem, we can use dynamic programming to keep track of the maximum and minimum products at each cell in the matrix. The reason for maintaining both maximum and minimum products is that a negative number multiplied by a negative number gives a positive product, so when we encounter negative numbers in our path, we need to be aware that their multiplication could yield a higher product in subsequent cells.

### Steps:
1. Create two matrices `maxProduct` and `minProduct` of the same size as the input matrix to store the maximum and minimum products up to each cell, respectively.
2. Initialize the starting point with the value of the matrix.
3. Iterate through each cell in the matrix.
4. For each cell, calculate the maximum and minimum products based on the values from the cell above and the cell to the left.
5. After filling out the matrices, check the value in the bottom-right cell of the `maxProduct` matrix.
6. If it is less than zero, return -1; otherwise, return the value as the result.

### C++ Implementation:
Here is how the solution can be implemented in C++:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxProductPath(std::vector<std::vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        // Since we work with both maximum and minimum products, we define two 2D vectors.
        std::vector<std::vector<long long>> maxProduct(m, std::vector<long long>(n, 0));
        std::vector<std::vector<long long>> minProduct(m, std::vector<long long>(n, 0));
        
        // Initialize the starting point
        maxProduct[0][0] = grid[0][0];
        minProduct[0][0] = grid[0][0];

        // Fill the first row
        for (int j = 1; j < n; ++j) {
            maxProduct[0][j] = maxProduct[0][j - 1] * grid[0][j];
            minProduct[0][j] = minProduct[0][j - 1] * grid[0][j];
        }

        // Fill the first column
        for (int i = 1; i < m; ++i) {
            maxProduct[i][0] = maxProduct[i - 1][0] * grid[i][0];
            minProduct[i][0] = minProduct[i - 1][0] * grid[i][0];
        }

        // Fill the rest of the grid
        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                long long choices[] = {
                    maxProduct[i - 1][j] * grid[i][j],
                    minProduct[i - 1][j] * grid[i][j],
                    maxProduct[i][j - 1] * grid[i][j],
                    minProduct[i][j - 1] * grid[i][j]
                };
                maxProduct[i][j] = *std::max_element(choices, choices + 4);
                minProduct[i][j] = *std::min_element(choices, choices + 4);
            }
        }

        // The result is in the bottom-right corner
        if (maxProduct[m - 1][n - 1] < 0) {
            return -1;
        }

        return maxProduct[m - 1][n - 1] % 1000000007; // Return the result mod 10^9 + 7
    }
};
```

### Explanation:
1. **Input Handling**: The solution begins by defining the grid's dimensions.
2. **Matrix Initialization**: Two matrices (`maxProduct` and `minProduct`) are initialized to store the maximum and minimum products at each grid cell.
3. **Base Case**: The starting cell is initialized with the value of the grid's first element.
4. **Filling Values**:
   - The first row and first column are filled iteratively, as they can only be reached from one direction.
   - The nested loops iterate through the rest of the matrix to calculate maximum and minimum products based on the incoming paths from the top or left cells.
5. **Final Result**: The value in the bottom-right cell is checked; if it's negative, -1 is returned. Otherwise, the result is returned modulo \(10^9 + 7\) to handle large numbers.

By carefully choosing paths and keeping track of both maximum and minimum products, this approach efficiently finds the maximum non-negative product in the matrix.