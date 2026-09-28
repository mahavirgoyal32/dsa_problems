# LeetCode Daily – 2026-09-28

## 🧠 Problem #1614 – **Maximum Nesting Depth of the Parentheses**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses)

---

### 📝 Problem Description

Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

 
Example 1:


Input: s = &quot;(1+(2*3)+((8)/4))+1&quot;

Output: 3

Explanation:

Digit 8 is inside of 3 nested parentheses in the string.


Example 2:


Input: s = &quot;(1)+((2))+(((3)))&quot;

Output: 3

Explanation:

Digit 3 is inside of 3 nested parentheses in the string.


Example 3:


Input: s = &quot;()(())((()()))&quot;

Output: 3


 
Constraints:


	1 <= s.length <= 100
	s consists of digits 0-9 and characters &#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;, &#39;(&#39;, and &#39;)&#39;.
	It is guaranteed that parentheses expression s is a VPS.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the maximum nesting depth of parentheses, we will iterate through the given string and keep track of the current depth of nested parentheses. Each time we encounter an opening parenthesis `(`, we will increase the current depth, and each time we encounter a closing parenthesis `)`, we will decrease it. We will also maintain a variable to keep track of the maximum depth encountered during the traversal.

### Explanation

1. **Initialization**: We'll initialize two variables:
   - `currentDepth` to track the current level of nesting.
   - `maxDepth` to record the maximum depth we've encountered.

2. **Iteration**: We'll loop through each character of the string:
   - If the character is an opening parenthesis `(`, we'll increment `currentDepth`.
   - If the character is a closing parenthesis `)`, we'll decrement `currentDepth`.
   - After each increment, we will compare `currentDepth` with `maxDepth` and update `maxDepth` if `currentDepth` is greater.

3. **Return Result**: At the end of the iteration, we will return the `maxDepth` which will represent the maximum nesting depth of the parentheses.

### C++ Code

Here’s how you could implement this in C++:

```cpp
#include <iostream>
#include <string>

class Solution {
public:
    int maxDepth(std::string s) {
        int currentDepth = 0;
        int maxDepth = 0;

        for (char ch : s) {
            if (ch == '(') {
                currentDepth++;
                maxDepth = std::max(maxDepth, currentDepth);  // Update maxDepth if currentDepth is greater
            } else if (ch == ')') {
                currentDepth--;  // Decrease depth for a closing parenthesis
            }
        }

        return maxDepth; // Return the maximum depth found
    }
};

// Example usage
int main() {
    Solution solution;
    
    std::string example = "(1+(2*3)+((8)/4))+1";
    int result = solution.maxDepth(example);
    
    std::cout << "Maximum Nesting Depth: " << result << std::endl;  // Output: 3
    
    return 0;
}
```

### Explanation of the Code

- We define a class `Solution` with a public method `maxDepth` that takes a string `s`.
- Inside the method, we initialize `currentDepth` and `maxDepth` to `0`.
- We use a range-based for loop to traverse each character in the string:
  - **For `(`**: Increment `currentDepth` and update `maxDepth` if the current depth exceeds the recorded maximum.
  - **For `)`**: Decrement `currentDepth`.
- Finally, the function returns the value of `maxDepth`.

### Complexity
- **Time Complexity**: O(n), where n is the length of the string, because we only pass through the string once.
- **Space Complexity**: O(1), since we use a fixed amount of extra space regardless of the input size. 

This solution efficiently determines the maximum nesting depth of parentheses in a given string and works correctly for all valid cases as per the problem statement.