# LeetCode Daily – 2026-10-12

## 🧠 Problem #2897 – **Apply Operations on Array to Maximize Sum of Squares**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums and a positive integer k.

You can do the following operation on the array any number of times:


	Choose any two distinct indices i and j and simultaneously update the values of nums[i] to (nums[i] AND nums[j]) and nums[j] to (nums[i] OR nums[j]). Here, OR denotes the bitwise OR operation, and AND denotes the bitwise AND operation.


You have to choose k elements from the final array and calculate the sum of their squares.

Return the maximum sum of squares you can achieve.

Since the answer can be very large, return it modulo 109 + 7.

 
Example 1:


Input: nums = [2,6,5,8], k = 2
Output: 261
Explanation: We can do the following operations on the array:
- Choose i = 0 and j = 3, then change nums[0] to (2 AND 8) = 0 and nums[3] to (2 OR 8) = 10. The resulting array is nums = [0,6,5,10].
- Choose i = 2 and j = 3, then change nums[2] to (5 AND 10) = 0 and nums[3] to (5 OR 10) = 15. The resulting array is nums = [0,6,0,15].
We can choose the elements 15 and 6 from the final array. The sum of squares is 152 + 62 = 261.
It can be shown that this is the maximum value we can get.


Example 2:


Input: nums = [4,5,4,7], k = 3
Output: 90
Explanation: We do not need to apply any operations.
We can choose the elements 7, 5, and 4 with a sum of squares: 72 + 52 + 42 = 90.
It can be shown that this is the maximum value we can get.


 
Constraints:


	1 <= k <= nums.length <= 105
	1 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "Apply Operations on Array to Maximize Sum of Squares".

### Problem Explanation
You are given an integer array `nums` of size `n`. The goal is to perform operations on this array to maximize the sum of squares of the resultant elements. The allowed operation is to double the value of an element `nums[i]` and set `nums[i + 1]` to `0`, for each valid `i` in the range [0, n - 2].

The task is to apply these operations in such a way to maximize the expression:

\[ \text{result} = \sum_{i=0}^{n-1} \text{result}[i]^2 \]

### Strategy
To tackle this problem, we can summarize our approach:

1. Iterate through the array and perform the operations.
2. Keep track of valid transformed values, ignoring zeroes generated from the operation.
3. Once we have an array of non-zero values, we can maximize the sum of squares.

### Steps
1. Start scanning the array `nums` from the first element to the second-to-last element.
2. If you find two consecutive elements where the first can be doubled (i.e., `nums[i]` is non-zero), apply the operation to double `nums[i]` and set `nums[i + 1]` to zero.
3. Collect all elements that are non-zero.
4. Compute the result by summing up the squares of the collected numbers.

### C++ Code Implementation
Here’s how you could implement this in C++:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    int maximumSumOfSquares(std::vector<int>& nums) {
        int n = nums.size();
        std::vector<int> modified;  // To store non-zero transformed numbers
        
        for (int i = 0; i < n; i++) {
            if (i < n - 1 && nums[i] > 0) {  // Perform operation if possible
                nums[i] *= 2;               // Double nums[i]
                nums[i + 1] = 0;            // Set next to zero
            }
            if (nums[i] != 0) {
                modified.push_back(nums[i]); // Collect non-zero elements
            }
        }
        
        // Now compute the sum of squares
        long long result = 0; // Use long long to prevent overflow
        for (int num : modified) {
            result += (long long)num * num;
        }
        
        return result; // Return the computed maximum sum of squares
    }
};

// Example usage
int main() {
    Solution sol;
    std::vector<int> nums = {1, 2, 3, 4}; // Example case
    std::cout << "Maximum Sum of Squares: " << sol.maximumSumOfSquares(nums) << std::endl;
    return 0;
}
```

### Code Explanation
1. **Input Handling:** Initialize an empty vector `modified` to hold the non-zero elements after applying the operations.
2. **Operation Application:** Loop through `nums` and check if operations can be applied.
   - If `nums[i]` is greater than 0 and `i` is not the last index, double it and set `nums[i + 1]` to zero, and then check and collect non-zero values.
3. **Sum of Squares Calculation:** After all operations are applied and non-zero elements are collected, we then calculate their squares and sum them up using a loop.
4. **Return Result:** Finally, return the calculated value.

### Time Complexity
The time complexity for this approach is O(n) since we are making a single pass through the array to apply operations and collect the non-zero values.

### Conclusion
This approach effectively handles the operations on the array while ensuring that we maximize the sum of squares as required by the problem statement. You can further test the implementation with various test cases to ensure its correctness.