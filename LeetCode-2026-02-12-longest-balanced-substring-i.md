# LeetCode Daily – 2026-02-12

## 🧠 Problem #3713 – **Longest Balanced Substring I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-balanced-substring-i)

---

### 📝 Problem Description

You are given a string s consisting of lowercase English letters.

A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

Return the length of the longest balanced substring of s.

 
Example 1:


Input: s = &quot;abbac&quot;

Output: 4

Explanation:

The longest balanced substring is &quot;abba&quot; because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 2 times.


Example 2:


Input: s = &quot;zzabccy&quot;

Output: 4

Explanation:

The longest balanced substring is &quot;zabc&quot; because the distinct characters &#39;z&#39;, &#39;a&#39;, &#39;b&#39;, and &#39;c&#39; each appear exactly 1 time.​​​​​​​


Example 3:


Input: s = &quot;aba&quot;

Output: 2

Explanation:

​​​​​​​One of the longest balanced substrings is &quot;ab&quot; because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 1 time. Another longest balanced substring is &quot;ba&quot;.


 
Constraints:


	1 <= s.length <= 1000
	s consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem titled "Longest Balanced Substring I" on LeetCode, we need to identify the longest substring that contains an equal number of parentheses `(` and `)`. The challenge can be approached using a stack data structure to help manage and track the indices of the characters as we iterate through the string.

### Problem Explanation
A balanced substring in this context is defined as having equal numbers of the opening and closing parentheses. For example, `"(())"` is balanced because there are two `(` and two `)`, while `"(()"` is not balanced because there is one `)` less than `(`.

### Approach
1. **Stack for Index Tracking**: We can use a stack to keep track of the indices of the characters in the string. This will help us find the start of valid substrings when we encounter a closing parenthesis.
  
2. **Length Tracking**: We will maintain a variable to keep track of the longest length of balanced substrings found.

3. **Iterate through the string**: For each character:
   - If we encounter an `(`, push its index onto the stack.
   - If we encounter a `)`, we check if the stack is not empty:
     - If it's not empty, we pop from the stack (indicating we've found a matching `(`).
     - Calculate the length of the current balanced substring by comparing the current index with the top element of the stack.
     - If the stack is empty after popping, it means we've just closed out a balanced substring from the start of the string. Thus we can compute the length as the current index + 1.
  
4. If the stack is empty when we see a `)`, it means there is no matching `(`, so we reset the stack by pushing the current index (as a new starting point).

### C++ Implementation

Here’s how the implementation might look in C++:

```cpp
#include <iostream>
#include <stack>
#include <string>

class Solution {
public:
    int longestBalancedSubstring(std::string s) {
        std::stack<int> indexStack;
        indexStack.push(-1); // Initialize base for the longest length calculation
        int maxLength = 0;

        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == '(') {
                indexStack.push(i); // Push index of '('
            } else { // s[i] == ')'
                if (!indexStack.empty()) {
                    indexStack.pop(); // Pop the last '('
                }

                if (indexStack.empty()) {
                    // No matching '(', push the current index as base for new substring
                    indexStack.push(i);
                } else {
                    // Calculate length of current balanced substring
                    int length = i - indexStack.top();
                    maxLength = std::max(maxLength, length);
                }
            }
        }
        return maxLength; // Return the maximum length found
    }
};

int main() {
    Solution solution;
    std::string input = "(()())"; // Example input
    int result = solution.longestBalancedSubstring(input);
    std::cout << "The length of the longest balanced substring is: " << result << std::endl; // Expected output: 6
    return 0;
}
```

### Explanation of the Code
1. **Initialization**: We push `-1` onto the stack to serve as a base index, which helps in calculating lengths of valid substrings.

2. **Iteration**: We loop through each character:
   - If it's `(`, we push its index onto the stack.
   - If it's `)`, we pop from the stack. If after popping we find the stack empty, it means we have an unmatched closing parenthesis, and we need to push this index onto the stack.

3. **Length Calculation**: When the stack isn’t empty after popping, we calculate the current balanced substring’s length and update `maxLength` accordingly.

4. **Output**: Finally, return `maxLength` which represents the length of the longest balanced substring.

### Complexity
- **Time Complexity**: O(n), where n is the length of the string, since we traverse the string once.
- **Space Complexity**: O(n) in the worst case for the stack, although in practice it can be less than n depending on the input.