# LeetCode Daily – 2026-07-25

## 🧠 Problem #3536 – **Maximum Product of Two Digits**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-product-of-two-digits)

---

### 📝 Problem Description

You are given a positive integer n.

Return the maximum product of any two digits in n.

Note: You may use the same digit twice if it appears more than once in n.

 
Example 1:


Input: n = 31

Output: 3

Explanation:


	The digits of n are [3, 1].
	The possible products of any two digits are: 3 * 1 = 3.
	The maximum product is 3.



Example 2:


Input: n = 22

Output: 4

Explanation:


	The digits of n are [2, 2].
	The possible products of any two digits are: 2 * 2 = 4.
	The maximum product is 4.



Example 3:


Input: n = 124

Output: 8

Explanation:


	The digits of n are [1, 2, 4].
	The possible products of any two digits are: 1 * 2 = 2, 1 * 4 = 4, 2 * 4 = 8.
	The maximum product is 8.



 
Constraints:


	10 <= n <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the problem "Maximum Product of Two Digits" from LeetCode.

### Problem Statement
The task is to find the maximum product of any two digits in a given integer `n`. Here are the steps and considerations to solve this problem:

1. **Extract Digits**: We need to extract the digits from the number.
2. **Compute Products**: With the extracted digits, we need to compute the product of each unique pair of digits.
3. **Return the Maximum**: Finally, we should return the maximum product found.

### Key Points:
- The digits can range from `0` to `9`.
- The number can have multiple digits but will be a positive integer.
- The time complexity of our approach should be efficient enough to handle even the largest numbers in the given constraints.

### Steps to Solve:
1. Convert the number to a string or repeatedly extract digits to a vector.
2. Iterate through each pair of digits to compute the products.
3. Keep track of the maximum product encountered.

### C++ Solution

Here is the C++ code solution:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxProduct(int n) {
        std::vector<int> digits;

        // Extract digits from the number
        while (n > 0) {
            digits.push_back(n % 10);
            n /= 10;
        }

        int maxProduct = 0;

        // Calculate the maximum product of two different digits
        for (size_t i = 0; i < digits.size(); i++) {
            for (size_t j = i + 1; j < digits.size(); j++) {
                int product = digits[i] * digits[j];
                maxProduct = std::max(maxProduct, product);
            }
        }

        return maxProduct;
    }
};

int main() {
    Solution solution;
    int n = 34; // Example input
    std::cout << solution.maxProduct(n) << std::endl; // Should print 12 (3 * 4)
    return 0;
}
```

### Explanation of the Code:
1. **Extracting Digits**: 
   - We use a `while` loop to extract the last digit of `n` using `n % 10` and store it in a vector.
   - After extracting the digit, we remove it from `n` by dividing it by 10 (`n /= 10`).

2. **Nested Loop for Product Calculation**: 
   - We have a nested loop where `i` iterates through the digits, and `j` starts from `i + 1` to ensure that each pair of digits is unique and avoids repetitions.
   - We compute the product of the two digits and update `maxProduct` using `std::max`.

3. **Returning the Result**: 
   - Finally, the maximum product found is returned.

### Complexity Analysis:
- **Time Complexity**: `O(d^2)` where `d` is the number of digits in `n`. This is because we have a nested loop for each unique pair of digits.
- **Space Complexity**: `O(d)` for storing the digits in a vector.

This solution is efficient given the constraints of typical input sizes for such problems. The product of digits ensures that we only consider valid numerical operations.