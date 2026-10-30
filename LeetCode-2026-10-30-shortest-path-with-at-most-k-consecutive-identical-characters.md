# LeetCode Daily – 2026-10-30

## 🧠 Problem #3970 – **Shortest Path With At Most K Consecutive Identical Characters**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters)

---

### 📝 Problem Description

You are given an integer n representing the number of nodes in a directed weighted graph, numbered from 0 to n - 1. This is represented by a 2D integer array edges, where edges[i] = [ui, vi, wi] represents a directed edge from node ui to node vi with weight wi.

You are also given a string labels of length n, where labels[i] is the character assigned to node i, and an integer k.

Return the minimum total edge weight of a path from node 0 to node n - 1 such that the concatenation of the labels of the nodes along the path contains at most k consecutive identical characters. If no valid path exists, return -1.

 
Example 1:


Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = &quot;aab&quot;, k = 1

Output: 3

Explanation:

The optimal valid path from node 0 to node 2 is as follows:


	Use edges[2] = [0, 2, 3] to reach node 2 with a weight wi = 3.

The corresponding concatenation of labels is &quot;ab&quot;, which satisfies at most k = 1 consecutive identical characters. Thus, the answer is 3.

Example 2:


Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = &quot;aab&quot;, k = 2

Output: 2

Explanation:

The optimal valid path from node 0 to node 2 is as follows:


	Use edges[0] = [0, 1, 1] to reach node 1 with weight wi = 1.
	Use edges[1] = [1, 2, 1] to reach node 2 with weight wi = 1.

The corresponding concatenation of labels is &quot;aab&quot;, which satisfies at most k = 2 consecutive identical characters. Thus, the answer is 2.

Example 3:


Input: n = 3, edges = [[0,1,1],[1,2,1]], labels = &quot;aaa&quot;, k = 2

Output: -1

Explanation:

There is no valid path from node 0 to node 2 that satisfies at most k = 2 consecutive identical characters. Thus, the answer is -1.


 
Constraints:


	1 <= n == labels.length <= 5 * 104
	0 <= edges.length <= 5 * 104
	edges[i] == [ui, vi, wi]
	0 <= ui, vi <= n - 1
	ui != vi
	1 <= wi <= 104
	labels consists of lowercase English letters
	1 <= k <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Shortest Path With At Most K Consecutive Identical Characters" requires finding the shortest path in a grid where movement is restricted by a maximum number of consecutive identical characters that can be traversed.

### Problem Analysis
You are given a grid of characters and two positions: the starting position `(startX, startY)` and the target position `(endX, endY)`. The goal is to find the length of the shortest path from the start position to the target position. You can only move up, down, left, or right. However, you can’t have more than `k` consecutive moves on the same character.

### Approach
To solve this problem, we can use a breadth-first search (BFS) approach. This is suitable because we need to find the shortest path in an unweighted grid. The BFS will utilize a queue to explore all possible paths while keeping track of the number of consecutive identical characters.

1. **Data Structures**:
   - A queue to manage BFS exploration.
   - A set to keep track of visited states.
   - Each state in the queue will represent the current position, the last character moved on, and the count of consecutive moves of that character.

2. **BFS Process**:
   - Start from the initial position `(startX, startY)` with no previous character and a count of 0.
   - Explore each of the four possible directions.
   - For each direction, check if the next position is within bounds and has not been visited with the current character and count.
   - If moving to a new position results in the same character as before, increment the consecutive count; otherwise, reset it to 1.
   - If we reach the target position, return the path length.
   - If we exhaust the queue without reaching the target, return -1 (indicating no valid path).

### C++ Implementation
Here's the implementation in C++:

```cpp
#include <vector>
#include <queue>
#include <tuple>
#include <string>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int shortestPath(vector<vector<char>>& grid, int startX, int startY, int endX, int endY, int k) {
        int n = grid.size(), m = grid[0].size();
        queue<tuple<int, int, char, int>> q; // (x, y, last_char, count)
        unordered_set<string> visited; // To track visited states

        q.push({startX, startY, '#', 0}); // '#' is a placeholder for no previous character
        visited.insert(to_string(startX) + "_" + to_string(startY) + "_" + '#');

        int steps = 0;
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}}; // down, up, right, left

        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                auto [x, y, lastChar, count] = q.front();
                q.pop();

                // If we reach the target
                if (x == endX && y == endY) {
                    return steps;
                }

                for (auto [dx, dy] : directions) {
                    int newX = x + dx, newY = y + dy;
                    if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                        char newChar = grid[newX][newY];
                        int newCount = (newChar == lastChar) ? count + 1 : 1;

                        // Check if it's not exceeding k and the state has not been visited
                        if (newCount <= k) {
                            string state = to_string(newX) + "_" + to_string(newY) + "_" + newChar;
                            if (visited.find(state) == visited.end()) {
                                visited.insert(state);
                                q.push({newX, newY, newChar, newCount});
                            }
                        }
                    }
                }
            }
            ++steps;
        }

        return -1; // Target not reachable
    }
};
```

### Explanation of the Code
1. **Initialization**: We initialize the BFS queue with the start position and a dummy character `#` with a consecutive count of `0`.
2. **BFS Loop**: We iterate over the queue while checking all possible directions. For each possible move, we check:
   - If it's within the bounds of the grid.
   - If moving to that character does not exceed the allowed consecutive count `k`.
   - If that position has not been visited with the same character and count.
3. **State Representation**: Each state is represented as a string that combines the coordinates and the last character, which allows us to efficiently track visited states.
4. **Steps Counting**: We increment the step count at the end of each level of BFS exploration until we find the target or exhaust all possibilities.

This implementation efficiently finds the shortest path under the given constraints.