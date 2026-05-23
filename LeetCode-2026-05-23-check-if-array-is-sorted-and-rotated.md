# LeetCode Daily – 2026-05-23

## 🧠 Problem #1752 – **Check if Array Is Sorted and Rotated**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated)

---

### 📝 Problem Description

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

 
Example 1:


Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].


Example 2:


Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.


Example 3:


Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.


 
Constraints:


	1 <= nums.length <= 100
	1 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of checking if an array is sorted and rotated, we need to understand a few key aspects of the characteristics of such an array. Here’s a breakdown of the approach we can take:

### Key Observations

1. **Sorted and Rotated Nature**: An array is sorted and rotated if:
   - All elements are in non-decreasing order.
   - There is a point in the array (called the pivot) where the order 'breaks' but still remains sorted around that pivot.

2. **Transitions**: When traversing the array, we can identify this pivot by counting how many times the array "breaks" the sorted order, i.e., how many times an element is greater than the next element.

3. **Conditions for Validity**:
   - If there are 0 breaks, the array is already sorted (which is also a valid rotated case).
   - If there is 1 break, the array is sorted and rotated.
   - If there are more than 1 break, the array is not sorted and rotated.

Now, let's implement this in C++.

### C++ Implementation

```cpp
#include <vector>

class Solution {
public:
    bool check(std::vector<int>& nums) {
        int n = nums.size();
        if (n <= 1) {
            return true; // An array with 0 or 1 element is trivially sorted and rotated.
        }

        int countBreaks = 0;

        // Traverse the array to count breaks
        for (int i = 0; i < n; i++) {
            // Check if current element is greater than the next element
            if (nums[i] > nums[(i + 1) % n]) {
                countBreaks++;
            }
            // If there are more than 1 break, return false
            if (countBreaks > 1) {
                return false;
            }
        }

        // If we have 0 or 1 breaks, it's sorted and rotated
        return true;
    }
};
```

### Explanation of the Code

1. **Input Handling**:
   - We first check if the size of the array is less than or equal to 1. If yes, we can directly return `true` since such arrays are trivially sorted and rotated.

2. **Counting Breaks**:
   - We set a variable `countBreaks` to count the number of "breaks" while iterating through the array.
   - We loop through each element, comparing it to the next one using modulo to wrap around at the end of the array (`(i + 1) % n` handles the rotation).

3. **Breaking Condition**:
   - If more than one break is found, we return `false` immediately, as it indicates that the array cannot be sorted and rotated.

4. **Final Check**:
   - If we finish our check with either 0 or 1 breaks, we return `true`, signaling the array is indeed sorted and rotated.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the number of elements in the array. We only make a single pass through the array.
- **Space Complexity**: O(1), as we are not utilizing any additional data structures that depend on the input size.

This approach is efficient and easy to understand, leveraging the properties of a sorted and rotated array.