# LeetCode Daily – 2026-04-24

## 🧠 Problem #2833 – **Furthest Point From Origin**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/furthest-point-from-origin)

---

### 📝 Problem Description

You are given a string moves of length n consisting only of characters &#39;L&#39;, &#39;R&#39;, and &#39;_&#39;. The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:


	move to the left if moves[i] = &#39;L&#39; or moves[i] = &#39;_&#39;
	move to the right if moves[i] = &#39;R&#39; or moves[i] = &#39;_&#39;


Return the distance from the origin of the furthest point you can get to after n moves.

 
Example 1:


Input: moves = &quot;L_RL__R&quot;
Output: 3
Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves &quot;LLRLLLR&quot;.


Example 2:


Input: moves = &quot;_R__LL_&quot;
Output: 5
Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves &quot;LRLLLLL&quot;.


Example 3:


Input: moves = &quot;_______&quot;
Output: 7
Explanation: The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves &quot;RRRRRRR&quot;.


 
Constraints:


	1 <= moves.length == n <= 50
	moves consists only of characters &#39;L&#39;, &#39;R&#39; and &#39;_&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Furthest Point From Origin" on LeetCode can be described as follows:

**Problem Statement:**
You are given a string `moves` which consists of characters `L`, `R`, `U`, and `D`, representing movements in a 2D plane:

 - `L` - move left (decrease x-coordinate by 1)
 - `R` - move right (increase x-coordinate by 1)
 - `U` - move up (increase y-coordinate by 1)
 - `D` - move down (decrease y-coordinate by 1)

The goal is to determine the maximum distance from the origin (0,0) you can achieve after performing all the moves specified in the string. 

**Distance Calculation:**
The distance from the origin can be calculated using the Manhattan distance formula:
\[ \text{distance} = |x| + |y| \]
where \( x \) and \( y \) are the coordinates after all movements.

**Approach:**
1. Initialize two counters, `x` and `y`, to track the net movements in the x and y directions respectively.
2. Loop through each character in the string `moves` and update `x` and `y` based on the character.
3. After processing all the moves, calculate the Manhattan distance using the formula above.
4. Return the calculated distance as the result.

Here’s the implementation in C++:

```cpp
#include <iostream>
#include <string>
#include <cmath>

class Solution {
public:
    int furthestDistanceFromOrigin(std::string moves) {
        // Initialize the x and y coordinates
        int x = 0;
        int y = 0;

        // Iterate through each move
        for (char move : moves) {
            switch (move) {
                case 'L': // Move left
                    x--;
                    break;
                case 'R': // Move right
                    x++;
                    break;
                case 'U': // Move up
                    y++;
                    break;
                case 'D': // Move down
                    y--;
                    break;
            }
        }

        // Calculate the Manhattan distance from the origin (0,0)
        return std::abs(x) + std::abs(y);
    }
};

// Example usage
int main() {
    Solution sol;
    std::string moves = "UDLR"; // Example input
    std::cout << sol.furthestDistanceFromOrigin(moves) << std::endl; // Output: 0
    return 0;
}
```

### Explanation of the Code:
1. **Class Definition & Method**: We define a class `Solution` containing the method `furthestDistanceFromOrigin` which takes moves as a string.
  
2. **Movement Calculation**:
   - Initialize `x` and `y` to 0. 
   - Loop through each character in the string and update `x` and `y` based on the direction indicated by the character.
  
3. **Distance Calculation**:
   - Use `std::abs` to ensure we're calculating the absolute value of `x` and `y`.
   - The return value is the sum of these absolute values, which gives the Manhattan distance from the origin.

4. **Example Usage**:
   - We create an instance of `Solution`, and call `furthestDistanceFromOrigin` with an example input.
   - The result is printed to the console.

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the length of the string `moves`. We iterate through the string once.
- **Space Complexity**: O(1), as we are using a constant amount of space regardless of the input size.

This solution effectively calculates the furthest distance from the origin after processing the given moves and provides the desired result efficiently.