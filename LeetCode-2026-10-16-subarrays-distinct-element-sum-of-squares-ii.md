# LeetCode Daily – 2026-10-16

## 🧠 Problem #2916 – **Subarrays Distinct Element Sum of Squares II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums.

The distinct count of a subarray of nums is defined as:


	Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].


Return the sum of the squares of distinct counts of all subarrays of nums.

Since the answer may be very large, return it modulo 109 + 7.

A subarray is a contiguous non-empty sequence of elements within an array.

 
Example 1:


Input: nums = [1,2,1]
Output: 15
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.


Example 2:


Input: nums = [2,2]
Output: 3
Explanation: Three possible subarrays are:
[2]: 1 distinct value
[2]: 1 distinct value
[2,2]: 1 distinct value
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 = 3.

 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Subarrays Distinct Element Sum of Squares II" requires us to count the number of valid subarrays that contain distinct elements, and for each subarray of this kind, we must calculate the sum of the squares of its distinct elements. The result we're interested in is the total number of distinct subarrays that fulfill the condition, combined into a final sum modulo `10^9 + 7`.

Here's a detailed breakdown of how to approach this problem:

### Problem Breakdown:

1. **Distinct Elements in Subarrays**: We need to ensure that within any selected subarray, all elements are distinct.

2. **Sum of Squares**: For each distinct set of elements in a valid subarray, we have to compute the square of each element and then sum these squares.

3. **Modulo Operation**: As the result can be large, we need to take the result modulo `10^9 + 7`.

### Approach:

To solve this, we can utilize a sliding window (also known as a two-pointer) technique, which will help us efficiently find all valid subarrays while maintaining distinct elements.

1. **Initialize Variables**:
   - Use two pointers `left` and `right` to represent the current subarray (from `left` to `right`).
   - Use a hash map or unordered_map to track the frequencies of elements in the current window.
   - A variable to maintain the sum of squares of current distinct elements.

2. **Expand with Right Pointer**:
   - Move the `right` pointer to expand the window and include new elements.
   - If adding a new element leads to duplicates, increment the `left` pointer until the window has distinct elements again.

3. **Count Valid Subarrays**:
   - For every valid configuration of `[left, right]`, calculate the sum of squares and add it to the total.
   - After adjusting the pointers, move the `left` pointer to shrink the window if necessary and update the frequency map.

4. **Output the total calculated sum modulo `10^9 + 7`**.

### C++ Code Implementation:

Here is a C++ solution based on the aforementioned steps:

```cpp
#include <unordered_map>
#include <vector>

class Solution {
public:
    int distinctElementSumOfSquares(std::vector<int>& nums) {
        const int MOD = 1e9 + 7;
        int left = 0, n = nums.size();
        long long totalSum = 0;
        std::unordered_map<int, int> frequencyMap;  // To store frequencies of elements
        long long currentSumOfSquares = 0;

        for (int right = 0; right < n; ++right) {
            int currentElement = nums[right];
            // If it is the first time seeing this element
            if (frequencyMap[currentElement] == 0) {
                currentSumOfSquares = (currentSumOfSquares + (long long)currentElement * currentElement) % MOD;
            }
            frequencyMap[currentElement]++;
            
            // If frequency goes above 1, shrink from the left
            while (frequencyMap[currentElement] > 1) {
                frequencyMap[nums[left]]--;
                // If it becomes zero, we remove it from currentSumOfSquares
                if (frequencyMap[nums[left]] == 0) {
                    currentSumOfSquares = (currentSumOfSquares - (long long)nums[left] * nums[left] + MOD) % MOD;
                }
                left++;
            }
            
            // Now from left to right, it is a valid distinct subarray
            totalSum = (totalSum + currentSumOfSquares) % MOD;
        }

        return totalSum;
    }
};
```

### Explanation of the Code:

1. **Initialization**: We start by defining constants, and initializing the frequency map, pointers, and variables needed to calculate the sum of squares.

2. **Outer Loop (right)**: We traverse each element in the array with the `right` pointer.

3. **Updating the Map**: For each `nums[right]`, we check if it's already in the map. If it's the first occurrence, we add its square to the `currentSumOfSquares`.

4. **Inner Loop (left pointer)**: If duplicates are encountered (the frequency becomes greater than one), we increment the `left` pointer, moving it to the right, and decrementing the corresponding values in the frequency map, adjusting the `currentSumOfSquares` appropriately.

5. **Sum and Modulo**: After adjusting for the valid configuration, we add the `currentSumOfSquares` to `totalSum` and apply the modulo operation.

This code efficiently calculates the required sums while ensuring the subarrays remain valid and distinct.