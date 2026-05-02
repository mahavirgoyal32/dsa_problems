# LeetCode Daily – 2026-05-02

## 🧠 Problem #788 – **Rotated Digits**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotated-digits)

---

### 📝 Problem Description

An integer x is a good if after rotating each digit individually by 180 degrees, we get a valid number that is different from x. Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. For example:


	0, 1, and 8 rotate to themselves,
	2 and 5 rotate to each other (in this case they are rotated in a different direction, in other words, 2 or 5 gets mirrored),
	6 and 9 rotate to each other, and
	the rest of the numbers do not rotate to any other number and become invalid.


Given an integer n, return the number of good integers in the range [1, n].

 
Example 1:


Input: n = 10
Output: 4
Explanation: There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.


Example 2:


Input: n = 1
Output: 0


Example 3:


Input: n = 2
Output: 1


 
Constraints:


	1 <= n <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's go over the "Rotated Digits" problem step by step, including an explanation of the approach and a sample C++ solution.

### Problem Explanation

You are given an integer `N`, and you need to count how many integers between `1` and `N` (inclusive) are "good" numbers. A "good" number is defined as:

1. It remains valid when rotated 180 degrees (i.e., the digits 0, 1, 8 remain the same, and the digits 2, 5, 6, and 9 can be rotated to form other valid digits).
2. It should not contain the digits 3, 4, or 7, as these digits cannot be rotated into valid digits.
3. At least one of the digits should change after rotation (i.e., it should contain at least one of the digits 2, 5, 6, or 9).

### Approach

1. We will iterate through all numbers from 1 to `N`.
2. For each number:
   - Check if it contains any invalid digits (3, 4, 7).
   - Check if it contains at least one of the valid rotating digits (2, 5, 6, or 9).
   - Finally, if it satisfies the above conditions, it is a "good" number and we count it.

### Implementation

Below is the C++ implementation based on this approach:

```cpp
class Solution {
public:
    int rotatedDigits(int N) {
        int count = 0;

        for (int num = 1; num <= N; ++num) {
            if (isGood(num)) {
                count++;
            }
        }

        return count;
    }
    
private:
    bool isGood(int num) {
        bool hasValidDigit = false;
        bool hasChangingDigit = false;

        while (num > 0) {
            int digit = num % 10;

            // Check for invalid digit
            if (digit == 3 || digit == 4 || digit == 7) {
                return false; // not a good number if contains 3, 4, or 7
            }
            // Check for valid digits
            if (digit == 2 || digit == 5 || digit == 6 || digit == 9) {
                hasChangingDigit = true; // has a digit that will change after rotation
            }
            // Valid digits 0, 1, 8 do not affect the flags we need
            if (digit == 0 || digit == 1 || digit == 8) {
                // we know it's valid but does not change
                hasValidDigit = true;
            }

            num /= 10; // Go to the next digit
        }

        // A good number must have at least one valid changing digit
        return hasChangingDigit;
    }
};
```

### Explanation of the Code

1. **Main Function (`rotatedDigits`)**: This is where we iterate over every number from 1 to `N`. For each number, we call the helper function `isGood` to check if it's a good number.

2. **Helper Function (`isGood`)**: This function checks each digit of the number:
   - It uses a loop to extract each digit by taking the modulus of 10.
   - It checks if any digit is invalid (3, 4, or 7). If it finds any, the function returns false immediately.
   - It checks if the digit is one of the changing digits (2, 5, 6, or 9) and marks `hasChangingDigit` as true if found.
   - Once all digits are checked, the function returns true only if at least one changing digit was found.

### Complexity

- **Time Complexity**: O(K), where K is the number of digits in N. In the worst case when N is a maximum integer, this gives us a linear complexity relative to N.
- **Space Complexity**: O(1), since we are using a fixed amount of space for variables.

This implementation effectively counts the "good" numbers up to `N` by ensuring each number meets the criteria set by the problem.