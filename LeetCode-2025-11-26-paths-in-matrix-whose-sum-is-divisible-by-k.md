# LeetCode Daily – 2025-11-26

## 🧠 Problem #2435 – **Paths in Matrix Whose Sum Is Divisible by K**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k)

---

### 📝 Problem Description

You are given a 0-indexed m x n integer matrix grid and an integer k. You are currently at position (0, 0) and you want to reach position (m - 1, n - 1) moving only down or right.

Return the number of paths where the sum of the elements on the path is divisible by k. Since the answer may be very large, return it modulo 109 + 7.

 
Example 1:


Input: grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3
Output: 2
Explanation: There are two paths where the sum of the elements on the path is divisible by k.
The first path highlighted in red has a sum of 5 + 2 + 4 + 5 + 2 = 18 which is divisible by 3.
The second path highlighted in blue has a sum of 5 + 3 + 0 + 5 + 2 = 15 which is divisible by 3.


Example 2:


Input: grid = [[0,0]], k = 5
Output: 1
Explanation: The path highlighted in red has a sum of 0 + 0 = 0 which is divisible by 5.


Example 3:


Input: grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1
Output: 10
Explanation: Every integer is divisible by 1 so the sum of the elements on every possible path is divisible by k.


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 5 * 104
	1 <= m * n <= 5 * 104
	0 <= grid[i][j] <= 100
	1 <= k <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Paths in Matrix Whose Sum Is Divisible by K", we need to find the number of paths from the top-left to the bottom-right of a matrix where the sum of the values along the path is divisible by a given integer `k`. Here, we can move only down or right.

### Approach

To solve this problem, we can use dynamic programming with memoization. Specifically, we can maintain a memoization table that keeps track of the number of ways to reach each cell `(i, j)` in the matrix with a certain modulo `k` of the sum.

1. **Define State:**
   - Let `dp[i][j][rem]` be the number of ways to reach cell `(i, j)` such that the sum of the path taken so far gives a remainder `rem` when divided by `k`.

2. **Base Case:**
   - Starting from cell `(0, 0)`, we initialize `dp[0][0][matrix[0][0] % k] = 1` because there is one way to reach the starting position (the path itself).

3. **Transition:**
   - For any cell `(i, j)`, the sum can come from either the cell above it `(i-1, j)` or the cell to the left of it `(i, j-1)`. Hence, we can transition as follows:
     - For `m = matrix[i][j]`, update:
       - From `(i-1, j)`: `dp[i][j][(rem + m) % k] += dp[i-1][j][rem]`
       - From `(i, j-1)`: `dp[i][j][(rem + m) % k] += dp[i][j-1][rem]`
   
4. **Final Result:**
   - The answer will be found in `dp[n-1][m-1][0]`, which gives us the number of paths that end at the bottom-right corner of the matrix with a sum divisible by `k`.

### C++ Implementation

Here's the C++ code that implements the above approach:

```cpp
#include <vector>

using namespace std;

class Solution {
public:
    int MOD = 1e9 + 7;  // Because the result can be large, we will return it modulo this number.
    
    int countPaths(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        int m = matrix[0].size();
        
        // dp[i][j][rem]: number of ways to reach (i, j) with sum % k == rem
        vector<vector<vector<long long>>> dp(n, vector<vector<long long>>(m, vector<long long>(k, 0)));
        
        // Base case, starting point
        dp[0][0][matrix[0][0] % k] = 1;
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                for (int rem = 0; rem < k; rem++) {
                    if (dp[i][j][rem] > 0) {
                        // Move down
                        if (i + 1 < n) {
                            int newRem = (rem + matrix[i + 1][j]) % k;
                            dp[i + 1][j][newRem] = (dp[i + 1][j][newRem] + dp[i][j][rem]) % MOD;
                        }
                        // Move right
                        if (j + 1 < m) {
                            int newRem = (rem + matrix[i][j + 1]) % k;
                            dp[i][j + 1][newRem] = (dp[i][j + 1][newRem] + dp[i][j][rem]) % MOD;
                        }
                    }
                }
            }
        }
        
        // The answer is the number of ways to reach the bottom-right corner with sum % k == 0
        return dp[n - 1][m - 1][0];
    }
};
```

### Explanation of the Code:
- We define a 3D DP array to track the number of paths with each remainder for each cell.
- We start from the top-left cell, updating our paths as we progress through the matrix.
- The modulo operation ensures that we do not exceed `k` when keeping track of sums.
- Finally, we retrieve the number of ways to end at the bottom-right corner with a sum that is divisible by `k`.

This method ensures that we explore all possible paths efficiently using dynamic programming while leveraging the modulo operation to handle conditions on sums efficiently.