# LeetCode Daily – 2026-02-16

## 🧠 Problem #190 – **Reverse Bits**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-bits)

---

### 📝 Problem Description

Reverse bits of a given 32 bits signed integer.

 
Example 1:


Input: n = 43261596

Output: 964176192

Explanation:


	
		
			Integer
			Binary
		
		
			43261596
			00000010100101000001111010011100
		
		
			964176192
			00111001011110000010100101000000
		
	



Example 2:


Input: n = 2147483644

Output: 1073741822

Explanation:


	
		
			Integer
			Binary
		
		
			2147483644
			01111111111111111111111111111100
		
		
			1073741822
			00111111111111111111111111111110
		
	



 
Constraints:


	0 <= n <= 231 - 2
	n is even.


 
Follow up: If this function is called many times, how would you optimize it?

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's go through the LeetCode problem "Reverse Bits" step by step, along with a C++ solution.

### Problem Statement
You are given a 32-bit unsigned integer and you need to return it by reversing its bits. For example:

- Input: `00000010100101000001111010011100`
- Output: `00111001011110000010100101000000`

### Approach
1. **Bit Manipulation**: We will handle the bits directly using bit manipulation techniques. Specifically, to reverse the bits, we can take advantage of shifting and masking.
  
2. **Iterate through Bits**: We'll loop through each bit position (from 0 to 31). During each iteration, we'll:
   - Check if the current bit is set (1).
   - If it is set, we need to set the corresponding bit in the reversed integer.
   - Shift the reversed integer to the left and the original integer to the right to continue to process the next bit.

3. **Construct the Reversed Integer**: Each time we find a set bit in the original number, we will set the corresponding bit in the result (reversed integer) by moving it into the proper position using left shifts.

### C++ Solution

Here’s the C++ code implementing the above logic:

```cpp
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t reversed = 0; // To store the reversed bits.
        
        // Process each of the 32 bits.
        for (int i = 0; i < 32; ++i) {
            // Shift reversed to the left to make space for the next bit.
            reversed <<= 1;

            // Check if the last bit of n is 1 and add it to reversed.
            if (n & 1) {
                reversed |= 1; // Set the last bit of reversed to 1.
            }

            // Shift n to the right to process the next bit.
            n >>= 1;
        }
        
        return reversed; // Return the final reversed bits.
    }
};
```

### Explanation of Code
- We start with `uint32_t reversed = 0;` which will hold our reversed number.
- We loop 32 times (once for each bit in the 32-bit integer).
  - In each iteration:
    - We shift `reversed` to the left by 1 (`reversed <<= 1;`).
    - We check the least significant bit of `n` using `if (n & 1)`. If it is set, we set the last bit of `reversed` by doing `reversed |= 1;`.
    - We then shift `n` to the right (`n >>= 1;`) to process the next bit.
- Finally, after all bits have been processed, we return `reversed`.

### Complexity Analysis
- **Time Complexity**: O(1) (treating the number of bits as constant).
- **Space Complexity**: O(1) since we are using a constant amount of space for variables.

This solution effectively reverses the bits of a 32-bit unsigned integer using simple bit manipulation techniques.