# LeetCode Daily – 2026-09-07

## 🧠 Problem #940 – **Distinct Subsequences II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/distinct-subsequences-ii)

---

### 📝 Problem Description

Given a string s, return the number of distinct non-empty subsequences of s. Since the answer may be very large, return it modulo 109 + 7.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., &quot;ace&quot; is a subsequence of &quot;abcde&quot; while &quot;aec&quot; is not.
 
Example 1:


Input: s = &quot;abc&quot;
Output: 7
Explanation: The 7 distinct subsequences are &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;ab&quot;, &quot;ac&quot;, &quot;bc&quot;, and &quot;abc&quot;.


Example 2:


Input: s = &quot;aba&quot;
Output: 6
Explanation: The 6 distinct subsequences are &quot;a&quot;, &quot;b&quot;, &quot;ab&quot;, &quot;aa&quot;, &quot;ba&quot;, and &quot;aba&quot;.


Example 3:


Input: s = &quot;aaa&quot;
Output: 3
Explanation: The 3 distinct subsequences are &quot;a&quot;, &quot;aa&quot; and &quot;aaa&quot;.


 
Constraints:


	1 <= s.length <= 2000
	s consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Distinct Subsequences II" is to find the number of distinct subsequences of a given string `s`, with the result being returned modulo \(10^9 + 7\). 

To understand the solution, let's break down the problem:

### Problem Breakdown

1. **Definition**:
   - A subsequence is a sequence that derives from another sequence by deleting some elements without changing the order of the remaining elements.
   - For example, for the string "abc", the subsequences include "", "a", "b", "c", "ab", "ac", "bc", "abc".

2. **Key Requirements**:
   - We need to count distinct subsequences of a string that can potentially have repeating characters.
   - Since the result can be very large, we will return the count modulo \(10^9 + 7\).

3. **Dynamic Programming Approach**:
   - We'll make use of a dynamic programming solution to keep track of the number of distinct subsequences that can be formed with each character processed.
   - Use an array `dp` where `dp[i]` will represent the number of distinct subsequences that can be formed from the first `i` characters of `s`.

### Dynamic Programming State Transition
To build our DP approach:

- Initialize `dp[0] = 1` because the empty string has one subsequence - itself.
- As we iterate through each character in the string:
  - The number of distinct subsequences ending at the current character can be seen as two choices for each subsequence up to the previous character:
    - Including the current character.
    - Not including the current character.
- Thus, `dp[i] = 2 * dp[i - 1]` accumulates the number of distinct subsequences.
- However, if there are repeating characters, we have to subtract the count of subsequences counted before the last occurrence of the repeating character to ensure they remain distinct.

### Implementation Steps
1. Use a hash map to keep track of the last occurrence of each character.
2. Update our `dp` array accordingly.

### C++ Implementation
Here's the implementation of the above approach in C++:

```cpp
#include <vector>
#include <string>
#include <unordered_map>

class Solution {
public:
    int distinctSubseqII(std::string s) {
        const int MOD = 1e9 + 7;
        int n = s.size();
        
        // dp[i] is the number of distinct subsequences from s[0] to s[i-1]
        std::vector<long long> dp(n + 1, 0);
        dp[0] = 1; // Base case for empty subsequence
        
        // To track the last occurrence of each character
        std::unordered_map<char, int> last_occurrence;

        for (int i = 1; i <= n; i++) {
            char current_char = s[i - 1];

            // Each distinct subsequence can either include or not include the current character
            dp[i] = (2 * dp[i - 1]) % MOD;

            // If the character has occurred before, subtract the subsequences counted before its last occurrence
            if (last_occurrence.find(current_char) != last_occurrence.end()) {
                int last_idx = last_occurrence[current_char];
                dp[i] = (dp[i] - dp[last_idx - 1] + MOD) % MOD; 
            }

            // Update last occurrence of the current character
            last_occurrence[current_char] = i;
        }

        // Since we want non-empty subsequences, we'll subtract 1 for the empty subsequence.
        return (dp[n] - 1 + MOD) % MOD;
    }
};
```

### Explanation of the Implementation
- We iterate over the string and for each character, we calculate the number of distinct subsequences using the DP relation.
- We keep track of the last occurrence of each character and adjust the current count if we encounter that character again.
- Finally, we return the total number of distinct subsequences, excluding the empty one by subtracting 1 before taking modulo.

This approach yields a time complexity of \(O(n)\), where \(n\) is the length of the string, and it runs in linear time efficiently handling large inputs.