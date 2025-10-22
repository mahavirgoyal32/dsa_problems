# LeetCode Daily – 2025-10-22

## 🧠 Problem #3347 – **Maximum Frequency of an Element After Performing Operations II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii)

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


	Adding 0 to nums[1], after which nums becomes [1, 4, 5].
	Adding -1 to nums[2], after which nums becomes [1, 4, 4].



Example 2:


Input: nums = [5,11,20,20], k = 5, numOperations = 1

Output: 2

Explanation:

We can achieve a maximum frequency of two by:


	Adding 0 to nums[1].



 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	0 <= k <= 109
	0 <= numOperations <= nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's walk through the problem titled "Maximum Frequency of an Element After Performing Operations II".

### Problem Overview

You are given an array of integers `nums`. You can perform operations to increment integers in the array, and your goal is to maximize the frequency of any integer in the array.

You can increment any element `x` by `k` (i.e., `x = x + k`) any number of times. The main constraint is that every operation costs `k` units. Given this, you want to determine the maximum frequency of any integer after performing a series of operations.

### Approach

To solve the problem, we can use a two-pointer technique (also known as the sliding window approach) combined with a greedy strategy. Here's a step-by-step breakdown of how to achieve this:

1. **Sort the Array**: Start by sorting the array. This makes it easier to work with consecutive elements, allowing us to focus on the frequency of each number.
  
2. **Two-Pointers**: Use two pointers to define a sliding window on the sorted array. The left pointer will represent the start of the window, while the right pointer expands the window to include more elements and check if they can be transformed to a single common value.

3. **Cost Calculation**: For each new right pointer position, calculate the cost to increment all the elements in the window ([left, right]) to match the right pointer element. If the total cost exceeds the available operations to make all elements equal, move the left pointer to shrink the window.

4. **Track Maximum Frequency**: Throughout the process, keep track of the maximum frequency of the element you can achieve based on the positions of the two pointers.

### Implementation

Here's a C++ solution based on the above logic:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxFrequency(std::vector<int>& nums, int k) {
        // Step 1: Sort the array
        std::sort(nums.begin(), nums.end());
        
        int left = 0; // Left pointer for the sliding window
        long long total = 0; // To accumulate the total cost
        int maxFreq = 0; // To track the maximum frequency

        // Step 2: Iterate with the right pointer
        for (int right = 0; right < nums.size(); right++) {
            // The current number we are transforming others to
            total += nums[right];

            // Calculate the cost to make all elements in the window equal to nums[right]
            // Cost to make all nums[left]...nums[right-1] equal to nums[right]
            while (nums[right] * (right - left + 1) > total + k) {
                total -= nums[left]; // Reduce the total by the left element
                left++; // Move the left pointer to shrink the window
            }
            
            // Update the max frequency
            maxFreq = std::max(maxFreq, right - left + 1);
        }

        return maxFreq;
    }
};
```

### Explanation of the Code

1. We start by sorting the `nums` array.
   
2. We initialize:
   - `left` pointer at the start (0).
   - `total` to accumulate the sum of the current window.
   - `maxFreq` to keep track of the maximum frequency found.

3. We iterate through the array with the `right` pointer:
   - For each element at `right`, add its value to `total`.
   - Calculate the cost required to make all values from `nums[left]` to `nums[right]` equal to `nums[right]`. The condition to validate is if the total cost exceeds the available operations (i.e., `total + k`).
   - If it does exceed, increment the `left` pointer and update the `total` by removing the value of `nums[left]`.
   
4. Update the `maxFreq` with the current size of the window (`right - left + 1`) which reflects how many elements can be turned into `nums[right]`.

5. Finally, return `maxFreq`.

The use of sorting ensures that we can always find the closest possible value to which we can normalize all elements, and the sliding window technique keeps the process efficient.

### Time Complexity

- The sorting step takes \(O(n \log n)\), where \(n\) is the number of elements in `nums`.
- The two-pointer traversal operates in \(O(n)\).
Thus, the overall time complexity is \(O(n \log n)\). 

### Conclusion

This approach efficiently determines the maximum frequency of an integer accessible through the defined operations with a solid blend of sorting and sliding window method, adhering to optimal time complexity for large datasets.