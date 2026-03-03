# LeetCode Daily – 2026-03-03

## 🧠 Problem #1545 – **Find Kth Bit in Nth Binary String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string)

---

### 📝 Problem Description

Given two positive integers n and k, the binary string Sn is formed as follows:


	S1 = &quot;0&quot;
	Si = Si - 1 + &quot;1&quot; + reverse(invert(Si - 1)) for i > 1


Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).

For example, the first four strings in the above sequence are:


	S1 = &quot;0&quot;
	S2 = &quot;011&quot;
	S3 = &quot;0111001&quot;
	S4 = &quot;011100110110001&quot;


Return the kth bit in Sn. It is guaranteed that k is valid for the given n.

 
Example 1:


Input: n = 3, k = 1
Output: &quot;0&quot;
Explanation: S3 is &quot;0111001&quot;.
The 1st bit is &quot;0&quot;.


Example 2:


Input: n = 4, k = 11
Output: &quot;1&quot;
Explanation: S4 is &quot;011100110110001&quot;.
The 11th bit is &quot;1&quot;.


 
Constraints:


	1 <= n <= 20
	1 <= k <= 2n - 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the problem "Find Kth Bit in Nth Binary String" from LeetCode.

The problem states that you need to find the Kth bit in the binary string formed by a specific recursive pattern. To clarify, the binary string for `n` is generated as follows:

1. `S(1) = "0"`
2. For `n > 1`, `S(n) = S(n - 1) + "1" + reverse(inverse(S(n - 1)))`

Where `inverse` changes all `0`s to `1`s and `1`s to `0`s.

### Steps to Solve the Problem
1. **Understand String Growth**: The length of `S(n)` doubles and adds one each time, following the pattern: 
   - `len(S(1)) = 1`
   - `len(S(2)) = 3`
   - `len(S(3)) = 7`
   - `len(S(4)) = 15`
   - Generally, `len(S(n)) = 2 * len(S(n-1)) + 1`, leading to `len(S(n)) = 2^n - 1`.
   
2. **Recursive Character Retrieval**: Instead of constructing `S(n)` directly (which can be infeasible for large `n`), you can use the properties of the string's structure to find the Kth bit:
   - If `K` is exactly at the middle of the string `S(n)`, it will always be '1'.
   - If `K` is less than the middle index, you can look for the Kth bit in the first half, `S(n-1)`.
   - If `K` is greater than the middle index, you can adjust K and look for Kth bit in the inverse of the last half.

3. **Recursive Function**: Use a recursive function to navigate through `S(n)` to locate the Kth bit without generating the entire string.

### C++ Implementation
Here’s the C++ code that implements the above logic:

```cpp
#include <iostream>
#include <cmath>

char findKthBit(int n, int k) {
    int len = (1 << n) - 1; // Length of S(n) is 2^n - 1

    if (k == (len + 1) / 2) {
        return '1'; // Middle element is always '1'
    }
    
    if (k < (len + 1) / 2) {
        return findKthBit(n - 1, k); // Search in the first half
    } else {
        // Search in the mirrored part
        // Get the equivalent position in S(n-1)
        int pos = len - k + 1; // Mirrored position
        char bit = findKthBit(n - 1, pos);
        // Return inverted bit
        return (bit == '0') ? '1' : '0';
    }
}

int main() {
    int n = 3, k = 5; // Example input
    std::cout << findKthBit(n, k) << std::endl; // Output: '1'
    return 0;
}
```

### Explanation of the Code:
- The `findKthBit` function calculates the length of the string `S(n)` using bitwise operation `(1 << n)` which is equivalent to `2^n`.
- We check if `k` is at the middle position to immediately return '1'.
- We check if `k` is in the first half or the second half of the string:
  - If it is in the first half, we recursively call `findKthBit` with `n - 1`.
  - If it is in the second half, we calculate the mirrored position and retrieve the corresponding bit from the first half, then invert it before returning.

This approach efficiently determines the Kth bit without constructing the potentially enormous strings, maintaining an optimal time complexity of O(log n).