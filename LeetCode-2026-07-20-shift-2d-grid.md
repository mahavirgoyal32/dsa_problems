# LeetCode Daily – 2026-07-20

## 🧠 Problem #1260 – **Shift 2D Grid**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/shift-2d-grid)

---

### 📝 Problem Description

Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:


	Element at grid[i][j] moves to grid[i][j + 1].
	Element at grid[i][n - 1] moves to grid[i + 1][0].
	Element at grid[m - 1][n - 1] moves to grid[0][0].


Return the 2D grid after applying shift operation k times.

 
Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]


Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]


Example 3:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m <= 50
	1 <= n <= 50
	-1000 <= grid[i][j] <= 1000
	0 <= k <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's first understand the problem statement and then see how we can implement a solution in C++.

### Problem Explanation

You are given a 2D grid containing `m` rows and `n` columns (where `m` is the number of rows and `n` is the number of columns), and an integer `k`. Your task is to shift the grid to the right by `k` positions.

The shifting is performed in such a way that:
- Each cell in the grid is moved to the right by `k` positions.
- If a cell moves beyond the last column, it wraps around to the first column of the next row.
- If a cell moves beyond the last row, it wraps around to the first row.

Let's consider an example:

```plaintext
Input: grid = [[1,2,3],
               [4,5,6],
               [7,8,9]], k = 1
Output: [[9,1,2],
         [3,4,5],
         [6,7,8]]
```

### Steps to Solve the Problem

1. **Calculate Total Elements:** Determine the total number of elements in the grid, which is `m * n`.
2. **Effective Shifts:** Since shifting the grid by the total number of elements results in the same grid, we can use `k % (m * n)` to find the effective number of shifts.
3. **Create a New Grid:** Create a new resultant grid that will hold the values after the shift.
4. **Fill New Grid:** Iterate through each cell of the original grid, calculate the position in the new grid, and fill it accordingly.
5. **Return the Result:** After filling, return the new grid.

### C++ Code Implementation

Here's a simple C++ solution that implements the above logic:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {
        int m = grid.size();          // Number of rows
        int n = grid[0].size();       // Number of columns
        vector<vector<int>> newGrid(m, vector<int>(n)); // New grid initialized with zeros
        
        // Total number of elements in the grid
        int totalElements = m * n;
        // Effective shifts required (in case k > total elements)
        k = k % totalElements;

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                // Calculate new position
                int newIndex = (i * n + j + k) % totalElements;
                newGrid[newIndex / n][newIndex % n] = grid[i][j];
            }
        }
        
        return newGrid;
    }
};
```

### Explanation of the Code:
1. **Input Handling:** The function takes a 2D vector `grid` and an integer `k`.
2. **Grid Dimensions:** We first find the number of rows (`m`) and columns (`n`).
3. **New Grid Initialization:** We create a new grid called `newGrid` of the same size as the input grid.
4. **Effective Shifts:** We compute the effective shifts using modulus with the total number of elements.
5. **Position Calculation:** We loop through each element in the original grid, compute its new position in the `newGrid` using `(i * n + j + k) % totalElements` and fill the new grid accordingly.
6. **Return:** Finally, we return the newly created grid.

This solution efficiently shifts the grid and runs in `O(m * n)` time complexity, which is necessary to iterate through each element.