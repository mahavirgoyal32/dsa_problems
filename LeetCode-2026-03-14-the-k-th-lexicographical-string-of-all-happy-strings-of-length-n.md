# LeetCode Daily – 2026-03-14

## 🧠 Problem #1415 – **The k-th Lexicographical String of All Happy Strings of Length n**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n)

---

### 📝 Problem Description

A happy string is a string that:


	consists only of letters of the set [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].
	s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).


For example, strings &quot;abc&quot;, &quot;ac&quot;, &quot;b&quot; and &quot;abcbabcbcb&quot; are all happy strings and strings &quot;aa&quot;, &quot;baa&quot; and &quot;ababbc&quot; are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

 
Example 1:


Input: n = 1, k = 3
Output: &quot;c&quot;
Explanation: The list [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;] contains all happy strings of length 1. The third string is &quot;c&quot;.


Example 2:


Input: n = 1, k = 4
Output: &quot;&quot;
Explanation: There are only 3 happy strings of length 1.


Example 3:


Input: n = 3, k = 9
Output: &quot;cab&quot;
Explanation: There are 12 different happy string of length 3 [&quot;aba&quot;, &quot;abc&quot;, &quot;aca&quot;, &quot;acb&quot;, &quot;bab&quot;, &quot;bac&quot;, &quot;bca&quot;, &quot;bcb&quot;, &quot;cab&quot;, &quot;cac&quot;, &quot;cba&quot;, &quot;cbc&quot;]. You will find the 9th string = &quot;cab&quot;


 
Constraints:


	1 <= n <= 10
	1 <= k <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem of finding the k-th lexicographical happy string of length `n`, we should first understand what a "happy string" is. A happy string is defined as a string that contains only the characters 'a', 'b', and 'c', and doesn't contain any substring of the form "aaa", "bbb", or "ccc". 

### Key Steps to Solution

1. **Generate Happy Strings**: You can generate all happy strings of a given length `n` recursively by ensuring that you don't add the same character as the last character added.
  
2. **Lexicographical Order**: As you generate this string, you can do this in a way that automatically ensures they are in lexicographical order.

3. **Count Until k-th**: As you generate each happy string, you can maintain a count of how many you've generated until you reach the k-th string.

4. **Early Stopping**: If you reach the k-th string during the generation process, you can immediately return it without generating all possible happy strings.

### Implementation

Here is the implementation in C++:

```cpp
#include <iostream>
#include <string>
#include <vector>

class Solution {
public:
    std::string getHappyString(int n, int k) {
        std::string result;
        std::vector<char> chars = {'a', 'b', 'c'};
        generateHappyStrings(n, k, "", result);
        return result;
    }
    
private:
    int count = 0; // To keep track of how many happy strings we've generated.
    
    void generateHappyStrings(int n, int k, std::string current, std::string &result) {
        // Base case: If the length of the current string is n.
        if (current.size() == n) {
            count++; // Increment the count of happy strings generated.
            if (count == k) { // If we've reached the k-th happy string
                result = current; // Save the result
            }
            return; // Return and stop generating this branch
        }

        // Loop through the characters 'a', 'b', 'c'
        for (char c : {'a', 'b', 'c'}) {
            // Avoid consecutive same characters
            if (current.empty() || current.back() != c) {
                generateHappyStrings(n, k, current + c, result); // Recursive call
            }
            if (count == k) return; // Early stopping if we've found the k-th string
        }
    }
};
```

### Explanation of the Code

1. **Class Definition**:
   - We define a `Solution` class, which will contain our main function.

2. **Function `getHappyString`**:
   - It initializes the recursive generation of happy strings by calling `generateHappyStrings`.
   - `count` is initialized to track how many happy strings have been generated.

3. **Recursive Function `generateHappyStrings`**:
   - It checks if the current string's length equals `n`. If so, it increments the count and checks if it equals `k`. If it does, the string is saved to `result`.
   - If the string hasn’t reached length `n`, it loops through the characters 'a', 'b', and 'c'. 
   - It ensures that the last character added is not the same as the character currently being added to prevent generating an invalid happy string.
   - If during the recursive calls it finds the k-th string, it returns early to avoid unnecessary computations.

### Complexity
- The time complexity can be considered as `O(3^n)` in the worst case, as each character can branch out to three possibilities, however, this is tightly constrained by the condition of not allowing consecutive same characters.
- The space complexity is `O(n)` due to the recursion stack.

This algorithm generates happy strings efficiently and stops as soon as the k-th one is reached, making it suitable for relatively small values of `n` and `k`.