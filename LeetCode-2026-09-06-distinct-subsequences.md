# LeetCode Daily – 2026-09-06

## 🧠 Problem #115 – **Distinct Subsequences**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/distinct-subsequences)

---

### 📝 Problem Description

Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

 
Example 1:


Input: s = &quot;rabbbit&quot;, t = &quot;rabbit&quot;
Output: 3
Explanation:
As shown below, there are 3 ways you can generate &quot;rabbit&quot; from s.
rabbbit
rabbbit
rabbbit


Example 2:


Input: s = &quot;babgbag&quot;, t = &quot;bag&quot;
Output: 5
Explanation:
As shown below, there are 5 ways you can generate &quot;bag&quot; from s.
babgbag
babgbag
babgbag
babgbag
babgbag

 
Constraints:


	1 <= s.length, t.length <= 1000
	s and t consist of English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Distinct Subsequences" on LeetCode asks us to determine the number of distinct subsequences of a string `S` that equal another string `T`. Here's the problem statement and how we can approach solving it using dynamic programming in C++.

### Problem Statement

Given a string `S` and a string `T`, return the number of distinct subsequences of `S` which equals `T`.

A subsequence is obtained by deleting some (can be none) characters of a string without changing the order of the remaining characters.

### Approach

To solve this problem, we can use dynamic programming. We will create a 2D vector `dp` where `dp[i][j]` represents the number of distinct subsequences of the first `i` characters of `S` that equal the first `j` characters of `T`.

**Steps:**

1. Initialize a 2D vector `dp` of size `(m+1) x (n+1)` where `m` is the length of `S` and `n` is the length of `T`. Initialize `dp[0][0] = 1`, which represents the empty string.
2. Fill in the first column. For every `i`, `dp[i][0] = 1` because an empty `T` can be made from any prefix of `S` by deleting all characters.
3. For each character in `S` and `T`, update the `dp` table:
   - If `S[i-1]` matches `T[j-1]`, we can either consider this character as a part of the subsequence or not:
     ```
     dp[i][j] = dp[i-1][j-1] (using the character) + dp[i-1][j] (not using the character)
     ```
   - If `S[i-1]` does not match `T[j-1]`, we can only skip the character:
     ```
     dp[i][j] = dp[i-1][j]
     ```

4. The answer will be found in `dp[m][n]`, which represents the number of distinct subsequences of `S` that equal `T`.

### C++ Code Implementation

Here's the C++ code for the above approach:

```cpp
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int numDistinct(string S, string T) {
        int m = S.size();
        int n = T.size();
        
        // Create a 2D vector for dynamic programming
        vector<vector<long long>> dp(m + 1, vector<long long>(n + 1, 0));
        
        // Base case initialization
        dp[0][0] = 1;
        
        // If T is an empty string, there's 1 way to form it from any prefix of S
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1; // There's exactly one subsequence of S that equals an empty T (delete all).
        }

        // Fill the dp table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (S[i - 1] == T[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        // The desired result is in dp[m][n]
        return dp[m][n];
    }
};
```

### Explanation of the Code

1. We first include necessary headers and define the `Solution` class.
2. The `numDistinct` function is defined to take strings `S` and `T`.
3. We create a 2D vector `dp` initialized with zeros. The size is `(m + 1) x (n + 1)` where `m` is the length of `S` and `n` is the length of `T`.
4. We set the base cases in the `dp` table where an empty `T` can be formed from any prefix of `S`.
5. We fill the `dp` table based on the rules stated, accounting for matches and non-matches.
6. Finally, we return `dp[m][n]`, which contains the count of distinct subsequences.

This dynamic programming approach ensures we efficiently compute the answer in O(m * n) time with O(m * n) space.