# LeetCode Daily – 2026-02-19

## 🧠 Problem #696 – **Count Binary Substrings**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-binary-substrings)

---

### 📝 Problem Description

Given a binary string s, return the number of non-empty substrings that have the same number of 0&#39;s and 1&#39;s, and all the 0&#39;s and all the 1&#39;s in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

 
Example 1:


Input: s = &quot;00110011&quot;
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1&#39;s and 0&#39;s: &quot;0011&quot;, &quot;01&quot;, &quot;1100&quot;, &quot;10&quot;, &quot;0011&quot;, and &quot;01&quot;.
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, &quot;00110011&quot; is not a valid substring because all the 0&#39;s (and 1&#39;s) are not grouped together.


Example 2:


Input: s = &quot;10101&quot;
Output: 4
Explanation: There are 4 substrings: &quot;10&quot;, &quot;01&quot;, &quot;10&quot;, &quot;01&quot; that have equal number of consecutive 1&#39;s and 0&#39;s.


 
Constraints:


	1 <= s.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Count Binary Substrings" problem asks us to count the number of substrings that have an equal number of consecutive '0's and '1's. A good approach to solving this problem is to rely on grouping the identical characters together and then comparing these groups in order to count valid substrings.

### Explanation

1. **Group Counting**: First, we need to traverse through the string and count the groups of consecutive '0's and '1's. For example, the string "001100" will give us groups: `2` (for "00"), `2` (for "11"), and `2` (for "00").

2. **Counting Valid Substrings**: Once we have these counts, we can deduce the count of valid substrings. The valid substrings can be formed between groups of '0's and '1's. Specifically, if we have a group of '0's of length `count0` and a group of '1's of length `count1`, the number of valid substrings that can be formed between them is `min(count0, count1)`.

3. **Iterating through Groups**: The main task is to create the grouping and then compute the number of valid substrings by iterating through the pairs of groups.

Here is the solution in C++:

```cpp
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int countBinarySubstrings(string s) {
        // Step 1: Count the lengths of consecutive groups of 0s and 1s.
        vector<int> groups;
        
        int count = 1; // Start with 1 since we will start counting from the first character.
        for (int i = 1; i < s.size(); ++i) {
            if (s[i] == s[i - 1]) {
                count++;  // Increment count if the current character matches the previous one.
            } else {
                groups.push_back(count); // Store the count of the previous group.
                count = 1; // Reset count for the new character.
            }
        }
        groups.push_back(count); // Don't forget to add the last group.

        // Step 2: Calculate the number of valid substrings.
        int result = 0;
        for (int i = 1; i < groups.size(); ++i) {
            // We can form min(groups[i-1], groups[i]) valid substrings
            result += min(groups[i - 1], groups[i]);
        }

        return result;
    }
};
```

### Key Points:
- **Grouping**: We loop through the string once (O(n)), counting the lengths of groups of consecutive zeros and ones.
- **Calculating Results**: We then loop through the `groups` vector to count valid substrings which is also O(n) in terms of complexity. 
- Overall, the solution runs in O(n) time, making it efficient.

### Usage:
To use this code, simply create an instance of the `Solution` class and call the `countBinarySubstrings` function with the desired binary string:

```cpp
Solution sol;
int count = sol.countBinarySubstrings("00110011");
```

This will return the count of binary substrings with an equal number of consecutive '0's and '1's from the input string.