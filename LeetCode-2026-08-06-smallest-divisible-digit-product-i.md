# LeetCode Daily – 2026-08-06

## 🧠 Problem #3345 – **Smallest Divisible Digit Product I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-divisible-digit-product-i)

---

### 📝 Problem Description

You are given two integers n and t. Return the smallest number greater than or equal to n such that the product of its digits is divisible by t.

 
Example 1:


Input: n = 10, t = 2

Output: 10

Explanation:

The digit product of 10 is 0, which is divisible by 2, making it the smallest number greater than or equal to 10 that satisfies the condition.


Example 2:


Input: n = 15, t = 3

Output: 16

Explanation:

The digit product of 16 is 6, which is divisible by 3, making it the smallest number greater than or equal to 15 that satisfies the condition.


 
Constraints:


	1 <= n <= 100
	1 <= t <= 10

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem "Smallest Divisible Digit Product I" together. The problem statement involves finding the smallest number whose digit product is equal to a given integer `n`.

### Problem Explanation

Given an integer `n` (1 ≤ n ≤ 100), we want to find the smallest integer whose digits multiply to `n`. If no such number can be formed, we need to return `-1`.

### Breakdown of the Approach

1. **Primality of Digits**: We can use the digits from 1 to 9 to multiply to `n`. For any `n`, we need to represent it as a product of these single-digit numbers.
   
2. **Factorization Strategy**: We can factorize `n` starting from the largest digit (which is 9) down to 2, trying to extract as many factors as possible. This is because larger digits reduce the overall size of the resulting number.

3. **Building the Result**: Once we have the factors, we will arrange them in ascending order to generate the smallest possible number.

4. **Checking for Completeness**: If after trying all digits (from 9 to 2), `n` is still greater than 1, it means `n` cannot be completely factorized into the digits from 1 to 9, and we should return `-1`.

### C++ Code Implementation

Here's how you can implement the solution in C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int smallestDivisibleDigits(int n) {
    if (n < 10) return n; // If n is a single-digit number, return n

    vector<int> digits; // To store the digits that form the number
    for (int i = 9; i >= 2; i--) {
        while (n % i == 0) { // While n is divisible by i
            digits.push_back(i); // Store the digit
            n /= i; // Reduce n
        }
    }

    if (n > 1) return -1; // If after factoring, n is still greater than 1, return -1

    // Sort the digits to get the smallest number possible
    sort(digits.begin(), digits.end());
    
    // Create the result number
    string result;
    for (int digit : digits) {
        result += to_string(digit);
    }

    return stoi(result); // Convert the string to an integer and return
}

// Example usage
int main() {
    int n = 100; // Example input
    cout << smallestDivisibleDigits(n) << endl; // Expected output: 455
    return 0;
}
```

### Explanation of the Code

1. **Edge Case**: The code first checks if `n` is less than 10. In this case, `n` itself is the smallest number.

2. **Factorization Loop**: The loop starts from 9 to 2. For each digit, it checks if `n` is divisible by that digit. If it is, we store that digit in our `digits` vector and divide `n` by this digit. This continues until `n` is no longer divisible by that digit.

3. **Final Check**: After attempting to divide by all digits, if `n` is still greater than 1, we cannot form the number with the available digits, so we return `-1`.

4. **Sorting and Result Creation**: The digits are sorted (so the smallest number is formed), then we convert them into a single integer output.

### Example

For example, if `n` is `100`:

- We can factor it as `5 * 5 * 4` (which corresponds to digits 5, 5, and 4).
- The smallest number we can form from these digits sorted is `455`.

The function would return `455`, which is the expected result.