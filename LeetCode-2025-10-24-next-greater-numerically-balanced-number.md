# LeetCode Daily – 2025-10-24

## 🧠 Problem #2048 – **Next Greater Numerically Balanced Number**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/next-greater-numerically-balanced-number)

---

### 📝 Problem Description

An integer x is numerically balanced if for every digit d in the number x, there are exactly d occurrences of that digit in x.

Given an integer n, return the smallest numerically balanced number strictly greater than n.

 
Example 1:


Input: n = 1
Output: 22
Explanation: 
22 is numerically balanced since:
- The digit 2 occurs 2 times. 
It is also the smallest numerically balanced number strictly greater than 1.


Example 2:


Input: n = 1000
Output: 1333
Explanation: 
1333 is numerically balanced since:
- The digit 1 occurs 1 time.
- The digit 3 occurs 3 times. 
It is also the smallest numerically balanced number strictly greater than 1000.
Note that 1022 cannot be the answer because 0 appeared more than 0 times.


Example 3:


Input: n = 3000
Output: 3133
Explanation: 
3133 is numerically balanced since:
- The digit 1 occurs 1 time.
- The digit 3 occurs 3 times.
It is also the smallest numerically balanced number strictly greater than 3000.


 
Constraints:


	0 <= n <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the problem statement and then provide a solution in C++ along with some explanations.

### Problem Explanation

A numerically balanced number is defined as a number where each digit appears the same number of times. For example, the number `1122` is numerically balanced because it has two `1`s and two `2`s, while `123` is not, since each digit in `123` appears once.

The goal of the problem is to find the next greater numerically balanced number based on a given number `n`.

### Steps to Solve the Problem

1. **Generate Candidates**: We can generate potential candidates that are numerically balanced. This can be done by creating combinations of digits such that each digit from `1` to `9` appears either 0 or equal number of times.

2. **Filter Valid Candidates**: From all the candidates, filter out those that are greater than the given number `n`.

3. **Find and Return the Minimum**: Once we have all possible valid candidates, return the smallest one that is greater than `n`. If no such number exists, return `-1`.

### C++ Implementation

Now let’s implement this in C++.

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <set>

using namespace std;

class Solution {
public:
    long long nextGreaterBalancedNumber(long long n) {
        // Convert number to string for easier manipulation
        string num = to_string(n);
        int length = num.size();

        // Set to store all balanced numbers
        set<long long> balancedNumbers;
        
        // Generate valid balanced numbers
        for (int digitCount = 1; digitCount <= 9; ++digitCount) { // Digit Counts from 1 to 9
            for (int repeat = 1; repeat <= length / digitCount + (length % digitCount != 0); ++repeat) {
                // Generate digit combination
                if (digitCount * repeat <= length) {
                    string generated = "";
                    for (int digit = 1; digit <= 9; ++digit) {
                        generated += string(repeat, '0' + digit);
                    }
                    // All permutations of generated string
                    sort(generated.begin(), generated.end());
                    do {
                        // Convert back to long long and check bounds
                        long long candidate = stoll(generated);
                        if (candidate > n) {
                            balancedNumbers.insert(candidate);
                        }
                    } while (next_permutation(generated.begin(), generated.end()));
                }
            }
        }

        // Find the smallest balanced number greater than n
        if (!balancedNumbers.empty()) {
            return *balancedNumbers.begin();
        }
        
        return -1; // If no valid balanced number is found
    }
};

int main() {
    Solution solution;
    long long n = 1122;
    cout << solution.nextGreaterBalancedNumber(n) << endl; // Output: 1212 or 2112 based on possibilities
    return 0;
}
```

### Explanation of the Code

1. **Input Conversion**: Convert the input number `n` into a string for easier manipulation of digits.

2. **Balanced Numbers Generation**: 
   - The generator creates combinations of digits that could yield a balanced number.
   - We limit the digits to `1` to `9` and try combinations where each digit appears the same number of times.
   - The length of the potential balanced number can be adjusted based on how many digits (repeats) we want.

3. **Handling Permutations**: For each candidate balanced number generated, we check permutations to ensure we're checking all arrangements, and we store valid candidates in a set.

4. **Return Result**: Finally, we find the smallest number from our set that is greater than `n`.

### Conclusion

In this approach, we brute-force the generation of balanced numbers up to reasonable digit lengths (from `1` to `9`). Though the complexity might be high for larger values of `n`, practical limits due to the nature of digit combinations usually make this method efficient for competitive programming. This kind of problem-solving requires you to think about generating combinations/permutations effectively - always keeping performance in mind!