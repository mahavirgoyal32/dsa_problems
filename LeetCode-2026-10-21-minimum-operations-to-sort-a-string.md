# LeetCode Daily – 2026-10-21

## 🧠 Problem #3863 – **Minimum Operations to Sort a String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-operations-to-sort-a-string)

---

### 📝 Problem Description

You are given a string s consisting of lowercase English letters.

In one operation, you can select any substring of s that is not the entire string and sort it in non-descending alphabetical order.

Return the minimum number of operations required to make s sorted in non-descending order. If it is not possible, return -1.

 
Example 1:


Input: s = &quot;dog&quot;

Output: 1

Explanation:​​​​​​​


	Sort substring &quot;og&quot; to &quot;go&quot;.
	Now, s = &quot;dgo&quot;, which is sorted in ascending order. Thus, the answer is 1.



Example 2:


Input: s = &quot;card&quot;

Output: 2

Explanation:


	Sort substring &quot;car&quot; to &quot;acr&quot;, so s = &quot;acrd&quot;.
	Sort substring &quot;rd&quot; to &quot;dr&quot;, making s = &quot;acdr&quot;, which is sorted in ascending order. Thus, the answer is 2.



Example 3:


Input: s = &quot;gf&quot;

Output: -1

Explanation:


	It is impossible to sort s under the given constraints. Thus, the answer is -1.



 
Constraints:


	1 <= s.length <= 105
	s consists of only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's walk through the problem titled "Minimum Operations to Sort a String".

### Problem Description

The problem requires us to determine the minimum number of operations needed to sort a given string of lowercase letters. The operations we can perform are moving any character to the front of the string.

Given an input string `s`, the goal is to count how many characters from the string need to be moved to achieve a sorted version of the string.

For example:
- Input: `"cba"`
- Output: `2`
- Explanation: You can move 'b' to the front (to get "bca") and then 'a' to the front (to get "abc"), thus we need 2 operations.

### Solution Approach

1. **Creating a Sorted Version**: First, we create a sorted version of the given string.
2. **Finding the Longest Common Subsequence (LCS)**: Our goal translates into finding the longest subsequence in the original string that matches the characters in the sorted version. The minimum number of operations will then be the total length of the string minus this LCS.
3. **Dynamic Programming**: We will use dynamic programming to calculate the LCS. We can use a 2D vector to store the lengths of LCS for different substrings.

#### Steps to Implement the Solution

1. Compute the sorted version of the string.
2. Initialize a DP table to keep track of LCS.
3. Fill the DP table based on matching characters.
4. Calculate the result based on the length of the string and the LCS value.

### C++ Code Implementation

Here's the implementation in C++:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minOperationsToSortString(string s) {
        // Create a sorted version of the string
        string sorted_s = s;
        sort(sorted_s.begin(), sorted_s.end());
        
        int m = s.size();
        int n = sorted_s.size();
        
        // DP table to find the length of LCS
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Fill the DP table
        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                // If characters match, increment the count
                if (s[i - 1] == sorted_s[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    // Otherwise, take the maximum of excluding one character from either string
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        // The length of the longest common subsequence
        int longestCommonSubsequenceLength = dp[m][n];
        
        // Minimum operations needed will be the length of the string - length of LCS
        return m - longestCommonSubsequenceLength;
    }
};

int main() {
    Solution solution;
    string s = "cba";
    int result = solution.minOperationsToSortString(s);
    cout << "Minimum operations to sort the string: " << result << endl; // Output: 2
    return 0;
}
```

### Explanation of the Code

1. **Sorting**: We first sort the string to have a reference for what the sorted order should be.
2. **Dynamic Programming Table Creation**: 
   - A 2D vector `dp` is created, where each entry `dp[i][j]` will store the length of the longest common subsequence between the first `i` characters of `s` and the first `j` characters of `sorted_s`.
3. **Filling the DP Table**:
   - Iterate over each character of `s` and `sorted_s`, comparing them. If they match, we increase the count from the previously computed state; if they do not match, we take the maximum from either reducing `s` or `sorted_s`.
4. **Result Calculation**: Finally, the minimum number of operations is derived from the length of the original string minus the LCS length.

### Conclusion

This approach ensures that we efficiently compute the minimum number of operations required to sort the string using the concept of longest common subsequence. The overall time complexity is O(n*m), where `n` and `m` are the lengths of the original string and its sorted version (which are equal).