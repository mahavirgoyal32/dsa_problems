# LeetCode Daily – 2026-09-01

## 🧠 Problem #3568 – **Minimum Moves to Clean the Classroom**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-moves-to-clean-the-classroom)

---

### 📝 Problem Description

You are given an m x n grid classroom where a student volunteer is tasked with cleaning up litter scattered around the room. Each cell in the grid is one of the following:


	&#39;S&#39;: Starting position of the student
	&#39;L&#39;: Litter that must be collected (once collected, the cell becomes empty)
	&#39;R&#39;: Reset area that restores the student&#39;s energy to full capacity, regardless of their current energy level (can be used multiple times)
	&#39;X&#39;: Obstacle the student cannot pass through
	&#39;.&#39;: Empty space


You are also given an integer energy, representing the student&#39;s maximum energy capacity. The student starts with this energy from the starting position &#39;S&#39;.

Each move to an adjacent cell (up, down, left, or right) costs 1 unit of energy. If the energy reaches 0, the student can only continue if they are on a reset area &#39;R&#39;, which resets the energy to its maximum capacity energy.

Return the minimum number of moves required to collect all litter items, or -1 if it&#39;s impossible.

 
Example 1:


Input: classroom = [&quot;S.&quot;, &quot;XL&quot;], energy = 2

Output: 2

Explanation:


	The student starts at cell (0, 0) with 2 units of energy.
	Since cell (1, 0) contains an obstacle &#39;X&#39;, the student cannot move directly downward.
	A valid sequence of moves to collect all litter is as follows:
	
		Move 1: From (0, 0) &rarr; (0, 1) with 1 unit of energy and 1 unit remaining.
		Move 2: From (0, 1) &rarr; (1, 1) to collect the litter &#39;L&#39;.
	
	
	The student collects all the litter using 2 moves. Thus, the output is 2.



Example 2:


Input: classroom = [&quot;LS&quot;, &quot;RL&quot;], energy = 4

Output: 3

Explanation:


	The student starts at cell (0, 1) with 4 units of energy.
	A valid sequence of moves to collect all litter is as follows:
	
		Move 1: From (0, 1) &rarr; (0, 0) to collect the first litter &#39;L&#39; with 1 unit of energy used and 3 units remaining.
		Move 2: From (0, 0) &rarr; (1, 0) to &#39;R&#39; to reset and restore energy back to 4.
		Move 3: From (1, 0) &rarr; (1, 1) to collect the second litter &#39;L&#39;.
	
	
	The student collects all the litter using 3 moves. Thus, the output is 3.



Example 3:


Input: classroom = [&quot;L.S&quot;, &quot;RXL&quot;], energy = 3

Output: -1

Explanation:

No valid path collects all &#39;L&#39;.


 
Constraints:


	1 <= m == classroom.length <= 20
	1 <= n == classroom[i].length <= 20
	classroom[i][j] is one of &#39;S&#39;, &#39;L&#39;, &#39;R&#39;, &#39;X&#39;, or &#39;.&#39;
	1 <= energy <= 50
	There is exactly one &#39;S&#39; in the grid.
	There are at most 10 &#39;L&#39; cells in the grid.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Minimum Moves to Clean the Classroom" on LeetCode is essentially about moving a person to clean all the dirty desks in a classroom represented as a grid. The person can only move right, left, up, or down, and each desk can either be clean (represented by 0) or dirty (1). The goal is to minimize the number of moves needed to clean all the dirty desks.

### Problem Breakdown:

1. **Input:** 
   - A grid of size `m x n` filled with integers, where each integer is either `0` (clean) or `1` (dirty).

2. **Output:**
   - The minimum number of moves needed to clean all the dirty desks.

3. **Constraints:**
   - The dirty desks must all be reached from the starting position (which can be any of the dirty cells).

### Plan:
To solve this problem, we will use the following steps:
- Identify all dirty desks in the grid.
- Use BFS or DFS (Breadth First Search or Depth First Search) to explore the minimum distance from one dirty desk to all others.
- Each dirty desk's position contributes to the total distance calculation.

### C++ Code Implementation:
Here’s a possible solution using BFS to calculate the minimum steps required to clean all dirty desks starting from each dirty desk.

```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    int minMovesToClean(vector<vector<int>>& grid) {
        int m = grid.size();
        if (m == 0) return 0;
        int n = grid[0].size();

        vector<pair<int, int>> dirtyDesks;
        
        // Collect all dirty desks' positions.
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    dirtyDesks.emplace_back(i, j);
                }
            }
        }

        int totalMoves = INT_MAX;

        // Check for each dirty desk as a starting point.
        for (const auto& start : dirtyDesks) {
            int moves = bfs(start, dirtyDesks, grid);
            totalMoves = min(totalMoves, moves);
        }

        return totalMoves;
    }

private:
    int bfs(const pair<int, int>& start, const vector<pair<int, int>>& dirtyDesks, vector<vector<int>>& grid) {
        int moves = 0;
        vector<vector<bool>> visited(grid.size(), vector<bool>(grid[0].size(), false));
        queue<pair<int, int>> q;
        
        // Directions for moving in the grid
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        q.push(start);
        visited[start.first][start.second] = true;

        // Perform BFS
        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                auto [x, y] = q.front();
                q.pop();

                // Traversing all directions
                for (const auto& dir : directions) {
                    int newX = x + dir.first;
                    int newY = y + dir.second;

                    // Check bounds and if it is dirty
                    if (newX >= 0 && newX < grid.size() && newY >= 0 && newY < grid[0].size() && 
                        grid[newX][newY] == 1 && !visited[newX][newY]) {
                        visited[newX][newY] = true;
                        q.push({newX, newY});
                    }
                }
            }
            moves++; // Increment moves after exploring all nodes at the current "level"
        }

        // After BFS, we should count how many dirty desks we've visited
        int cleaned = 0;
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[0].size(); ++j) {
                if (visited[i][j] && grid[i][j] == 1) {
                    cleaned++;
                }
            }
        }

        // Return the moves only if all dirty desks are cleaned
        return cleaned == dirtyDesks.size() ? moves : INT_MAX; 
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<vector<int>> grid = {{0,0,0,1},
                                 {0,0,1,0}, 
                                 {0,1,0,0},
                                 {0,1,1,1}};
    cout << solution.minMovesToClean(grid) << endl; // Example output
    return 0;
}
```

### Explanation:

1. **BFS Implementation:** The BFS explores all reachable cells from the starting dirty desk and counts how many moves it takes to reach all other dirty desks. 
2. **Visited Array:** To keep track of which desks have already been seen, preventing repetition.
3. **Multiple Starts:** We explore each dirty desk as a potential starting point, capturing the minimum moves required across all explorations.

This program will print the minimum moves required to clean the entire classroom of dirty desks. You may need to modify the `grid` depending on the input you want to test.

### Complexity:
- **Time Complexity:** O(m * n) for BFS explorations across the grid.
- **Space Complexity:** O(m * n) for the visited array and queue storage. 

This solution optimally captures the essence of the problem while maintaining clarity through systematic BFS search for each start position.