# LeetCode Daily – 2026-07-31

## 🧠 Problem #3016 – **Minimum Number of Pushes to Type Word II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii)

---

### 📝 Problem Description

You are given a string word containing lowercase English letters.

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


Input: word = &quot;xyzxyzxyzxyz&quot;
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
&quot;x&quot; -> one push on key 2
&quot;y&quot; -> one push on key 3
&quot;z&quot; -> one push on key 4
Total cost is 1 * 4 + 1 * 4 + 1 * 4 = 12
It can be shown that no other mapping can provide a lower cost.
Note that the key 9 is not mapped to any letter: it is not necessary to map letters to every key, but to map all the letters.


Example 3:


Input: word = &quot;aabbccddeeffgghhiiiiii&quot;
Output: 24
Explanation: The remapped keypad given in the image provides the minimum cost.
&quot;a&quot; -> one push on key 2
&quot;b&quot; -> one push on key 3
&quot;c&quot; -> one push on key 4
&quot;d&quot; -> one push on key 5
&quot;e&quot; -> one push on key 6
&quot;f&quot; -> one push on key 7
&quot;g&quot; -> one push on key 8
&quot;h&quot; -> two pushes on key 9
&quot;i&quot; -> one push on key 9
Total cost is 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 2 * 2 + 6 * 1 = 24.
It can be shown that no other mapping can provide a lower cost.


 
Constraints:


	1 <= word.length <= 105
	word consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

### Problem Explanation

The problem "Minimum Number of Pushes to Type Word II" asks us to determine the minimum number of pushes (keypresses) needed to type a specific word on a keyboard arranged in a circular manner, such that pressing a key counts as one push, and you can go either left or right around the circle to reach any key.

Given a set of words and a target word, we need to simulate typing the target word while minimizing the total number of key presses.

### Key Points
1. **Circular Keyboard**: The keyboard is circular meaning if you go beyond the last key, you wrap around to the first key.
2. **Distance Calculation**: The distance between two keys can be calculated in two ways: clockwise and counterclockwise. The minimum of these two distances will give us the number of pushes needed to move from one key to another.

### Approach
1. **Mapping the Keyboard**: First, we can construct a mapping from each character to its index on the keyboard.
2. **Distance Calculation**: For each character in the target word, calculate the distance from the current character position to the target character's position on the keyboard.
3. **Keep Track of Position**: We'll maintain the last known character position while iterating through the characters of the target word.
4. **Sum Up**: Maintain a total count of pushes needed as you traverse through the characters.

### Code Implementation

Here’s how you would implement it in C++:

```cpp
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
#include <cmath>

using namespace std;

class Solution {
public:
    int calculateDistance(int from, int to, int keyboardSize) {
        // Calculate the clockwise and counterclockwise distances
        int clockwise = abs(to - from);
        int counterclockwise = keyboardSize - clockwise;
        return min(clockwise, counterclockwise);
    }

    int minKeystrokes(string keyboard, string word) {
        int totalPushes = 0;
        int keyboardSize = keyboard.size();
        unordered_map<char, int> keyIndexMap;

        // Map each character to its index in the keyboard
        for (int i = 0; i < keyboardSize; ++i) {
            keyIndexMap[keyboard[i]] = i;
        }

        int currentPosition = keyIndexMap[word[0]]; // Initial position based on the first char

        // Process each character in the word
        for (int i = 1; i < word.size(); ++i) {
            int nextPosition = keyIndexMap[word[i]];
            totalPushes += calculateDistance(currentPosition, nextPosition, keyboardSize);
            currentPosition = nextPosition; // Move to the new current position
        }

        return totalPushes;
    }
};

// Example usage:
int main() {
    Solution solution;
    string keyboard = "abcde"; // example keyboard
    string word = "cde"; // example word
    int result = solution.minKeystrokes(keyboard, word);
    cout << "Minimum pushes to type the word: " << result << endl;
    return 0;
}
```

### Explanation of the Code:
1. **calculateDistance**: This function computes the minimum number of pushes needed to get from one key index (from) to another (to) on a circular keyboard.
2. **minKeystrokes Function**: This function calculates the total number of pushes required to type the given `word`:
   - It constructs a mapping of each character to its index in the `keyboard`.
   - It iterates over each character in the `word`, calculates the necessary pushes using `calculateDistance`, and sums these pushes.
3. **Main Function**: Demonstrates an example usage of the class and function, enabling you to see the result of typing a specific word.

### Complexity Analysis:
- **Time Complexity**: O(n + m), where n is the size of the keyboard and m is the size of the word. Mapping characters takes O(n) and calculating pushes takes O(m).
- **Space Complexity**: O(n) for the key-index mapping.

This solution is efficient and effectively solves the problem while maintaining clarity.