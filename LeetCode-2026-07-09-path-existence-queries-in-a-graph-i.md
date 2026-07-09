# LeetCode Daily – 2026-07-09

## 🧠 Problem #3532 – **Path Existence Queries in a Graph I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/path-existence-queries-in-a-graph-i)

---

### 📝 Problem Description

You are given an integer n representing the number of nodes in a graph, labeled from 0 to n - 1.

You are also given an integer array nums of length n sorted in non-decreasing order, and an integer maxDiff.

An undirected edge exists between nodes i and j if the absolute difference between nums[i] and nums[j] is at most maxDiff (i.e., |nums[i] - nums[j]| <= maxDiff).

You are also given a 2D integer array queries. For each queries[i] = [ui, vi], determine whether there exists a path between nodes ui and vi.

Return a boolean array answer, where answer[i] is true if there exists a path between ui and vi in the ith query and false otherwise.

 
Example 1:


Input: n = 2, nums = [1,3], maxDiff = 1, queries = [[0,0],[0,1]]

Output: [true,false]

Explanation:


	Query [0,0]: Node 0 has a trivial path to itself.
	Query [0,1]: There is no edge between Node 0 and Node 1 because |nums[0] - nums[1]| = |1 - 3| = 2, which is greater than maxDiff.
	Thus, the final answer after processing all the queries is [true, false].



Example 2:


Input: n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]

Output: [false,false,true,true]

Explanation:

The resulting graph is:




	Query [0,1]: There is no edge between Node 0 and Node 1 because |nums[0] - nums[1]| = |2 - 5| = 3, which is greater than maxDiff.
	Query [0,2]: There is no edge between Node 0 and Node 2 because |nums[0] - nums[2]| = |2 - 6| = 4, which is greater than maxDiff.
	Query [1,3]: There is a path between Node 1 and Node 3 through Node 2 since |nums[1] - nums[2]| = |5 - 6| = 1 and |nums[2] - nums[3]| = |6 - 8| = 2, both of which are within maxDiff.
	Query [2,3]: There is an edge between Node 2 and Node 3 because |nums[2] - nums[3]| = |6 - 8| = 2, which is equal to maxDiff.
	Thus, the final answer after processing all the queries is [false, false, true, true].



 
Constraints:


	1 <= n == nums.length <= 105
	0 <= nums[i] <= 105
	nums is sorted in non-decreasing order.
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

Sure! Let's solve the "Path Existence Queries in a Graph I" problem on LeetCode.

### Problem Explanation:
You are given an undirected graph with `n` nodes numbered from `0` to `n-1`, and a list of edges. Your task is to answer multiple queries about whether there's a path between two nodes in the graph.

### Input:
- An integer `n` (number of nodes).
- A list of edges where each edge connects two nodes.
- A list of queries, where each query consists of two nodes asking if a path exists between them.

### Output:
For each query, return `true` if there exists a path between the two nodes, otherwise return `false`.

### Approach:
1. **Graph Representation**: We will represent the graph using an adjacency list.
2. **Connected Components**: To efficiently answer the path queries, we can use the Union-Find (Disjoint Set Union, DSU) data structure to find connected components of the graph. Nodes that belong to the same connected component can reach each other.
3. **Initialization**: You'll initialize the Union-Find structure for `n` nodes and then union the nodes connected by each edge.
4. **Query Processing**: For each query, check if the two nodes belong to the same component using the `find` method of the Union-Find.

### C++ Implementation:
Here's the C++ code that implements the above approach.

```cpp
#include <iostream>
#include <vector>

using namespace std;

// Union-Find (Disjoint Set Union) data structure
class UnionFind {
public:
    UnionFind(int size) {
        parent.resize(size);
        rank.resize(size, 1);
        for (int i = 0; i < size; ++i) 
            parent[i] = i; // Each node is its own parent initially
    }

    // Find method with path compression
    int find(int node) {
        if (parent[node] != node) {
            parent[node] = find(parent[node]);
        }
        return parent[node];
    }

    // Union method by rank
    void unionSets(int node1, int node2) {
        int root1 = find(node1);
        int root2 = find(node2);
        if (root1 != root2) {
            // Union by rank
            if (rank[root1] > rank[root2]) {
                parent[root2] = root1;
            } else if (rank[root1] < rank[root2]) {
                parent[root1] = root2;
            } else {
                parent[root2] = root1;
                rank[root1]++;
            }
        }
    }

private:
    vector<int> parent;
    vector<int> rank;
};

class Solution {
public:
    vector<bool> checkPath(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
        UnionFind uf(n);
        
        // Union all edges
        for (const auto& edge : edges) {
            uf.unionSets(edge[0], edge[1]);
        }
        
        vector<bool> results;
        // Answer each query
        for (const auto& query : queries) {
            results.push_back(uf.find(query[0]) == uf.find(query[1]));
        }
        
        return results;
    }
};
```

### Explanation of the Code:
1. **UnionFind Class**: 
   - The class maintains two vectors, `parent` for storing the parent of each node and `rank` for optimizing the union operation.
   - The `find` method uses path compression to speed up future queries.
   - The `unionSets` method connects two nodes if they are not already connected.

2. **Solution Class**:
   - The `checkPath` method initializes the `UnionFind` and processes edges to construct the connected components.
   - Finally, it evaluates each query by checking if both nodes belong to the same component.

### Complexity:
- **Time Complexity**: Union-Find operations (find and union) are almost constant time due to path compression and union by rank. Thus, for `m` edges and `q` queries, the complexity is `O((m + q) * α(n))` where α is the inverse Ackermann function.
- **Space Complexity**: O(n) for the parent and rank arrays.

This solution effectively handles the problem of finding path existence in a graph with efficient performance!