# LeetCode Daily – 2025-10-05

## 🧠 Problem #417 – **Pacific Atlantic Water Flow**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/pacific-atlantic-water-flow)

---

### 📝 Problem Description

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island&#39;s left and top edges, and the Atlantic Ocean touches the island&#39;s right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell&#39;s height is less than or equal to the current cell&#39;s height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 
Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.


Example 2:


Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.


 
Constraints:


	m == heights.length
	n == heights[r].length
	1 <= m, n <= 200
	0 <= heights[r][c] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Pacific Atlantic Water Flow" problem on LeetCode asks us to find all the coordinates from which water can flow to both the Pacific and Atlantic oceans in a given grid representing elevations. Water can flow from a cell to an adjacent cell if the adjacent cell's elevation is less than or equal to the current cell's elevation. 

### Problem Breakdown

1. **Grid Representation**: The grid represents elevation levels.
2. **Oceans**: The Pacific Ocean is located at the top and left edges of the grid, while the Atlantic Ocean is located at the bottom and right edges.
3. **Flow Condition**: Water can flow to an adjacent cell if the elevation of that cell is equal to or less than the elevation of the cell from which it flows.

### Solution Approach

We use Depth-First Search (DFS) or Breadth-First Search (BFS) to explore the flow direction from the edges of the grid for both oceans:

1. **Starting Points**: Start DFS from all cells on the Pacific Ocean's edges (first row and first column) and save the cells from which water can reach the Pacific Ocean. Perform a similar process for the Atlantic Ocean (last row and last column).
2. **Visited Cells**: Use a 2D vector to keep track of which cells can reach each ocean.
3. **Intersection**: The result will be the intersection of cells that can reach both oceans.

### C++ Code Implementation

Below is the C++ code that accomplishes this:

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        if (heights.empty()) return {};

        int rows = heights.size();
        int cols = heights[0].size();
        
        vector<vector<int>> pacific(rows, vector<int>(cols, 0));
        vector<vector<int>> atlantic(rows, vector<int>(cols, 0));
        
        // Perform DFS for both oceans
        for (int i = 0; i < rows; ++i) {
            dfs(heights, pacific, i, 0); // Pacific Ocean (left edge)
            dfs(heights, atlantic, i, cols - 1); // Atlantic Ocean (right edge)
        }
        
        for (int j = 0; j < cols; ++j) {
            dfs(heights, pacific, 0, j); // Pacific Ocean (top edge)
            dfs(heights, atlantic, rows - 1, j); // Atlantic Ocean (bottom edge)
        }
        
        // Collect results where both oceans can be reached
        vector<vector<int>> result;
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.emplace_back(vector<int>{i, j});
                }
            }
        }
        
        return result;
    }
    
    void dfs(vector<vector<int>>& heights, vector<vector<int>>& ocean, int x, int y) {
        ocean[x][y] = 1; // Mark this cell as visited
        int directions[4][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}}; // Down, Up, Right, Left
        
        for (auto& direction : directions) {
            int newX = x + direction[0];
            int newY = y + direction[1];
            
            // Check if the new position is valid and can flow to it
            if (newX >= 0 && newX < heights.size() && newY >= 0 && newY < heights[0].size() && 
                ocean[newX][newY] == 0 && heights[newX][newY] >= heights[x][y]) {
                dfs(heights, ocean, newX, newY);
            }
        }
    }
};

int main() {
    Solution solution;
    vector<vector<int>> heights = {
        {1, 2, 2, 3, 5},
        {3, 2, 3, 4, 4},
        {2, 4, 5, 3, 1},
        {6, 7, 1, 4, 5},
        {5, 1, 1, 2, 4}
    };
    
    vector<vector<int>> result = solution.pacificAtlantic(heights);
    
    for (const auto& coords : result) {
        cout << "[" << coords[0] << ", " << coords[1] << "]\n";
    }
    
    return 0;
}
```

### Explanation of the Code

- **Input Handling and Initialization**: The solution starts by checking if the input grid is empty. It initializes `pacific` and `atlantic` grids to keep track of the flow.
  
- **DFS Implementation**: The `dfs` function traverses the grid from the current cell. It explores the four possible directions (up, down, left, right) and checks if the flow to the adjacent cell is possible based on the elevation rules.

- **Result Collection**: The algorithm finally iterates through both ocean reachability grids and collects the coordinates of cells that can reach both oceans into the result vector.

- **Main Function**: A main function is included which tests the above logic with an example grid.

This approach ensures that we efficiently compute which cells can reach both oceans by leveraging depth-first search, resulting in an O(M * N) time complexity where M is the number of rows and N is the number of columns in the grid.