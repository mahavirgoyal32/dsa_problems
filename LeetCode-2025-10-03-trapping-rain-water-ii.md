# LeetCode Daily – 2025-10-03

## 🧠 Problem #407 – **Trapping Rain Water II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/trapping-rain-water-ii)

---

### 📝 Problem Description

Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.

 
Example 1:


Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Output: 4
Explanation: After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.


Example 2:


Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
Output: 10


 
Constraints:


	m == heightMap.length
	n == heightMap[i].length
	1 <= m, n <= 200
	0 <= heightMap[i][j] <= 2 * 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Trapping Rain Water II" problem on LeetCode involves finding the total amount of rainwater that can be trapped between blocks in a 3D elevation map represented by a 2D grid. Let's break down how to approach this problem, and then I'll provide a C++ solution.

### Problem Explanation

Given a 2D grid where each cell represents the height of a terrain, water can be trapped between these heights after it rains. The goal is to calculate the total volume of water that can be trapped in this terrain.

### Approach

1. **Understanding the Concept**: 
   The basic idea is to imagine that we are 'pouring' water over this grid. Water will settle in low areas bordered by higher areas. To efficiently find the areas where water is trapped, we can use a priority queue (or a min-heap).

2. **Visiting Cells**:
   We'll use a breadth-first search (BFS) approach with a priority queue:
   - Begin with the boundary cells of the grid, as water cannot escape from the boundaries.
   - Start by pushing all boundary heights into a priority queue while marking them as visited.

3. **Water Trapping Methodology**:
   - Pop the lowest height from the queue (this is the lowest boundary we currently have), and for each of the adjacent cells (up, down, left, right):
     - If the cell hasn't been visited, calculate how much water it can trap (which is determined by the difference between the popped minimum height and the cell's height).
     - Push the cell into the priority queue with the maximum height between the current popped height and the cell's height.
   
4. **Edge Cases**:
   - Make sure to handle edge cases like empty grids (no water can be trapped).

### C++ Solution

Here is an implementation of the above approach:

```cpp
#include <vector>
#include <queue>
#include <utility>

using namespace std;

class Solution {
public:
    int trapRainWater(vector<vector<int>>& heightMap) {
        if (heightMap.empty() || heightMap[0].empty()) return 0;

        int n = heightMap.size(), m = heightMap[0].size();
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
        vector<vector<bool>> visited(n, vector<bool>(m, false));
        vector<int> directions = {-1, 0, 1, 0, -1}; // to move in the 4 directions
        
        // Push all the boundary cells into the minHeap and mark as visited
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
                    minHeap.push({heightMap[i][j], i * m + j});
                    visited[i][j] = true;
                }
            }
        }

        int waterTrapped = 0;
        while (!minHeap.empty()) {
            auto [height, index] = minHeap.top();
            minHeap.pop();
            int x = index / m, y = index % m;

            for (int d = 0; d < 4; ++d) {
                int nx = x + directions[d];
                int ny = y + directions[d + 1];

                if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny]) {
                    waterTrapped += max(0, height - heightMap[nx][ny]);
                    // Calculate the new height for the cell that we 'pour' the water into
                    minHeap.push({max(height, heightMap[nx][ny]), nx * m + ny});
                    visited[nx][ny] = true;
                }
            }
        }

        return waterTrapped;
    }
};
```

### Explanation of the Code

1. **Initialization**:
   - We create a priority queue `minHeap` to always process the lowest boundary height first.
   - A `visited` matrix keeps track of the cells that have already been processed.

2. **Boundary Processing**:
   - All border cells are added to the priority queue and marked as visited.

3. **Water Trapping Calculation**:
   - We then process cells while the `minHeap` is not empty.
   - For each cell, we check all of its neighbors and calculate how much water can be trapped based on the current height of the cells surrounding it.

4. **Result**:
   - Finally, the total trapped water is accumulated and returned.

This approach efficiently calculates the trapped rainwater using a 3D elevation map with a time complexity of O(N log N), where N is the number of cells in the grid due to the nature of the priority queue operations.