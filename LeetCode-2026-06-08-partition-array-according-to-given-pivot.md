# LeetCode Daily – 2026-06-08

## 🧠 Problem #2161 – **Partition Array According to Given Pivot**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/partition-array-according-to-given-pivot)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:


	Every element less than pivot appears before every element greater than pivot.
	Every element equal to pivot appears in between the elements less than and greater than pivot.
	The relative order of the elements less than pivot and the elements greater than pivot is maintained.
	
		More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
	
	


Return nums after the rearrangement.

 
Example 1:


Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.


Example 2:


Input: nums = [-3,4,3,2], pivot = 2
Output: [-3,2,4,3]
Explanation: 
The element -3 is less than the pivot so it is on the left side of the array.
The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.


 
Constraints:


	1 <= nums.length <= 105
	-106 <= nums[i] <= 106
	pivot equals to an element of nums.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Partition Array According to Given Pivot," we need to rearrange the elements of the input array `nums` according to a defined pivot value such that:

1. All elements less than the pivot come before the elements equal to the pivot.
2. All elements equal to the pivot come before the elements greater than the pivot.

### Problem Description

Given an integer array `nums` and an integer `pivot`, we need to rearrange `nums` in a way that:
- Elements less than `pivot` appear first,
- Followed by elements equal to `pivot`,
- And finally, elements greater than `pivot` appear last.

For example, given `nums = [9, 12, 5, 10, 14, 3, 10]` and `pivot = 10`, the output would be one of the valid arrangements of the partition: `[9, 5, 3, 10, 10, 12, 14]`.

### Approach

We can achieve this by using a three-pointer technique:
1. Initialize three pointers: `left`, `middle`, and `right`.
    - `left` will track the position for elements less than `pivot`.
    - `middle` will traverse each element in the array.
    - `right` will track the position for elements greater than `pivot`.
  
2. We will use the `middle` pointer to scan through the array:
   - If `nums[middle] < pivot`, we swap `nums[left]` with `nums[middle]`, increment both `left` and `middle`.
   - If `nums[middle] == pivot`, we simply increment `middle`.
   - If `nums[middle] > pivot`, we swap `nums[middle]` with `nums[right]`, and decrement `right` (don't increment `middle` here because the swapped element at `middle` needs to be checked).

3. We continue this process until `middle` exceeds `right`.

### C++ Implementation

Here is a C++ implementation of the above logic:

```cpp
#include <vector>
#include <iostream>

using namespace std;

vector<int> pivotArray(vector<int>& nums, int pivot) {
    int left = 0;
    int middle = 0;
    int right = nums.size() - 1;

    while (middle <= right) {
        if (nums[middle] < pivot) {
            swap(nums[left], nums[middle]);
            left++;
            middle++;
        } else if (nums[middle] == pivot) {
            middle++;
        } else { // nums[middle] > pivot
            swap(nums[middle], nums[right]);
            right--;
        }
    }

    return nums;
}

int main() {
    vector<int> nums = {9, 12, 5, 10, 14, 3, 10};
    int pivot = 10;

    vector<int> result = pivotArray(nums, pivot);

    // Output the result
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
```

### Explanation of the Code

1. **Initialization**: 
   - We define `left`, `middle`, and `right` pointers.
   
2. **While Loop**:
   - The loop continues until `middle` exceeds `right`.
   - Depending on the comparison `nums[middle]` with `pivot`, the appropriate actions are taken:
     - If the value is less than the pivot, we swap it with the element at index `left` and move both pointers ahead.
     - If the value is equal to the pivot, we just advance `middle`.
     - If the value is greater than the pivot, we swap it with the element at `right` to move it to the end but don't advance `middle` because the swapped value must be evaluated.
   
3. **Result**: 
   - The function returns the rearranged `nums` array which is printed in `main`.

This algorithm operates in O(n) time complexity and O(1) space complexity, making it efficient for this problem.