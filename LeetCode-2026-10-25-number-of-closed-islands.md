# LeetCode Daily – 2026-10-25

## 🧠 Problem #1254 – **Number of Closed Islands**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-closed-islands)

---

### 📝 Problem Description

Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 
Example 1:




Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).

Example 2:




Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1


Example 3:


Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2


 
Constraints:


	1 <= grid.length, grid[0].length <= 100
	0 <= grid[i][j] <=1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Number of Closed Islands" problem on LeetCode is about counting the number of closed islands in a 2D grid. A closed island is defined as an area surrounded by water (represented by 0s) on all sides, and it cannot touch the boundary of the grid.

### Problem Statement
You are given a 2D grid consisting of 0s (representing water) and 1s (representing land). Your task is to count the number of closed islands in the grid. An island is considered closed if it is completely surrounded by water, meaning it does not touch the edges of the grid.

### Solution Approach

1. **DFS or BFS Traversal**: To solve this problem, we can utilize Depth-First Search (DFS) or Breadth-First Search (BFS) to explore each island. We need to check if it touches the boundary during the exploration.
  
2. **Boundary Check**: While traversing, if we find that any land cell (1) connects to the boundary of the grid, we will mark that island as open instead of closed.

3. **Visited Tracking**: We can mark cells as visited by changing their values or maintaining a separate visited array.

4. **Count Islands**: Initialize a counter and increment it every time a complete DFS or BFS finishes exploring an island that is closed.

### Implementation in C++

Here's a C++ implementation of the solution using DFS:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int closedIsland(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int closedIslands = 0;

        // Helper function for DFS
        auto dfs = [&](int r, int c, auto&& dfsRef) -> bool {
            // If we're out of bounds, we return false to indicate that it's open
            if (r < 0 || r >= rows || c < 0 || c >= cols) {
                return false; // Out of bounds (or touching the boundary)
            }
            if (grid[r][c] == 1) { // If it's already land, return true
                return true;
            }
            grid[r][c] = 1; // Mark as visited (turn land into water)
            bool up = dfsRef(r - 1, c, dfsRef);
            bool down = dfsRef(r + 1, c, dfsRef);
            bool left = dfsRef(r, c - 1, dfsRef);
            bool right = dfsRef(r, c + 1, dfsRef);
            // The island is closed if all sides are closed (true)
            return up && down && left && right;
        };

        // First mark all the edges where the island is not closed
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < cols; ++c) {
                if (grid[r][c] == 1) continue; // Skip land cells
                // If we hit the boundary while DFS, mark it as open
                if (dfs(r, c, dfs)) {
                    closedIslands++; // Increment for a closed island found
                }
            }
        }
        return closedIslands;
    }
};
```

### Explanation of the Code:

1. **Initialization**:
   - We determine the dimensions of the grid (`rows` and `cols`).
   - We initialize a counter `closedIslands` to keep track of the number of closed islands found.

2. **DFS Function**:
   - The `dfs` function checks if the current cell is out of bounds. If it is, we return `false` indicating the island is open.
   - If the current cell is land (1), we mark it as visited by setting it to water (0).
   - We recursively call `dfs` on the four adjacent directions (up, down, left, and right).
   - The current island is closed if all four directions return `true`.

3. **Main Loop**:
   - We loop through each cell of the grid. If a cell is not land (0), we call `dfs`.
   - If DFS returns `true`, we increment the `closedIslands` counter because it means we found a closed island.

4. **Return Result**:
   - Finally, we return the count of the closed islands.

This solution effectively counts closed islands in O(NM) time complexity, where N is the number of rows and M is the number of columns in the grid.