# LeetCode Daily – 2025-09-13

## 🧠 Problem #3541 – **Find Most Frequent Vowel and Consonant**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-most-frequent-vowel-and-consonant)

---

### 📝 Problem Description

You are given a string s consisting of lowercase English letters (&#39;a&#39; to &#39;z&#39;). 

Your task is to:


	Find the vowel (one of &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, or &#39;u&#39;) with the maximum frequency.
	Find the consonant (all other letters excluding vowels) with the maximum frequency.


Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.
The frequency of a letter x is the number of times it occurs in the string.
 
Example 1:


Input: s = &quot;successes&quot;

Output: 6

Explanation:


	The vowels are: &#39;u&#39; (frequency 1), &#39;e&#39; (frequency 2). The maximum frequency is 2.
	The consonants are: &#39;s&#39; (frequency 4), &#39;c&#39; (frequency 2). The maximum frequency is 4.
	The output is 2 + 4 = 6.



Example 2:


Input: s = &quot;aeiaeia&quot;

Output: 3

Explanation:


	The vowels are: &#39;a&#39; (frequency 3), &#39;e&#39; ( frequency 2), &#39;i&#39; (frequency 2). The maximum frequency is 3.
	There are no consonants in s. Hence, maximum consonant frequency = 0.
	The output is 3 + 0 = 3.



 
Constraints:


	1 <= s.length <= 100
	s consists of lowercase English letters only.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
