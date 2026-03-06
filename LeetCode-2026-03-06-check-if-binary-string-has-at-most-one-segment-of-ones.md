# LeetCode Daily – 2026-03-06

## 🧠 Problem #1784 – **Check if Binary String Has at Most One Segment of Ones**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones)

---

### 📝 Problem Description

Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

 
Example 1:


Input: s = &quot;1001&quot;
Output: false
Explanation: The ones do not form a contiguous segment.


Example 2:


Input: s = &quot;110&quot;
Output: true

 
Constraints:


	1 <= s.length <= 100
	s[i]​​​​ is either &#39;0&#39; or &#39;1&#39;.
	s[0] is &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's discuss the problem "Check if Binary String Has at Most One Segment of Ones" from LeetCode.

### Problem Explanation

You are given a binary string composed only of the characters '0' and '1'. The task is to determine whether this string has at most one contiguous segment of '1's. A segment is defined as a substring composed solely of '1's that are adjacent to each other, and it can be surrounded by '0's or occur at the ends of the string.

### Examples
1. For the input `"1001"`, the output should be `false` because there are two segments of '1's: one segment "1" at the beginning and one segment "1" at the end.
2. For the input `"110"` or `"00"`, the output should be `true` because there's either one or no segment of '1's.

### Approach

1. We will traverse the string and keep track of whether we have found a segment of '1's.
2. As we iterate through the string, we can count the transitions from '0' to '1', which indicates the start of a new segment.
3. If we find more than one segment, we can immediately return `false`.

### Implementation in C++

Let’s see the C++ implementation of this approach.

```cpp
#include <iostream>
#include <string>

bool checkOnesSegment(const std::string& s) {
    // A boolean to indicate if we have seen at least one segment of '1's
    bool foundSegment = false;

    // Traverse the string character by character
    for (size_t i = 0; i < s.size(); ++i) {
        // If we find '1' and we haven't found a segment yet, we have found a new segment
        if (s[i] == '1') {
            // If we already found a segment, return false
            if (foundSegment) {
                return false;
            }
            // Mark that we've found the first segment of '1's
            foundSegment = true;

            // Continue until we reach the end of this segment of '1's
            while (i < s.size() && s[i] == '1') {
                ++i; // Move past the entire segment
            }
            // After this while loop, 'i' will be at the first '0' or at the end of the string
        }
    }
    
    // If we did not find more than one segment, return true
    return true;
}

// Example Usage
int main() {
    std::string str = "1001";
    bool result = checkOnesSegment(str);
    std::cout << (result ? "true" : "false") << std::endl; // Output: false

    str = "110";
    result = checkOnesSegment(str);
    std::cout << (result ? "true" : "false") << std::endl; // Output: true

    str = "000";
    result = checkOnesSegment(str);
    std::cout << (result ? "true" : "false") << std::endl; // Output: true

    return 0;
}
```

### Explanation of the Code

1. **`checkOnesSegment` function**: This function takes a string `s` and checks for the segments of '1's.
2. **Loop through the string**: We loop through each character of the string using a `for` loop.
3. **Finding segments of '1's**: When we find a '1', we check if a segment was found before:
   - If `foundSegment` is `true`, it indicates we've found more than one segment, so we return `false`.
   - If it’s the first segment, we set `foundSegment` to `true` and then use a `while` loop to skip all subsequent '1's in that segment.
4. **Final check**: If we loop through the whole string without finding more than one segment, we return `true`.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the length of the string. We traverse the string only once.
- **Space Complexity**: O(1) since we are using a constant amount of space regardless of input size. 

This solution is efficient and straightforward, fitting the problem's constraints and requirements perfectly.