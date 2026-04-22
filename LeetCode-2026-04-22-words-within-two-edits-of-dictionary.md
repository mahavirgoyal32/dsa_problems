# LeetCode Daily – 2026-04-22

## 🧠 Problem #2452 – **Words Within Two Edits of Dictionary**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/words-within-two-edits-of-dictionary)

---

### 📝 Problem Description

You are given two string arrays, queries and dictionary. All words in each array comprise of lowercase English letters and have the same length.

In one edit you can take a word from queries, and change any letter in it to any other letter. Find all words from queries that, after a maximum of two edits, equal some word from dictionary.

Return a list of all words from queries, that match with some word from dictionary after a maximum of two edits. Return the words in the same order they appear in queries.

 
Example 1:


Input: queries = [&quot;word&quot;,&quot;note&quot;,&quot;ants&quot;,&quot;wood&quot;], dictionary = [&quot;wood&quot;,&quot;joke&quot;,&quot;moat&quot;]
Output: [&quot;word&quot;,&quot;note&quot;,&quot;wood&quot;]
Explanation:
- Changing the &#39;r&#39; in &quot;word&quot; to &#39;o&#39; allows it to equal the dictionary word &quot;wood&quot;.
- Changing the &#39;n&#39; to &#39;j&#39; and the &#39;t&#39; to &#39;k&#39; in &quot;note&quot; changes it to &quot;joke&quot;.
- It would take more than 2 edits for &quot;ants&quot; to equal a dictionary word.
- &quot;wood&quot; can remain unchanged (0 edits) and match the corresponding dictionary word.
Thus, we return [&quot;word&quot;,&quot;note&quot;,&quot;wood&quot;].


Example 2:


Input: queries = [&quot;yes&quot;], dictionary = [&quot;not&quot;]
Output: []
Explanation:
Applying any two edits to &quot;yes&quot; cannot make it equal to &quot;not&quot;. Thus, we return an empty array.


 
Constraints:


	1 <= queries.length, dictionary.length <= 100
	n == queries[i].length == dictionary[j].length
	1 <= n <= 100
	All queries[i] and dictionary[j] are composed of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Words Within Two Edits of Dictionary", we want to identify words from a list that can be transformed into any of the given dictionary words with at most two edits. An edit can either be an insertion, deletion, or substitution of a character.

### Problem Breakdown

1. **Definitions**:
   - A **substitution** is when we replace one character in a word with another.
   - An **insertion** is when we add a character to a word.
   - A **deletion** is when we remove a character from a word.

2. **Edits Limit**:
   - We need to check if the distance between two words (in terms of edits needed) is less than or equal to 2.

3. **Edit Distance Calculation**:
   - We can utilize the concept of edit distance to determine how many edits are required to change one word into another.
   - We can use the dynamic programming approach to calculate the number of edits needed, but since we only need to check if this number is less than or equal to 2, we can implement a more efficient method.

### C++ Implementation

Here's a C++ solution that combines these concepts efficiently:

```cpp
#include <vector>
#include <string>
#include <unordered_set>

class Solution {
public:
    std::vector<std::string> twoEditWords(std::vector<std::string>& queries, std::vector<std::string>& dictionary) {
        std::vector<std::string> result;
        
        for (const std::string& query : queries) {
            for (const std::string& word : dictionary) {
                if (isWithinTwoEdits(query, word)) {
                    result.push_back(query);
                    break; // No need to check further, move to the next query
                }
            }
        }
        
        return result;
    }

private:
    bool isWithinTwoEdits(const std::string& query, const std::string& word) {
        int len1 = query.length();
        int len2 = word.length();
        if (std::abs(len1 - len2) > 2) return false; // Quick elimination based on length

        int editCount = 0;
        int i = 0, j = 0;

        while (i < len1 && j < len2) {
            if (query[i] != word[j]) {
                if (editCount == 2) return false; // More than 2 edits already
                editCount++;

                // Check if strings are of the same length or not
                if (len1 == len2) {
                    // If equal length, just move both pointers
                    i++;
                    j++;
                } else if (len1 > len2) {
                    // If query is longer, increment only query pointer
                    i++;
                } else {
                    // If word is longer, increment only word pointer
                    j++;
                }
            } else {
                i++;
                j++;
            }
        }

        // Any remaining characters in either string counts as an edit
        editCount += (len1 - i) + (len2 - j);
        return editCount <= 2;
    }
};
```

### Explanation

- **Function Overview**:
  - `twoEditWords`: This main function loops through all the queries and checks each one against all words in the dictionary. If a match (within two edits) is found, it adds the query to the result list and breaks the loop for the next query.
  
- **Edit Check**:
  - `isWithinTwoEdits`: This helper function calculates whether two strings are within two edits of each other.
    - First, we check if the length difference exceeds 2. If it does, they can't possibly be within two edits.
    - We then iterate through both strings using two pointers (`i` for `query` and `j` for `word`). When a mismatch is found:
      - Increment the `editCount`.
      - Depending on the relative lengths of the strings, we might skip a character in either string (for insertion or deletion).
    - After traversing the strings, any remaining characters left in either string contribute to the edit count.
  
- **Efficiency**:
  - This implementation is efficient; it avoids unnecessary calculations and immediately breaks out of loops when conditions are met. The time complexity is approximately O(m * n), where m is the number of queries and n is the number of dictionary words, with additional factors from the string comparisons.

This solution effectively determines which words can be achieved from the queries using at most two edits, providing a correct and efficient approach to the problem.