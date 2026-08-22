# LeetCode Daily – 2026-08-22

## 🧠 Problem #3622 – **Check Divisibility by Digit Sum and Product**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product)

---

### 📝 Problem Description

You are given a positive integer n. Determine whether n is divisible by the sum of the following two values:


	
	The digit sum of n (the sum of its digits).
	
	
	The digit product of n (the product of its digits).
	


Return true if n is divisible by this sum; otherwise, return false.

 
Example 1:


Input: n = 99

Output: true

Explanation:

Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.


Example 2:


Input: n = 23

Output: false

Explanation:

Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.


 
Constraints:


	1 <= n <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's tackle the LeetCode problem titled **"Check Divisibility by Digit Sum and Product"**. Here’s how we can solve it, along with an explanation.

### Problem Statement

The problem requires us to check if a number is divisible by the sum of its digits and the product of its digits.

### Steps to Approach the Problem

1. **Extract the digits of the number**: We will do this by repeatedly dividing the number by 10.
2. **Calculate the sum of the digits** and **the product of the digits**: Each time we extract a digit, we will add it to a sum variable and multiply it into a product variable.
3. **Check divisibility**: Finally, we need to check if the number is divisible by both the sum and the product of its digits.

### Considerations

- The product of the digits can be zero, in which case we need to return false since dividing by zero is undefined.
- We should also consider the edge case where the number is less than 10 (a single digit). It should always return true for that case as the product and sum would be the digit itself.

### C++ Code Implementation

Here is the implementation based on our plan:

```cpp
class Solution {
public:
    bool checkDivisibility(int num) {
        if (num < 10) {
            return true; // Single digit numbers are trivially divisible by themselves
        }

        int sum_digits = 0;
        int product_digits = 1;
        int original_num = num; // Store the original number for final checks

        while (num > 0) {
            int digit = num % 10; // Get the last digit
            sum_digits += digit;   // Add to the sum
            product_digits *= digit; // Multiply to the product
            num /= 10; // Remove the last digit
        }

        // Check for division by zero case
        if (product_digits == 0) {
            return false;
        }

        // Check divisibility
        return (original_num % sum_digits == 0) && (original_num % product_digits == 0);
    }
};
```

### Explanation of the Code

1. **Initial Check**: If `num` is less than 10, we immediately return true because any single-digit number is divisible by itself (both for sum and product).
  
2. **Digit Extraction Loop**: We use a loop to extract each digit:
   - We get the last digit using `num % 10`.
   - We update the `sum_digits` with the current digit.
   - We accumulate the `product_digits` by multiplying the current digit.
   - We reduce `num` by stripping off the last digit using integer division (`num /= 10`).

3. **Zero Product Check**: If `product_digits` becomes zero, we immediately return false since we cannot divide by zero.

4. **Divisibility Check**: Finally, we check if the original number is divisible by both the `sum_digits` and the `product_digits`, returning the final boolean result.

### Time Complexity

The time complexity of this solution is \(O(d)\), where \(d\) is the number of digits in the number. Since each digit is processed a constant number of times, this is efficient even for large numbers.

### Conclusion

This solution effectively checks the required conditions by breaking down the number into its constituent digits and checking the divisibility conditions based on the calculated sum and product of the digits.