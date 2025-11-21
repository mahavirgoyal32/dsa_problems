# LeetCode Daily – 2025-11-21

## 🧠 Problem #1930 – **Unique Length-3 Palindromic Subsequences**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/unique-length-3-palindromic-subsequences)

---

### 📝 Problem Description

Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.


	For example, &quot;ace&quot; is a subsequence of &quot;abcde&quot;.


 
Example 1:


Input: s = &quot;aabca&quot;
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- &quot;aba&quot; (subsequence of &quot;aabca&quot;)
- &quot;aaa&quot; (subsequence of &quot;aabca&quot;)
- &quot;aca&quot; (subsequence of &quot;aabca&quot;)


Example 2:


Input: s = &quot;adc&quot;
Output: 0
Explanation: There are no palindromic subsequences of length 3 in &quot;adc&quot;.


Example 3:


Input: s = &quot;bbcbaba&quot;
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- &quot;bbb&quot; (subsequence of &quot;bbcbaba&quot;)
- &quot;bcb&quot; (subsequence of &quot;bbcbaba&quot;)
- &quot;bab&quot; (subsequence of &quot;bbcbaba&quot;)
- &quot;aba&quot; (subsequence of &quot;bbcbaba&quot;)


 
Constraints:


	3 <= s.length <= 105
	s consists of only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's address the LeetCode problem titled "Unique Length-3 Palindromic Subsequences." 

### Problem Explanation:

You need to count the number of unique palindromic subsequences of length 3. A palindromic string reads the same forwards and backwards. For example, "aba" and "aca" are palindromic, while "abc" is not. In the context of this problem, a length-3 palindrome takes the form `aba`, where:
- `a` is the first character,
- `b` is the middle character, and 
- `a` is the last character as well, which is the same as the first character.

### Steps to Approach:

1. **Iterate over Characters**: For each possible character that can be the center of the palindrome, check for potential characters that can be the same as the first and last positions.

2. **Use Sets**: Use a data structure to store unique palindromic strings formed during the iteration.

3. **Check for Occurrences**: For a current character as the middle, we can find the first character on the left and then check for the same character on the right in the string.

4. **Count Unique Palindromes**: Since we are looking for unique palindromic subsequences, we can utilize a set to avoid counting duplicates.

### C++ Implementation:

Here’s how you can implement this idea in C++:

```cpp
#include <iostream>
#include <vector>
#include <set>
#include <string>

using namespace std;

class Solution {
public:
    int uniquePalindromicSubseq(string s) {
        set<string> uniquePalindromes;

        // Loop through each character to be the middle character of palindromes
        for (int mid = 1; mid < s.size() - 1; ++mid) {
            char middleChar = s[mid];
            // Use sets to find unique characters at both ends
            char leftChar;
            char rightChar;
            set<char> leftChars;
            set<char> rightChars;

            // Traverse to the left of mid to find unique characters
            for (int left = mid - 1; left >= 0; --left) {
                leftChars.insert(s[left]);
            }

            // Traverse to the right of mid to find unique characters
            for (int right = mid + 1; right < s.size(); ++right) {
                rightChars.insert(s[right]);
            }

            // For each unique left character, check against unique right characters
            for (char l : leftChars) {
                for (char r : rightChars) {
                    uniquePalindromes.insert(string(1, l) + string(1, middleChar) + string(1, l));
                }
            }
        }
        
        return uniquePalindromes.size();
    }
};

int main() {
    Solution solution;
    string input = "aabca";
    int result = solution.uniquePalindromicSubseq(input);
    cout << "Unique palindromic subsequences of length 3: " << result << endl;
    return 0;
}
```

### Explanation of the Code:

1. **Input Handling**: The function `uniquePalindromicSubseq` takes a string as an input.

2. **Outer Loop**: The loop runs through from the second character to the second last character (`mid` variable), which acts as the potential middle character of the palindrome.

3. **Character Collection**:
   - `leftChars` and `rightChars` are sets used to store all distinct characters found to the left and right of the `mid` character.

4. **Inner Loop**: Nested loops aggregate characters from `leftChars` and `rightChars`, and for each character pair, a palindromic string of the form `l + middleChar + l` is formed and stored in the set `uniquePalindromes`.

5. **Return Count**: Finally, the size of the `uniquePalindromes` set gives us the count of unique palindromic subsequences of length 3.

### Complexity Analysis:
- **Time Complexity**: O(n^2) in the worst case, where `n` is the length of the string because we potentially check all pairs of left and right characters for each middle character.
- **Space Complexity**: O(k) where `k` is the number of unique palindromic subsequences, as they are stored in the set.

This code effectively counts unique palindromic subsequences of length 3 from the given input string.