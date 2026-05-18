# LeetCode Daily – 2026-05-18

## 🧠 Problem #1345 – **Jump Game IV**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game-iv)

---

### 📝 Problem Description

Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:


	i + 1 where: i + 1 < arr.length.
	i - 1 where: i - 1 >= 0.
	j where: arr[i] == arr[j] and i != j.


Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

 
Example 1:


Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.


Example 2:


Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.


Example 3:


Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.


 
Constraints:


	1 <= arr.length <= 5 * 104
	-108 <= arr[i] <= 108

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's tackle the "Jump Game IV" problem from LeetCode. 

### Problem Statement:
You are given an array `arr` of integers where each element represents your maximum jump length at that position. You can jump to any index `i` from index `j` if `|i - j| <= arr[j]`. You want to find the minimum number of jumps needed to reach the last index of the array, starting from the first index. If you cannot reach the last index, return `-1`.

### Explanation & Approach:
This problem can be solved using a breadth-first search (BFS) approach. Here's a step-by-step breakdown of how to approach the problem:

1. **Breadth-First Search Initialization**:
   - Start from index `0` (the first index) and use a queue to manage the indices we can jump to.
   - Use a set or a vector to track the indices we have already visited to prevent cycles and unnecessary computations.

2. **Explore the Possible Jumps**:
   - For each position, compute the possible indices that can be reached based on the `arr` values.
   - Use a loop to check all positions you can jump to from the current index.
   - If you can reach the end (the last index), record how many jumps it took to get there.

3. **Queue Management**:
   - Push the reachable indices into the queue and mark them as visited.
   - Keep track of the number of jumps required.

4. **Terminate on Reaching the End**:
   - If during any iteration you can reach the last index, return the number of jumps.

5. **Edge Cases**:
   - Check if the array has only one element; in that case, no jumps are needed.

### C++ Implementation:
Here's how you could implement the above logic in C++:

```cpp
#include <vector>
#include <queue>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int minJumps(vector<int>& arr) {
        int n = arr.size();
        if (n <= 1) return 0; // If we already start at the end

        // Map to store indices of each value for faster access
        unordered_map<int, vector<int>> adj;
        for (int i = 0; i < n; ++i) {
            adj[arr[i]].push_back(i);
        }

        queue<int> q;
        q.push(0); // Start from the first index
        vector<bool> visited(n, false);
        visited[0] = true;

        int jumps = 0;

        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                int idx = q.front();
                q.pop();

                // Check if we reached the last index
                if (idx == n - 1) return jumps;

                // Get the possible indices we can jump to
                // Explore all indices that have the same value
                vector<int>& neighbors = adj[arr[idx]];
                for (int j : neighbors) {
                    if (!visited[j]) {
                        visited[j] = true;
                        q.push(j);
                    }
                }
                // Clear neighbours to prevent future unnecessary checks
                neighbors.clear();

                // Check adjacent indices (j + 1 and j - 1)
                if (idx + 1 < n && !visited[idx + 1]) {
                    visited[idx + 1] = true;
                    q.push(idx + 1);
                }
                if (idx - 1 >= 0 && !visited[idx - 1]) {
                    visited[idx - 1] = true;
                    q.push(idx - 1);
                }
            }
            jumps++; // Increment the number of jumps after exploring this level
        }

        return -1; // If we can never reach the last index
    }
};
```

### Explanation of the Code:
- We create a mapping (`adj`) that associates each number in `arr` with its indices for fast access.
- We use a queue (`q`) for the BFS traversal of the indices and a `visited` vector to ensure we don't process an index more than once.
- For each level (each jump), we count how many indices we can reach. If we can reach the last index at any point, we return the current jump count.
- We clear the indices from `adj` that we've processed to prevent unnecessary checks in future iterations.

This BFS approach has a time complexity of O(N) in the average case, given proper handling of indices, thus should efficiently solve the problem within the constraints provided.