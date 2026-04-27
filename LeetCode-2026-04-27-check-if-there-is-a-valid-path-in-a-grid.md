# LeetCode Daily – 2026-04-27

## 🧠 Problem #1391 – **Check if There is a Valid Path in a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid)

---

### 📝 Problem Description

You are given an m x n grid. Each cell of grid represents a street. The street of grid[i][j] can be:


	1 which means a street connecting the left cell and the right cell.
	2 which means a street connecting the upper cell and the lower cell.
	3 which means a street connecting the left cell and the lower cell.
	4 which means a street connecting the right cell and the lower cell.
	5 which means a street connecting the left cell and the upper cell.
	6 which means a street connecting the right cell and the upper cell.


You will initially start at the street of the upper-left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

 
Example 1:


Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).


Example 2:


Input: grid = [[1,2,1],[1,2,1]]
Output: false
Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)


Example 3:


Input: grid = [[1,1,2]]
Output: false
Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 300
	1 <= grid[i][j] <= 6

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Check if There is a Valid Path in a Grid" from LeetCode, we need to determine whether there is a valid path in a grid that consists of cells with walls. The walls of each cell dictate how we can move between the cells in the grid.

### Problem Explanation

The grid is represented by an `m x n` matrix where each cell contains a number indicating the walls present in that cell:
- `1` means we can move right.
- `2` means we can move down.
- `3` means we can move left.
- `4` means we can move up.
- `5` means we can move both left and right.
- `6` means we can move both up and down.

The task is to determine if there exists a path from the top-left corner (0,0) to the bottom-right corner (m-1,n-1) by moving through these cells according to the wall constraints.

### Approach

1. **Using BFS/DFS**: We can use either Breadth-First Search (BFS) or Depth-First Search (DFS) to explore the grid starting from the top-left corner. This traversal will check which cells are reachable.

2. **Direction Mapping**: We need to clearly define how each cell's number corresponds to possible movements:
   - For each of the six possible wall types, we can determine which neighboring cells we can move to.

3. **Visited Array**: To avoid processing the same cell multiple times, we need a boolean array to track which cells have been visited.

4. **Boundary Checks**: Ensure to check if the next cell is within the boundary of the grid and if we can actually move to that cell based on the walls.

### C++ Implementation

Here's the C++ solution implementing the above logic using BFS:

```cpp
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    bool hasValidPath(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        // Directions for right, down, left, up
        vector<pair<int, int>> directions = {
            {0, 1},  // right
            {1, 0},  // down
            {0, -1}, // left
            {-1, 0}  // up
        };
        
        // Wall connections
        vector<vector<int>> wallConnections = {
            {1, 3}, // 1 can connect to 3 (right to left)
            {2, 4}, // 2 can connect to 4 (down to up)
            {1, 4}, // 5 can connect to 1 (right to left) and 2 (down to up)
            {2, 3}, // 6 can connect to 2 (down to up) and 1 (right to left)
        };
        
        // Visited matrix to keep track of visited cells
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        queue<pair<int, int>> q;
        
        q.push({0, 0});
        visited[0][0] = true;
        
        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();
            
            // If we've reached the bottom-right corner
            if (x == m - 1 && y == n - 1) {
                return true;
            }
            
            for (int d = 0; d < 4; ++d) {
                // Get the target cell after moving in the direction d
                int newX = x + directions[d].first;
                int newY = y + directions[d].second;
                
                // Check if the new cell is within bounds
                if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newX][newY]) {
                    // Check if we can move to the new cell based on current cell's walls
                    // and if new cell can connect back to current cell through walls
                    int wallTypeCurrent = grid[x][y];
                    int wallTypeNext = grid[newX][newY];
                    
                    bool canGo = false;
                    if (d == 0 && (wallTypeCurrent == 1 || wallTypeCurrent == 5)) {
                        canGo = true;
                    } else if (d == 1 && (wallTypeCurrent == 2 || wallTypeCurrent == 5)) {
                        canGo = true;
                    } else if (d == 2 && (wallTypeCurrent == 3 || wallTypeCurrent == 5)) {
                        canGo = true;
                    } else if (d == 3 && (wallTypeCurrent == 4 || wallTypeCurrent == 6)) {
                        canGo = true;
                    }
                    
                    if (canGo) {
                        // Check also if the new cell allows moving back
                        if ((d == 0 && (wallTypeNext == 3 || wallTypeNext == 5)) 
                         || (d == 1 && (wallTypeNext == 4 || wallTypeNext == 6)) 
                         || (d == 2 && (wallTypeNext == 1 || wallTypeNext == 5)) 
                         || (d == 3 && (wallTypeNext == 2 || wallTypeNext == 6))) {
                            q.push({newX, newY});
                            visited[newX][newY] = true;
                        }
                    }
                }
            }
        }
        
        return false;
    }
};
```

### Explanation of the Code

- **Initialization**: We define the grid dimensions, directions, and wall connections. We initialize a queue for BFS and a visited matrix to track visited cells.
  
- **BFS Traversal**: We use BFS to explore the grid. From the current cell, we check the four possible directions to see if we can move to a new cell based on the wall constraints.

- **Boundary and Movement Checks**: Before moving to a new cell, we check boundaries, whether the cell has been visited, and if the movement is valid based on the walls of both the current and the new cell.

- **Reach Evaluation**: If we reach the last cell in our BFS, we return true. If we exhaust all options without reaching it, we return false.

This approach effectively and efficiently determines whether a valid path exists in the grid.