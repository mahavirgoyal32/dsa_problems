# LeetCode Daily – 2026-04-05

## 🧠 Problem #657 – **Robot Return to Origin**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/robot-return-to-origin)

---

### 📝 Problem Description

There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are &#39;R&#39; (right), &#39;L&#39; (left), &#39;U&#39; (up), and &#39;D&#39; (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is &quot;facing&quot; is irrelevant. &#39;R&#39; will always make the robot move to the right once, &#39;L&#39; will always make it move left, etc. Also, assume that the magnitude of the robot&#39;s movement is the same for each move.

 
Example 1:


Input: moves = &quot;UD&quot;
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.


Example 2:


Input: moves = &quot;LL&quot;
Output: false
Explanation: The robot moves left twice. It ends up two &quot;moves&quot; to the left of the origin. We return false because it is not at the origin at the end of its moves.


 
Constraints:


	1 <= moves.length <= 2 * 104
	moves only contains the characters &#39;U&#39;, &#39;D&#39;, &#39;L&#39; and &#39;R&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Robot Return to Origin" can be described as follows:

### Problem Description

A robot starts at the origin point `(0, 0)` on a 2D plane, and then it moves based on a string composed of the characters `U`, `D`, `L`, `R`, which represent moves up, down, left, and right, respectively. The question asks whether the robot returns to the origin after executing the instructions.

### Plan

To determine if the robot returns to the origin, we need to keep track of its movements. The key observations are:
- Each `U` (up) increases the y-coordinate by 1.
- Each `D` (down) decreases the y-coordinate by 1.
- Each `L` (left) decreases the x-coordinate by 1.
- Each `R` (right) increases the x-coordinate by 1.

To return to the origin:
- The number of `U` moves must equal the number of `D` moves.
- The number of `L` moves must equal the number of `R` moves.

### Solution

The approach can be broken down into the following steps:
1. Initialize counters for the vertical (up-down) and horizontal (left-right) movements.
2. Iterate through the command string, updating the counters based on the robot's movements.
3. At the end of the iteration, check whether both counters are zero. If they are, then the robot is back at the origin.

### C++ Code

Here is the C++ implementation of the above logic:

```cpp
#include <string>

class Solution {
public:
    bool judgeCircle(std::string moves) {
        // Initialize counters for vertical and horizontal movements
        int vertical = 0;
        int horizontal = 0;
        
        // Iterate through each character in the moves string
        for (char move : moves) {
            if (move == 'U') {
                vertical++; // Move up
            } else if (move == 'D') {
                vertical--; // Move down
            } else if (move == 'L') {
                horizontal--; // Move left
            } else if (move == 'R') {
                horizontal++; // Move right
            }
        }
        
        // Check if we are back at the origin
        return vertical == 0 && horizontal == 0;
    }
};
```

### Explanation of the Code
1. The function `judgeCircle` accepts a string `moves` as input, which represents the sequence of moves made by the robot.
2. We declare two integer variables, `vertical` and `horizontal`, to track the net vertical and horizontal movements.
3. We loop through each character in the string:
   - Increment `vertical` for `U` and decrement it for `D`.
   - Increment `horizontal` for `R` and decrement it for `L`.
4. After processing all moves, we check if both `vertical` and `horizontal` are zero. If they are both zero, it means the robot has returned to the origin, and we return `true`. Otherwise, we return `false`.

### Time and Space Complexity
- **Time Complexity**: \( O(n) \) where \( n \) is the length of the `moves` string, since we process each character exactly once.
- **Space Complexity**: \( O(1) \) since we only use a fixed amount of space for the counters.

This solution efficiently checks if the robot has returned to its original position based on its movement instructions.