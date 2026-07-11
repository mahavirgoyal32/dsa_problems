# LeetCode Daily – 2026-07-11

## 🧠 Problem #2685 – **Count the Number of Complete Components**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-the-number-of-complete-components)

---

### 📝 Problem Description

You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.

Return the number of complete connected components of the graph.

A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be complete if there exists an edge between every pair of its vertices.

 
Example 1:




Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
Output: 3
Explanation: From the picture above, one can see that all of the components of this graph are complete.


Example 2:




Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
Output: 1
Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.


 
Constraints:


	1 <= n <= 50
	0 <= edges.length <= n * (n - 1) / 2
	edges[i].length == 2
	0 <= ai, bi <= n - 1
	ai != bi
	There are no repeated edges.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count the Number of Complete Components" in LeetCode requires us to find the number of complete components in an undirected graph. A complete component is defined as a connected component where every node is directly connected to every other node. This means that for a connected component with `n` nodes, the number of edges must be exactly `n * (n - 1) / 2`.

### Steps to Solve the Problem:

1. **Graph Representation**: We can represent the graph using an adjacency list. This will help us keep track of which nodes are connected to which.

2. **DFS/BFS for Exploring Components**: We can use either Depth-First Search (DFS) or Breadth-First Search (BFS) to explore each connected component. During the traversal, we will also count the number of nodes and the number of edges encountered in that component.

3. **Checking for Completeness**: After exploring a component, we use the formula described above to check if it is a complete component. Specifically, we will check if the number of edges is equal to `n * (n - 1) / 2` where `n` is the number of nodes in that component.

4. **Counting Complete Components**: Finally, we maintain a count of how many complete components we find.

### Implementation

Here’s the implementation of the above approach in C++:

```cpp
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int countCompleteComponents(int n, vector<vector<int>>& edges) {
        // Build the adjacency list
        unordered_map<int, unordered_set<int>> graph;
        for (const auto& edge : edges) {
            graph[edge[0]].insert(edge[1]);
            graph[edge[1]].insert(edge[0]);
        }
        
        vector<bool> visited(n, false);
        int completeComponentCount = 0;

        for (int i = 0; i < n; ++i) {
            if (!visited[i] && graph.find(i) != graph.end()) {
                int nodeCount = 0;
                int edgeCount = 0;
                dfs(i, graph, visited, nodeCount, edgeCount);
                
                // Each edge is counted twice in undirected graphs
                edgeCount /= 2;
                if (edgeCount == nodeCount * (nodeCount - 1) / 2) {
                    completeComponentCount++;
                }
            }
        }
        
        return completeComponentCount;
    }
    
private:
    void dfs(int node, unordered_map<int, unordered_set<int>>& graph, vector<bool>& visited,
             int& nodeCount, int& edgeCount) {
        visited[node] = true;
        nodeCount++;
        for (int neighbor : graph[node]) {
            edgeCount++;
            if (!visited[neighbor]) {
                dfs(neighbor, graph, visited, nodeCount, edgeCount);
            }
        }
    }
};
```

### Explanation of the Code:

1. **Graph Construction**: We read the edges and construct the graph using an adjacency list, where each key is a node, and its value is a set of connected nodes.

2. **DFS Function**: The `dfs` function is responsible for exploring the nodes in a component. It marks the current node as visited, increments the count of nodes, and counts all edges in the process.

3. **Main Function**: In the `countCompleteComponents` function, we iterate through all nodes. For each unvisited node that is part of the graph, we initiate a DFS to count nodes and edges.

4. **Count Completion Check**: Once we exit the DFS, we check if the number of edges is equal to the required condition for completeness and adjust our complete component counter accordingly.

### Complexity:
- **Time Complexity**: \(O(n + m)\), where \(n\) is the number of nodes and \(m\) is the number of edges, as each edge and node is processed once.
- **Space Complexity**: \(O(n + m)\) for the graph representation and visited array.

With this solution, we can effectively count the number of complete components in the given undirected graph.