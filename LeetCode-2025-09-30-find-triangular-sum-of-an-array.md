# LeetCode Daily – 2025-09-30

## 🧠 Problem #2221 – **Find Triangular Sum of an Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-triangular-sum-of-an-array)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

The triangular sum of nums is the value of the only element present in nums after the following process terminates:


	Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
	For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
	Replace the array nums with newNums.
	Repeat the entire process starting from step 1.


Return the triangular sum of nums.

 
Example 1:


Input: nums = [1,2,3,4,5]
Output: 8
Explanation:
The above diagram depicts the process from which we obtain the triangular sum of the array.

Example 2:


Input: nums = [5]
Output: 5
Explanation:
Since there is only one element in nums, the triangular sum is the value of that element itself.

 
Constraints:


	1 <= nums.length <= 1000
	0 <= nums[i] <= 9

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the triangular sum of an array, we need to understand the concept of a triangular sum. The triangular sum of an array is computed by repeatedly adding adjacent elements until only one element remains.

### Problem Breakdown:

1. **Understanding Triangular Sum**: Given an array of integers, the triangular sum involves forming a new array where each element is the sum of two adjacent elements of the previous array. This process is repeated until we end up with a single element. 

For example:
- Given an array `nums = [2, 5, 3]`, the calculations go as follows:
    - First step: `[2+5, 5+3]` → `[7, 8]`
    - Second step: `[7+8]` → `[15]`
    - Thus, the triangular sum is `15`.

2. **Iterative Approach**: We can systematically perform this operation using a loop until we are left with one element.

### Implementation:

Here is the C++ code that achieves this:

```cpp
#include <vector>

class Solution {
public:
    int triangularSum(std::vector<int>& nums) {
        int n = nums.size(); // Get the original size of the array
        
        // Continue until we reduce nums to a single element
        while (n > 1) {
            for (int i = 0; i < n - 1; ++i) {
                // Update nums[i] to the sum of adjacents
                nums[i] = (nums[i] + nums[i + 1]) % 10; // Modulo 10 as per problem statement
            }
            n--; // Reduce size after each level of operation
        }
        
        // The only remaining element is the triangular sum
        return nums[0];
    }
};
```

### Explanation of the Code:

1. **Input**: The function takes a reference to a vector of integers `nums`.

2. **Outer While Loop**: The loop runs until only one element is left in the `nums` array (`n > 1`).

3. **Inner For Loop**: This loop iterates through the current elements of `nums`, modifying each element to be the sum of itself and the next element:
   - `nums[i] = (nums[i] + nums[i + 1]) % 10;` ensures that we are taking the sum and then applying modulo 10 to stay within the bounds specified in the problem statement.

4. **Reducing Size**: After processing each level, we reduce `n` by one since we are effectively shrinking the array size.

5. **Returning Result**: Once we exit the loop, the first element `nums[0]` is the final result, i.e., the triangular sum.

This solution has a time complexity of \(O(n^2)\) in the worst case (as we traverse through the array at most \(n-1\) times, halving the size each time), making it efficient enough for the problem constraints. The space complexity is \(O(1)\) since we're updating the array in place and not using additional arrays. 

This implementation should handle all edge cases as described in the problem statement efficiently.