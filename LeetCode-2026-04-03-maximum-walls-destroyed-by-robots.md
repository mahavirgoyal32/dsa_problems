# LeetCode Daily – 2026-04-03

## 🧠 Problem #3661 – **Maximum Walls Destroyed by Robots**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-walls-destroyed-by-robots)

---

### 📝 Problem Description

There is an endless straight line populated with some robots and walls. You are given integer arrays robots, distance, and walls:



	robots[i] is the position of the ith robot.
	distance[i] is the maximum distance the ith robot&#39;s bullet can travel.
	walls[j] is the position of the jth wall.


Every robot has one bullet that can either fire to the left or the right at most distance[i] meters.

A bullet destroys every wall in its path that lies within its range. Robots are fixed obstacles: if a bullet hits another robot before reaching a wall, it immediately stops at that robot and cannot continue.

Return the maximum number of unique walls that can be destroyed by the robots.

Notes:


	A wall and a robot may share the same position; the wall can be destroyed by the robot at that position.
	Robots are not destroyed by bullets.


 
Example 1:


Input: robots = [4], distance = [3], walls = [1,10]

Output: 1

Explanation:


	robots[0] = 4 fires left with distance[0] = 3, covering [1, 4] and destroys walls[0] = 1.
	Thus, the answer is 1.



Example 2:


Input: robots = [10,2], distance = [5,1], walls = [5,2,7]

Output: 3

Explanation:


	robots[0] = 10 fires left with distance[0] = 5, covering [5, 10] and destroys walls[0] = 5 and walls[2] = 7.
	robots[1] = 2 fires left with distance[1] = 1, covering [1, 2] and destroys walls[1] = 2.
	Thus, the answer is 3.


Example 3:


Input: robots = [1,2], distance = [100,1], walls = [10]

Output: 0

Explanation:

In this example, only robots[0] can reach the wall, but its shot to the right is blocked by robots[1]; thus the answer is 0.


 
Constraints:


	1 <= robots.length == distance.length <= 105
	1 <= walls.length <= 105
	1 <= robots[i], walls[j] <= 109
	1 <= distance[i] <= 105
	All values in robots are unique
	All values in walls are unique

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Walls Destroyed by Robots" on LeetCode presents a scenario where we have a grid with robots and walls. Each robot can destroy walls in its line of sight until it encounters either another robot or a boundary of the grid. The goal is to find the maximum number of walls that can be destroyed by the robots.

Here's how we can approach the solution:

### Problem Breakdown

1. **Input Representation**:
   - A grid represented by a 2D vector `grid` where:
     - `0` represents an empty space,
     - `1` represents a wall,
     - `2` represents a robot.
     
2. **Movement Directions**:
   - Each robot can destroy walls in four possible directions: up, down, left, and right.
   
3. **Counting Destroyed Walls**:
   - For each robot, we will need to count how many walls can be destroyed in each direction until we hit either the edge of the grid or another robot.

4. **Data Structures**:
   - A grid to keep track of the count of walls that can be destroyed in each direction.
   - Using four passes through the grid to evaluate the walls in each direction for all robots.

### Steps to Solve

1. Traverse the entire grid to locate all robots' positions.
2. For each robot, check in all four directions (up, down, left, right) and count the number of walls that can be destroyed.
3. Maintain a running maximum of walls destroyed for each robot's position.
4. Return the maximum walls destroyed by any robot.

### Implementation in C++

Here's a C++ implementation that addresses the problem:

```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maximumWallsDestroyed(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int maxWallsDestroyed = 0;

        // Process each cell in the grid
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                // Check if the current cell has a robot
                if (grid[i][j] == 2) {
                    int wallsDestroyed = 0;

                    // Count walls to the right
                    for (int k = j + 1; k < cols && grid[i][k] != 2; ++k) {
                        if (grid[i][k] == 1) wallsDestroyed++;
                    }

                    // Count walls to the left
                    for (int k = j - 1; k >= 0 && grid[i][k] != 2; --k) {
                        if (grid[i][k] == 1) wallsDestroyed++;
                    }

                    // Count walls downwards
                    for (int k = i + 1; k < rows && grid[k][j] != 2; ++k) {
                        if (grid[k][j] == 1) wallsDestroyed++;
                    }

                    // Count walls upwards
                    for (int k = i - 1; k >= 0 && grid[k][j] != 2; --k) {
                        if (grid[k][j] == 1) wallsDestroyed++;
                    }

                    // Update maximum walls destroyed by a robot
                    maxWallsDestroyed = max(maxWallsDestroyed, wallsDestroyed);
                }
            }
        }

        return maxWallsDestroyed;
    }
};
```

### Explanation of the Code

1. **Initialization**: We use a variable, `maxWallsDestroyed`, to keep track of the maximum number of walls that can be destroyed by any robot on the grid.

2. **Double Loop for Grid Traversal**: We iterate through each cell of the grid. When we encounter a robot (value of `2`), we reset `wallsDestroyed` and check all four directions.

3. **Direction-Specific Counting**:
   - We use four separate loops to count the walls in each direction. For each direction, we move until we hit another robot or the edge of the grid.
   - Each time we encounter a wall (`1`), we increment `wallsDestroyed`.

4. **Updating the Maximum**: After counting for the robot, we check if the current `wallsDestroyed` count is greater than `maxWallsDestroyed`, and if so, update it.

5. **Returning the Result**: After processing the entire grid, we return `maxWallsDestroyed`.

### Complexity Analysis
- **Time Complexity**: O(n * m * k) where n is the number of rows, m is the number of columns, and k is the maximum length of the continuous path in any direction.
- **Space Complexity**: O(1), as we are using a fixed amount of extra space. 

This solution efficiently counts the maximum walls that can be destroyed by robots in a grid setting.