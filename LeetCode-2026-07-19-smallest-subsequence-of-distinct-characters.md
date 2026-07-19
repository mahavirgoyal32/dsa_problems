# LeetCode Daily – 2026-07-19

## 🧠 Problem #1081 – **Smallest Subsequence of Distinct Characters**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters)

---

### 📝 Problem Description

Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

 
Example 1:


Input: s = &quot;bcabc&quot;
Output: &quot;abc&quot;


Example 2:


Input: s = &quot;cbacdcbc&quot;
Output: &quot;acdb&quot;


 
Constraints:


	1 <= s.length <= 1000
	s consists of lowercase English letters.


 
Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Smallest Subsequence of Distinct Characters" asks us to construct the smallest subsequence from a given string that contains all distinct characters. The resulting subsequence should maintain the original order of characters from the input string.

To solve this problem, we can use a greedy approach with the help of a stack (to maintain the current subsequence) and an array to keep track of the last occurrence of each character.

### Explanation of the Approach

1. **Count Last Occurrences**: First, we need to record the last occurrence index of each character in the string. This will help us decide whether we can discard characters from our current subsequence since we might encounter them again.

2. **Use a Stack**: We'll use a stack to build our subsequence. A stack is suitable because it allows us to maintain the order of characters.

3. **Set for Uniqueness**: We can use a set to track which characters are currently in the stack. This helps us avoid adding duplicate characters to our final subsequence.

4. **Iterate through the String**:
   - For each character:
     - If it's already in the result (the stack), we can skip it.
     - While the stack is not empty and the top character of the stack is greater than the current character, and we still have that top character later in the input string, we can safely remove it from the stack (because we have another occurrence of that character).
     - Push the current character to the stack and mark it as present in the set.

5. **Result Construction**: Finally, convert the characters in the stack to a string as the result.

Here is the C++ implementation of this approach:

```cpp
#include <iostream>
#include <vector>
#include <stack>
#include <unordered_set>

std::string smallestSubsequence(std::string s) {
    // Array to track the last occurrence of each character.
    std::vector<int> lastIndex(26, -1);
    
    // Fill the last occurrence array.
    for (int i = 0; i < s.size(); ++i) {
        lastIndex[s[i] - 'a'] = i;
    }

    // Stack to maintain the smallest subsequence.
    std::stack<char> stack;
    // Set to track characters that are already in the stack.
    std::unordered_set<char> inStack;

    for (int i = 0; i < s.size(); ++i) {
        char currentChar = s[i];

        // If the character is already in the result (stack), skip it.
        if (inStack.count(currentChar) > 0) {
            continue;
        }

        // While the stack is not empty and the top character is greater
        // than the current character and exists later in the string, pop the stack.
        while (!stack.empty() && stack.top() > currentChar && lastIndex[stack.top() - 'a'] > i) {
            inStack.erase(stack.top());
            stack.pop();
        }

        // Push the current character onto the stack and mark it in the set.
        stack.push(currentChar);
        inStack.insert(currentChar);
    }

    // Construct the result from the stack.
    std::string result;
    while (!stack.empty()) {
        result += stack.top();
        stack.pop();
    }

    // Since we've constructed the result in reverse order, reverse it before returning.
    std::reverse(result.begin(), result.end());

    return result;
}

int main() {
    std::string input = "cbacdcbc";
    std::string output = smallestSubsequence(input);
    std::cout << "Smallest subsequence of distinct characters: " << output << std::endl;
    return 0;
}
```

### Explanation of the Code

- **Last Occurrence Array**: `lastIndex` is created to store the last position of each character in the string `s`.
  
- **Stack & Set**: The `stack` is used for the subsequence, and `inStack` (a set) tracks characters that we have already included in the stack.

- **Iterate and Build Stack**: We traverse each character in the string, making decisions whether to add or discard characters based on their alphabetical order and their occurrences.

- **Final Result Processing**: The characters in the stack would be in reverse order, so we reverse the string before returning it.

This implementation is efficient, with a time complexity of O(n) where n is the length of the input string, as we traverse the string a small constant number of times. It handles duplicates and ensures that our result is the smallest subsequence of distinct characters in the original order.