# LeetCode Daily – 2026-01-18

## 🧠 Problem #1895 – **Largest Magic Square**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/largest-magic-square)

---

### 📝 Problem Description

A k x k magic square is a k x k grid filled with integers such that every row sum, every column sum, and both diagonal sums are all equal. The integers in the magic square do not have to be distinct. Every 1 x 1 grid is trivially a magic square.

Given an m x n integer grid, return the size (i.e., the side length k) of the largest magic square that can be found within this grid.

 
Example 1:


Input: grid = [[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]]
Output: 3
Explanation: The largest magic square has a size of 3.
Every row sum, column sum, and diagonal sum of this magic square is equal to 12.
- Row sums: 5+1+6 = 5+4+3 = 2+7+3 = 12
- Column sums: 5+5+2 = 1+4+7 = 6+3+3 = 12
- Diagonal sums: 5+4+3 = 6+4+2 = 12


Example 2:


Input: grid = [[5,1,3,1],[9,3,3,1],[1,3,3,8]]
Output: 2


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 50
	1 <= grid[i][j] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the "Largest Magic Square" problem step by step in C++.

### Problem Explanation:
A magic square is a square matrix in which the sum of every row, column, and both main diagonals all equal the same number, called the magic constant. The task is to find the size of the largest magic square that can be formed from a given 2D grid of integers.

### Solution Approach:
1. **Brute Force Assessment**: We can start by checking all possible top-left corners for squares of various sizes and calculate their sums. We will begin from the largest possible square and move downwards until we find a magic square.
2. **Sum Calculation**: For each square we check, we calculate the sums of all rows, columns, and diagonals to confirm whether the square is magic.
3. **Optimization**: Early exit if we find a valid magic square, so we do not check smaller sizes unnecessarily.

### Code Implementation:

Here's how we can implement the solution in C++:

```cpp
#include <vector>
#include <iostream>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int largestMagicSquare(vector<vector<int>>& grid) {
        if (grid.empty() || grid[0].empty()) return 0;
        
        int rows = grid.size(), cols = grid[0].size();
        int maxSize = 1;

        // Iterate over all possible sizes of magic squares
        for (int size = 2; size <= min(rows, cols); size++) {
            for (int i = 0; i <= rows - size; i++) {
                for (int j = 0; j <= cols - size; j++) {
                    if (isMagicSquare(grid, i, j, size)) {
                        maxSize = size;
                    }
                }
            }
        }
        return maxSize;
    }

private:
    bool isMagicSquare(vector<vector<int>>& grid, int row, int col, int size) {
        int magicSum = 0;
        // Calculate the sum of the first row
        for (int j = 0; j < size; j++) {
            magicSum += grid[row][col + j];
        }

        // Check sum of all rows
        for (int i = 1; i < size; i++) {
            int sum = 0;
            for (int j = 0; j < size; j++) {
                sum += grid[row + i][col + j];
            }
            if (sum != magicSum) return false;
        }

        // Check sum of all columns
        for (int j = 0; j < size; j++) {
            int sum = 0;
            for (int i = 0; i < size; i++) {
                sum += grid[row + i][col + j];
            }
            if (sum != magicSum) return false;
        }

        // Check the main diagonal
        int diagonalSum1 = 0;
        for (int i = 0; i < size; i++) {
            diagonalSum1 += grid[row + i][col + i];
        }
        if (diagonalSum1 != magicSum) return false;

        // Check the secondary diagonal
        int diagonalSum2 = 0;
        for (int i = 0; i < size; i++) {
            diagonalSum2 += grid[row + i][col + size - 1 - i];
        }
        if (diagonalSum2 != magicSum) return false;

        return true;
    }
};

// Usage Example
int main() {
    Solution solution;
    vector<vector<int>> grid = {
        {7, 14, 15, 16},
        {3, 15, 7, 4},
        {10, 3, 0, 3},
        {4, 8, 15, 1}
    };
    cout << "Largest Magic Square Size: " << solution.largestMagicSquare(grid) << endl;
    return 0;
}
```

### Explanation of the Code:
1. **Main Function** (`largestMagicSquare`):
   - It initializes the size of rows and columns.
   - It then iterates through different possible square sizes starting from 2 up to the smallest dimension of the grid.
   - For each possible top-left corner `(i, j)` of the square, it checks if a magic square exists using the helper function.

2. **Helper Function** (`isMagicSquare`):
   - It calculates the sum of the first row to establish the "magic sum."
   - It checks all the rows to ensure they equal the magic sum.
   - It also checks all columns for the same condition.
   - Finally, it checks both diagonals.

3. If any check fails, it returns false; otherwise, it returns true if the section is a valid magic square.

### Conclusion:
This solution efficiently checks for the largest magic square by employing a systematic search and verification process. The code complexity is manageable for the expected constraints of the LeetCode problem.