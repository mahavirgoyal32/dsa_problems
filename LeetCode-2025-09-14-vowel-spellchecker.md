# LeetCode Daily – 2025-09-14

## 🧠 Problem #966 – **Vowel Spellchecker**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/vowel-spellchecker)

---

### 📝 Problem Description

Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spell checker handles two categories of spelling mistakes:


	Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.

	
		Example: wordlist = [&quot;yellow&quot;], query = &quot;YellOw&quot;: correct = &quot;yellow&quot;
		Example: wordlist = [&quot;Yellow&quot;], query = &quot;yellow&quot;: correct = &quot;Yellow&quot;
		Example: wordlist = [&quot;yellow&quot;], query = &quot;yellow&quot;: correct = &quot;yellow&quot;
	
	
	Vowel Errors: If after replacing the vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;) of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
	
		Example: wordlist = [&quot;YellOw&quot;], query = &quot;yollow&quot;: correct = &quot;YellOw&quot;
		Example: wordlist = [&quot;YellOw&quot;], query = &quot;yeellow&quot;: correct = &quot;&quot; (no match)
		Example: wordlist = [&quot;YellOw&quot;], query = &quot;yllw&quot;: correct = &quot;&quot; (no match)
	
	


In addition, the spell checker operates under the following precedence rules:


	When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
	When the query matches a word up to capitlization, you should return the first such match in the wordlist.
	When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
	If the query has no matches in the wordlist, you should return the empty string.


Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

 
Example 1:
Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
Example 2:
Input: wordlist = ["yellow"], queries = ["YellOw"]
Output: ["yellow"]

 
Constraints:


	1 <= wordlist.length, queries.length <= 5000
	1 <= wordlist[i].length, queries[i].length <= 7
	wordlist[i] and queries[i] consist only of only English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
