# LeetCode Daily – 2026-07-10

## 🧠 Problem #3534 – **Path Existence Queries in a Graph II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/path-existence-queries-in-a-graph-ii)

---

### 📝 Problem Description

You are given an integer n representing the number of nodes in a graph, labeled from 0 to n - 1.

You are also given an integer array nums of length n and an integer maxDiff.

An undirected edge exists between nodes i and j if the absolute difference between nums[i] and nums[j] is at most maxDiff (i.e., |nums[i] - nums[j]| <= maxDiff).

You are also given a 2D integer array queries. For each queries[i] = [ui, vi], find the minimum distance between nodes ui and vi. If no path exists between the two nodes, return -1 for that query.

Return an array answer, where answer[i] is the result of the ith query.

Note: The edges between the nodes are unweighted.

 
Example 1:


Input: n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]

Output: [1,1]

Explanation:

The resulting graph is:




	
		
			Query
			Shortest Path
			Minimum Distance
		
		
			[0, 3]
			0 &rarr; 3
			1
		
		
			[2, 4]
			2 &rarr; 4
			1
		
	


Thus, the output is [1, 1].


Example 2:


Input: n = 5, nums = [5,3,1,9,10], maxDiff = 2, queries = [[0,1],[0,2],[2,3],[4,3]]

Output: [1,2,-1,1]

Explanation:

The resulting graph is:





	
		
			Query
			Shortest Path
			Minimum Distance
		
		
			[0, 1]
			0 &rarr; 1
			1
		
		
			[0, 2]
			0 &rarr; 1 &rarr; 2
			2
		
		
			[2, 3]
			None
			-1
		
		
			[4, 3]
			3 &rarr; 4
			1
		
	


Thus, the output is [1, 2, -1, 1].

Example 3:


Input: n = 3, nums = [3,6,1], maxDiff = 1, queries = [[0,0],[0,1],[1,2]]

Output: [0,-1,-1]

Explanation:

There are no edges between any two nodes because:


	Nodes 0 and 1: |nums[0] - nums[1]| = |3 - 6| = 3 > 1
	Nodes 0 and 2: |nums[0] - nums[2]| = |3 - 1| = 2 > 1
	Nodes 1 and 2: |nums[1] - nums[2]| = |6 - 1| = 5 > 1


Thus, no node can reach any other node, and the output is [0, -1, -1].


 
Constraints:


	1 <= n == nums.length <= 105
	0 <= nums[i] <= 105
	0 <= maxDiff <= 105
	1 <= queries.length <= 105
	queries[i] == [ui, vi]
	0 <= ui, vi < n

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Path Existence Queries in a Graph II" requires you to determine whether there exists a path between two nodes in a graph, with the ability to change certain edges dynamically.

Let's break down the problem and solve it step by step using C++.

### Problem Breakdown

1. **Graph Representation**: We need to represent a directed graph where edges can be enabled or disabled.
2. **Dynamic Queries**: We can toggle the existence of edges dynamically based on queries.
3. **Path Existence Check**: For each query, we need to efficiently check whether a path exists between two nodes.

### Approach

1. **Dynamic Graph Representation**: We can use an adjacency list to represent the graph. Each edge can be toggled on or off based on the queries.
2. **Depth-First Search (DFS)**: To check for the existence of a path between two nodes, we can use DFS or Breadth-First Search (BFS).
3. **Union-Find Structure**: We can utilize a Union-Find (Disjoint Set Union, DSU) data structure to efficiently check connected components between two nodes.
   
The steps for the solution will be:
- Build the graph from the given edges.
- Process the enable/disable operations using the Union-Find structure.
- Use DFS or BFS to check if a path exists for query operations.

### Implementation in C++

Here’s a C++ implementation of the solution, following the above approach:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>

using namespace std;

class Graph {
public:
    unordered_map<int, unordered_set<int>> adj; // adjacency list representation
    void addEdge(int u, int v) {
        adj[u].insert(v);
    }
    
    void removeEdge(int u, int v) {
        if (adj.find(u) != adj.end()) {
            adj[u].erase(v);
        }
    }
    
    bool dfs(int start, int end, unordered_set<int>& visited) {
        if (start == end) return true;
        visited.insert(start);
        for (int neighbor : adj[start]) {
            if (visited.find(neighbor) == visited.end() && dfs(neighbor, end, visited)) {
                return true;
            }
        }
        return false;
    }
    
    bool pathExists(int start, int end) {
        unordered_set<int> visited;
        return dfs(start, end, visited);
    }
};

class PathExistence {
private:
    Graph graph;
    vector<pair<int, int>> edges;

public:
    PathExistence(vector<vector<int>>& existingEdges) {
        for (const auto& edge : existingEdges) {
            graph.addEdge(edge[0], edge[1]);
            edges.push_back({edge[0], edge[1]});
        }
    }

    void toggleEdge(int u, int v) {
        if (graph.adj[u].count(v)) {
            graph.removeEdge(u, v); // Remove the edge if it exists
        } else {
            graph.addEdge(u, v); // Add the edge if it doesn't exist
        }
    }
    
    bool queryPath(int start, int end) {
        return graph.pathExists(start, end);
    }
};

int main() {
    // Example usage:
    vector<vector<int>> edges = {{1, 2}, {2, 3}, {3, 4}};
    PathExistence pathExistence(edges);
    
    // Query
    cout << pathExistence.queryPath(1, 4) << endl; // Should return true

    // Toggle Edge 3 -> 4
    pathExistence.toggleEdge(3, 4);
    
    // Query again
    cout << pathExistence.queryPath(1, 4) << endl; // Should return false if the edge was toggled off

    return 0;
}
```

### Explanation

1. **Graph Class**: Manages the graph's edges using an adjacency list and provides methods to add or remove edges as well as check for path existence using DFS.
2. **PathExistence Class**: Initializes the graph with given edges and provides the functionality to toggle edges and query path existence between two nodes.
3. **Main Function**: Demonstrates how to use the `PathExistence` class to handle paths dynamically in a graph.

This implementation allows for efficient path checking and edge manipulation, accommodating the requirements of the problem. For each query, the search is performed in O(V + E) time, where V is the number of vertices and E is the number of edges.