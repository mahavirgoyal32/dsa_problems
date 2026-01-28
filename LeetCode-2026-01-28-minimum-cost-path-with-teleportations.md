# LeetCode Daily – 2026-01-28

## 🧠 Problem #3651 – **Minimum Cost Path with Teleportations**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-cost-path-with-teleportations)

---

### 📝 Problem Description

You are given a m x n 2D integer array grid and an integer k. You start at the top-left cell (0, 0) and your goal is to reach the bottom‐right cell (m - 1, n - 1).

There are two types of moves available:


	
	Normal move: You can move right or down from your current cell (i, j), i.e. you can move to (i, j + 1) (right) or (i + 1, j) (down). The cost is the value of the destination cell.
	
	
	Teleportation: You can teleport from any cell (i, j), to any cell (x, y) such that grid[x][y] <= grid[i][j]; the cost of this move is 0. You may teleport at most k times.
	


Return the minimum total cost to reach cell (m - 1, n - 1) from (0, 0).

 
Example 1:


Input: grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2

Output: 7

Explanation:

Initially we are at (0, 0) and cost is 0.


	
		
			Current Position
			Move
			New Position
			Total Cost
		
		
			(0, 0)
			Move Down
			(1, 0)
			0 + 2 = 2
		
		
			(1, 0)
			Move Right
			(1, 1)
			2 + 5 = 7
		
		
			(1, 1)
			Teleport to (2, 2)
			(2, 2)
			7 + 0 = 7
		
	


The minimum cost to reach bottom-right cell is 7.


Example 2:


Input: grid = [[1,2],[2,3],[3,4]], k = 1

Output: 9

Explanation: 

Initially we are at (0, 0) and cost is 0.


	
		
			Current Position
			Move
			New Position
			Total Cost
		
		
			(0, 0)
			Move Down
			(1, 0)
			0 + 2 = 2
		
		
			(1, 0)
			Move Right
			(1, 1)
			2 + 3 = 5
		
		
			(1, 1)
			Move Down
			(2, 1)
			5 + 4 = 9
		
	


The minimum cost to reach bottom-right cell is 9.


 
Constraints:


	2 <= m, n <= 80
	m == grid.length
	n == grid[i].length
	0 <= grid[i][j] <= 104
	0 <= k <= 10

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Minimum Cost Path with Teleportations" requires us to find the minimum cost to traverse a grid from the top-left corner to the bottom-right corner. We can move either right or down in the grid, and we also have the option to teleport to any cell at a given cost. 

### Problem Breakdown
1. **Grid Structure**: We have an `m x n` grid where each cell has a cost associated with it.
2. **Movement**: We can move right or down at the cost defined in the grid.
3. **Teleportation**: We can teleport from any cell to any other cell with a fixed teleportation cost.

### Approach
The optimal way to solve this problem can be achieved using Dijkstra's algorithm or a priority queue since we are looking for the minimum cost path. Here's the high-level breakdown of our approach:

1. **Priority Queue**: Use a priority queue to explore cells based on their current minimum cost.
2. **Cost Matrix**: Maintain a cost matrix (`cost`) to keep track of the minimum cost to reach each cell.
3. **Initialization**: Start from the top-left corner of the grid (0, 0).
4. **Explore Adjacent Cells**: For each cell, explore its right and down neighbors and push their costs to the priority queue if we can reach them at a lower expense.
5. **Teleportation Option**: For each cell, also consider the cost of teleporting to any other cell. If this cost leads to a cheaper path, update our cost matrix and push that new cell into the queue.
6. **Termination**: Continue until we reach the bottom-right corner of the grid or exhaust all possible paths.

### Implementation

Here is how this can be implemented in C++:

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <tuple>

using namespace std;

typedef long long ll;

struct Node {
    ll cost;
    int x, y;
    bool operator>(const Node &other) const {
        return cost > other.cost;
    }
};

class Solution {
public:
    long long minCostPath(vector<vector<int>>& grid, int teleportCost) {
        int m = grid.size();
        int n = grid[0].size();
        
        // Cost matrix to store the minimum cost to reach each cell
        vector<vector<ll>> cost(m, vector<ll>(n, LLONG_MAX));
        cost[0][0] = grid[0][0];
        
        priority_queue<Node, vector<Node>, greater<Node>> pq;
        pq.push({cost[0][0], 0, 0});
        
        while (!pq.empty()) {
            auto [currentCost, x, y] = pq.top();
            pq.pop();
            
            // If we have reached the bottom-right corner, return the cost
            if (x == m - 1 && y == n - 1) {
                return currentCost;
            }
            
            // Move right
            if (y + 1 < n) {
                ll newCost = currentCost + grid[x][y + 1];
                if (newCost < cost[x][y + 1]) {
                    cost[x][y + 1] = newCost;
                    pq.push({newCost, x, y + 1});
                }
            }
            
            // Move down
            if (x + 1 < m) {
                ll newCost = currentCost + grid[x + 1][y];
                if (newCost < cost[x + 1][y]) {
                    cost[x + 1][y] = newCost;
                    pq.push({newCost, x + 1, y});
                }
            }
            
            // Teleport to all cells
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (i == x && j == y) continue; // Skip the current cell
                    ll newCost = currentCost + teleportCost + grid[i][j];
                    if (newCost < cost[i][j]) {
                        cost[i][j] = newCost;
                        pq.push({newCost, i, j});
                    }
                }
            }
        }
        
        return -1; // This should never be reached as there is always path due to problem constraints
    }
};
```

### Explanation of the Code:
1. We use a priority queue (`pq`) that stores nodes containing the cost and coordinates of grid cells.
2. We initialize the cost of the start cell `(0, 0)` with the grid's initial cost.
3. We then start processing cells from the priority queue until we reach `(m-1, n-1)`.
4. For each cell, we explore two possible moves (right and down) and push their costs into the queue if they are cheaper than previously recorded.
5. Additionally, we explore the option to teleport to every cell from the current position and push those costs into the queue as well.
6. The process continues until we find the minimum cost to reach the bottom-right corner or exhaust possible paths.

### Complexity Analysis
This algorithm runs in O((m*n) * log(m*n)) because in the worst case, we may end up processing all cells for every teleportation situation. However, in practice, it performs efficiently for grids that are not too large due to the nature of priority queue optimizations.