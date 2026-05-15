# LeetCode Daily – 2026-05-15

## 🧠 Problem #153 – **Find Minimum in Rotated Sorted Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)

---

### 📝 Problem Description

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:


	[4,5,6,7,0,1,2] if it was rotated 4 times.
	[0,1,2,4,5,6,7] if it was rotated 7 times.


Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 
Example 1:


Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.


Example 2:


Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.


Example 3:


Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


 
Constraints:


	n == nums.length
	1 <= n <= 5000
	-5000 <= nums[i] <= 5000
	All the integers of nums are unique.
	nums is sorted and rotated between 1 and n times.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Find Minimum in Rotated Sorted Array" is a classic problem that can be solved efficiently using a binary search technique.

### Problem Explanation:

Given an array that was initially sorted in ascending order but then rotated at an unknown pivot, the task is to find the minimum element in the array. The array does not contain duplicates.

For example:
- Input: `[3, 4, 5, 1, 2]`
- Output: `1`

### Approach:

1. **Binary Search**: Since the array is rotated, a straightforward linear search would take O(N) time. Instead, we can utilize a modified binary search to determine the minimum efficiently in O(log N) time.

2. **Identifying Pivot**:
    - The idea is to find the pivot point where the array was rotated. The left and right pointers help to determine the sorted halves.
    - If the middle element is greater than the rightmost element, it means the smallest element is in the right half. Otherwise, it is in the left half.

3. **Handling Edge Cases**: If the array is not rotated (i.e., the first element is less than the last element), simply return the first element.

### C++ Implementation:

Here’s the code to solve the problem:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    int findMin(std::vector<int>& nums) {
        if (nums.empty()) return -1; // Edge case check

        int left = 0, right = nums.size() - 1;

        // While the search space is valid
        while (left < right) {
            int mid = left + (right - left) / 2; // Prevent potential overflow

            // If mid element is greater than rightmost element,
            // it means the smallest value is in the right half.
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Otherwise, it's in the left half (including mid)
                right = mid;
            }
        }

        // At the end of loop, left == right and pointing at the smallest element
        return nums[left];
    }
};

int main() {
    Solution sol;
    std::vector<int> nums = {3, 4, 5, 1, 2};
    std::cout << "The minimum element is: " << sol.findMin(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code:

- We define a class `Solution` that contains the method `findMin`.
- We initialize two pointers, `left` and `right`, to the start and end of the array respectively.
- We enter a loop that continues until `left` is less than `right`.
- We calculate the `mid` index to find the middle element.
- If `nums[mid]` is greater than `nums[right]`, it indicates that the minimum value lies to the right of `mid`, so we move `left` to `mid + 1`.
- If `nums[mid]` is less than or equal to `nums[right]`, the minimum is to the left, including `mid`, so we reduce `right` to `mid`.
- The loop continues until `left` equals `right`, at which point we’ve found the minimum element.

### Complexity Analysis:
- **Time Complexity**: O(log N) due to the binary search approach.
- **Space Complexity**: O(1) since no additional space proportional to input size is used.

This method is efficient and elegantly utilizes the properties of the rotated sorted array.