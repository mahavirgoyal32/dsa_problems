# LeetCode Daily – 2026-10-05

## 🧠 Problem #856 – **Score of Parentheses**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/score-of-parentheses)

---

### 📝 Problem Description

Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:


	&quot;()&quot; has score 1.
	AB has score A + B, where A and B are balanced parentheses strings.
	(A) has score 2 * A, where A is a balanced parentheses string.


 
Example 1:


Input: s = &quot;()&quot;
Output: 1


Example 2:


Input: s = &quot;(())&quot;
Output: 2


Example 3:


Input: s = &quot;()()&quot;
Output: 2


 
Constraints:


	2 <= s.length <= 50
	s consists of only &#39;(&#39; and &#39;)&#39;.
	s is a balanced parentheses string.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Score of Parentheses" problem is a typical problem that involves understanding the structure of balanced parentheses. The problem can be summarized as follows:

Given a balanced parentheses string `S`, we want to compute the score of the string. The score is computed based on the following rules:
1. `()` has a score of 1.
2. If `P` is a balanced parentheses string, then `PP` (concatenation of two balanced strings) has a score of `Score(P) + Score(P)`.
3. If `P` is a balanced parentheses string, then `(P)` has a score of `2 * Score(P)`.

To solve this problem in C++, we can use a stack-based approach to track the depth of parentheses and calculate the score correctly. Here is how you can implement this solution:

### C++ Solution

```cpp
#include <iostream>
#include <stack>
#include <string>

using namespace std;

class Solution {
public:
    int scoreOfParentheses(string S) {
        stack<int> st;    // Stack to track the scores
        st.push(0);       // Start with a base score
        
        for (char ch : S) {
            if (ch == '(') {
                // When encountering '(', push current score to stack
                st.push(0);
            } else {
                // Encountering ')' means we need to calculate the score
                int v = st.top(); // top element is the score of the last context
                st.pop();         // Remove that score from stack
                // Now calculate the score for this complete valid parentheses
                int newScore = 2 * v;  // Rule (3) applies
                // We need to add the newScore to the next higher level of score
                // at the top of the stack
                st.top() += newScore;
            }
        }
        
        // The top of the stack will contain the total score for the input string
        return st.top();
    }
};

// Example usage
int main() {
    Solution sol;
    string S = "(()(()))";
    cout << "Score of " << S << " is " << sol.scoreOfParentheses(S) << endl; // Output: 6
    return 0;
}
```

### Explanation:

1. **Stack Initialization**: We start by initializing a stack to keep track of the scores. We push `0` onto the stack as the initial score since it represents a base level before any parentheses are processed.

2. **Iterating through the String**: We iterate through each character in the string `S`.
   - If the character is `'('`, we push `0` onto the stack because we will be entering a new scope where we can calculate a score after a matching `')'`.
   - If the character is `')'`, we pop the top element from the stack, which is the score for the recently completed parentheses expression. 

3. **Calculating the Score**: For a valid pair `()`, the score is defined to be `1`. When `P` forms a complete valid string and is surrounded by another `()`, we calculate its contribution as `2 * score(P)`. Thus, we calculate the new score and add it to the current score on the top of the stack.

4. **Final Score**: After processing all characters, the final score of the entire string will be on the top of the stack, which we return as the result.

### Complexity:
- Time Complexity: \(O(n)\), where \(n\) is the length of the string `S`.
- Space Complexity: \(O(n)\) in the worst case for the stack, where every character is '('.

This solution effectively utilizes the stack to keep track of scores at different levels of nested parentheses, ensuring accurate score calculation according to the problem’s rules.