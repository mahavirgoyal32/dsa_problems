# LeetCode Daily – 2026-03-17

## 🧠 Problem #1727 – **Largest Submatrix With Rearrangements**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/largest-submatrix-with-rearrangements)

---

### 📝 Problem Description

You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.

Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.

 
Example 1:


Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.


Example 2:


Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.


Example 3:


Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.


 
Constraints:


	m == matrix.length
	n == matrix[i].length
	1 <= m * n <= 105
	matrix[i][j] is either 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Largest Submatrix with Rearrangements" problem is about finding the largest rectangular area of 1s in a binary matrix where we can rearrange the rows. The key idea is to utilize a variant of the "largest rectangle in histogram" approach applied on transformed histogram heights based on the binary matrix rows.

### Explanation:

1. **Transform the Matrix**:
   - We can think of each row of the matrix being able to "fall" down depending on the number of consecutive 1s. For example, if you have a row that is "1 0 1 1", the maximum number of consecutive 1s ending at that row determines the potential height of a histogram where that row is the base.

2. **Construct the Heights**:
   - For each row in the matrix, construct a `heights` array where `heights[j]` represents the height of 1s in that column up to the current row.

3. **Calculate the Largest Rectangle**:
   - Once you have this `heights` array for each row, you can then sort the `heights` array to calculate the largest rectangle that can be formed with that row being the lowest row of the rectangle.

### C++ Implementation:

Here’s how you can implement this in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int largestSubmatrix(vector<vector<int>>& matrix) {
        if (matrix.empty()) return 0;

        int rows = matrix.size();
        int cols = matrix[0].size();
        vector<vector<int>> heights(rows, vector<int>(cols, 0));

        // Build the heights array
        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < rows; i++) {
                if (matrix[i][j] == 1) {
                    heights[i][j] = (i == 0) ? 1 : heights[i - 1][j] + 1;
                }
            }
        }

        int maxArea = 0;

        // Calculate the maximum area for each row's heights
        for (int i = 0; i < rows; i++) {
            // Sort the heights for the current row
            vector<int> sortedHeights = heights[i];
            sort(sortedHeights.begin(), sortedHeights.end(), greater<int>());

            for (int j = 0; j < cols; j++) {
                if (sortedHeights[j] > 0) {
                    // Area is height * width (width = j + 1)
                    maxArea = max(maxArea, sortedHeights[j] * (j + 1));
                }
            }
        }

        return maxArea;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> matrix = {
        {0, 0, 1, 0},
        {1, 0, 1, 1},
        {1, 1, 1, 1},
        {1, 0, 0, 0}
    };
    int result = sol.largestSubmatrix(matrix);
    cout << "Largest Submatrix Area: " << result << endl;  // Output should be 6
    return 0;
}
```

### Breakdown of the Code:

1. **Input Handling**: Check if the matrix is empty.

2. **Height Calculation**:
   - For each column, while iterating through rows, update the `heights` based on whether the current cell is 1 or 0.

3. **Finding Maximum Area**:
   - For each row's heights, sort the heights in descending order.
   - Calculate the area by multiplying the height (after sorting) with its corresponding index (which represents the width, 1-based).

4. **Output**: Return the maximum area found.

This method efficiently computes the required largest area by leveraging sorting and histogram techniques, and runs in O(rows * cols log(cols)) time, which is effective given the constraints.