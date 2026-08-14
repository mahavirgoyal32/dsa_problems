# LeetCode Daily – 2026-08-14

## 🧠 Problem #3090 – **Maximum Length Substring With Two Occurrences**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences)

---

### 📝 Problem Description

Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.
 
Example 1:


Input: s = &quot;bcbbbcba&quot;

Output: 4

Explanation:
The following substring has a length of 4 and contains at most two occurrences of each character: &quot;bcbbbcba&quot;.

Example 2:


Input: s = &quot;aaaa&quot;

Output: 2

Explanation:
The following substring has a length of 2 and contains at most two occurrences of each character: &quot;aaaa&quot;.

 
Constraints:


	2 <= s.length <= 100
	s consists only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Length Substring With Two Occurrences" asks us to find the length of the longest substring that contains exactly two occurrences of a given character. A substring is defined as a contiguous sequence of characters within the string.

## Problem Statement
Given a string `s`, we want to find the maximum length of a substring that contains exactly two occurrences of any character in that string.

## Explanation
1. **Input/Output**:
   - Input: A string `s`.
   - Output: An integer representing the maximum length of a substring containing exactly two occurrences of any character.

2. **Approach**:
   - We can use a sliding window approach characterized by two pointers: `start` and `end` to track the current substring.
   - We will maintain a hash map (or dictionary) to count the occurrences of each character in the current window.
   - As we expand the `end` pointer, we will update the count of characters in our hash map.
   - Whenever the count of any character exceeds 2, we need to shrink the window from the left by moving the `start` pointer to the right until all characters have at most 2 occurrences again.
   - Throughout this process, if we find a character with exactly 2 occurrences, we calculate the length of the window and keep track of the maximum length observed.

3. **Steps**:
   - Initialize a hash map to count character occurrences.
   - Initialize pointers `start` and `end` to 0 and a variable `maxLength` to keep track of the maximum length found.
   - Loop through the string until `end` reaches the end of the string.
   - Update the character count for `s[end]`.
   - Check if there is any character that has more than 2 occurrences:
     - If so, increment the `start` pointer until all characters have at most 2 occurrences.
   - If we have a character with exactly 2 occurrences, compare the current window size with `maxLength` and update accordingly.

### C++ Code
Here is the implementation of the above approach in C++:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <algorithm>

using namespace std;

int maxLengthSubstringWithTwoOccurrences(const string& s) {
    unordered_map<char, int> charCount;
    int maxLength = 0;
    int start = 0;

    for (int end = 0; end < s.length(); end++) {
        charCount[s[end]]++;
        
        // While there's any character with more than 2 occurrences
        while (charCount[s[end]] > 2) {
            charCount[s[start]]--;
            if (charCount[s[start]] == 0) {
                charCount.erase(s[start]);
            }
            start++;
        }

        // Check if we have a character with exactly 2 occurrences
        if (charCount[s[end]] == 2) {
            maxLength = max(maxLength, end - start + 1);
        }
    }
    
    return maxLength;
}

int main() {
    string s = "aabbccaa";
    int result = maxLengthSubstringWithTwoOccurrences(s);
    cout << "The maximum length of substring with two occurrences: " << result << endl;
    return 0;
}
```

### Explanation of the Code:
- We use an `unordered_map` called `charCount` to store the frequency of each character in the current window.
- The `for` loop moves the `end` pointer through the string.
- Inside the loop, we increase the count of the current character and check if any character exceeds the count of 2.
- If so, we move the `start` pointer forward to make sure our substring has no characters exceeding the count of 2.
- If there is any character with exactly 2 occurrences, we calculate the current window size and potentially update the `maxLength`.
- Finally, we return the maximum length found.

This simple yet efficient approach ensures we efficiently compute the maximum length substring with exactly two occurrences of a character while maintaining linear time complexity, O(n), with respect to the size of the string.