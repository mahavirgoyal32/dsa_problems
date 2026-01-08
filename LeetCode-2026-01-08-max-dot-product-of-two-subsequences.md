# LeetCode Daily – 2026-01-08

## 🧠 Problem #1458 – **Max Dot Product of Two Subsequences**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/max-dot-product-of-two-subsequences)

---

### 📝 Problem Description

Given two arrays nums1 and nums2.

Return the maximum dot product between non-empty subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, [2,3,5] is a subsequence of [1,2,3,4,5] while [1,5,3] is not).

 
Example 1:


Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Output: 18
Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.

Example 2:


Input: nums1 = [3,-2], nums2 = [2,-6,7]
Output: 21
Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.

Example 3:


Input: nums1 = [-1,-1], nums2 = [1,1]
Output: -1
Explanation: Take subsequence [-1] from nums1 and subsequence [1] from nums2.
Their dot product is -1.

 
Constraints:


	1 <= nums1.length, nums2.length <= 500
	-1000 <= nums1[i], nums2[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Max Dot Product of Two Subsequences" asks us to find the maximum dot product of two non-empty subsequences from two given integer arrays, `nums1` and `nums2`. The dot product is calculated by multiplying corresponding elements from the two subsequences and summing them up.

### Problem Breakdown

Given two arrays:
- `nums1 = [a1, a2, ..., am]`
- `nums2 = [b1, b2, ..., bn]`

The dot product of two subsequences A from `nums1` and B from `nums2` is defined as:
\[ DP(A, B) = a1*b1 + a2*b2 + ... + ak*bk, \]
where k is the length of subsequence A and B.

### Approach

We can utilize dynamic programming (DP) to solve this problem. The idea is to keep track of the maximum dot products we can achieve as we examine potential pairs of subsequences that include elements from both arrays.

1. **DP Table:** 
   We'll use a 2-dimensional DP table where `dp[i][j]` represents the maximum dot product obtainable using the first `i` elements of `nums1` and the first `j` elements of `nums2`.

2. **Base Case:** 
   Initialize your DP array with a low-value (to properly handle the cases of negative numbers) and iterate through both arrays.

3. **Recurrence Relation:**
   For each `i, j`, consider:
   - Including the current elements in the calculation: 
   \[
   dp[i][j] = max(dp[i][j], dp[i-1][j-1] + nums1[i-1] * nums2[j-1])
   \]
   - Skipping an element from either of the arrays. That will be done by considering:
   \[
   dp[i][j] = max(dp[i][j], dp[i-1][j], dp[i][j-1])
   \]

4. **Final Result:**
   The answer will be contained in `dp[nums1.size()][nums2.size()]`.

### C++ Implementation

Here is how we can implement the above logic in C++:

```cpp
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {
    int n = nums1.size();
    int m = nums2.size();
    
    // Create a dp table initialized to a very low value
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, INT_MIN));

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            // Current product of nums1[i-1] and nums2[j-1]
            int product = nums1[i - 1] * nums2[j - 1];
            
            // Update dp[i][j] with the maximum of:
            // Including the current pair
            dp[i][j] = max(dp[i][j], dp[i - 1][j - 1] + product);
            
            // Skipping elements in nums1 or nums2
            dp[i][j] = max(dp[i][j], dp[i - 1][j]);
            dp[i][j] = max(dp[i][j], dp[i][j - 1]);
        }
    }
    
    // Return the max dot product found
    return dp[n][m];
}
```

### Explanation of the Code:

1. **Initialization:** We initialize a DP table with `INT_MIN` to handle situations with negative products.
2. **Nested Loops:** We iterate through each element of `nums1` and `nums2` using nested loops, considering each combination.
3. **Product Calculation:** For each combination of indices, we calculate the dot product and update the DP value based on the rules defined earlier.
4. **Return Value:** Finally, we return the maximum dot product from the completed DP table.

### Complexity

The overall time complexity is \(O(n \times m)\), where \(n\) and \(m\) are the sizes of `nums1` and `nums2` respectively. The space complexity is also \(O(n \times m)\) because we maintain a 2D DP array. 

This approach efficiently finds the maximum dot product of two subsequences leveraging the properties of subsequences and dynamic programming.