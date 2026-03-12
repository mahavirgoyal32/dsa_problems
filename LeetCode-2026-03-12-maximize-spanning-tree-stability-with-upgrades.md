# LeetCode Daily – 2026-03-12

## 🧠 Problem #3600 – **Maximize Spanning Tree Stability with Upgrades**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-spanning-tree-stability-with-upgrades)

---

### 📝 Problem Description

You are given an integer n, representing n nodes numbered from 0 to n - 1 and a list of edges, where edges[i] = [ui, vi, si, musti]:


	ui and vi indicates an undirected edge between nodes ui and vi.
	si is the strength of the edge.
	musti is an integer (0 or 1). If musti == 1, the edge must be included in the spanning tree. These edges cannot be upgraded.


You are also given an integer k, the maximum number of upgrades you can perform. Each upgrade doubles the strength of an edge, and each eligible edge (with musti == 0) can be upgraded at most once.

The stability of a spanning tree is defined as the minimum strength score among all edges included in it.

Return the maximum possible stability of any valid spanning tree. If it is impossible to connect all nodes, return -1.

Note: A spanning tree of a graph with n nodes is a subset of the edges that connects all nodes together (i.e. the graph is connected) without forming any cycles, and uses exactly n - 1 edges.

 
Example 1:


Input: n = 3, edges = [[0,1,2,1],[1,2,3,0]], k = 1

Output: 2

Explanation:


	Edge [0,1] with strength = 2 must be included in the spanning tree.
	Edge [1,2] is optional and can be upgraded from 3 to 6 using one upgrade.
	The resulting spanning tree includes these two edges with strengths 2 and 6.
	The minimum strength in the spanning tree is 2, which is the maximum possible stability.



Example 2:


Input: n = 3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k = 2

Output: 6

Explanation:


	Since all edges are optional and up to k = 2 upgrades are allowed.
	Upgrade edges [0,1] from 4 to 8 and [1,2] from 3 to 6.
	The resulting spanning tree includes these two edges with strengths 8 and 6.
	The minimum strength in the tree is 6, which is the maximum possible stability.



Example 3:


Input: n = 3, edges = [[0,1,1,1],[1,2,1,1],[2,0,1,1]], k = 0

Output: -1

Explanation:


	All edges are mandatory and form a cycle, which violates the spanning tree property of acyclicity. Thus, the answer is -1.



 
Constraints:


	2 <= n <= 105
	1 <= edges.length <= 105
	edges[i] = [ui, vi, si, musti]
	0 <= ui, vi < n
	ui != vi
	1 <= si <= 105
	musti is either 0 or 1.
	0 <= k <= n
	There are no duplicate edges.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximize Spanning Tree Stability with Upgrades" from LeetCode presents an interesting challenge involving graph theory and union-find (disjoint-set) structure. Below, I'll explain the approach we would use to solve this problem step by step, including the C++ implementation.

### Understanding the Problem

You are given:
- A weighted undirected graph represented by `n` nodes and `m` edges.
- Each edge has a weight, and some edges can be upgraded to have higher stability (i.e., a higher weight).

Your task is to find a maximum spanning tree (MST) by selecting edges from both the original and upgraded set, ensuring that the total weight of the tree is maximized under standard MST properties.

### Approach

1. **Union-Find Data Structure**: We will use the union-find data structure to help us efficiently manage connected components of the graph, which is fundamental when constructing a spanning tree.

2. **Edges Sorting**: We start by treating both original and upgraded edges. We will first create a single list of edges, combining the original and upgraded edges. We then sort this list based on edge weights in descending order (for maximum spanning tree).

3. **Kruskal's Algorithm**: Apply Kruskal’s algorithm with the sorted edge list, using the union-find to keep track of connected components, and select edges to maximize the total weight until we have included `n-1` edges (where `n` is the number of nodes).

4. **Output the Result**: The final result will be the total weight of the included edges.

### C++ Implementation

Here’s how you would implement the above plan in C++:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class UnionFind {
public:
    UnionFind(int n) {
        parent.resize(n);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }

    int find(int a) {
        if (parent[a] != a) {
            parent[a] = find(parent[a]); // Path compression
        }
        return parent[a];
    }

    void unionSets(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
        if (rootA != rootB) {
            parent[rootB] = rootA; // Union
        }
    }

private:
    vector<int> parent;
};

struct Edge {
    int weight;
    int u;
    int v;
};

class Solution {
public:
    int maxStability(int n, vector<vector<int>>& edges, vector<vector<int>>& upgrades) {
        vector<Edge> allEdges;

        // Add original edges
        for (const auto& edge : edges) {
            allEdges.push_back({edge[2], edge[0], edge[1]});
        }

        // Add upgraded edges
        for (const auto& upgrade : upgrades) {
            allEdges.push_back({upgrade[2], upgrade[0], upgrade[1]});
        }

        // Sort edges by weight in descending order
        sort(allEdges.rbegin(), allEdges.rend(), [](const Edge& a, const Edge& b) {
            return a.weight < b.weight;
        });

        UnionFind uf(n);
        int totalWeight = 0;
        int edgesAdded = 0;

        // Process edges
        for (const auto& edge : allEdges) {
            if (edgesAdded < n - 1 && uf.find(edge.u) != uf.find(edge.v)) {
                uf.unionSets(edge.u, edge.v);
                totalWeight += edge.weight;
                edgesAdded++;
            }
        }

        return totalWeight; 
    }
};
```

### Explanation of the Code

1. **UnionFind Class**: This class manages the union-find operations, where we implement path compression to optimize the `find` operation.

2. **Edge Structure**: The `Edge` struct represents each edge with its weight and the two nodes it connects.

3. **maxStability Function**: This function initializes all edges (both types), sorts them in descending order based on their weight, and uses union-find to construct the maximum spanning tree.

4. **Processing Edges**: We iterate over the sorted edges and attempt to connect nodes. If they are already connected (i.e., their roots are the same), we skip adding the edge. We continue this until we have added `n-1` edges.

### Complexity Analysis
- **Time Complexity**: O((E + U) log(E + U)), where E is the number of original edges and U is the number of upgrade edges. This is primarily due to the sorting step.
- **Space Complexity**: O(E + U) for storing the edges and for the union-find structure.

This solution efficiently constructs the maximum spanning tree using the union-find structure and is appropriate for the constraints typically found in competitive programming or interview scenarios.