# LeetCode Daily – 2026-01-10

## 🧠 Problem #712 – **Minimum ASCII Delete Sum for Two Strings**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings)

---

### 📝 Problem Description

Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

 
Example 1:


Input: s1 = &quot;sea&quot;, s2 = &quot;eat&quot;
Output: 231
Explanation: Deleting &quot;s&quot; from &quot;sea&quot; adds the ASCII value of &quot;s&quot; (115) to the sum.
Deleting &quot;t&quot; from &quot;eat&quot; adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.


Example 2:


Input: s1 = &quot;delete&quot;, s2 = &quot;leet&quot;
Output: 403
Explanation: Deleting &quot;dee&quot; from &quot;delete&quot; to turn the string into &quot;let&quot;,
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting &quot;e&quot; from &quot;leet&quot; adds 101[e] to the sum.
At the end, both strings are equal to &quot;let&quot;, and the answer is 100+101+101+101 = 403.
If instead we turned both strings into &quot;lee&quot; or &quot;eet&quot;, we would get answers of 433 or 417, which are higher.


 
Constraints:


	1 <= s1.length, s2.length <= 1000
	s1 and s2 consist of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Minimum ASCII Delete Sum for Two Strings" problem requires us to find the minimum sum of ASCII values of characters that need to be deleted to make two strings equal. This can be solved efficiently using dynamic programming.

### Problem Explanation

Given two strings `s1` and `s2`, we want to minimize the sum of the ASCII values of characters that must be deleted from both strings to make them equal. 

### Dynamic Programming Approach

We can use a 2D dynamic programming table `dp` where `dp[i][j]` represents the minimum ASCII delete sum for the substrings `s1[0..i-1]` and `s2[0..j-1]`.

#### Steps to Formulate the Solution:

1. Initialize a 2D array `dp` of size `(m+1) x (n+1)`, where `m` is the length of `s1` and `n` is the length of `s2`.
2. The first row and first column of the table represent the scenarios where one of the strings is empty.
   - If `s1` is empty (`dp[0][j]`), we delete all characters of `s2[0..j-1]`. The sum will be the cumulative ASCII values of those characters.
   - If `s2` is empty (`dp[i][0]`), we delete all characters of `s1[0..i-1]`. The sum will be the cumulative ASCII values of those characters.
3. Iterate through each character of both strings:
   - If the characters at the current position are the same (`s1[i-1] == s2[j-1]`), then we carry the previous value (`dp[i-1][j-1]`).
   - If the characters are different, we consider the cost of deleting either character from `s1` or `s2` and take the minimum of the two options.
4. Finally, `dp[m][n]` will hold the answer - the minimum ASCII delete sum required to make the two strings equal.

### C++ Code Implementation

Here’s how this can be implemented in C++:

```cpp
#include <vector>
#include <string>
#include <iostream>

class Solution {
public:
    int minimumDeleteSum(std::string s1, std::string s2) {
        int m = s1.size();
        int n = s2.size();
        
        // Create a DP table
        std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));
        
        // Fill the first row and first column
        for (int i = 1; i <= m; ++i) {
            dp[i][0] = dp[i-1][0] + s1[i-1]; // ASCII value of s1[i-1]
        }
        for (int j = 1; j <= n; ++j) {
            dp[0][j] = dp[0][j-1] + s2[j-1]; // ASCII value of s2[j-1]
        }

        // Fill the rest of the DP table
        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                if (s1[i - 1] == s2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]; // Characters are same, no cost
                } else {
                    // If not, consider deleting characters from either string
                    dp[i][j] = std::min(dp[i - 1][j] + s1[i - 1],    // Delete s1[i-1]
                                       dp[i][j - 1] + s2[j - 1]); // Delete s2[j-1]
                }
            }
        }

        return dp[m][n]; // The result
    }
};

int main() {
    Solution solution;
    std::string s1 = "sea";
    std::string s2 = "eat";
    std::cout << "Minimum ASCII Delete Sum: " << solution.minimumDeleteSum(s1, s2) << std::endl;
    return 0;
}
```

### Explanation of the Code:

1. We declare a `Solution` class with the function `minimumDeleteSum` that accepts two strings.
2. We initialize a DP table with 0s.
3. We fill in the first row and the first column based on the ASCII values of the characters in `s1` and `s2`.
4. We iterate through the characters of both strings and determine whether to keep the character or delete it, updating the DP table accordingly.
5. Finally, we return the value at `dp[m][n]`, which gives the minimum delete sum.

### Complexity:

- **Time Complexity:** O(m * n), where m is the length of `s1` and n is the length of `s2`.
- **Space Complexity:** O(m * n) for the DP table.