# LeetCode Daily – 2026-03-19

## 🧠 Problem #3212 – **Count Submatrices With Equal Frequency of X and Y**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y)

---

### 📝 Problem Description

Given a 2D character matrix grid, where grid[i][j] is either &#39;X&#39;, &#39;Y&#39;, or &#39;.&#39;, return the number of submatrices that contain:


	grid[0][0]
	an equal frequency of &#39;X&#39; and &#39;Y&#39;.
	at least one &#39;X&#39;.


 
Example 1:


Input: grid = [[&quot;X&quot;,&quot;Y&quot;,&quot;.&quot;],[&quot;Y&quot;,&quot;.&quot;,&quot;.&quot;]]

Output: 3

Explanation:




Example 2:


Input: grid = [[&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;Y&quot;]]

Output: 0

Explanation:

No submatrix has an equal frequency of &#39;X&#39; and &#39;Y&#39;.


Example 3:


Input: grid = [[&quot;.&quot;,&quot;.&quot;],[&quot;.&quot;,&quot;.&quot;]]

Output: 0

Explanation:

No submatrix has at least one &#39;X&#39;.


 
Constraints:


	1 <= grid.length, grid[i].length <= 1000
	grid[i][j] is either &#39;X&#39;, &#39;Y&#39;, or &#39;.&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's discuss the solution to the problem "Count Submatrices With Equal Frequency of X and Y" from LeetCode.

### Problem Explanation

You are given a 2D binary matrix containing `0`s and `1`s, where `1` represents `X` and `0` represents `Y`. The goal is to count the number of submatrices such that the number of `X`s (1s) is equal to the number of `Y`s (0s) in that submatrix.

### Approach

To solve this, we can use the following steps:

1. **Prefix Sums**: Create a prefix sum matrix to calculate the number of `X`s up to any point in the matrix efficiently. This helps us quickly compute the count of `X`s in any submatrix.

2. **Iterate Over All Submatrices**: Loop through all possible top-left and bottom-right corners of submatrices. 

3. **Count Xs and Compute Ys**: For each submatrix defined by its corners, calculate the number of `X`s in it using the prefix sum matrix. The number of `Y`s can be derived by subtracting the count of `X`s from the total elements in the submatrix.

4. **Check Equality**: If the count of `X`s equals the count of `Y`s, we increment our result counter.

5. **Return the Count**: Finally, return the count of all valid submatrices that meet the criteria.

### Implementation

Here’s the C++ code implementing the above approach:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int countSubmatrices(vector<vector<int>>& matrix) {
        int m = matrix.size();
        if (m == 0) return 0;
        int n = matrix[0].size();
        
        // We will use a prefix sum array to count the number of X's.
        vector<vector<int>> prefix_sum(m + 1, vector<int>(n + 1, 0));

        // Build the prefix sum matrix
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                prefix_sum[i + 1][j + 1] = matrix[i][j]
                                             + prefix_sum[i][j + 1]
                                             + prefix_sum[i + 1][j]
                                             - prefix_sum[i][j];
            }
        }

        int result = 0;

        // Now we check all possible submatrices
        for (int row1 = 0; row1 < m; ++row1) {
            for (int row2 = row1; row2 < m; ++row2) {
                for (int col1 = 0; col1 < n; ++col1) {
                    for (int col2 = col1; col2 < n; ++col2) {
                        // Count of X's in the current submatrix
                        int countX = prefix_sum[row2 + 1][col2 + 1]
                                   - prefix_sum[row1][col2 + 1]
                                   - prefix_sum[row2 + 1][col1]
                                   + prefix_sum[row1][col1];
                                   
                        int totalElements = (row2 - row1 + 1) * (col2 - col1 + 1);
                        int countY = totalElements - countX;  // since every other element is Y (0)

                        // If count of X's equals count of Y's
                        if (countX == countY) {
                            result++;
                        }
                    }
                }
            }
        }

        return result;
    }
};
```

### Explanation of the Code

1. **Prefix Sum Calculation**: We build a prefix sum for the matrix, where `prefix_sum[i][j]` will give the number of `X`s in the rectangle from `(0, 0)` to `(i-1, j-1)`.

2. **Iterate for Submatrices**: We utilize nested loops to explore every possible submatrix defined by corners `(row1, col1)` to `(row2, col2)`.

3. **Count Calculation**: Using our prefix sum, we efficiently calculate the number of `X`s and determine the number of `Y`s.

4. **Comparison**: We check if the counts of `X`s and `Y`s are equal. If they are, increment the result.

5. **Final Output**: The total number of valid submatrices is returned.

### Complexity Analysis

- **Time Complexity**: The algorithm has a complexity of \(O(m^2 \cdot n^2)\) because we are checking every submatrix.
- **Space Complexity**: The space complexity is \(O(m \cdot n)\) for the prefix sum array.

This solution should be efficient enough for moderate sizes of matrices. If the matrix sizes exceed this, optimizations may be necessary.

### Conclusion

This method effectively counts the required submatrices with the given conditions using a clear and structured approach, leveraging prefix sums for efficient computations.