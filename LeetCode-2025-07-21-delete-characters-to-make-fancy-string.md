# LeetCode Daily – 2025-07-21

## 🧠 Problem #1957 – **Delete Characters to Make Fancy String**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-characters-to-make-fancy-string)

---

### 📝 Problem Description

A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.

 
Example 1:


Input: s = &quot;leeetcode&quot;
Output: &quot;leetcode&quot;
Explanation:
Remove an &#39;e&#39; from the first group of &#39;e&#39;s to create &quot;leetcode&quot;.
No three consecutive characters are equal, so return &quot;leetcode&quot;.


Example 2:


Input: s = &quot;aaabaaaa&quot;
Output: &quot;aabaa&quot;
Explanation:
Remove an &#39;a&#39; from the first group of &#39;a&#39;s to create &quot;aabaaaa&quot;.
Remove two &#39;a&#39;s from the second group of &#39;a&#39;s to create &quot;aabaa&quot;.
No three consecutive characters are equal, so return &quot;aabaa&quot;.


Example 3:


Input: s = &quot;aab&quot;
Output: &quot;aab&quot;
Explanation: No three consecutive characters are equal, so return &quot;aab&quot;.


 
Constraints:


	1 <= s.length <= 105
	s consists only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
