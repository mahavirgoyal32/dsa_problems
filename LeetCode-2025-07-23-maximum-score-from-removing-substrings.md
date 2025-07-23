# LeetCode Daily – 2025-07-23

## 🧠 Problem #1717 – **Maximum Score From Removing Substrings**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-score-from-removing-substrings)

---

### 📝 Problem Description

You are given a string s and two integers x and y. You can perform two types of operations any number of times.


	Remove substring &quot;ab&quot; and gain x points.

	
		For example, when removing &quot;ab&quot; from &quot;cabxbae&quot; it becomes &quot;cxbae&quot;.
	
	
	Remove substring &quot;ba&quot; and gain y points.
	
		For example, when removing &quot;ba&quot; from &quot;cabxbae&quot; it becomes &quot;cabxe&quot;.
	
	


Return the maximum points you can gain after applying the above operations on s.

 
Example 1:


Input: s = &quot;cdbcbbaaabab&quot;, x = 4, y = 5
Output: 19
Explanation:
- Remove the &quot;ba&quot; underlined in &quot;cdbcbbaaabab&quot;. Now, s = &quot;cdbcbbaaab&quot; and 5 points are added to the score.
- Remove the &quot;ab&quot; underlined in &quot;cdbcbbaaab&quot;. Now, s = &quot;cdbcbbaa&quot; and 4 points are added to the score.
- Remove the &quot;ba&quot; underlined in &quot;cdbcbbaa&quot;. Now, s = &quot;cdbcba&quot; and 5 points are added to the score.
- Remove the &quot;ba&quot; underlined in &quot;cdbcba&quot;. Now, s = &quot;cdbc&quot; and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.

Example 2:


Input: s = &quot;aabbaaxybbaabb&quot;, x = 5, y = 4
Output: 20


 
Constraints:


	1 <= s.length <= 105
	1 <= x, y <= 104
	s consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
