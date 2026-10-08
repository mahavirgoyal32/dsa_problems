# LeetCode Daily – 2026-10-08

## 🧠 Problem #1021 – **Remove Outermost Parentheses**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-outermost-parentheses)

---

### 📝 Problem Description

A valid parentheses string is either empty &quot;&quot;, &quot;(&quot; + A + &quot;)&quot;, or A + B, where A and B are valid parentheses strings, and + represents string concatenation.


	For example, &quot;&quot;, &quot;()&quot;, &quot;(())()&quot;, and &quot;(()(()))&quot; are all valid parentheses strings.


A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 
Example 1:


Input: s = &quot;(()())(())&quot;
Output: &quot;()()()&quot;
Explanation: 
The input string is &quot;(()())(())&quot;, with primitive decomposition &quot;(()())&quot; + &quot;(())&quot;.
After removing outer parentheses of each part, this is &quot;()()&quot; + &quot;()&quot; = &quot;()()()&quot;.


Example 2:


Input: s = &quot;(()())(())(()(()))&quot;
Output: &quot;()()()()(())&quot;
Explanation: 
The input string is &quot;(()())(())(()(()))&quot;, with primitive decomposition &quot;(()())&quot; + &quot;(())&quot; + &quot;(()(()))&quot;.
After removing outer parentheses of each part, this is &quot;()()&quot; + &quot;()&quot; + &quot;()(())&quot; = &quot;()()()()(())&quot;.


Example 3:


Input: s = &quot;()()&quot;
Output: &quot;&quot;
Explanation: 
The input string is &quot;()()&quot;, with primitive decomposition &quot;()&quot; + &quot;()&quot;.
After removing outer parentheses of each part, this is &quot;&quot; + &quot;&quot; = &quot;&quot;.


 
Constraints:


	1 <= s.length <= 105
	s[i] is either &#39;(&#39; or &#39;)&#39;.
	s is a valid parentheses string.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's first clarify the problem statement and then provide a C++ solution along with an explanation.

### Problem Statement

You are given a valid parentheses string. A valid parentheses string is a string that consists of '(' and ')' characters and is properly balanced. The task is to remove the outermost parentheses of every primitive substring of the given string. A primitive substring is a substring that cannot be split into two or more valid parentheses strings.

### Example

For instance, if the input is `"(()())(())"`, the outermost parentheses of each primitive substring `"()()", "()"` should be removed. The result would be `"()()()"`.

### Plan

To solve this problem, we can follow these steps:

1. **Initialize a counter**: This will be used to keep track of the depth of nested parentheses.
2. **Iterate through the characters**: For each character in the string, we will:
   - If it’s an open parenthesis `'('`, increment the counter.
   - If it’s a closing parenthesis `')'`, decrement the counter.
   - If the counter indicates that we're at the outermost level (i.e., it becomes exactly 1 after an open parenthesis), then skip it when we build the result.
   - Do the same for the closing parenthesis when the counter returns to 0.
3. **Build the result string**: Collect valid characters as you traverse the original string.
4. **Return the result**: Finally, return the constructed string without the outermost parentheses.

### C++ Solution

Here's the C++ code implementing the above logic:

```cpp
#include <string>

class Solution {
public:
    std::string removeOuterParentheses(std::string s) {
        std::string result; // For storing the final result
        int depth = 0; // To track the depth of parentheses

        for (char c : s) {
            // If we encounter an open parenthesis
            if (c == '(') {
                // When depth is 0, we are at the outermost level, so we skip adding it to result
                if (depth > 0) {
                    result += c; // Only add to result if not at outermost level
                }
                depth++; // Increase depth
            } 
            // If we encounter a closing parenthesis
            else if (c == ')') {
                depth--; // Decrease depth
                // When depth is back to 0, we are ending the outermost level, skip this
                if (depth > 0) {
                    result += c; // Only add to result if not at outermost level
                }
            }
        }
        return result; // Return the result string
    }
};
```

### Explanation of the Code

1. **Initialization**:
    - We create a `result` string to hold the final output.
    - A `depth` integer is initialized to 0 to keep track of how many nested parentheses we are currently in.

2. **Iteration through the string**:
    - For each character `c` in the string `s`:
        - If it is `'('`, we first check the current `depth`. If `depth` is greater than 0, it means we are not at the outermost level, so we append it to `result`. Then we increase `depth`.
        - If it is `')'`, we decrement `depth`. We again check if we are still at a non-outermost level (where `depth` is greater than 0) before appending it to `result`.

3. **Return Result**:
    - Finally, the function returns the constructed `result`.

This approach ensures that we correctly skip the outermost parentheses while iterating through the string in a single pass with O(n) time complexity, where n is the length of the string, and uses O(n) space for the result string.