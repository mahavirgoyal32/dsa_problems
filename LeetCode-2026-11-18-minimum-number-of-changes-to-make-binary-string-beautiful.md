# LeetCode Daily – 2026-11-18

## 🧠 Problem #2914 – **Minimum Number of Changes to Make Binary String Beautiful**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful)

---

### 📝 Problem Description

You are given a 0-indexed binary string s having an even length.

A string is beautiful if it&#39;s possible to partition it into one or more substrings such that:


	Each substring has an even length.
	Each substring contains only 1&#39;s or only 0&#39;s.


You can change any character in s to 0 or 1.

Return the minimum number of changes required to make the string s beautiful.

 
Example 1:


Input: s = &quot;1001&quot;
Output: 2
Explanation: We change s[1] to 1 and s[3] to 0 to get string &quot;1100&quot;.
It can be seen that the string &quot;1100&quot; is beautiful because we can partition it into &quot;11|00&quot;.
It can be proven that 2 is the minimum number of changes needed to make the string beautiful.


Example 2:


Input: s = &quot;10&quot;
Output: 1
Explanation: We change s[1] to 1 to get string &quot;11&quot;.
It can be seen that the string &quot;11&quot; is beautiful because we can partition it into &quot;11&quot;.
It can be proven that 1 is the minimum number of changes needed to make the string beautiful.


Example 3:


Input: s = &quot;0000&quot;
Output: 0
Explanation: We don&#39;t need to make any changes as the string &quot;0000&quot; is beautiful already.


 
Constraints:


	2 <= s.length <= 105
	s has an even length.
	s[i] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let’s dive into the problem titled "Minimum Number of Changes to Make Binary String Beautiful". The goal is to determine the minimum number of changes needed to make a binary string "beautiful," which means that there should not be three consecutive identical characters ('0' or '1').

### Problem Explanation

A binary string is considered beautiful if it:
- Does not contain three consecutive identical characters.

For example:
- "000" is not beautiful (it contains three '0's).
- "101" is beautiful (it does not contain three consecutive identical characters).
- "010101" is also beautiful.

### Solution Approach

To solve this problem, we can iterate through the binary string while checking for sequences of three consecutive identical characters. Each time we encounter such a sequence, we would need to change one character in the sequence to ensure the string becomes beautiful.

Here is the approach in detail:
1. Iterate through the string while checking for groups of three consecutive identical characters.
2. Each time we find such a group, we make a change and move our index forward by 2 to skip over the changed sequence.
3. Count each necessary change.

### C++ Implementation

Below is the C++ code that implements the above logic.

```cpp
#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int minChanges(string s) {
        int changes = 0;
        int n = s.size();
        
        for (int i = 0; i < n; ++i) {
            // Check if we have a triplet starting at i
            if (i + 2 < n && s[i] == s[i + 1] && s[i] == s[i + 2]) {
                // We found three consecutive identical characters
                changes++; // We need to change one of them
                // Skip to the character after the triplets
                i += 2; 
            }
        }
        
        return changes;
    }
};

int main() {
    Solution solution;
    string input = "0001110"; // Example input
    cout << "Minimum changes needed: " << solution.minChanges(input) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Class and Function Definition**: We define a class `Solution` with a public method `minChanges` that takes a string `s`.
2. **Variable Initialization**:
   - `changes` counts the number of changes needed.
   - `n` holds the length of the string `s`.
3. **Loop through the String**: A for loop iterates over each character in the string.
   - We use `if` to check if we have three consecutive identical characters by comparing the current character with the next two.
4. **Count Changes**: If we find such triplet characters, we increment the `changes` counter and adjust the index to skip the next two characters (the ones we just evaluated).
5. **Return Result**: Finally, the function returns the total count of `changes` needed.

### Conclusion

This solution has a time complexity of O(n), where n is the length of the input string since we are making a single pass through the string. The space complexity is O(1) since we are only using a few additional variables. This efficient algorithm ensures that we quickly derive the minimum changes needed to make the binary string beautiful.