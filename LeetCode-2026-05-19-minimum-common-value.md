# LeetCode Daily – 2026-05-19

## 🧠 Problem #2540 – **Minimum Common Value**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-common-value)

---

### 📝 Problem Description

Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 
Example 1:


Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.


Example 2:


Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.


 
Constraints:


	1 <= nums1.length, nums2.length <= 105
	1 <= nums1[i], nums2[j] <= 109
	Both nums1 and nums2 are sorted in non-decreasing order.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Minimum Common Value" on LeetCode asks us to find the smallest integer that is present in both of two given sorted arrays. If there is no common integer, we should return -1.

Let's break down the problem and come up with an efficient solution in C++.

### Problem Breakdown

1. **Input**: Two sorted arrays `A` and `B`.
2. **Output**: The smallest common integer in both arrays or -1 if there is none.
3. **Constraints**: Given that the arrays are sorted, we can leverage this property to find the common integer efficiently.

### Approach

The most effective approach is using a two-pointer technique. Since both arrays are sorted, we can start pointing at the beginning of both arrays and compare the current elements.

1. Initialize two pointers, `i` for array `A` and `j` for array `B`.
2. While both pointers are within the bounds of their respective arrays:
   - If `A[i]` is equal to `B[j]`, simply return `A[i]` as it is the minimum common value.
   - If `A[i]` is less than `B[j]`, increment pointer `i` to move to the next element in `A`.
   - Otherwise, increment pointer `j` to move to the next element in `B`.
3. If we exhaust one of the arrays without finding a common value, return -1.

### C++ Implementation

Here’s the implementation based on the above logic:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int getCommon(vector<int>& A, vector<int>& B) {
        int i = 0, j = 0; // Initialize two pointers for both arrays
        
        while (i < A.size() && j < B.size()) { // Loop until one of the pointers reaches the end
            if (A[i] == B[j]) {
                return A[i]; // Found common value
            } 
            else if (A[i] < B[j]) {
                i++; // Move pointer in A forward
            } 
            else {
                j++; // Move pointer in B forward
            }
        }
        
        return -1; // No common value found
    }
};
```

### Explanation of the Code

- We define a class `Solution` with a public method `getCommon` that takes two vectors `A` and `B`.
- We initialize two indices `i` and `j` at 0 to track our current position in `A` and `B` respectively.
- We use a `while` loop to iterate through both arrays as long as we haven't reached the end of either array.
- Inside the loop:
  - We check if the current elements are equal. If they are, we immediately return that element.
  - If the element in `A` is less than the one in `B`, we increment `i` to check the next element in `A`.
  - Otherwise, we increment `j` to check the next element in `B`.
- If we exit the loop, it means we didn’t find any common element, so we return -1.

### Complexity Analysis

- **Time Complexity**: O(N + M), where N is the size of array `A` and M is the size of array `B`. In the worst case, we may go through all elements of both arrays.
- **Space Complexity**: O(1), since we are using only a fixed amount of additional space for indices regardless of the input size.

This approach efficiently finds the minimum common value if it exists, using the sorted property of the input arrays.