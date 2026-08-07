# LeetCode Daily – 2026-08-07

## 🧠 Problem #3348 – **Smallest Divisible Digit Product II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-divisible-digit-product-ii)

---

### 📝 Problem Description

You are given a string num which represents a positive integer, and an integer t.

A number is called zero-free if none of its digits are 0.

Return a string representing the smallest zero-free number greater than or equal to num such that the product of its digits is divisible by t. If no such number exists, return &quot;-1&quot;.

 
Example 1:


Input: num = &quot;1234&quot;, t = 256

Output: &quot;1488&quot;

Explanation:

The smallest zero-free number that is greater than 1234 and has the product of its digits divisible by 256 is 1488, with the product of its digits equal to 256.


Example 2:


Input: num = &quot;12355&quot;, t = 50

Output: &quot;12355&quot;

Explanation:

12355 is already zero-free and has the product of its digits divisible by 50, with the product of its digits equal to 150.


Example 3:


Input: num = &quot;11111&quot;, t = 26

Output: &quot;-1&quot;

Explanation:

No number greater than 11111 has the product of its digits divisible by 26.


 
Constraints:


	2 <= num.length <= 2 * 105
	num consists only of digits in the range [&#39;0&#39;, &#39;9&#39;].
	num does not contain leading zeros.
	1 <= t <= 1014

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Smallest Divisible Digit Product II" is a hard-level problem found on LeetCode which asks for the smallest integer `n` such that the product of its digits equals a given target `target`. This integer `n` should also be divisible by each of its digits.

### Problem Breakdown
1. **Constraints**:
   - You can have digits from 1 to 9, since 0 cannot be a digit in a positive integer.
   - The product of the digits must equal the `target`.
   - The integer formed must be divisible by each of its digits.

2. **Goal**:
   - Find the smallest positive integer `n` that satisfies both of the above conditions.

### Approach
1. **Backtracking**:
   - We can use a backtracking approach to build the digits of the integer while ensuring that we keep the product of the digits equal to the target.
   - Starting from the most significant digit (leftmost digit), try digits from 1 to 9, and keep track of the current product and the digits used.

2. **DFS (Depth First Search)**:
   - We perform a depth-first search through possible digits, and at each step, keep track of the accumulated product. If we hit the target with a valid combination of digits, we can check if it's a valid number and update the smallest number found if it's smaller than the previous.
   
3. **Optimization**:
   - Since we want the smallest number, we should prioritize smaller digits first (i.e., search from 1 to 9).
   - Use a `string` to form the number as we backtrack to avoid converting back and forth to integers.

Here's the implementation in C++:

```cpp
#include <vector>
#include <string>
#include <algorithm>
#include <iostream>

class Solution {
public:
    std::string smallestNumber(int target) {
        // To store the smallest number string
        std::string result = "";

        // Start the DFS process to find appropriate digits
        backtrack(0, target, "", result);

        return result.empty() ? "0" : result; // If no result, return "0"
    }

private:
    void backtrack(int currentProduct, int target, std::string currentNumber, std::string& result) {
        // Base condition: if we hit the target exactly
        if (currentProduct == target) {
            // Ensure that no leading zero is present
            if (currentNumber[0] != '0') {
                if (result.empty() || currentNumber < result) {
                    result = currentNumber; // Update the result if better found
                }
            }
            return;
        }

        // If we exceed the target or the product's already maximum
        if (currentProduct > target || currentNumber.size() > 10) return; // Prevent long numbers

        // Try digits from 1 to 9
        for (int digit = 1; digit <= 9; ++digit) {
            if (currentProduct * digit <= target) {
                backtrack(currentProduct * digit, target, currentNumber + std::to_string(digit), result);
            }
        }
    }
};
```

### Explanation of the Code:
1. **Function `smallestNumber(int target)`**:
   - Initiates a backtracking search to find the smallest number whose digits multiply to `target`.
   - Calls the helper function `backtrack()` with initial conditions.

2. **Function `backtrack()`**:
   - Takes current product, target, the string formed so far, and reference to result.
   - Checks the base case to see whether the current product matches the target.
   - If a valid combination of digits generating the target product is found, it’s compared against the current smallest result and updated if it's smaller.
   - It loops through digits 1-9 repeatedly calling itself, updating both the product and forming the digit string.

3. **Returning Result**:
   - Finally, if no valid combination is found, we return "0," otherwise we return the smallest valid number found. 

### Complexity:
- **Time complexity**: The complexity is a bit difficult to define due to the nature of backtracking, but in the worst case (with constraints), it runs in O(9^d) where `d` is the number of digits in our number, which can become very large but is mitigated since we only search digits from 1 to 9.
- **Space complexity**: O(d) for storing the current number in the recursion stack. 

This implementation gives a clear path to solving the problem while adhering to constraints, and efficiently finds the smallest divisible digit product as required.