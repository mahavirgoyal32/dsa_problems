# LeetCode Daily – 2026-01-19

## 🧠 Problem #1292 – **Maximum Side Length of a Square with Sum Less than or Equal to Threshold**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold)

---

### 📝 Problem Description

Given a m x n matrix mat and an integer threshold, return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

 
Example 1:


Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
Output: 2
Explanation: The maximum side length of square with sum less than 4 is 2 as shown.


Example 2:


Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
Output: 0


 
Constraints:


	m == mat.length
	n == mat[i].length
	1 <= m, n <= 300
	0 <= mat[i][j] <= 104
	0 <= threshold <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Maximum Side Length of a Square with Sum Less than or Equal to Threshold," we need to find the maximum side length of a square such that the sum of the elements within that square in a given matrix does not exceed a specific threshold.

Here's the step-by-step approach to achieve that:

1. **Understanding the Problem**: You are given a 2D grid and a threshold. You need to determine the maximum side length of a square whose sum of elements is less than or equal to the threshold.

2. **Prefix Sum Array**: To efficiently calculate the sum of elements within any sub-square, we can use a prefix sum array. This allows us to compute the sum of elements in any square region in constant time after an initial O(m*n) preprocessing step, where m is the number of rows and n is the number of columns.

3. **Binary Search for Side Length**: Since we are looking for the maximum side length, we can use binary search over possible side lengths. The minimum side length is 1, and the maximum is limited by the minimum of `m` and `n` (the dimensions of the grid).

4. **Checking Validity of Side Length**: For a mid-value (current side length in binary search) during the search, slide a square of that side length over the grid and check if there exists at least one position where the sum of the elements inside the square is less than or equal to the threshold.

5. **Combine Steps**:
    - Create a prefix sum matrix.
    - Implement the binary search.
    - For each side length being checked, iterate over the possible starting positions in the grid and use the prefix sum array to quickly compute the sum.

Here is the complete C++ code implementing the above logic:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int maxSideLength(vector<vector<int>>& mat, int threshold) {
        int m = mat.size();
        int n = mat[0].size();
        
        // Step 1: Create a prefix sum matrix
        vector<vector<int>> prefixSum(m + 1, vector<int>(n + 1, 0));
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                prefixSum[i][j] = mat[i - 1][j - 1] + prefixSum[i - 1][j] + 
                                   prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
            }
        }
        
        // Step 2: Binary search for the maximum side length
        int left = 1, right = min(m, n), maxSide = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (canFormSquare(prefixSum, mid, threshold)) {
                maxSide = mid; // Found a valid square of side `mid`
                left = mid + 1; // Try for a larger size
            } else {
                right = mid - 1; // Try for a smaller size
            }
        }
        
        return maxSide;
    }

private:
    bool canFormSquare(const vector<vector<int>>& prefixSum, int side, int threshold) {
        int m = prefixSum.size() - 1;
        int n = prefixSum[0].size() - 1;
        
        // Check all possible top-left corners of the square of side `side`
        for (int i = side; i <= m - 1; i++) {
            for (int j = side; j <= n - 1; j++) {
                int sum = prefixSum[i][j] - prefixSum[i - side][j] -
                          prefixSum[i][j - side] + prefixSum[i - side][j - side];
                if (sum <= threshold) {
                    return true;
                }
            }
        }
        return false;
    }
};
```

### Explanation of the Code:
1. **Prefix Sum Calculation (`prefixSum` matrix)**:
   - Each cell `prefixSum[i][j]` contains the sum of all elements in the rectangle from `(0,0)` to `(i-1,j-1)` in the original `mat`. This allows us to compute the sum of any sub-square using the inclusion-exclusion principle.

2. **Binary Search**:
   - We search for the maximum valid square side length between 1 and the minimum dimension of the matrix. 

3. **Can Form Square Check**:
   - For each candidate side length, iterate through possible top-left corners of the square and compute the sum of that square using the prefix sum array. If any square meets the condition of being less than or equal to the threshold, we can potentially increase the side length.

This approach is efficient and runs in O(m * n * log(min(m, n))), where O(m * n) is for creating the prefix sums, and O(m * n) is for checking valid squares multiplied by the log factor for binary search over side lengths.