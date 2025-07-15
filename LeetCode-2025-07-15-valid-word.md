# LeetCode Daily – 2025-07-15

## 🧠 Problem #3136 – **Valid Word**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-word)

---

### 📝 Problem Description

A word is considered valid if:


	It contains a minimum of 3 characters.
	It contains only digits (0-9), and English letters (uppercase and lowercase).
	It includes at least one vowel.
	It includes at least one consonant.


You are given a string word.

Return true if word is valid, otherwise, return false.

Notes:


	&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;, and their uppercases are vowels.
	A consonant is an English letter that is not a vowel.


 
Example 1:


Input: word = &quot;234Adas&quot;

Output: true

Explanation:

This word satisfies the conditions.


Example 2:


Input: word = &quot;b3&quot;

Output: false

Explanation:

The length of this word is fewer than 3, and does not have a vowel.


Example 3:


Input: word = &quot;a3$e&quot;

Output: false

Explanation:

This word contains a &#39;{{DESCRIPTION}}#39; character and does not have a consonant.


 
Constraints:


	1 <= word.length <= 20
	word consists of English uppercase and lowercase letters, digits, &#39;@&#39;, &#39;#&#39;, and &#39;{{DESCRIPTION}}#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
