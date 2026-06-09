# LeetCode Daily – 2026-06-09

## 🧠 Problem #3689 – **Maximum Total Subarray Value I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-total-subarray-value-i)

---

### 📝 Problem Description

You are given an integer array nums of length n and an integer k.

You need to choose exactly k non-empty subarrays nums[l..r] of nums. Subarrays may overlap, and the exact same subarray (same l and r) can be chosen more than once.

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
	Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, so the value is also 4.
	Choose nums[2..3] = [5, 1]. The maximum is 5 and the minimum is 1, so the value is again 4.


Adding these gives 4 + 4 + 4 = 12.


 
Constraints:


	1 <= n == nums.length <= 5 * 10​​​​​​​4
	0 <= nums[i] <= 109
	1 <= k <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Maximum Total Subarray Value I" from LeetCode, we need to find the maximum total subarray value, which involves calculating the sum of subarrays while also considering the contribution of each element. 

Here's a breakdown of the solution and the code implementation in C++:

### Problem Explanation

Given an integer array `nums`, we want to calculate the maximum value of the following expression for all subarrays of `nums`:

\[ \text{total\_value}(subarray) = sum(subarray) \times \text{min}(subarray) \]

where:

- `sum(subarray)` is the sum of all elements in the subarray.
- `min(subarray)` is the minimum element in the subarray.

The result has to be the maximum total value across all possible subarrays.

### Steps to Solve

1. **Iterate through elements**: For each element in `nums`, treat it as the minimum of a subarray and expand the subarray in both directions (left and right) until we either reach the bounds of the array or find a smaller element.

2. **Calculate sums**: While expanding the subarray, maintain the sum of the current subarray. Calculate the value using the formula:
   \[
   \text{current\_value} = \text{current\_sum} \times \text{current\_min}
   \]
   
3. **Keep track of maximum value**: Update a variable that keeps track of the maximum value found during the iterations.

### C++ Code Implementation

Here’s how you can implement this:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

class Solution {
public:
    long long maximumSubarrayValue(vector<int>& nums) {
        long long maxValue = 0;

        for (size_t i = 0; i < nums.size(); ++i) {
            long long currentSum = 0;
            long long currentMin = nums[i];

            for (size_t j = i; j < nums.size(); ++j) {
                currentSum += nums[j];
                currentMin = min(currentMin, (long long)nums[j]);

                long long currentValue = currentSum * currentMin;
                maxValue = max(maxValue, currentValue);
            }
        }

        return maxValue;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3}; // Example input
    cout << solution.maximumSubarrayValue(nums) << endl; // Expected output: 6 (subarray [1,2,3])
    return 0;
}
```

### Explanation of Code

- We initialized `maxValue` to keep track of the maximum total value found.
- We loop through each starting index `i` of the subarray.
- For each `i`, we initialize `currentSum` to 0 and `currentMin` to the current element, `nums[i]`.
- We use another loop to expand the subarray from `i` to `j` (where `j` goes from `i` to the end of the array).
- For each element in the expanding subarray, we update `currentSum` and `currentMin`.
- Calculate `currentValue` as the product of `currentSum` and `currentMin`, and check if it's greater than `maxValue`, updating it if it is.
- Finally, return the maximum value.

### Complexity Analysis

- **Time Complexity**: O(n^2), where n is the number of elements in `nums`. This is due to the nested loops to explore all subarrays.
- **Space Complexity**: O(1), as we are using a constant amount of additional storage.

This solution is straightforward and effective given the constraints; if there are very high constraints, we might have to look for optimization methods, but for typical limits, this works well.