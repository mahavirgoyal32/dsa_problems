# LeetCode Daily – 2026-07-28

## 🧠 Problem #3517 – **Smallest Palindromic Rearrangement I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-palindromic-rearrangement-i)

---

### 📝 Problem Description

You are given a palindromic string s.

Return the lexicographically smallest palindromic permutation of s.

 
Example 1:


Input: s = &quot;z&quot;

Output: &quot;z&quot;

Explanation:

A string of only one character is already the lexicographically smallest palindrome.


Example 2:


Input: s = &quot;babab&quot;

Output: &quot;abbba&quot;

Explanation:

Rearranging &quot;babab&quot; &rarr; &quot;abbba&quot; gives the smallest lexicographic palindrome.


Example 3:


Input: s = &quot;daccad&quot;

Output: &quot;acddca&quot;

Explanation:

Rearranging &quot;daccad&quot; &rarr; &quot;acddca&quot; gives the smallest lexicographic palindrome.


 
Constraints:


	1 <= s.length <= 105
	s consists of lowercase English letters.
	s is guaranteed to be palindromic.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem "Smallest Palindromic Rearrangement I".

## Problem Explanation

Given a string consisting only of lowercase letters, we are to find and return the lexicographically smallest palindrome that can be formed by rearranging the characters of the string.

To form a palindrome:
- If the string has an odd length, only one character can appear an odd number of times (this character will be in the center of the palindrome).
- If the string has an even length, all characters must appear an even number of times.

## Steps to Solve the Problem

1. **Count Frequency of Characters:** Count the occurrence of each character using an array.
2. **Identify the Palindrome Structure:**
   - For characters with even counts, they will take half of their counts and be mirrored in the palindrome.
   - For characters with odd counts, keep track of the character that will occupy the center (if any), and also use half of its count for building the palindrome.
3. **Construct the First Half of the Palindrome:** Sort the characters and construct the first half of the palindrome.
4. **Build the Full Palindrome:** The full palindrome is constructed by mirroring the first half and adding the center character (if it exists) in the middle.
5. **Return the Result:** Return the constructed palindrome.

### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

std::string smallestPalindromicRearrangement(std::string s) {
    std::vector<int> charCount(26, 0);
    
    // Step 1: Count frequency of each character
    for (char c : s) {
        charCount[c - 'a']++;
    }
    
    std::string halfPalin = "";
    char centerChar = '\0';
    
    // Step 2: Build the first half of the palindrome
    for (char i = 'a'; i <= 'z'; ++i) {
        if (charCount[i - 'a'] % 2 != 0) {
            // We can only use one of this character in the center if it has an odd count
            if (centerChar == '\0' || i < centerChar) {
                if (centerChar != '\0') {
                    // If we have a previous center char, decrement its count
                    charCount[centerChar - 'a']--;
                }
                centerChar = i; // Assign new center character
            } else {
                charCount[i - 'a']--; // Leave one for center
            }
        }
        // Append half of the even characters
        halfPalin += std::string(charCount[i - 'a'] / 2, i);
    }
    
    // Step 3: Sort the half string to ensure it's the lexicographically smallest.
    std::string firstHalf = halfPalin;
    std::sort(firstHalf.begin(), firstHalf.end());
    
    // Step 4: Construct the full palindrome
    std::string result = firstHalf;
    if (centerChar != '\0') {
        result += centerChar; // Add the center character if exists
    }
    std::reverse(firstHalf.begin(), firstHalf.end()); // Create the second half
    result += firstHalf;

    return result; // Return the palindrome
}

int main() {
    std::string input = "aabb";
    std::string result = smallestPalindromicRearrangement(input);
    std::cout << "Smallest Palindromic Rearrangement: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code:

1. **Character Frequency Counting:**
   - We create a vector `charCount` of size `26` to count characters from 'a' to 'z'.
   - We iterate through the string, incrementing the count for each character.

2. **Building the Front Half:**
   - We iterate over each character (from 'a' to 'z') and check how many times it occurs.
   - If a character has an odd count, we can use it as a center character if we don’t have one already or if it’s lexicographically smaller than the current center character.
   - We add half of the counts of all characters (using integer division).

3. **Constructing the Full Palindrome:**
   - We sort the first half to maintain lexicographical order.
   - The final palindrome is constructed by concatenating the first half, the center character (if it exists), and the reversed first half.

This approach is efficient, and the resultant palindrome is the smallest one possible when rearranged from the input string.