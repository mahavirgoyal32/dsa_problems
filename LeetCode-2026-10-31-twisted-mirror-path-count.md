# LeetCode Daily – 2026-10-31

## 🧠 Problem #3665 – **Twisted Mirror Path Count**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/twisted-mirror-path-count)

---

### 📝 Problem Description

Given an m x n binary grid grid where:


	grid[i][j] == 0 represents an empty cell, and
	grid[i][j] == 1 represents a mirror.


A robot starts at the top-left corner of the grid (0, 0) and wants to reach the bottom-right corner (m - 1, n - 1). It can move only right or down. If the robot attempts to move into a mirror cell, it is reflected before entering that cell:


	If it tries to move right into a mirror, it is turned down and moved into the cell directly below the mirror.
	If it tries to move down into a mirror, it is turned right and moved into the cell directly to the right of the mirror.


If this reflection would cause the robot to move outside the grid boundaries, the path is considered invalid and should not be counted.

Return the number of unique valid paths from (0, 0) to (m - 1, n - 1).

Since the answer may be very large, return it modulo 109 + 7.

Note: If a reflection moves the robot into a mirror cell, the robot is immediately reflected again based on the direction it used to enter that mirror: if it entered while moving right, it will be turned down; if it entered while moving down, it will be turned right. This process will continue until either the last cell is reached, the robot moves out of bounds or the robot moves to a non-mirror cell.

 
Example 1:


Input: grid = [[0,1,0],[0,0,1],[1,0,0]]

Output: 5

Explanation:


	
		
			Number
			Full Path
		
	
	
		
			1
			(0, 0) &rarr; (0, 1) [M] &rarr; (1, 1) &rarr; (1, 2) [M] &rarr; (2, 2)
		
		
			2
			(0, 0) &rarr; (0, 1) [M] &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)
		
		
			3
			(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) [M] &rarr; (2, 2)
		
		
			4
			(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)
		
		
			5
			(0, 0) &rarr; (1, 0) &rarr; (2, 0) [M] &rarr; (2, 1) &rarr; (2, 2)
		
	



	
	[M] indicates the robot attempted to enter a mirror cell and instead reflected.
	



Example 2:


Input: grid = [[0,0],[0,0]]

Output: 2

Explanation:


	
		
			Number
			Full Path
		
	
	
		
			1
			(0, 0) &rarr; (0, 1) &rarr; (1, 1)
		
		
			2
			(0, 0) &rarr; (1, 0) &rarr; (1, 1)
		
	



Example 3:


Input: grid = [[0,1,1],[1,1,0]]

Output: 1

Explanation:


	
		
			Number
			Full Path
		
	
	
		
			1
			(0, 0) &rarr; (0, 1) [M] &rarr; (1, 1) [M] &rarr; (1, 2)
		
	

(0, 0) &rarr; (1, 0) [M] &rarr; (1, 1) [M] &rarr; (2, 1) goes out of bounds, so it is invalid.

 
Constraints:


	m == grid.length
	n == grid[i].length
	2 <= m, n <= 500
	grid[i][j] is either 0 or 1.
	grid[0][0] == grid[m - 1][n - 1] == 0

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem “Twisted Mirror Path Count” requires calculating the number of unique paths from the top-left corner to the bottom-right corner of a given grid, considering that the grid can be manipulated as a "twisted mirror."

### Problem Explanation:

1. **Grid Configuration**: The grid has obstacles (cells that cannot be traversed) and is represented by a 2D array where `1` signifies a cell that can be traversed, and `0` indicates an obstacle.

2. **Twisted Mirroring**: The twisted mirror concept allows paths to extend to cells in a mirrored manner. Meaning, if you can move to (x, y), you also have the potential to move to (N - 1 - x, M - 1 - y), where N is the number of rows and M is the number of columns in the grid.

3. **Paths**: You can only move down or right from a cell to another cell that is traversable. 

### Approach:

To solve the problem, a Depth-First Search (DFS) or Dynamic Programming (DP) approach can be utilized to explore possible paths while considering both the normal and mirrored positions. In our C++ solution, we'll utilize recursion with memoization to count the unique paths.

### C++ Implementation:

Here’s how to implement it in C++:

```cpp
#include <vector>
#include <iostream>
#include <unordered_map>
#include <utility>

using namespace std;

class Solution {
public:
    int countPaths(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        // Memoization table to store the results of calculated paths
        unordered_map<string, int> memo;
        
        // Start the recursive counting from (0, 0)
        return dfs(0, 0, n, m, grid, memo);
    }
    
private:
    // Recursive function for DFS with memoization
    int dfs(int x, int y, int n, int m, vector<vector<int>>& grid, unordered_map<string, int>& memo) {
        // We've reached the destination
        if (x == n - 1 && y == m - 1) {
            return 1;
        }
        
        // If out of bounds or on an obstacle
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0) {
            return 0;
        }
        
        // Create a unique key for memoization
        string key = to_string(x) + "," + to_string(y);
        if (memo.find(key) != memo.end()) {
            return memo[key];
        }
        
        // Calculate paths to the right and down
        int paths = 0;
        paths += dfs(x + 1, y, n, m, grid, memo); // move down
        paths += dfs(x, y + 1, n, m, grid, memo); // move right
        
        // Mirror paths
        int mirrored_x = n - 1 - x;
        int mirrored_y = m - 1 - y;

        if (mirrored_x < n && mirrored_y < m && grid[mirrored_x][mirrored_y] == 1) {
            paths += dfs(mirrored_x, mirrored_y, n, m, grid, memo);
        }

        // Store the result in memo and return
        memo[key] = paths;
        return paths;
    }
};

// Usage Example:
int main() {
    Solution sol;
    vector<vector<int>> grid = {
        {1, 1, 0},
        {1, 1, 1},
        {0, 1, 1}
    };
    
    cout << "Count of Twisted Mirror Paths: " << sol.countPaths(grid) << endl;
    return 0;
}
```

### Explanation of the Code:

1. **Initialization**: The `countPaths` function initializes the size of the grid and creates a memoization map to store results of previously computed paths.

2. **DFS Function**: The `dfs` function performs the following:
   - First checks if it has reached the bottom-right corner, returning `1` if it's the case.
   - It returns `0` if it goes out of bounds or hits an obstacle.
   - It employs a string as a unique key to enable efficient memoization.
   - It recursively explores paths going down (`x+1`) and right (`y+1`).
   - It also calculates the mirrored position and checks if the mirror path is valid. If valid, it adds the count of paths from the mirrored position.

3. **Memoization**: The memoization prevents recalculating paths from the same position, optimizing the solution for larger grids.

4. **Usage Example**: The `main` function gives an example of input and prints the number of unique paths found.

This C++ implementation effectively meets the challenge posed by the "Twisted Mirror Path Count" problem, leveraging recursion and memoization for efficiency.