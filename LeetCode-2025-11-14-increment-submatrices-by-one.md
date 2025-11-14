# LeetCode Daily – 2025-11-14

## 🧠 Problem #2536 – **Increment Submatrices by One**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/increment-submatrices-by-one)

---

### 📝 Problem Description

You are given a positive integer n, indicating that we initially have an n x n 0-indexed integer matrix mat filled with zeroes.

You are also given a 2D integer array query. For each query[i] = [row1i, col1i, row2i, col2i], you should do the following operation:


	Add 1 to every element in the submatrix with the top left corner (row1i, col1i) and the bottom right corner (row2i, col2i). That is, add 1 to mat[x][y] for all row1i <= x <= row2i and col1i <= y <= col2i.


Return the matrix mat after performing every query.

 
Example 1:


Input: n = 3, queries = [[1,1,2,2],[0,0,1,1]]
Output: [[1,1,0],[1,2,1],[0,1,1]]
Explanation: The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
- In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
- In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).


Example 2:


Input: n = 2, queries = [[0,0,1,1]]
Output: [[1,1],[1,1]]
Explanation: The diagram above shows the initial matrix and the matrix after the first query.
- In the first query we add 1 to every element in the matrix.


 
Constraints:


	1 <= n <= 500
	1 <= queries.length <= 104
	0 <= row1i <= row2i < n
	0 <= col1i <= col2i < n

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Increment Submatrices by One" requires us to increment all elements in any submatrix defined by two corners `(row1, col1)` and `(row2, col2)` by 1, and we are to return the final matrix after performing a series of such operations.

### Explanation

To effectively solve this problem, we can use a technique called **difference arrays** or **2D prefix sum**. The major idea is to use an auxiliary matrix to keep track of where increments start and where they should end without needing to iterate over submatrices directly every time.

### Steps to Solve the Problem

1. **Initialize a Result Matrix**: Create a result matrix `result` initialized to zero.
2. **Using Difference Matrix Logic**: For each increment operation on the submatrix defined by two corners `(row1, col1)` and `(row2, col2)`, update the `result` matrix at the following positions:
   - Increment the starting position `(row1, col1)` by `1`.
   - Decrement just after the end of the vertical segment `(row2 + 1, col1)` by `1`, if it's within bounds.
   - Decrement just after the end of the horizontal segment `(row1, col2 + 1)` by `1`, if it's within bounds.
   - Increment one position that is beyond both ends `(row2 + 1, col2 + 1)` by `1`, if it's within bounds. This balances out the previous two decrement operations.
3. **Apply Prefix Sum Technique**: Iterate through the `result` matrix to apply prefix sums, which gives the final incremented values.

### C++ Implementation

Below is the implementation of the above plan in C++:

```cpp
#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> incrementSubmatrices(int n, int m, vector<vector<int>>& ops) {
        // Initialize the result matrix with all zeros
        vector<vector<int>> result(n, vector<int>(m, 0));
        
        // Apply the difference matrix logic
        for (const auto& op : ops) {
            int row1 = op[0], col1 = op[1], row2 = op[2], col2 = op[3];
            result[row1][col1] += 1; // Start increment at (row1, col1)

            if (row2 + 1 < n) result[row2 + 1][col1] -= 1; // End increment at (row2 + 1, col1)
            if (col2 + 1 < m) result[row1][col2 + 1] -= 1; // End increment at (row1, col2 + 1)
            if (row2 + 1 < n && col2 + 1 < m) result[row2 + 1][col2 + 1] += 1; // Balancing out
        }
        
        // Now, we apply the prefix sum on the result matrix
        for (int r = 0; r < n; ++r) {
            for (int c = 0; c < m; ++c) {
                // Update the current cell by propagating values from top and left
                if (r > 0) result[r][c] += result[r - 1][c]; // From the top
                if (c > 0) result[r][c] += result[r][c - 1]; // From the left
                
                // Subtract the value that got added twice (top left)
                if (r > 0 && c > 0) result[r][c] -= result[r - 1][c - 1]; 
            }
        }

        return result;
    }
};
```

### Explanation of the Code

- The function `incrementSubmatrices` takes dimensions `n` and `m` and a list of operations `ops`.
- For each operation in `ops`, it marks the beginning and the logical ends of increments in the `result` matrix.
- Then, we iterate through each cell in the result matrix and calculate the final value using the prefix sum method. This involves adding the values from the top and the left, while ensuring we do not double-count the top-left cell.

This approach allows us to efficiently process multiple operations in `O(n * m)` time complexity, significantly reducing the time compared to directly iterating over submatrices.