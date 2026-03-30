# LeetCode Daily – 2026-03-30

## 🧠 Problem #2840 – **Check if Strings Can be Made Equal With Operations II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii)

---

### 📝 Problem Description

You are given two strings s1 and s2, both of length n, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:


	Choose any two indices i and j such that i < j and the difference j - i is even, then swap the two characters at those indices in the string.


Return true if you can make the strings s1 and s2 equal, and false otherwise.

 
Example 1:


Input: s1 = &quot;abcdba&quot;, s2 = &quot;cabdab&quot;
Output: true
Explanation: We can apply the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = &quot;cbadba&quot;.
- Choose the indices i = 2, j = 4. The resulting string is s1 = &quot;cbbdaa&quot;.
- Choose the indices i = 1, j = 5. The resulting string is s1 = &quot;cabdab&quot; = s2.


Example 2:


Input: s1 = &quot;abe&quot;, s2 = &quot;bea&quot;
Output: false
Explanation: It is not possible to make the two strings equal.


 
Constraints:


	n == s1.length == s2.length
	1 <= n <= 105
	s1 and s2 consist only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Check if Strings Can be Made Equal With Operations II" can be summarized as follows:

Given two strings `s` and `t`, you are allowed to perform the following operations:

1. Reverse any substring of either string.
2. Swap any two characters in either string.

The task is to determine whether you can transform string `s` into string `t` using the above operations.

### Key Observations:
- The ability to reverse any substring means that the order of characters is flexible; effectively, we can permute the characters.
- The ability to swap characters allows for freely moving characters around.

With this understanding, the strings can be equal if:
1. They contain the same characters with the same frequency, i.e., they are anagrams of each other.
2. Furthermore, since we can also reverse substrings, we can transform one into the other as long as they have the same characters.

### Approach:
1. First, check if both strings `s` and `t` have the same length. If not, return false.
2. Count the frequency of each character in both strings using an array of size 26 (for the 26 lowercase English letters).
3. Compare the frequency arrays. If they are equal, return true; otherwise, return false.

### C++ Implementation:
Here is the implementation of the above approach in C++:

```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

bool canBeEqual(string s, string t) {
    if (s.length() != t.length()) {
        return false; // If lengths vary, they can't be made equal
    }
    
    // Initialize a frequency array for both strings
    vector<int> count(26, 0);
    
    // Count frequency of each character in string s
    for (char c : s) {
        count[c - 'a']++;
    }
    
    // Subtract the frequency of each character in string t
    for (char c : t) {
        count[c - 'a']--;
    }
    
    // Check if all counts are zero, indicating same characters in same frequency
    for (int cnt : count) {
        if (cnt != 0) {
            return false; // Not all counts are zero, hence not equal
        }
    }
    
    return true; // They can be made equal
}

int main() {
    string s = "abcde";
    string t = "edcba";
    
    if (canBeEqual(s, t)) {
        cout << "The strings can be made equal." << endl;
    } else {
        cout << "The strings cannot be made equal." << endl;
    }
    
    return 0;
}
```

### Explanation of the Code:
- We define a function `canBeEqual` that takes two strings `s` and `t`.
- We first check if the lengths of `s` and `t` are the same; if not, we return `false`.
- We create a frequency count array of size 26 (to represent each letter from 'a' to 'z').
- We iterate through `s` to increment the count for each character and then loop through `t` to decrement the count for each character.
- Finally, we check if all entries in the frequency array are zero. If they are, it means both strings have the same characters in the same frequencies, and thus can be made equal. Otherwise, we return `false`.

The time complexity of this approach is O(n) where n is the length of the strings, and the space complexity is O(1), since the frequency array size is constant (26).