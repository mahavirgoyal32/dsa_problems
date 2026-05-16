# LeetCode Daily – 2026-05-16

## 🧠 Problem #154 – **Find Minimum in Rotated Sorted Array II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii)

---

### 📝 Problem Description

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:


	[4,5,6,7,0,1,4] if it was rotated 4 times.
	[0,1,4,4,5,6,7] if it was rotated 7 times.


Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

You must decrease the overall operation steps as much as possible.

 
Example 1:
Input: nums = [1,3,5]
Output: 1
Example 2:
Input: nums = [2,2,2,0,1]
Output: 0

 
Constraints:


	n == nums.length
	1 <= n <= 5000
	-5000 <= nums[i] <= 5000
	nums is sorted and rotated between 1 and n times.


 
Follow up: This problem is similar to Find Minimum in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Find Minimum in Rotated Sorted Array II" is a variant of a classic problem where you are asked to find the minimum in a rotated sorted array that may contain duplicates. The challenge here is to handle the duplicates while ensuring efficient searching.

### Problem Explanation

- You are given an array that was originally sorted in increasing order but has been rotated at some pivot. 
- The array may contain duplicates, which complicates finding the minimum element. 
- The task is to find the minimum element in O(log n) time complexity when there are no duplicates. However, due to duplicates, we may need to resort to O(n) in some cases.

### Solution Approach

1. **Binary Search**: We'll use a modified binary search algorithm to find the minimum.
2. **Handling Duplicates**: When the mid element is equal to the leftmost or rightmost elements, we cannot determine the sorted half reliably. Hence, in that case, we increment the left index (`left++`) or decrement the right index (`right--`), effectively reducing the search space by one.
3. **Comparison**:
   - If the mid element is greater than the rightmost element, then the minimum must be in the right half, so we move our left pointer to `mid + 1`.
   - If the mid element is less than or equal to the rightmost element, it means the right half is sorted, so we adjust the right pointer to `mid`.

### C++ Code

Here's the implementation of the above approach:

```cpp
#include <vector>
#include <iostream>

int findMin(std::vector<int>& nums) {
    if (nums.empty()) {
        return -1; // should handle empty input as per context; usually it doesn't arise in this specific problem.
    }
    
    int left = 0;
    int right = nums.size() - 1;

    while (left < right) {
        int mid = left + (right - left) / 2;

        // If the element at mid is greater than the element at right, 
        // it means the minimum is in the right half.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // If the element at mid is less than or equal to the element at right,
        // it means the right half is sorted and the minimum is in the left half
        else if (nums[mid] < nums[right]) {
            right = mid;
        } 
        // If nums[mid] == nums[right], we cannot decide the sorted half, 
        // reduce the search space by moving the right pointer.
        else {
            right--;
        }
    }

    return nums[left];
}

int main() {
    std::vector<int> nums = {2, 2, 2, 0, 1, 2};
    std::cout << "The minimum is: " << findMin(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code

- We start with two pointers: `left` and `right`. The `left` pointer starts from the beginning of the array and `right` from the end.
- In each iteration of the while loop:
  - We calculate the `mid` index.
  - We make decisions based on the comparison of `nums[mid]` with `nums[right]`:
    - If `nums[mid] > nums[right]`, it indicates that the minimum value lies in the right half, so we move the `left` pointer to `mid + 1`.
    - If `nums[mid] < nums[right]`, the right half is sorted, and we can safely adjust `right` to `mid`.
    - If they are equal (`nums[mid] == nums[right]`), there is no clear half to choose, and thus we reduce the `right` pointer to `right - 1` to eliminate one possible duplicate and continue searching.
- The loop continues until the `left` pointer meets the `right` pointer, at which point the minimum element is found at the `left` index.

### Time Complexity
The average case for this approach is O(log n), but in the worst case (when all elements are duplicates), the complexity can degrade to O(n). 

### Conclusion
This C++ implementation effectively finds the minimum in a rotated sorted array that may contain duplicates through a systematic reduction of the search space using binary search techniques.