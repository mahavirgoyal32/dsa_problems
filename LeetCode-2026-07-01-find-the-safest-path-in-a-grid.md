# LeetCode Daily – 2026-07-01

## 🧠 Problem #2812 – **Find the Safest Path in a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-safest-path-in-a-grid)

---

### 📝 Problem Description

You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:


	A cell containing a thief if grid[r][c] = 1
	An empty cell if grid[r][c] = 0


You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

 
Example 1:


Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).


Example 2:


Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.


Example 3:


Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.


 
Constraints:


	1 <= grid.length == n <= 400
	grid[i].length == n
	grid[i][j] is either 0 or 1.
	There is at least one thief in the grid.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Find the Safest Path in a Grid," we need to navigate through a grid where each cell contains a danger level. The goal is to find a path from the top-left corner (0, 0) to the bottom-right corner (m-1, n-1) that minimizes the maximum danger level encountered along the path. 

Here's a step-by-step explanation of the solution:

### Problem Breakdown
1. **Grid Structure**: The grid consists of integers representing danger levels. We need to traverse this grid in such a way that we minimize the highest danger level encountered.
  
2. **Path Definition**: The only allowed directions for movement are down and right, hence we're restricted in how we can traverse the grid.

3. **Output Requirement**: We're asked to return the lowest possible maximum danger level that can be encountered along any valid path.

### Approach
The problem can be effectively solved using a binary search combined with a BFS (Breadth-First Search) algorithm:
1. **Binary Search**: We'll use binary search on the danger levels. The search space will be the range from the minimum danger level to the maximum danger level present in the grid.
   
2. **BFS to Check Feasibility**: For each midpoint selected by the binary search, we can perform a BFS to check if it’s possible to reach the bottom-right corner without exceeding the danger level represented by the midpoint.

### Implementation Steps
1. Identify the minimum and maximum danger levels in the grid.
2. Perform a binary search between these levels.
3. For each candidate maximum danger level, utilize BFS to check if a path exists from the top-left to the bottom-right corner that does not exceed this level.

Here's the C++ implementation:

```cpp
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maximumSafestPath(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        // Define the search boundaries for danger levels
        int low = INT_MAX;
        int high = INT_MIN;
        
        for (const auto& row : grid) {
            for (int level : row) {
                low = min(low, level);
                high = max(high, level);
            }
        }
        
        // Binary search on the maximum danger level
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (canReach(grid, m, n, mid)) {
                high = mid;  // Try for a lower max danger level
            } else {
                low = mid + 1;  // Increase max danger level
            }
        }
        
        return low; // or high, as low == high at the end
    }
    
    bool canReach(vector<vector<int>>& grid, int m, int n, int maxDanger) {
        queue<pair<int, int>> q;
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        
        // Start BFS from (0, 0)
        if (grid[0][0] > maxDanger) return false; // Starting point is out of bounds
        q.push({0, 0});
        visited[0][0] = true;

        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();
            
            // If we reached the bottom-right corner
            if (x == m - 1 && y == n - 1) {
                return true;
            }

            // Test possible movements Down and Right
            for (const auto& move : vector<pair<int, int>>{{1, 0}, {0, 1}}) {
                int nextX = x + move.first;
                int nextY = y + move.second;

                if (nextX < m && nextY < n && !visited[nextX][nextY] && grid[nextX][nextY] <= maxDanger) {
                    visited[nextX][nextY] = true;
                    q.push({nextX, nextY});
                }
            }
        }
        
        return false;
    }
};
```

### Explanation of the Code
- **Initializations**: We initialize the low and high bounds for the binary search based on the danger levels in the grid.
- **Binary Search**:
  - We continuously adjust our search range based on whether a valid path exists for the current midpoint danger level.
- **BFS Function**: 
  - We traverse the grid starting from the top-left corner, marking cells as visited and only proceeding to neighboring cells that are within the allowed danger level (`<= maxDanger`). If we reach the bottom-right corner, we return true.
- **Result**: The binary search culminates in the lowest maximum danger level that allows for a safe path.

### Complexity
- **Time Complexity**: O((m * n) * log(maxDanger)), where log(maxDanger) accounts for binary search and m * n accounts for the BFS traversal.
- **Space Complexity**: O(m * n) for the visited matrix during BFS.