# LeetCode Daily – 2025-11-12

## 🧠 Problem #2654 – **Minimum Number of Operations to Make All Array Elements Equal to 1**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1)

---

### 📝 Problem Description

You are given a 0-indexed array nums consisiting of positive integers. You can do the following operation on the array any number of times:


	Select an index i such that 0 <= i < n - 1 and replace either of nums[i] or nums[i+1] with their gcd value.


Return the minimum number of operations to make all elements of nums equal to 1. If it is impossible, return -1.

The gcd of two integers is the greatest common divisor of the two integers.

 
Example 1:


Input: nums = [2,6,3,4]
Output: 4
Explanation: We can do the following operations:
- Choose index i = 2 and replace nums[2] with gcd(3,4) = 1. Now we have nums = [2,6,1,4].
- Choose index i = 1 and replace nums[1] with gcd(6,1) = 1. Now we have nums = [2,1,1,4].
- Choose index i = 0 and replace nums[0] with gcd(2,1) = 1. Now we have nums = [1,1,1,4].
- Choose index i = 2 and replace nums[3] with gcd(1,4) = 1. Now we have nums = [1,1,1,1].


Example 2:


Input: nums = [2,10,6,14]
Output: -1
Explanation: It can be shown that it is impossible to make all the elements equal to 1.


 
Constraints:


	2 <= nums.length <= 50
	1 <= nums[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Minimum Number of Operations to Make All Array Elements Equal to 1" can be summarized as follows:

You are given an integer array `nums` and you need to determine the minimum number of operations required to make all elements of the array equal to 1. The operations allowed are:
1. If the element is `x`, you can perform the operation of changing `x` to `x / y` for any prime factor `y` of `x`.

To solve this problem, we should understand that we want to decompose all numbers down to 1 in as few operations as possible. This means we need to know the prime factorization of each number in the array and how many distinct prime factors each number contributes to the overall operations.

### Steps to Solve the Problem:
1. **Prime Factorization**: For each number, find its prime factors. We will also count how many distinct prime factors we have for each number.
2. **Total Operations Calculation**: The number of operations required to bring a number to `1` is governed by the number of its distinct prime factors. For instance, if a number has `3` distinct prime factors, it would take at least `3` operations to bring it down to `1`.
3. **Implementation**: We can iterate through the numbers in the array, determine the distinct prime factors for each, and take the minimum number of distinct prime factors across all values since we only care about the worst case for transfer operations.

### C++ Code Implementation:

Here is a possible implementation of the above plan in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
using namespace std;

class Solution {
public:
    int minOperations(vector<int>& nums) {
        unordered_set<int> all_prime_factors;

        // Function to find prime factors of a number
        auto getPrimeFactors = [](int n) {
            unordered_set<int> primes;
            // Check for number of 2s that divide n
            while (n % 2 == 0) {
                primes.insert(2);
                n /= 2;
            }
            // n must be odd at this point, check odd factors from 3 to sqrt(n)
            for (int i = 3; i <= sqrt(n); i += 2) {
                while (n % i == 0) {
                    primes.insert(i);
                    n /= i;
                }
            }
            // This condition is to check if n is a prime number greater than 2
            if (n > 2) {
                primes.insert(n);
            }
            return primes;
        };

        // Collect all distinct prime factors from all numbers
        for (int num : nums) {
            auto prime_factors = getPrimeFactors(num);
            all_prime_factors.insert(prime_factors.begin(), prime_factors.end());
        }

        // The number of operations needed is equal to the size of all distinct prime factors
        return all_prime_factors.size();
    }
};

int main() {
    Solution sol;
    vector<int> nums = {6, 10, 15}; // Example input
    int result = sol.minOperations(nums);
    cout << "Minimum number of operations: " << result << endl;
    return 0;
}
```

### Explanation of the Code:
1. We define an `unordered_set` to hold all distinct prime factors encountered.
2. The `getPrimeFactors` function retrieves the prime factors of a single number and stores them in a set to ensure uniqueness.
   - First, it removes all factors of `2`.
   - Then it checks for odd factors up to the square root of `n`, since any factor larger than that would have a corresponding factor smaller than the square root.
   - Finally, if what's left of `n` is greater than `2`, it must be a prime.
3. We loop through each number in `nums`, calling `getPrimeFactors` to get its prime factors, which are then accumulated into the `all_prime_factors` set.
4. The final answer is simply the size of this set, which corresponds to the minimum number of operations needed.

### Conclusion:
This solution efficiently identifies unique prime factors and determines the minimum number of operations needed to reduce all numbers in the input array to `1`. The approach runs in time complexity related to the number of elements in `nums` and the logarithm of those elements due to the factorization process, making it suitable for large input sizes.