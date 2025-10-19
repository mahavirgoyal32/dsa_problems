# LeetCode Daily – 2025-10-19

## 🧠 Problem #1625 – **Lexicographically Smallest String After Applying Operations**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations)

---

### 📝 Problem Description

You are given a string s of even length consisting of digits from 0 to 9, and two integers a and b.

You can apply either of the following two operations any number of times and in any order on s:


	Add a to all odd indices of s (0-indexed). Digits post 9 are cycled back to 0. For example, if s = &quot;3456&quot; and a = 5, s becomes &quot;3951&quot;.
	Rotate s to the right by b positions. For example, if s = &quot;3456&quot; and b = 1, s becomes &quot;6345&quot;.


Return the lexicographically smallest string you can obtain by applying the above operations any number of times on s.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, &quot;0158&quot; is lexicographically smaller than &quot;0190&quot; because the first position they differ is at the third letter, and &#39;5&#39; comes before &#39;9&#39;.

 
Example 1:


Input: s = &quot;5525&quot;, a = 9, b = 2
Output: &quot;2050&quot;
Explanation: We can apply the following operations:
Start:  &quot;5525&quot;
Rotate: &quot;2555&quot;
Add:    &quot;2454&quot;
Add:    &quot;2353&quot;
Rotate: &quot;5323&quot;
Add:    &quot;5222&quot;
Add:    &quot;5121&quot;
Rotate: &quot;2151&quot;
Add:    &quot;2050&quot;​​​​​
There is no way to obtain a string that is lexicographically smaller than &quot;2050&quot;.


Example 2:


Input: s = &quot;74&quot;, a = 5, b = 1
Output: &quot;24&quot;
Explanation: We can apply the following operations:
Start:  &quot;74&quot;
Rotate: &quot;47&quot;
​​​​​​​Add:    &quot;42&quot;
​​​​​​​Rotate: &quot;24&quot;​​​​​​​​​​​​
There is no way to obtain a string that is lexicographically smaller than &quot;24&quot;.


Example 3:


Input: s = &quot;0011&quot;, a = 4, b = 2
Output: &quot;0011&quot;
Explanation: There are no sequence of operations that will give us a lexicographically smaller string than &quot;0011&quot;.


 
Constraints:


	2 <= s.length <= 100
	s.length is even.
	s consists of digits from 0 to 9 only.
	1 <= a <= 9
	1 <= b <= s.length - 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's dive into the problem **"Lexicographically Smallest String After Applying Operations"**. The goal is to transform a given string by applying a sequence of operations and finding the lexicographically smallest string that can be formed by these operations.

### Problem Explanation

You are given a string `s` and an array of operations, where each operation is defined by a pair of indices `(start, end)`. For each operation, you can increment all the characters from `s[start]` to `s[end]` by 1 (with wrapping from 'z' to 'a').

The task is to determine the lexicographically smallest string possible by applying any combination of these operations.

### Steps to Solve the Problem

1. **Understanding Modifications**: Each character can be incremented multiple times (which can be visualized as a range update). For any index, we need to determine how many times it has been incremented due to the operations.

2. **Difference Array Technique**: 
   - Use a difference array to efficiently record the increments.
   - When an operation starts at `start` and ends at `end`, you will increment the value at `start` and decrement the value at `end + 1` in a difference array.

3. **Prefix Sum**: After processing all operations with the difference array, compute the prefix sum to figure out how many times each character should be incremented.

4. **Character Increment**: For each character in the string, apply the total increments, taking care to wrap around using modulo with 26 (the number of letters in the alphabet).

5. **Form the Result**: Construct the resulting string with the modified characters.

### C++ Implementation

Here’s how we can implement the above logic in C++:

```cpp
#include <vector>
#include <string>

class Solution {
public:
    std::string lexSmallestString(std::string s, std::vector<std::vector<int>>& operations) {
        int n = s.length();
        std::vector<int> increment(n + 1, 0); // Difference array

        // Fill the difference array based on operations
        for (const auto& op : operations) {
            int start = op[0];
            int end = op[1];
            increment[start] += 1; // Increment at start
            if (end + 1 < n) {
                increment[end + 1] -= 1; // Decrement after end
            }
        }

        // Apply prefix sum to get how many increments per character
        int currentIncrement = 0;
        for (int i = 0; i < n; ++i) {
            currentIncrement += increment[i];
            // Calculate the new character with wrap-around
            s[i] = 'a' + (s[i] - 'a' + currentIncrement) % 26;
        }

        return s;
    }
};

// Example usage:
// Solution solution;
// std::string result = solution.lexSmallestString("abc", {{0, 1}, {1, 2}});
```

### Explanation of the Code:
1. **Input Handling**: The function accepts a string and a vector of operations.
2. **Difference Array**: We initialize a difference array `increment` of size `n+1` to track how many times to increment each character based on the operations.
3. **Processing Operations**: For each operation, we mark the start and end in the difference array.
4. **Prefix Sum Calculation**: We iterate through the string and calculate how many total increments affect each character using the prefix sum of the difference array.
5. **Character Update**: For each character in `s`, we compute the new character after applying all increments, ensuring we handle wrapping using `% 26`.
6. **Return Result**: Finally, the modified string is returned.

### Complexity
- **Time Complexity**: O(n + k) where n is the length of the string and k is the number of operations (bound by n).
- **Space Complexity**: O(n) for the difference array.

This solution is efficient and utilizes the concept of range updates effectively!