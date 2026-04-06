# LeetCode Daily – 2026-04-06

## 🧠 Problem #874 – **Walking Robot Simulation**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/walking-robot-simulation)

---

### 📝 Problem Description

A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot receives an array of integers commands, which represents a sequence of moves that it needs to execute. There are only three possible types of instructions the robot can receive:


	-2: Turn left 90 degrees.
	-1: Turn right 90 degrees.
	1 <= k <= 9: Move forward k units, one unit at a time.


Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, it will stay in its current location (on the block adjacent to the obstacle) and move onto the next command.

Return the maximum squared Euclidean distance that the robot reaches at any point in its path (i.e. if the distance is 5, return 25).

Note:


	There can be an obstacle at (0, 0). If this happens, the robot will ignore the obstacle until it has moved off the origin. However, it will be unable to return to (0, 0) due to the obstacle.
	North means +Y direction.
	East means +X direction.
	South means -Y direction.
	West means -X direction.


 
Example 1:


Input: commands = [4,-1,3], obstacles = []

Output: 25

Explanation: 

The robot starts at (0, 0):


	Move north 4 units to (0, 4).
	Turn right.
	Move east 3 units to (3, 4).


The furthest point the robot ever gets from the origin is (3, 4), which squared is 32 + 42 = 25 units away.


Example 2:


Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]

Output: 65

Explanation:

The robot starts at (0, 0):


	Move north 4 units to (0, 4).
	Turn right.
	Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
	Turn left.
	Move north 4 units to (1, 8).


The furthest point the robot ever gets from the origin is (1, 8), which squared is 12 + 82 = 65 units away.


Example 3:


Input: commands = [6,-1,-1,6], obstacles = [[0,0]]

Output: 36

Explanation:

The robot starts at (0, 0):


	Move north 6 units to (0, 6).
	Turn right.
	Turn right.
	Move south 5 units and get blocked by the obstacle at (0,0), robot is at (0, 1).


The furthest point the robot ever gets from the origin is (0, 6), which squared is 62 = 36 units away.


 
Constraints:


	1 <= commands.length <= 104
	commands[i] is either -2, -1, or an integer in the range [1, 9].
	0 <= obstacles.length <= 104
	-3 * 104 <= xi, yi <= 3 * 104
	The answer is guaranteed to be less than 231.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Walking Robot Simulation" problem on LeetCode involves simulating a robot that can move in a 2D space based on provided commands. Let's break down the problem and provide a solution in C++.

### Problem Explanation

You have a robot that can move in a 2D grid based on given commands. The robot starts at the origin `(0, 0)` and can face one of four directions: north (0), east (1), south (2), or west (3). The commands can be:

- `-2`: Turn left 90 degrees
- `-1`: Turn right 90 degrees
- `1`: Move forward 1 unit

The robot can move through the grid, but the obstacle positions are given, and the robot should not move through these obstacles. The task is to simulate the robot's movement based on the commands and return the maximum squared distance from the origin that the robot reaches.

### Key Steps in Solution

1. **Direction Mapping**: Use an array to represent the directions (north, east, south, west).
2. **Initial Setup**: Start at `(0, 0)` and an initial direction facing north.
3. **Process Commands**:
   - If the command is `1`, move in the current direction if the next position isn't an obstacle.
   - If the command is `-2`, change the direction to the left.
   - If the command is `-1`, change the direction to the right.
4. **Track Maximum Distance**: After executing commands, calculate the squared distance from the origin and update the maximum found.

### C++ Code Implementation

Here is the C++ implementation of the above logic:

```cpp
#include <vector>
#include <set>
#include <algorithm>

using namespace std;

class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        // Define the direction vectors for north, east, south, and west
        vector<pair<int, int>> direction{{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int x = 0, y = 0; // Robot's initial position
        int dir = 0; // Initially facing north
        set<pair<int, int>> obstacleSet; // Store obstacles for quick lookup
        
        // Add obstacles to a set for O(1) access
        for (const auto& obstacle : obstacles) {
            obstacleSet.insert({obstacle[0], obstacle[1]});
        }
        
        int maxDistanceSquared = 0;
        
        // Process each command
        for (int cmd : commands) {
            if (cmd == -2) { // Turn left
                dir = (dir + 3) % 4; // Change direction counter-clockwise
            } else if (cmd == -1) { // Turn right
                dir = (dir + 1) % 4; // Change direction clockwise
            } else { // Move forward
                for (int step = 0; step < cmd; ++step) {
                    int newX = x + direction[dir].first;
                    int newY = y + direction[dir].second;
                    
                    // Check if the new position is not an obstacle
                    if (obstacleSet.find({newX, newY}) == obstacleSet.end()) {
                        x = newX;
                        y = newY; // Move to the new position
                        // Update the maximum distance squared
                        maxDistanceSquared = max(maxDistanceSquared, x * x + y * y);
                    } else {
                        break; // If there's an obstacle, stop moving in that direction
                    }
                }
            }
        }
        
        return maxDistanceSquared; // Return the maximum squared distance from origin
    }
};
```

### Explanation of the Code

- **Direction Management**: We use a vector of pairs to represent our movement directions, where each index corresponds to a direction (0 for north, 1 for east, etc.). This helps in determining how to update the robot's position based on its current direction.
- **Obstacle Handling**: Obstacles are stored in a set for efficient look-up time when checking if the robot can move to the next position.
- **Command Processing**: We iterate through each command. For left and right turn commands, we simply adjust the current direction. For forward movement, we check for obstacles and move step by step while updating the traversed position.
- **Distance Calculation**: We track and update the maximum squared distance every time the robot successfully moves.

This solution efficiently simulates the robot's behavior and computes the desired output as required by the problem statement.