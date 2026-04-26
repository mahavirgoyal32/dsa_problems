# LeetCode Daily – 2026-04-26

## 🧠 Problem #1559 – **Detect Cycles in 2D Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/detect-cycles-in-2d-grid)

---

### 📝 Problem Description

Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.

A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.

Return true if any cycle of the same value exists in grid, otherwise, return false.

 
Example 1:




Input: grid = [[&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;b&quot;,&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;a&quot;]]
Output: true
Explanation: There are two valid cycles shown in different colors in the image below:



Example 2:




Input: grid = [[&quot;c&quot;,&quot;c&quot;,&quot;c&quot;,&quot;a&quot;],[&quot;c&quot;,&quot;d&quot;,&quot;c&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;c&quot;,&quot;e&quot;,&quot;c&quot;],[&quot;f&quot;,&quot;c&quot;,&quot;c&quot;,&quot;c&quot;]]
Output: true
Explanation: There is only one valid cycle highlighted in the image below:



Example 3:




Input: grid = [[&quot;a&quot;,&quot;b&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;z&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;b&quot;,&quot;a&quot;]]
Output: false


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 500
	grid consists only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of detecting cycles in a 2D grid, we need to use Depth-First Search (DFS) to explore the grid and keep track of visited nodes. Additionally, we need to ensure that we only consider valid steps in the DFS that lead to the same character. 

Here's a structured plan for solving the problem:

1. **Initialization**:
   - Use a 2D vector to keep track of visited cells.
   - Define the directions in which we can move in the grid (up, down, left, right).

2. **DFS Function**:
   - Create a recursive DFS function that checks:
     - If we revisit a cell that is the parent (the previous cell we came from), we don't consider it a cycle.
     - If we revisit a cell that is not the parent and has the same character, this confirms a cycle.

3. **Loop through the grid**:
   - If an unvisited cell is found, invoke the DFS function from that cell.
   - If a cycle is found during any DFS call, return true.

4. **Return**:
   - If no cycles are found after checking all cells, return false.

Here's the implementation in C++:

```cpp
#include <vector>

class Solution {
public:
    bool hasCycle(std::vector<std::vector<char>>& grid) {
        const int rows = grid.size();
        const int cols = grid[0].size();
        std::vector<std::vector<bool>> visited(rows, std::vector<bool>(cols, false));

        // Directions for moving in the grid
        std::vector<std::pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        // DFS function to explore the grid
        std::function<bool(int, int, int, int, char)> dfs = [&](int r, int c, int parent_r, int parent_c, char target_char) {
            visited[r][c] = true;

            for (auto& dir : directions) {
                int new_r = r + dir.first;
                int new_c = c + dir.second;

                // Check boundaries and character match
                if (new_r >= 0 && new_r < rows && new_c >= 0 && new_c < cols && grid[new_r][new_c] == target_char) {
                    // If the next cell is unvisited
                    if (!visited[new_r][new_c]) {
                        if (dfs(new_r, new_c, r, c, target_char)) {
                            return true; // Cycle detected
                        }
                    }
                    // If the next cell is visited and is not the parent
                    else if (new_r != parent_r || new_c != parent_c) {
                        return true; // Cycle detected
                    }
                }
            }
            return false;
        };

        // Iterate over each cell in the grid
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (!visited[r][c]) {
                    // Start DFS from each unvisited cell
                    if (dfs(r, c, -1, -1, grid[r][c])) {
                        return true; // Cycle detected
                    }
                }
            }
        }

        return false; // No cycle found
    }
};
```

### Explanation:

- **Initialization**: We create a `visited` 2D vector to keep track of which cells have already been visited during our DFS exploration. The `directions` vector defines the possible movements (up, down, left, right).

- **DFS Function**: We pass additional parameters to the DFS function:
  - `parent_r` and `parent_c` track the previous cell to help avoid counting the backward step as a cycle.
  - `target_char` is used to ensure we only explore cells with the same character.

- **Grid Traversal**: For each cell in the grid, if it hasn't been visited yet, we initiate a DFS. If a cycle is found during this process, we immediately return `true`. If we finish traversing all cells without detecting a cycle, we return `false`.

This implementation efficiently checks for cycles in the grid using DFS while ensuring proper backtracking and tracking of cell states.