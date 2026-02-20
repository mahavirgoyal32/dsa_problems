# LeetCode Daily – 2026-02-20

## 🧠 Problem #761 – **Special Binary String**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/special-binary-string)

---

### 📝 Problem Description

Special binary strings are binary strings with the following two properties:


	The number of 0&#39;s is equal to the number of 1&#39;s.
	Every prefix of the binary string has at least as many 1&#39;s as 0&#39;s.


You are given a special binary string s.

A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.

 
Example 1:


Input: s = &quot;11011000&quot;
Output: &quot;11100100&quot;
Explanation: The strings &quot;10&quot; [occuring at s[1]] and &quot;1100&quot; [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.


Example 2:


Input: s = &quot;10&quot;
Output: &quot;10&quot;


 
Constraints:


	1 <= s.length <= 50
	s[i] is either &#39;0&#39; or &#39;1&#39;.
	s is a special binary string.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of Special Binary String, we need to create a function that rearranges a given binary string `S` into the largest lexicographical order of a "special" binary string. A "special" binary string is defined recursively as follows:

- The string `0` and `1` are special strings.
- If `A` is a special string, then `0A1` is also a special string.
- If `A` and `B` are special strings, then concatenation `AB` is also special.

To approach the problem, we'll utilize a recursive strategy. The algorithm can be broken down into the following steps:

1. **Parse the string**: We will count the number of `1`s and `0`s that are nested in the string.
2. **Build special strings**: Using a recursive function, we will correctly position `1`s in front of `0`s while maintaining the "special" structure.
3. **Sort and combine parts**: Finally, we will create a string by concatenating the processed parts in the correct order.

Here's the implementation in C++:

```cpp
#include <string>
#include <vector>

std::string makeLargestSpecial(std::string S) {
    int count = 0; // to count the "1"s minus "0"s
    std::vector<std::string> specialStrings;

    // Iterate through the string and build special substrings
    for (int i = 0; i < S.size(); i++) {
        if (S[i] == '1') {
            count++;
        } else {
            count--;
        }

        // When count drops back to 0, we found a special string
        if (count == 0) {
            // S[i+1 : i+count] will be the special part
            // Recursively build it and store it
            // We use S.substr(i + 1, (i - 1)) because S[i] was '1'
            std::string specialPart = "1" + makeLargestSpecial(S.substr(i + 1, i - 1)) + "0";
            specialStrings.push_back(specialPart);
            i++; // skip to the next character since we processed until `i`
        }
    }

    // Sort all collected special strings in reverse order
    std::sort(specialStrings.begin(), specialStrings.end(), std::greater<std::string>());
    
    // Join all special strings into one final result
    std::string result;
    for (const auto& str : specialStrings) {
        result += str;
    }

    return result;
}
```

### Explanation of Code:

1. **Initialization**:
   - We use `count` to keep track of the balance between `1`s and `0`s. A special string must have one more `1` than `0`s before concluding.
   - We use a `vector` to store the special binary strings generated during recursion.

2. **Iterate through the String**:
   - As we loop through the string, whenever we encounter `1`, we increment `count`, and for `0`, we decrement it.
   - When `count` returns to `0`, we have found a complete "special" substring.

3. **Forming Special Strings**:
   - We recursively call `makeLargestSpecial` on the substring that lies between the current `1` and `0`, which forms the inner special string. 
   - Concatenate these pieces in the form "1 + [inner special] + 0" and push them into the vector.

4. **Sorting**:
   - After collecting all the special strings, we sort the vector in reverse lexicographical order to ensure the largest possible arrangement.

5. **Result Construction**:
   - Finally, we concatenate all elements in the sorted vector to produce the final answer and return it.

This implementation is efficient and adheres to the constraints of the problem by ensuring we process each character effectively while leveraging recursion and sorting for constructed special strings.