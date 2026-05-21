# LeetCode Daily – 2026-05-21

## 🧠 Problem #3043 – **Find the Length of the Longest Common Prefix**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix)

---

### 📝 Problem Description

You are given two arrays with positive integers arr1 and arr2.

A prefix of a positive integer is an integer formed by one or more of its digits, starting from its leftmost digit. For example, 123 is a prefix of the integer 12345, while 234 is not.

A common prefix of two integers a and b is an integer c, such that c is a prefix of both a and b. For example, 5655359 and 56554 have common prefixes 565 and 5655 while 1223 and 43456 do not have a common prefix.

You need to find the length of the longest common prefix between all pairs of integers (x, y) such that x belongs to arr1 and y belongs to arr2.

Return the length of the longest common prefix among all pairs. If no common prefix exists among them, return 0.

 
Example 1:


Input: arr1 = [1,10,100], arr2 = [1000]
Output: 3
Explanation: There are 3 pairs (arr1[i], arr2[j]):
- The longest common prefix of (1, 1000) is 1.
- The longest common prefix of (10, 1000) is 10.
- The longest common prefix of (100, 1000) is 100.
The longest common prefix is 100 with a length of 3.


Example 2:


Input: arr1 = [1,2,3], arr2 = [4,4,4]
Output: 0
Explanation: There exists no common prefix for any pair (arr1[i], arr2[j]), hence we return 0.
Note that common prefixes between elements of the same array do not count.


 
Constraints:


	1 <= arr1.length, arr2.length <= 5 * 104
	1 <= arr1[i], arr2[i] <= 108

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The LeetCode problem "Find the Length of the Longest Common Prefix" asks us to find the length of the longest common prefix string amongst an array of strings.

### Problem Explanation
A common prefix is a sequence of characters that appear at the start of each string in an array of strings. The goal is to return the length of this common prefix.

### Example
Given an array of strings `["flower", "flow", "flight"]`, the common prefix is `"fl"`, which has a length of `2`.

If the input is `["dog", "racecar", "car"]`, there is no common prefix, and the return value should be `0`.

### Approach
1. **Edge Case**: If the input array is empty, return `0` since there can't be any common prefix.
2. **Initialization**: Start by assuming the first string in the array is the longest common prefix.
3. **Iterate**: Compare this prefix with each string in the array:
   - Keep trimming the prefix until it matches the start of the current string.
   - If at any point the prefix becomes empty, return `0` immediately since there is no common prefix.
4. **Result**: After checking all strings, the remaining prefix length is the answer.

### C++ Implementation
Here's how you can implement this logic in C++:

```cpp
#include <vector>
#include <string>
#include <iostream>

class Solution {
public:
    int longestCommonPrefix(std::vector<std::string>& strs) {
        if (strs.empty()) return 0; // Step 1: Check for empty input

        std::string prefix = strs[0]; // Initialize prefix with the first string

        for (int i = 1; i < strs.size(); ++i) { // Step 3: Iterate through the rest of the strings
            while (strs[i].find(prefix) != 0) { // Check if current string starts with prefix
                prefix = prefix.substr(0, prefix.length() - 1); // Trim the prefix
                if (prefix.empty()) return 0; // Step 4: No common prefix
            }
        }

        return prefix.length(); // Return the length of the common prefix
    }
};

// Sample test for demonstration
int main() {
    Solution solution;
    std::vector<std::string> input = {"flower", "flow", "flight"};
    int result = solution.longestCommonPrefix(input);
    std::cout << "Length of Longest Common Prefix: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code
- **Class and Method Definition**: We define a class `Solution` which contains the method `longestCommonPrefix`.
- **Edge Case Handling**: We check if the input vector `strs` is empty. If it is, we return `0`.
- **Prefix Initialization**: We initialize the `prefix` to the first string in the array.
- **Loop Through Strings**: We loop through each string starting from the second one:
  - We use a `while` loop to check if the current `prefix` is a prefix of the current string. This is done using `.find(prefix) != 0`, which checks if the prefix appears at the start of the string.
  - If it does not, we shorten the prefix by one character from the end using `substr`.
  - If the prefix becomes empty, we return `0` immediately.
- **Return Prefix Length**: After checking all strings, we return the length of the `prefix`.

### Complexity
- **Time Complexity**: O(S) where S is the sum of all characters in all strings. In the worst scenario, we may need to examine every character of every string to find the common prefix.
- **Space Complexity**: O(1). We use a constant amount of additional space aside from the input data.