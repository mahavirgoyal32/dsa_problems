# LeetCode Daily – 2026-03-18

## 🧠 Problem #3070 – **Count Submatrices with Top-Left Element and Sum Less Than k**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k)

---

### 📝 Problem Description

You are given a 0-indexed integer matrix grid and an integer k.

Return the number of submatrices that contain the top-left element of the grid, and have a sum less than or equal to k.

 
Example 1:


Input: grid = [[7,6,3],[6,6,1]], k = 18
Output: 4
Explanation: There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.

Example 2:


Input: grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
Output: 6
Explanation: There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.


 
Constraints:


	m == grid.length 
	n == grid[i].length
	1 <= n, m <= 1000 
	0 <= grid[i][j] <= 1000
	1 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count Submatrices with Top-Left Element and Sum Less Than k" requires you to count how many submatrices have a specific property involving their top-left corner and their summed values. The approach to solve this problem involves understanding the cumulative sums of submatrices and using a combination of nested loops and data structures to efficiently count qualifying submatrices.

### Problem Breakdown:
1. We need to enumerate over each possible top-left corner of a submatrix, which is defined by its starting point `(i, j)`.
2. For each top-left corner, we need to consider all possible bottom-right corners `(p, q)` where `p >= i` and `q >= j`.
3. The sum of all elements in the defined submatrix from `(i, j)` to `(p, q)` must be less than `k`.

### Steps to Solve:
1. Compute the cumulative sum for the matrix to efficiently calculate the sum of any submatrix.
2. Use two nested loops to iterate over all possible pairs of rows for the submatrix (`top` and `bottom`).
3. For each pair of rows, we can use another loop to iterate over possible starting columns and compute the column sums.
4. Utilize a data structure (like a sorted list) to determine how many column sums combined with the current submatrix sum are less than `k`.

### Implementation:
Here is a C++ solution that implements the above logic.

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    int numSubmatrixSumLessThanK(vector<vector<int>>& matrix, int k) {
        if (matrix.empty() || matrix[0].empty()) return 0;
        
        int m = matrix.size();
        int n = matrix[0].size();
        
        // Prepare a prefix sum array
        vector<vector<int>> prefixSum(m + 1, vector<int>(n + 1, 0));
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                prefixSum[i][j] = matrix[i-1][j-1] + prefixSum[i-1][j] 
                                  + prefixSum[i][j-1] - prefixSum[i-1][j-1];
            }
        }

        int count = 0;

        // Now we will use the prefix sum array to evaluate all submatrices
        for (int top = 0; top < m; top++) {
            for (int bottom = top; bottom < m; bottom++) {
                // We will use an array to track sum of columns between `top` and `bottom`
                vector<int> colSum(n, 0);
                for (int col = 0; col < n; col++) {
                    colSum[col] = prefixSum[bottom + 1][col + 1] 
                                - prefixSum[top][col + 1];
                }

                // Now we need to count the number of subarrays with sums < k
                count += countSubarraysWithSumLessThanK(colSum, k);
            }
        }

        return count;
    }

private:
    // Function to count all subarrays with sum less than K
    int countSubarraysWithSumLessThanK(vector<int>& sums, int k) {
        int count = 0;
        vector<int> prefixSums;
        prefixSums.push_back(0); // Starting with prefix sum of zero
        
        int currentSum = 0;
        for (int sum : sums) {
            currentSum += sum;
            
            // We need to find how many prefix sums are there such that
            // currentSum - prefix < k => prefix > currentSum - k
            int target = currentSum - k;
            count += upper_bound(prefixSums.begin(), prefixSums.end(), target) - prefixSums.begin();
            
            // Insert current sum into the prefix sums
            prefixSums.push_back(currentSum);
        }
        
        return count;
    }
};
```

### Explanation of the Code:
- **Prefix Sum Calculation**: We first calculate the prefix sum of the entire matrix so that we can calculate the sum of any submatrix in constant time.
- **Double Loop for Rows**: We create a loop for the `top` and `bottom` rows to define the height of the submatrices we're evaluating.
- **Column Sum Calculation**: For each pair of top-bottom rows, we calculate the sum for each column from `top` to `bottom`.
- **Count Subarrays**: We utilize a helper function `countSubarraysWithSumLessThanK`. This function uses a vector to keep track of the prefix sums we have seen so far, allowing us to efficiently count how many of them can form a valid subarray sum.

### Efficiency:
This algorithm is efficient enough for the given constraints of the problem, leveraging both cumulative sums and sorted insertion to achieve results efficiently. The main complexity stems from the still manageable nested loops leading to a time complexity around O(m^2 * n log n), which is feasible for medium-sized matrices.