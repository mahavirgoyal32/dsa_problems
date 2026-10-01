# LeetCode Daily – 2026-10-01

## 🧠 Problem #20 – **Valid Parentheses**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-parentheses)

---

### 📝 Problem Description

Given a string s containing just the characters &#39;(&#39;, &#39;)&#39;, &#39;{&#39;, &#39;}&#39;, &#39;[&#39; and &#39;]&#39;, determine if the input string is valid.

An input string is valid if:


	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.
	Every close bracket has a corresponding open bracket of the same type.


 
Example 1:


Input: s = &quot;()&quot;

Output: true


Example 2:


Input: s = &quot;()[]{}&quot;

Output: true


Example 3:


Input: s = &quot;(]&quot;

Output: false


Example 4:


Input: s = &quot;([])&quot;

Output: true


Example 5:


Input: s = &quot;([)]&quot;

Output: false


 
Constraints:


	1 <= s.length <= 104
	s consists of parentheses only &#39;()[]{}&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Valid Parentheses" problem on LeetCode asks us to determine if a string containing just the characters '(', ')', '{', '}', '[' and ']' is valid. A string is considered valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

For example:
- Input: `"()"`
- Output: `true`

- Input: `"()[]{}"`
- Output: `true`

- Input: `"(]"`
- Output: `false`

- Input: `"([)]"`
- Output: `false`

- Input: `{""}`
- Output: `true`

### Approach

We can use a stack data structure to solve this problem. The idea is to push opening brackets onto the stack, and for every closing bracket, we check if it matches the top of the stack. If it doesn't match or the stack is empty when we try to pop, the string is invalid.

### Steps:

1. Initialize an empty stack.
2. Create a mapping of closing brackets to their corresponding opening brackets for easy lookup.
3. Loop through each character in the string:
   - If the character is an opening bracket, push it onto the stack.
   - If it's a closing bracket:
     - Check if the stack is empty (which means there's no matching opening bracket).
     - Pop the top element from the stack and check if it matches the closing bracket using our mapping.
4. After processing all characters, if the stack is empty, it means all the opening brackets were matched properly, so return `true`. If there are still elements in the stack, return `false`.

Here’s the implementation in C++:

```cpp
#include <iostream>
#include <stack>
#include <unordered_map>

class Solution {
public:
    bool isValid(std::string s) {
        // Create a mapping of closing to opening brackets
        std::unordered_map<char, char> mapping = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        
        std::stack<char> stack;
        
        for (char ch : s) {
            // If the character is a closing bracket
            if (mapping.count(ch)) {
                // Check if the stack is empty or the top of the stack doesn't match
                if (stack.empty() || stack.top() != mapping[ch]) {
                    return false;
                }
                stack.pop(); // valid match found, pop the top
            } else {
                // It is an opening bracket, push onto stack
                stack.push(ch);
            }
        }
        
        // If stack is empty, all brackets matched correctly
        return stack.empty();
    }
};

int main() {
    Solution solution;
    
    std::string input = "([{}])";
    if (solution.isValid(input)) {
        std::cout << "The string is valid!" << std::endl;
    } else {
        std::cout << "The string is not valid!" << std::endl;
    }
    
    return 0;
}
```

### Explanation of the Code:

1. We create a mapping `unordered_map` for matching closing brackets to their respective opening brackets.
2. We loop through each character in the input string `s`. For each character:
   - If it's a closing bracket (checked using `mapping.count(ch)`):
     - We check whether the stack is empty or if the top of the stack doesn't match the corresponding opening bracket. If either condition is true, we return `false`.
     - If valid, we pop the top of the stack.
   - If it's an opening bracket, we simply push it onto the stack.
3. Finally, we check if the stack is empty. If it is, all brackets were matched correctly, and we return `true`. If there's anything left in the stack, we return `false`.

The time complexity for this solution is \(O(n)\), where \(n\) is the length of the string, and the space complexity is also \(O(n)\) in the worst case when the input string is made entirely of opening brackets.