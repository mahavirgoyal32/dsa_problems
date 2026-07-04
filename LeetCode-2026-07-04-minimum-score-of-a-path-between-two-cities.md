# LeetCode Daily – 2026-07-04

## 🧠 Problem #2492 – **Minimum Score of a Path Between Two Cities**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities)

---

### 📝 Problem Description

You are given a positive integer n representing n cities numbered from 1 to n. You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. The cities graph is not necessarily connected.

The score of a path between two cities is defined as the minimum distance of a road in this path.

Return the minimum possible score of a path between cities 1 and n.

Note:


	A path is a sequence of roads between two cities.
	It is allowed for a path to contain the same road multiple times, and you can visit cities 1 and n multiple times along the path.
	The test cases are generated such that there is at least one path between 1 and n.


 
Example 1:


Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.


Example 2:


Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.


 
Constraints:


	2 <= n <= 105
	1 <= roads.length <= 105
	roads[i].length == 3
	1 <= ai, bi <= n
	ai != bi
	1 <= distancei <= 104
	There are no repeated edges.
	There is at least one path between 1 and n.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Minimum Score of a Path Between Two Cities" can be solved using graph theory, particularly by utilizing graph traversal techniques. We are given a list of roads connecting cities, each road has a score, and we aim to find the minimum score of all roads on the path between two specific cities.

### Problem Explanation:
Given:
- `n`: the number of cities (nodes).
- `roads`: a list of roads where `roads[i]` contains three integers: `a`, `b`, and `dist` representing a road between city `a` and city `b` with score `dist`.

Objective:
Find the minimum score of all the roads on any path from city `source` to city `destination`. 

### Strategy:
1. **Graph Representation**: Use an adjacency list to represent the graph.
2. **BFS/DFS for Path Finding**: We can use Breadth-First Search (BFS) or Depth-First Search (DFS) to explore paths from the `source` city to the `destination` city.
3. **Track the Minimum Score**: During the traversal, track the minimum score encountered over the roads taken.

### Steps:
1. Build the graph from the list of roads.
2. Use BFS starting from the `source` city.
3. While traversing, update the minimum score for each road taken toward neighboring cities.
4. Stop the search when you reach the `destination`.

### C++ Code Implementation:

```cpp
#include <vector>
#include <queue>
#include <unordered_map>
#include <limits>

using namespace std;

class Solution {
public:
    int minScore(int n, vector<vector<int>>& roads, int start, int end) {
        // Create an adjacency list to represent the graph
        unordered_map<int, vector<pair<int, int>>> graph;
        for (const auto& road : roads) {
            int a = road[0], b = road[1], dist = road[2];
            graph[a].emplace_back(b, dist);
            graph[b].emplace_back(a, dist);
        }
        
        // BFS setup
        queue<int> q;
        vector<bool> visited(n + 1, false);
        int min_score = numeric_limits<int>::max();
        
        q.push(start);
        visited[start] = true;
        
        while (!q.empty()) {
            int city = q.front();
            q.pop();
            
            // Check all connected cities
            for (const auto& neighbor : graph[city]) {
                int next_city = neighbor.first;
                int score = neighbor.second;
                
                if (!visited[next_city]) {
                    visited[next_city] = true;
                    q.push(next_city);
                }
                
                // If we reach the destination, update the minimum score
                if (next_city == end) {
                    min_score = min(min_score, score);
                }
            }
        }
        
        // If we've never reached the `end`, the default min_score will still be max
        // so we return the minimum score found
        return min_score != numeric_limits<int>::max() ? min_score : 0;
    }
};
```

### Explanation of the Code:
- We first create an adjacency list to store the roads connecting the cities.
- We then initialize a queue (`q`) for BFS, starting from the `source` city.
- As we explore each city, we check their neighbors and keep track of the minimum score among the connections.
- If we encounter the `destination` city at any point, we record the minimum score of the connecting road.
- Finally, we return the minimum score found. If no path was found, return 0.

### Edge Cases:
This code will also handle cases where there might not be any connecting path between the `source` and `destination`, returning a score of 0 in those scenarios.

### Complexity:
- **Time Complexity**: O(V + E), where V is the number of cities and E is the number of roads, as we need to traverse all roads and cities in the worst case.
- **Space Complexity**: O(V + E), for the graph representation and the visited array.