# LeetCode Daily – 2026-02-28

## 🧠 Problem #1680 – **Concatenation of Consecutive Binary Numbers**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers)

---

### 📝 Problem Description

Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.

 
Example 1:


Input: n = 1
Output: 1
Explanation: &quot;1&quot; in binary corresponds to the decimal value 1. 


Example 2:


Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to &quot;1&quot;, &quot;10&quot;, and &quot;11&quot;.
After concatenating them, we have &quot;11011&quot;, which corresponds to the decimal value 27.


Example 3:


Input: n = 12
Output: 505379714
Explanation: The concatenation results in &quot;1101110010111011110001001101010111100&quot;.
The decimal value of that is 118505380540.
After modulo 109 + 7, the result is 505379714.


 
Constraints:


	1 <= n <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Concatenation of Consecutive Binary Numbers" is about generating a large binary number by concatenating the binary representations of the numbers from 1 to `n`. After concatenation, we need to return the resulting number modulo \(10^9 + 7\).

**Problem Breakdown:**
1. For each integer `i` from 1 to `n`, convert `i` to its binary form.
2. Concatenate all binary strings together to form a single binary string.
3. Convert this large binary string back to a decimal number.
4. Return the result modulo \(10^9 + 7\).

**Challenges:**
- The binary number can be very large, and we need to handle it appropriately to avoid overflow.
- Operations on binary numbers, such as shifting and combining them efficiently, are crucial to keep the process within computational limits.

We can achieve this by using bit manipulation:
- Instead of maintaining a huge binary string, we can directly calculate the resulting integer through successive left shifts and additions.
- As we process each number, we will shift the result to the left (multiplying the existing number by \( 2^{\text{length of binary representation of current number}} \)) and then add the current number itself.

### C++ Solution Implementation

Here's the C++ code to solve the problem:

```cpp
class Solution {
public:
    int concatenatedBinary(int n) {
        const int MOD = 1e9 + 7;
        long long result = 0;  // Using long long to prevent overflow
        for (int i = 1; i <= n; ++i) {
            int len = 0;  // Length of binary representation of current number
            int num = i;
            
            // Calculate the length of the binary representation
            while (num > 0) {
                len++;
                num >>= 1; // Shift right to divide by 2
            }
            
            // Shift result left by 'len' bits and add 'i'
            result = ((result << len) % MOD + i) % MOD;
        }
        
        return result;
    }
};
```

### Explanation of the Code:
1. **Modulus Definition:** We define `MOD` as \(10^9 + 7\) to use for taking modulo of our result to prevent overflow.
2. **Result Initialization:** We initialize `result` to 0, which will store our final concatenated result.
3. **Iterating Through Numbers:**
   - We loop from 1 to `n`.
   - For each number `i`, we calculate the length of its binary representation. This can be done by repeatedly shifting the number to the right until it becomes zero.
4. **Bitwise Operations:**
   - We then shift the `result` left by `len` bits (which is equivalent to multiplying `result` by \(2^{\text{len}}\)).
   - After this shift, we add the current `i` to `result`.
5. **Modulo Operation:** Every operation is taken modulo `MOD` to ensure we don't exceed the limits of standard data types and to get the result in the required format.

### Performance:
This algorithm runs in \(O(n \log n)\) time complexity due to the inner loop that computes the length of the binary representation, but since we are only looping through numbers from 1 to `n`, it is efficient for the constraints typically expected in such problems.