# LeetCode Daily – 2026-07-30

## 🧠 Problem #3014 – **Minimum Number of Pushes to Type Word I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i)

---

### 📝 Problem Description

You are given a string word containing distinct lowercase English letters.

Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], we need to push the key one time to type &quot;a&quot;, two times to type &quot;b&quot;, and three times to type &quot;c&quot; .

It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.

Return the minimum number of pushes needed to type word after remapping the keys.

An example mapping of letters to keys on a telephone keypad is given below. Note that 1, *, #, and 0 do not map to any letters.

 
Example 1:


Input: word = &quot;abcde&quot;
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
&quot;a&quot; -> one push on key 2
&quot;b&quot; -> one push on key 3
&quot;c&quot; -> one push on key 4
&quot;d&quot; -> one push on key 5
&quot;e&quot; -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.


Example 2:


Input: word = &quot;xycdefghij&quot;
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
&quot;x&quot; -> one push on key 2
&quot;y&quot; -> two pushes on key 2
&quot;c&quot; -> one push on key 3
&quot;d&quot; -> two pushes on key 3
&quot;e&quot; -> one push on key 4
&quot;f&quot; -> one push on key 5
&quot;g&quot; -> one push on key 6
&quot;h&quot; -> one push on key 7
&quot;i&quot; -> one push on key 8
&quot;j&quot; -> one push on key 9
Total cost is 1 + 2 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1 = 12.
It can be shown that no other mapping can provide a lower cost.


 
Constraints:


	1 <= word.length <= 26
	word consists of lowercase English letters.
	All letters in word are distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's go through the LeetCode problem "Minimum Number of Pushes to Type Word I" together. 

### Problem Explanation

You are given a string `word` consisting of lowercase English letters. You also have a character set that consists of the letters 'a' to 'z'. You can type each letter in `word` by "pushing" a button corresponding to that letter. However, if you want to type a letter that is adjacent to the currently selected letter on the keyboard, you can type it in one push. If the letter is not adjacent, you will have to go through the intermediate letters to reach it, which translates to multiple pushes.

### Input and Output
- **Input**: A string `word` (1 <= word.length <= 100)
- **Output**: An integer representing the minimum number of pushes needed to type the word.

### Approach
1. **Initialization**: Start with a count for the total number of pushes. 
2. **Simulate Typing**: For each character in the word:
   - If it's the first character, it takes one push.
   - For subsequent characters, determine if the current character and the previous character are adjacent (i.e., they differ by 1 in their alphabetical positions).
     - If they are adjacent, it takes one push.
     - If they are not, it takes two pushes: one to reach the previous character and another to go to the next character.
3. **Return the Total Count**.

### C++ Implementation

Here is the implementation based on the above explanation:

```cpp
#include <iostream>
#include <string>

class Solution {
public:
    int minimumPushes(std::string word) {
        int pushes = 0; // Initialize the number of pushes
        int n = word.length(); // Get the length of the word
        
        // Process each character of the word
        for (int i = 0; i < n; ++i) {
            if (i == 0) {
                // First character always takes one push
                pushes += 1;
            } else {
                // Get the current and previous character
                char current = word[i];
                char previous = word[i - 1];
                
                // Check if they are adjacent
                if (std::abs(current - previous) == 1) {
                    pushes += 1; // Adjacent letters take one push
                } else {
                    pushes += 2; // Non-adjacent letters take two pushes
                }
            }
        }
        
        return pushes; // Return the total number of pushes
    }
};

int main() {
    Solution sol;
    std::string word = "abc";
    std::cout << "Minimum pushes to type word \"" << word << "\": " 
              << sol.minimumPushes(word) << std::endl;
    
    return 0;
}
```

### Explanation of the Code
1. **Class Definition**: We define the `Solution` class which includes the method `minimumPushes`.
2. **Loop Through the Word**: We iterate through each character in `word`.
3. **Push Calculation**:
   - For the first character, increment the pushes by 1.
   - For subsequent characters, check if they are adjacent (either increasing or decreasing order). If yes, increment the push count by 1; otherwise by 2.
4. **Output**: Finally, return the total count of pushes.

### Complexity
- **Time Complexity**: O(n), where n is the length of the string. We iterate through the string exactly once.
- **Space Complexity**: O(1), as we are using a constant amount of extra space.

This approach ensures that we are efficiently calculating the minimum number of pushes required to type the word.