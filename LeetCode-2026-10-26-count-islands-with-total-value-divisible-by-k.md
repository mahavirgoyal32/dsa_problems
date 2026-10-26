# LeetCode Daily – 2026-10-26

## 🧠 Problem #3619 – **Count Islands With Total Value Divisible by K**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k)

---

### 📝 Problem Description

You are given an m x n matrix grid and a positive integer k. An island is a group of positive integers (representing land) that are 4-directionally connected (horizontally or vertically).

The total value of an island is the sum of the values of all cells in the island.

Return the number of islands with a total value divisible by k.

 
Example 1:


Input: grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5

Output: 2

Explanation:

The grid contains four islands. The islands highlighted in blue have a total value that is divisible by 5, while the islands highlighted in red do not.


Example 2:


Input: grid = [[3,0,3,0], [0,3,0,3], [3,0,3,0]], k = 3

Output: 6

Explanation:

The grid contains six islands, each with a total value that is divisible by 3.


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 1000
	1 <= m * n <= 105
	0 <= grid[i][j] <= 106
	1 <= k <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count Islands With Total Value Divisible by K" requires counting the number of connected components (or islands) in a grid where the sum of the values in each connected component is divisible by a specified integer `K`. The problem can be solved through a depth-first search (DFS) or breadth-first search (BFS) approach to traverse the islands.

Here's a step-by-step explanation of how you can implement the solution in C++.

### Steps to Solve the Problem:

1. **Grid Definition**: The problem can be represented with a 2D grid where each cell has a value and you need to check for connected cells (up, down, left, right) that make up an "island".

2. **Visited Tracking**: Use a boolean 2D array to track whether a cell has been visited during the search.

3. **DFS Function**: Implement a DFS function that will traverse through the island, summing the values of the cells as it proceeds.

4. **Islands Counting**: For each unvisited land cell (not equal to 0), initiate a DFS, calculate the total sum of the island, and check if the total is divisible by `K`.

5. **Return Count**: Maintain a counter that increases every time you find an island whose sum is divisible by `K`.

### C++ Implementation:

Here's how you could implement this:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int countIslandsWithValueDivisibleByK(vector<vector<int>>& grid, int k) {
        // Determine the dimensions of the grid
        int rows = grid.size();
        if (rows == 0) return 0; // If the grid is empty
        int cols = grid[0].size();
        
        // Array to keep track of visited cells
        vector<vector<bool>> visited(rows, vector<bool>(cols, false));
        int count = 0;

        // Directions for moving up, down, left, right
        vector<pair<int, int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        // Helper function for depth-first search
        function<int(int, int)> dfs = [&](int r, int c) {
            // Mark the cell as visited
            visited[r][c] = true;
            int total = grid[r][c];

            // Traverse all four directions
            for (auto& dir : directions) {
                int newRow = r + dir.first;
                int newCol = c + dir.second;

                // Check bounds and if the cell is land and not yet visited
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] != 0 && !visited[newRow][newCol]) {
                    total += dfs(newRow, newCol); // Accumulate the total value
                }
            }
            return total; // Return the total value of the island
        };

        // Iterate through each cell in the grid
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // Start a DFS if we find an unvisited land cell
                if (grid[i][j] != 0 && !visited[i][j]) {
                    int totalValue = dfs(i, j); // Get the total value of the island
                    if (totalValue % k == 0) { // Check if it is divisible by k
                        count++; // Increment the island count
                    }
                }
            }
        }

        return count; // Return total islands found
    }
};
```

### Explanation of the Code:

1. **Initialization**: We first determine the rows and columns of the grid and check if the grid is empty.

2. **Visited Tracking**: A 2D vector `visited` is initialized to keep track of which cells have been explored.

3. **DFS Implementation**: We define a recursive function `dfs` that explores each cell's neighbors. During this exploration, we accumulate the total value of all cells within the island.

4. **Count Islands**: As we iterate through each cell in the grid, if we find a land cell (value not equal to `0` and not yet visited), we call the `dfs` function. After the DFS, we check if the accumulated total of the island is divisible by `K`. If it is, we increment our count.

5. **Return Result**: Finally, we return the total count of islands that have a sum of values divisible by `K`.

This solution effectively traverses the grid and counts the desired islands while being efficient in its depth-first search approach. The overall time complexity is O(R * C), where R is the number of rows and C is the number of columns in the grid.