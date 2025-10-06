# LeetCode Daily – 2025-10-06

## 🧠 Problem #778 – **Swim in Rising Water**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/swim-in-rising-water)

---

### 📝 Problem Description

You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

It starts raining, and water gradually rises over time. At time t, the water level is t, meaning any cell with elevation less than equal to t is submerged or reachable.

You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

 
Example 1:


Input: grid = [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.


Example 2:


Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation: The final route is shown.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.


 
Constraints:


	n == grid.length
	n == grid[i].length
	1 <= n <= 50
	0 <= grid[i][j] < n2
	Each value grid[i][j] is unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's discuss the "Swim in Rising Water" problem, explain the approach to solve it, and provide you with the C++ code.

### Problem Explanation

You are given an `n x n` grid `heights`, where `heights[i][j]` represents the height of the water at cell `(i, j)`. At any given time `t`, you can swim to all four directions (up, down, left, right) from the cell you are currently in, provided that the height of the water in the destination cell is less than or equal to `t`. Your goal is to find the minimum time `t` such that you can swim from the top-left cell `(0,0)` to the bottom-right cell `(n-1,n-1)`.

### Solution Approach

1. **Binary Search**: Since we need to find the minimum time `t`, we can employ binary search on the range of possible heights in the grid.
2. **Breadth-First Search (BFS) or Depth-First Search (DFS)**: For each possible time `t`, we need to check if we can reach the bottom-right cell from the top-left cell. This can be done using BFS or DFS, where we explore all reachable cells that are less than or equal to `t` in height.

### Steps
- Determine the minimum (`left`) and maximum (`right`) heights in the grid to set up the binary search.
- For the middle value `mid`, use BFS or DFS to check if the bottom-right is reachable from the top-left with the restriction of heights less than or equal to `mid`.
- Adjust the binary search bounds based on whether we can reach the destination.

### C++ Implementation

Here’s the C++ code implementing the above approach:

```cpp
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        int n = grid.size();
        // Initialize the binary search boundaries
        int left = grid[0][0], right = grid[n - 1][n - 1];
        
        for (const auto& row : grid) {
            left = min(left, *min_element(row.begin(), row.end()));
            right = max(right, *max_element(row.begin(), row.end()));
        }
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            // Check if we can swim to the bottom-right corner at time mid
            if (canSwim(grid, mid)) {
                right = mid; // Try for lesser time
            } else {
                left = mid + 1; // Need more time
            }
        }
        
        return left; // left should be the minimum time required
    }
    
    bool canSwim(const vector<vector<int>>& grid, int t) {
        int n = grid.size();
        vector<vector<bool>> visited(n, vector<bool>(n, false));
        queue<pair<int, int>> q;
        q.push({0, 0}); // Start at the top-left corner
        visited[0][0] = true;

        // Directions for moving in 4 possible directions
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();
            
            // If we reach the bottom-right corner
            if (x == n - 1 && y == n - 1) {
                return true;
            }
            
            for (const auto& dir : directions) {
                int newX = x + dir.first;
                int newY = y + dir.second;
                
                // Check boundaries and whether we've visited the cell
                if (newX >= 0 && newX < n && newY >= 0 && newY < n && 
                    !visited[newX][newY] && grid[newX][newY] <= t) {
                    visited[newX][newY] = true; // Mark as visited
                    q.push({newX, newY}); // Push new position into the queue
                }
            }
        }
        
        return false; // If we exit the loop, we can't swim to the bottom-right
    }
};
```

### Explanation of the Code

- **Binary Search** (`swimInWater` function):
  - We first determine the smallest (`left`) and largest (`right`) heights in the grid.
  - We perform a binary search within this height range, calculating the mid-point and checking if it's possible to reach the target by calling `canSwim`.
  
- **BFS Implementation** (`canSwim` function):
  - A queue is initialized with the starting cell and we mark it as visited.
  - For each cell, we check all four possible directions. If the neighboring cell's height is less than or equal to the current `mid` and hasn't been visited yet, we add it to the queue.
  - If we reach the destination cell during BFS, we return `true`, indicating it's possible to swim to the bottom-right at that height.

This algorithm efficiently combines binary search with BFS/DFS, leading to a solution that's able to handle the constraints imposed by the problem.