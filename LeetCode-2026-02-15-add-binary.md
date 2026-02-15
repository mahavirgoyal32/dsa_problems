# LeetCode Daily – 2026-02-15

## 🧠 Problem #67 – **Add Binary**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/add-binary)

---

### 📝 Problem Description

Given two binary strings a and b, return their sum as a binary string.

 
Example 1:
Input: a = "11", b = "1"
Output: "100"
Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

 
Constraints:


	1 <= a.length, b.length <= 104
	a and b consist only of &#39;0&#39; or &#39;1&#39; characters.
	Each string does not contain leading zeros except for the zero itself.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Add Binary" problem on LeetCode requires you to take two binary string representations and add them together, returning the result as a binary string. Let's break down a solution in C++ along with an explanation of the logic involved.

### Problem Overview

You are given two binary strings, `a` and `b`. Your task is to compute their sum and return it as a binary string.

### Approach

1. **Reverse Iteration**: Since binary addition works from least significant bit (rightmost) to most significant bit (leftmost), we can iterate through both strings from the end to the beginning.
2. **Carrying**: Keep track of the carry for cases where the sum of two bits exceeds 1, as binary addition requires carrying over to the next higher bit.
3. **Result Construction**: Construct the result by appending to a result string in reverse order since we will be processing from least significant to most significant.

### Steps to Implement

1. Initialize variables for the result string and the carry.
2. Loop through both strings from the end towards the beginning.
3. For each bit:
   - Convert the current bits from strings to integers.
   - Calculate the sum of these two bits and the carry.
   - Update the carry for the next higher bit.
   - Determine the result bit by finding the remainder of sum divided by 2 (to get the final bit without carry).
4. If there's any carry left after processing both strings, add that to the result.
5. Since we built the string in reverse, reverse the result before returning.

### C++ Code Implementation

Here's the complete solution in C++:

```cpp
#include <string>
#include <algorithm>

std::string addBinary(std::string a, std::string b) {
    std::string result;
    int carry = 0;
    
    int i = a.size() - 1;
    int j = b.size() - 1;
    
    while (i >= 0 || j >= 0 || carry) {
        // Get the value of the current bits
        int bitA = (i >= 0) ? a[i] - '0' : 0; // Convert char to int
        int bitB = (j >= 0) ? b[j] - '0' : 0;
        
        // Calculate the sum of both bits + carry
        int sum = bitA + bitB + carry;
        
        // Determine the new carry
        carry = sum / 2;
        
        // Append the result bit (sum % 2)
        result += (sum % 2) + '0';
        
        // Move to the next bits
        i--;
        j--;
    }
    
    // The result is currently in reverse order
    std::reverse(result.begin(), result.end());
    
    return result;
}
```

### Explanation of Code

- **Variables**:
  - `result`: A string to store the binary result.
  - `carry`: An integer that stores the carry for the addition.
  - `i` and `j`: Indices for traversing the binary strings `a` and `b` respectively from the end.
  
- **While Loop**: This loop continues until both strings are fully traversed and there is no carry left.
  - Inside the loop, the current bit values from `a` and `b` are determined. If the index is out of bounds, it's treated as `0`.
  - The sum is calculated, and the carry for the next iteration is updated.
  - The result bit is determined as the sum modulo 2 and is appended to the `result` string.
  
- **Final Result**: After the loop, the result string is reversed to present it in the correct binary order.

### Complexity Analysis

- **Time Complexity**: O(max(m, n)), where `m` is the length of `a` and `n` is the length of `b`. This is because we process each bit once.
- **Space Complexity**: O(max(m, n)) for the result string.

This implementation efficiently handles the addition of two binary numbers represented as strings and constructs the resulting binary string with appropriate carries.