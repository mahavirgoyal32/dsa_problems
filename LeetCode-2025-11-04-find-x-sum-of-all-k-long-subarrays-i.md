# LeetCode Daily – 2025-11-04

## 🧠 Problem #3318 – **Find X-Sum of All K-Long Subarrays I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i)

---

### 📝 Problem Description

You are given an array nums of n integers and two integers k and x.

The x-sum of an array is calculated by the following procedure:


	Count the occurrences of all elements in the array.
	Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
	Calculate the sum of the resulting array.


Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

 
Example 1:


Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2

Output: [6,10,12]

Explanation:


	For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
	For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
	For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.



Example 2:


Input: nums = [3,8,7,8,7,5], k = 2, x = 2

Output: [11,15,15,15,12]

Explanation:

Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].


 
Constraints:


	1 <= n == nums.length <= 50
	1 <= nums[i] <= 50
	1 <= x <= k <= nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem "Find X-Sum of All K-Long Subarrays I" step-by-step.

### Problem Description

You are given an integer array `nums` and an integer `k`. The task is to find the sum of the maximum values of every subarray of length `k`.

### Example

For `nums = [1, 2, 3, 4, 5]` and `k = 3`, the k-long subarrays are:

- Subarray `[1, 2, 3]` → Max = 3
- Subarray `[2, 3, 4]` → Max = 4
- Subarray `[3, 4, 5]` → Max = 5

The sum of the maximums is `3 + 4 + 5 = 12`.

### Approach

To solve the problem efficiently, we can use a deque (double-ended queue) to keep track of the maximum values in the current window of size `k`. The deque will store indices of the elements in such a way that the front of the deque always has the maximum element for the current sliding window.

Here’s a step-by-step outline of the algorithm:

1. Initialize a deque to keep track of indices of the maximum elements.
2. Initialize a variable to keep the sum of maximums.
3. Loop through the elements of `nums`.
   - For each element, remove indices of elements that are out of the current window (i.e., indices less than `i - k + 1`).
   - Remove indices from the back of the deque while the elements at those indices are less than or equal to the current element because they will not be the maximum for any future windows.
   - Add the current index to the back of the deque.
   - If the current index `i` is greater than or equal to `k - 1`, it means we have formed a complete window, and we can add the maximum element (the front of the deque) to our sum.
4. Finally, return the sum.

### C++ Implementation

Here is a C++ implementation of the above approach:

```cpp
#include <iostream>
#include <vector>
#include <deque>

class Solution {
public:
    int maxSlidingWindowSum(std::vector<int>& nums, int k) {
        if (nums.empty() || k <= 0) return 0;

        std::deque<int> deq; // Store indices of useful elements
        int sum = 0;

        for (int i = 0; i < nums.size(); ++i) {
            // Remove indices that are out of the bounds of the window
            if (!deq.empty() && deq.front() <= i - k) {
                deq.pop_front();
            }

            // Remove elements from back while they are less than or equal to the current element
            while (!deq.empty() && nums[deq.back()] <= nums[i]) {
                deq.pop_back();
            }

            // Add current index to the deque
            deq.push_back(i);

            // The window is valid, we can start summing the max
            if (i >= k - 1) {
                sum += nums[deq.front()]; // The max element of the window
            }
        }

        return sum;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {1, 2, 3, 4, 5};
    int k = 3;
    int result = solution.maxSlidingWindowSum(nums, k);
    std::cout << "The sum of the maximums is: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code

- **Deque Usage**: We use a deque to store indices of array elements. We maintain the property that the largest element's index is always at the front, and indices of elements that are not useful for future windows are removed.
- **Sliding Window**: As we iterate, we remove indices that have gone out of the bounds for the current window size `k` and maintain the useful elements' indices.
- **Window Maximum**: When the window is fully formed (i.e., `i >= k - 1`), we add the maximum of the current window, which is the element at the index stored at the front of the deque, to the final sum.

This approach runs in O(n) time complexity, which is efficient for this problem.