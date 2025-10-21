# LeetCode Daily – 2025-10-21

## 🧠 Problem #3346 – **Maximum Frequency of an Element After Performing Operations I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i)

---

### 📝 Problem Description

You are given an integer array nums and two integers k and numOperations.

You must perform an operation numOperations times on nums, where in each operation you:


	Select an index i that was not selected in any previous operations.
	Add an integer in the range [-k, k] to nums[i].


Return the maximum possible frequency of any element in nums after performing the operations.

 
Example 1:


Input: nums = [1,4,5], k = 1, numOperations = 2

Output: 2

Explanation:

We can achieve a maximum frequency of two by:


	Adding 0 to nums[1]. nums becomes [1, 4, 5].
	Adding -1 to nums[2]. nums becomes [1, 4, 4].



Example 2:


Input: nums = [5,11,20,20], k = 5, numOperations = 1

Output: 2

Explanation:

We can achieve a maximum frequency of two by:


	Adding 0 to nums[1].



 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 105
	0 <= k <= 105
	0 <= numOperations <= nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem titled "Maximum Frequency of an Element After Performing Operations I" requires us to determine the maximum frequency of an element in an array after we can perform a series of operations that allow us to increment any element by 1. The goal is to find the maximum possible frequency of any number in the array after performing such operations.

### Problem Breakdown

1. **Input and Constraints**: 
   - An integer array `nums`.
   - An integer `k`, which is the maximum total increment we can apply across the array.

2. **Operations Allowed**:
   - Increase any element in the array `nums[i]` by 1 up to a total increment of `k`.

3. **Output**: 
   - The maximum frequency of any number in `nums` after performing the operations optimally.

### Approach
To solve this problem, we can use the two-pointer technique along with sorting to efficiently determine the maximum frequency we can achieve.

1. **Sort the Array**:
   Start by sorting `nums`. This allows us to consider groups of similar numbers together and strategize the increments efficiently.

2. **Two-Pointer Technique**:
   Use a sliding window defined by two pointers:
   - `left`: starting point of the current window.
   - `right`: current end of the window.

   We'll explore the numbers between these two pointers to see how much we can increment the elements to match the number at `right`.

3. **Increment Calculation**:
   The number of increments needed to make all numbers in the current window equal to `nums[right]` can be calculated by the formula:
   ```
   increments_needed = (nums[right] * (right - left + 1)) - sum of window elements
   ```
   If `increments_needed` is less than or equal to `k`, then all elements in the window can be incremented to `nums[right]`, and we can update our maximum frequency.

4. **Update Pointers**:
   If `increments_needed` exceeds `k`, we need to move the `left` pointer to shrink the window and recalculate.

### C++ Code

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxFrequency(std::vector<int>& nums, int k) {
        // Step 1: Sort the array
        std::sort(nums.begin(), nums.end());
        int left = 0;
        long sum = 0;
        int max_freq = 1;

        // Step 2: Use a sliding window
        for (int right = 0; right < nums.size(); ++right) {
            sum += nums[right];

            // Calculate number of increments needed to make all elements in window equal nums[right]
            while ((nums[right] * (right - left + 1)) - sum > k) {
                // If we exceed k, we need to shrink the window from the left
                sum -= nums[left];
                left++;
            }

            // We can form a valid window, update the maximum frequency
            max_freq = std::max(max_freq, right - left + 1);
        }

        return max_freq;
    }
};
```

### Explanation of the Code

- We first sort the `nums` array to efficiently handle the increments based on the current target number at `right`.
- We maintain a `sum` of the current window to easily calculate the total increments required.
- As we iterate through the numbers with the `right` pointer, we check if the increments needed exceed `k`.
- If it does, we increment the `left` pointer to reduce the window size until we can fit the required increments within `k` again.
- Throughout the process, we track the maximum frequency calculated from the valid window sizes.

### Complexity Analysis
- **Time Complexity**: \(O(n \log n)\), due to sorting the array, where \(n\) is the number of elements in `nums`.
- **Space Complexity**: \(O(1)\), since we are using a constant amount of additional space, apart from the input list.

This approach is efficient and works well within the constraints likely imposed by the problem.