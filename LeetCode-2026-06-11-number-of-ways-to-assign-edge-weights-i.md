# LeetCode Daily – 2026-06-11

## 🧠 Problem #3558 – **Number of Ways to Assign Edge Weights I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-i)

---

### 📝 Problem Description

There is an undirected tree with n nodes labeled from 1 to n, rooted at node 1. The tree is represented by a 2D integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi.

Initially, all edges have a weight of 0. You must assign each edge a weight of either 1 or 2.

The cost of a path between any two nodes u and v is the total weight of all edges in the path connecting them.

Select any one node x at the maximum depth. Return the number of ways to assign edge weights in the path from node 1 to x such that its total cost is odd.

Since the answer may be large, return it modulo 109 + 7.

Note: Ignore all edges not in the path from node 1 to x.

 
Example 1:




Input: edges = [[1,2]]

Output: 1

Explanation:


	The path from Node 1 to Node 2 consists of one edge (1 &rarr; 2).
	Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.



Example 2:




Input: edges = [[1,2],[1,3],[3,4],[3,5]]

Output: 2

Explanation:


	The maximum depth is 2, with nodes 4 and 5 at the same depth. Either node can be selected for processing.
	For example, the path from Node 1 to Node 4 consists of two edges (1 &rarr; 3 and 3 &rarr; 4).
	Assigning weights (1,2) or (2,1) results in an odd cost. Thus, the number of valid assignments is 2.



 
Constraints:


	2 <= n <= 105
	edges.length == n - 1
	edges[i] == [ui, vi]
	1 <= ui, vi <= n
	edges represents a valid tree.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Number of Ways to Assign Edge Weights I", we need to determine how many distinct ways we can assign weights to edges in a complete graph with `n` vertices such that the weight of each edge is either `0` or `1`, and the sum of all edge weights equals `target`.

### Problem Breakdown

1. **Graph Representation**: We have a complete graph with `n` vertices. In a complete graph with `n` vertices, the number of edges is given by \( \text{edges} = \frac{n(n - 1)}{2} \).

2. **Weight Definition**: Each edge can either have a weight of `0` or `1`. Hence, our task boils down to selecting a certain number of edges to be `1`, while the remainder will be `0`.

3. **Combinatorial Counting**: If we denote `k` as the number of edges assigned a weight of `1`, then the weights must satisfy:
   \[
   k = \text{target}
   \]
   for a valid assignment. Therefore, the main challenge is to count how many ways we can choose `k` edges out of the total number of edges.

4. **Using Combinations**: The number of ways to choose `k` edges from a total of `n` edges is given by the binomial coefficient:
   \[
   C(m, k) = \frac{m!}{k!(m-k)!}
   \]
   where `m` is the total number of edges.

5. **Edge Cases**:
   - If `target > m`, the answer is `0` since we cannot assign more edges with weight `1` than we have.
   - If `target < 0`, similarly, the answer is `0`.

### Implementation

Now, let's implement the solution in C++. We'll utilize functions for calculating factorial values dynamically and handle combinations.

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int numberOfWays(int n, int target) {
        long long m = (long long)n * (n - 1) / 2; // total number of edges
        if (target > m || target < 0) return 0;   // out of bounds conditions
        
        return binomialCoefficient(m, target);
    }
    
private:
    long long binomialCoefficient(long long n, long long k) {
        if (k > n) return 0;
        if (k == 0 || k == n) return 1;
        k = min(k, n - k); // take advantage of symmetry property C(n, k) == C(n, n-k)
        
        long long res = 1; // Initialize result
        
        // Calculate the value of C(n, k)
        for (long long i = 0; i < k; i++) {
            res = res * (n - i) / (i + 1); // Iteratively compute the binomial coefficient
        }
        
        return res;
    }
};

int main() {
    Solution solution;
    int n = 5;  // number of vertices
    int target = 3; // target sum of weights
    cout << "The number of ways to assign edge weights is: " << solution.numberOfWays(n, target) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Function Definition**: The function `numberOfWays` computes the number of valid weight assignments. It starts by calculating the total number of edges \( m \) and checks if the `target` is valid.

2. **Binomial Coefficient Calculation**: The `binomialCoefficient` function computes the number of ways to choose `k` items from `n`. This is done iteratively to avoid overflow from large factorials.

3. **Main Function**: The `main` function acts as a simple test harness, allowing us to pass in values for `n` and `target` and print the results.

### Conclusion

This approach uses combinatorial mathematics to solve the problem efficiently. By determining the required number of ways through the binomial coefficient, the solution remains performant and concise.