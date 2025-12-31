# LeetCode Daily – 2025-12-31

## 🧠 Problem #1970 – **Last Day Where You Can Still Cross**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/last-day-where-you-can-still-cross)

---

### 📝 Problem Description

There is a 1-based binary matrix where 0 represents land and 1 represents water. You are given integers row and col representing the number of rows and columns in the matrix, respectively.

Initially on day 0, the entire matrix is land. However, each day a new cell becomes flooded with water. You are given a 1-based 2D array cells, where cells[i] = [ri, ci] represents that on the ith day, the cell on the rith row and cith column (1-based coordinates) will be covered with water (i.e., changed to 1).

You want to find the last day that it is possible to walk from the top to the bottom by only walking on land cells. You can start from any cell in the top row and end at any cell in the bottom row. You can only travel in the four cardinal directions (left, right, up, and down).

Return the last day where it is possible to walk from the top to the bottom by only walking on land cells.

 
Example 1:


Input: row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]
Output: 2
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 2.


Example 2:


Input: row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]
Output: 1
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 1.


Example 3:


Input: row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]
Output: 3
Explanation: The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 3.


 
Constraints:


	2 <= row, col <= 2 * 104
	4 <= row * col <= 2 * 104
	cells.length == row * col
	1 <= ri <= row
	1 <= ci <= col
	All the values of cells are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Last Day Where You Can Still Cross" involves determining the last day on which it is still possible to cross a river, given a set of blocked cells that gradually become unavailable over a range of days. You need to assess whether it is possible to reach the right bank of the river from the left bank on each day based on the blocked cells.

We can approach this problem with a binary search combined with breadth-first search (BFS) or depth-first search (DFS). The idea is to use binary search to find the last day where crossing is still possible and verify each day using a graph traversal algorithm.

### Problem Breakdown

1. **Understanding the Grid**: 
   - You are given a grid where water (cells you can cross) is represented by `0` and blocked cells by `1`.
   - You start from any cell in the first row (left bank) and want to see if you can reach any cell in the last row (right bank).

2. **Using BFS/DFS**: 
   - For each day, you can construct the grid based on blocked cells and perform BFS/DFS to see if there's a path from the first row to the last row.

3. **Binary Search**: 
   - You can leverage the fact that if you can cross on day `d`, then you can also cross on any day before `d`. This allows the use of binary search to efficiently find the last day you can cross.

### Solution Code

Here's how you can implement this in C++:

```cpp
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

// Function to check if you can cross on a given day
bool canCross(int day, int row, int col, vector<vector<int>>& cells) {
    int n = row, m = col;
    vector<vector<int>> grid(n, vector<int>(m, 0));
    
    // Block the cells according to the current day
    for (int i = 0; i < day; ++i) {
        grid[cells[i][0] - 1][cells[i][1] - 1] = 1; // Block the cell
    }
    
    // BFS to check if we can cross
    queue<pair<int, int>> q;
    vector<vector<int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    // Initialize BFS with the first row (left bank)
    for (int j = 0; j < m; ++j) {
        if (grid[0][j] == 0) {
            q.push({0, j});
        }
    }
    
    // BFS process
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        
        // If we reach the last row (right bank)
        if (x == n - 1) return true;
        
        // Explore all 4 directions
        for (auto& dir : directions) {
            int nx = x + dir[0], ny = y + dir[1];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == 0) {
                grid[nx][ny] = 1; // Mark as visited
                q.push({nx, ny});
            }
        }
    }
    
    return false; // Can't cross on this day
}

int latestDayToCross(int row, int col, vector<vector<int>>& cells) {
    int left = 1, right = cells.size(), ans = 0;

    // Binary search the answer
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (canCross(mid, row, col, cells)) {
            ans = mid; // We can cross this day
            left = mid + 1; // Search for a later day
        } else {
            right = mid - 1; // Search earlier days
        }
    }
    
    return ans; // The last day we can cross
}
```

### Explanation of the Code:
1. **canCross Function**: This function checks if you can cross the river on a specific day:
   - We first block the cells that have been marked for blocking by that day.
   - We use BFS to see if there's a path from the first row to the last row, marking cells as visited when we explore them.

2. **latestDayToCross Function**: This function implements the binary search:
   - It initializes pointers for the search range and starts a loop.
   - For each midpoint day, we check if crossing is possible using `canCross`.
   - If it’s possible, we move our left pointer to search for later days; if not, we adjust the right pointer to explore earlier days.

3. **Return the Result**: The function ultimately returns the last day you can cross.

This approach efficiently narrows down the last feasible day while ensuring that the checks for crossing produce accurate results. The complexity is `O(n * m * log(d))` where `d` is the number of days which results from the binary search process.