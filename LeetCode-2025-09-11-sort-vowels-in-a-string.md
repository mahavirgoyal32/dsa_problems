# LeetCode Daily – 2025-09-11

## 🧠 Problem #2785 – **Sort Vowels in a String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sort-vowels-in-a-string)

---

### 📝 Problem Description

Given a 0-indexed string s, permute s to get a new string t such that:


	All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
	The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].


Return the resulting string.

The vowels are &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;, and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.

 
Example 1:


Input: s = &quot;lEetcOde&quot;
Output: &quot;lEOtcede&quot;
Explanation: &#39;E&#39;, &#39;O&#39;, and &#39;e&#39; are the vowels in s; &#39;l&#39;, &#39;t&#39;, &#39;c&#39;, and &#39;d&#39; are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.


Example 2:


Input: s = &quot;lYmpH&quot;
Output: &quot;lYmpH&quot;
Explanation: There are no vowels in s (all characters in s are consonants), so we return &quot;lYmpH&quot;.


 
Constraints:


	1 <= s.length <= 105
	s consists only of letters of the English alphabet in uppercase and lowercase.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
