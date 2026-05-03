# LeetCode Daily – 2026-05-03

## 🧠 Problem #796 – **Rotate String**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotate-string)

---

### 📝 Problem Description

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.


	For example, if s = &quot;abcde&quot;, then it will be &quot;bcdea&quot; after one shift.


 
Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:
Input: s = "abcde", goal = "abced"
Output: false

 
Constraints:


	1 <= s.length, goal.length <= 100
	s and goal consist of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Rotate String" from LeetCode can be described as follows:

### Problem Statement
Given two strings, `s` and `goal`, you need to determine if `goal` can be obtained by rotating `s` (a string is considered to be rotated if you move some characters from the front to the end of the string).

For example:
- Input: `s = "abcde"`, `goal = "cdeab"`
- Output: `true` because you can rotate `s` to get `goal`.

### Approach
1. **Concatenation Trick**: One way to determine if `goal` can be obtained by rotating `s` is to concatenate `s` with itself (i.e., `s + s`). This gives us all possible rotations of `s` with a string of a length of `2 * len(s)`.
2. **Substring Check**: Then, we can check if `goal` is a substring of this concatenated string. If it is, it means `goal` can be achieved by rotating `s`.

### Complexity
- Time Complexity: O(n), where n is the length of string `s`. This is because checking for a substring can be done in linear time.
- Space Complexity: O(n) for the concatenation.

### C++ Code

```cpp
#include <iostream>
#include <string>

class Solution {
public:
    bool rotateString(std::string s, std::string goal) {
        // First check if the lengths are equal
        if (s.length() != goal.length()) {
            return false;
        }
        
        // Concatenate s with itself
        std::string concatenated = s + s;
        
        // Check if goal is a substring of the concatenated string
        return concatenated.find(goal) != std::string::npos;
    }
};

// Example usage:
int main() {
    Solution solution;
    std::string s = "abcde";
    std::string goal = "cdeab";
    bool result = solution.rotateString(s, goal);
    std::cout << std::boolalpha << result << std::endl; // Outputs: true
    
    return 0;
}
```

### Explanation of the Code
- The code starts by checking if the lengths of `s` and `goal` are the same. If they are not, it immediately returns `false`.
- Next, it creates a new string `concatenated`, which is simply `s + s`.
- Then it uses `find()` method from the `string` class to see if `goal` exists as a substring in `concatenated`. 
- If `goal` is found, it means `goal` can be obtained by rotating `s`, so it returns `true`. If not, it returns `false`.

This approach is very neat and effective for the problem, that efficiently checks whether one string is a rotated version of another.