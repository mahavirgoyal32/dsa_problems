# LeetCode Daily – 2026-06-22

## 🧠 Problem #1189 – **Maximum Number of Balloons**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-balloons)

---

### 📝 Problem Description

Given a string text, you want to use the characters of text to form as many instances of the word &quot;balloon&quot; as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 
Example 1:




Input: text = &quot;nlaebolko&quot;
Output: 1


Example 2:




Input: text = &quot;loonbalxballpoon&quot;
Output: 2


Example 3:


Input: text = &quot;leetcode&quot;
Output: 0


 
Constraints:


	1 <= text.length <= 104
	text consists of lower case English letters only.


 
Note: This question is the same as  2287: Rearrange Characters to Make Target String.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The LeetCode problem "Maximum Number of Balloons" asks you to determine how many times you can form the word "balloon" from a given string. Each character in "balloon" must be used the appropriate number of times:

- 'b' — 1
- 'a' — 1
- 'l' — 2
- 'o' — 2
- 'n' — 1

To solve this problem, we can follow these steps:

1. Count the occurrences of each character in the input string.
2. Based on the character counts, determine how many times we can form the word "balloon" by using the minimum number of times we can satisfy the character requirements.

Here's a breakdown of how to implement this in C++:

```cpp
#include <iostream>
#include <unordered_map>
#include <algorithm>
#include <string>

class Solution {
public:
    int maxNumberOfBalloons(std::string text) {
        // Count occurrences of each character in the input string
        std::unordered_map<char, int> charCount;
        for (char ch : text) {
            charCount[ch]++;
        }

        // Check the necessary characters for "balloon"
        // 'b' - 1, 'a' - 1, 'l' - 2, 'o' - 2, 'n' - 1
        int balloonCount = std::min({ 
            charCount['b'], 
            charCount['a'], 
            charCount['l'] / 2, // we need 2 'l's
            charCount['o'] / 2, // we need 2 'o's
            charCount['n'] 
        });

        return balloonCount;
    }
};

// Example usage
int main() {
    Solution sol;
    std::string text = "loonbalxballpoon";
    int result = sol.maxNumberOfBalloons(text);
    std::cout << "Maximum number of balloons: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code:

1. **Character Counting**: We use a `std::unordered_map` to keep track of how many times each character in the string appears. We iterate through each character in the input string and increment the appropriate count in the map.

2. **Calculating the Minimum Counts**:
   - To form "balloon", the number of times we can create it is limited by the character we have the least of, concerning its required frequency.
   - For 'b', 'a', and 'n', we can directly take the count.
   - For 'l' and 'o', since we need them twice, we divide their counts by 2 to determine how many complete sets of those letters we can use.

3. **Return Result**: We use `std::min` with an initializer list to get the minimum from all considered counts, which gives us the maximum number of times we can form "balloon".

This algorithm efficiently counts characters and calculates the result in linear time relative to the size of the input string, making it quite effective even for relatively large strings.