# LeetCode Daily – 2026-08-29

## 🧠 Problem #2948 – **Make Lexicographically Smallest Array by Swapping Elements**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements)

---

### 📝 Problem Description

You are given a 0-indexed array of positive integers nums and a positive integer limit.

In one operation, you can choose any two indices i and j and swap nums[i] and nums[j] if |nums[i] - nums[j]| <= limit.

Return the lexicographically smallest array that can be obtained by performing the operation any number of times.

An array a is lexicographically smaller than an array b if in the first position where a and b differ, array a has an element that is less than the corresponding element in b. For example, the array [2,10,3] is lexicographically smaller than the array [10,2,3] because they differ at index 0 and 2 < 10.

 
Example 1:


Input: nums = [1,5,3,9,8], limit = 2
Output: [1,3,5,8,9]
Explanation: Apply the operation 2 times:
- Swap nums[1] with nums[2]. The array becomes [1,3,5,9,8]
- Swap nums[3] with nums[4]. The array becomes [1,3,5,8,9]
We cannot obtain a lexicographically smaller array by applying any more operations.
Note that it may be possible to get the same result by doing different operations.


Example 2:


Input: nums = [1,7,6,18,2,1], limit = 3
Output: [1,6,7,18,1,2]
Explanation: Apply the operation 3 times:
- Swap nums[1] with nums[2]. The array becomes [1,6,7,18,2,1]
- Swap nums[0] with nums[4]. The array becomes [2,6,7,18,1,1]
- Swap nums[0] with nums[5]. The array becomes [1,6,7,18,1,2]
We cannot obtain a lexicographically smaller array by applying any more operations.


Example 3:


Input: nums = [1,7,28,19,10], limit = 3
Output: [1,7,28,19,10]
Explanation: [1,7,28,19,10] is the lexicographically smallest array we can obtain because we cannot apply the operation on any two indices.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	1 <= limit <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Make Lexicographically Smallest Array by Swapping Elements" is about rearranging the elements of an array by swapping elements in such a way that we achieve the lexicographically smallest array possible. Let's break down the approach to solve this problem and provide a code implementation in C++.

### Problem Explanation:
You are given an array of integers, and you can perform swaps between any two elements. The goal is to produce an array that is as small as possible in lexicographic order.

### Key Insights:
1. **Lexicographic Order**: An array is said to be smaller lexicographically if, for the first position where two arrays differ, the element in the first array is less than that in the second array.
2. **Sorting**: To find the lexicographically smallest configuration of the array, it is useful to look at the sorted version of the array.
3. **Graph Representation**: You can think of the indices of the array as nodes in a graph where an edge exists between two nodes if you can swap the elements at these indices. This allows us to group elements that can be swapped freely.
4. **Connected Components**: By identifying connected components in this graph, you can determine which elements can be rearranged among themselves to form the smallest possible arrangement for that component.

### Approach:
1. **Use a Union-Find (Disjoint Set Union) structure** to model the swaps allowed between indices.
2. **Identify Components**: For each pair of indices indicating possible swaps, union those indices.
3. **Sort Each Component**: For each connected component, gather the elements, sort them, and place them back in the original array in the lexicographically smallest order.

### C++ Implementation:
Below is a C++ implementation of the above logic using the Union-Find structure to manage components and sorting them to generate the lexicographically smallest array.

```cpp
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <numeric>

class UnionFind {
public:
    UnionFind(int size) {
        parent.resize(size);
        std::iota(parent.begin(), parent.end(), 0);
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    void unionNodes(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX != rootY) {
            parent[rootX] = rootY; // Union them
        }
    }

private:
    std::vector<int> parent;
};

std::vector<int> smallestArrayWithSwaps(std::vector<int>& arr, std::vector<std::vector<int>>& swaps) {
    int n = arr.size();
    UnionFind uf(n);
    
    // Union operations based on the swap pairs
    for (const auto& swap : swaps) {
        uf.unionNodes(swap[0], swap[1]);
    }
    
    // Map to gather indices by their root
    std::unordered_map<int, std::vector<int>> components;
    for (int i = 0; i < n; ++i) {
        int root = uf.find(i);
        components[root].push_back(i);
    }

    std::vector<int> result(arr);
    
    // Sort each component and place the smallest values
    for (const auto& [root, indices] : components) {
        std::vector<int> values;
        for (int index : indices) {
            values.push_back(arr[index]);
        }
        std::sort(values.begin(), values.end());
        
        std::sort(indices.begin(), indices.end());
        
        for (int i = 0; i < indices.size(); ++i) {
            result[indices[i]] = values[i];
        }
    }
    
    return result;
}
```

### Explanation of the Code:
1. **Union-Find Class**: This class manages and performs union and find operations. It helps to efficiently group indices that can be swapped.
2. **smallestArrayWithSwaps Function**:
   - It starts by reading the size of the array and initializing the Union-Find structure.
   - For each swap operation provided in the input, it unites the two indices.
   - It then gathers all indices that can be swapped into grouped components.
   - For each component found, it gathers the corresponding values from the original array, sorts them, and places them back into their original indices in sorted order.
3. **Final Result**: A new array is constructed that represents the smallest possible configuration according to the allowed swaps.

This approach is efficient and utilizes sorting and union-find, making it suitable for the problem's constraints.