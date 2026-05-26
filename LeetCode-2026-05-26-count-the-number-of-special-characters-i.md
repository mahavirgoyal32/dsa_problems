# LeetCode Daily – 2026-05-26

## 🧠 Problem #3120 – **Count the Number of Special Characters I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-the-number-of-special-characters-i)

---

### 📝 Problem Description

You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

Return the number of special letters in word.

 
Example 1:


Input: word = &quot;aaAbcBC&quot;

Output: 3

Explanation:

The special characters in word are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.


Example 2:


Input: word = &quot;abc&quot;

Output: 0

Explanation:

No character in word appears in uppercase.


Example 3:


Input: word = &quot;abBCab&quot;

Output: 1

Explanation:

The only special character in word is &#39;b&#39;.


 
Constraints:


	1 <= word.length <= 50
	word consists of only lowercase and uppercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Count the Number of Special Characters I" requires us to count the special characters in a given string. According to the problem, a special character is defined as any character that is not a letter or a digit.

### Problem Breakdown

1. **Input**: A string `s`.
2. **Output**: An integer representing the number of special characters in the string.
3. **Special Characters**: They are any characters that fall outside of the ranges `a-z`, `A-Z`, and `0-9`.

### Approach

To solve this problem:
- We will iterate through each character in the string.
- For each character, we will check if it is not a letter (using the `isalpha` function) and not a digit (using the `isdigit` function).
- If it is neither, we will count it as a special character.
- Finally, we will return the count.

### Implementation in C++

Here is how you can implement this in C++:

```cpp
#include <iostream>
#include <string>
#include <cctype> // For isalpha() and isdigit()

int countSpecialCharacters(const std::string& s) {
    int specialCount = 0; // Initialize special characters count to 0

    // Iterate over each character in the string
    for (char c : s) {
        // Check if the character is not an alphabet or digit
        if (!std::isalpha(c) && !std::isdigit(c)) {
            specialCount++; // Increment our special characters count
        }
    }

    return specialCount; // Return the total count
}

// Main function to demonstrate the usage
int main() {
    std::string input = "Hello, World! 123 #$%&"; // Example input
    int result = countSpecialCharacters(input);
    std::cout << "Number of special characters: " << result << std::endl; // Output the result
    return 0;
}
```

### Explanation of the Code

1. **Headers**: We include headers `<iostream>` for input-output operations, `<string>` for using the string data type, and `<cctype>` for character functions like `isalpha()` and `isdigit()`.
2. **Function Definition**: The `countSpecialCharacters` function takes a string `s` as input.
3. **Variable Initialization**: We initialize an integer `specialCount` to zero. This will store our count of special characters.
4. **Loop Through Characters**: We use a range-based for loop to iterate over each character `c` in the string `s`.
5. **Check Conditions**: For each character, we check if it is neither a letter nor a digit using the `isalpha()` and `isdigit()` functions. If true, we increment the `specialCount`.
6. **Return the Count**: Finally, we return the total count of special characters.
7. **Main Function**: In the `main()` function, we provide an example input, call our counting function, and print the result.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the length of the string. We traverse the string once.
- **Space Complexity**: O(1), as we are using a constant amount of extra space.

This solution effectively counts the special characters in the provided string and should work efficiently for the constraints typically found in competitive programming challenges.