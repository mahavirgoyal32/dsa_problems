# LeetCode Daily – 2026-10-04

## 🧠 Problem #678 – **Valid Parenthesis String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-parenthesis-string)

---

### 📝 Problem Description

Given a string s containing only three types of characters: &#39;(&#39;, &#39;)&#39; and &#39;*&#39;, return true if s is valid.

The following rules define a valid string:


	Any left parenthesis &#39;(&#39; must have a corresponding right parenthesis &#39;)&#39;.
	Any right parenthesis &#39;)&#39; must have a corresponding left parenthesis &#39;(&#39;.
	Left parenthesis &#39;(&#39; must go before the corresponding right parenthesis &#39;)&#39;.
	&#39;*&#39; could be treated as a single right parenthesis &#39;)&#39; or a single left parenthesis &#39;(&#39; or an empty string &quot;&quot;.


 
Example 1:


Input: s = &quot;()&quot;
Output: true


Example 2:


Input: s = &quot;(*)&quot;
Output: true


Example 3:


Input: s = &quot;(*))&quot;
Output: true


Example 4:


Input: s = &quot;(&quot;
Output: false


 
Constraints:


	1 <= s.length <= 100
	s[i] is &#39;(&#39;, &#39;)&#39; or &#39;*&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Valid Parenthesis String" asks us to determine if a string of parentheses, which can include open parenthesis `(`, close parenthesis `)`, and the asterisk `*` (which can represent either an open parenthesis, a close parenthesis, or an empty string), is valid. A valid string means that every opening parenthesis has a corresponding closing parenthesis.

### Explanation

To solve this problem, we can use a counting approach that keeps track of the minimum and maximum number of open parentheses. Here's the step-by-step approach:

1. **Initialization**:
   - We will maintain two counters: `low` and `high`. The `low` counter represents the minimum number of open parentheses that could remain, and the `high` counter represents the maximum number of open parentheses that could remain.
   - Both counters start at 0.

2. **Iterate Through the String**:
   - For every character in the string, we will update our `low` and `high` counters based on the character:
     - If it's `(`, increment both `low` and `high` since we have one more open parenthesis.
     - If it's `)`, decrement both `low` and `high` since we are matching an open parenthesis with a close one.
     - If it's `*`, it can be treated as an open parenthesis, a close parenthesis, or nothing:
       - For treating it as an open parenthesis, increment `high`.
       - For treating it as nothing (ignore), keep `low` the same.
       - For treating it as a closing parenthesis (decrement), decrement `low`.

3. **Validating the Counts**:
   - If at any point `high` goes negative, it means there are more closing parentheses than opening ones, which makes it invalid.
   - After processing all characters, `low` should not be negative. It captures the minimum potential open parentheses.

4. **Final Check**:
   - At the end, if `low` is zero or greater, it implies that the string can be valid in some configuration.

### Implementation in C++

Here’s the C++ implementation of the above approach:

```cpp
#include <string>

bool checkValidString(const std::string& s) {
    int low = 0, high = 0;  // Initialize counters
    
    for (char c : s) {
        if (c == '(') {
            low++;   // An open parenthesis
            high++;  // An open parenthesis could also be a high possibility
        } else if (c == ')') {
            low--;   // A closing parenthesis reduces the count
            high--;  // Same here for high count
        } else {  // c == '*'
            low--;   // '*' could be treated as ')', reducing the minimum
            high++;  // '*' could be treated as '(', increasing the maximum
        }
        
        // If low goes negative, it means we have too many ')'
        if (high < 0) {
            return false;
        }
        
        // We want low to be non-negative
        low = std::max(low, 0);
    }
    
    // After processing, if low is 0, then the string is valid
    return low == 0;
}
```

### Summary

- This solution efficiently checks the balance of parentheses by using two counters (`low` and `high`).
- The approach ensures that we handle the ambiguous nature of asterisks `*`, and can determine if the string can be valid based on the final counts.
- The time complexity is O(n), where n is the length of the string, as we only need to iterate through the string once. The space complexity is O(1).