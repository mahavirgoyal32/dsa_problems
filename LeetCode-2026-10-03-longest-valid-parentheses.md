# LeetCode Daily – 2026-10-03

## 🧠 Problem #32 – **Longest Valid Parentheses**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-valid-parentheses)

---

### 📝 Problem Description

Given a string containing just the characters &#39;(&#39; and &#39;)&#39;, return the length of the longest valid (well-formed) parentheses substring.

 
Example 1:


Input: s = &quot;(()&quot;
Output: 2
Explanation: The longest valid parentheses substring is &quot;()&quot;.


Example 2:


Input: s = &quot;)()())&quot;
Output: 4
Explanation: The longest valid parentheses substring is &quot;()()&quot;.


Example 3:


Input: s = &quot;&quot;
Output: 0


 
Constraints:


	0 <= s.length <= 3 * 104
	s[i] is &#39;(&#39;, or &#39;)&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Longest Valid Parentheses" problem, we want to find the length of the longest valid (well-formed) parentheses substring in a given string containing only the characters '(' and ')'.

### Problem Explanation
A valid parentheses string is defined as:
- For every opening bracket '(', there exists a corresponding closing bracket ')'.
- The opening brackets and closing brackets must be properly nested.

### Example:
For the input string `"(()())"`, the longest valid parentheses substring is the string itself with a length of `6`.

For the input string `")()())"`, the longest valid parentheses substring is the substring `"()()"`, which has a length of `4`.

### Approach
1. **Stack Method**: We can use a stack to keep track of the indices of the characters. Here's a step-by-step approach:
   - Initialize a stack to store the indices of the characters, and push `-1` onto the stack to help calculate lengths later.
   - Iterate through each character in the string:
     - If the character is '(', push its index onto the stack.
     - If the character is ')':
       - Pop the top of the stack.
       - If the stack is empty after popping, it means we have an unmatched closing bracket. So push the current index onto the stack as a new base for future valid strings.
       - If the stack is not empty, calculate the length of the valid substring by taking the difference between the current index and the index on the top of the stack, and update the maximum length if necessary.

This approach works in O(n) time complexity, where n is the length of the input string. The space complexity is O(n) due to the stack.

### C++ Implementation
Here's the complete C++ solution with comments:

```cpp
#include <iostream>
#include <vector>
#include <stack>
#include <string>
using namespace std;

class Solution {
public:
    int longestValidParentheses(string s) {
        stack<int> indices; // Stack to store indices of characters
        indices.push(-1); // Base for valid substring length calculation
        int max_length = 0; // To track the maximum length of valid parentheses

        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                // If character is '(', push its index onto the stack
                indices.push(i);
            } else {
                // If character is ')', pop the top of the stack
                indices.pop();
                if (indices.empty()) {
                    // If stack is empty, add the current index as a new base
                    indices.push(i);
                } else {
                    // Calculate the valid length by current index - index on top of stack
                    max_length = max(max_length, i - indices.top());
                }
            }
        }
        return max_length;
    }
};

// Example usage:
int main() {
    Solution solution;
    string s = "(()())";
    cout << "The length of the longest valid parentheses substring is: " 
         << solution.longestValidParentheses(s) << endl;
    return 0;
}
```

### Explanation of the Code
1. We define a `Solution` class with a method `longestValidParentheses`.
2. Inside this method, we create a stack to keep track of indices and initialize it with `-1`.
3. We iterate through the input string:
   - For '(', we push its index.
   - For ')', we pop from the stack. If the stack is empty after popping, it indicates an unmatched closing parenthesis.
   - If the stack is not empty, we use the top element to compute the length of the valid substring and update `max_length` accordingly.
4. Finally, we return the `max_length` which represents the length of the longest valid parentheses substring.

This solution efficiently computes the desired result using a stack-based approach while maintaining clarity and simplicity.