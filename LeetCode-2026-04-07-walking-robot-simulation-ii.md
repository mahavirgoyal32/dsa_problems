# LeetCode Daily – 2026-04-07

## 🧠 Problem #2069 – **Walking Robot Simulation II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/walking-robot-simulation-ii)

---

### 📝 Problem Description

A width x height grid is on an XY-plane with the bottom-left cell at (0, 0) and the top-right cell at (width - 1, height - 1). The grid is aligned with the four cardinal directions (&quot;North&quot;, &quot;East&quot;, &quot;South&quot;, and &quot;West&quot;). A robot is initially at cell (0, 0) facing direction &quot;East&quot;.

The robot can be instructed to move for a specific number of steps. For each step, it does the following.


	Attempts to move forward one cell in the direction it is facing.
	If the cell the robot is moving to is out of bounds, the robot instead turns 90 degrees counterclockwise and retries the step.


After the robot finishes moving the number of steps required, it stops and awaits the next instruction.

Implement the Robot class:


	Robot(int width, int height) Initializes the width x height grid with the robot at (0, 0) facing &quot;East&quot;.
	void step(int num) Instructs the robot to move forward num steps.
	int[] getPos() Returns the current cell the robot is at, as an array of length 2, [x, y].
	String getDir() Returns the current direction of the robot, &quot;North&quot;, &quot;East&quot;, &quot;South&quot;, or &quot;West&quot;.


 
Example 1:


Input
[&quot;Robot&quot;, &quot;step&quot;, &quot;step&quot;, &quot;getPos&quot;, &quot;getDir&quot;, &quot;step&quot;, &quot;step&quot;, &quot;step&quot;, &quot;getPos&quot;, &quot;getDir&quot;]
[[6, 3], [2], [2], [], [], [2], [1], [4], [], []]
Output
[null, null, null, [4, 0], &quot;East&quot;, null, null, null, [1, 2], &quot;West&quot;]

Explanation
Robot robot = new Robot(6, 3); // Initialize the grid and the robot at (0, 0) facing East.
robot.step(2);  // It moves two steps East to (2, 0), and faces East.
robot.step(2);  // It moves two steps East to (4, 0), and faces East.
robot.getPos(); // return [4, 0]
robot.getDir(); // return &quot;East&quot;
robot.step(2);  // It moves one step East to (5, 0), and faces East.
                // Moving the next step East would be out of bounds, so it turns and faces North.
                // Then, it moves one step North to (5, 1), and faces North.
robot.step(1);  // It moves one step North to (5, 2), and faces North (not West).
robot.step(4);  // Moving the next step North would be out of bounds, so it turns and faces West.
                // Then, it moves four steps West to (1, 2), and faces West.
robot.getPos(); // return [1, 2]
robot.getDir(); // return &quot;West&quot;



 
Constraints:


	2 <= width, height <= 100
	1 <= num <= 105
	At most 104 calls in total will be made to step, getPos, and getDir.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Walking Robot Simulation II" asks us to simulate a robot's movement in a 2D plane. The robot starts at the origin (0, 0) and moves according to a series of commands. Each command instructs the robot to move in a specific direction and for a specific distance. We also need to manage obstacles that the robot cannot pass through.

### Problem Breakdown:
1. **Directions**: The robot can face up (north), right (east), down (south), and left (west). 
   - The direction changes every time the robot completes a 90-degree turn in either direction.
   
2. **Movement**: The commands can specify a direction to move in terms of how many steps to take after potentially rotating.

3. **Obstacles**: The robot's movement is restricted by obstacles placed at specific grid coordinates. If the robot tries to move into a cell occupied by an obstacle, it stays in its current position.

4. **Output**: The task is to find the farthest squared distance from the origin that the robot can reach after executing all commands.

### Implementation Steps:
1. Define the movement directions and their corresponding changes in the (x, y) coordinates.
2. Use a set to store obstacles for O(1) lookup.
3. Simulate the robot's movements based on the provided commands, checking for obstacles before moving to ensure the robot doesn't pass through them.
4. Keep track of the maximum squared distance from the origin reached during the simulation.

### C++ Code Example:
Here's how we can implement the above logic in C++:

```cpp
#include <vector>
#include <unordered_set>
#include <utility>
#include <iostream>

using namespace std;

class Robot {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        // Directions: 0 = North, 1 = East, 2 = South, 3 = West
        int directions[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int x = 0, y = 0; // Starting position
        int dir = 0; // Starting direction (facing North)

        // Use a set for quick obstacle lookup
        unordered_set<string> obstacleSet;
        for (const auto& obs : obstacles) {
            obstacleSet.insert(to_string(obs[0]) + "," + to_string(obs[1]));
        }

        int maxDistanceSquared = 0;

        for (const int& command : commands) {
            if (command == -2) { // Turn left
                dir = (dir + 3) % 4;
            } else if (command == -1) { // Turn right
                dir = (dir + 1) % 4;
            } else { // Move forward
                for (int k = 0; k < command; ++k) {
                    int newX = x + directions[dir][0];
                    int newY = y + directions[dir][1];
                    if (obstacleSet.find(to_string(newX) + "," + to_string(newY)) == obstacleSet.end()) {
                        x = newX; // Update if no obstacle
                        y = newY;
                        maxDistanceSquared = max(maxDistanceSquared, x*x + y*y);
                    } else {
                        break; // Stop moving if an obstacle is encountered
                    }
                }
            }
        }

        return maxDistanceSquared;
    }
};

int main() {
    Robot robot;
    vector<int> commands = {4, -1, 3, -2, 2};
    vector<vector<int>> obstacles = {{2, 4}};
    cout << robot.robotSim(commands, obstacles) << endl; // Output result
    return 0;
}
```

### Explanation of the Code:
- We define the movement directions in a 2D array.
- The robot's starting position (`x`, `y`) and direction (`dir`) are initialized.
- Obstacles are stored in a `unordered_set` for fast access.
- We iterate through each command:
  - If the command is `-2` or `-1`, we adjust the direction accordingly.
  - If the command is a positive integer, we attempt to move that number of steps in the current direction, checking for obstacles with each step.
- After each move, we calculate the squared distance from the origin and update the maximum if it's greater than the current max.

### Complexity:
- **Time Complexity**: O(N + M) where N is the number of commands and M is the number of obstacles, since we may check each obstacle once and process each command.
- **Space Complexity**: O(M) for storing the obstacles. 

This implementation efficiently models the problem as required and maintains clarity in control flow with straightforward management of robot commands and direction changes.