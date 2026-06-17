# LeetCode Daily – 2026-06-17

## 🧠 Problem #3614 – **Process String with Special Operations II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/process-string-with-special-operations-ii)

---

### 📝 Problem Description

You are given a string s consisting of lowercase English letters and the special characters: &#39;*&#39;, &#39;#&#39;, and &#39;%&#39;.

You are also given an integer k.

Build a new string result by processing s according to the following rules from left to right:


	If the letter is a lowercase English letter append it to result.
	A &#39;*&#39; removes the last character from result, if it exists.
	A &#39;#&#39; duplicates the current result and appends it to itself.
	A &#39;%&#39; reverses the current result.


Return the kth character of the final string result. If k is out of the bounds of result, return &#39;.&#39;.

 
Example 1:


Input: s = &quot;a#b%*&quot;, k = 1

Output: &quot;a&quot;

Explanation:


	
		
			i
			s[i]
			Operation
			Current result
		
	
	
		
			0
			&#39;a&#39;
			Append &#39;a&#39;
			&quot;a&quot;
		
		
			1
			&#39;#&#39;
			Duplicate result
			&quot;aa&quot;
		
		
			2
			&#39;b&#39;
			Append &#39;b&#39;
			&quot;aab&quot;
		
		
			3
			&#39;%&#39;
			Reverse result
			&quot;baa&quot;
		
		
			4
			&#39;*&#39;
			Remove the last character
			&quot;ba&quot;
		
	


The final result is &quot;ba&quot;. The character at index k = 1 is &#39;a&#39;.


Example 2:


Input: s = &quot;cd%#*#&quot;, k = 3

Output: &quot;d&quot;

Explanation:


	
		
			i
			s[i]
			Operation
			Current result
		
	
	
		
			0
			&#39;c&#39;
			Append &#39;c&#39;
			&quot;c&quot;
		
		
			1
			&#39;d&#39;
			Append &#39;d&#39;
			&quot;cd&quot;
		
		
			2
			&#39;%&#39;
			Reverse result
			&quot;dc&quot;
		
		
			3
			&#39;#&#39;
			Duplicate result
			&quot;dcdc&quot;
		
		
			4
			&#39;*&#39;
			Remove the last character
			&quot;dcd&quot;
		
		
			5
			&#39;#&#39;
			Duplicate result
			&quot;dcddcd&quot;
		
	


The final result is &quot;dcddcd&quot;. The character at index k = 3 is &#39;d&#39;.


Example 3:


Input: s = &quot;z*#&quot;, k = 0

Output: &quot;.&quot;

Explanation:


	
		
			i
			s[i]
			Operation
			Current result
		
	
	
		
			0
			&#39;z&#39;
			Append &#39;z&#39;
			&quot;z&quot;
		
		
			1
			&#39;*&#39;
			Remove the last character
			&quot;&quot;
		
		
			2
			&#39;#&#39;
			Duplicate the string
			&quot;&quot;
		
	


The final result is &quot;&quot;. Since index k = 0 is out of bounds, the output is &#39;.&#39;.


 
Constraints:


	1 <= s.length <= 105
	s consists of only lowercase English letters and special characters &#39;*&#39;, &#39;#&#39;, and &#39;%&#39;.
	0 <= k <= 1015
	The length of result after processing s will not exceed 1015.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Process String with Special Operations II", we need to handle two specific operations on a string `s`:

1. Backspace character `#` should remove the last valid character from the resulting string.
2. Each `@` character signifies a special operation on the last word of the resulting string. Specifically, it will remove the last `k` letters of that word, where `k` is the number of subsequent `@` characters following a letter.

Here's a step-by-step breakdown of how we can approach the solution in C++:

### Steps to Solve the Problem

1. **Initialize a Stack**: Use a stack to build the processed characters of the string. The stack will allow us to easily manage the backspaces and other operations.

2. **Iterate Over the String**: For each character in the string:
    - If it is a normal character (not `#` or `@`), push it onto the stack.
    - If it is `#`, pop the last character from the stack (if the stack is not empty).
    - If it is `@`, we need to handle special logic for this character along with adjacent `@`. Count how many consecutive `@` characters occur and properly remove letters from the last added word.

3. **Handle Word Removal**: When parsing an `@`, we need to check:
    - If the last word is empty, do nothing.
    - If there are characters in the stack, determine how many letters to remove based on the count of consecutive `@` characters.

4. **Construct Result from Stack**: Finally, build the processed string from the characters remaining in the stack.

Here's the C++ implementation of the above logic:

```cpp
#include <iostream>
#include <string>
#include <stack>

using namespace std;

string processString(string s) {
    stack<char> st;  // Stack to hold processed characters
    int n = s.size();
    
    for (int i = 0; i < n; ++i) {
        char c = s[i];

        if (c == '#') {
            // Backspace operation: pop from stack if there's something to pop
            if (!st.empty()) {
                st.pop();
            }
        } else if (c == '@') {
            // Special operation
            int count = 1;
            // Count consecutive '@'
            while (i + 1 < n && s[i + 1] == '@') {
                count++;
                i++;
            }
            // Handle removal of last word characters
            // Create a temporary stack to get the last word
            string lastWord;
            while (!st.empty() && st.top() != ' ') {
                lastWord += st.top();
                st.pop();
            }
            // Remove the last 'count' characters from lastWord
            if (lastWord.length() > 0) {
                int toRemove = min(count, (int)lastWord.size());
                lastWord.erase(lastWord.size() - toRemove, toRemove);
                // Push remaining characters back onto the stack
                for (int j = lastWord.size() - 1; j >= 0; --j) {
                    st.push(lastWord[j]);
                }
            }
            // Restore space if it was popped earlier
            if (!st.empty() && st.top() == ' ') {
                st.push(' '); // Push back the space character (if it was there)
            }

        } else {
            // Push normal characters onto the stack
            st.push(c);
        }
    }

    // Build result from the stack
    string result;
    while (!st.empty()) {
        result += st.top();
        st.pop();
    }

    // Since we built the string in reverse, reverse it back
    reverse(result.begin(), result.end());
    return result;
}

// Example Usage
int main() {
    string s = "a@bc#d@e";
    cout << processString(s) << endl;  // Output the processed string
    return 0;
}
```

### Explanation of Key Components:
- **Stack Usage**: The stack helps keep track of valid characters after processing backspaces and handling special operations. This simplifies the management of the string.
- **Processing Special Operations**: The logic to count `@` and manage the removal of characters is crucial for handling the special word removal requirement.
- **Constructing the Final String**: After all characters have been processed and stored in the stack, we empty the stack to get the final processed string in the correct order.

This should effectively address the problem's requirements and can be further optimized or modified based on specific needs.