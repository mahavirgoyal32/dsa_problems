# LeetCode Daily – 2026-08-13

## 🧠 Problem #2213 – **Longest Substring of One Repeating Character**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-substring-of-one-repeating-character)

---

### 📝 Problem Description

You are given a 0-indexed string s. You are also given a 0-indexed string queryCharacters of length k and a 0-indexed array of integer indices queryIndices of length k, both of which are used to describe k queries.

The ith query updates the character in s at index queryIndices[i] to the character queryCharacters[i].

Return an array lengths of length k where lengths[i] is the length of the longest substring of s consisting of only one repeating character after the ith query is performed.

 
Example 1:


Input: s = &quot;babacc&quot;, queryCharacters = &quot;bcb&quot;, queryIndices = [1,3,3]
Output: [3,3,4]
Explanation: 
- 1st query updates s = &quot;bbbacc&quot;. The longest substring consisting of one repeating character is &quot;bbb&quot; with length 3.
- 2nd query updates s = &quot;bbbccc&quot;. 
  The longest substring consisting of one repeating character can be &quot;bbb&quot; or &quot;ccc&quot; with length 3.
- 3rd query updates s = &quot;bbbbcc&quot;. The longest substring consisting of one repeating character is &quot;bbbb&quot; with length 4.
Thus, we return [3,3,4].


Example 2:


Input: s = &quot;abyzz&quot;, queryCharacters = &quot;aa&quot;, queryIndices = [2,1]
Output: [2,3]
Explanation:
- 1st query updates s = &quot;abazz&quot;. The longest substring consisting of one repeating character is &quot;zz&quot; with length 2.
- 2nd query updates s = &quot;aaazz&quot;. The longest substring consisting of one repeating character is &quot;aaa&quot; with length 3.
Thus, we return [2,3].


 
Constraints:


	1 <= s.length <= 105
	s consists of lowercase English letters.
	k == queryCharacters.length == queryIndices.length
	1 <= k <= 105
	queryCharacters consists of lowercase English letters.
	0 <= queryIndices[i] < s.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the longest substring with one repeating character, we need to determine the longest segment of the given string where all characters are the same. 

Here's how we can approach this problem step-by-step in C++:

### Problem Explanation
The problem requires us to find the length of the longest substring consisting of only one unique character that repeats consecutively. For example, in the string "aaabbbaaaccc", the longest substring of one repeating character is "aaa", and its length is 3.

### Approach
1. **Initialization**: Start with two variables: one to keep track of the maximum length of the repeating character substring found (`maxLength`) and another to count the length of the current substring of the same character (`currentLength`).

2. **Iterate through the String**: Iterate through the string from the second character to the end.
   - If the current character is the same as the previous character, increment the `currentLength`.
   - If it is different, check if `currentLength` is greater than `maxLength`. If it is, update `maxLength`. Then reset `currentLength` to 1 (since we are starting a new count for the new character).

3. **Final Comparison**: After the loop, we need to check one last time if the last counted sequence is the longest, since it might be the longest substring repeating till the end of the string.

4. **Return the Result**: Finally, return the value of `maxLength`.

### C++ Code Implementation
Here's how the implementation looks in C++:

```cpp
class Solution {
public:
    int maxPower(string s) {
        if (s.empty()) return 0;  // Edge case for empty string

        int maxLength = 1;     // Maximum length of substring found
        int currentLength = 1;  // Current length of substring
        
        for (int i = 1; i < s.size(); ++i) {
            if (s[i] == s[i - 1]) {
                // If the current character is the same as the last one, increment the count
                currentLength++;
            } else {
                // If it's different, check if we've found a longer substring
                maxLength = max(maxLength, currentLength);
                currentLength = 1;  // Reset for the new character
            }
        }
        
        // Final check in case the longest substring was at the end of the string
        maxLength = max(maxLength, currentLength);
        
        return maxLength;
    }
};
```

### Explanation of the Code:
- We use a loop to traverse the string starting from the second character.
- We compare each character to the one before it to determine whether to increase the count of the current sequence (`currentLength`) or to reset it.
- At the end of the loop, we ensure that the longest found sequence is updated one last time. 
- The final result is returned as the maximum of all found lengths.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the length of the string. We traverse the string once.
- **Space Complexity**: O(1), as we are using a constant amount of extra space.

This solution is efficient and should work well even for large strings.