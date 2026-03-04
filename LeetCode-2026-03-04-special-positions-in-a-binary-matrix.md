# LeetCode Daily – 2026-03-04

## 🧠 Problem #1582 – **Special Positions in a Binary Matrix**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/special-positions-in-a-binary-matrix)

---

### 📝 Problem Description

Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 
Example 1:


Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.


Example 2:


Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.


 
Constraints:


	m == mat.length
	n == mat[i].length
	1 <= m, n <= 100
	mat[i][j] is either 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let’s tackle the LeetCode problem titled "Special Positions in a Binary Matrix." The problem is defined as follows:

### Problem Statement
Given a `m x n` binary matrix, a position `(i, j)` is called a special position if:
- The value at `(i, j)` is `1`, and
- All the other values in its row (`i`) and its column (`j`) are `0`.

You need to return the count of special positions in the given binary matrix.

### Example
Input:
```
matrix = [[0,0,1], 
          [1,0,0], 
          [0,1,0]]
```
Output:
```
1
```
Explanation: The only special position is `(0, 2)` because it contains `1`, and all other values in that row and column are `0`.

### Approach
1. **Count Rows and Columns:** First, we need to keep track of how many `1`s are present in each row and each column.
2. **Check Conditions:** For each element that is `1`, we check if:
   - The count of `1`s in its respective row is exactly `1`.
   - The count of `1`s in its respective column is exactly `1`.
3. **Count Valid Positions:** We increment our special position count whenever we find a matching position.

### Implementation
Here's how to implement this in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int numSpecial(vector<vector<int>>& mat) {
        int m = mat.size();       // Number of rows
        int n = mat[0].size();    // Number of columns
        vector<int> rowCount(m, 0);
        vector<int> colCount(n, 0);
        
        // Count the number of 1's in each row and column
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (mat[i][j] == 1) {
                    rowCount[i]++;
                    colCount[j]++;
                }
            }
        }
        
        int specialCount = 0;
        
        // Now check for special positions
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                // Check if mat[i][j] is special
                if (mat[i][j] == 1 && rowCount[i] == 1 && colCount[j] == 1) {
                    specialCount++;
                }
            }
        }
        
        return specialCount;
    }
};
```

### Explanation of the Code
- **Line 3-4:** We initialize variables to hold the matrix dimensions and two vectors (`rowCount` and `colCount`) to count `1`s in each row and column respectively.
- **Line 7-12:** We traverse the matrix to populate row counts and column counts. Whenever we encounter a `1`, we increment the corresponding row and column count.
- **Line 15-23:** We check each position in the matrix. If the value is `1` and both the corresponding row and column counts are `1`, we increment the `specialCount`.
- **Line 25:** Return the count of special positions.

### Complexity Analysis
- **Time Complexity:** O(m * n), where `m` is the number of rows and `n` is the number of columns since we go through the entire matrix twice.
- **Space Complexity:** O(m + n) for the row and column count arrays.

This approach efficiently identifies special positions in the binary matrix with a clear separation of concerns in counting and checking conditions.