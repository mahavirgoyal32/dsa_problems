# LeetCode Daily – 2026-09-02

## 🧠 Problem #3875 – **Construct Uniform Parity Array I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/construct-uniform-parity-array-i)

---

### 📝 Problem Description

You are given an array nums1 of n distinct integers.

You want to construct another array nums2 of length n such that the elements in nums2 are either all odd or all even.

For each index i, you must choose exactly one of the following (in any order):


	nums2[i] = nums1[i]
	nums2[i] = nums1[i] - nums1[j], for an index j != i


Return true if it is possible to construct such an array, otherwise, return false.

 
Example 1:


Input: nums1 = [2,3]

Output: true

Explanation:


	Choose nums2[0] = nums1[0] - nums1[1] = 2 - 3 = -1.
	Choose nums2[1] = nums1[1] = 3.
	nums2 = [-1, 3], and both elements are odd. Thus, the answer is true​​​​​​​.



Example 2:


Input: nums1 = [4,6]

Output: true

Explanation:​​​​​​​


	Choose nums2[0] = nums1[0] = 4.
	Choose nums2[1] = nums1[1] = 6.
	nums2 = [4, 6], and all elements are even. Thus, the answer is true.



 
Constraints:


	1 <= n == nums1.length <= 100
	1 <= nums1[i] <= 100
	nums1 consists of distinct integers.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Construct Uniform Parity Array I" requires us to construct an array such that all elements in the array have the same parity (either all even or all odd) and they are in a specific range defined by a given integer `n`.

### Problem Explanation

You are given an integer `n`. The task is to create an array of size `n` where each element of the array must either be all odd or all even numbers.

#### Steps to Solve the Problem:

1. **Understanding Even and Odd Parity**:
   - An array has even parity if all its elements are even numbers.
   - An array has odd parity if all its elements are odd numbers.

2. **Construct the Array**:
   - Based on the value of `n`, we can construct:
     - **Even Parity Array**: Use even numbers starting from 0, i.e., `0, 2, 4, ..., 2*(n-1)`.
     - **Odd Parity Array**: Use odd numbers starting from 1, i.e., `1, 3, 5, ..., 2*n - 1`.

3. **Choose one type**:
   - You can choose to implement either even parity or odd parity based on any condition. For this solution, we will demonstrate the even parity array.

### C++ Implementation

Here's how you can implement the solution in C++:

```cpp
#include <vector>

class Solution {
public:
    std::vector<int> constructArray(int n) {
        std::vector<int> result(n);
        
        for (int i = 0; i < n; ++i) {
            result[i] = 2 * i; // Fill with even numbers starting from 0
        }
        
        return result;
    }
};
```

### Explanation of the Code:

1. **Vector Initialization**:
   - We create a `std::vector<int>` named `result` that will store the resulting array. The size of this vector is `n`.

2. **Loop Through `n`**:
   - A loop runs from 0 to `n-1`. For each `i`, we fill the `result[i]` with the value `2 * i`. This generates even numbers starting from 0 in the sequence `0, 2, 4, ..., 2*(n-1)`.

3. **Return the Result**:
   - The constructed array is returned.

### Example Usage

If you create an instance of the `Solution` class and call the `constructArray` method with an input, say `n = 5`, the output will be:

```cpp
Solution sol;
std::vector<int> output = sol.constructArray(5);
// Output: [0, 2, 4, 6, 8] (5 even numbers)
```

This will return an even parity array of size 5.

### Conclusion

The key takeaway from this problem is the ability to iterate and create an array based on a specific condition (even or odd). The implementation is straightforward, and the time complexity is O(n), which is efficient for this task.