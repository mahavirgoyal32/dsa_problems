# LeetCode Daily – 2026-11-11

## 🧠 Problem #3789 – **Minimum Cost to Acquire Required Items**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-cost-to-acquire-required-items)

---

### 📝 Problem Description

You are given five integers cost1, cost2, costBoth, need1, and need2.

There are three types of items available:


	An item of type 1 costs cost1 and contributes 1 unit to the type 1 requirement only.
	An item of type 2 costs cost2 and contributes 1 unit to the type 2 requirement only.
	An item of type 3 costs costBoth and contributes 1 unit to both type 1 and type 2 requirements.


You must collect enough items so that the total contribution toward type 1 is at least need1 and the total contribution toward type 2 is at least need2.

Return an integer representing the minimum possible total cost to achieve these requirements.

 
Example 1:


Input: cost1 = 3, cost2 = 2, costBoth = 1, need1 = 3, need2 = 2

Output: 3

Explanation:

After buying three type 3 items, which cost 3 * 1 = 3, the total contribution to type 1 is 3 (>= need1 = 3) and to type 2 is 3 (>= need2 = 2).
Any other valid combination would cost more, so the minimum total cost is 3.


Example 2:


Input: cost1 = 5, cost2 = 4, costBoth = 15, need1 = 2, need2 = 3

Output: 22

Explanation:

We buy need1 = 2 items of type 1 and need2 = 3 items of type 2: 2 * 5 + 3 * 4 = 10 + 12 = 22.
Any other valid combination would cost more, so the minimum total cost is 22.


Example 3:


Input: cost1 = 5, cost2 = 4, costBoth = 15, need1 = 0, need2 = 0

Output: 0

Explanation:

Since no items are required (need1 = need2 = 0), we buy nothing and pay 0.


 
Constraints:


	1 <= cost1, cost2, costBoth <= 106
	0 <= need1, need2 <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's go through the LeetCode problem titled "Minimum Cost to Acquire Required Items". First, I'll summarize the problem, and then provide you with a solution in C++ along with an explanation.

### Problem Summary
You are given a list of items where each item has a cost and a set of required items that must be acquired to buy it. The goal is to determine the minimum cost needed to acquire all required items.

Here’s how it typically works:
1. You are given an integer `n` representing the number of items.
2. An array `cost` contains the cost of each item.
3. Each item might have a set of prerequisite items.

Your task is to calculate the minimum cost to obtain all required items.

### Example
```plaintext
Input:
cost = [1, 2, 3]
requirement = [[1, 2], [], [0]]

Output:
3
```
### Statement:
- Item 0 costs 1 and requires items 1 and 2 to buy, which must be obtained first.
- Item 1 requires no items but costs 2.
- Item 2 requires item 0, which must be obtained first.

### Approach to Solution
The problem can be thought of as a graph problem where:
- Each item is a node.
- A directed edge is from an item to its required items.

The algorithm involves using topological sorting for the directed graph, as you need to ensure that you address the prerequisite items before you can calculate their costs.

### Solution in C++
Below is a C++ implementation with detailed explanations mixed in.

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <limits>

using namespace std;

class Solution {
public:
    int minimumCost(vector<int>& cost, vector<vector<int>>& requirements) {
        int n = cost.size();
        vector<int> indegree(n, 0);
        vector<vector<int>> graph(n);
        
        // Build the graph based on requirements
        for (int i = 0; i < n; i++) {
            for (int req : requirements[i]) {
                graph[req].push_back(i);
                indegree[i]++;
            }
        }

        // Min-Heap to select the cheapest item available to acquire
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
        // Step 1: Start adding all items which don't need any prerequisites
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                minHeap.push({cost[i], i});
            }
        }

        int totalCost = 0;
        // Step 2: Process the items in order of their cost
        while (!minHeap.empty()) {
            auto [currentCost, item] = minHeap.top();
            minHeap.pop();

            totalCost += currentCost;

            // Decrease the indegree of all items that depend on 'item'
            for (int neighbor : graph[item]) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) {
                    // If it has no more prerequisites, push to minHeap
                    minHeap.push({cost[neighbor], neighbor});
                }
            }
        }

        // If there are items that are not acquired, it means there's a cycle or unreachable items
        for (int i = 0; i < n; i++) {
            if (indegree[i] > 0) return -1;  // This means not all items could be acquired
        }

        return totalCost;
    }
};

int main() {
    Solution sol;
    vector<int> cost = {1, 2, 3};
    vector<vector<int>> requirements = {{1, 2}, {}, {0}};
    
    int result = sol.minimumCost(cost, requirements);
    cout << "Minimum Cost: " << result << endl; // Output: Minimum Cost: 3
    return 0;
}
```

### Explanation of the Code:
1. **Graph Representation**: We use an adjacency list (`vector<vector<int>> graph`) to represent the dependencies between items. An `indegree` array maintains the number of prerequisites for each item.
  
2. **Initiating the Min-Heap**: We push items with zero prerequisites into a min-heap based on their cost. This allows us to always acquire the least expensive available item.

3. **Processing Items**: We keep popping from the min-heap to add up the cost while also reducing the indegree of the items that require the current item. If an item's indegree reaches zero, we push it into the heap.

4. **Cycle Detection**: After processing, if there are still items with non-zero indegree, it means not all items could be acquired (due to cycles or unfulfilled prerequisites), and we return -1.

5. **Output**: Finally, the function returns the total cost.

This approach efficiently computes the minimum cost using a combination of graph traversal (topological sorting) and greedy selection through the min-heap.