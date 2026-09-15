# LeetCode Daily – 2026-09-15

## 🧠 Problem #2472 – **Maximum Number of Non-overlapping Palindrome Substrings**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings)

---

### 📝 Problem Description

You are given a string s and a positive integer k.

Select a set of non-overlapping substrings from the string s that satisfy the following conditions:


	The length of each substring is at least k.
	Each substring is a palindrome.


Return the maximum number of substrings in an optimal selection.

A substring is a contiguous sequence of characters within a string.

 
Example 1:


Input: s = &quot;abaccdbbd&quot;, k = 3
Output: 2
Explanation: We can select the substrings underlined in s = &quot;abaccdbbd&quot;. Both &quot;aba&quot; and &quot;dbbd&quot; are palindromes and have a length of at least k = 3.
It can be shown that we cannot find a selection with more than two valid substrings.


Example 2:


Input: s = &quot;adbcda&quot;, k = 2
Output: 0
Explanation: There is no palindrome substring of length at least 2 in the string.


 
Constraints:


	1 <= k <= s.length <= 2000
	s consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem titled "Maximum Number of Non-overlapping Palindrome Substrings" requires us to determine the maximum number of non-overlapping palindromic substrings in a given string. Let's break down the approach and provide a C++ solution with explanations.

### Problem Explanation

We need to identify all possible palindromic substrings in the input string `s` and then count the maximum number of non-overlapping palindromic substrings we can select.

### Solution Approach

1. **Identifying Palindromic Substrings**:
    - Use the concept of expanding around possible centers to identify all palindromic substrings. For a string of length `n`, there are `2n - 1` possible centers (each character and each gap between characters).

2. **Dynamic Programming for Non-overlapping Substrings**:
    - We can maintain a dynamic programming array `dp` where `dp[i]` represents the maximum number of non-overlapping palindromic substrings that can be formed in the substring `s[0..i]`.

3. **Finding the Maximum Count**:
    - For each palindromic substring found, update the `dp` array based on the end index of the palindrome, ensuring that we do not count overlapping substrings.

### Implementation

Here is the C++ code that implements the above logic:

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int maxPalindromes(string s, int k) {
        int n = s.size();
        vector<int> dp(n + 1, 0);
        vector<int> isPalindrome(n, 0);

        // Precompute palindromic substrings
        for (int center = 0; center < n; ++center) {
            // Odd-length palindromes
            expandAroundCenter(s, center, center, isPalindrome);
            // Even-length palindromes
            expandAroundCenter(s, center, center + 1, isPalindrome);
        }

        // Fill dp array
        for (int i = 0; i < n; ++i) {
            // Maximum without the current character
            dp[i + 1] = dp[i];

            // Check for all palindromes ending at i
            for (int j = 0; j <= i; ++j) {
                if (isPalindrome[j] && (i - j + 1) >= k) {
                    // Found a palindrome of valid length, update dp
                    dp[i + 1] = max(dp[i + 1], dp[j] + 1);
                }
            }
        }

        return dp[n];
    }

private:
    void expandAroundCenter(const std::string &s, int left, int right, vector<int> &isPalindrome) {
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            isPalindrome[left] = right;  // Mark the end of the palindrome starting from 'left'
            left--;
            right++;
        }
    }
};

int main() {
    Solution solution;
    string s = "abbacc";
    int k = 2;
    cout << solution.maxPalindromes(s, k) << endl; // Output the result
    return 0;
}
```

### Explanation of the Code

1. **Precomputation of Palindromic Substrings**:
    - The `expandAroundCenter` function checks and marks every palindromic substring by expanding from the center. It populates `isPalindrome` such that `isPalindrome[i]` gives the index of the rightmost character of the palindrome starting from `i`.

2. **Dynamic Programming Approach**:
    - We iterate through the string using a dynamic programming array `dp` to find the maximum counts of non-overlapping palindromes.
    - For each character position `i`, we look back to see if there exists any palindromic substring starting from `j` to `i`. If the length of the palindromic substring `i - j + 1` is at least `k`, we update our `dp[i + 1]`.

3. **Output**: After processing the entire string, `dp[n]` gives the maximum number of non-overlapping palindromic substrings.

### Conclusion

This solution efficiently identifies and counts the valid palindromic substrings while ensuring that overlaps are avoided through careful dp array updates. This approach typically runs in \(O(n^2)\) time complexity due to the palindrome identification and dp updates, and it is suitable for input constraints provided in the problem.