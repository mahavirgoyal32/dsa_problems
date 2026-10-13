# LeetCode Daily – 2026-10-13

## 🧠 Problem #3727 – **Maximum Alternating Sum of Squares**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-alternating-sum-of-squares)

---

### 📝 Problem Description

You are given an integer array nums. You may rearrange the elements in any order.

The alternating score of an array arr is defined as:


	score = arr[0]2 - arr[1]2 + arr[2]2 - arr[3]2 + ...


Return an integer denoting the maximum possible alternating score of nums after rearranging its elements.

 
Example 1:


Input: nums = [1,2,3]

Output: 12

Explanation:

A possible rearrangement for nums is [2,1,3], which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

score = 22 - 12 + 32 = 4 - 1 + 9 = 12


Example 2:


Input: nums = [1,-1,2,-2,3,-3]

Output: 16

Explanation:

A possible rearrangement for nums is [-3,-1,-2,1,3,2], which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

score = (-3)2 - (-1)2 + (-2)2 - (1)2 + (3)2 - (2)2 = 9 - 1 + 4 - 1 + 9 - 4 = 16


 
Constraints:


	1 <= nums.length <= 105
	-4 * 104 <= nums[i] <= 4 * 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Maximum Alternating Sum of Squares" on LeetCode requires you to calculate the maximum alternating sum of squares of elements from a given array `nums`, following a condition where you can select or skip elements. 

### Problem Explanation:
You are given an array `nums`, and you need to find the maximum sum of squares of selected elements such that for any two selected indices `i` and `j`, if `i < j`, then `nums[i]` appears before `nums[j]` in the array. The sum must alternate between addition and subtraction based on the order of selection.

The formula can be represented as:
- Let `s = nums[i1]^2 - nums[i2]^2 + nums[i3]^2 - nums[i4]^2 + ...`
- You can choose whether to include or exclude each `nums[i]` based on the conditions above.

### Approach:
1. **Dynamic Programming**: We can use dynamic programming where we keep track of two states:
   - `dp[i][0]`: The maximum alternating sum of squares up to index `i` if we do not include the `i-th` element.
   - `dp[i][1]`: The maximum alternating sum of squares up to index `i` if we include the `i-th` element.

2. **Transition**:
   - If we don't take the `i-th` element, the maximum remains the same as that of the previous element:
     - `dp[i][0] = max(dp[i-1][0], dp[i-1][1])`
   - If we take the `i-th` element, we either add it or subtract based on the parity:
     - `dp[i][1] = dp[i-1][0] + nums[i]^2` (if `i` is even)
     - `dp[i][1] = dp[i-1][1] - nums[i]^2` (if `i` is odd)

3. **Answer**: The answer will be the maximum value from including or not including the last element.

### Complexity
The time complexity is \(O(n)\), where \(n\) is the length of the `nums` array, as we iterate through the array once. The space complexity can be reduced to \(O(1)\) by keeping only the last computed states.

### C++ Solution:
```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    long long maximumAlternatingSum(std::vector<int>& nums) {
        long long even_sum = 0; // Maximum sum when we are at even index
        long long odd_sum = 0;  // Maximum sum when we are at odd index
        for (int num : nums) {
            long long new_even_sum = std::max(even_sum, odd_sum + num * 1LL * num);
            long long new_odd_sum = even_sum - num * 1LL * num;
            even_sum = new_even_sum;
            odd_sum = new_odd_sum;
        }
        return even_sum;
    }
};
```

### Explanation of the Code:
1. **Initialization**: We start with `even_sum` and `odd_sum` initialized to zero.
2. **Iteration**: Loop through each number in the `nums` array.
   - Calculate a new potential `even_sum` if we include the current number's square, transitioning from the last known `odd_sum`.
   - Calculate a new `odd_sum` as the current `even_sum` minus the current number's square.
3. **Update**: After calculating the new sums, we update `even_sum` and `odd_sum`.
4. **Final Result**: Return `even_sum` which holds the maximum alternating sum of squares up to the last element.

This solution efficiently calculates the desired value while maintaining clarity and ease of understanding through the use of dynamic programming principles.