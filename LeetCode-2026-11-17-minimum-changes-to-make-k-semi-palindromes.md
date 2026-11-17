# LeetCode Daily – 2026-11-17

## 🧠 Problem #2911 – **Minimum Changes to Make K Semi-palindromes**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes)

---

### 📝 Problem Description

Given a string s and an integer k, partition s into k substrings such that the letter changes needed to make each substring a semi-palindrome are minimized.

Return the minimum number of letter changes required.

A semi-palindrome is a special type of string that can be divided into palindromes based on a repeating pattern. To check if a string is a semi-palindrome:​


	Choose a positive divisor d of the string&#39;s length. d can range from 1 up to, but not including, the string&#39;s length. For a string of length 1, it does not have a valid divisor as per this definition, since the only divisor is its length, which is not allowed.
	For a given divisor d, divide the string into groups where each group contains characters from the string that follow a repeating pattern of length d. Specifically, the first group consists of characters at positions 1, 1 + d, 1 + 2d, and so on; the second group includes characters at positions 2, 2 + d, 2 + 2d, etc.
	The string is considered a semi-palindrome if each of these groups forms a palindrome.


Consider the string &quot;abcabc&quot;:


	The length of &quot;abcabc&quot; is 6. Valid divisors are 1, 2, and 3.
	For d = 1: The entire string &quot;abcabc&quot; forms one group. Not a palindrome.
	For d = 2:
	
		Group 1 (positions 1, 3, 5): &quot;acb&quot;
		Group 2 (positions 2, 4, 6): &quot;bac&quot;
		Neither group forms a palindrome.
	
	
	For d = 3:
	
		Group 1 (positions 1, 4): &quot;aa&quot;
		Group 2 (positions 2, 5): &quot;bb&quot;
		Group 3 (positions 3, 6): &quot;cc&quot;
		All groups form palindromes. Therefore, &quot;abcabc&quot; is a semi-palindrome.
	
	


 
Example 1: 


Input:   s = &quot;abcac&quot;, k = 2 

Output:   1 

Explanation:  Divide s into &quot;ab&quot; and &quot;cac&quot;. &quot;cac&quot; is already semi-palindrome. Change &quot;ab&quot; to &quot;aa&quot;, it becomes semi-palindrome with d = 1.


Example 2: 


Input:   s = &quot;abcdef&quot;, k = 2 

Output:   2 

Explanation:  Divide s into substrings &quot;abc&quot; and &quot;def&quot;. Each needs one change to become semi-palindrome.


Example 3: 


Input:   s = &quot;aabbaa&quot;, k = 3 

Output:   0 

Explanation:  Divide s into substrings &quot;aa&quot;, &quot;bb&quot; and &quot;aa&quot;. All are already semi-palindromes.


 
Constraints:


	2 <= s.length <= 200
	1 <= k <= s.length / 2
	s contains only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Changes to Make K Semi-palindromes," we need to understand the concept of semi-palindromes and the way we can count the minimum changes required to achieve K semi-palindromes from a given string.

### Problem Synopsis

A string can be transformed into a semi-palindrome if it can be segmented into `k` parts, where each part can either be a palindrome or can be turned into one with minimal changes. 

### Key Points

1. **Semi-palindrome**: A string is a semi-palindrome if we can convert it to a palindrome with minimal changes.
2. **K partitions**: The problem is to divide the string into `k` segments, each becoming a semi-palindrome.

### Approach

1. **Palindrome Cost Calculation**: 
   To transform a substring into a palindrome, we need to determine how many characters must be changed. We can use a 2D array `cost[i][j]` where `cost[i][j]` gives the number of changes required for the substring from index `i` to index `j` in the main string.

2. **Dynamic Programming**:
   We will use a DP approach to store the minimum changes required to create j semi-palindromes using the first i characters of the string.

   Let `dp[i][j]` represent the minimum changes required to create `j` semi-palindromes from the first `i` characters of the string.

3. **Transition**: 
   To fill `dp[i][j]`, we can consider every possible previous cut `p`, and sum the cost of making the substring from `p` to `i-1` into a semi-palindrome. The formula can be represented as:
   \[
   dp[i][j] = \min(dp[p][j-1] + cost[p][i-1]) \quad \text{for all } p < i
   \]

### Implementation

Here’s the C++ code that implements the above approach:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minChanges(string s, int k) {
        int n = s.size();
        
        // Cost array - cost[i][j] holds the number of changes to make s[i..j] a palindrome
        vector<vector<int>> cost(n, vector<int>(n, 0));
        
        // Fill the cost matrix
        for (int len = 2; len <= n; ++len) {
            for (int i = 0; i <= n - len; ++i) {
                int j = i + len - 1; // ending index
                // Check characters from both ends
                cost[i][j] = cost[i + 1][j - 1] + (s[i] != s[j]);
            }
        }

        // DP array
        vector<vector<int>> dp(n + 1, vector<int>(k + 1, INT_MAX));
        dp[0][0] = 0; // 0 characters with 0 semi-palindromes requires 0 changes

        // Fill the DP table
        for (int j = 1; j <= k; ++j) {
            for (int i = 1; i <= n; ++i) {
                for (int p = 0; p < i; ++p) { 
                    dp[i][j] = min(dp[i][j], dp[p][j - 1] + cost[p][i - 1]);
                }
            }
        }

        return dp[n][k];
    }
};
```

### Explanation of the Code

1. **Cost Calculation**:
   We calculate the `cost` for all substrings that require changes to convert to palindromes. This is done by examining the characters from both ends of each substring.

2. **DP Table Initialization**:
   We initialize the DP table with infinity (`INT_MAX`) as we want to find the minimum. The base case is that zero characters and zero semi-palindromes require zero changes.

3. **DP Filling**:
   We iteratively compute the values for the DP table considering every possible cut point and adding the necessary changes to make the new segment into a palindrome.

4. **Final Output**:
   The last entry `dp[n][k]` gives the minimum changes required to form `k` semi-palindromes using all characters in the string.

### Complexity
- Time Complexity: \(O(n^3)\) in the worst case due to the three nested loops.
- Space Complexity: \(O(n^2)\) for the cost and DP arrays. 

This approach should efficiently solve the problem for reasonable input sizes while providing clarity through dynamic programming and cost calculations for palindromes.