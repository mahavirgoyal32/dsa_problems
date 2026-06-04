# LeetCode Daily – 2026-06-04

## 🧠 Problem #3751 – **Total Waviness of Numbers in Range I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/total-waviness-of-numbers-in-range-i)

---

### 📝 Problem Description

You are given two integers num1 and num2 representing an inclusive range [num1, num2].

The waviness of a number is defined as the total count of its peaks and valleys:


	A digit is a peak if it is strictly greater than both of its immediate neighbors.
	A digit is a valley if it is strictly less than both of its immediate neighbors.
	The first and last digits of a number cannot be peaks or valleys.
	Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range [num1, num2].
 
Example 1:


Input: num1 = 120, num2 = 130

Output: 3

Explanation:
In the range [120, 130]:


	120: middle digit 2 is a peak, waviness = 1.
	121: middle digit 2 is a peak, waviness = 1.
	130: middle digit 3 is a peak, waviness = 1.
	All other numbers in the range have a waviness of 0.


Thus, total waviness is 1 + 1 + 1 = 3.


Example 2:


Input: num1 = 198, num2 = 202

Output: 3

Explanation:
In the range [198, 202]:


	198: middle digit 9 is a peak, waviness = 1.
	201: middle digit 0 is a valley, waviness = 1.
	202: middle digit 0 is a valley, waviness = 1.
	All other numbers in the range have a waviness of 0.


Thus, total waviness is 1 + 1 + 1 = 3.


Example 3:


Input: num1 = 4848, num2 = 4848

Output: 2

Explanation:

Number 4848: the second digit 8 is a peak, and the third digit 4 is a valley, giving a waviness of 2.


 
Constraints:


	1 <= num1 <= num2 <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Total Waviness of Numbers in Range I" on LeetCode requires calculating the total waviness of numbers in a given range `[l, r]`. The waviness of a number is defined based on its adjacent digits. Specifically, when you have a number with `n` digits, the waviness is defined as the sum of the absolute differences between adjacent digits.

Here's a step-by-step explanation of how to solve the problem, along with a C++ implementation.

### Problem Breakdown

1. **Waviness Definition**: The waviness of a number `num` (which has multiple digits) is calculated as follows:
   - Convert the number into its string representation to access individual digits.
   - Compute the absolute difference between each pair of adjacent digits and sum these differences.

2. **Range Handling**: You are required to calculate the total waviness for all numbers in a specified range `[l, r]`.

3. **Efficiency Consideration**: Given that `l` and `r` can be very large, it's essential to avoid unnecessary computations. The direct method of iterating through every number between `l` and `r` may be inefficient in terms of time complexity.

### Approach

The approach involves iterating through each number from `l` to `r`, calculating the waviness for each, and accumulating the total. 

### C++ Implementation

Here’s how you can implement this in C++:

```cpp
#include <iostream>
#include <string>
#include <cmath>

class Solution {
public:
    int totalWaviness(int l, int r) {
        int totalWaviness = 0;

        for (int num = l; num <= r; ++num) {
            totalWaviness += calculateWaviness(num);
        }

        return totalWaviness;
    }

private:
    // Helper function to calculate the waviness of a single number
    int calculateWaviness(int num) {
        int waviness = 0;
        std::string s = std::to_string(num);

        for (size_t i = 1; i < s.size(); ++i) {
            waviness += std::abs(s[i] - s[i - 1]);
        }

        return waviness;
    }
};

int main() {
    Solution solution;
    int l = 10, r = 15;  // Example input
    std::cout << "Total Waviness from " << l << " to " << r << ": "
              << solution.totalWaviness(l, r) << std::endl;
    return 0;
}
```

### Explanation of the Code

1. **Function `totalWaviness`**:
   - This function initializes `totalWaviness` to zero and iterates through each number from `l` to `r`.
   - It calls `calculateWaviness` to compute the waviness of each number and adds it to `totalWaviness`.

2. **Function `calculateWaviness`**:
   - This helper function takes a single integer `num`, converts it to a string, and computes the sum of absolute differences of adjacent digits.
   - It uses a loop to iterate through the string representation of the number and performs the calculations as defined.

3. **Main Function**:
   - The main function creates an instance of the `Solution` class and demonstrates the method with an example range `[10, 15]`.

### Complexity Analysis

- **Time Complexity**: The time complexity is approximately `O(d * n)`, where `n` is the size of the range `(r - l + 1)` and `d` is the average number of digits in the numbers within the range.
- **Space Complexity**: The space complexity is `O(d)` due to the string representation of the numbers.

This implementation effectively solves the problem while keeping the structure clear and straightforward. You can further optimize it based on specific constraints or limits provided in the problem description.