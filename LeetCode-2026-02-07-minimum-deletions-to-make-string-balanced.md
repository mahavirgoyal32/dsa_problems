# LeetCode Daily – 2026-02-07

## 🧠 Problem #1653 – **Minimum Deletions to Make String Balanced**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced)

---

### 📝 Problem Description

You are given a string s consisting only of characters &#39;a&#39; and &#39;b&#39;​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = &#39;b&#39; and s[j]= &#39;a&#39;.

Return the minimum number of deletions needed to make s balanced.

 
Example 1:


Input: s = &quot;aababbab&quot;
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 (&quot;aababbab&quot; -> &quot;aaabbb&quot;), or
Delete the characters at 0-indexed positions 3 and 6 (&quot;aababbab&quot; -> &quot;aabbbb&quot;).


Example 2:


Input: s = &quot;bbaaaaabb&quot;
Output: 2
Explanation: The only solution is to delete the first two characters.


 
Constraints:


	1 <= s.length <= 105
	s[i] is &#39;a&#39; or &#39;b&#39;​​.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Deletions to Make String Balanced" requires us to make a given string balanced by potentially deleting some characters. Specifically, a string is defined as balanced if it contains an equal number of '0's and '1's.

### Problem Explanation:
Given a string containing only '0's and '1's, our goal is to delete the minimum number of characters to make the number of '0's equal to the number of '1's.

### Approach to the Solution:
1. **Count the Characters**: First, we need to count the total number of '0's and '1's in the input string.
2. **Calculate Minimum Deletions**: The difference between the count of '0's and '1's will give us the number of deletions required to balance the string. Specifically, if `count0` is the number of '0's and `count1` is the number of '1's, the minimum deletions needed will be `|count0 - count1|`, which is the absolute difference between the two counts.

### Implementation in C++:
Here’s how the solution can be implemented in C++:

```cpp
#include <iostream>
#include <string>
#include <cstdlib> // For abs()

using namespace std;

class Solution {
public:
    int minimumDeletions(string s) {
        int count0 = 0;
        int count1 = 0;
        
        // Count the number of '0's and '1's
        for (char ch : s) {
            if (ch == '0') {
                count0++;
            } else if (ch == '1') {
                count1++;
            }
        }

        // The minimum deletions required to balance the string
        return abs(count0 - count1);
    }
};

int main() {
    Solution solution;
    string input = "1100";
    cout << "Minimum deletions: " << solution.minimumDeletions(input) << endl;
    return 0;
}
```

### Explanation of the Code:
1. **Counting Characters**: We iterate over each character in the string `s`. If we encounter '0', we increment `count0`, and if we encounter '1', we increment `count1`.
2. **Calculating the Result**: After counting, the result is simply the absolute difference between `count0` and `count1`.
3. **Main Function**: The main function demonstrates how to use the `minimumDeletions` function with an example. 

### Example Walk-through:
- For the input string "1100":
  - `count0` = 2 (for the two '0's)
  - `count1` = 2 (for the two '1's)
  - The absolute difference is `|2 - 2| = 0`. So, no deletions are needed.
  
- For the input string "101":
  - `count0` = 1
  - `count1` = 2
  - The absolute difference is `|1 - 2| = 1`. So, one deletion of either a '0' or a '1' is needed to make it balanced.

This approach runs in O(n) time complexity, where n is the length of the string, and it uses O(1) space for the counts. This makes it efficient for large strings.