# LeetCode Daily – 2026-06-06

## 🧠 Problem #2574 – **Left and Right Sum Differences**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/left-and-right-sum-differences)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums of size n.

Define two arrays leftSum and rightSum where:


	leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
	rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.


Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

 
Example 1:


Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].


Example 2:


Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].


 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem titled "Left and Right Sum Differences" from LeetCode asks us to calculate the absolute difference between the left sum and right sum for each index in an array. Here’s a structured breakdown of how to approach the problem along with a C++ solution.

### Problem Explanation

Given an array `nums` of integers, for each index `i`, we need to calculate:

- `leftSum[i]`: The sum of all the elements to the left of index `i`.
- `rightSum[i]`: The sum of all the elements to the right of index `i`.
  
The goal is to compute the absolute difference `|leftSum[i] - rightSum[i]|` for each index `i` and return a new array containing these differences.

### Key Steps to Solve the Problem

1. **Calculate Total Sum**: First, compute the total sum of the array. This helps in computing the right sum directly since `rightSum[i]` can be computed as `totalSum - leftSum[i] - nums[i]`.

2. **Iterate Through the Array**: Maintain a `leftSum` variable that keeps track of the sum of the elements as you iterate through the array. 

3. **Calculate the Differences**: For each index, compute the absolute difference using the left and right sum formulas derived above and store the result.

### Implementation

Here is the C++ code for solving the problem:

```cpp
#include <vector>
#include <cmath> // for abs function

class Solution {
public:
    std::vector<int> leftRightSumDifferences(std::vector<int>& nums) {
        int n = nums.size();
        std::vector<int> differences(n, 0);
        
        // Step 1: Calculate total sum
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        // Step 2: Calculate left sums and differences
        int leftSum = 0;
        for (int i = 0; i < n; ++i) {
            // Right sum can be derived from totalSum
            int rightSum = totalSum - leftSum - nums[i];
            // Step 3: Calculate absolute difference
            differences[i] = std::abs(leftSum - rightSum);
            // Update leftSum for next iteration
            leftSum += nums[i];
        }

        return differences;
    }
};
```

### Explanation of the Code:

1. **Total Sum Calculation**:
   - We first loop through `nums` to calculate the `totalSum`. This gives us the sum of all elements.

2. **Main Loop**:
   - We initialize `leftSum` to 0 and loop through each index `i`.
   - For each index, we compute `rightSum` as `totalSum - leftSum - nums[i]`.
   - We then calculate the absolute difference between `leftSum` and `rightSum` and store that value in the `differences` vector.
   - After calculating the needed difference, we update `leftSum` by adding the current element `nums[i]`.

3. **Return the Result**:
   - Finally, we return the `differences` vector containing the absolute differences for each index.

This approach has a time complexity of O(n), where n is the number of elements in the input array, as we make a single pass to compute the sums and another pass to calculate the differences. The space complexity is O(n) for the differences output.