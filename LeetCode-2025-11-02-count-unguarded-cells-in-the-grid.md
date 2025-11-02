# LeetCode Daily – 2025-11-02

## 🧠 Problem #2257 – **Count Unguarded Cells in the Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-unguarded-cells-in-the-grid)

---

### 📝 Problem Description

You are given two integers m and n representing a 0-indexed m x n grid. You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively.

A guard can see every cell in the four cardinal directions (north, east, south, or west) starting from their position unless obstructed by a wall or another guard. A cell is guarded if there is at least one guard that can see it.

Return the number of unoccupied cells that are not guarded.

 
Example 1:


Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
Output: 7
Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
There are a total of 7 unguarded cells, so we return 7.


Example 2:


Input: m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]
Output: 4
Explanation: The unguarded cells are shown in green in the above diagram.
There are a total of 4 unguarded cells, so we return 4.


 
Constraints:


	1 <= m, n <= 105
	2 <= m * n <= 105
	1 <= guards.length, walls.length <= 5 * 104
	2 <= guards.length + walls.length <= m * n
	guards[i].length == walls[j].length == 2
	0 <= rowi, rowj < m
	0 <= coli, colj < n
	All the positions in guards and walls are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Count Unguarded Cells in the Grid," we need to determine how many cells in a grid are unguarded after certain guards have been placed. The guards can protect their respective row and column, thereby making all cells in those rows and columns "guarded."

### Problem Breakdown
1. **Grid Representation**: We are given a grid of size `m x n` in which each cell can either be empty or contain a guard. The guard can protect all cells in its row and column.
2. **Input Parameters**:
   - `m`: Number of rows.
   - `n`: Number of columns.
   - `guards`: List of cell positions where guards are placed.
3. **Output**: The number of cells that are unguarded.

### Steps to Solve
1. **Initialize a "guarded" Tracker**: Use two sets or vectors to keep track of which rows and columns have guards.
2. **Mark Rows and Columns**: For each guard position provided in the list, mark the respective row and column as guarded.
3. **Count Unguarded Cells**: Compute the total number of cells and subtract the number of guarded cells from it.

### C++ Implementation
Here's the code to implement the above logic:

```cpp
#include <vector>
#include <set>
using namespace std;

class Solution {
public:
    int countUnguarded(int m, int n, vector<vector<int>>& guards) {
        // Sets to store unique rows and columns that are guarded
        set<int> guardedRows, guardedCols;

        // Read all guard positions and mark respective rows and columns
        for (const auto& guard : guards) {
            int row = guard[0];
            int col = guard[1];
            guardedRows.insert(row);
            guardedCols.insert(col);
        }

        // Calculate the number of guarded cells
        int guardedCells = 0;

        // Total number of guarded cells due to rows
        guardedCells += guardedRows.size() * n;

        // Total number of guarded cells due to columns
        guardedCells += guardedCols.size() * m;

        // However, cells at intersections of guarded rows and columns have been double-counted
        guardedCells -= (guardedRows.size() * guardedCols.size());

        // Total cells in the grid
        int totalCells = m * n;

        // Unguarded cells are total cells minus guarded cells
        return totalCells - guardedCells;
    }
};
```

### Explanation of the Code
- **Sets for Guarded Rows and Columns**: We use `set<int>` to keep track of unique rows and columns that are guarded.
- **Marking Guards**: We iterate through the list of guards and add their respective row and column indices to the sets.
- **Calculating Guarded Cells**:
  - We calculate the total number of guarded cells coming from the guarded rows: `guardedRows.size() * n`.
  - For the guarded columns: `guardedCols.size() * m`.
  - We subtract the overlapped cells that were counted twice, which are the intersections of guarded rows and columns: `guardedRows.size() * guardedCols.size()`.
- **Final Output**: The function returns the difference between the total number of cells and the calculated `guardedCells`.

### Complexity
- **Time Complexity**: O(G) where G is the number of guards because we are just iterating over the list of guards.
- **Space Complexity**: O(m + n) for storing the guarded rows and columns.

This approach ensures an efficient calculation of unguarded cells in a grid based on the input parameters provided.