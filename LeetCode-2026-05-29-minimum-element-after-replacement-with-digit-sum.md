# LeetCode Daily – 2026-05-29

## 🧠 Problem #3300 – **Minimum Element After Replacement With Digit Sum**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum)

---

### 📝 Problem Description

You are given an integer array nums.

You replace each element in nums with the sum of its digits.

Return the minimum element in nums after all replacements.

 
Example 1:


Input: nums = [10,12,13,14]

Output: 1

Explanation:

nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.


Example 2:


Input: nums = [1,2,3,4]

Output: 1

Explanation:

nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.


Example 3:


Input: nums = [999,19,199]

Output: 10

Explanation:

nums becomes [27, 10, 19] after all replacements, with minimum element 10.


 
Constraints:


	1 <= nums.length <= 100
	1 <= nums[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Here's how you can solve the LeetCode problem titled "Minimum Element After Replacement With Digit Sum".

## Problem Explanation

The problem statement is as follows:

You are given an integer array `nums`. You need to perform the following operation:
- Replace each element `a_i` in the array with the sum of the digits of `a_i`. Repeat this operation until every element in the array becomes a single-digit number. 

Your task is to find the minimum element in the array after performing the above operations.

## Steps to Solve the Problem:
1. **Digit Sum Calculation**: We need a helper function to calculate the digit sum of a number and keep repeating this until we get a single-digit number.
  
2. **Iterate Through the Array**: For each element in the array, apply the digit sum operation until it becomes a single digit.

3. **Find Minimum**: Keep track of the minimum value among these single-digit numbers.

## C++ Solution

Here’s the C++ code to solve the problem:

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

class Solution {
public:
    // Function to calculate digit sum until it becomes a single-digit number
    int digitSum(int n) {
        while (n >= 10) {
            int sum = 0;
            while (n > 0) {
                sum += n % 10; // Add the last digit to sum
                n /= 10;       // Remove the last digit
            }
            n = sum; // Update n to the new digit sum
        }
        return n; // Return the single-digit result
    }

    int minimumElement(std::vector<int>& nums) {
        int minElement = INT_MAX; // Start with the maximum integer
        
        // Iterate through the array
        for (int num : nums) {
            int singleDigit = digitSum(num); // Get single-digit form
            minElement = std::min(minElement, singleDigit); // Update minimum
        }

        return minElement; // Return the minimum element found
    }
};

int main() {
    Solution solution;
    // Test with example case
    std::vector<int> nums = {38, 44, 99, 1};
    std::cout << "Minimum Element After Replacement: " << solution.minimumElement(nums) << std::endl;

    return 0;
}
```

### Explanation of the Code
1. **digitSum Function**: This function takes an integer `n`, calculates its digit sum, and continues this until `n` becomes a single-digit number.
   - Inside the function, while `n` is 10 or greater, we compute its digit sum by repeatedly calculating the last digit (`n % 10`) and reducing `n` (`n /= 10`).
   - Once `n` is less than 10, we return it.

2. **minimumElement Function**: This function processes the array `nums`:
   - It initializes `minElement` to the maximum integer value (`INT_MAX`).
   - For each number in the `nums`, it calculates the single-digit result using `digitSum`. 
   - It continuously updates `minElement` with the minimum value found.

3. **Main Function**: This is just used for testing the implementation with an example.

### Time Complexity
The time complexity is \(O(n \cdot k)\) where \(n\) is the number of elements in the `nums` and \(k\) is the number of digits in the largest number in `nums`. Since `k` is relatively small (up to 10 for large integers), the approach is efficient for practical purposes. 

### Space Complexity
The space complexity is \(O(1)\) as we are using a constant amount of additional space regardless of the input size.

This approach efficiently computes the minimum element after replacement with digit sums.