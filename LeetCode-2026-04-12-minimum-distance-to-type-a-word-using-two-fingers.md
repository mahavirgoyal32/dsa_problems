# LeetCode Daily – 2026-04-12

## 🧠 Problem #1320 – **Minimum Distance to Type a Word Using Two Fingers**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers)

---

### 📝 Problem Description

You have a keyboard layout as shown above in the X-Y plane, where each English uppercase letter is located at some coordinate.


	For example, the letter &#39;A&#39; is located at coordinate (0, 0), the letter &#39;B&#39; is located at coordinate (0, 1), the letter &#39;P&#39; is located at coordinate (2, 3) and the letter &#39;Z&#39; is located at coordinate (4, 1).


Given the string word, return the minimum total distance to type such string using only two fingers.

The distance between coordinates (x1, y1) and (x2, y2) is |x1 - x2| + |y1 - y2|.

Note that the initial positions of your two fingers are considered free so do not count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters.

 
Example 1:


Input: word = &quot;CAKE&quot;
Output: 3
Explanation: Using two fingers, one optimal way to type &quot;CAKE&quot; is: 
Finger 1 on letter &#39;C&#39; -> cost = 0 
Finger 1 on letter &#39;A&#39; -> cost = Distance from letter &#39;C&#39; to letter &#39;A&#39; = 2 
Finger 2 on letter &#39;K&#39; -> cost = 0 
Finger 2 on letter &#39;E&#39; -> cost = Distance from letter &#39;K&#39; to letter &#39;E&#39; = 1 
Total distance = 3


Example 2:


Input: word = &quot;HAPPY&quot;
Output: 6
Explanation: Using two fingers, one optimal way to type &quot;HAPPY&quot; is:
Finger 1 on letter &#39;H&#39; -> cost = 0
Finger 1 on letter &#39;A&#39; -> cost = Distance from letter &#39;H&#39; to letter &#39;A&#39; = 2
Finger 2 on letter &#39;P&#39; -> cost = 0
Finger 2 on letter &#39;P&#39; -> cost = Distance from letter &#39;P&#39; to letter &#39;P&#39; = 0
Finger 1 on letter &#39;Y&#39; -> cost = Distance from letter &#39;A&#39; to letter &#39;Y&#39; = 4
Total distance = 6


 
Constraints:


	2 <= word.length <= 300
	word consists of uppercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Minimum Distance to Type a Word Using Two Fingers" involves calculating the minimum distance required to type out a given word on a keyboard layout, where you can use two fingers to move around simultaneously. 

### Problem Explanation

The keyboard is laid out in a specific way (often a QWERTY layout), and you need to calculate the minimum distance traveled by two fingers when typing each character of a given word. You can choose any two positions for your fingers and move them to type out the word, minimizing the total distance traveled.

### Approach

1. **Keyboard Representation**: We'll represent the keyboard with a mapping of each character to its (x, y) coordinates.

2. **Dynamic Programming (DP) Approach**: 
   - We will keep track of the positions of the two fingers as they move to type each character of the target word.
   - We'll maintain a DP table where `dp[i][j][k]` represents the minimum distance required to type the first `i` characters of the word, where the first finger is at character `j` and the second finger is at character `k`.
   - The base case will initialize the position of the fingers at the starting position (which we can consider as not on any character).
  
3. **Transition**: When typing the next character in the word, we have the choice to move either finger to that character while keeping track of the accumulated distance.

4. **Calculate the Distance**: The distance between two characters based on their (x, y) coordinates can be computed using the Manhattan distance formula: 
   \[
   \text{Distance} = |x_1 - x_2| + |y_1 - y_2|
   \]

### C++ Solution

Here’s how this can be implemented in C++:

```cpp
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
#include <limits>
#include <cmath>

class Solution {
public:
    // Keyboard mapping
    std::unordered_map<char, std::pair<int, int>> keyPos = {
        {'a', {0, 0}}, {'b', {0, 1}}, {'c', {0, 2}}, {'d', {0, 3}}, {'e', {0, 4}}, 
        {'f', {0, 5}}, {'g', {0, 6}}, {'h', {0, 7}}, {'i', {0, 8}}, {'j', {0, 9}}, 
        {'k', {1, 0}}, {'l', {1, 1}}, {'m', {1, 2}}, {'n', {1, 3}}, {'o', {1, 4}}, 
        {'p', {1, 5}}, {'q', {1, 6}}, {'r', {1, 7}}, {'s', {1, 8}}, {'t', {1, 9}}, 
        {'u', {2, 0}}, {'v', {2, 1}}, {'w', {2, 2}}, {'x', {2, 3}}, {'y', {2, 4}},
        {'z', {2, 5}}, {' ', {2, 6}} // Including space
    };
    
    int getDistance(const std::pair<int, int>& pos1, const std::pair<int, int>& pos2) {
        return abs(pos1.first - pos2.first) + abs(pos1.second - pos2.second);
    }
    
    int minimumDistance(std::string word) {
        int n = word.length();
        std::vector<std::vector<std::vector<int>>> dp(n + 1, std::vector<std::vector<int>>(27, std::vector<int>(27, INT_MAX)));
        
        // Initial positions of fingers at position -1 (not on any key)
        dp[0][26][26] = 0; // Assume -1 is the not initially on any character position
        
        for (int i = 1; i <= n; i++) {
            char targetChar = word[i - 1];
            auto targetPos = keyPos[targetChar];
            
            for (int j = 0; j < 27; j++) { // Finger 1 position
                for (int k = 0; k < 27; k++) { // Finger 2 position
                    if (dp[i - 1][j][k] == INT_MAX) continue; // Skip invalid states
                    // Move finger 1 to the target character
                    dp[i][keyIndex(targetChar)][k] = std::min(dp[i][keyIndex(targetChar)][k], dp[i - 1][j][k] + getDistance(keyPos[keyCharIndex(j)], targetPos));
                    // Move finger 2 to the target character
                    dp[i][j][keyIndex(targetChar)] = std::min(dp[i][j][keyIndex(targetChar)], dp[i - 1][j][k] + getDistance(keyPos[keyCharIndex(k)], targetPos));
                }
            }
        }
        
        int minimumMoves = INT_MAX;
        for (int j = 0; j < 27; j++) {
            for (int k = 0; k < 27; k++) {
                minimumMoves = std::min(minimumMoves, dp[n][j][k]);
            }
        }
        
        return minimumMoves;
    }

private:
    int keyIndex(char c) {
        // Map char to index
        if (c == ' ') return 26;
        return c - 'a';
    }
    
    char keyCharIndex(int index) {
        if (index == 26) return ' ';
        return 'a' + index;
    }
};
```

### Explanation of the Code

1. **Key Position Mapping**: We create a mapping of each character to its coordinates on the keyboard.

2. **Distance Calculation**: The `getDistance` method computes the Manhattan distance between two positions.

3. **Dynamic Programming Setup**:
   - We initialize a 3D DP array.
   - Start from `dp[0][26][26]`, representing that both fingers are at the starting index (-1, represented with 26), not on any key initially.

4. **State Transition**: For each character of the word:
   - Update DP table states based on moving either finger to the current target character.

5. **Result Extraction**: After processing all characters, retrieve the minimum distance from the last row of the DP table.

This approach effectively captures the minimum distance required to type the word using the optimal transitions for the fingers. The overall complexity is significant due to the nested loops traversing the DP state. 

This solution provides a clear structure that relates to the problem statement while making use of dynamic programming for optimal calculations.