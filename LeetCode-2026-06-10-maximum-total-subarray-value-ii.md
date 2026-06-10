# LeetCode Daily – 2026-06-10

## 🧠 Problem #3691 – **Maximum Total Subarray Value II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-total-subarray-value-ii)

---

### 📝 Problem Description

You are given an integer array nums of length n and an integer k.

You must select exactly k distinct subarrays nums[l..r] of nums. Subarrays may overlap, but the exact same subarray (same l and r) cannot be chosen more than once.

The value of a subarray nums[l..r] is defined as: max(nums[l..r]) - min(nums[l..r]).

The total value is the sum of the values of all chosen subarrays.

Return the maximum possible total value you can achieve.

 
Example 1:


Input: nums = [1,3,2], k = 2

Output: 4

Explanation:

One optimal approach is:


	Choose nums[0..1] = [1, 3]. The maximum is 3 and the minimum is 1, giving a value of 3 - 1 = 2.
	Choose nums[0..2] = [1, 3, 2]. The maximum is still 3 and the minimum is still 1, so the value is also 3 - 1 = 2.


Adding these gives 2 + 2 = 4.


Example 2:


Input: nums = [4,2,5,1], k = 3

Output: 12

Explanation:

One optimal approach is:


	Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, giving a value of 5 - 1 = 4.
	Choose nums[1..3] = [2, 5, 1]. The maximum is 5 and the minimum is 1, so the value is also 4.
	Choose nums[2..3] = [5, 1]. The maximum is 5 and the minimum is 1, so the value is again 4.


Adding these gives 4 + 4 + 4 = 12.


 
Constraints:


	1 <= n == nums.length <= 5 * 10​​​​​​​4
	0 <= nums[i] <= 109
	1 <= k <= min(105, n * (n + 1) / 2)

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Total Subarray Value II" on LeetCode requires us to find the maximum sum of a subarray that can be divided into exactly two non-overlapping parts. To clarify, we need to compute two subarrays `(l1, r1)` and `(l2, r2)` such that they do not overlap and yield the maximum possible sum when added together.

Here's a step-by-step approach to solve the problem:

1. **Understanding the Problem:**
    - We want to maximize the sum of two non-overlapping subarrays.
    - We can choose different ways on how we divide the array into two parts.

2. **Dynamic Programming Approach:**
    - We can use prefix sums and dynamic programming (DP) to simplify calculating sums of subarrays efficiently. 
    - Let’s define two arrays: 
        - `maxLeft[i]`: the maximum sum of any subarray from the start of the array up to index `i`.
        - `maxRight[i]`: the maximum sum of any subarray starting from index `i` to the end of the array.

3. **Building the Arrays:**
    - We compute `maxLeft` using a linear pass from left to right.
    - For `maxRight`, we do a linear pass from right to left.

4. **Finding the Maximum Sum:**
    - As we iterate through possible boundaries between the two subarrays, we can compute the maximum possible sum by considering the maximum value we can obtain from `maxLeft` and `maxRight`.

5. **Implementation:**
Here's how we can implement the above logic in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int maxTwoSubArrays(std::vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;

        // Step 1: Create maxLeft array
        std::vector<int> maxLeft(n);
        int currentMax = nums[0];
        maxLeft[0] = currentMax;
        
        for (int i = 1; i < n; i++) {
            currentMax = std::max(nums[i], currentMax + nums[i]);
            maxLeft[i] = std::max(maxLeft[i - 1], currentMax);
        }

        // Step 2: Create maxRight array
        std::vector<int> maxRight(n);
        currentMax = nums[n - 1];
        maxRight[n - 1] = currentMax;

        for (int i = n - 2; i >= 0; i--) {
            currentMax = std::max(nums[i], currentMax + nums[i]);
            maxRight[i] = std::max(maxRight[i + 1], currentMax);
        }

        // Step 3: Find the maximum sum of non-overlapping subarrays
        int maxTotal = INT_MIN;
        for (int i = 0; i < n - 1; i++) {
            maxTotal = std::max(maxTotal, maxLeft[i] + maxRight[i + 1]);
        }

        return maxTotal;
    }
};

// Example usage
int main() {
    Solution sol;
    std::vector<int> nums = {1, 2, 3, 4, -10};
    std::cout << sol.maxTwoSubArrays(nums) << std::endl; // Output example
    return 0;
}
```

### Explanation of the Code:
1. **maxLeft Calculation:**
   - We iterate through the `nums` array, maintaining the maximum subarray sum that ends at each index and storing that in `maxLeft`.

2. **maxRight Calculation:**
   - Similarly, we iterate backwards through `nums`, calculating the maximum subarray sum that starts at each index and storing it in `maxRight`.

3. **Final Calculation:**
   - By iterating from `0` to `n - 2`, we can combine the maximum values from `maxLeft` and `maxRight` to find the optimal splitting point. 

4. **Output:**
   - The maximum value is returned, which represents the maximum sum of two non-overlapping subarrays.

This code efficiently computes the required value in O(n) time complexity, allowing the solution to handle larger arrays within reasonable limits.