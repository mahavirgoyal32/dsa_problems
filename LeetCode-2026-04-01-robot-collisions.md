# LeetCode Daily – 2026-04-01

## 🧠 Problem #2751 – **Robot Collisions**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/robot-collisions)

---

### 📝 Problem Description

There are n 1-indexed robots, each having a position on a line, health, and movement direction.

You are given 0-indexed integer arrays positions, healths, and a string directions (directions[i] is either &#39;L&#39; for left or &#39;R&#39; for right). All integers in positions are unique.

All robots start moving on the line simultaneously at the same speed in their given directions. If two robots ever share the same position while moving, they will collide.

If two robots collide, the robot with lower health is removed from the line, and the health of the other robot decreases by one. The surviving robot continues in the same direction it was going. If both robots have the same health, they are both removed from the line.

Your task is to determine the health of the robots that survive the collisions, in the same order that the robots were given, i.e. final health of robot 1 (if survived), final health of robot 2 (if survived), and so on. If there are no survivors, return an empty array.

Return an array containing the health of the remaining robots (in the order they were given in the input), after no further collisions can occur.

Note: The positions may be unsorted.

 

 
Example 1:




Input: positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = &quot;RRRRR&quot;
Output: [2,17,9,15,10]
Explanation: No collision occurs in this example, since all robots are moving in the same direction. So, the health of the robots in order from the first robot is returned, [2, 17, 9, 15, 10].


Example 2:




Input: positions = [3,5,2,6], healths = [10,10,15,12], directions = &quot;RLRL&quot;
Output: [14]
Explanation: There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, and since both have the same health, they will be removed from the line. Next, robot 3 and robot 4 will collide and since robot 4&#39;s health is smaller, it gets removed, and robot 3&#39;s health becomes 15 - 1 = 14. Only robot 3 remains, so we return [14].


Example 3:




Input: positions = [1,2,5,6], healths = [10,10,11,11], directions = &quot;RLRL&quot;
Output: []
Explanation: Robot 1 and robot 2 will collide and since both have the same health, they are both removed. Robot 3 and 4 will collide and since both have the same health, they are both removed. So, we return an empty array, [].

 
Constraints:


	1 <= positions.length == healths.length == directions.length == n <= 105
	1 <= positions[i], healths[i] <= 109
	directions[i] == &#39;L&#39; or directions[i] == &#39;R&#39;
	All values in positions are distinct

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's tackle the LeetCode problem "Robot Collisions".

### Problem Description

You are given a string `directions` representing the positions and directions of robots on a 1D grid. Each robot can either go left ('L') or right ('R'). When two robots meet, they will collide and destroy each other if they are moving towards each other. The task is to determine the final positions of the robots after all collisions have occurred.

### Approach to Solution

The primary observations when solving this problem are:

1. Robots moving in the same direction will not affect each other.
2. Collisions occur only when a robot going right ('R') meets a robot going left ('L'). In such cases, both robots will be destroyed.
3. The results of robots can be visualized as a stack: 
   - Push 'R' onto the stack when we encounter it.
   - When encountering 'L', we need to handle the collision with the robots in the stack.

### Solution Steps

1. Initialize an empty stack to keep track of the robots.
2. Iterate through the `directions` string:
   - If you encounter 'R', push it onto the stack.
   - If you encounter 'L':
     - While the stack is not empty and the top of the stack is 'R' (indicating a collision):
       - Pop 'R' from the stack.
     - If the stack becomes empty, it means all 'R's have crashed with 'L', and you can add the 'L' to the final positions.
3. After processing all the robots, any remaining 'R's in the stack can be added to the results.
4. The final result is constructed from the stack.

### C++ Implementation

Here's how the solution can be implemented in C++:

```cpp
#include <iostream>
#include <stack>
#include <string>
#include <vector>

std::string robotCollision(std::string directions) {
    std::stack<char> stack;

    for (char c : directions) {
        // Handle the logic of robots moving
        if (c == 'R') {
            // Push 'R' onto the stack
            stack.push(c);
        } else if (c == 'L') {
            // Check for collision with 'R'
            while (!stack.empty() && stack.top() == 'R') {
                stack.pop(); // R robot collides with L robot
            }
            // If the stack is empty, it means L robot survives
            if (stack.empty() || (stack.top() == 'L')) {
                stack.push(c); // Push L onto the stack if no R is left to collide
            }
            // If the last robot on the stack is 'R', then both are destroyed, do nothing
        }
    }

    // Constructing the final positions of robots after all collisions
    std::string result;
    while (!stack.empty()) {
        result = stack.top() + result; // Create final string in proper order
        stack.pop();
    }
    
    return result.empty() ? "" : result; // Handle the case where all robots destroyed
}

int main() {
    std::string directions = "RLLRRRLL";
    std::cout << "Final positions of robots: " << robotCollision(directions) << std::endl;
    return 0;
}
```

### Explanation of the Code:

- We use a stack to simulate the movement of robots.
- We process each character in the `directions` string:
  - For 'R', we simply push it to the stack.
  - For 'L', we check for collisions with 'R' robots on the stack:
    - If there are any 'R's on the stack, we pop them until no 'R's are left or the top of the stack is 'L'.
    - If we get to an empty stack or the top is 'L', it's safe to push 'L'.
- Finally, we construct the result string by popping all remaining robots from the stack, ensuring they are added to the result in the same order they would appear in the input.

This effective use of a stack allows us to efficiently process the robots and resolve any collisions that occur. The time complexity of the solution is O(n), where n is the length of the string since we make a single pass through it.