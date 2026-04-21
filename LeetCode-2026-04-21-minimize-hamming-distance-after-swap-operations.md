# LeetCode Daily – 2026-04-21

## 🧠 Problem #1722 – **Minimize Hamming Distance After Swap Operations**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations)

---

### 📝 Problem Description

You are given two integer arrays, source and target, both of length n. You are also given an array allowedSwaps where each allowedSwaps[i] = [ai, bi] indicates that you are allowed to swap the elements at index ai and index bi (0-indexed) of array source. Note that you can swap elements at a specific pair of indices multiple times and in any order.

The Hamming distance of two arrays of the same length, source and target, is the number of positions where the elements are different. Formally, it is the number of indices i for 0 <= i <= n-1 where source[i] != target[i] (0-indexed).

Return the minimum Hamming distance of source and target after performing any amount of swap operations on array source.

 
Example 1:


Input: source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]
Output: 1
Explanation: source can be transformed the following way:
- Swap indices 0 and 1: source = [2,1,3,4]
- Swap indices 2 and 3: source = [2,1,4,3]
The Hamming distance of source and target is 1 as they differ in 1 position: index 3.


Example 2:


Input: source = [1,2,3,4], target = [1,3,2,4], allowedSwaps = []
Output: 2
Explanation: There are no allowed swaps.
The Hamming distance of source and target is 2 as they differ in 2 positions: index 1 and index 2.


Example 3:


Input: source = [5,1,2,4,3], target = [1,5,4,2,3], allowedSwaps = [[0,4],[4,2],[1,3],[1,4]]
Output: 0


 
Constraints:


	n == source.length == target.length
	1 <= n <= 105
	1 <= source[i], target[i] <= 105
	0 <= allowedSwaps.length <= 105
	allowedSwaps[i].length == 2
	0 <= ai, bi <= n - 1
	ai != bi

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of minimizing the Hamming distance after swap operations, we need to understand a few critical points:

### Problem Breakdown
1. **Definitions**:
   - **Hamming Distance**: The number of positions where corresponding elements are different between two arrays.
   - We have two arrays, `source` and `target`, and a list of swap operations that allow us to swap elements in `source`.

2. **Objective**:
   - We need to minimize the Hamming distance between the `source` and `target` arrays after performing the allowed swaps.

3. **Union-Find (Disjoint Set Union)**:
   - To manage the connected components formed by the allowed swap operations, we can use the Union-Find data structure. Each connected component can be thought of as a group of elements in `source` that can be rearranged among themselves.

### Steps to Solve:
1. **Initialize Union-Find Structure**: Create a data structure to group the indices of `source` that can be swapped.
2. **Union Operations**: For each swap operation, merge the two indices that can be swapped.
3. **Grouping Indices**: After processing all swap operations, identify connected components and group the indices of `source`.
4. **Calculate Hamming Distance**:
   - For each connected component, create a frequency map of the values in `source` (within that component) and the values in `target` (for the corresponding indices).
   - The minimum cost to match elements can be derived from this frequency map, allowing us to compute how many elements can be matched perfectly.

### Implementation:

Here’s the C++ implementation for the solution:

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <numeric>

using namespace std;

class UnionFind {
public:
    UnionFind(int size) : parent(size) {
        iota(parent.begin(), parent.end(), 0);
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);  // path compression
        }
        return parent[x];
    }
    
    void unionSet(int x, int y) {
        parent[find(x)] = find(y);
    }
    
private:
    vector<int> parent;
};

int minimumHammingDistance(vector<int>& source, vector<int>& target, vector<vector<int>>& swaps) {
    int n = source.size();
    
    // Step 1: Create Union-Find for managing connected components
    UnionFind uf(n);
    
    // Step 2: Apply union operations based on swap pairs
    for (const auto& swap : swaps) {
        uf.unionSet(swap[0], swap[1]);
    }
    
    // Step 3: Group indices by their root
    unordered_map<int, vector<int>> groups;
    for (int i = 0; i < n; ++i) {
        groups[uf.find(i)].push_back(i);
    }
    
    // Step 4: Calculate minimum Hamming distance
    int hammingDistance = 0;
    for (const auto& group : groups) {
        const auto& indices = group.second;  // get group indices
        
        // Count occurrences in source and target for this component
        unordered_map<int, int> countSource, countTarget;
        
        for (int index : indices) {
            countSource[source[index]]++;
            countTarget[target[index]]++;
        }
        
        // Step 5: Calculate matches
        int matches = 0;
        for (const auto& [val, count] : countSource) {
            if (countTarget.count(val)) {
                matches += min(count, countTarget[val]);
            }
        }
        
        // Each unmatched entry contributes to the Hamming distance
        hammingDistance += indices.size() - matches;
    }
    
    return hammingDistance;
}
```

### Explanation of Code:
1. **Union-Find Class**: This class handles the union and find operations. It initializes the parent of each node to itself and supports path compression in the find operation.
2. **Main Function**:
   - We create the Union-Find structure and process each swap operation to unite the necessary indices.
   - We group indices based on the root found using Union-Find.
   - For each group, we count the occurrence of values in both `source` and `target` and calculate how many can be matched.
   - Finally, we compute the remaining unmatched elements to determine the Hamming distance.

This approach effectively minimizes the Hamming distance while considering the possible swaps between the elements in `source`.