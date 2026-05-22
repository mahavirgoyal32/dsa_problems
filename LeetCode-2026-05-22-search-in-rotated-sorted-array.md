# LeetCode Daily – 2026-05-22

## 🧠 Problem #33 – **Search in Rotated Sorted Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/search-in-rotated-sorted-array)

---

### 📝 Problem Description

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1

 
Constraints:


	1 <= nums.length <= 5000
	-104 <= nums[i] <= 104
	All values of nums are unique.
	nums is an ascending array that is possibly rotated.
	-104 <= target <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem is about searching for a target value in a rotated sorted array. A rotated sorted array is a sorted array that has been rotated at some pivot unknown to you beforehand. 

Here's the problem statement:

You are given an integer array `nums` sorted in ascending order, which is then rotated at an unknown pivot index. You are also given an integer `target`. Your goal is to search for `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1.

### Explanation:
1. **Understanding the Rotated Sorted Array**: 
   - The array might look something like this: `[4,5,6,7,0,1,2]`. Here, it's sorted but rotated at the pivot index 3.
   - The key property of this array is that it is divided into two sorted subarrays. One of these will always be sorted.

2. **Search Algorithm**: 
   - We can use a modified binary search to find the target.
   - First, determine which part of the array is sorted.
   - Once you find a sorted half, you can determine if the target lies within that half or not.
   - If it does lie within, adjust your search space accordingly; otherwise, search in the other half.

3. **Time Complexity**: 
   - Since we are using a binary search approach, the time complexity is O(log n).

### C++ Implementation:
Here's how you can implement this solution in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Avoid potential overflow
            
            if (nums[mid] == target) {
                return mid; // Found the target
            }

            // Determine which part is sorted
            if (nums[left] <= nums[mid]) { // Left half is sorted
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1; // Target in the left half
                } else {
                    left = mid + 1; // Target in the right half
                }
            } else { // Right half is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1; // Target in the right half
                } else {
                    right = mid - 1; // Target in the left half
                }
            }
        }

        return -1; // Target not found
    }
};
```

### Explanation of Code:

- **Initialization**: We start with two pointers, `left` and `right`, representing the bounds of our search space.
- **Binary Search Loop**: We run a loop until `left` is greater than `right`.
  - We calculate the midpoint `mid`.
  - If the element at `mid` is equal to the target, we return `mid`.
  - We check which half of the array is sorted:
    - If the left half from `left` to `mid` is sorted, we check if the target lies within this range (`nums[left]` to `nums[mid]`). If it does, we narrow our search space to this half; otherwise, we search the right half.
    - If the right half from `mid` to `right` is sorted, we do the opposite check for the target.
- If we exit the loop without finding the target, we return `-1`.

This approach efficiently narrows down the potential space where the target could be based on the properties of the rotated sorted array.