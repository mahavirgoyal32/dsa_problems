# LeetCode Daily – 2025-09-29

## 🧠 Problem #1039 – **Minimum Score Triangulation of Polygon**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-score-triangulation-of-polygon)

---

### 📝 Problem Description

You have a convex n-sided polygon where each vertex has an integer value. You are given an integer array values where values[i] is the value of the ith vertex in clockwise order.

Polygon triangulation is a process where you divide a polygon into a set of triangles and the vertices of each triangle must also be vertices of the original polygon. Note that no other shapes other than triangles are allowed in the division. This process will result in n - 2 triangles.

You will triangulate the polygon. For each triangle, the weight of that triangle is the product of the values at its vertices. The total score of the triangulation is the sum of these weights over all n - 2 triangles.

Return the minimum possible score that you can achieve with some triangulation of the polygon.


 
Example 1:




Input: values = [1,2,3]

Output: 6

Explanation: The polygon is already triangulated, and the score of the only triangle is 6.


Example 2:




Input: values = [3,7,4,5]

Output: 144

Explanation: There are two triangulations, with possible scores: 3*7*5 + 4*5*7 = 245, or 3*4*5 + 3*4*7 = 144.
The minimum score is 144.


Example 3:




Input: values = [1,3,1,4,1,5]

Output: 13

Explanation: The minimum score triangulation is 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13.


 
Constraints:


	n == values.length
	3 <= n <= 50
	1 <= values[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Score Triangulation of Polygon" requires us to find the minimum score for triangulating a polygon with a given set of vertices, where each pair of triangles formed contributes to the overall score. Here's a step-by-step explanation along with the solution in C++.

### Explanation:

#### Problem Understanding:
1. You have a polygon with `n` vertices defined by an array `A` of size `n`. The vertices are labeled from `0` to `n-1`.
2. You need to triangulate the polygon into `n-2` triangles.
3. The score of a triangulation is the sum of the products of the vertex values of the vertices at the corners of each triangle formed.

#### Key Observations:
- Each triangle is defined by three vertices `(i, j, k)`.
- The score for the triangle formed by these vertices would be: `A[i] * A[j] * A[k]`.
- To calculate the minimum score for triangulation, a dynamic programming approach can be used, where the main idea is to break the problem into smaller subproblems.

#### Dynamic Programming Approach:
1. **State Definition**: Let `dp[i][j]` be the minimum score to triangulate the polygon defined by vertices from index `i` to `j`.
2. **Transition**: For each pair of vertices `(i, j)`, you can form a triangle with a third vertex `k` (where `i < k < j`). The relationship can be defined as below:
   \[
   dp[i][j] = \min_{i < k < j} (dp[i][k] + dp[k][j] + A[i] * A[k] * A[j])
   \]
   This implies you iterate through all possible `k` for each `i, j` pair and choose the minimum score.

3. **Base Case**: `dp[i][i+1] = 0`, since there are no triangles possible with two vertices.

4. **Final Computation**: The result will be found in `dp[0][n-1]` after filling the DP table.

### C++ Solution:
Here is the C++ code that implements the above approach:

```cpp
#include <vector>
#include <limits.h>

class Solution {
public:
    int minScoreTriangulation(std::vector<int>& A) {
        int n = A.size();
        // 2D DP array
        std::vector<std::vector<int>> dp(n, std::vector<int>(n, 0));
        
        // Fill the dp array
        for (int length = 2; length < n; ++length) { // length is the gap between vertices
            for (int i = 0; i < n - length; ++i) {
                int j = i + length;
                dp[i][j] = INT_MAX; // Start with the maximum integer value

                // Try every vertex k between i and j
                for (int k = i + 1; k < j; ++k) {
                    dp[i][j] = std::min(dp[i][j], dp[i][k] + dp[k][j] + A[i] * A[k] * A[j]);
                }
            }
        }
        
        // The answer for the entire polygon
        return dp[0][n - 1];
    }
};
```

### Explanation of the Code:
- We define the `minScoreTriangulation` function which accepts a vector `A`.
- A 2D vector `dp` is initialized to store the minimum triangulation scores for different subproblems.
- Nested loops fill this `dp` table:
  - The outer loop iterates through possible lengths of the sections of the polygon.
  - The inner loops determine the minimum score by trying all possible third vertices `k`.
- Finally, it returns the computed minimum score to triangulate the entire polygon stored in `dp[0][n-1]`.

This approach ensures that all possible ways to form triangles are considered while caching results to avoid redundant calculations, making it efficient for this problem.