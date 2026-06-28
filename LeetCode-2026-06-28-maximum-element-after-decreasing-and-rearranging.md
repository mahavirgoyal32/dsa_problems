# LeetCode Daily – 2026-06-28

## 🧠 Problem #1846 – **Maximum Element After Decreasing and Rearranging**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging)

---

### 📝 Problem Description

You are given an array of positive integers arr. Perform some operations (possibly none) on arr so that it satisfies these conditions:


	The value of the first element in arr must be 1.
	The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, abs(arr[i] - arr[i - 1]) <= 1 for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.


There are 2 types of operations that you can perform any number of times:


	Decrease the value of any element of arr to a smaller positive integer.
	Rearrange the elements of arr to be in any order.


Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.

 
Example 1:


Input: arr = [2,2,1,2,1]
Output: 2
Explanation: 
We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
The largest element in arr is 2.


Example 2:


Input: arr = [100,1,1000]
Output: 3
Explanation: 
One possible way to satisfy the conditions is by doing the following:
1. Rearrange arr so it becomes [1,100,1000].
2. Decrease the value of the second element to 2.
3. Decrease the value of the third element to 3.
Now arr = [1,2,3], which satisfies the conditions.
The largest element in arr is 3.


Example 3:


Input: arr = [1,2,3,4,5]
Output: 5
Explanation: The array already satisfies the conditions, and the largest element is 5.


 
Constraints:


	1 <= arr.length <= 105
	1 <= arr[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Element After Decreasing and Rearranging" requires us to manipulate an array of integers such that after we decrease elements and rearrange them, we want to maximize the largest element of the final array. 

### Problem Explanation:
Given an array `arr`, our goal is to determine the maximum value after we apply a specific operation of decreasing and rearranging the elements. The valid operations are:
1. We can decrease an element's value to a number not less than its index + 1 in sorted order.
2. We can rearrange the elements in any way we want after the decreases.

### Key Insight:
1. Once sorted, the integer at index `i` within the sorted array cannot be greater than `i + 1` (the maximum value it can take).
2. Therefore, the maximum possible value for the last element (the largest when sorted) can be defined by the minimum of `i + 1` for all indices `i`. 
3. The feasible max element is essentially bounded by the smallest of the original values after the operation (the original must at least be 1).

### Approach:
1. Sort the array to assess possible placement after decreasing.
2. Traverse the sorted array and ensure each element meets the criteria of being no greater than `i + 1`.
3. Track the largest valid value during this traversal.

### Steps in Code:
1. Sort the array.
2. Iterate through the sorted array while keeping track of the maximum possible allowed value for each index.
3. Ensure that each element does not exceed this allowed value and update accordingly.

### C++ Code Implementation:
```cpp
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int maximumElementAfterDecreasingAndRearranging(std::vector<int>& arr) {
        // Step 1: Sort the array
        std::sort(arr.begin(), arr.end());
        
        // Step 2: Initialize current max allowed value
        int maxAllowed = 0;
        
        // Step 3: Traverse the sorted array and update the maxAllowed value
        for (int i = 0; i < arr.size(); ++i) {
            // Calculate the allowable maximum for the current index
            maxAllowed++;
            
            // The maximum we can allow at this position is 
            // the minimum of the current sorted value and what we've allowed
            if (arr[i] < maxAllowed) {
                maxAllowed = arr[i]; // If it's less than allowed, limit it to arr[i]
            }
        }
        
        return maxAllowed; // The result will be the maxAllowed value
    }
};
```

### Explanation of the Code:
1. **Sorting**: We start by sorting the input array `arr`. This way, we can guarantee that all elements are considered in the order of their values.
2. **Iteration**: As we iterate, we calculate the maximum allowed value for each position based on index and the constraint that it cannot exceed the current element.
3. **Condition Checks**: We check if the current sorted value can exceed the max allowed. If it does, we reset max allowed to the value of the current sorted element to maintain feasibility.
4. **Return Value**: Finally, after processing the array, the value in `maxAllowed` will reflect the maximum element possible after all operations are considered.

This ensures that the solution is both efficient (O(n log n) due to sorting) and clear, encapsulating the constraints effectively.