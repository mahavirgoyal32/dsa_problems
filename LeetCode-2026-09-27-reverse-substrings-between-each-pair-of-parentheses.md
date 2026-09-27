# LeetCode Daily – 2026-09-27

## 🧠 Problem #1190 – **Reverse Substrings Between Each Pair of Parentheses**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses)

---

### 📝 Problem Description

You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 
Example 1:


Input: s = &quot;(abcd)&quot;
Output: &quot;dcba&quot;


Example 2:


Input: s = &quot;(u(love)i)&quot;
Output: &quot;iloveu&quot;
Explanation: The substring &quot;love&quot; is reversed first, then the whole string is reversed.


Example 3:


Input: s = &quot;(ed(et(oc))el)&quot;
Output: &quot;leetcode&quot;
Explanation: First, we reverse the substring &quot;oc&quot;, then &quot;etco&quot;, and finally, the whole string.


 
Constraints:


	1 <= s.length <= 2000
	s only contains lower case English characters and parentheses.
	It is guaranteed that all parentheses are balanced.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of reversing substrings between each pair of parentheses, we can break it down into a series of steps. We will utilize a stack to handle the nested structure of the parentheses effectively. Here’s a detailed explanation of the approach along with the C++ code implementation.

### Problem Breakdown

1. **Stack Usage**: Use a stack to keep track of the indices (or content) of the substrings we encounter. Whenever we encounter a `(`, we push the current state onto the stack. When we encounter a `)`, we will pop from the stack until we find the matching `(`, reverse the content found between them, and then push the reversed content back onto the stack.

2. **Iterate through Characters**: Loop through each character of the input string. Depending on whether the character is `(`, `)`, or a regular character, we will interact with the stack accordingly.

3. **Build Result**: At the end of our iteration, we will concatenate all elements in the stack to get our final result.

### C++ Implementation

Here’s how we can implement the above plan in C++:

```cpp
#include <iostream>
#include <stack>
#include <string>

using namespace std;

string reverseParentheses(string s) {
    stack<string> stk;
    string current = ""; // To build the current segment

    for (char ch : s) {
        if (ch == '(') {
            // Push the current segment onto the stack and reset it
            stk.push(current);
            current = "";
        } else if (ch == ')') {
            // Reverse the current segment and append to the top of the stack
            reverse(current.begin(), current.end());
            if (!stk.empty()) {
                current = stk.top() + current; // Merge with the previous segment
                stk.pop();
            }
        } else {
            // Regular character, just add it to current
            current += ch;
        }
    }

    return current; // The result is in the 'current' string
}

int main() {
    string input = "(u(love)i)";
    cout << "Output: " << reverseParentheses(input) << endl; // Output: "iloveu"
    
    return 0;
}
```

### Explanation of the Code

1. **Initialization**: We initialize a stack of strings (`stk`) to maintain the segments and a string `current` to accumulate characters that we encounter.

2. **Character Loop**: For each character in the string:
   - If it’s an opening parenthesis `(`, we push the current accumulated string onto the stack and reset `current`.
   - If it’s a closing parenthesis `)`, we reverse the `current` string (which contains the segment between `(` and `)`). After reversing, we pop the top string from the stack and concatenate it with `current` to form the new state of `current`.
   - If it's a regular character, append it to the current string.

3. **Output**: After processing all characters, we return the accumulated `current` string which contains the final result.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the length of the string. Each character is processed once.
- **Space Complexity**: O(n) for the stack and current string in the worst case when the string contains many nested parentheses.

This approach is efficient and suitable for the problem constraints.