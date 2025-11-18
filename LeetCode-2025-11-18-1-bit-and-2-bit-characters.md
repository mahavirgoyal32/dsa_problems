# LeetCode Daily – 2025-11-18

## 🧠 Problem #717 – **1-bit and 2-bit Characters**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/1-bit-and-2-bit-characters)

---

### 📝 Problem Description

We have two special characters:


	The first character can be represented by one bit 0.
	The second character can be represented by two bits (10 or 11).


Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

 
Example 1:


Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.


Example 2:


Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.


 
Constraints:


	1 <= bits.length <= 1000
	bits[i] is either 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "1-bit and 2-bit Characters" requires you to determine if the last character of a given binary array can be represented by a 1-bit character, given the rules for encoding the characters.

### Problem Explanation
You are given an array `bits` consisting of 0s and 1s where:
- A `0` represents a 1-bit character.
- A `10` or `11` represents a 2-bit character.

Your task is to check whether the last character in the bits array can be a 1-bit character.

### Approach
1. **Initialization:** Start traversing the `bits` array from the first character.
2. **Count Bits:** Use a loop to iterate through the array, and at each step:
   - If you encounter a `1`, it means the next character is part of a 2-bit character. Therefore, you should skip the next index.
   - If you encounter a `0`, you simply move to the next index.
3. **Check Last Character:** After you complete the loop, check if you ended on an index pointing to a 0. If you did, the last character can indeed be a 1-bit character.

### C++ Solution
Here is how you can implement the above logic in C++:

```cpp
#include <vector>

class Solution {
public:
    bool isOneBitCharacter(std::vector<int>& bits) {
        int n = bits.size();
        int i = 0; // Start at the beginning of the array

        while (i < n - 1) { // Loop until the second last element
            if (bits[i] == 1) {
                i += 2; // Skip the next character because this is a 2-bit character
            } else {
                i++; // Move to the next character
            }
        }
        
        // If we ended on the last element, it can be a 1-bit character.
        return i == n - 1;
    }
};
```

### Explanation of the Code:
1. **Function Declaration:** The function `isOneBitCharacter` takes a vector of integers `bits` as input.
2. **Initialization:** The variable `n` holds the size of the array, and `i` is initialized to `0` to start checking from the first index.
3. **Loop Through Bits:** 
   - The loop continues until `i` reaches the second last element (`n - 1`).
   - Within the loop, it checks the value at the current index:
     - If it's `1`, it adds `2` to `i` to skip the next bit (as this indicates that the current and the next bit together form a 2-bit character).
     - If it's `0`, it simply increments `i` by one, indicating a valid 1-bit character.
4. **Final Check:** After exiting the loop, if `i` is equal to `n - 1`, it means that the last character we checked can indeed be a 1-bit character, so we return `true`. If it isn't, we return `false`.

### Complexity Analysis
- **Time Complexity:** O(n), where n is the length of the `bits` array, since we only need a single pass through the array.
- **Space Complexity:** O(1), as we are using a constant amount of space.

This solution effectively checks the encoding conditions while ensuring we follow the 1-bit/2-bit character rules correctly.