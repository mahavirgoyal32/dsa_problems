# LeetCode Daily – 2025-11-06

## 🧠 Problem #3607 – **Power Grid Maintenance**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/power-grid-maintenance)

---

### 📝 Problem Description

You are given an integer c representing c power stations, each with a unique identifier id from 1 to c (1‑based indexing).

These stations are interconnected via n bidirectional cables, represented by a 2D array connections, where each element connections[i] = [ui, vi] indicates a connection between station ui and station vi. Stations that are directly or indirectly connected form a power grid.

Initially, all stations are online (operational).

You are also given a 2D array queries, where each query is one of the following two types:


	
	[1, x]: A maintenance check is requested for station x. If station x is online, it resolves the check by itself. If station x is offline, the check is resolved by the operational station with the smallest id in the same power grid as x. If no operational station exists in that grid, return -1.
	
	
	[2, x]: Station x goes offline (i.e., it becomes non-operational).
	


Return an array of integers representing the results of each query of type [1, x] in the order they appear.

Note: The power grid preserves its structure; an offline (non‑operational) node remains part of its grid and taking it offline does not alter connectivity.

 
Example 1:


Input: c = 5, connections = [[1,2],[2,3],[3,4],[4,5]], queries = [[1,3],[2,1],[1,1],[2,2],[1,2]]

Output: [3,2,3]

Explanation:




	Initially, all stations {1, 2, 3, 4, 5} are online and form a single power grid.
	Query [1,3]: Station 3 is online, so the maintenance check is resolved by station 3.
	Query [2,1]: Station 1 goes offline. The remaining online stations are {2, 3, 4, 5}.
	Query [1,1]: Station 1 is offline, so the check is resolved by the operational station with the smallest id among {2, 3, 4, 5}, which is station 2.
	Query [2,2]: Station 2 goes offline. The remaining online stations are {3, 4, 5}.
	Query [1,2]: Station 2 is offline, so the check is resolved by the operational station with the smallest id among {3, 4, 5}, which is station 3.



Example 2:


Input: c = 3, connections = [], queries = [[1,1],[2,1],[1,1]]

Output: [1,-1]

Explanation:


	There are no connections, so each station is its own isolated grid.
	Query [1,1]: Station 1 is online in its isolated grid, so the maintenance check is resolved by station 1.
	Query [2,1]: Station 1 goes offline.
	Query [1,1]: Station 1 is offline and there are no other stations in its grid, so the result is -1.



 
Constraints:


	1 <= c <= 105
	0 <= n == connections.length <= min(105, c * (c - 1) / 2)
	connections[i].length == 2
	1 <= ui, vi <= c
	ui != vi
	1 <= queries.length <= 2 * 105
	queries[i].length == 2
	queries[i][0] is either 1 or 2.
	1 <= queries[i][1] <= c

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the "Power Grid Maintenance" problem from LeetCode. 

The problem involves a graph where you have a number of nodes (representing power stations) and edges (representing the connection between them). The goal is to ensure all power stations can be connected while minimizing the number of edges used.

## Problem Breakdown

1. **Understanding the Graph**: You're given `n` nodes and `m` edges, which are undirected. Each edge has a cost and we need to find a cost-effective way to connect as many nodes as possible. 
   
2. **Minimum Spanning Tree (MST)**: This problem is similar to finding a minimum spanning tree in a graph. The MST for a graph gives you a tree that connects all the vertices together with the minimum total edge weight.

3. **Algorithm Choice**: We can use Kruskal's algorithm or Prim's algorithm to find the MST. Here, I'll illustrate using Kruskal's algorithm since it’s straightforward for edge lists.

4. **Union-Find**: To efficiently determine the connected components and prevent cycles when adding edges, we will utilize a Union-Find (Disjoint Set Union) data structure.

### Implementation in C++

Here's how you can implement the solution:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Union-Find structure
class UnionFind {
public:
    vector<int> parent, rank;
    
    UnionFind(int size) {
        parent.resize(size);
        rank.resize(size, 0);
        for (int i = 0; i < size; ++i) {
            parent[i] = i;
        }
    }
    
    int find(int u) {
        if (parent[u] != u) {
            parent[u] = find(parent[u]); // Path compression
        }
        return parent[u];
    }
    
    void unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);
        
        if (rootU != rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }
};

// Main function to calculate the minimum cost of connecting the power grid
int minCostConnectPoints(vector<vector<int>>& points) {
    int n = points.size();
    vector<pair<int, pair<int, int>>> edges; // {cost, {u, v}}

    // Create edges with their respective costs
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            int cost = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1]);
            edges.push_back({cost, {i, j}});
        }
    }

    // Sort edges based on their cost
    sort(edges.begin(), edges.end());

    UnionFind uf(n);
    int totalCost = 0;

    // Kruskal's algorithm - build the minimum spanning tree
    for (const auto& edge : edges) {
        int cost = edge.first;
        int u = edge.second.first;
        int v = edge.second.second;

        if (uf.find(u) != uf.find(v)) {
            uf.unionSets(u, v);
            totalCost += cost; // Add the cost of the edge
        }
    }

    return totalCost;
}

int main() {
    vector<vector<int>> points = {
        {0, 0},
        {2, 2},
        {3, 10},
        {5, 2},
        {7, 0}
    };

    int result = minCostConnectPoints(points);
    cout << "Minimum cost to connect all power stations: " << result << endl;

    return 0;
}
```

### Explanation of the Code

1. **Union-Find Class**: This class manages the parent and rank of nodes for efficient union and find operations. The `find` function implements path compression to speed up future queries, while the `unionSets` function combines two sets.

2. **Edge Cost Calculation**: We iterate through all pairs of points to calculate the Manhattan distance (cost) between each pair and store them in the `edges` vector.

3. **Edge Sorting**: We sort the edges based on their costs to use in Kruskal's algorithm.

4. **Construction of MST**: We iterate through the sorted edges and use Union-Find to connect nodes if they are not already connected. If they are connected, we skip adding that edge to avoid cycles.

5. **Total Cost**: Finally, we accumulate the costs of the edges that have been added to the MST and return the total cost.

This solution efficiently finds the minimum cost needed to connect all power stations. The time complexity is dominated by the sorting step, O(E log E), where E is the number of edges, and the union-find operations are nearly constant time due to path compression.