# LeetCode Daily – 2026-06-29

## 🧠 Problem #1967 – **Number of Strings That Appear as Substrings in Word**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word)

---

### 📝 Problem Description

Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.

 
Example 1:


Input: patterns = [&quot;a&quot;,&quot;abc&quot;,&quot;bc&quot;,&quot;d&quot;], word = &quot;abc&quot;
Output: 3
Explanation:
- &quot;a&quot; appears as a substring in &quot;abc&quot;.
- &quot;abc&quot; appears as a substring in &quot;abc&quot;.
- &quot;bc&quot; appears as a substring in &quot;abc&quot;.
- &quot;d&quot; does not appear as a substring in &quot;abc&quot;.
3 of the strings in patterns appear as a substring in word.


Example 2:


Input: patterns = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], word = &quot;aaaaabbbbb&quot;
Output: 2
Explanation:
- &quot;a&quot; appears as a substring in &quot;aaaaabbbbb&quot;.
- &quot;b&quot; appears as a substring in &quot;aaaaabbbbb&quot;.
- &quot;c&quot; does not appear as a substring in &quot;aaaaabbbbb&quot;.
2 of the strings in patterns appear as a substring in word.


Example 3:


Input: patterns = [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;], word = &quot;ab&quot;
Output: 3
Explanation: Each of the patterns appears as a substring in word &quot;ab&quot;.


 
Constraints:


	1 <= patterns.length <= 100
	1 <= patterns[i].length <= 100
	1 <= word.length <= 100
	patterns[i] and word consist of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let’s solve the LeetCode problem "Number of Strings That Appear as Substrings in Word".

### Problem Explanation

We are given two inputs:
1. A string `word`.
2. An array of strings `patterns`.

The task is to count how many strings from the `patterns` array appear as substrings in the `word`.

### Step-by-Step Approach

1. **Initialization**: We will start by defining a counter to keep track of the number of patterns found in the `word`.

2. **Substring Check**: For each pattern in the `patterns` array, we will check whether it is a substring of `word`. In C++, this can be done using the `find()` method of the string class.

3. **Counting Matches**: For each pattern that is found in `word`, we will increment our counter.

4. **Return the Result**: Finally, we return the total count of such patterns.

### C++ Code

Here is a C++ implementation of the above logic:

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    int countSubstrings(string word, vector<string>& patterns) {
        int count = 0; // Initialize count of patterns found
        
        // Loop through each pattern
        for (const string &pattern : patterns) {
            // Check if the pattern is a substring of word
            if (word.find(pattern) != string::npos) {
                count++; // Increment count if found
            }
        }
        
        return count; // Return the total count
    }
};

// Example usage:
int main() {
    Solution solution;
    string word = "leetcode";
    vector<string> patterns = {"leet", "code", "le", "et", "xyz"};
    
    int result = solution.countSubstrings(word, patterns);
    cout << "Number of patterns found: " << result << endl; // Output should be 4
    return 0;
}
```

### Explanation of the Code

1. **Class Declaration**: We declare a class named `Solution` which contains the method `countSubstrings`.

2. **Method Definition**: The method `countSubstrings` takes two parameters; a string `word` and a vector of strings `patterns`.

3. **Looping Through Patterns**: We iterate over each string in the `patterns` vector with a range-based for loop.

4. **Finding Substrings**:
   - We use `word.find(pattern)`, which returns the index of the first occurrence of `pattern` in `word`. If the pattern is not found, `find()` returns `string::npos`, which is a constant representing a non-position.
   - If `find()` does not return `string::npos`, it means that the pattern exists in `word`, and we increment the `count`.

5. **Returning the Result**: Finally, we return the total count of patterns that were found as substrings.

### Complexity Analysis

- **Time Complexity**: O(m * n), where `m` is the number of strings in `patterns` and `n` is the average length of the patterns. The `find` method is O(n) for each pattern, leading to this complexity.
- **Space Complexity**: O(1), as we are using a constant amount of space for our counter and other variables.

By following this logic, we efficiently solve the problem of counting substrings in a given word.