# LeetCode Daily – 2026-03-01

## 🧠 Problem #1689 – **Partitioning Into Minimum Number Of Deci-Binary Numbers**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers)

---

### 📝 Problem Description

A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

 
Example 1:


Input: n = &quot;32&quot;
Output: 3
Explanation: 10 + 11 + 11 = 32


Example 2:


Input: n = &quot;82734&quot;
Output: 8


Example 3:


Input: n = &quot;27346209830709182346&quot;
Output: 9


 
Constraints:


	1 <= n.length <= 105
	n consists of only digits.
	n does not contain any leading zeros and represents a positive integer.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To tackle the "Partitioning Into Minimum Number Of Deci-Binary Numbers" problem from LeetCode, let's first break down what the problem entails and then present a solution with an explanation.

### Problem Explanation

You are given a string `n` that represents a positive integer. You need to find the minimum number of positive deci-binary numbers (numbers composed of digits 0 or 1 only) such that their sum equals `n`. 

A deci-binary number is defined as a number consisting only of the digits `0` and `1`. For example:
- `101` is a deci-binary number.
- `23` is not a deci-binary number.

### Key Insight

To construct the integer `n` using the minimum number of deci-binary numbers, observe the digits of `n`. The maximum digit in `n` determines the minimum number of deci-binary numbers required. This is because:
- Each deci-binary number can contribute at most `1` to any place value.
- Thus, if the maximum digit in `n` is `x`, you need at least `x` deci-binary numbers to cover the contributions to each digit position.

For instance, if `n = "82734"`:
- The maximum digit is `8`, so you'd need at least `8` deci-binary numbers, since you will need to make eight contributions of `1` to reach `8` in that place.

### Solution in C++

Now let's implement this understanding in C++:

```cpp
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minPartitions(string n) {
        // Initialize the maximum digit we find in the string
        char maxDigit = '0';
        
        // Iterate through each character in the string to find the maximum digit
        for (char c : n) {
            if (c > maxDigit) {
                maxDigit = c;
            }
        }
        
        // The result is the integer value of the maximum digit found
        return maxDigit - '0'; // Convert char to int
    }
};

// Example usage
int main() {
    Solution solution;
    string n = "82734";
    cout << "Minimum number of deci-binary numbers required: " << solution.minPartitions(n) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Class Declaration**: We define a `Solution` class with a method `minPartitions`.

2. **Finding Maximum Digit**: Inside the `minPartitions` method:
    - We initialize a variable `maxDigit` with `'0'`.
    - We loop through each character of the string `n`. 
    - If any character `c` is greater than `maxDigit`, we update `maxDigit`.

3. **Returning Result**: After finding the maximum digit, we convert it from a character to an integer (by subtracting `'0'`) and return that integer as the result.

4. **Main Function**: We include a simple `main` function to demonstrate how to use the solution.

### Conclusion

This solution efficiently calculates the minimum number of deci-binary numbers required by determining the highest digit in the input number, resulting in an O(k) time complexity, where k is the length of the string. The approach is straightforward and leverages the properties of deci-binary numbers effectively.