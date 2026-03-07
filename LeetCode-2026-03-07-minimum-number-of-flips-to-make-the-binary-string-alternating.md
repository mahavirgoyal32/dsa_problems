# LeetCode Daily – 2026-03-07

## 🧠 Problem #1888 – **Minimum Number of Flips to Make the Binary String Alternating**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating)

---

### 📝 Problem Description

You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence:


	Type-1: Remove the character at the start of the string s and append it to the end of the string.
	Type-2: Pick any character in s and flip its value, i.e., if its value is &#39;0&#39; it becomes &#39;1&#39; and vice-versa.


Return the minimum number of type-2 operations you need to perform such that s becomes alternating.

The string is called alternating if no two adjacent characters are equal.


	For example, the strings &quot;010&quot; and &quot;1010&quot; are alternating, while the string &quot;0100&quot; is not.


 
Example 1:


Input: s = &quot;111000&quot;
Output: 2
Explanation: Use the first operation two times to make s = &quot;100011&quot;.
Then, use the second operation on the third and sixth elements to make s = &quot;101010&quot;.


Example 2:


Input: s = &quot;010&quot;
Output: 0
Explanation: The string is already alternating.


Example 3:


Input: s = &quot;1110&quot;
Output: 1
Explanation: Use the second operation on the second element to make s = &quot;1010&quot;.


 
Constraints:


	1 <= s.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Number of Flips to Make the Binary String Alternating," we need to understand that an alternating binary string consists of characters that alternate between '0' and '1'. The two possible patterns for any binary string of length \( n \) are:

1. Pattern A: Starts with '0' -> '010101...'
2. Pattern B: Starts with '1' -> '101010...'

Given a binary string, our goal is to compute the minimum number of bit flips required to convert it into one of these two patterns.

### Steps to Approach:

1. **Count the Flips**: 
   - For each character in the string, we will determine how many bits need to be flipped to match both Pattern A and Pattern B.
   - If the character at the current index does not match the expected character for the pattern, we will increment our flip count for that pattern.

2. **Compare the Counts**:
   - After processing the entire string, the result will be the minimum of the two flip counts, as we would want the least number of changes to transform the input string into an alternating pattern.

### C++ Implementation:

Here's how we can implement the above logic in C++:

```cpp
#include <iostream>
#include <string>
#include <algorithm>

class Solution {
public:
    int minFlips(String s) {
        int n = s.size();
        int flipsPatternA = 0; // Flips needed for pattern "010101..."
        int flipsPatternB = 0; // Flips needed for pattern "101010..."

        for (int i = 0; i < n; ++i) {
            char expectedCharForA = (i % 2 == 0) ? '0' : '1';
            char expectedCharForB = (i % 2 == 0) ? '1' : '0';

            if (s[i] != expectedCharForA) {
                flipsPatternA++;
            }
            if (s[i] != expectedCharForB) {
                flipsPatternB++;
            }
        }

        // Return the minimum flips needed to make the string alternating
        return std::min(flipsPatternA, flipsPatternB);
    }
};

int main() {
    Solution solution;
    std::string binaryString = "0100";
    std::cout << "Minimum flips needed: " << solution.minFlips(binaryString) << std::endl;
    return 0;
}
```

### Explanation of Code:

1. **Initialize Flip Counters**:
   - We initialize two counters, `flipsPatternA` and `flipsPatternB`, to keep track of the number of flips required for each pattern.

2. **Loop Through the String**:
   - For each character in the string, we determine the expected character for both patterns.
   - We increment the respective counter if the current character does not match the expected character for either pattern.

3. **Return Minimum Flips**:
   - At the end of the loop, we return the minimum of the two counters, which gives us the least number of flips required to achieve an alternating pattern for the given binary string.

This method efficiently calculates the result in \( O(n) \) time complexity, where \( n \) is the length of the string, which is optimal for this problem.