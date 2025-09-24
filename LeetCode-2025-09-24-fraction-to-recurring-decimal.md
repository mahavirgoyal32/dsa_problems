# LeetCode Daily – 2025-09-24

## 🧠 Problem #166 – **Fraction to Recurring Decimal**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/fraction-to-recurring-decimal)

---

### 📝 Problem Description

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 
Example 1:


Input: numerator = 1, denominator = 2
Output: &quot;0.5&quot;


Example 2:


Input: numerator = 2, denominator = 1
Output: &quot;2&quot;


Example 3:


Input: numerator = 4, denominator = 333
Output: &quot;0.(012)&quot;


 
Constraints:


	-231 <= numerator, denominator <= 231 - 1
	denominator != 0

---

### 💡 Solution (Language)

```cpp

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        if (numerator == 0) return "0";

        string result;

        // sign handling
        if ((numerator < 0) ^ (denominator < 0)) result += "-";

        // convert to long long to avoid overflow (e.g., INT_MIN / -1)
        long long num = llabs((long long)numerator);
        long long den = llabs((long long)denominator);

        // integer part
        long long integerPart = num / den;
        result += to_string(integerPart);

        long long remainder = num % den;
        if (remainder == 0) return result; // no fractional part

        result += ".";

        // map remainder -> position in result
        unordered_map<long long, int> remainderPos;
        string fraction;

        while (remainder != 0) {
            if (remainderPos.count(remainder)) {
                // insert '(' at position and append ')'
                fraction.insert(remainderPos[remainder], "(");
                fraction += ")";
                break;
            }

            remainderPos[remainder] = fraction.size();
            remainder *= 10;
            fraction += to_string(remainder / den);
            remainder %= den;
        }

        result += fraction;
        return result;
    }
};
