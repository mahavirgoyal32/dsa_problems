# LeetCode Daily – 2025-10-13

## 🧠 Problem #2273 – **Find Resultant Array After Removing Anagrams**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams)

---

### 📝 Problem Description

You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, &quot;dacb&quot; is an anagram of &quot;abdc&quot;.

 
Example 1:


Input: words = [&quot;abba&quot;,&quot;baba&quot;,&quot;bbaa&quot;,&quot;cd&quot;,&quot;cd&quot;]
Output: [&quot;abba&quot;,&quot;cd&quot;]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = &quot;bbaa&quot; and words[1] = &quot;baba&quot; are anagrams, we choose index 2 and delete words[2].
  Now words = [&quot;abba&quot;,&quot;baba&quot;,&quot;cd&quot;,&quot;cd&quot;].
- Since words[1] = &quot;baba&quot; and words[0] = &quot;abba&quot; are anagrams, we choose index 1 and delete words[1].
  Now words = [&quot;abba&quot;,&quot;cd&quot;,&quot;cd&quot;].
- Since words[2] = &quot;cd&quot; and words[1] = &quot;cd&quot; are anagrams, we choose index 2 and delete words[2].
  Now words = [&quot;abba&quot;,&quot;cd&quot;].
We can no longer perform any operations, so [&quot;abba&quot;,&quot;cd&quot;] is the final answer.

Example 2:


Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]
Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.

 
Constraints:


	1 <= words.length <= 100
	1 <= words[i].length <= 10
	words[i] consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Find Resultant Array After Removing Anagrams" requires you to process an array of strings and return a new array where all anagrams have been removed, leaving only one instance of each anagram group.

### Problem Explanation

Anagrams are words that contain the same characters in a different order. For example, "eat", "tea", and "ate" are all anagrams of each other.

Given an array of strings, you need to create a resultant array that contains all the strings from the original array but without any duplicates that are anagrams of each other. 

The steps to solve the problem are:
1. For each string in the input array, you will generate a "signature" which will help you recognize anagrams. A good signature is the sorted version of the string.
2. Use a set to keep track of unique signatures and build the resultant array based on these signatures.

### C++ Implementation

Here’s how we can implement the above logic in C++:

```cpp
#include <vector>
#include <string>
#include <unordered_set>
#include <algorithm>

std::vector<std::string> removeAnagrams(const std::vector<std::string>& words) {
    std::unordered_set<std::string> unique_signatures; // Using a set to keep unique sorted strings
    std::vector<std::string> result; // This will hold our resultant strings

    for (const auto& word : words) {
        // Create a signature by sorting the characters of the word
        std::string signature = word; // Make a copy
        std::sort(signature.begin(), signature.end()); // Sort to find anagram signatures

        // If this signature is not already in unique_signatures, add it
        if (unique_signatures.find(signature) == unique_signatures.end()) {
            unique_signatures.insert(signature); // Mark this sorted string as seen
            result.push_back(word); // Add the original word to the result
        }
    }

    return result; // Return the resultant array
}
```

### Explanation of the Code

1. **Libraries Included**: 
   - `<vector>` for using dynamic arrays (vectors).
   - `<string>` for string manipulation.
   - `<unordered_set>` for fast lookup of unique signatures.
   - `<algorithm>` for the sorting function.

2. **Function Declaration**:
   - The function `removeAnagrams` takes a constant reference to a vector of strings and returns a vector of strings.
   
3. **Data Structures**:
   - An unordered set `unique_signatures` is used to store unique sorted signatures of strings.
   - A vector `result` is initialized to store the final output of strings.

4. **Processing Each Word**:
   - For each word in the input:
     - A copy of the word is created, which is then sorted to create the signature.
     - The `find` method of the unordered set checks if this signature has already been seen.
     - If it is a new signature, it's added to the set and the original word is appended to the result.

5. **Return Statement**: 
   - Finally, the resultant vector is returned containing only the unique strings representing the groups of anagrams.

### Time Complexity
The time complexity of sorting each string is O(n log n) where n is the average string length, and since we are iterating through m strings (the number of words), the overall time complexity would be O(m * n log n).

This approach efficiently handles the problem requirement using a combination of sorting and set operations.