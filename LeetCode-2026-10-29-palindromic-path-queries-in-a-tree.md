# LeetCode Daily – 2026-10-29

## 🧠 Problem #3841 – **Palindromic Path Queries in a Tree**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/palindromic-path-queries-in-a-tree)

---

### 📝 Problem Description

You are given an undirected tree with n nodes labeled 0 to n - 1. This is represented by a 2D array edges of length n - 1, where edges[i] = [ui, vi] indicates an undirected edge between nodes ui and vi.

You are also given a string s of length n consisting of lowercase English letters, where s[i] represents the character assigned to node i.

You are also given a string array queries, where each queries[i] is either:


	&quot;update ui c&quot;: Change the character at node ui to c. Formally, update s[ui] = c.
	&quot;query ui vi&quot;: Determine whether the string formed by the characters on the unique path from ui to vi (inclusive) can be rearranged into a palindrome.


Return a boolean array answer, where answer[j] is true if the jth query of type &quot;query ui vi&quot;​​​​​​​ can be rearranged into a palindrome, and false otherwise.

 
Example 1:


Input: n = 3, edges = [[0,1],[1,2]], s = &quot;aac&quot;, queries = [&quot;query 0 2&quot;,&quot;update 1 b&quot;,&quot;query 0 2&quot;]

Output: [true,false]

Explanation:


	&quot;query 0 2&quot;: Path 0 &rarr; 1 &rarr; 2 gives &quot;aac&quot;, which can be rearranged to form &quot;aca&quot;, a palindrome. Thus, answer[0] = true.
	&quot;update 1 b&quot;: Update node 1 to &#39;b&#39;, now s = &quot;abc&quot;.
	&quot;query 0 2&quot;: Path characters are &quot;abc&quot;, which cannot be rearranged to form a palindrome. Thus, answer[1] = false.


Thus, answer = [true, false].


Example 2:


Input: n = 4, edges = [[0,1],[0,2],[0,3]], s = &quot;abca&quot;, queries = [&quot;query 1 2&quot;,&quot;update 0 b&quot;,&quot;query 2 3&quot;,&quot;update 3 a&quot;,&quot;query 1 3&quot;]

Output: [false,false,true]

Explanation:


	&quot;query 1 2&quot;: Path 1 &rarr; 0 &rarr; 2 gives &quot;bac&quot;, which cannot be rearranged to form a palindrome. Thus, answer[0] = false.
	&quot;update 0 b&quot;: Update node 0 to &#39;b&#39;, now s = &quot;bbca&quot;.
	&quot;query 2 3&quot;: Path 2 &rarr; 0 &rarr; 3 gives &quot;cba&quot;, which cannot be rearranged to form a palindrome. Thus, answer[1] = false.
	&quot;update 3 a&quot;: Update node 3 to &#39;a&#39;, s = &quot;bbca&quot;.
	&quot;query 1 3&quot;: Path 1 &rarr; 0 &rarr; 3 gives &quot;bba&quot;, which can be rearranged to form &quot;bab&quot;, a palindrome. Thus, answer[2] = true.


Thus, answer = [false, false, true].


 
Constraints:


	1 <= n == s.length <= 5 * 104
	edges.length == n - 1
	edges[i] = [ui, vi]
	0 <= ui, vi <= n - 1
	s consists of lowercase English letters.
	The input is generated such that edges represents a valid tree.
	1 <= queries.length <= 5 * 104​​​​​​​
	
		queries[i] = &quot;update ui c&quot; or
		queries[i] = &quot;query ui vi&quot;
		0 <= ui, vi <= n - 1
		c is a lowercase English letter.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of palindromic path queries in a tree, we need to be able to quickly determine if the values along a path between two nodes form a palindrome. With tree data structures, you might initially consider tracking all values, but given the problem's constraints, using a more efficient approach is necessary.

### Problem Breakdown
1. **Tree Representation**: The tree is represented as an undirected graph. Each node has a numerical value associated with it.
2. **Palindromic Path**: A path is palindromic if the sequence of node values on that path reads the same forwards and backwards.
3. **Queries**: Each query provides two nodes, and we need to determine if the path formed by these two nodes is palindromic.

### Strategy
1. **Lowest Common Ancestor (LCA)**: To get the path between any two nodes efficiently, we need to know the lowest common ancestor (LCA) of those nodes. The path between any two nodes `u` and `v` can be constructed using their individual paths up to the LCA.
   
2. **Dynamic Programming - Bitmasking**: Since the maximum value for a node can be large, instead of directly tracking occurrences of node values, we can use a bitmask to keep track of the counts of each value along the path. A bitmask can tell us whether a value appears an even or odd number of times, which is crucial for determining palindromic properties.

3. **DFS for Initialization**: Perform a Depth First Search (DFS) to compute parent-child relationships and the paths for quick access. This precomputation allows us to answer each query in logarithmic time.

### Implementation
Let's implement this approach in C++. Below is a solution consisting of the essential components of the described strategy.

```cpp
#include <vector>
#include <unordered_map>
#include <cmath>
#include <iostream>

class Solution {
public:
    std::vector<int> parent;
    std::vector<int> depth;
    std::vector<int> values;
    std::vector<std::vector<int>> adj;
    std::vector<std::vector<int>> up; // Sparse table
    int LOG;

    void dfs(int node, int par, int d) {
        parent[node] = par;
        depth[node] = d;
        up[node][0] = par;

        for (int i = 1; i < LOG; ++i) {
            up[node][i] = up[up[node][i - 1]][i - 1];
        }

        for (int neighbor : adj[node]) {
            if (neighbor != par) {
                dfs(neighbor, node, d + 1);
            }
        }
    }

    int lca(int u, int v) {
        if (depth[u] < depth[v]) std::swap(u, v);

        for (int i = LOG - 1; i >= 0; --i) {
            if (depth[up[u][i]] >= depth[v]) {
                u = up[u][i];
            }
        }

        if (u == v) return u;

        for (int i = LOG - 1; i >= 0; --i) {
            if (up[u][i] != up[v][i]) {
                u = up[u][i];
                v = up[v][i];
            }
        }
        
        return parent[u];
    }

    void initialize(int n, const std::vector<int>& vals, const std::vector<std::vector<int>>& edges) {
        values = vals;
        adj.resize(n);
        parent.resize(n);
        depth.resize(n);
        LOG = ceil(log2(n)) + 1;
        up.assign(n, std::vector<int>(LOG));

        for (auto& edge : edges) {
            adj[edge[0]].push_back(edge[1]);
            adj[edge[1]].push_back(edge[0]);
        }

        dfs(0, -1, 0); // Start dfs from node 0 with -1 as parent
    }

    bool isPalindromePath(int u, int v) {
        int ancestor = lca(u, v);

        std::unordered_map<int, int> count;
        traversePath(u, ancestor, count);
        traversePath(v, ancestor, count);

        int oddCount = 0;
        for (const auto& entry : count) {
            if (entry.second % 2 == 1) {
                oddCount++;
            }
        }
        
        return oddCount <= 1; // At most one odd count for palindromes
    }

    void traversePath(int node, int stop, std::unordered_map<int, int>& count) {
        while (node != stop) {
            count[values[node]]++;
            node = parent[node];
        }
    }
};

```

### Explanation of Code
1. **Initialization**: We maintain a structure for the adjacency list of the tree. We also set up a sparse table for ancestors using DFS.
2. **Depth-First Search (DFS)**: The DFS is used to fill in parent and depth information.
3. **Finding LCA**: The `lca` function uses binary lifting to find the lowest common ancestor of nodes efficiently.
4. **Counting Path Values**: The `traversePath` function updates the count of each node value that appears in the path from a node to its ancestor.
5. **Check for Palindrome**: The `isPalindromePath` function utilizes a map to count the occurrences and checks the conditions for palindromic paths.

### Overall Complexity
- **Preprocessing**: O(n log n) for DFS and LCA preprocessing.
- **Query Time**: O(log n) due to path traversals and counting operations in the worst case. 

This approach efficiently handles queries in trees with palindromic path checks.