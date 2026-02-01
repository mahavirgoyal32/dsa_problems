# LeetCode Daily – 2026-02-01

## 🧠 Problem #3010 – **Divide an Array Into Subarrays With Minimum Cost I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i)

---

### 📝 Problem Description

You are given an array of integers nums of length n.

The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

You need to divide nums into 3 disjoint contiguous subarrays.

Return the minimum possible sum of the cost of these subarrays.

 
Example 1:


Input: nums = [1,2,3,12]
Output: 6
Explanation: The best possible way to form 3 subarrays is: [1], [2], and [3,12] at a total cost of 1 + 2 + 3 = 6.
The other possible ways to form 3 subarrays are:
- [1], [2,3], and [12] at a total cost of 1 + 2 + 12 = 15.
- [1,2], [3], and [12] at a total cost of 1 + 3 + 12 = 16.


Example 2:


Input: nums = [5,4,3]
Output: 12
Explanation: The best possible way to form 3 subarrays is: [5], [4], and [3] at a total cost of 5 + 4 + 3 = 12.
It can be shown that 12 is the minimum cost achievable.


Example 3:


Input: nums = [10,3,1,1]
Output: 12
Explanation: The best possible way to form 3 subarrays is: [10,3], [1], and [1] at a total cost of 10 + 1 + 1 = 12.
It can be shown that 12 is the minimum cost achievable.


 
Constraints:


	3 <= n <= 50
	1 <= nums[i] <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Divide an Array Into Subarrays With Minimum Cost I" requires minimizing the cost of dividing an array into a specific number of subarrays. Let's first understand the key concepts behind the problem and then move on to the solution with C++ code.

### Problem Understanding

- You have an array `nums` and an integer `k`.
- You are required to divide `nums` into `k` non-empty contiguous subarrays.
- The cost of a subarray is defined as the difference between the maximum and minimum element in that subarray.
- The goal is to minimize the total cost incurred when dividing `nums` into `k` subarrays.

### Dynamic Programming Approach

To solve this problem, we can use a dynamic programming strategy:

1. **DP Definition**: Let’s define `dp[i][j]` as the minimum cost to partition the first `i` elements of `nums` into `j` subarrays.

2. **Base Cases**:
   - If you have one subarray (`j = 1`), then the cost is simply the difference between the maximum and minimum of the first `i` elements.
   - If you have zero elements or want to create zero subarrays, the cost is infinite (or a large value).

3. **Recurrence Relation**:
   - To determine `dp[i][j]`, we can consider dividing the first `i` elements into a part that ends at index `x` (1 <= x < i) and a new subarray starting from `x+1` to `i`.
   - The cost incurred in this case would be the cost of the first `j-1` partitions plus the cost of the partition from `x+1` to `i`.

The key here is to compute the costs efficiently. We can precompute the max and min for all possible subarrays to make this step efficient.

### Implementation

Now let's look at the C++ code that implements the above logic:

```cpp
#include <vector>
#include <algorithm>
#include <limits>

using namespace std;

class Solution {
public:
    int minCost(const vector<int>& nums, int k) {
        int n = nums.size();
        
        // Precompute max and min for every subarray nums[l..r]
        vector<vector<int>> maxSub(n, vector<int>(n, 0));
        vector<vector<int>> minSub(n, vector<int>(n, 0));
        
        for (int l = 0; l < n; ++l) {
            maxSub[l][l] = nums[l];
            minSub[l][l] = nums[l];
            for (int r = l + 1; r < n; ++r) {
                maxSub[l][r] = max(maxSub[l][r - 1], nums[r]);
                minSub[l][r] = min(minSub[l][r - 1], nums[r]);
            }
        }

        // Initialize the dp array
        vector<vector<int>> dp(n + 1, vector<int>(k + 1, INT_MAX));
        
        dp[0][0] = 0; // Base case
        
        for (int j = 1; j <= k; ++j) {
            for (int i = j; i <= n; ++i) {
                for (int x = j - 1; x < i; ++x) {
                    int cost = maxSub[x][i - 1] - minSub[x][i - 1];
                    dp[i][j] = min(dp[i][j], dp[x][j - 1] + cost);
                }
            }
        }
        
        return dp[n][k];
    }
};

// Example usage
// int main() {
//     Solution sol;
//     vector<int> nums = {1, 3, 5, 1, 3, 5};
//     int k = 2;
//     int result = sol.minCost(nums, k);
//     cout << result << endl; // Output the result
//     return 0;
// }
```

### Explanation of the Code:

1. We start by defining two matrices to store the maximum and minimum values of all subarrays. They will help to compute the cost of each subarray quickly.

2. Next, we create a DP table `dp` where `dp[i][j]` holds the minimum cost to partition the first `i` elements into `j` parts.

3. We fill out the DP table using a nested loop. For each number of subarrays `j`, we try to find the best previous cut point `x`, calculate the cost of the newly formed subarray using precomputed `maxSub` and `minSub`, and update our DP table accordingly.

4. Finally, the answer will be in `dp[n][k]`, which gives the minimum cost to divide the entire array into `k` subarrays.

This solution is efficient and leverages the dynamic programming paradigm to break down a complex problem into manageable subproblems.