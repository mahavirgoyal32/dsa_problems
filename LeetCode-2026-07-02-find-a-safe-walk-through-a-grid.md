# LeetCode Daily – 2026-07-02

## 🧠 Problem #3286 – **Find a Safe Walk Through a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-a-safe-walk-through-a-grid)

---

### 📝 Problem Description

You are given an m x n binary matrix grid and an integer health.

You start on the upper-left corner (0, 0) and would like to get to the lower-right corner (m - 1, n - 1).

You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains positive.

Cells (i, j) with grid[i][j] = 1 are considered unsafe and reduce your health by 1.

Return true if you can reach the final cell with a health value of 1 or more, and false otherwise.

 
Example 1:


Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1

Output: true

Explanation:

The final cell can be reached safely by walking along the gray cells below.


Example 2:


Input: grid = [[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], health = 3

Output: false

Explanation:

A minimum of 4 health points is needed to reach the final cell safely.


Example 3:


Input: grid = [[1,1,1],[1,0,1],[1,1,1]], health = 5

Output: true

Explanation:

The final cell can be reached safely by walking along the gray cells below.



Any path that does not go through the cell (1, 1) is unsafe since your health will drop to 0 when reaching the final cell.


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 50
	2 <= m * n
	1 <= health <= m + n
	grid[i][j] is either 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Find a Safe Walk Through a Grid" requires you to determine if there is a safe path through a given grid of integers. The primary goal is to find a path from the top-left corner to the bottom-right corner of the grid while avoiding danger zones (cells with positive values) and navigating through cells that are marked as safe (cells with a value of 0).

Here's the basic outline of the solution approach:

1. **Grid Representation**: The grid is represented as a 2D vector of integers, where each integer indicates whether the cell is safe (0) or dangerous (a positive number).

2. **Depth-First Search (DFS)**: A common approach for path-finding problems in grid scenarios is to use DFS or Breadth-First Search (BFS). We'll use DFS to explore all possible paths from the start cell to the destination cell.

3. **Tracking Visited Cells**: We need to ensure not to visit the same cell multiple times to prevent infinite loops. This can be managed via a 2D boolean vector that marks visited cells.

4. **Path Exploration**: Starting from the top-left corner, we recursively explore all four possible directions (up, down, left, right). We only consider a cell as a valid move if:
   - It is within the bounds of the grid,
   - It has not been visited yet, and
   - It is a safe cell (value should be 0).

5. **Base Cases**:
   - If we reach the bottom-right corner, we have found a safe path.
   - If the current cell is out-of-bounds or is not safe, we backtrack.

6. **Result Handling**: The result can be returned based on whether we found a path or not.

Here is a sample implementation of this solution in C++:

```cpp
#include <vector>

class Solution {
public:
    bool isSafePath(std::vector<std::vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();

        // Early exit if the start or end positions are not safe
        if (grid[0][0] != 0 || grid[rows - 1][cols - 1] != 0) {
            return false;
        }

        // Create a visited 2D vector
        std::vector<std::vector<bool>> visited(rows, std::vector<bool>(cols, false));

        // Start the DFS from (0, 0)
        return dfs(grid, 0, 0, visited);
    }

private:
    // Directions: right, down, left, up
    const std::vector<std::pair<int, int>> directions = {
        {0, 1},  // right
        {1, 0},  // down
        {0, -1}, // left
        {-1, 0}  // up
    };

    bool dfs(std::vector<std::vector<int>>& grid, int x, int y, std::vector<std::vector<bool>>& visited) {
        int rows = grid.size();
        int cols = grid[0].size();

        // If we reached the bottom-right corner
        if (x == rows - 1 && y == cols - 1) {
            return true;
        }

        // Mark the cell as visited
        visited[x][y] = true;

        // Explore the four potential directions
        for (const auto& direction : directions) {
            int newX = x + direction.first;
            int newY = y + direction.second;

            // Check if the new position is valid
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols &&
                !visited[newX][newY] && grid[newX][newY] == 0) {
                if (dfs(grid, newX, newY, visited)) {
                    return true;
                }
            }
        }

        // Backtrack: unmark the cell as visited
        visited[x][y] = false;
        return false;
    }
};
```

### Explanation of the Code:

1. **Function `isSafePath`**:
   - It initializes the grid dimensions and checks if the starting and ending cells are safe.
   - It also initializes the visited vector and starts the DFS process.

2. **Function `dfs`**:
   - It takes the current cell coordinates (`x`, `y`), and the visited vector.
   - It checks if we have reached the destination. If so, it returns true.
   - It then marks the cell as visited and loops through the possible directions.
   - For each direction, it calculates the new cell coordinates and checks if they are valid.
   - If a safe path is found recursively, it returns true. Otherwise, it performs backtracking by unmarking the cell.

Using this DFS approach ensures that we systematically explore all available safe paths and can efficiently determine if a safe walk exists through the grid.