# LeetCode Daily – 2025-11-28

## 🧠 Problem #2872 – **Maximum Number of K-Divisible Components**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-k-divisible-components)

---

### 📝 Problem Description

There is an undirected tree with n nodes labeled from 0 to n - 1. You are given the integer n and a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

You are also given a 0-indexed integer array values of length n, where values[i] is the value associated with the ith node, and an integer k.

A valid split of the tree is obtained by removing any set of edges, possibly empty, from the tree such that the resulting components all have values that are divisible by k, where the value of a connected component is the sum of the values of its nodes.

Return the maximum number of components in any valid split.

 
Example 1:


Input: n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6
Output: 2
Explanation: We remove the edge connecting node 1 with 2. The resulting split is valid because:
- The value of the component containing nodes 1 and 3 is values[1] + values[3] = 12.
- The value of the component containing nodes 0, 2, and 4 is values[0] + values[2] + values[4] = 6.
It can be shown that no other valid split has more than 2 connected components.

Example 2:


Input: n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3
Output: 3
Explanation: We remove the edge connecting node 0 with 2, and the edge connecting node 0 with 1. The resulting split is valid because:
- The value of the component containing node 0 is values[0] = 3.
- The value of the component containing nodes 2, 5, and 6 is values[2] + values[5] + values[6] = 9.
- The value of the component containing nodes 1, 3, and 4 is values[1] + values[3] + values[4] = 6.
It can be shown that no other valid split has more than 3 connected components.


 
Constraints:


	1 <= n <= 3 * 104
	edges.length == n - 1
	edges[i].length == 2
	0 <= ai, bi < n
	values.length == n
	0 <= values[i] <= 109
	1 <= k <= 109
	Sum of values is divisible by k.
	The input is generated such that edges represents a valid tree.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the problem "Maximum Number of K-Divisible Components" together. 

### Problem Explanation

You are given an array `A` and an integer `K`. The goal is to find the maximum number of connected components in the array where each component can be chosen such that the sum of its elements is divisible by `K`. 

A connected component can be defined as a contiguous subarray. 

### Approach

1. **Graph Representation**: We can think of the problem in terms of graph connectivity where the nodes are the elements of the array. Two nodes (array elements) are connected if they are adjacent.

2. **Dynamic Programming & Backtracking**: We can utilize a backtracking approach that explores all possible combinations of subarrays. However, this would be inefficient for large arrays.

3. **Optimization with DFS/BFS**: Instead of checking every combination, we can iterate through the array and use Depth First Search (DFS) or Breadth First Search (BFS) to explore components that sum up to a multiple of `K`.

### Implementation

Here is a C++ implementation which follows the above-mentioned approach:

```cpp
#include <vector>
#include <numeric>

class Solution {
public:
    int maxKDivisibleComponents(std::vector<int>& A, int K) {
        int n = A.size();
        std::vector<bool> visited(n, false);
        int maxComponents = 0;

        for (int i = 0; i < n; ++i) {
            if (!visited[i]) {
                int sum = 0;
                int count = 0;
                // Start DFS or BFS from the current unvisited node
                int j = i;
                while (j < n && !visited[j]) {
                    visited[j] = true;
                    sum += A[j];
                    j++;
                }
                // Now check if the sum is divisible by K
                if (sum % K == 0) {
                    count++;
                }
                maxComponents += count; // Only count if it is divisible
            }
        }
        return maxComponents;
    }
};
```

### Explanation of the Code
1. **Definitions**: We define a function `maxKDivisibleComponents` that takes an array `A` and an integer `K`.

2. **Initialization**: 
   - We determine the size of the array `n`.
   - We create a `visited` vector to keep track of which elements we have incorporated into a component.
   - We initialize `maxComponents` to count the valid components.

3. **Iterate through the Array**: 
   - We loop over each element in the array.
   - For each unvisited element, we initiate a count and a sum. 

4. **Finding Components**: 
   - We utilize a while loop to move through subarrays until we reach a visited element. 
   - We keep updating the sum with the current element and mark elements as visited.

5. **Divisibility Check**: 
   - After we find the complete sum for the contiguous section, we check if it is divisible by `K`.
   - If true, we increment our count of components.

6. **Return Result**: Finally, we return the total count of valid components.

### Complexity Analysis
- **Time Complexity**: O(n) since we visit each element once.
- **Space Complexity**: O(n) for the visited array.

This approach ensures we find the maximum number of connected components that meet the divisibility requirement efficiently.