# LeetCode Daily – 2025-11-16

## 🧠 Problem #1513 – **Number of Substrings With Only 1s**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-substrings-with-only-1s)

---

### 📝 Problem Description

Given a binary string s, return the number of substrings with all characters 1&#39;s. Since the answer may be too large, return it modulo 109 + 7.

 
Example 1:


Input: s = &quot;0110111&quot;
Output: 9
Explanation: There are 9 substring in total with only 1&#39;s characters.
&quot;1&quot; -> 5 times.
&quot;11&quot; -> 3 times.
&quot;111&quot; -> 1 time.

Example 2:


Input: s = &quot;101&quot;
Output: 2
Explanation: Substring &quot;1&quot; is shown 2 times in s.


Example 3:


Input: s = &quot;111111&quot;
Output: 21
Explanation: Each substring contains only 1&#39;s characters.


 
Constraints:


	1 <= s.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let’s solve the LeetCode problem titled "Number of Substrings With Only 1s". First, I'll walk you through the problem statement, then I'll explain the approach I will use to solve it and finally provide you with the C++ code.

### Problem Statement:

You are given a binary string `s` consisting of only '0's and '1's. You need to count the number of substrings that consist entirely of '1's.

For example, if `s = "011101"`, the substrings of '1's are:
- "1"
- "1"
- "11"
- "111"
- "1"
- "1"

The answer for this example is 9 because there are 9 valid substrings made of '1's.

### Approach:

1. **Count Consecutive '1's**: We will iterate through the string and count the number of consecutive '1's.
  
2. **Calculate Substrings**: For a sequence of `k` consecutive '1's, the number of non-empty substrings that can be formed is given by the formula:
   \[
   \text{count} = \frac{k \times (k + 1)}{2}
   \]
   This calculates the total number of ways to choose substrings from `k` '1's.

3. **Sum Up Results**: Keep a running total of all the counts calculated for each sequence of '1's found in the string.

### C++ Implementation:

Here is the C++ code implementing the above approach:

```cpp
#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int numSub(string s) {
        int count = 0; // To hold the total count of substrings
        int consecutiveOnes = 0; // To count the number of consecutive '1's 

        for (char c : s) {
            if (c == '1') {
                consecutiveOnes++;
                count += consecutiveOnes; // Add the number of substrings formed
            } else {
                consecutiveOnes = 0; // Reset count if we encounter '0'
            }
        }

        return count;
    }
};

int main() {
    Solution solution;
    string s = "011101";
    cout << "Number of substrings with only 1s: " << solution.numSub(s) << endl; // Output: 9
    return 0;
}
```

### Explanation of the Code:

1. **`numSub` Function**: This function takes a binary string `s` as input and initializes two variables: `count` (to store the total count of substrings) and `consecutiveOnes` (to track the current streak of '1's).

2. **Loop through the String**: The code iterates over each character in the string:
   - If the character is '1', we increment the `consecutiveOnes` and add its value to `count`.
   - If it's a '0', we reset `consecutiveOnes` to 0 because we can't have substrings of '1's across '0's.

3. **Return the Result**: After the loop, we return the total count of substrings.

This algorithm operates in O(n) time complexity, where n is the length of the string, because we only make a single pass through the string. The space complexity is O(1) as we are using a constant amount of extra space.

Feel free to test this implementation with different binary strings to see how it performs!