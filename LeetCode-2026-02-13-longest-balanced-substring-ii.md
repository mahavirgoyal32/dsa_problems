# LeetCode Daily – 2026-02-13

## 🧠 Problem #3714 – **Longest Balanced Substring II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-balanced-substring-ii)

---

### 📝 Problem Description

You are given a string s consisting only of the characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.

A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

Return the length of the longest balanced substring of s.

 
Example 1:


Input: s = &quot;abbac&quot;

Output: 4

Explanation:

The longest balanced substring is &quot;abba&quot; because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 2 times.


Example 2:


Input: s = &quot;aabcc&quot;

Output: 3

Explanation:

The longest balanced substring is &quot;abc&quot; because all distinct characters &#39;a&#39;, &#39;b&#39; and &#39;c&#39; each appear exactly 1 time.


Example 3:


Input: s = &quot;aba&quot;

Output: 2

Explanation:

One of the longest balanced substrings is &quot;ab&quot; because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 1 time. Another longest balanced substring is &quot;ba&quot;.


 
Constraints:


	1 <= s.length <= 105
	s contains only the characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Longest Balanced Substring II" on LeetCode requires us to find the length of the longest substring that contains an equal number of '0's and '1's. A substring is defined as a contiguous sequence of characters within a string.

### Explanation of the Solution

To solve the problem, we can utilize a hashmap (unordered_map in C++) to keep track of the cumulative count of characters, where we treat '0's as -1 and '1's as +1. The key here is that if the cumulative sum at two different indices is the same, it indicates that the substring between those two indices is balanced (contains an equal number of '0's and '1's).

Here's a step-by-step breakdown of the approach:

1. **Transform the Characters**:
   - Convert '0' to -1 and '1' to +1. This allows us to treat the searching for a balanced substring as finding a subarray with a sum of zero.

2. **Use a Hashmap to Track First Occurrences**:
   - Maintain a hashmap that records the first index at which each cumulative sum value is seen. This will help to quickly determine the length of a balanced substring.

3. **Iterate Through the String**:
   - As you iterate through the string, update the cumulative sum.
   - If the cumulative sum is zero at any index, that means the substring from the start to that index is balanced.
   - If the cumulative sum has been seen before, calculate the length of the substring and update the maximum length if necessary.

4. **Result**:
   - The maximum length obtained during the iteration will be the result.

### C++ Implementation

Here's the implementation of the above logic in C++:

```cpp
#include <unordered_map>
#include <string>
#include <algorithm>

class Solution {
public:
    int findTheLongestBalancedSubstring(std::string s) {
        std::unordered_map<int, int> sumIndex;
        int maxLength = 0;
        int cumulativeSum = 0;
        
        // Initialize the map with the sum 0 at index -1
        sumIndex[0] = -1;
        
        for (int i = 0; i < s.size(); i++) {
            // Update the cumulative sum
            cumulativeSum += (s[i] == '1') ? 1 : -1; // Treat '1' as +1 and '0' as -1
            
            // Check if this cumulative sum has been seen before
            if (sumIndex.count(cumulativeSum)) {
                // Calculate the length of the balanced substring
                int length = i - sumIndex[cumulativeSum];
                maxLength = std::max(maxLength, length);
            } else {
                // Store the first occurrence of this cumulative sum
                sumIndex[cumulativeSum] = i;
            }
        }
        
        return maxLength;
    }
};
```

### Explanation of the Code

1. **unordered_map `sumIndex`**: This is used to store the first occurrence of each cumulative sum encountered while iterating through the string.
   
2. **Iterating through the string `s`**:
   - We calculate the `cumulativeSum` based on whether the current character is '0' or '1'.
   - We check if the `cumulativeSum` has been recorded before:
     - If it has, we calculate the length of the substring since the first occurrence of this sum to the current index.
     - If it hasn't, we record this sum's first occurrence.

3. **Return the Length**: After the loop finishes, we return `maxLength`, which contains the length of the longest balanced substring.

This solution is efficient and operates in O(n) time complexity, where n is the length of the string, due to the single pass through the string and constant-time operations using the hashmap.