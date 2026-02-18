# LeetCode Daily – 2026-02-18

## 🧠 Problem #693 – **Binary Number with Alternating Bits**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-number-with-alternating-bits)

---

### 📝 Problem Description

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 
Example 1:


Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101


Example 2:


Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.

Example 3:


Input: n = 11
Output: false
Explanation: The binary representation of 11 is: 1011.

 
Constraints:


	1 <= n <= 231 - 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Binary Number with Alternating Bits" asks us to determine whether a given positive integer, expressed in binary, has alternating bits. An alternating bit sequence means that the bits switch between 0 and 1 at every position (e.g., ‘101’, ‘010’, etc.).

### Problem Breakdown

Given a positive integer `n`, we need to:
1. Convert it to its binary representation.
2. Check whether its binary bits alternate continually.

### Examples

- For `n = 5` (which is `101` in binary), the bits alternate: the answer is `true`.
- For `n = 7` (which is `111` in binary), the bits do not alternate: the answer is `false`.
- For `n = 10` (which is `1010` in binary), the bits alternate: the answer is `true`.

### C++ Solution

Let's write a C++ function to solve this problem.

```cpp
class Solution {
public:
    bool hasAlternatingBits(int n) {
        // Shift the bits one to the right and XOR with n.
        // The result should be a sequence of '1's for it to have alternating bits.
        int shifted = n >> 1;
        int xor_result = n ^ shifted;

        // Check if the xor_result + 1 is a power of two.
        // A number is a power of two if it has exactly one bit set.
        return (xor_result & (xor_result + 1)) == 0;
    }
};
```

### Explanation of the Code

1. **Right Shift and XOR**:
   - We right shift the number `n` by 1 position, which essentially removes the least significant bit (LSB).
   - Next, we perform an XOR (`^`) operation between `n` and the right-shifted version. This helps us identify the differences in consecutive bits.
   - If the bits of `n` alternate, the XOR result will yield a number where all bits are `1`. For example:
     - For `n = 5` (binary `101`):
       - Right shift gives `010` (2 in decimal).
       - XOR: `101 ^ 010 = 111` (7 in decimal).
     - The resulting number will have all its bits set to `1` for alternating sequences.

2. **Check for Power of Two**:
   - The expression `xor_result + 1` should be a power of two if `xor_result` consists entirely of `1`s. A number is a power of two if only one bit is set in its binary representation.
   - We check this condition using the bitwise AND operation: `(xor_result & (xor_result + 1)) == 0`. If it equals `0`, then `xor_result` has a single sequence of `1`s followed by zeros.

3. **Return Result**:
   - If both conditions satisfy, we return `true` indicating that `n` does indeed have alternating bits; otherwise, we return `false`.

### Complexity
- **Time Complexity**: O(log n) in the worst case due to the number of bits in the integer `n`.
- **Space Complexity**: O(1) since we're not using additional data structures that scale with input size.

This solution is efficient and effectively determines if the binary representation of the integer has alternating bits.