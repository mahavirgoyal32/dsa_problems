# LeetCode Daily – 2026-03-20

## 🧠 Problem #3567 – **Minimum Absolute Difference in Sliding Submatrix**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix)

---

### 📝 Problem Description

You are given an m x n integer matrix grid and an integer k.

For every contiguous k x k submatrix of grid, compute the minimum absolute difference between any two distinct values within that submatrix.

Return a 2D array ans of size (m - k + 1) x (n - k + 1), where ans[i][j] is the minimum absolute difference in the submatrix whose top-left corner is (i, j) in grid.

Note: If all elements in the submatrix have the same value, the answer will be 0.
A submatrix (x1, y1, x2, y2) is a matrix that is formed by choosing all cells matrix[x][y] where x1 <= x <= x2 and y1 <= y <= y2.
 
Example 1:


Input: grid = [[1,8],[3,-2]], k = 2

Output: [[2]]

Explanation:


	There is only one possible k x k submatrix: [[1, 8], [3, -2]].
	Distinct values in the submatrix are [1, 8, 3, -2].
	The minimum absolute difference in the submatrix is |1 - 3| = 2. Thus, the answer is [[2]].



Example 2:


Input: grid = [[3,-1]], k = 1

Output: [[0,0]]

Explanation:


	Both k x k submatrix has only one distinct element.
	Thus, the answer is [[0, 0]].



Example 3:


Input: grid = [[1,-2,3],[2,3,5]], k = 2

Output: [[1,2]]

Explanation:


	There are two possible k &times; k submatrix:

	
		Starting at (0, 0): [[1, -2], [2, 3]].

		
			Distinct values in the submatrix are [1, -2, 2, 3].
			The minimum absolute difference in the submatrix is |1 - 2| = 1.
		
		
		Starting at (0, 1): [[-2, 3], [3, 5]].
		
			Distinct values in the submatrix are [-2, 3, 5].
			The minimum absolute difference in the submatrix is |3 - 5| = 2.
		
		
	
	
	Thus, the answer is [[1, 2]].



 
Constraints:


	1 <= m == grid.length <= 30
	1 <= n == grid[i].length <= 30
	-105 <= grid[i][j] <= 105
	1 <= k <= min(m, n)

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the minimum absolute difference of any two elements in a sliding submatrix, we can follow these main steps:

1. **Sliding Window Mechanism**: We will use a sliding window of size `k x k` to examine submatrices in our matrix `mat`. We will slide this window across the matrix from the top-left corner to the bottom-right corner.

2. **Data Structure for Storage**: To efficiently manage the elements in the current submatrix and to compute the minimum absolute difference, we can use a data structure that allows quick access and insertion, such as a multiset (which is available in C++ STL).

3. **Calculating the Minimum Absolute Difference**: For each newly added element in the multiset, we will compute the absolute differences with the current elements in the multiset.

### Step-by-Step Implementation

Here’s how we can implement the solution in C++.

```cpp
#include <vector>
#include <set>
#include <cmath>
#include <limits>
using namespace std;

class Solution {
public:
    int minimumAbsDifference(vector<vector<int>>& mat, int k) {
        int rows = mat.size();
        int cols = mat[0].size();
        int minDiff = INT_MAX;

        // This will hold the current elements in the sliding window
        multiset<int> window;

        // Initially populate the multiset with the first kxk submatrix
        for (int i = 0; i < k; ++i) {
            for (int j = 0; j < k; ++j) {
                window.insert(mat[i][j]);
            }
        }

        // A helper function to update the minDiff based on the current window
        auto updateMinDiff = [&]() {
            if (window.size() < 2) return;
            for (auto it = window.begin(); it != prev(window.end()); ++it) {
                minDiff = min(minDiff, abs(*it - *next(it)));
            }
        };

        // Initial calculation
        updateMinDiff();

        for (int startRow = 0; startRow <= rows - k; ++startRow) {
            for (int startCol = 0; startCol <= cols - k; ++startCol) {
                if (startRow != 0 || startCol != 0) {
                    // Remove the top-left element of the previous sliding window
                    for (int i = startRow - 1; i < startRow + k - 1; ++i) {
                        window.erase(window.find(mat[i][startCol]));
                    }
                    // Remove the bottom-right element of the previous sliding window
                    if (startCol != 0) {
                        window.erase(window.find(mat[startRow + k - 1][startCol - 1]));
                    }

                    // Add the new elements that enter the window
                    for (int i = startRow; i < startRow + k; ++i) {
                        window.insert(mat[i][startCol + k - 1]); // right border of the new window
                    }
                    for (int j = startCol; j < startCol + k; ++j) {
                        if (startRow == 0) { // only add top border of the new window if it's the top row
                            window.insert(mat[startRow + k - 1][j]); // bottom border of the new window
                        }
                    }
                }

                // Update the minimum absolute difference
                updateMinDiff();
            }
        }
        
        return minDiff;
    }
};
```

### Explanation

1. **Initialization**: We create a `multiset`, `window`, to store elements of the first `k x k` submatrix and fill it.

2. **Sliding Window Logic**:
   - For each submatrix starting position `(startRow, startCol)`, if it's not the first submatrix, we adjust our `window` by removing the elements that slide out of the matrix and adding those that come into the matrix.

3. **Calculating Minimum Difference**: We define the `updateMinDiff` function that iterates over the current elements in `window` to find minimum absolute differences.

4. **Iterate**: We iterate over all possible starting positions for the `k x k` windows and update our minimum difference.

5. **Return Result**: Finally, we return the minimum absolute difference found.

### Time Complexity
The above implementation runs in `O(N * M * (k^2 * log(k)))` in the worst case where `N` and `M` are the dimensions of the matrix, and it depends on how many times we keep inserting and removing elements from the multiset. 

However, overall the algorithm is efficient for moderate `k` values, and it effectively handles the sliding window problems using a sorted structure.