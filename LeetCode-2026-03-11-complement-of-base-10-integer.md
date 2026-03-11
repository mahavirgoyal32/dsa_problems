# LeetCode Daily – 2026-03-11

## 🧠 Problem #1009 – **Complement of Base 10 Integer**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/complement-of-base-10-integer)

---

### 📝 Problem Description

The complement of an integer is the integer you get when you flip all the 0&#39;s to 1&#39;s and all the 1&#39;s to 0&#39;s in its binary representation.


	For example, The integer 5 is &quot;101&quot; in binary and its complement is &quot;010&quot; which is the integer 2.


Given an integer n, return its complement.

 
Example 1:


Input: n = 5
Output: 2
Explanation: 5 is &quot;101&quot; in binary, with complement &quot;010&quot; in binary, which is 2 in base-10.


Example 2:


Input: n = 7
Output: 0
Explanation: 7 is &quot;111&quot; in binary, with complement &quot;000&quot; in binary, which is 0 in base-10.


Example 3:


Input: n = 10
Output: 5
Explanation: 10 is &quot;1010&quot; in binary, with complement &quot;0101&quot; in binary, which is 5 in base-10.


 
Constraints:


	0 <= n < 109


 
Note: This question is the same as 476: https://leetcode.com/problems/number-complement/

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Complement of Base 10 Integer" asks us to find the complement of a given non-negative integer in base 10. The complement of an integer `n` is defined as the integer that, when added to `n`, gives all bits set to `1` in its binary representation.

### Problem Breakdown

1. **Binary Representation**: Every non-negative integer can be represented in binary form. For example, the binary of `5` is `101`.

2. **Complement Definition**: The complement of the binary number `101` would be `010`, which is `2` in decimal. In essence, to find the complement:
   - Identify the number of bits used to represent the integer `n`.
   - Create a mask where all bits are set to `1`. The mask can be derived from the number of bits in `n`.
   - The result of the complement will then be the mask exclusive ORed (XOR) with `n`.

3. **Mask Creation**: The mask can be created by using `(1 << num_bits) - 1`, where `num_bits` is the length of the binary representation of `n`.

### Steps to solve the problem:

1. Count the number of bits in the binary representation of `n`.
2. Create a mask with all bits set to 1.
3. Return the XOR of `n` and the mask.

### C++ Solution

Here’s the C++ code implementing the solution with explanations:

```cpp
class Solution {
public:
    int bitwiseComplement(int n) {
        // If n is 0, its complement is 1 (since 0 in binary is 0).
        if (n == 0) {
            return 1;
        }

        int num_bits = 0;
        int temp = n;

        // Count the number of bits in the binary representation of n.
        while (temp > 0) {
            num_bits++;
            temp >>= 1;  // Right shift 1 bit (divides temp by 2)
        }

        // Create a mask with all bits set to 1 for the length of num_bits
        int mask = (1 << num_bits) - 1; // equivalent to 2^num_bits - 1

        // The complement is n XOR mask
        return n ^ mask;
    }
};
```

### Explanation of the Code:

1. **Check for Zero**: In line 5, we handle the special case where `n` is 0. The complement of `0` is `1`.

2. **Count the Number of Bits**: We use a while loop to count how many bits are required to represent `n`. We right shift `temp` until it becomes `0`, incrementing `num_bits` at each iteration.

3. **Create the Mask**: Using the formula `(1 << num_bits) - 1`, we create a mask where the number of bits matches that of `n` but is all set to `1`.

4. **Return the Complement**: Finally, we perform `n ^ mask` to get the complement and return the result.

### Example Walkthrough

For `n = 5`:
- Binary representation: `101`
- Number of bits: `3`
- Mask: `111` (which is `7` in decimal)
- Complement: `5 XOR 7` -> `2` (binary `010`)

The function returns `2` as expected. This method is efficient, using O(log n) time complexity due to the bit counting loop, which is typical for such bit manipulation problems.

Feel free to ask if you have any questions or need further clarifications!