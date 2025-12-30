# LeetCode Daily – 2025-12-30

## 🧠 Problem #840 – **Magic Squares In Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/magic-squares-in-grid)

---

### 📝 Problem Description

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.

 
Example 1:


Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:

while this one is not:

In total, there is only one magic square inside the given grid.


Example 2:


Input: grid = [[8]]
Output: 0


 
Constraints:


	row == grid.length
	col == grid[i].length
	1 <= row, col <= 10
	0 <= grid[i][j] <= 15

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the problem "Magic Squares in Grid" from LeetCode, and then I'll provide a C++ solution along with an explanation.

### Problem Explanation

A **magic square** is a 3x3 grid where the sum of each row, column, and both main diagonals is the same. For a standard 3x3 magic square of distinct numbers from 1 to 9, that magic sum is 15.

The task is to find all 3x3 sub-grids in a larger grid (of size m x n) and count how many of these sub-grids are magic squares.

### Steps to Approach the Problem

1. **Input Grid Dimensions**: Check if the grid dimensions are large enough to form at least one 3x3 grid (i.e., both dimensions must be at least 3).
  
2. **Extract 3x3 Sub-Grids**: Loop over the grid to extract every possible 3x3 sub-grid.

3. **Check Each Sub-Grid for Magic Square Properties**:
    - Ensure that the values in the grid are distinct and lie within the range 1 to 9.
    - Check that the sums of each row, each column, and the two diagonals all equal 15.
    
4. **Count Valid Magic Squares**: Maintain a counter for valid magic squares.

### C++ Solution

Here is the C++ implementation for the problem:

```cpp
#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int count = 0;
        int m = grid.size();
        int n = grid[0].size();
        
        // Check if the grid is large enough to contain any 3x3 squares
        if (m < 3 || n < 3) {
            return 0;
        }

        // Iterate through each possible starting point for a 3x3 square
        for (int i = 0; i <= m - 3; i++) {
            for (int j = 0; j <= n - 3; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }

private:
    bool isMagicSquare(const vector<vector<int>>& grid, int row, int col) {
        unordered_set<int> uniqueNumbers; // To track unique numbers
        int sum = 0; // To track the sum of the first row

        // Collect all numbers and calculate the sums for validation
        for (int i = 0; i < 3; i++) {
            int rowSum = 0;
            for (int j = 0; j < 3; j++) {
                int num = grid[row + i][col + j];
                if (num < 1 || num > 9 || !uniqueNumbers.insert(num).second) { // Check for valid unique numbers
                    return false;
                }
                rowSum += num;
                if (i == 0) { // Store the sum of the first row
                    sum += num;
                }
            }
            // Check if current row sum matches the initial magic sum
            if (rowSum != sum) {
                return false;
            }
        }

        // Check sums of columns
        for (int j = 0; j < 3; j++) {
            int colSum = 0;
            for (int i = 0; i < 3; i++) {
                colSum += grid[row + i][col + j];
            }
            if (colSum != sum) {
                return false;
            }
        }

        // Check sums of the two diagonals
        int diag1 = 0, diag2 = 0;
        for (int i = 0; i < 3; i++) {
            diag1 += grid[row + i][col + i]; // Top-left to bottom-right
            diag2 += grid[row + i][col + (2 - i)]; // Top-right to bottom-left
        }
        
        return (diag1 == sum && diag2 == sum);
    }
};
```

### Explanation of the Code

1. **numMagicSquaresInside Function**:
   - Initializes the count of magic squares found.
   - Loops through every possible starting position for 3x3 magic squares in the input grid. 
   - Calls `isMagicSquare` to check if the extracted sub-grid is a magic square.
  
2. **isMagicSquare Function**:
   - Uses an unordered set to validate that all numbers from 1 to 9 are unique within the 3x3 grid.
   - Computes the sums of all rows, columns, and both diagonals and checks if they all equal 15.
   - Returns `true` if it meets all the conditions of a magic square; otherwise, returns `false`.

### Conclusion

This approach efficiently counts the valid magic squares by ensuring that all conditions are checked properly using loops and a set for uniqueness. The overall time complexity is O(m * n), where m and n are the dimensions of the input grid, making it feasible for reasonably sized grids.