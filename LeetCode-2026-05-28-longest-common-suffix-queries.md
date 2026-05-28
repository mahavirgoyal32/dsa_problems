# LeetCode Daily – 2026-05-28

## 🧠 Problem #3093 – **Longest Common Suffix Queries**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-common-suffix-queries)

---

### 📝 Problem Description

You are given two arrays of strings wordsContainer and wordsQuery.

For each wordsQuery[i], you need to find a string from wordsContainer that has the longest common suffix with wordsQuery[i]. If there are two or more strings in wordsContainer that share the longest common suffix, find the string that is the smallest in length. If there are two or more such strings that have the same smallest length, find the one that occurred earlier in wordsContainer.

Return an array of integers ans, where ans[i] is the index of the string in wordsContainer that has the longest common suffix with wordsQuery[i].

 
Example 1:


Input: wordsContainer = [&quot;abcd&quot;,&quot;bcd&quot;,&quot;xbcd&quot;], wordsQuery = [&quot;cd&quot;,&quot;bcd&quot;,&quot;xyz&quot;]

Output: [1,1,1]

Explanation:

Let&#39;s look at each wordsQuery[i] separately:


	For wordsQuery[0] = &quot;cd&quot;, strings from wordsContainer that share the longest common suffix &quot;cd&quot; are at indices 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.
	For wordsQuery[1] = &quot;bcd&quot;, strings from wordsContainer that share the longest common suffix &quot;bcd&quot; are at indices 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.
	For wordsQuery[2] = &quot;xyz&quot;, there is no string from wordsContainer that shares a common suffix. Hence the longest common suffix is &quot;&quot;, that is shared with strings at index 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.



Example 2:


Input: wordsContainer = [&quot;abcdefgh&quot;,&quot;poiuygh&quot;,&quot;ghghgh&quot;], wordsQuery = [&quot;gh&quot;,&quot;acbfgh&quot;,&quot;acbfegh&quot;]

Output: [2,0,2]

Explanation:

Let&#39;s look at each wordsQuery[i] separately:


	For wordsQuery[0] = &quot;gh&quot;, strings from wordsContainer that share the longest common suffix &quot;gh&quot; are at indices 0, 1, and 2. Among these, the answer is the string at index 2 because it has the shortest length of 6.
	For wordsQuery[1] = &quot;acbfgh&quot;, only the string at index 0 shares the longest common suffix &quot;fgh&quot;. Hence it is the answer, even though the string at index 2 is shorter.
	For wordsQuery[2] = &quot;acbfegh&quot;, strings from wordsContainer that share the longest common suffix &quot;gh&quot; are at indices 0, 1, and 2. Among these, the answer is the string at index 2 because it has the shortest length of 6.



 
Constraints:


	1 <= wordsContainer.length, wordsQuery.length <= 104
	1 <= wordsContainer[i].length <= 5 * 103
	1 <= wordsQuery[i].length <= 5 * 103
	wordsContainer[i] consists only of lowercase English letters.
	wordsQuery[i] consists only of lowercase English letters.
	Sum of wordsContainer[i].length is at most 5 * 105.
	Sum of wordsQuery[i].length is at most 5 * 105.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Longest Common Suffix Queries" on LeetCode involves determining the longest common suffix for a given set of words and then processing multiple queries efficiently.

Here's a breakdown of the approach we'll take to solve this problem, along with the C++ implementation.

### Problem Overview
Given an array of words and several queries, where each query consists of two indices, the goal is to return the longest common suffix of the words at those indices. 

### Approach
To efficiently answer the suffix queries, we can use the following steps:

1. **Reverse the Words**: By reversing each word in the array, we can convert the problem of finding a common suffix to finding a common prefix.
  
2. **Build a Trie**: We can build a Trie (prefix tree) from the reversed words. A Trie allows us to group words that share common prefixes efficiently.

3. **Query the Trie**: For each query, we will navigate down the Trie from the shared prefix to find the longest common suffix between the specified words.

### Implementation
Here is the C++ implementation of the solution:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

// Trie node structure
struct TrieNode {
    unordered_map<char, TrieNode*> children;
    int count = 0; // Count of how many words pass through this node
};

// Trie structure
class Trie {
public:
    Trie() {
        root = new TrieNode();
    }

    void insert(const string &word) {
        TrieNode *node = root;
        for (char ch : word) {
            if (!node->children[ch]) {
                node->children[ch] = new TrieNode();
            }
            node = node->children[ch];
            node->count++;
        }
    }

    int longestCommonPrefixLength(const string &word1, const string &word2) {
        TrieNode *node = root;
        int length = 0;
        for (size_t i = 0; i < min(word1.length(), word2.length()); ++i) {
            char ch = word1[i];
            if (node->children.count(ch)) {
                node = node->children[ch];
                length++;
            } else {
                break;
            }
        }
        return length;
    }

private:
    TrieNode *root;
};

class Solution {
public:
    vector<int> longestCommonSuffixQueries(vector<string>& words, vector<vector<int>>& queries) {
        // Step 1: Reverse the words
        vector<string> reversed_words;
        for (string &word : words) {
            reverse(word.begin(), word.end());
            reversed_words.push_back(word);
        }

        // Step 2: Build the Trie from reversed words
        Trie trie;
        for (const string &word : reversed_words) {
            trie.insert(word);
        }

        // Step 3: Answer each query
        vector<int> result;
        for (const auto &query : queries) {
            int index1 = query[0], index2 = query[1];
            int prefix_length = trie.longestCommonPrefixLength(reversed_words[index1], reversed_words[index2]);
            result.push_back(prefix_length);
        }

        return result;
    }
};
```

### Explanation of the Implementation
- **TrieNode Structure**: Each TrieNode has a map of children that points to the next character's TrieNode as well as a counter to keep track of how many words pass through this node.
- **Trie Class**: Contains methods to insert words (`insert()`) and find the length of the longest common prefix between two words (`longestCommonPrefixLength()`).
- **Solution Class**: 
  - In `longestCommonSuffixQueries()`, we first reverse each word to make suffix queries easier.
  - We then build a Trie using the reversed words.
  - Finally, we process each query by comparing the two words at the specified indices using their reversed form and invoking the method to get the longest common prefix length (which corresponds to the longest common suffix in the original words).

This method efficiently handles the problem and allows for quick responses to multiple queries by leveraging the Trie data structure.