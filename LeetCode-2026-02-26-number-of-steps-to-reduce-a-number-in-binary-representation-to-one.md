# LeetCode Daily – 2026-02-26

## 🧠 Problem #1404 – **Number of Steps to Reduce a Number in Binary Representation to One**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one)

---

### 📝 Problem Description

Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:


	
	If the current number is even, you have to divide it by 2.
	
	
	If the current number is odd, you have to add 1 to it.
	


It is guaranteed that you can always reach one for all test cases.

 
Example 1:


Input: s = &quot;1101&quot;
Output: 6
Explanation: &quot;1101&quot; corressponds to number 13 in their decimal representation.
Step 1) 13 is odd, add 1 and obtain 14. 
Step 2) 14 is even, divide by 2 and obtain 7.
Step 3) 7 is odd, add 1 and obtain 8.
Step 4) 8 is even, divide by 2 and obtain 4.  
Step 5) 4 is even, divide by 2 and obtain 2. 
Step 6) 2 is even, divide by 2 and obtain 1.  


Example 2:


Input: s = &quot;10&quot;
Output: 1
Explanation: &quot;10&quot; corresponds to number 2 in their decimal representation.
Step 1) 2 is even, divide by 2 and obtain 1.  


Example 3:


Input: s = &quot;1&quot;
Output: 0


 
Constraints:


	1 <= s.length <= 500
	s consists of characters &#39;0&#39; or &#39;1&#39;
	s[0] == &#39;1&#39;

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem titled "Number of Steps to Reduce a Number in Binary Representation to One".

### Problem Explanation

The goal of the problem is to reduce a given number \( num \) (which is treated as a binary representation) to 1 by performing the following operations:

1. If the current number is even, divide it by 2.
2. If the current number is odd, subtract 1 from it.

Each operation counts as a step, and you need to return the total number of steps required to reduce \( num \) to 1.

### Example

For example, if \( num = 14 \):
- 14 is even, so divide by 2 (14 → 7).
- 7 is odd, so subtract 1 (7 → 6).
- 6 is even, so divide by 2 (6 → 3).
- 3 is odd, so subtract 1 (3 → 2).
- 2 is even, so divide by 2 (2 → 1).

This results in a total of 5 steps.

### Approach

We can solve this problem using a simple loop to repeatedly check whether the number is odd or even, applying the respective operation until the number becomes 1. 

### C++ Implementation

Here is a C++ implementation of the algorithm:

```cpp
class Solution {
public:
    int numSteps(string s) {
        int steps = 0; // Initialize steps counter
        // The string represents the binary number
        while (s != "1") { // Loop until s becomes "1"
            if (s.back() == '0') {
                // If the last character is 0, it's even, divide by 2
                s.pop_back(); // Remove the last '0' (equivalent to division)
            } else {
                // If the last character is 1, it's odd, subtract 1
                // We will handle the "addition of 1" bit more carefully
                // Create a new string to represent the addition
                int carry = 1; // This is the carry for addition
                for (int i = s.size() - 1; i >= 0; --i) {
                    if (s[i] == '1' && carry == 1) {
                        s[i] = '0'; // 1 + 1 = 0 with carry
                    } else if (s[i] == '0' && carry == 1) {
                        s[i] = '1'; // 0 + 1 = 1 without carry
                        carry = 0; // No more carry is needed
                        break;
                    }
                }
                if (carry == 1) {
                    // If carrying is still 1, it means we need to add a new '1' at the front
                    s = "1" + s; // This handles the overflow
                }
            }
            steps++; // Increment the steps for any operation
        }
        return steps; // Return the total steps taken
    }
};
```

### Explanation of the Code:

1. **Input Handling**: The input is a binary string \( s \), representing the number we need to reduce.
   
2. **Loop Until s is "1"**: The main loop continues until the string \( s \) equals "1".

3. **Check Last Character**: 
    - If the last character of \( s \) is '0', it indicates the number is even. We simply remove the last character to simulate dividing by 2.
    - If the last character is '1', it indicates the number is odd:
        - We simulate subtracting 1 by looping from the end of the string, performing a "binary addition" back to front.
        - If we encounter '1' while carrying a 1 (from the subtraction), it turns into '0', and we continue.
        - If we find '0' while carrying 1, it turns into '1', and we stop the carry.
        - If the carry is still 1 after finishing the loop, we add a new '1' to the front of the string. This simulates adding one (from the subtraction).

4. **Increment Steps**: Each operation increments the `steps` variable.

5. **Return Result**: Once the loop ends, we return the total count of steps taken.

### Complexity Analysis

- **Time Complexity**: The time complexity is \( O(n) \) where \( n \) is the length of the binary string. This is because in the worst-case scenario, we might be processing all bits of the binary string.
- **Space Complexity**: The space complexity is \( O(1) \) as we only use a few integer variables.

This implementation efficiently reduces the number represented by the binary string to 1 and counts the necessary steps.