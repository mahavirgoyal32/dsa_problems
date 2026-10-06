# LeetCode Daily – 2026-10-06

## 🧠 Problem #921 – **Minimum Add to Make Parentheses Valid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid)

---

### 📝 Problem Description

A parentheses string is valid if and only if:


	It is the empty string,
	It can be written as AB (A concatenated with B), where A and B are valid strings, or
	It can be written as (A), where A is a valid string.


You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.


	For example, if s = &quot;()))&quot;, you can insert an opening parenthesis to be &quot;(()))&quot; or a closing parenthesis to be &quot;())))&quot;.


Return the minimum number of moves required to make s valid.

 
Example 1:


Input: s = &quot;())&quot;
Output: 1


Example 2:


Input: s = &quot;(((&quot;
Output: 3


 
Constraints:


	1 <= s.length <= 1000
	s[i] is either &#39;(&#39; or &#39;)&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Minimum Add to Make Parentheses Valid", the goal is to determine the minimum number of parentheses (either '(' or ')') that must be added to a given string to make it a valid parentheses string. A valid parentheses string is one where each opening parenthesis '(' has a matching closing parenthesis ')'.

### Problem Understanding

1. **Valid Parentheses Conditions**:
   - Every opening parenthesis must have a corresponding closing parenthesis.
   - At no point in the string (from left to right) should the number of closing parentheses ')' exceed the number of opening parentheses '('.

### Strategy to Solve the Problem

1. **Counters**:
   - Use a counter to keep track of the number of unmatched opening parentheses `left_needed`.
   - Use a counter to track the number of unmatched closing parentheses `right_needed`.

2. **Iteration**:
   - Traverse the string character by character:
     - If you encounter an '(', increment the counter for unmatched opening parentheses.
     - If you encounter a ')':
       - If there's an unmatched opening parenthesis (i.e., `left_needed > 0`), it means this closing parenthesis has a match; decrement the opening counter.
       - If there's no unmatched opening parenthesis (i.e., `left_needed == 0`), it means this closing parenthesis is unmatched, so increment the unmatched closing parenthesis counter.

3. **Calculate Result**:
   - The result will be the sum of unmatched opening and unmatched closing parentheses since each of these must be added to balance the parentheses.

### C++ Implementation

Here’s how you could implement this logic in C++:

```cpp
#include <string>

class Solution {
public:
    int minAddToMakeValid(std::string s) {
        int left_needed = 0; // Count of unmatched '('
        int right_needed = 0; // Count of unmatched ')'
        
        for (char ch : s) {
            if (ch == '(') {
                left_needed++; // Found an unmatched '('
            } else if (ch == ')') {
                if (left_needed > 0) {
                    left_needed--; // Match this ')' with an unmatched '('
                } else {
                    right_needed++; // This ')' has no match, count it as unmatched
                }
            }
        }
        
        // Total additions needed is the sum of unmatched '(' and unmatched ')'
        return left_needed + right_needed;
    }
};
```

### Explanation of the Code

- **Variables**:
  - `left_needed`: Counts how many '(' we have that are currently unmatched.
  - `right_needed`: Counts how many ')' do not have a matching '('.

- **Looping Through the String**:
  - For each character:
    - If it’s an '(': Increment the `left_needed`.
    - If it’s a ')':
      - If there's an unmatched '(': decrement `left_needed` (it gets matched).
      - If there’s no unmatched '(': increment `right_needed` (this ')' is unmatched).

- **Final Calculation**:
  - The total number of parentheses additions required is `left_needed + right_needed`, giving the minimum number of parentheses we need to add.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the length of the string, as we are making a single pass through the string.
- **Space Complexity**: O(1), as we are only using a few integer variables, regardless of the string size. 

This solution efficiently determines the minimum additions required to make the parentheses valid with clear and concise logic.