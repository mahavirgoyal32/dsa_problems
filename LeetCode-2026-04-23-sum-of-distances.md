# LeetCode Daily – 2026-04-23

## 🧠 Problem #2615 – **Sum of Distances**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sum-of-distances)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. If there is no such j, set arr[i] to be 0.

Return the array arr.

 
Example 1:


Input: nums = [1,3,1,1,2]
Output: [5,0,3,4,0]
Explanation: 
When i = 0, nums[0] == nums[2] and nums[0] == nums[3]. Therefore, arr[0] = |0 - 2| + |0 - 3| = 5. 
When i = 1, arr[1] = 0 because there is no other index with value 3.
When i = 2, nums[2] == nums[0] and nums[2] == nums[3]. Therefore, arr[2] = |2 - 0| + |2 - 3| = 3. 
When i = 3, nums[3] == nums[0] and nums[3] == nums[2]. Therefore, arr[3] = |3 - 0| + |3 - 2| = 4. 
When i = 4, arr[4] = 0 because there is no other index with value 2. 



Example 2:


Input: nums = [0,5,3]
Output: [0,0,0]
Explanation: Since each element in nums is distinct, arr[i] = 0 for all i.


 
Constraints:


	1 <= nums.length <= 105
	0 <= nums[i] <= 109


 
Note: This question is the same as  2121: Intervals Between Identical Elements.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Sum of Distances" from LeetCode asks us to consider a tree (a connected graph with no cycles) with `n` nodes, where each node is uniquely identified by an integer from `0` to `n-1`. The task is to calculate for every node `u`, the sum of distances from node `u` to all other nodes `v` in the tree.

Let's break down the problem step by step.

### Problem Breakdown

1. **Understanding the tree**: A tree with `n` nodes has `n-1` edges, so you can represent it with an adjacency list.

2. **Distance Calculation**: The distance from node `u` to all other nodes `v` needs to be calculated. To calculate the distances effectively, we can leverage the properties of trees and a DFS (Depth First Search) traversal.

3. **Efficiency**: A naive solution would involve computing distances from each node to every other node, leading to O(n^2) complexity, which is inefficient for larger values of `n`. Instead, we'll use properties derived from DFS to compute the results in O(n) time.

### Solution Approach

1. **DFS Traversal**: Use DFS to calculate:
   - The size of each subtree (`subtree_size[u]` for each node `u`).
   - The initial distance sum from a root node (selected arbitrarily).

2. **Re-rooting Trick**: After calculating the initial distance sum for the root, we can efficiently calculate the distance sums for all other nodes. The sum of distances for a child node can be derived from its parent node’s distance sum by adjusting for the size of the child's subtree.

   If `dist_sum[parent]` is already calculated, then:
   - For a child node `child`:
     - `dist_sum[child] = dist_sum[parent] + (n - 2 * subtree_size[child])`.
     - Why this works: moving from parent to child decreases the distances for the nodes in the child's subtree while increasing it for the others.

### C++ Implementation

Here is the C++ code implementing the above logic:

```cpp
#include <vector>

class Solution {
public:
    std::vector<int> sumOfDistancesInTree(int n, std::vector<std::vector<int>>& edges) {
        // Create adjacency list for the tree
        std::vector<std::vector<int>> graph(n);
        for (const auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        std::vector<int> subtree_size(n, 1);
        std::vector<int> dist_sum(n, 0);
        // Compute the distance sum from the root (0)
        dfs(0, -1, graph, dist_sum, subtree_size);
        
        // Re-calculate distance sums for all nodes using the parent-child relationship
        std::vector<int> result(n);
        result[0] = dist_sum[0];
        reroot(0, -1, graph, result, subtree_size, n);
        
        return result;
    }
    
private:
    void dfs(int node, int parent, std::vector<std::vector<int>>& graph,
             std::vector<int>& dist_sum, std::vector<int>& subtree_size) {
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue; // Prevent going back to the parent
            dfs(neighbor, node, graph, dist_sum, subtree_size);
            subtree_size[node] += subtree_size[neighbor];
            dist_sum[node] += dist_sum[neighbor] + subtree_size[neighbor];
        }
    }
    
    void reroot(int node, int parent, std::vector<std::vector<int>>& graph,
                std::vector<int>& result, const std::vector<int>& subtree_size, int n) {
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue; // Prevent going back to the parent
            
            // Prepare to reroot
            result[neighbor] = result[node] + (n - 2 * subtree_size[neighbor]);
            reroot(neighbor, node, graph, result, subtree_size, n);
        }
    }
};
```

### Explanation of Code

1. **Initialization**:
   - Construct the graph using an adjacency list.
   - Use two vectors: `subtree_size` to store the size of each subtree and `dist_sum` for the initial distance sum from the root.

2. **DFS function**:
   - Traverse the tree to compute `dist_sum` for the root and count `subtree_size`.

3. **Reroot function**:
   - Adjust distance sums while changing the root from parent to child using the formula derived earlier.

### Output
The function returns a vector containing the sum of distances for each node in the tree.

This approach ensures that we handle the problem efficiently in O(n) time complexity, making it suitable even for the upper limits of common constraints.