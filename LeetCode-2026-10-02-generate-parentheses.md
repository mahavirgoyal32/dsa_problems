# LeetCode Daily – 2026-10-02

## 🧠 Problem #22 – **Generate Parentheses**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/generate-parentheses)

---

### 📝 Problem Description

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 
Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
Input: n = 1
Output: ["()"]

 
Constraints:


	1 <= n <= 8

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Generate Parentheses" problem requires us to find all combinations of well-formed parentheses given `n` pairs of parentheses. This is a classic backtracking problem where we explore all possible ways to form valid parentheses.

### Problem Statement:
Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Key Observations:
1. A valid combination will always have a balance of opening and closing parentheses — at any point in the string being formed, the number of closing parentheses should not exceed the number of opening parentheses.
2. We can use a backtracking approach where we recursively build the strings of parentheses.

### Approach:
1. **Backtracking**:
   - Maintain a string that we are building (representing the current combination of parentheses).
   - Use two counters, `open` and `close`, to keep track of how many opening and closing parentheses have been added.
   - Start with both `open` and `close` as 0, and the function will only add an opening parenthesis if `open < n`, and a closing parenthesis if `close < open`.
   - Once the length of the string reaches `2 * n`, we have a complete valid combination and can add it to the result.

2. **Recursive Function**:
   - The recursive function is called with the current string, counts of open and close parentheses.
   - Once a valid combination is formed, we add it to a result list.

### C++ Solution:
Here’s the solution implementing the above approach using C++:

```cpp
#include <vector>
#include <string>

class Solution {
public:
    // Function to generate all combinations of valid parentheses
    std::vector<std::string> generateParenthesis(int n) {
        std::vector<std::string> result;
        backtrack(result, "", 0, 0, n);
        return result;
    }
    
    // Backtracking function to build parentheses combinations
    void backtrack(std::vector<std::string> &result, std::string current, int open, int close, int max) {
        if (current.length() == max * 2) { // When the length of current string equals 2*n
            result.push_back(current); // Add to result
            return; // Backtrack
        }

        if (open < max) { // If we can still add an open parenthesis
            backtrack(result, current + "(", open + 1, close, max); // Recurse with a new open parenthesis
        }

        if (close < open) { // If we can still add a close parenthesis
            backtrack(result, current + ")", open, close + 1, max); // Recurse with a new close parenthesis
        }
    }
};
```

### Explanation of the Code:
1. **Function Signature**:
   - The `generateParenthesis` function initializes an empty vector `result` to store valid combinations and calls the helper function `backtrack`.

2. **Backtrack Function**:
   - **Base Case**: If the length of `current` reaches `2 * n`, it means a valid combination is formed, so we add it to the `result`.
   - **Recursive Cases**:
     - If `open` is less than `n`, we can add an opening parenthesis `(`.
     - If `close` is less than `open`, we can add a closing parenthesis `)`.

### Complexity:
- **Time Complexity**: The solution explores all valid combinations of parentheses, leading to a time complexity of O(4^n / √n) for generating combinations.
- **Space Complexity**: The space complexity is O(n) due to the recursion call stack and storing combinations in the result vector.

This efficient approach ensures that all valid combinations are generated without generating invalid combinations, making use of the properties of balanced parentheses.