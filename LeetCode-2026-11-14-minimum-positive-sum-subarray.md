# LeetCode Daily – 2026-11-14

## 🧠 Problem #3364 – **Minimum Positive Sum Subarray **
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-positive-sum-subarray)

---

### 📝 Problem Description

You are given an integer array nums and two integers l and r. Your task is to find the minimum sum of a subarray whose size is between l and r (inclusive) and whose sum is greater than 0.

Return the minimum sum of such a subarray. If no such subarray exists, return -1.

A subarray is a contiguous non-empty sequence of elements within an array.

 
Example 1:


Input: nums = [3, -2, 1, 4], l = 2, r = 3

Output: 1

Explanation:

The subarrays of length between l = 2 and r = 3 where the sum is greater than 0 are:


	[3, -2] with a sum of 1
	[1, 4] with a sum of 5
	[3, -2, 1] with a sum of 2
	[-2, 1, 4] with a sum of 3


Out of these, the subarray [3, -2] has a sum of 1, which is the smallest positive sum. Hence, the answer is 1.


Example 2:


Input: nums = [-2, 2, -3, 1], l = 2, r = 3

Output: -1

Explanation:

There is no subarray of length between l and r that has a sum greater than 0. So, the answer is -1.


Example 3:


Input: nums = [1, 2, 3, 4], l = 2, r = 4

Output: 3

Explanation:

The subarray [1, 2] has a length of 2 and the minimum sum greater than 0. So, the answer is 3.


 
Constraints:


	1 <= nums.length <= 100
	1 <= l <= r <= nums.length
	-1000 <= nums[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Positive Sum Subarray" on LeetCode requires you to find the minimal sum of a contiguous subarray in a given array of integers, where the sum must be positive. If no such subarray exists, you should return 0.

### Problem Breakdown

1. **Input**: An array of integers which can contain both positive and negative numbers.
2. **Output**: The minimum positive sum of any contiguous subarray. If there are no positive sums possible, return 0.

### Approach

To solve this problem efficiently, we can use a linear scan to maintain a running sum of the current subarray we're examining and to track the minimum positive sum we find:

1. Initialize `min_positive_sum` as a large value (like `INT_MAX`) to track the minimum positive sum. 
2. Use `current_sum` to store the sum of the current subarray.
3. Iterate through each element of the array:
   - Add the current element to `current_sum`.
   - If `current_sum` is positive, update `min_positive_sum` if `current_sum` is less than the current minimum.
   - If `current_sum` becomes non-positive (i.e., zero or negative), reset `current_sum` to zero since a new subarray must start after this point.
4. After the loop, check if `min_positive_sum` has been updated from its initial state. If it hasn't, return 0; otherwise, return `min_positive_sum`.

### C++ Code Implementation

```cpp
#include <vector>
#include <iostream>
#include <limits.h> // for INT_MAX

using namespace std;

class Solution {
public:
    int minPositiveSumSubarray(vector<int>& nums) {
        int min_positive_sum = INT_MAX; // Initialize to a large value
        int current_sum = 0; // This will hold the sum of the current subarray
        
        for (int num : nums) {
            current_sum += num; // Update the current sum
            
            if (current_sum > 0) {
                // Only consider positive sums
                min_positive_sum = min(min_positive_sum, current_sum);
            }
            
            // If current sum <= 0, reset the sum for the next subarray attempt
            if (current_sum <= 0) {
                current_sum = 0;
            }
        }
        
        // If we found a valid positive sum, return it; otherwise return 0
        return min_positive_sum == INT_MAX ? 0 : min_positive_sum;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {-1, 2, 3, -4, 5, -6}; // Example input
    int result = sol.minPositiveSumSubarray(nums);
    cout << "Minimum Positive Sum Subarray: " << result << endl;
    return 0;
}
```

### Explanation of the Code

1. We declare a `Solution` class with a method `minPositiveSumSubarray` that takes a vector of integers.
2. We initialize `min_positive_sum` to `INT_MAX`, meaning that if we don't find a valid subarray, we can identify that condition later.
3. We loop through each number in the input vector:
   - We keep a running total with `current_sum`.
   - If `current_sum` is positive, we check if it's the smallest we've found so far, and update `min_positive_sum` accordingly.
   - If `current_sum` is non-positive, we reset it because a subarray cannot start from a non-positive sum.
4. Finally, we check whether we ever found a positive sum. If not (i.e., `min_positive_sum` is still `INT_MAX`), we return 0, otherwise we return the minimum positive sum found.

This solution efficiently traverses the array once (O(n) complexity), making it optimal for this problem scenario.