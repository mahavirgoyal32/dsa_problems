# LeetCode Daily – 2026-06-12

## 🧠 Problem #3559 – **Number of Ways to Assign Edge Weights II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-ii)

---

### 📝 Problem Description

There is an undirected tree with n nodes labeled from 1 to n, rooted at node 1. The tree is represented by a 2D integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi.

Initially, all edges have a weight of 0. You must assign each edge a weight of either 1 or 2.

The cost of a path between any two nodes u and v is the total weight of all edges in the path connecting them.

You are given a 2D integer array queries. For each queries[i] = [ui, vi], determine the number of ways to assign weights to edges in the path such that the cost of the path between ui and vi is odd.

Return an array answer, where answer[i] is the number of valid assignments for queries[i].

Since the answer may be large, apply modulo 109 + 7 to each answer[i].

Note: For each query, disregard all edges not in the path between node ui and vi.

 
Example 1:




Input: edges = [[1,2]], queries = [[1,1],[1,2]]

Output: [0,1]

Explanation:


	Query [1,1]: The path from Node 1 to itself consists of no edges, so the cost is 0. Thus, the number of valid assignments is 0.
	Query [1,2]: The path from Node 1 to Node 2 consists of one edge (1 &rarr; 2). Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.



Example 2:




Input: edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]

Output: [2,1,4]

Explanation:


	Query [1,4]: The path from Node 1 to Node 4 consists of two edges (1 &rarr; 3 and 3 &rarr; 4). Assigning weights (1,2) or (2,1) results in an odd cost. Thus, the number of valid assignments is 2.
	Query [3,4]: The path from Node 3 to Node 4 consists of one edge (3 &rarr; 4). Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.
	Query [2,5]: The path from Node 2 to Node 5 consists of three edges (2 &rarr; 1, 1 &rarr; 3, and 3 &rarr; 5). Assigning (1,2,2), (2,1,2), (2,2,1), or (1,1,1) makes the cost odd. Thus, the number of valid assignments is 4.



 
Constraints:


	2 <= n <= 105
	edges.length == n - 1
	edges[i] == [ui, vi]
	1 <= queries.length <= 105
	queries[i] == [ui, vi]
	1 <= ui, vi <= n
	edges represents a valid tree.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of counting the number of ways to assign edge weights to a tree such that the total weight of the tree is divisible by a given integer `k`, we can break the problem down into a few steps.

### Problem Breakdown
1. **Understanding the Tree**: A tree with `n` nodes will have exactly `n-1` edges. Each edge can take weights from `1` to `k` (inclusive), and we need to ensure that the sum of all the edge weights is divisible by `k`.
  
2. **Modulo Constraint**: The main challenge is to count combinations of edge weights that lead to paths summing up to multiples of `k`.

3. **Dynamic Programming Approach**: The solution employs dynamic programming (DP) to count the ways to assign the edge weights. We maintain a count of how many ways we can obtain each possible remainder when the edge weights sum modulo `k`.

### Steps to Solve
- We'll perform a depth-first search (DFS) to traverse the tree.
- At each node, we will calculate how adding an edge weight from `1` to `k` affects the sum and consequently the remainders.
- We'll use a DP array where `dp[r]` holds the number of ways to achieve a sum that gives a remainder `r` when divided by `k`.

### C++ Implementation

Here’s a simple implementation using the aforementioned concepts:

```cpp
#include <vector>
#include <iostream>
#include <unordered_set>
using namespace std;

class Solution {
public:
    int countWays(vector<vector<int>>& edges, int k) {
        int n = edges.size() + 1;

        // Build the adjacency list
        vector<vector<int>> tree(n);
        for (const auto& e : edges) {
            tree[e[0]].push_back(e[1]);
            tree[e[1]].push_back(e[0]);
        }
        
        // Dynamic programming table for counting ways to assign edges
        vector<int> dp(k, 0); 
        dp[0] = 1; // There's one way to have a sum of 0 (by having no edges.)

        // Helper function to perform DFS and update count
        function<void(int, int, vector<bool>&)> dfs = [&](int node, int parent, vector<bool>& visited) {
            visited[node] = true;
            vector<int> temp_dp(k, 0); 
            temp_dp[0] = 1; // Base case

            for (int neighbor : tree[node]) {
                if (neighbor == parent) continue; // Avoid going back to parent

                dfs(neighbor, node, visited); // DFS into the child

                vector<int> new_dp(k, 0);
                for (int weight = 1; weight <= k; ++weight) {
                    for (int r = 0; r < k; ++r) {
                        new_dp[(r + weight) % k] += temp_dp[r] * dp[r]; // Combine counts
                    }
                }
                swap(temp_dp, new_dp);
            }

            // After DFS, update the main dp array to include this node's contributions
            for (int r = 0; r < k; ++r) {
                dp[r] += temp_dp[r];
            }
        };
        
        vector<bool> visited(n, false);
        
        // Start DFS from the root node (0 assumed as root)
        dfs(0, -1, visited);
        
        // The resulting count of ways that sum to be divisible by k
        return dp[0];
    }
};

// Example usage
int main() {
    Solution sol;
    vector<vector<int>> edges = { {0, 1}, {1, 2}, {1, 3}, {0, 4} };
    int k = 3;
    cout << sol.countWays(edges, k); // Example output
    return 0;
}
```

### Explanation of the Code
1. **Input and Tree Construction**: We read edges and construct an adjacency list representation of the tree.
2. **Dynamic Programming Table**: We initialize our DP `dp` array to keep track of how many ways we can get each possible sum modulo `k`.
3. **DFS Function**: The `dfs` function traverses the tree and computes how many ways we can achieve different sums using the edges connected to the current node. For each edge weight from `1` to `k`, we combine the existing counts from child nodes.
4. **Final Count**: After completing the DFS traversal, `dp[0]` gives us the number of ways to assign edge weights such that the total weight is divisible by `k`.

This approach ensures we efficiently explore combinations of edge weights while counting valid configurations that meet the problem's constraints.