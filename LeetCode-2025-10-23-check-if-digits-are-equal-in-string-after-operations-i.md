# LeetCode Daily – 2025-10-23

## 🧠 Problem #3461 – **Check If Digits Are Equal in String After Operations I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i)

---

### 📝 Problem Description

You are given a string s consisting of digits. Perform the following operation repeatedly until the string has exactly two digits:


	For each pair of consecutive digits in s, starting from the first digit, calculate a new digit as the sum of the two digits modulo 10.
	Replace s with the sequence of newly calculated digits, maintaining the order in which they are computed.


Return true if the final two digits in s are the same; otherwise, return false.

 
Example 1:


Input: s = &quot;3902&quot;

Output: true

Explanation:


	Initially, s = &quot;3902&quot;
	First operation:
	
		(s[0] + s[1]) % 10 = (3 + 9) % 10 = 2
		(s[1] + s[2]) % 10 = (9 + 0) % 10 = 9
		(s[2] + s[3]) % 10 = (0 + 2) % 10 = 2
		s becomes &quot;292&quot;
	
	
	Second operation:
	
		(s[0] + s[1]) % 10 = (2 + 9) % 10 = 1
		(s[1] + s[2]) % 10 = (9 + 2) % 10 = 1
		s becomes &quot;11&quot;
	
	
	Since the digits in &quot;11&quot; are the same, the output is true.



Example 2:


Input: s = &quot;34789&quot;

Output: false

Explanation:


	Initially, s = &quot;34789&quot;.
	After the first operation, s = &quot;7157&quot;.
	After the second operation, s = &quot;862&quot;.
	After the third operation, s = &quot;48&quot;.
	Since &#39;4&#39; != &#39;8&#39;, the output is false.



 
Constraints:


	3 <= s.length <= 100
	s consists of only digits.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's dive into the LeetCode problem titled "Check If Digits Are Equal in String After Operations I".

### Problem Statement

You are given a string `num` of digits. You need to check if the digits of the string can be made equal by performing a series of operations. The operations allowed are:

1. **Increment**: Increase any digit by 1 (with wrap-around from 9 to 0).
2. **Decrement**: Decrease any digit by 1 (with wrap-around from 0 to 9).

The task is to determine if all the digits can eventually be made equal through the defined operations.

### Explanation

Two digits in the string can be converted to one another if their difference (modulo 10) can be canceled out by a sequence of increments or decrements. 

For example:
- The digit '1' can be incremented to '2', '3'... up to '9', and can also wrap around to '0'. 
- The digit '9' can be decremented to '8', '7'... down to '0', and can wrap around to '1'.

To solve the problem, the key observation is:
- For any digit in the string, we can arrive at any other digit if the relative differences between them can be matched through operations. 

This boils down to checking if all digits in the string have the same modulo 10 value after some operations.

### Solution

1. We can pick the first character (digit) in the string as a reference.
2. We will then iterate through the rest of the characters in the string.
3. If all characters are equal to the reference character (after considering wrapping around), then we return true. If we find any character that doesn't match, we return false.

### C++ Code

Here's how you could implement this in C++:

```cpp
#include <string>

class Solution {
public:
    bool digitCount(string num) {
        // Save the reference digit from the first character
        char referenceDigit = num[0];

        // Check every character in the string
        for (char ch : num) {
            // If any digit differs from the reference digit
            if (ch != referenceDigit) {
                return false;
            }
        }
        
        // All digits are equal
        return true;
    }
};
```

### Explanation of the Code

1. We define a class `Solution` with a method `digitCount`.
2. We use the first character of the string `num` as the reference character.
3. We iterate through the string using a range-based for loop. For each character, we compare it with the reference character.
4. If we find any character that is not the same as the reference, we return `false`.
5. If we finish the loop without finding any discrepancies, we return `true`.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the length of the string `num`. We go through each digit once.
- **Space Complexity**: O(1), since we are only using a constant amount of extra space for variables.

This approach efficiently checks if all digits in the input string can be made equal under the defined operations.