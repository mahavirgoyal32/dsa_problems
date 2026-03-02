# LeetCode Daily – 2026-03-02

## 🧠 Problem #1536 – **Minimum Swaps to Arrange a Binary Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid)

---

### 📝 Problem Description

Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and swap them.

A grid is said to be valid if all the cells above the main diagonal are zeros.

Return the minimum number of steps needed to make the grid valid, or -1 if the grid cannot be valid.

The main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n).

 
Example 1:


Input: grid = [[0,0,1],[1,1,0],[1,0,0]]
Output: 3


Example 2:


Input: grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
Output: -1
Explanation: All rows are similar, swaps have no effect on the grid.


Example 3:


Input: grid = [[1,0,0],[1,1,0],[1,1,1]]
Output: 0


 
Constraints:


	n == grid.length == grid[i].length
	1 <= n <= 200
	grid[i][j] is either 0 or 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Swaps to Arrange a Binary Grid," we need to understand that our goal is to convert a given binary grid (a grid containing 0s and 1s) into a configuration where all rows end with as many 0s as necessary to make all columns valid, requiring the minimum number of swaps between adjacent cells.

### Problem Breakdown:
1. **Grid's Structure**: Each row can only be swapped with adjacent rows, and we need to ensure that the number of trailing zeros increases with each row when viewed from the top to the bottom.

2. **Calculate Trailing Zeros**: For each row, record how many trailing zeros each row contains. This helps determine how many swaps might be required.

3. **Count Swaps**: Starting from the first row, our goal is to ensure that for each row, the number of zeros should be at least `i` (where `i` is the row index starting from 0). If it's not, we need to find the nearest row that can satisfy this requirement by swapping.

4. **Implementation Steps**:
    - Compute the number of trailing zeros for each row.
    - For each row from top to bottom, if its trailing zeros are less than what is required, find an eligible row that can be swapped down and perform the swap while counting the number of swaps.

### Implementation in C++:

Here’s the C++ code that follows this logic:

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int minSwaps(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<int> trailingZeros(n);
        
        // Calculate trailing zeros for each row
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = n - 1; j >= 0; j--) {
                if (grid[i][j] == 0) {
                    count++;
                } else {
                    break;
                }
            }
            trailingZeros[i] = count;
        }

        int swaps = 0;

        for (int i = 0; i < n; i++) {
            // We need at least `i` zeros in the i-th row
            int requiredZeros = n - i;
            // Look for a row that has at least `requiredZeros`
            int j = i;
            while (j < n && trailingZeros[j] < requiredZeros) {
                j++;
            }
            
            // if no row can satisfy the condition, return -1
            if (j == n) {
                return -1;
            }

            // Move the found row to position i
            for (int k = j; k > i; k--) {
                // swapping rows
                swap(trailingZeros[k], trailingZeros[k - 1]);
                swaps++;
            }
        }

        return swaps;
    }
};
```

### Explanation of the Code:
1. **Count Trailing Zeros**: The first loop calculates how many trailing zeros are there in each row of the grid.

2. **Iterate Rows**: For every row `i`, we check if the number of trailing zeros is enough. We need at least `n - i` zeros in the `i`-th row.

3. **Finding Swaps**: If the current row does not have enough zeros, we look for the nearest row (from `i` onward) that does. Once found, we swap the required row upwards until it reaches the `i-th` position, counting the swaps needed to do this.

4. **Return Value**: If there is no row that can satisfy the condition while iterating, we return `-1`. Otherwise, the count of total swaps is returned.

### Complexity:
- **Time Complexity**: O(n²), where n is the size of the grid. In the worst case, we might have to traverse all the rows for each row in the grid.
- **Space Complexity**: O(n), for storing the number of trailing zeros. 

This solution leverages the structured approach of determining the trailing zeros and then using greedy swaps to achieve the desired configuration.