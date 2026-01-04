# LeetCode Daily – 2026-01-04

## 🧠 Problem #1390 – **Four Divisors**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/four-divisors)

---

### 📝 Problem Description

Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

 
Example 1:


Input: nums = [21,4,7]
Output: 32
Explanation: 
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.


Example 2:


Input: nums = [21,21]
Output: 64


Example 3:


Input: nums = [1,2,3,4,5]
Output: 0


 
Constraints:


	1 <= nums.length <= 104
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Four Divisors" requires us to find the sum of all integers up to a given `n` that have exactly four divisors. If an integer has four divisors, we should return their sum. If no such integers exist, we return 0.

## Explanation of the Problem

1. **Understanding Divisors**: A number has exactly four divisors if:
   - It is of the form \( p^3 \) where \( p \) is a prime number. The divisors in this case are \( 1, p, p^2, p^3 \), totaling four.
   - Or, it is of the form \( p \times q \) where \( p \) and \( q \) are distinct prime numbers. The divisors here are \( 1, p, q, p \times q \).

2. **Constraints and Requirements**:
   - We need to generate numbers from 1 to `n`, check each number for the number of divisors, and compute their sums if they have exactly four divisors.
   - The solution must efficiently compute prime numbers since we're often factoring to find divisors.

3. **Sieve of Eratosthenes**: We'll use the Sieve of Eratosthenes to generate all prime numbers up to `n`. This helps us quickly check for primes and build our numbers of interest.

## C++ Code Implementation

Here's the implementation of the above logic in C++:

```cpp
#include <iostream>
#include <vector>

class Solution {
public:
    int sumFourDivisors(std::vector<int>& nums) {
        int max_num = *max_element(nums.begin(), nums.end());
        std::vector<bool> is_prime(max_num + 1, true);
        is_prime[0] = is_prime[1] = false;
        
        for (int i = 2; i * i <= max_num; i++) {
            if (is_prime[i]) {
                for (int j = i * i; j <= max_num; j += i) {
                    is_prime[j] = false;
                }
            }
        }
        
        int sum = 0;
        for (int num : nums) {
            int divisor_count = 0;
            int divisor_sum = 0;
            for (int i = 1; i * i <= num; i++) {
                if (num % i == 0) {
                    divisor_count++;
                    divisor_sum += i;
                    if (i != num / i) { // Avoid adding square roots twice
                        divisor_count++;
                        divisor_sum += (num / i);
                    }
                }
                if (divisor_count > 4) break; // Early exit if more than 4
            }
            if (divisor_count == 4) {
                sum += divisor_sum; // Add only if exactly 4 divisors
            }
        }
        
        return sum;
    }
};
```

## Step by Step Breakdown

1. **Prime Generation**: We first find all primes up to the maximum number in the input list. We utilize the Sieve of Eratosthenes algorithm, which marks non-prime numbers (composite) efficiently.

2. **Counting and Summing Divisors**:
   - We iterate through each number in the input list `nums`.
   - For each number, we determine its divisors by iterating from `1` to `sqrt(num)`.
   - If we find a divisor `i`, we also find its complement `num / i`. This both increases our count of divisors and contributes to the sum.
   - We impose an early exit if we exceed 4 divisors early on (for efficiency).

3. **Final Calculation**: If a number has exactly four divisors, we add their sum to our overall sum. Finally, we return this total.

This solution efficiently counts divisors for all numbers up to `n`, utilizes the mathematical properties of divisors for optimization, and correctly handles the requirements of the problem.