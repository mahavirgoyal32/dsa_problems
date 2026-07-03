# LeetCode Daily – 2026-07-03

## 🧠 Problem #3620 – **Network Recovery Pathways**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/network-recovery-pathways)

---

### 📝 Problem Description

You are given a directed acyclic graph of n nodes numbered from 0 to n &minus; 1. This is represented by a 2D array edges of length m, where edges[i] = [ui, vi, costi] indicates a one‑way communication from node ui to node vi with a recovery cost of costi.

Some nodes may be offline. You are given a boolean array online where online[i] = true means node i is online. Nodes 0 and n &minus; 1 are always online.

A path from 0 to n &minus; 1 is valid if:


	All intermediate nodes on the path are online.
	The total recovery cost of all edges on the path does not exceed k.


For each valid path, define its score as the minimum edge‑cost along that path.

Return the maximum path score (i.e., the largest minimum-edge cost) among all valid paths. If no valid path exists, return -1.

 
Example 1:


Input: edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10

Output: 3

Explanation:




	
	The graph has two possible routes from node 0 to node 3:

	
		
		Path 0 &rarr; 1 &rarr; 3

		
			
			Total cost = 5 + 10 = 15, which exceeds k (15 > 10), so this path is invalid.
			
		
		
		
		Path 0 &rarr; 2 &rarr; 3

		
			
			Total cost = 3 + 4 = 7 <= k, so this path is valid.
			
			
			The minimum edge‐cost along this path is min(3, 4) = 3.
			
		
		
	
	
	
	There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.
	



Example 2:


Input: edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12

Output: 6

Explanation:




	
	Node 3 is offline, so any path passing through 3 is invalid.
	
	
	Consider the remaining routes from 0 to 4:

	
		
		Path 0 &rarr; 1 &rarr; 4

		
			
			Total cost = 7 + 5 = 12 <= k, so this path is valid.
			
			
			The minimum edge‐cost along this path is min(7, 5) = 5.
			
		
		
		
		Path 0 &rarr; 2 &rarr; 3 &rarr; 4

		
			
			Node 3 is offline, so this path is invalid regardless of cost.
			
		
		
		
		Path 0 &rarr; 2 &rarr; 4

		
			
			Total cost = 6 + 6 = 12 <= k, so this path is valid.
			
			
			The minimum edge‐cost along this path is min(6, 6) = 6.
			
		
		
	
	
	
	Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.
	



 
Constraints:


	n == online.length
	2 <= n <= 5 * 104
	0 <= m == edges.length <= min(105, n * (n - 1) / 2)
	edges[i] = [ui, vi, costi]
	0 <= ui, vi < n
	ui != vi
	0 <= costi <= 109
	0 <= k <= 5 * 1013
	online[i] is either true or false, and both online[0] and online[n &minus; 1] are true.
	The given graph is a directed acyclic graph.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the problem titled "Network Recovery Pathways" from LeetCode. Although I can't access external links directly, I can provide you with a detailed explanation and a C++ solution based on a common understanding of the problem titled as well as based on standard graph-related problems that typically involve finding paths or recoveries in a network.

### Problem Overview

Assuming the problem involves a scenario where you're given a directed graph representing a network, and your goal is to determine the minimum number of edges that need to be recovered in order to maintain connectivity or some path properties.

### Steps for Solution

Here's a typical approach to devise a solution for such a problem:

1. **Graph Representation:** Use an adjacency list to represent the graph.
2. **DFS/BFS Traversal:** Use Depth-First Search (DFS) or Breadth-First Search (BFS) to explore the graph.
3. **Minimum Edge Count:** Keep track of the edges that lead to connectivity issues or those that need to be recovered in the graph.
4. **Backtracking (if necessary):** Employ backtracking to explore alternative paths, ensuring we consider all potential paths for recovery.

### C++ Code Implementation

Below is a skeleton C++ code that generally demonstrates how you might approach such a problem. Since the precise details of the problem can vary, you may need to modify the logic based on the specifics of the network recovery scenarios described in the problem.

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <queue>

using namespace std;

class Solution {
public:
    // Function to find the minimum number of edges to be recovered
    int findRecoveryPathways(int n, vector<vector<int>>& connections) {
        // Step 1: Create the graph as an adjacency list
        vector<vector<int>> graph(n);
        for (const auto& conn : connections) {
            graph[conn[0]].push_back(conn[1]); // directed edge from conn[0] to conn[1]
        }

        // Necessary data structures for BFS / DFS
        vector<bool> visited(n, false);
        unordered_set<int> toRecover;

        // Step 2: Perform BFS from an arbitrary start node
        bfs(0, graph, visited, toRecover);

        // The result is the size of the edges we need to recover
        return toRecover.size();
    }

private:
    void bfs(int startNode, vector<vector<int>>& graph, vector<bool>& visited, unordered_set<int>& toRecover) {
        queue<int> q;
        q.push(startNode);
        visited[startNode] = true;

        while (!q.empty()) {
            int current = q.front();
            q.pop();

            for (int neighbor : graph[current]) {
                // If the neighbor has not been visited, recover the edge
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                } else {
                    // Otherwise, this edge is part of the recovery path
                    toRecover.insert(current); // It's important to note where the recovery is needed
                }
            }
        }
    }
};

int main() {
    Solution sol;
    int n = 6; // Number of nodes
    vector<vector<int>> connections = {
        {0, 1},
        {1, 2},
        {2, 0},
        {1, 3},
        {3, 4},
        {4, 1},
        {5, 4}
    };
    
    int result = sol.findRecoveryPathways(n, connections);
    cout << "Minimum edges to recover: " << result << endl;

    return 0;
}
```

### Explanation of Code

- **Graph Representation:** The connections are stored in an adjacency list.
- **BFS Implementation:** The BFS traverses the graph, marking visited nodes and tracking which edges are needed to maintain connectivity.
- **Edge Recovery:** This example contains logic to identify edges that are part of recovery situations based on the traversal.

### Performance Considerations

- **Time Complexity**: O(V + E), where V is the number of vertices and E is the number of edges in the graph - this is typical for BFS or DFS traversals.
- **Space Complexity**: O(V) for storing the visited nodes.

### Final Note

You might need to adapt the solution based on the exact requirements of the "Network Recovery Pathways" problem since the details presented here assume a general understanding of network connectivity and recovery scenarios.

If you want more tailored help or further clarifications on the problem, please provide specific details or constraints from the LeetCode problem description!