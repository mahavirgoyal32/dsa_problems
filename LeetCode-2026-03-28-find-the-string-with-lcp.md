# LeetCode Daily – 2026-03-28

## 🧠 Problem #2573 – **Find the String with LCP**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-string-with-lcp)

---

### 📝 Problem Description

We define the lcp matrix of any 0-indexed string word of n lowercase English letters as an n x n grid such that:


	lcp[i][j] is equal to the length of the longest common prefix between the substrings word[i,n-1] and word[j,n-1].


Given an n x n matrix lcp, return the alphabetically smallest string word that corresponds to lcp. If there is no such string, return an empty string.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, &quot;aabd&quot; is lexicographically smaller than &quot;aaca&quot; because the first position they differ is at the third letter, and &#39;b&#39; comes before &#39;c&#39;.

 
Example 1:


Input: lcp = [[4,0,2,0],[0,3,0,1],[2,0,2,0],[0,1,0,1]]
Output: &quot;abab&quot;
Explanation: lcp corresponds to any 4 letter string with two alternating letters. The lexicographically smallest of them is &quot;abab&quot;.


Example 2:


Input: lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,1]]
Output: &quot;aaaa&quot;
Explanation: lcp corresponds to any 4 letter string with a single distinct letter. The lexicographically smallest of them is &quot;aaaa&quot;. 


Example 3:


Input: lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,3]]
Output: &quot;&quot;
Explanation: lcp[3][3] cannot be equal to 3 since word[3,...,3] consists of only a single letter; Thus, no answer exists.


 
Constraints:


	1 <= n == lcp.length == lcp[i].length <= 1000
	0 <= lcp[i][j] <= n

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Find the String with LCP" from LeetCode requires us to find a string that is lexicographically smallest among all valid strings that satisfy certain constraints defined by a Longest Common Prefix (LCP) array. 

### Problem Explanation

Given an integer `n` and an array `lcp` of length `n-1`, where `lcp[i]` represents the length of the longest common prefix between the strings constructed from indices `i` and `i+1`, the goal is to create a string of length `n` that adheres to these LCP constraints.

### Solution Approach

1. **Understanding the LCP**: The `lcp[i]` indicates how many characters at the beginning of the strings at indices `i` and `i + 1` are the same. If `lcp[i]` is greater than 0, it means that the first `lcp[i]` characters of these two strings must be the same.
  
2. **Building the Result**: We can construct the desired string by iterating over the `lcp` array. Starting with the first character, we can decide on a character to use for the remaining positions based on how many characters need to be the same.

3. **Choosing the Smallest Character**: For each position, we will fill its character ensuring we maintain the constraints defined by the `lcp` array:
   - If we need a common prefix with the previous string, we copy the character from the appropriate position.
   - Otherwise, we try to use the smallest character lexicographically ('a', 'b', etc.).

### Implementation

Here’s how the solution can be implemented in C++:

```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    string findTheString(vector<int>& lcp) {
        int n = lcp.size() + 1; // The length of the resulting string
        string result(n, 'a'); // Start with the smallest character 'a'

        for (int i = 1; i < n; ++i) {
            // If lcp[i-1] > 0, we need to ensure characters match.
            if (lcp[i - 1] > 0) {
                // Characters at position i-1 and i must be the same
                result[i] = result[i - 1];
            } else {
                // If lcp[i - 1] is 0, we need a different char from the previous
                // Choose a character different from the preceding character
                result[i] = (result[i - 1] == 'a') ? 'b' : 'a'; 
            }
        }

        // Verify the constructed string matches the LCP requirements
        if (!isValidLCP(result, lcp)) {
            return ""; // If construction fails, return empty string (invalid case)
        }
        
        return result;
    }

private:
    bool isValidLCP(const string& str, const vector<int>& lcp) {
        for (int i = 0; i < lcp.size(); ++i) {
            int length = lcp[i];
            if (length > 0) {
                // Check if the prefix is valid
                if (str.substr(i, length) != str.substr(i + 1, length)) {
                    return false; // invalid if the prefixes don't match
                }
            }
        }
        return true;
    }
};

int main() {
    Solution solution;
    vector<int> lcp = {0, 1, 0}; // Example lcp array
    string result = solution.findTheString(lcp);
    cout << result << endl; // Output the result
    return 0;
}
```

### Explanation of the Code
- We start by initializing a string `result` of length `n` filled with the character 'a'.
- We iterate through the `lcp` array and check:
  - If `lcp[i-1]` is greater than 0, we assign the same character as `result[i-1]`.
  - Otherwise, we assign a different character ('a' or 'b') that is different from `result[i-1]`.
- After constructing the string, we validate it by checking against the LCP constraints using a helper function `isValidLCP` which checks if the constructed string meets the LCP requirements.

This solution constructs the string while ensuring all constraints are met, and it operates efficiently within the problem constraints.