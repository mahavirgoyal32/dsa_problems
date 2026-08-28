# LeetCode Daily – 2026-08-28

## 🧠 Problem #3734 – **Lexicographically Smallest Palindromic Permutation Greater Than Target**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target)

---

### 📝 Problem Description

You are given two strings s and target, each of length n, consisting of lowercase English letters.

Return the lexicographically smallest string that is both a palindromic permutation of s and strictly greater than target. If no such permutation exists, return an empty string.

 
Example 1:


Input: s = &quot;baba&quot;, target = &quot;abba&quot;

Output: &quot;baab&quot;

Explanation:


	The palindromic permutations of s (in lexicographical order) are &quot;abba&quot; and &quot;baab&quot;.
	The lexicographically smallest permutation that is strictly greater than target is &quot;baab&quot;.



Example 2:


Input: s = &quot;baba&quot;, target = &quot;bbaa&quot;

Output: &quot;&quot;

Explanation:


	The palindromic permutations of s (in lexicographical order) are &quot;abba&quot; and &quot;baab&quot;.
	None of them is lexicographically strictly greater than target. Therefore, the answer is &quot;&quot;.



Example 3:


Input: s = &quot;abc&quot;, target = &quot;abb&quot;

Output: &quot;&quot;

Explanation:

s has no palindromic permutations. Therefore, the answer is &quot;&quot;.


Example 4:


Input: s = &quot;aac&quot;, target = &quot;abb&quot;

Output: &quot;aca&quot;

Explanation:


	The only palindromic permutation of s is &quot;aca&quot;.
	&quot;aca&quot; is strictly greater than target. Therefore, the answer is &quot;aca&quot;.



 
Constraints:


	1 <= n == s.length == target.length <= 300
	s and target consist of only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Let's go through the solution for the problem "Lexicographically Smallest Palindromic Permutation Greater Than Target" step by step. The goal is to find the next lexicographical palindromic permutation of a string `target` that is also greater than `target` itself. If such a permutation does not exist, we should return an empty string.

### Explanation:

1. **Identifying Characteristics of a Palindrome**:
   A palindrome reads the same forward and backward, so we need to focus on how to build a string that can be rearranged into a palindrome. A palindrome can be formed from the characters of the string only if:
   - All characters appear an even number of times, or
   - At most one character appears an odd number of times (for odd-length palindromes).

2. **Steps to Solve the Problem**:
   - **Count Characters**: Count occurrences of each character in the string.
   - **Check for Palindrome Feasibility**: Determine if we can form a palindrome with the given characters.
   - **Generate Next Permutation**: Generate all permutations and find the next permutation that is greater than `target`.
   - **Ensure Palindromic Structure**: Check if that permutation is a palindrome, if it is, return it.

3. **Algorithm**:
   - Use a frequency array to count occurrences of each character in `target`.
   - Build the half-string that would serve as the basis for the palindrome.
   - Use sorting and permutation techniques to find the next lexicographical permutation that would form a palindrome.

### C++ Code:

Here's how the complete C++ solution looks:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    string generatePalindromicPermutation(const string& half, char middle) {
        string palindrome = half;
        if (middle != '\0') {
            palindrome += middle; // Add the middle character if there is one
        }
        reverse(half.begin(), half.end());
        palindrome += half; // Append the reverse of the half string to complete the palindrome
        return palindrome;
    }

    string nextPalindromicPermutation(string target) {
        unordered_map<char, int> freq;
        for (char c : target) {
            freq[c]++;
        }
        
        string half = "", middle = "";
        int oddCount = 0;
        
        // Create half palindrome base and count odd characters
        for (auto& entry : freq) {
            char c = entry.first;
            int count = entry.second;
            if (count % 2 == 1) {
                oddCount++;
                middle = c; // Keep track of the odd character
            }
            half += string(count / 2, c); // Build half from the pairs
        }

        // If odd characters are more than one, return empty string (cannot form palindrome)
        if (oddCount > 1) return "";

        // Generate the next lexicographical permutation from 'half'
        sort(half.begin(), half.end());
        string result = "";

        // Generate permutations of 'half' and check for the next valid palindrome greater than target
        do {
            string candidate = generatePalindromicPermutation(half, middle.empty() ? '\0' : middle[0]);
            if (candidate > target) {
                return candidate;
            }
        } while (next_permutation(half.begin(), half.end()));

        return ""; // If no valid palindrome found that's greater
    }

    string nextPalindrome(string target) {
        return nextPalindromicPermutation(target);
    }
};

int main() {
    Solution solution;
    string target = "aabc";
    string result = solution.nextPalindrome(target);
    cout << result << endl; // Expected to print the next palindromic permutation
    return 0;
}
```

### Code Explanation:

- **Frequency Counting**: The character frequencies are counted using an unordered map.
  
- **Half String Construction**: We build a "half string" made up of half of each character that can form the palindrome, and we track any middle character if there's one.

- **Palindrome Generation**: By generating permutations of the half string and checking if the resultant palindrome is greater than the target, we maintain both the correctness of the palindrome and the lexicographical order.

- **Handling Corner Cases**: If the odd count of characters is more than one, we return an empty string immediately, since forming a valid palindrome is impossible.

### Complexity:
- The time complexity of generating permutations depends on the number of unique characters, and it could become expensive for longer strings, but it's manageable given the constraints of typical string lengths in competitive programming.