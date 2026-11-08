# LeetCode Daily – 2026-11-08

## 🧠 Problem #1267 – **Count Servers that Communicate**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-servers-that-communicate)

---

### 📝 Problem Description

You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

 
Example 1:




Input: grid = [[1,0],[0,1]]
Output: 0
Explanation: No servers can communicate with others.

Example 2:




Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.


Example 3:




Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can&#39;t communicate with any other server.


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m <= 250
	1 <= n <= 250
	grid[i][j] == 0 or 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Count Servers that Communicate" involves a grid representing a network of servers. Each server can communicate with another server if they are located in the same row or the same column. The goal is to count how many servers can communicate with at least one other server.

### Problem Explanation
You are given a 2D grid `grid` where:
- `1` represents a server.
- `0` represents an empty space.

A server communicates with another server if they are in the same row or the same column.

### Steps to Solve the Problem
1. Count the number of servers in each row and each column.
2. If a server is in a row or column that has more than one server, it can communicate.
3. Iterate through the grid again, and for each server, check if it can communicate by verifying the counts from the previous step.

### C++ Code
Here's the C++ implementation:

```cpp
#include <vector>

class Solution {
public:
    int countServers(std::vector<std::vector<int>>& grid) {
        int n = grid.size();         // number of rows
        int m = grid[0].size();      // number of columns
        
        std::vector<int> rowCount(n, 0);
        std::vector<int> colCount(m, 0);
        
        // Step 1: Count servers in each row and column
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                if (grid[i][j] == 1) {
                    rowCount[i]++;
                    colCount[j]++;
                }
            }
        }
        
        int serverCount = 0;
        
        // Step 2: Count servers that can communicate
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                if (grid[i][j] == 1) {
                    // If either row or column count is greater than 1, it can communicate
                    if (rowCount[i] > 1 || colCount[j] > 1) {
                        serverCount++;
                    }
                }
            }
        }
        
        return serverCount;
    }
};
```

### Explanation of the Code
1. **Input and Initialization**: We receive a 2D vector `grid` representing the network. We initialize two vectors `rowCount` and `colCount` to store the counts of servers in each row and column.

2. **Counting Servers**:
   - We traverse the grid. Whenever we find a server (cell with `1`), we increment the corresponding row count and column count.
  
3. **Counting Communicating Servers**:
   - We iterate through the grid again. For each server, we check the counts in `rowCount` and `colCount`. If either count is greater than 1, it indicates that the server can communicate with at least one other server, and we increment the `serverCount`.

4. **Return the Result**: Finally, we return the total count of servers that can communicate.

### Complexity Analysis
- **Time Complexity**: O(N * M), where N is the number of rows and M is the number of columns. We traverse the grid a couple of times.
- **Space Complexity**: O(N + M) for the row and column counts.

This solution is efficient and straightforward, leveraging the counts to determine communication without needing to check each server against every other server repeatedly.