# LeetCode Daily – 2026-08-26

## 🧠 Problem #2904 – **Shortest and Lexicographically Smallest Beautiful String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string)

---

### 📝 Problem Description

You are given a binary string s and a positive integer k.

A substring of s is beautiful if the number of 1&#39;s in it is exactly k.

Let len be the length of the shortest beautiful substring.

Return the lexicographically smallest beautiful substring of string s with length equal to len. If s doesn&#39;t contain a beautiful substring, return an empty string.

A string a is lexicographically larger than a string b (of the same length) if in the first position where a and b differ, a has a character strictly larger than the corresponding character in b.


	For example, &quot;abcd&quot; is lexicographically larger than &quot;abcc&quot; because the first position they differ is at the fourth character, and d is greater than c.


 
Example 1:


Input: s = &quot;100011001&quot;, k = 3
Output: &quot;11001&quot;
Explanation: There are 7 beautiful substrings in this example:
1. The substring &quot;100011001&quot;.
2. The substring &quot;100011001&quot;.
3. The substring &quot;100011001&quot;.
4. The substring &quot;100011001&quot;.
5. The substring &quot;100011001&quot;.
6. The substring &quot;100011001&quot;.
7. The substring &quot;100011001&quot;.
The length of the shortest beautiful substring is 5.
The lexicographically smallest beautiful substring with length 5 is the substring &quot;11001&quot;.


Example 2:


Input: s = &quot;1011&quot;, k = 2
Output: &quot;11&quot;
Explanation: There are 3 beautiful substrings in this example:
1. The substring &quot;1011&quot;.
2. The substring &quot;1011&quot;.
3. The substring &quot;1011&quot;.
The length of the shortest beautiful substring is 2.
The lexicographically smallest beautiful substring with length 2 is the substring &quot;11&quot;.


Example 3:


Input: s = &quot;000&quot;, k = 1
Output: &quot;&quot;
Explanation: There are no beautiful substrings in this example.


 
Constraints:


	1 <= s.length <= 100
	1 <= k <= s.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem titled "Shortest and Lexicographically Smallest Beautiful String" involves generating a beautiful string of a given length `n` consisting of letters 'a', 'b', and 'c'. The constraints for the string are that it does not contain three consecutive characters that are the same and that no two adjacent characters are the same.

### Problem Breakdown

1. **Requirements**:
   - The string must be of length `n`.
   - It must use characters from the set {'a', 'b', 'c'}.
   - It cannot have three consecutive identical characters (e.g., "aaa", "bbb", "ccc").
   - It cannot have two adjacent identical characters (e.g., "aa", "bb", "cc").

2. **Outputs**:
   - Return the lexicographically smallest string that meets the above constraints.
   - If no such string can be constructed, return an empty string.

### Strategy to Solve the Problem

1. **Greedy Construction**: Start building the string character by character from a list of available characters ['a', 'b', 'c']. Always pick the smallest valid character.
2. **Avoid Violations**: Ensure that the last added character is not the same as the current or the previous characters, to avoid violating the rules.
3. **Backtrack if Necessary**: If a character cannot be added (due to constraints), you might need to backtrack to the previous character and try the next possible character.

### C++ Implementation

Here’s the code that implements the above logic:

```cpp
#include <iostream>
#include <string>

class Solution {
public:
    std::string getSmallestString(int n) {
        std::string result(n, ' '); // Initialize string of length n
        generateString(result, n, 0);
        return result;
    }
  
private:
    bool generateString(std::string& s, int n, int index) {
        // Base case: if we have filled up the string
        if (index == n) {
            return true;
        }

        // Try to place 'a', 'b', or 'c' at the current index
        for (char ch = 'a'; ch <= 'c'; ++ch) {
            // Check the last two characters (to avoid identical adjacent characters)
            if (index >= 1 && s[index - 1] == ch) continue; // Same as previous
            if (index >= 2 && s[index - 2] == ch) continue; // Same as second last
            
            // Place the character
            s[index] = ch;
            // Recursively fill the next character
            if (generateString(s, n, index + 1)) {
                return true; // If it succeeded, we return
            }
            // Reset character to ' ' (not necessary but for clarity)
            s[index] = ' ';
        }
        
        return false; // If no character could be placed, return false
    }
};

int main() {
    Solution solution;
    int n;
    std::cout << "Enter the desired length of the string: ";
    std::cin >> n;
    std::string result = solution.getSmallestString(n);
    std::cout << "The lexicographically smallest beautiful string of length " << n << ": " << result << std::endl;
    return 0;
}
```

### Explanation of the Code

1. **Data Structure**:
   - Used a `std::string` to store the result, initialized with spaces to easily modify it.

2. **Recursive Function (`generateString`)**:
   - If the string is already filled (`index == n`), return true (success).
   - Iterate over characters 'a', 'b', and 'c', checking for adjacency and triplicity constraints.
   - If a character can be placed validly, place it and attempt to fill the next position recursively.
   - If filling fails for all options at a certain index, return false.

3. **Main Function**:
   - Reads the length `n` and invokes the solution method to find and print the resulting string.

### Conclusion

This approach provides an efficient and clear method to generate the desired beautiful string by employing a backtracking mechanism. The greedy choice of selecting the smallest character first guarantees that if a solution exists, it will be lexicographically minimal.