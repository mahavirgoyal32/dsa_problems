# LeetCode Daily – 2026-03-25

## 🧠 Problem #3546 – **Equal Sum Grid Partition I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/equal-sum-grid-partition-i)

---

### 📝 Problem Description

You are given an m x n matrix grid of positive integers. Your task is to determine if it is possible to make either one horizontal or one vertical cut on the grid such that:


	Each of the two resulting sections formed by the cut is non-empty.
	The sum of the elements in both sections is equal.


Return true if such a partition exists; otherwise return false.

 
Example 1:


Input: grid = [[1,4],[2,3]]

Output: true

Explanation:



A horizontal cut between row 0 and row 1 results in two non-empty sections, each with a sum of 5. Thus, the answer is true.


Example 2:


Input: grid = [[1,3],[2,4]]

Output: false

Explanation:

No horizontal or vertical cut results in two non-empty sections with equal sums. Thus, the answer is false.


 
Constraints:


	1 <= m == grid.length <= 105
	1 <= n == grid[i].length <= 105
	2 <= m * n <= 105
	1 <= grid[i][j] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The LeetCode problem "Equal Sum Grid Partition I" requires us to determine if we can partition a given 2D grid into two subsets such that the sum of the numbers in both subsets is equal. To solve this problem, we need to consider each element in the grid and see if we can find a subset that sums up to half of the total sum of elements in the grid.

Here's a structured approach to solve the problem:

### Step-by-Step Explanation

1. **Calculate the Total Sum**: First, calculate the total sum of all elements in the grid. If the total sum is odd, it's impossible to split it into two equal parts, so we can return `false` immediately.

2. **Dynamic Programming Setup**: Use a dynamic programming (DP) approach to determine if a subset with a sum equal to half of the total sum exists. We will use a boolean array `dp` where `dp[j]` indicates if a sum `j` can be formed using any subset of the elements processed so far.

3. **DP Transition**: Iterate over the elements of the grid. For each element, update the `dp` array from the back (from half of the total sum down to the value of the current element). This is done to ensure that each element is only considered once.

4. **Final Check**: After processing all elements, check if `dp[total/2]` is `true`. If it is, we can partition the grid into two equal sum subsets.

### C++ Implementation

Here is the implementation of the above logic in C++:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    bool canPartition(std::vector<std::vector<int>>& grid) {
        int totalSum = 0;
        for (const auto& row : grid) {
            for (int num : row) {
                totalSum += num;
            }
        }

        // If the total sum is odd, we cannot partition it into two equal subsets
        if (totalSum % 2 != 0) {
            return false;
        }

        int target = totalSum / 2;
        int rows = grid.size();
        int cols = grid[0].size();
        
        // Dynamic programming array
        std::vector<bool> dp(target + 1, false);
        dp[0] = true;  // There is a way to have sum 0 (by choosing nothing)

        // Loop through the grid
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                int current = grid[i][j];
                // Traverse from target to current value to prevent overcounting
                for (int t = target; t >= current; --t) {
                    dp[t] = dp[t] || dp[t - current];
                }
            }
        }

        return dp[target];  // If we can form sum equal to target
    }
};

int main() {
    Solution solution;
    std::vector<std::vector<int>> grid = {
        {1, 2, 3},
        {4, 5, 6}
    };
    bool result = solution.canPartition(grid);
    std::cout << (result ? "true" : "false") << std::endl;
    return 0;
}
```

### Explanation of Code

- **Input**: The input is a 2D vector `grid` representing the matrix of numbers.
- **Total Sum Calculation**: We iterate through the 2D grid to calculate the `totalSum`.
- **Target Calculation**: If `totalSum` is odd, we immediately return `false`. Otherwise, set `target` to `totalSum / 2`.
- **Dynamic Programming Initialization**: Create a `dp` array of size `target + 1` with all values set to `false`, except for `dp[0]`, which is `true` (indicating that zero sum is achievable).
- **Updating DP Array**: For each element in the grid, update the `dp` array in reverse to avoid using the same element multiple times.
- **Result**: Finally, check if `dp[target]` is `true`, indicating that there is a subset of the grid elements that sums up to `target`.

This approach runs in O(n * m * target) time, where `n` is the number of rows, `m` is the number of columns, and `target` is half of the total sum, making it efficient for reasonably sized grids.