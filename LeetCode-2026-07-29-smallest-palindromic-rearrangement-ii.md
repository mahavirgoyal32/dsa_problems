# LeetCode Daily – 2026-07-29

## 🧠 Problem #3518 – **Smallest Palindromic Rearrangement II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-palindromic-rearrangement-ii)

---

### 📝 Problem Description

You are given a palindromic string s and an integer k.

Return the k-th lexicographically smallest palindromic permutation of s. If there are fewer than k distinct palindromic permutations, return an empty string.

Note: Different rearrangements that yield the same palindromic string are considered identical and are counted once.

 
Example 1:


Input: s = &quot;abba&quot;, k = 2

Output: &quot;baab&quot;

Explanation:


	The two distinct palindromic rearrangements of &quot;abba&quot; are &quot;abba&quot; and &quot;baab&quot;.
	Lexicographically, &quot;abba&quot; comes before &quot;baab&quot;. Since k = 2, the output is &quot;baab&quot;.



Example 2:


Input: s = &quot;aa&quot;, k = 2

Output: &quot;&quot;

Explanation:


	There is only one palindromic rearrangement: &quot;aa&quot;.
	The output is an empty string since k = 2 exceeds the number of possible rearrangements.



Example 3:


Input: s = &quot;bacab&quot;, k = 1

Output: &quot;abcba&quot;

Explanation:


	The two distinct palindromic rearrangements of &quot;bacab&quot; are &quot;abcba&quot; and &quot;bacab&quot;.
	Lexicographically, &quot;abcba&quot; comes before &quot;bacab&quot;. Since k = 1, the output is &quot;abcba&quot;.



 
Constraints:


	1 <= s.length <= 104
	s consists of lowercase English letters.
	s is guaranteed to be palindromic.
	1 <= k <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let’s solve the LeetCode problem titled "Smallest Palindromic Rearrangement II".

### Problem Understanding:

The problem requires us to find the smallest lexicographically palindromic string that can be formed by rearranging the given string `s`. A palindrome reads the same forwards and backwards, and for a string to be rearranged into a palindrome, certain conditions regarding the frequency of characters must be met.

### Key Considerations:

1. **Character Frequency**: 
   - For a string of even length, all characters must appear an even number of times.
   - For a string of odd length, one character can appear an odd number of times while all other characters must appear an even number of times.

2. **Construction of the Palindrome**:
   - To construct the smallest palindrome lexicographically, we would ideally want to place the smallest characters at the beginning and end of the constructed string.

3. **Edge Cases**:
   - The string can have characters with large frequencies; we need to handle them carefully to balance the characters into the palindrome format.

### C++ Solution:

Here’s how you can implement the solution in C++:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

string smallestPalindromicRearrangement(string s) {
    unordered_map<char, int> charCount;
    
    // Count frequencies of each character
    for (char c : s) {
        charCount[c]++;
    }
   
    // Prepare parts for the palindrome
    string leftPart = "";
    string middlePart = "";

    // Sort characters to maintain lexicographical order
    vector<char> chars;
    for (const auto& pair : charCount) {
        chars.push_back(pair.first);
    }
    sort(chars.begin(), chars.end());

    // Build the left part and middle part of the palindrome
    for (char c : chars) {
        int count = charCount[c];
        // Add even counts to leftPart
        leftPart += string(count / 2, c);
        // If an odd count exists, it could be a candidate for middle
        if (count % 2 == 1) {
            if (middlePart.empty() || c < middlePart[0]) {
                middlePart = string(1, c); // only one character can go in the middle
            }
        }
    }
    
    // Create the palindrome
    string rightPart = leftPart;
    reverse(rightPart.begin(), rightPart.end());
    string palindrome = leftPart + middlePart + rightPart;

    // Edge case: If palindrome is empty or does not start with '0' manage that:
    if (palindrome.empty()) return "0"; // If palindrome is empty, return 0 as per constraints

    return palindrome;
}

int main() {
    string s = "aaaabbbb"; // Test input
    cout << smallestPalindromicRearrangement(s) << endl; // Output the result
    return 0;
}
```

### Explanation of Code:

1. **Counting Frequencies**:
   - We use a hash map (`unordered_map`) to count how many times each character appears in the input string.

2. **Building the Palindrome**:
   - We first create a string for the left half of the palindrome (`leftPart`) where we store half the frequency of each character.
   - If a character appears an odd number of times, it can potentially be placed in the middle of the palindrome (`middlePart`).

3. **Constructing the Final Palindrome**:
   - The right half of the palindrome is simply the reverse of the left half.
   - Finally, we concatenate the left half, middle part (if exists), and the right half to form the complete palindrome.

4. **Lexicographical Consideration**:
   - By sorting the unique characters before constructing the palindrome, we ensure that we are forming the smallest lexicographical arrangement possible.

### Conclusion:
This solution effectively builds the smallest palindromic rearrangement of the input string, abiding by the properties of even and odd character counts, and ensuring the result is in lexicographical order.