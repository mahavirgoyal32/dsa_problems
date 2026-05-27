# LeetCode Daily – 2026-05-27

## 🧠 Problem #3121 – **Count the Number of Special Characters II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-the-number-of-special-characters-ii)

---

### 📝 Problem Description

You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

Return the number of special letters in word.

 
Example 1:


Input: word = &quot;aaAbcBC&quot;

Output: 3

Explanation:

The special characters are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.


Example 2:


Input: word = &quot;abc&quot;

Output: 0

Explanation:

There are no special characters in word.


Example 3:


Input: word = &quot;AbBCab&quot;

Output: 0

Explanation:

There are no special characters in word.


 
Constraints:


	1 <= word.length <= 2 * 105
	word consists of only lowercase and uppercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Count the Number of Special Characters II," let's break down the requirements and then implement a solution in C++. 

## Problem Explanation

You are given a string and you need to count the number of special characters in it. According to the problem statement, a **special character** is defined as any character that is not a letter (uppercase or lowercase) or a digit (0-9). 

### Steps to Solve the Problem

1. **Character Classification**: We need to determine whether each character in the string is a letter or a digit.
2. **Counting Special Characters**: We will maintain a count of characters that do not fit into the two categories mentioned above.

### Implementation

With this understanding, we can start coding the solution in C++. Here is how we can achieve this:

```cpp
#include <iostream>
#include <string>

class Solution {
public:
    int countSpecialCharacters(const std::string& s) {
        int specialCount = 0;

        for (char c : s) {
            // Check if the character is not a letter or digit
            if (!isalnum(c)) {  // isalnum checks if the character is alphanumeric
                specialCount++;
            }
        }
        return specialCount;
    }
};

// Example usage
int main() {
    Solution solution;
    std::string input = "abc123!@#^&*()_+";
    int result = solution.countSpecialCharacters(input);
    std::cout << "Number of special characters: " << result << std::endl; // Expected output: 10
    return 0;
}
```

### Explanation of the Code

1. **Function Definition**: We define a function `countSpecialCharacters` that takes a `const std::string&` as an argument for efficiency (to avoid copying the string).
   
2. **Loop Through Characters**: We iterate over each character in the string using a range-based for loop.

3. **Character Check**: For each character `c`, we use the `isalnum(c)` function:
   - `isalnum(c)` returns `true` if `c` is either a letter or a digit.
   - We check if `!isalnum(c)`, which means `c` is neither a letter nor a digit (i.e., it's a special character).

4. **Count Special Characters**: If the character is a special character, we increment our `specialCount`.

5. **Return Count**: After looping through all characters, we return the `specialCount`.

### Testing the Solution

In the `main()` function, we instantiate the `Solution` class and call `countSpecialCharacters` with a sample input string to display the count of special characters. The expected output of the example provided in the `main` function is `10`, corresponding to the ten special characters in the string.

This solution effectively counts special characters in a string and runs in O(n) time complexity, where n is the length of the string, making it efficient even for the upper limits.