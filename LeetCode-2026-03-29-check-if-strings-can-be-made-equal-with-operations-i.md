# LeetCode Daily – 2026-03-29

## 🧠 Problem #2839 – **Check if Strings Can be Made Equal With Operations I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i)

---

### 📝 Problem Description

You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:


	Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.


Return true if you can make the strings s1 and s2 equal, and false otherwise.

 
Example 1:


Input: s1 = &quot;abcd&quot;, s2 = &quot;cdab&quot;
Output: true
Explanation: We can do the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = &quot;cbad&quot;.
- Choose the indices i = 1, j = 3. The resulting string is s1 = &quot;cdab&quot; = s2.


Example 2:


Input: s1 = &quot;abcd&quot;, s2 = &quot;dacb&quot;
Output: false
Explanation: It is not possible to make the two strings equal.


 
Constraints:


	s1.length == s2.length == 4
	s1 and s2 consist only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Check if Strings Can be Made Equal With Operations I" asks us whether two strings can be made equal by performing a certain operation. The operation allows you to perform swaps of characters between the two strings at the same index. 

To break it down, given two strings `s1` and `s2`, we want to determine if there exists at least one character that has the same frequency in both strings. If there is at least one character that appears in both strings, we can always rearrange the remaining characters to match the two strings via allowed swaps.

### Steps to Solve:

1. **Count the Frequency**: We will count the frequency of each character in both strings using a hash map (or array since there are only 26 lowercase letters).

2. **Check for Common Characters**: After counting the frequencies, check if there is any character that appears in both strings (i.e., a character whose frequency is greater than zero in both frequency counters).

3. **Return the Result**: If we find any common character, we return `true`. Otherwise, we return `false`.

### C++ Solution

Here's how this can be implemented in C++:

```cpp
#include <iostream>
#include <vector>
#include <string>

bool canBeEqual(std::string s1, std::string s2) {
    // If both strings are not of the same length, they cannot be made equal
    if (s1.length() != s2.length()) {
        return false;
    }

    // Frequency arrays for the characters in the strings
    std::vector<int> freq1(26, 0);
    std::vector<int> freq2(26, 0);

    // Count the frequency of each character in s1
    for (char ch : s1) {
        freq1[ch - 'a']++;
    }

    // Count the frequency of each character in s2
    for (char ch : s2) {
        freq2[ch - 'a']++;
    }

    // Check if there is at least one common character with positive frequency
    for (int i = 0; i < 26; i++) {
        if (freq1[i] > 0 && freq2[i] > 0) {
            return true; // Found a common character
        }
    }

    return false; // No common character found
}

// Example usage
int main() {
    std::string s1 = "abc";
    std::string s2 = "bca";
    std::cout << std::boolalpha << canBeEqual(s1, s2) << std::endl; // Output: true

    s1 = "abc";
    s2 = "def";
    std::cout << std::boolalpha << canBeEqual(s1, s2) << std::endl; // Output: false

    return 0;
}
```

### Explanation of the Code:

1. **Input Check**: First, we check if the strings `s1` and `s2` are of the same length. If they are not, they cannot be made equal, so we return `false`.

2. **Frequency Counting**: We initialize two vectors `freq1` and `freq2` of size 26 (for letters `a` to `z`). We iterate through each character in `s1` and `s2`, incrementing the corresponding index in the frequency arrays.

3. **Common Character Check**: We then iterate through the frequency arrays. If we find any index `i` where both `freq1[i]` and `freq2[i]` are greater than zero, it indicates that the corresponding character ('a' + i) is found in both `s1` and `s2`. If such a character exists, we return `true`.

4. **Result**: If we finish checking all characters and don't find any common ones, we return `false`.

This approach is efficient with a time complexity of O(n), where n is the length of the strings, since we only make a few passes over the strings. The space complexity is O(1) in terms of character counting since we use fixed-size arrays.