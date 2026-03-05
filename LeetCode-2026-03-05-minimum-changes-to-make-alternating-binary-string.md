# LeetCode Daily – 2026-03-05

## 🧠 Problem #1758 – **Minimum Changes To Make Alternating Binary String**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string)

---

### 📝 Problem Description

You are given a string s consisting only of the characters &#39;0&#39; and &#39;1&#39;. In one operation, you can change any &#39;0&#39; to &#39;1&#39; or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string &quot;010&quot; is alternating, while the string &quot;0100&quot; is not.

Return the minimum number of operations needed to make s alternating.

 
Example 1:


Input: s = &quot;0100&quot;
Output: 1
Explanation: If you change the last character to &#39;1&#39;, s will be &quot;0101&quot;, which is alternating.


Example 2:


Input: s = &quot;10&quot;
Output: 0
Explanation: s is already alternating.


Example 3:


Input: s = &quot;1111&quot;
Output: 2
Explanation: You need two operations to reach &quot;0101&quot; or &quot;1010&quot;.


 
Constraints:


	1 <= s.length <= 104
	s[i] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Changes To Make Alternating Binary String", we need to transform a given binary string such that it alternates between '0' and '1'. An alternating binary string looks like "010101..." or "101010...".

## Problem Explanation
Given a binary string, we want to determine the minimum number of changes needed to make the string alternate. 

For example:
- Input: "0100"
- Output: 1 (we can change the last '0' to '1' to make it "0101")

## Plan
1. We will create two target patterns based on the length of the input string:
   - Pattern 1 (starting with '0'): "010101..."
   - Pattern 2 (starting with '1'): "101010..."
   
2. We will count how many positions differ from each pattern.
3. The result will be the minimum of the two counts.

## Implementation
Here is the C++ implementation based on the explanation above:

```cpp
#include <string>
#include <algorithm>

class Solution {
public:
    int minChanges(const std::string& s) {
        // Count mismatches with both patterns
        int count1 = 0; // Count for pattern "010101..."
        int count2 = 0; // Count for pattern "101010..."

        for (int i = 0; i < s.size(); ++i) {
            // Determine the expected character for both patterns based on the index
            char expectedChar1 = (i % 2 == 0) ? '0' : '1'; // Pattern starting with '0'
            char expectedChar2 = (i % 2 == 0) ? '1' : '0'; // Pattern starting with '1'

            // Increment the count if the current character does not match the expected character
            if (s[i] != expectedChar1) {
                count1++;
            }
            if (s[i] != expectedChar2) {
                count2++;
            }
        }
        
        // The minimum changes required will be the minimum of the two counts
        return std::min(count1, count2);
    }
};
```

## Key Points
- We iterate through each character of the string once, making this approach O(n), where n is the length of the string. This is efficient and works well even for larger strings.
- By simply comparing each character with the expected character of both alternating patterns, we can easily count the required changes.
- Finally, we return the minimum value from the two counts.

### Example Walkthrough
Let’s consider the input string "0110":
- Expected for pattern 1 ("0101..."):
  - 0 (matches: 0)
  - 1 (matches: 1)
  - 1 (does not match: 0 - mismatch)
  - 0 (does not match: 1 - mismatch)
  - Count 1 = 2
  
- Expected for pattern 2 ("1010..."):
  - 1 (does not match: 0 - mismatch)
  - 0 (matches: 1)
  - 1 (matches: 0)
  - 0 (does not match: 1 - mismatch)
  - Count 2 = 2
  
Since both `count1` and `count2` yield 2, the result is `min(2, 2) = 2`.

This code correctly calculates the minimum changes required to make the binary string alternate as required by the problem statement.