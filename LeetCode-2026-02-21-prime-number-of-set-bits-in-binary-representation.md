# LeetCode Daily – 2026-02-21

## 🧠 Problem #762 – **Prime Number of Set Bits in Binary Representation**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation)

---

### 📝 Problem Description

Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

Recall that the number of set bits an integer has is the number of 1&#39;s present when written in binary.


	For example, 21 written in binary is 10101, which has 3 set bits.


 
Example 1:


Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.


Example 2:


Input: left = 10, right = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.


 
Constraints:


	1 <= left <= right <= 106
	0 <= right - left <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Prime Number of Set Bits in Binary Representation" asks us to determine how many numbers in a given range have a prime number of 'set bits' (bits that are 1) in their binary representation.

### Problem Breakdown

1. **Understand the Inputs/Outputs**:
   - We are given two integers, `L` and `R`. 
   - We need to count how many integers from `L` to `R`, inclusive, have a number of set bits that is a prime number.

2. **Set Bits**:
   - The number of set bits of an integer can be obtained using built-in functions or by iterating through the bits.

3. **Prime Numbers**:
   - We need a helper function to determine if a given number is prime, specifically to check the possible number of set bits, which will be at most 32 (since we're dealing with 32-bit integers).

### Steps to Solve

1. **Count Set Bits**:
   - Use a simple loop or built-in function like `__builtin_popcount` (for GCC and Clang) to count the set bits in each number from `L` to `R`.

2. **Check for Prime**:
   - Implement a function to check if a number is prime.

3. **Iterate**:
   - Loop through the range from `L` to `R`, count the set bits for each number, check if that number is prime, and maintain a count.

### C++ Code

Here is a C++ implementation of the solution:

```cpp
#include <iostream>
#include <vector>

class Solution {
public:
    int countPrimeSetBits(int L, int R) {
        int count = 0;

        // Define the set of prime numbers up to 32 because the maximum
        // number of set bits for a 32-bit number is 32.
        std::vector<bool> isPrime(33, true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers.
        for (int p = 2; p * p <= 32; ++p) {
            if (isPrime[p]) {
                for (int multiple = p * p; multiple <= 32; multiple += p) {
                    isPrime[multiple] = false; // Mark multiples of p as non-prime.
                }
            }
        }

        // Iterate from L to R and check the number of set bits.
        for (int i = L; i <= R; ++i) {
            int setBitsCount = __builtin_popcount(i); // Count the number of set bits.
            if (isPrime[setBitsCount]) {
                count++; // Increment the count if the number of set bits is prime.
            }
        }

        return count; // Return the final count.
    }
};

// Usage example:
int main() {
    Solution sol;
    int L = 10;
    int R = 15;
    std::cout << sol.countPrimeSetBits(L, R) << std::endl; // Output: 5
    return 0;
}
```

### Explanation of Code

- **`isPrime` Array**: We maintain a boolean array to identify prime numbers from 0 to 32. This is filled up using a method similar to the Sieve of Eratosthenes.
  
- **Counting Set Bits**: The function `__builtin_popcount(i)` efficiently counts the number of set bits in the integer `i`.

- **Iterating the Range**: We iterate through each number in the specified range. For each number, we check how many set bits it has, and then we check if that count is prime by using the `isPrime` array.

- **Final Count**: We maintain a count of all numbers which have a prime count of set bits and return this count.

This method is efficient and handles the requirements of the problem succinctly.