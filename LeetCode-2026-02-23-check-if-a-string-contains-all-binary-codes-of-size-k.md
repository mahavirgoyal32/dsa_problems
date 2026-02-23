# LeetCode Daily – 2026-02-23

## 🧠 Problem #1461 – **Check If a String Contains All Binary Codes of Size K**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k)

---

### 📝 Problem Description

Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

 
Example 1:


Input: s = &quot;00110110&quot;, k = 2
Output: true
Explanation: The binary codes of length 2 are &quot;00&quot;, &quot;01&quot;, &quot;10&quot; and &quot;11&quot;. They can be all found as substrings at indices 0, 1, 3 and 2 respectively.


Example 2:


Input: s = &quot;0110&quot;, k = 1
Output: true
Explanation: The binary codes of length 1 are &quot;0&quot; and &quot;1&quot;, it is clear that both exist as a substring. 


Example 3:


Input: s = &quot;0110&quot;, k = 2
Output: false
Explanation: The binary code &quot;00&quot; is of length 2 and does not exist in the array.


 
Constraints:


	1 <= s.length <= 5 * 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.
	1 <= k <= 20

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Check If a String Contains All Binary Codes of Size K," we need to determine whether a given binary string contains all possible binary codes of length \( K \).

### Explanation

1. **Understanding Binary Codes of Length K**:
    - For a given length \( K \), there are \( 2^K \) possible binary codes. For example, if \( K = 2 \), the possible binary codes are: `00`, `01`, `10`, `11`.

2. **Sliding Window Approach**:
    - We can utilize a sliding window of length \( K \) over the input string.
    - As we slide the window, we will extract every substring of length \( K \) and keep track of the unique substrings we've seen.

3. **Using a Set**:
    - We can use a set to store all unique binary codes of length \( K \) that we encounter while scanning through the string. After processing the entire string, we simply check if the size of the set equals \( 2^K \).

4. **Early Termination**:
    - If at any point we have enough unique codes, we can stop scanning further and return true.

### Implementation

Here's the C++ implementation of the described approach:

```cpp
#include <iostream>
#include <string>
#include <unordered_set>
#include <cmath>

class Solution {
public:
    bool hasAllCodes(std::string s, int k) {
        // Calculate the total number of binary codes of length k
        int totalCodes = 1 << k; // equivalent to 2^k
        
        // If string is too short to contain all codes
        if (s.size() < k) {
            return false;
        }
        
        // Set to track all unique k-length binary codes
        std::unordered_set<std::string> seenCodes;
        
        // Slide through the string, extracting substrings of length k
        for (int i = 0; i <= s.size() - k; ++i) {
            seenCodes.insert(s.substr(i, k));
            // Early exit if we've found all unique codes
            if (seenCodes.size() == totalCodes) {
                return true;
            }
        }
        
        // After the loop, we check if we have all the possible codes
        return seenCodes.size() == totalCodes;
    }
};

int main() {
    Solution solution;
    std::string s = "00110110";
    int k = 2;
    bool result = solution.hasAllCodes(s, k);
    std::cout << (result ? "true" : "false") << std::endl; // Expected output: true
    return 0;
}
```

### Explanation of the Code:
- We declare the total number of binary codes of size \( K \) using the bit shift operation `1 << k`, which computes \( 2^k \).
- We check if the input string is shorter than \( K \). If it is, we immediately return false since it's impossible to form all codes.
- We use an `unordered_set` to store all unique k-length substrings.
- We loop through the string and for each valid starting position, we extract the substring of length \( K \), and insert it into the set.
- If at any point the size of the set equals \( 2^K \), we return true early.
- Finally, if we have not returned true during the loop, we check the size of the set against \( 2^K \) after the loop completes.

### Time Complexity:
- The time complexity of this approach is \( O(N) \), where \( N \) is the length of the input string \( s \). This is due to the single pass through the string to collect substrings.

### Space Complexity:
- The space complexity is \( O(1) \) with respect to the maximum size of the set, which can hold at most \( 2^K \) entries. Hence, it is manageable as long as \( K \) is reasonable (typically \( K \leq 20 \)).