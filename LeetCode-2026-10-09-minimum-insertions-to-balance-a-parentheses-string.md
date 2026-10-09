# LeetCode Daily – 2026-10-09

## 🧠 Problem #1541 – **Minimum Insertions to Balance a Parentheses String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string)

---

### 📝 Problem Description

Given a parentheses string s containing only the characters &#39;(&#39; and &#39;)&#39;. A parentheses string is balanced if:


	Any left parenthesis &#39;(&#39; must have a corresponding two consecutive right parenthesis &#39;))&#39;.
	Left parenthesis &#39;(&#39; must go before the corresponding two consecutive right parenthesis &#39;))&#39;.


In other words, we treat &#39;(&#39; as an opening parenthesis and &#39;))&#39; as a closing parenthesis.


	For example, &quot;())&quot;, &quot;())(())))&quot; and &quot;(())())))&quot; are balanced, &quot;)()&quot;, &quot;()))&quot; and &quot;(()))&quot; are not balanced.


You can insert the characters &#39;(&#39; and &#39;)&#39; at any position of the string to balance it if needed.

Return the minimum number of insertions needed to make s balanced.

 
Example 1:


Input: s = &quot;(()))&quot;
Output: 1
Explanation: The second &#39;(&#39; has two matching &#39;))&#39;, but the first &#39;(&#39; has only &#39;)&#39; matching. We need to add one more &#39;)&#39; at the end of the string to be &quot;(())))&quot; which is balanced.


Example 2:


Input: s = &quot;())&quot;
Output: 0
Explanation: The string is already balanced.


Example 3:


Input: s = &quot;))())(&quot;
Output: 3
Explanation: Add &#39;(&#39; to match the first &#39;))&#39;, Add &#39;))&#39; to match the last &#39;(&#39;.


 
Constraints:


	1 <= s.length <= 105
	s consists of &#39;(&#39; and &#39;)&#39; only.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Insertions to Balance a Parentheses String" requires us to determine how many insertions of parentheses are needed to balance a given string of parentheses.

### Problem Explanation:
Given a string that consists of `'('`, `')'`, and other characters, our task is to ensure that every opening parenthesis `'('` has a corresponding closing parenthesis `')'`. Additionally, we need to ensure that the closing parentheses do not appear without a matching opening parenthesis.

### Approach:
To solve this problem, we can use a straightforward approach by keeping track of the number of unmatched opening parentheses and the necessary insertions for closing parentheses. 

1. **Counter for unmatched opening parentheses (`open_count`)**: This will track how many opening parentheses are not matched with closing parentheses.
2. **Counter for insertions needed (`insertions`)**: This will track how many closing parentheses are needed when we encounter a closing parentheses `')'` without a matching opening.

As we traverse the string:
- When encountering an opening parenthesis `'('`, we increment `open_count`.
- When encountering a closing parenthesis `')'`:
  - If there is an unmatched opening parenthesis (`open_count > 0`), we match it by decrementing `open_count`.
  - If there is no unmatched opening (i.e., `open_count == 0`), we need to insert an opening parenthesis before this closing one, so we increment `insertions` and assume an opening parenthesis has been added.

At the end of the string traversal, `insertions` will account for all necessary insertions, and any remaining unmatched opening parentheses in `open_count` will also require insertions of closing parentheses.

### C++ Code:
Here is the C++ implementation of the above logic:

```cpp
#include <string>
using namespace std;

class Solution {
public:
    int minInsertions(string s) {
        int open_count = 0; // Count of unmatched '('
        int insertions = 0; // Count of insertions needed

        for (char ch : s) {
            if (ch == '(') {
                open_count++; // Increase count for an unmatched opening
            } 
            else if (ch == ')') {
                if (open_count > 0) {
                    open_count--; // Match with an unmatched opening
                } else {
                    // No unmatched opening, need an insertion
                    insertions++; // we assume we "insert" an opening '('
                }
                
                // After consuming a closing ')', we check for nested conditions
                // Each closing ')' should also be followed by a matching closing.
                if (ch + 1 != ')') {
                    insertions++; // Need to insert another closing ')' if isolated
                }
            }
        }
        
        // Remaining unmatched '(' require ')'
        insertions += open_count * 2; // Each '(' needs a matching ')'
        
        return insertions;
    }
};
```

### Explanation of the Code:
1. We initialize `open_count` and `insertions` to zero.
2. We loop through each character in the string:
   - For `(`, we simply increment `open_count`.
   - For `)`, we check:
     - If we have unmatched `(`, we match one (`open_count--`).
     - If not, we increment `insertions` because we assume we need to insert an opening `(`.
     - We check afterward to see if we need to consider another `)`, adding to insertions if it's isolated.
3. At the end, we add any unmatched `(` that requires a closing `)` to the `insertions`.
4. Finally, we return the total number of insertions required.

This solution works in linear time `O(n)` where `n` is the length of the string, making it efficient for this problem.