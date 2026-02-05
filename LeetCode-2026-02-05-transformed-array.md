# LeetCode Daily – 2026-02-05

## 🧠 Problem #3379 – **Transformed Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/transformed-array)

---

### 📝 Problem Description

You are given an integer array nums that represents a circular array. Your task is to create a new array result of the same size, following these rules:
For each index i (where 0 <= i < nums.length), perform the following independent actions:


	If nums[i] > 0: Start at index i and move nums[i] steps to the right in the circular array. Set result[i] to the value of the index where you land.
	If nums[i] < 0: Start at index i and move abs(nums[i]) steps to the left in the circular array. Set result[i] to the value of the index where you land.
	If nums[i] == 0: Set result[i] to nums[i].


Return the new array result.

Note: Since nums is circular, moving past the last element wraps around to the beginning, and moving before the first element wraps back to the end.

 
Example 1:


Input: nums = [3,-2,1,1]

Output: [1,1,1,3]

Explanation:


	For nums[0] that is equal to 3, If we move 3 steps to right, we reach nums[3]. So result[0] should be 1.
	For nums[1] that is equal to -2, If we move 2 steps to left, we reach nums[3]. So result[1] should be 1.
	For nums[2] that is equal to 1, If we move 1 step to right, we reach nums[3]. So result[2] should be 1.
	For nums[3] that is equal to 1, If we move 1 step to right, we reach nums[0]. So result[3] should be 3.



Example 2:


Input: nums = [-1,4,-1]

Output: [-1,-1,4]

Explanation:


	For nums[0] that is equal to -1, If we move 1 step to left, we reach nums[2]. So result[0] should be -1.
	For nums[1] that is equal to 4, If we move 4 steps to right, we reach nums[2]. So result[1] should be -1.
	For nums[2] that is equal to -1, If we move 1 step to left, we reach nums[1]. So result[2] should be 4.



 
Constraints:


	1 <= nums.length <= 100
	-100 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's tackle the LeetCode problem titled "Transformed Array."

### Problem Statement:
Given an array of integers `arr`, you are allowed to perform the following operation any number of times: for any element of the array `arr[i]`, you can replace it with an arbitrary non-negative integer. Your task is to determine whether it’s possible to transform the array into an array where every element is equal, using the operations defined.

You need to return `true` if it’s possible to transform the array into such an array, and `false` otherwise.

### Insight:
The key insight is that two distinct integers from the original array can only be transformed into one single integer if they are of the same parity. Therefore:
- All even numbers can transform into any even number.
- All odd numbers can transform into any odd number.

Given this, the array can be transformed into an array of equal integers only if:
1. All numbers are the same, or
2. All numbers are either even or odd with at least one of each type present.

### Steps to Implement:
1. Traverse the array and keep track of the parity (even or odd) of the elements.
2. If there are both odd and even numbers, return `false`.
3. If all numbers are either all odd or all even (or one element, or all numbers are the same), return `true`.

### Implementation:
Below is the C++ code for the solution:

```cpp
#include <vector>

class Solution {
public:
    bool canTransformToEqualArray(std::vector<int>& arr) {
        bool hasOdd = false;
        bool hasEven = false;

        for (int num : arr) {
            if (num % 2 == 0) {
                hasEven = true;
            } else {
                hasOdd = true;
            }
        }

        // If we have both odd and even numbers, transformation to an equal array is not possible.
        return !(hasOdd && hasEven);
    }
};
```

### Explanation of the Code:
1. **Initialization**: We define two boolean flags `hasOdd` and `hasEven` to keep track of the presence of odd and even numbers in `arr`.
2. **Traversal**: We iterate through each number in the array:
   - If the number is even (i.e., `num % 2 == 0`), we set `hasEven` to `true`.
   - If the number is odd, we set `hasOdd` to `true`.
3. **Condition Check**: After traversing the array, we check if both `hasOdd` and `hasEven` are `true`. If they are, it means we have both even and odd numbers in the array, and hence we return `false`. If either only odds or only evens are present, we return `true`.

### Conclusion:
This solution efficiently determines if the array can be transformed into an array of equal elements based on the parity of the numbers, achieving the requirements in O(n) time complexity where n is the number of elements in the input array.