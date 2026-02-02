# LeetCode Daily – 2026-02-02

## 🧠 Problem #3013 – **Divide an Array Into Subarrays With Minimum Cost II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii)

---

### 📝 Problem Description

You are given a 0-indexed array of integers nums of length n, and two positive integers k and dist.

The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

You need to divide nums into k disjoint contiguous subarrays, such that the difference between the starting index of the second subarray and the starting index of the kth subarray should be less than or equal to dist. In other words, if you divide nums into the subarrays nums[0..(i1 - 1)], nums[i1..(i2 - 1)], ..., nums[ik-1..(n - 1)], then ik-1 - i1 <= dist.

Return the minimum possible sum of the cost of these subarrays.

 
Example 1:


Input: nums = [1,3,2,6,4,2], k = 3, dist = 3
Output: 5
Explanation: The best possible way to divide nums into 3 subarrays is: [1,3], [2,6,4], and [2]. This choice is valid because ik-1 - i1 is 5 - 2 = 3 which is equal to dist. The total cost is nums[0] + nums[2] + nums[5] which is 1 + 2 + 2 = 5.
It can be shown that there is no possible way to divide nums into 3 subarrays at a cost lower than 5.


Example 2:


Input: nums = [10,1,2,2,2,1], k = 4, dist = 3
Output: 15
Explanation: The best possible way to divide nums into 4 subarrays is: [10], [1], [2], and [2,2,1]. This choice is valid because ik-1 - i1 is 3 - 1 = 2 which is less than dist. The total cost is nums[0] + nums[1] + nums[2] + nums[3] which is 10 + 1 + 2 + 2 = 15.
The division [10], [1], [2,2,2], and [1] is not valid, because the difference between ik-1 and i1 is 5 - 1 = 4, which is greater than dist.
It can be shown that there is no possible way to divide nums into 4 subarrays at a cost lower than 15.


Example 3:


Input: nums = [10,8,18,9], k = 3, dist = 1
Output: 36
Explanation: The best possible way to divide nums into 4 subarrays is: [10], [8], and [18,9]. This choice is valid because ik-1 - i1 is 2 - 1 = 1 which is equal to dist.The total cost is nums[0] + nums[1] + nums[2] which is 10 + 8 + 18 = 36.
The division [10], [8,18], and [9] is not valid, because the difference between ik-1 and i1 is 3 - 1 = 2, which is greater than dist.
It can be shown that there is no possible way to divide nums into 3 subarrays at a cost lower than 36.


 
Constraints:


	3 <= n <= 105
	1 <= nums[i] <= 109
	3 <= k <= n
	k - 2 <= dist <= n - 2

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Divide an Array Into Subarrays With Minimum Cost II" requires dividing the given array into a certain number of subarrays such that the total cost is minimized. The cost is defined as the sum of the maximum elements from each subarray. 

### Problem Breakdown

1. **Understanding the Cost**: The cost is defined by the maximum value in each subarray. To minimize the total cost, the choice of subarrays is critical.
2. **Dynamic Programming (DP) Approach**: We can use a DP approach where `dp[k][j]` represents the minimum cost of dividing the first `j` elements of the array into `k` subarrays.

### Steps to Solve

- Initialize a DP table where `dp[k][j]` is set to a very high value (representing infinity) for all `k` and `j`.
- The cost for a single subarray can be calculated with the use of a maximum value tracker as we explore different potential subarray divisions.
- Iterate through the number of subarrays `k`, and for each `k`, calculate the costs for all `j` elements.
- Finally, find the minimum cost for dividing the entire array into exactly `k` subarrays.

### C++ Code Implementation

Here's the C++ code that implements the solution:

```cpp
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

class Solution {
public:
    int minCost(vector<int>& nums, int k) {
        int n = nums.size();
        
        // Edge case: if k >= n, then the cost is just the sum of nums
        if (k >= n) return *max_element(nums.begin(), nums.end());

        // DP table
        vector<vector<int>> dp(k + 1, vector<int>(n + 1, INT_MAX));
        
        // Base case: 0 elements -> 0 cost
        for (int i = 0; i <= k; i++) {
            dp[i][0] = 0;
        }
        
        // Fill the DP table
        for (int i = 1; i <= k; i++) {
            for (int j = 1; j <= n; j++) {
                int max_elem = 0; // To calculate the max in the current segment
                for (int l = j; l >= 1; l--) {
                    max_elem = max(max_elem, nums[l - 1]); // nums[l-1] is included in the current segment
                    dp[i][j] = min(dp[i][j], dp[i - 1][l - 1] + max_elem);
                }
            }
        }
        
        // The answer will be the minimum cost for k subarrays covering all n elements
        return dp[k][n];
    }
};

// Example of usage
// int main() {
//     Solution solution;
//     vector<int> nums = {1, 3, 1, 5, 2};
//     int k = 3;
//     int result = solution.minCost(nums, k);
//     cout << result; // Expected output: cost of dividing the array
//     return 0;
// }
```

### Explanation of the Code

1. **Initialization**: `dp[k][j]` is initialized to `INT_MAX` to symbolize that we haven't found any answers yet. The base case initializes the scenario of having zero elements.
2. **Nested Loops**: 
    - The first loop iterates through the number of subarrays `i`.
    - The second loop iterates through the first `j` elements of `nums`.
    - The innermost loop checks different potential partitions and evaluates the max element over the current partition.
3. **Updating the DP Table**: For each combination of `i` and `j`, it records the minimum cost observed.
4. **Final Result**: The final cost for dividing the entire array into `k` subarrays is found in `dp[k][n]`.

### Performance

The time complexity of this approach is \(O(k \cdot n^2)\) due to the three nested loops. Given the constraints on `n` and `k`, this should be efficient enough for typical input sizes in competitive programming.

This solution efficiently divides the array into subarrays while minimizing the cost defined by the maximum value of each segment.