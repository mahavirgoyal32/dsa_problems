# LeetCode Daily – 2026-07-26

## 🧠 Problem #628 – **Maximum Product of Three Numbers**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-product-of-three-numbers)

---

### 📝 Problem Description

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 
Example 1:
Input: nums = [1,2,3]
Output: 6
Example 2:
Input: nums = [1,2,3,4]
Output: 24
Example 3:
Input: nums = [-1,-2,-3]
Output: -6

 
Constraints:


	3 <= nums.length <= 104
	-1000 <= nums[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Maximum Product of Three Numbers," we need to find the maximum product that can be obtained from any three numbers in a given integer array. The key insight is that the maximum product can either come from:

1. The three largest positive numbers in the array.
2. The two smallest (potentially negative) numbers and the largest positive number (since multiplying two negative numbers yields a positive number).

### Steps to Solve the Problem

1. **Sort the Array**: By sorting the array, we can easily access the largest and smallest elements. In a sorted array, the three largest numbers will be at the end, while the two smallest numbers will be at the beginning.

2. **Calculate Possible Products**: From the sorted array, calculate:
   - The product of the three largest numbers.
   - The product of the two smallest numbers and the largest number.

3. **Return the Maximum**: The desired maximum product will be the maximum of the two products calculated.

### C++ Implementation

Here's the C++ code implementing the described approach:

```cpp
#include <vector>
#include <algorithm> // For sort and max

class Solution {
public:
    int maximumProduct(std::vector<int>& nums) {
        // Sort the numbers first
        std::sort(nums.begin(), nums.end());

        // The product of the three largest numbers
        int product1 = nums[nums.size() - 1] * 
                       nums[nums.size() - 2] * 
                       nums[nums.size() - 3];

        // The product of the two smallest and the largest number
        int product2 = nums[0] * 
                       nums[1] * 
                       nums[nums.size() - 1];

        // Return the maximum of the two products
        return std::max(product1, product2);
    }
};
```

### Explanation of the Code:

1. **Sorting**: `std::sort(nums.begin(), nums.end());` sorts the input vector in non-decreasing order. This allows easy access to the largest and smallest elements.

2. **Calculating Products**:
   - `product1` computes the product of the three largest numbers: `nums[nums.size() - 1]` (largest), `nums[nums.size() - 2]` (second largest), and `nums[nums.size() - 3]` (third largest).
   - `product2` computes the product of the two smallest numbers (`nums[0]` and `nums[1]`) and the largest number (`nums[nums.size() - 1]`).

3. **Result**: The function returns the maximum of `product1` and `product2` using `std::max`.

### Complexity Analysis

- **Time Complexity**: The time complexity is \(O(N \log N)\) due to the sorting step, where \(N\) is the number of elements in the input array.
- **Space Complexity**: The space complexity is \(O(1)\), excluding the space required for the input and the output, as we are only using a constant amount of extra space.

This solution is efficient and works well for the typical constraints provided by LeetCode for this problem.