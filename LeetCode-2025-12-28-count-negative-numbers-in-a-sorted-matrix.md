# LeetCode Daily – 2025-12-28

## 🧠 Problem #1351 – **Count Negative Numbers in a Sorted Matrix**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix)

---

### 📝 Problem Description

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 
Example 1:


Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.


Example 2:


Input: grid = [[3,2],[1,0]]
Output: 0


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 100
	-100 <= grid[i][j] <= 100


 
Follow up: Could you find an O(n + m) solution?

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the problem "Count Negative Numbers in a Sorted Matrix" step-by-step.

### Problem Explanation

You are given a matrix that is sorted both row-wise and column-wise. Your task is to count how many numbers are negative in the matrix.

### Approach

Since the matrix is sorted, we can leverage this property to efficiently count the negative numbers. The idea is to traverse the matrix starting from the bottom-left corner:

1. Start from the bottom-left cell.
2. If the current number is negative, all numbers above it in the same column are also negative (because the matrix is sorted). Thus, you can count all those numbers and move one column to the right.
3. If the current number is non-negative, move one row up since all numbers in that row to the right will also be non-negative.
4. Continue this process until you go out of bounds of the matrix.

### Time Complexity
The time complexity of this approach is O(m + n), where m is the number of rows and n is the number of columns in the matrix. This is much more efficient than checking every element individually (which would take O(m * n) time).

### C++ Code

Here’s the C++ code that implements the above approach:

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int countNegatives(vector<vector<int>>& grid) {
        int count = 0;
        int rows = grid.size();
        if (rows == 0) return count; // Handle empty grid case
        int cols = grid[0].size();
        
        // Start from the bottom left corner of the matrix
        int row = rows - 1;
        int col = 0;
        
        while (row >= 0 && col < cols) {
            if (grid[row][col] < 0) {
                // If the current number is negative, all numbers above it are also negative
                count += (row + 1); // Add all rows above (row + 1 elements)
                col++; // Move to the next column
            } else {
                // If the current number is non-negative, move up
                row--;
            }
        }
        
        return count;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> matrix = {
        {4, 3, 2, -1},
        {3, 2, 1, -1},
        {1, 1, -1, -2},
        {-1, -1, -2, -3}
    };
    
    int result = solution.countNegatives(matrix);
    cout << "Count of negative numbers: " << result << endl; // Output: 8
    return 0;
}
```

### Explanation of the Code

1. **Initialization**: We start by initializing a counter (`count`) to keep track of negative numbers. We get the number of rows and columns in the matrix.
2. **Traversal**: We start from the bottom-left corner of the matrix using two pointers: `row` initialized to the last row and `col` initialized to the first column. 
3. **Checking Conditions**:
   - If the current element (`grid[row][col]`) is negative, we count all the elements from the start of this column to the current row (inclusive). This is calculated as `row + 1`, since rows are 0-indexed. We move to the next column to check for more negatives.
   - If it's non-negative, we move up to the previous row by decrementing `row`.
4. **Returning the Count**: After exiting the while loop, we return the count of negative numbers.

This approach efficiently counts the negative numbers in a sorted 2D matrix while making use of its sorted properties.