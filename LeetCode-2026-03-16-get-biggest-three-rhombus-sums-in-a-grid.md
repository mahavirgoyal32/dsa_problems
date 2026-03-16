# LeetCode Daily – 2026-03-16

## 🧠 Problem #1878 – **Get Biggest Three Rhombus Sums in a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid)

---

### 📝 Problem Description

You are given an m x n integer matrix grid​​​.

A rhombus sum is the sum of the elements that form the border of a regular rhombus shape in grid​​​. The rhombus must have the shape of a square rotated 45 degrees with each of the corners centered in a grid cell. Below is an image of four valid rhombus shapes with the corresponding colored cells that should be included in each rhombus sum:

Note that the rhombus can have an area of 0, which is depicted by the purple rhombus in the bottom right corner.

Return the biggest three distinct rhombus sums in the grid in descending order. If there are less than three distinct values, return all of them.

 
Example 1:


Input: grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]
Output: [228,216,211]
Explanation: The rhombus shapes for the three biggest distinct rhombus sums are depicted above.
- Blue: 20 + 3 + 200 + 5 = 228
- Red: 200 + 2 + 10 + 4 = 216
- Green: 5 + 200 + 4 + 2 = 211


Example 2:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: [20,9,8]
Explanation: The rhombus shapes for the three biggest distinct rhombus sums are depicted above.
- Blue: 4 + 2 + 6 + 8 = 20
- Red: 9 (area 0 rhombus in the bottom right corner)
- Green: 8 (area 0 rhombus in the bottom middle)


Example 3:


Input: grid = [[7,7,7]]
Output: [7]
Explanation: All three possible rhombus sums are the same, so return [7].


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 50
	1 <= grid[i][j] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Get Biggest Three Rhombus Sums in a Grid," we need to compute the sums of all possible rhombus shapes in a given grid and return the three largest unique sums.

### Problem Explanation
1. **Rhombus Definition**: A rhombus in our case can be defined by a center point, an optional size that determines how many layers of diamonds can be formed around that center point.
2. The rhombus can be formed with varying sizes from the center, with the minimum size being 1 (just the center cell itself) up to a maximum where we cannot go out of the grid bounds.
3. **Overlay of Diamonds**: For a rhombus of size `k` centered at `(r, c)`, the points included can be determined by the pattern that expands outward. 

To find all unique sums, we:
- Iterate over each cell in the grid as a potential center for rhombuses.
- From each center, calculate the sums for rhombuses of size 1 up to the maximum possible size constrained by the edges of the grid.
  
### Algorithm Steps
1. Iterate through each cell in the grid.
2. For each cell, calculate rhombus sums for sizes from 1 to the maximum size that fits in the grid.
3. Store sums in a set to ensure uniqueness.
4. Extract the largest three unique sums.

### Implementation in C++

Here's how this can be implemented in C++:

```cpp
#include <iostream>
#include <vector>
#include <set>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> getBiggestThree(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        set<int> sums; // To store unique rhombus sums

        // Function to get rhombus sum centered at (r, c) with size k
        auto rhombusSum = [&](int r, int c, int k) {
            int sum = grid[r][c]; // Start with the center
            // Calculate the layers of the rhombus
            for (int i = 1; i <= k; i++) {
                // The number of cells in the i-th layer
                int top_row = r - i;
                int bottom_row = r + i;
                if (top_row >= 0) {
                    // Left diagonal
                    if (c - i >= 0) sum += grid[top_row][c - i];
                    // Right diagonal
                    if (c + i < cols) sum += grid[top_row][c + i];
                }
                if (bottom_row < rows) {
                    // Left diagonal
                    if (c - i >= 0) sum += grid[bottom_row][c - i];
                    // Right diagonal
                    if (c + i < cols) sum += grid[bottom_row][c + i];
                }
            }
            return sum;
        };

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                // Check maximum k
                int max_k = min(min(rows - r, r + 1), min(cols - c, c + 1)) - 1;
                for (int k = 0; k <= max_k; k++) {
                    sums.insert(rhombusSum(r, c, k));
                }
            }
        }

        // Store the top 3 sums
        vector<int> result(sums.begin(), sums.end());
        if (result.size() > 3) {
            result.resize(3);
        }
        
        // Return the result in descending order
        sort(result.rbegin(), result.rend());
        return result;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> grid = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    vector<int> result = sol.getBiggestThree(grid);
    
    for (int sum : result) {
        cout << sum << " ";
    }
    return 0;
}
```

### Explanation of the Code:
- We define a function `rhombusSum` that calculates the sum of elements in a rhombus for a given center and size using straightforward iteration over the possible positions.
- We use a set to store these sums, ensuring they are unique.
- After collecting all sums, we sort and select the top 3 sums before returning them.
- Finally, we test the functionality with a demo main function.

### Time Complexity
The algorithm has a complexity of approximately O(n * m * k) for n rows and m columns in the grid, with k being the max size of the rhombus we can build from the center. The space complexity is O(u) where u is the number of unique sums stored.