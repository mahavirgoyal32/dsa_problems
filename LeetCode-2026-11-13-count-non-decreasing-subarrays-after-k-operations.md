# LeetCode Daily – 2026-11-13

## 🧠 Problem #3420 – **Count Non-Decreasing Subarrays After K Operations**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations)

---

### 📝 Problem Description

You are given an array nums of n integers and an integer k.

For each subarray of nums, you can apply up to k operations on it. In each operation, you increment any element of the subarray by 1.

Note that each subarray is considered independently, meaning changes made to one subarray do not persist to another.

Return the number of subarrays that you can make non-decreasing ​​​​​after performing at most k operations.

An array is said to be non-decreasing if each element is greater than or equal to its previous element, if it exists.

 
Example 1:


Input: nums = [6,3,1,2,4,4], k = 7

Output: 17

Explanation:

Out of all 21 possible subarrays of nums, only the subarrays [6, 3, 1], [6, 3, 1, 2], [6, 3, 1, 2, 4] and [6, 3, 1, 2, 4, 4] cannot be made non-decreasing after applying up to k = 7 operations. Thus, the number of non-decreasing subarrays is 21 - 4 = 17.


Example 2:


Input: nums = [6,3,1,3,6], k = 4

Output: 12

Explanation:

The subarray [3, 1, 3, 6] along with all subarrays of nums with three or fewer elements, except [6, 3, 1], can be made non-decreasing after k operations. There are 5 subarrays of a single element, 4 subarrays of two elements, and 2 subarrays of three elements except [6, 3, 1], so there are 1 + 5 + 4 + 2 = 12 subarrays that can be made non-decreasing.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	1 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count Non-Decreasing Subarrays After K Operations" requires you to count the number of non-decreasing subarrays from an array `nums` after performing at most `k` operations. Each operation allows you to increase an element by `1`.

To implement a solution, we can break the problem down into the following steps:

1. **Understanding Non-Decreasing Subarrays**: A subarray is said to be non-decreasing if for every element in the subarray, each element is greater than or equal to the previous one.

2. **Using a Two-Pointer/Sliding Window Approach**: We'll use a two-pointer technique to explore valid subarrays and count those that can be made non-decreasing with at most `k` operations. The two pointers will help maintain a valid range in which we can adjust the elements to ensure they can form a non-decreasing sequence.

3. **Counting Operations**: As we traverse the array with our right pointer, we'll track how many "operations" (increments) are necessary to make the current window's elements non-decreasing. If at any point the number of operations exceeds `k`, we'll move the left pointer to reduce the operations count.

4. **Calculating Valid Subarrays**: For each position of the right pointer, as long as the operations are within the limit, we can calculate how many valid subarrays end at this position using the difference between the right and left pointers.

Here is the C++ implementation along with explanations:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    long long countNonDecreasing(vector<int>& nums, int k) {
        long long count = 0;
        int n = nums.size();
        int left = 0; // Start of the sliding window
        int operations = 0; // Count of required operations

        for (int right = 0; right < n; ++right) {
            // If we are not at the first element, we compare with previous
            if (right > 0 && nums[right] < nums[right - 1]) {
                // If current element is smaller than the previous, we need to calculate how many operations
                operations += (nums[right - 1] - nums[right]);
            }

            // If the total operations exceed k, we need to shrink the window from the left
            while (operations > k) {
                if (left < right && nums[left] < nums[left + 1]) {
                    // Adjust the operations: we can either stay within the range or not
                    operations -= (nums[left + 1] - nums[left]);
                }
                left++; // Move the left pointer to reduce the window
            }

            // All subarrays from `left` to `right` are valid and can be counted
            count += right - left + 1;
        }

        return count; // Return the total count of valid non-decreasing subarrays
    }
};
```

### Explanation of the Code:

1. **Initialization**: We start by initializing necessary variables. `count` will track the number of valid subarrays, `operations` keeps track of how many increments we've counted.

2. **Sliding Window Loop**: We iterate through the array with `right` acting as our right pointer. If the current position is not the first one, we check if an increment is needed (when `nums[right] < nums[right - 1]`) and update the `operations` counter.

3. **Adjusting the Left Pointer**: If our `operations` exceed `k`, we need to increment the `left` pointer to shrink our window. We also update the `operations` count accordingly, ensuring we account for how much we might be able to shift the left boundary without exceeding allowed increments.

4. **Counting Valid Subarrays**: For each valid position of `right`, we add the count of subarrays that can end at `right`, which is simply `right - left + 1`.

5. **Returning the Result**: Finally, we return the total count of valid non-decreasing subarrays.

This algorithm runs in O(n) time complexity due to the linear pass through the array with an efficient window adjustment, which is suitable for the problem's constraints.