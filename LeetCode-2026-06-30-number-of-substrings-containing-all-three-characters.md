# LeetCode Daily – 2026-06-30

## 🧠 Problem #1358 – **Number of Substrings Containing All Three Characters**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters)

---

### 📝 Problem Description

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 
Example 1:


Input: s = &quot;abcabc&quot;
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are &quot;abc&quot;, &quot;abca&quot;, &quot;abcab&quot;, &quot;abcabc&quot;, &quot;bca&quot;, &quot;bcab&quot;, &quot;bcabc&quot;, &quot;cab&quot;, &quot;cabc&quot; and &quot;abc&quot; (again). 


Example 2:


Input: s = &quot;aaacb&quot;
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are &quot;aaacb&quot;, &quot;aacb&quot; and &quot;acb&quot;. 


Example 3:


Input: s = &quot;abc&quot;
Output: 1


 
Constraints:


	3 <= s.length <= 5 x 10^4
	s only consists of a, b or c characters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Let's solve the problem "Number of Substrings Containing All Three Characters" from LeetCode. The goal is to count the number of substrings in a given string `s` that contain at least one occurrence of each character 'a', 'b', and 'c'.

## Problem Explanation

Given a string that only contains the characters 'a', 'b', and 'c', we need to determine how many contiguous substrings include all three characters. A substring is simply any contiguous portion of a string.

### Example:
For the input `s = "abcabc"`, the valid substrings containing 'a', 'b', and 'c' are: 

1. "abc"
2. "abc" (the second occurrence)
3. "abca"
4. "abcab"
5. "abcabc"
6. "bca"
7. "bcabc"
8. "cab"
9. "cabc"
10. "abc"
11. "abc"

### Approach:
1. **Two-pointer/Sliding Window Technique**: We can utilize two pointers (or a sliding window) to expand and contract a window over the string and count valid substrings effectively.
2. **Count the characters**: Maintain a count of 'a', 'b', and 'c' in the current window.
3. **Expand the right pointer**: Extend the right pointer to include characters until we have at least one of each 'a', 'b', and 'c'.
4. **Count valid substrings**: Once we have a valid window, every ending position from the right pointer till the end of the string will form a valid substring.
5. **Contract the left pointer**: Move the left pointer to see if we can lose any characters while still maintaining all three in the window.

### Implementation:

Here is a C++ solution using the above approach:

```cpp
class Solution {
public:
    int numberOfSubstrings(string s) {
        int n = s.size();
        int left = 0, right = 0;
        int count_a = 0, count_b = 0, count_c = 0;
        int result = 0;
        
        while (right < n) {
            // Expand the window by adding the right pointer
            if (s[right] == 'a') count_a++;
            if (s[right] == 'b') count_b++;
            if (s[right] == 'c') count_c++;
            right++;
            
            // When we have at least one of each character
            while (count_a > 0 && count_b > 0 && count_c > 0) {
                // All substrings from current left to right are valid
                result += n - right + 1;

                // Now we will contract the window from the left
                if (s[left] == 'a') count_a--;
                if (s[left] == 'b') count_b--;
                if (s[left] == 'c') count_c--;
                left++;
            }
        }
        
        return result;
    }
};
```

### Explanation of the Code:
- We maintain `count_a`, `count_b`, and `count_c` to count occurrences of 'a', 'b', and 'c' in the current substring defined by `left` and `right`.
- The outer loop continues until `right` has scanned through the entire string.
- Inside the outer loop, we expand our window by incrementing `right` and updating counts.
- Once we have at least one of each character in the window, we know that the substring from `left` to `right` includes 'a', 'b', and 'c'. So, every possible substring that starts from `left` and goes to any position until the end will also include all three characters. This contributes `n - right + 1` valid substrings.
- We then increment `left` to try and find new valid substrings by possibly reducing our window.
- The count continues until the entire string has been processed.

### Complexity:
- **Time Complexity**: O(n), where n is the length of the string since each character is processed at most twice.
- **Space Complexity**: O(1), as we're using a fixed amount of space for counters.

This solution efficiently counts the required substrings in linear time, making it suitable for larger inputs as well.