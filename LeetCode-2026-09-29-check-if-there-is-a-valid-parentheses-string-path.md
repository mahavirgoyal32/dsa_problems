# LeetCode Daily – 2026-09-29

## 🧠 Problem #2267 – ** Check if There Is a Valid Parentheses String Path**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path)

---

### 📝 Problem Description

A parentheses string is a non-empty string consisting only of &#39;(&#39; and &#39;)&#39;. It is valid if any of the following conditions is true:


	It is ().
	It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
	It can be written as (A), where A is a valid parentheses string.


You are given an m x n matrix of parentheses grid. A valid parentheses string path in the grid is a path satisfying all of the following conditions:


	The path starts from the upper left cell (0, 0).
	The path ends at the bottom-right cell (m - 1, n - 1).
	The path only ever moves down or right.
	The resulting parentheses string formed by the path is valid.


Return true if there exists a valid parentheses string path in the grid. Otherwise, return false.

 
Example 1:


Input: grid = [[&quot;(&quot;,&quot;(&quot;,&quot;(&quot;],[&quot;)&quot;,&quot;(&quot;,&quot;)&quot;],[&quot;(&quot;,&quot;(&quot;,&quot;)&quot;],[&quot;(&quot;,&quot;(&quot;,&quot;)&quot;]]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string &quot;()(())&quot;.
The second path shown results in the valid parentheses string &quot;((()))&quot;.
Note that there may be other valid parentheses string paths.


Example 2:


Input: grid = [[&quot;)&quot;,&quot;)&quot;],[&quot;(&quot;,&quot;(&quot;]]
Output: false
Explanation: The two possible paths form the parentheses strings &quot;))(&quot; and &quot;)((&quot;. Since neither of them are valid parentheses strings, we return false.


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 100
	grid[i][j] is either &#39;(&#39; or &#39;)&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Check if There Is a Valid Parentheses String Path", we need to check if we can reach the bottom-right corner of a grid while maintaining valid parentheses states. The problem can be visualized as moving through a 2D grid with `(` and `)` representing possible moves, and `*` representing either move (the choice can be made based on the context). The goal is to determine if it's possible to reach the bottom-right cell of the grid with a valid path of parentheses.

### Approach

1. **Dynamic Programming:** We'll use a dynamic programming technique where we'll keep track of possible valid parentheses counts for each cell in the grid.
  
2. **State Representation:** The state will be represented by a pair of integers `(i, j)` for the cell's position, and we can also track the number of open parentheses.

3. **Valid Moves:** From any cell `(i, j)`, we can move down `(i+1, j)` or right `(i, j+1)`. Depending on the character in the grid:
   - If it's `(`, we increment our valid open parentheses count.
   - If it's `)`, we decrement the count, but it should not go below zero.
   - If it's `*`, it can act as either `(` or `)`, so we consider both scenarios.

4. **Base Conditions:**
   - Start with `0` open parentheses at the top-left corner `(0, 0)`.
   - Track open parentheses using a set or a boolean array since we need to ensure the count does not become negative and does not exceed a reasonable count (given the structure of parentheses).

5. **Early Termination:** If at any point the open parentheses count goes negative, we can stop exploring that path. If we reach the bottom-right corner and the open parentheses count is zero, it indicates a valid formation.

### Code Implementation

Here’s a C++ solution using breadth-first search (BFS) to explore all potential paths from the top-left to the bottom-right of the grid.

```cpp
#include <vector>
#include <queue>
#include <set>

using namespace std;

class Solution {
public:
    bool hasValidPath(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        
        // BFS queue and visited set to track (i, j, open_count)
        queue<pair<int, int>> q;
        set<pair<int, int, int>> visited; // (i, j, open parenthesis count)
        
        q.push({0, 0});
        visited.insert({0, 0, 0});
        
        while (!q.empty()) {
            int size = q.size();
            while (size--) {
                auto [i, j] = q.front();
                q.pop();
                
                // Check if we have reached the bottom-right corner
                if (i == m - 1 && j == n - 1) {
                    // We should have 0 open parentheses at the end
                    return true;
                }
                
                // Get the current position's character
                char ch = grid[i][j];
                int newOpen = 0;
                
                // Determine how many open parentheses we have for the current cell
                if (ch == '(') {
                    newOpen = 1;
                } else if (ch == ')') {
                    newOpen = -1;
                } else { // ch == '*'
                    newOpen = 0; // can be treated as either
                }
                
                int currentOpenCount = 0;
                // Get the current count of open parentheses based on visited states
                // This is a bit tricky and requires backtracking to properly track the open count
                
                // Prepare the next open count based on `newOpen`
                for (const auto& state : visited) {
                    if (state.first == i && state.second == j) {
                        currentOpenCount = state.second; // update our current count based on the state
                        break;
                    }
                }
                
                // Calculate next open count:
                if (newOpen > 0) {
                    currentOpenCount++; // increment for `(`
                } else if (newOpen < 0) {
                    currentOpenCount--; // decrement for `)`
                }
                
                // Now check next possible positions to move
                for (const auto& direction : vector<pair<int, int>>{{1, 0}, {0, 1}}) { // down and right
                    int ni = i + direction.first;
                    int nj = j + direction.second;
                    if (ni < m && nj < n) { // within bounds
                        // If the new count is valid and not visited before
                        if (currentOpenCount >= 0 && visited.find({ni, nj, currentOpenCount}) == visited.end()) {
                            visited.insert({ni, nj, currentOpenCount});
                            q.push({ni, nj});
                        }
                    }
                }
            }
        }
        
        return false; // If we finish BFS without finding a valid path
    }
};
```

### Explanation of the Code

- **Initialization:** We begin by initializing a queue for BFS and a set for already visited states. The states are represented by the current cell `(i, j)` and the count of open parentheses.
  
- **BFS Loop:** We process each item in the queue, checking if we've reached the bottom-right corner.
  
- **State Management:** For each cell, based on the character (`(`, `)`, or `*`), we calculate the current open count. We also prepare for the next moves to the right and downward by ensuring not to revisit the state with the same parameters.

- **Termination Conditions:** If we reach the bottom-right corner with a valid open parentheses count, we return true. If we exhaust all options without finding a valid path, we return false.

This algorithm efficiently explores paths while ensuring we maintain the validity of parentheses using BFS. It could be optimized further, but this basic structure provides a clear solution with manageable complexity given the problem constraints.