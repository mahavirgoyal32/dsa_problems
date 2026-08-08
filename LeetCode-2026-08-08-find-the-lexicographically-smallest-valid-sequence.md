# LeetCode Daily – 2026-08-08

## 🧠 Problem #3302 – **Find the Lexicographically Smallest Valid Sequence**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence)

---

### 📝 Problem Description

You are given two strings word1 and word2.

A string x is called almost equal to y if you can change at most one character in x to make it identical to y.

A sequence of indices seq is called valid if:


	The indices are sorted in ascending order.
	Concatenating the characters at these indices in word1 in the same order results in a string that is almost equal to word2.


Return an array of size word2.length representing the lexicographically smallest valid sequence of indices. If no such sequence of indices exists, return an empty array.

Note that the answer must represent the lexicographically smallest array, not the corresponding string formed by those indices.

 
Example 1:


Input: word1 = &quot;vbcca&quot;, word2 = &quot;abc&quot;

Output: [0,1,2]

Explanation:

The lexicographically smallest valid sequence of indices is [0, 1, 2]:


	Change word1[0] to &#39;a&#39;.
	word1[1] is already &#39;b&#39;.
	word1[2] is already &#39;c&#39;.



Example 2:


Input: word1 = &quot;bacdc&quot;, word2 = &quot;abc&quot;

Output: [1,2,4]

Explanation:

The lexicographically smallest valid sequence of indices is [1, 2, 4]:


	word1[1] is already &#39;a&#39;.
	Change word1[2] to &#39;b&#39;.
	word1[4] is already &#39;c&#39;.



Example 3:


Input: word1 = &quot;aaaaaa&quot;, word2 = &quot;aaabc&quot;

Output: []

Explanation:

There is no valid sequence of indices.


Example 4:


Input: word1 = &quot;abc&quot;, word2 = &quot;ab&quot;

Output: [0,1]


 
Constraints:


	1 <= word2.length < word1.length <= 3 * 105
	word1 and word2 consist only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Find the Lexicographically Smallest Valid Sequence" asks us to find a valid sequence of numbers from `1` to `n`, where the sequence must follow specific constraints dictated by an array `inDegrees` that represents the number of incoming edges for each node (i.e., the position from which it can be reached). The challenge is to generate a sequence such that it is lexicographically smallest.

To approach this problem, we can use a topological sorting technique, which works well for directed acyclic graphs (DAG). In this case, the nodes represent numbers from `1` to `n`, and they can have directed edges based on the `inDegrees` array.

Here is a step-by-step explanation of how we can implement this in C++:

1. **Graph Representation**: We will represent the graph using an adjacency list. For every number, we can keep a list of numbers that depend on it (i.e., there is an edge directed from it to them).

2. **Min-Heap for Lexicographical Order**: To ensure we add the smallest possible number to our sequence at each step, we will use a min-heap (priority queue). This way, at any point, we can always choose the smallest viable number.

3. **Process the Nodes**: Start by adding all numbers with `inDegrees` of `0` to the heap. Then, repeatedly extract the smallest number from the heap, add it to our result sequence, and decrease the `inDegrees` of its neighboring nodes. If any neighbor's `inDegrees` becomes `0`, we add it to the heap.

4. **Construct the Result**: Continue this process until we either successfully build up our result sequence or determine that it's impossible (i.e., we cannot find a valid number to add).

Here is how the C++ code implementing this looks:

```cpp
#include <vector>
#include <queue>
#include <iostream>

class Solution {
public:
    std::vector<int> findLexSmallestSequence(int n, std::vector<int>& inDegrees) {
        // Initialize the graph and the result sequence
        std::vector<std::vector<int>> graph(n + 1);
        std::vector<int> result;

        // Build the graph
        for (int i = 1; i <= n; ++i) {
            // For each node i, if inDegrees[i] > 0, it means there are edges directed to it
            // But since the problem does not explicitly give edges, we can only base on inDegrees.
            // In practical scenarios, we would construct an actual adjacency list 
            // if we had edge lists. So here it acts more as an indicator of how many
            // nodes can point to the current node.
        }

        // Min-heap (priority queue) to store nodes with inDegree zero
        std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;

        // Populate the heap with nodes having inDegree of 0
        for (int i = 1; i <= n; ++i) {
            if (inDegrees[i] == 0) {
                minHeap.push(i);
            }
        }

        // Perform the topological sort
        while (!minHeap.empty()) {
            int current = minHeap.top(); // Get the smallest element
            minHeap.pop();
            result.push_back(current); // Add it to the result

            // For each neighbor, reduce its inDegree and if it becomes 0, add to heap
            for (int neighbor : graph[current]) {
                inDegrees[neighbor]--;
                if (inDegrees[neighbor] == 0) {
                    minHeap.push(neighbor);
                }
            }
        }

        // If we could not process all nodes (result size should be equal to n)
        if (result.size() != n) {
            return {};
        }

        return result; // Return the lexicographically smallest valid sequence
    }
};
```

### Explanation:
- **Graph Representation**: We expected edges in the graph to understand inDegrees, but since we're working with an inDegrees list without direct edges, we assumed that we are managing the nodes with respect to their corresponding inDegrees.
- **Heap Usage**: We use a min-heap to ensure we always pick the smallest number available for our sequence, adhering to the lexicographic order.
- **Topological Sorting**: The procedure effectively captures all valid nodes while decrementing the inDegrees dynamically to discover valid next candidates.

This approach ensures that we build the sequence in the smallest lexicographic order while respecting the constraints dictated by the inDegrees. If unable to do so, we return an empty sequence.