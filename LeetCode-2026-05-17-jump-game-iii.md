# LeetCode Daily – 2026-05-17

## 🧠 Problem #1306 – **Jump Game III**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game-iii)

---

### 📝 Problem Description

Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

Notice that you can not jump outside of the array at any time.

 
Example 1:


Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 


Example 2:


Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3


Example 3:


Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.


 
Constraints:


	1 <= arr.length <= 5 * 104
	0 <= arr[i] < arr.length
	0 <= start < arr.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The "Jump Game III" problem on LeetCode requires us to determine if we can reach an index of 0 starting from a given index `start` in a list of integers representing jump lengths. The goal is to find whether we can jump to index `0` from `start` by using the values in the array to move left or right (but we can only jump in the direction given by the index value).

Let’s break down the problem and then provide a C++ solution.

### Problem Explanation

We are given an array `arr` and an integer `start`. Each element of the array represents the maximum jump length from that position. You can jump either to the left or the right, but as soon as you jump to a position, you can't revisit it. The task is to determine if we can reach index `0` starting from index `start`.

### Approach

1. **Use BFS or DFS**: Since this is a form of graph traversal where each index can lead to two other indices (either left or right), we can either apply Breadth-First Search (BFS) or Depth-First Search (DFS) to explore paths from the `start` index to see if we can reach index `0`.

2. **Visited Array**: To avoid infinite loops and revisiting nodes, we can maintain a `visited` array. When we jump to a certain index, we mark it as visited.

3. **Stopping Condition**: We stop the search when we reach index `0` or when there are no more indices to explore.

### C++ Solution

Here is a C++ implementation using Depth-First Search (DFS):

```cpp
#include <vector>
#include <stack>

class Solution {
public:
    bool canReach(std::vector<int>& arr, int start) {
        int n = arr.size();
        std::vector<bool> visited(n, false);
        
        // Use a stack for DFS
        std::stack<int> stack;
        stack.push(start);
        
        while (!stack.empty()) {
            int index = stack.top();
            stack.pop();
            
            // If we've reached index 0, return true
            if (index == 0) {
                return true;
            }
            
            // If this index has been visited already, skip it
            if (visited[index]) {
                continue;
            }
            
            // Mark the current index as visited
            visited[index] = true;

            // Determine the next positions to jump to
            int jumpLength = arr[index];
            int leftIndex = index - jumpLength;
            int rightIndex = index + jumpLength;

            // If the left index is within bounds and not visited, push to the stack
            if (leftIndex >= 0 && !visited[leftIndex]) {
                stack.push(leftIndex);
            }
            // If the right index is within bounds and not visited, push to the stack
            if (rightIndex < n && !visited[rightIndex]) {
                stack.push(rightIndex);
            }
        }
        
        // If we exhaust all options and never reach index 0, return false
        return false;
    }
};
```

### Explanation of the Code

1. **Initialization**: We initialize a `visited` vector to track which indices have been processed to avoid cycles.

2. **DFS with Stack**: We use a stack to implement the DFS. Starting from the `start` index, we repeatedly explore reachable indices until we either find index `0` or exhaust all possibilities.

3. **Boundary Checks**: For each index we visit, we check if jumping left or right is within array bounds and whether that index has already been visited.

4. **Reaching index 0**: If at any point we pop an index that equals `0`, we return `true`. If we finish processing without reaching `0`, we return `false`.

### Complexity
- **Time Complexity**: O(N), where N is the number of elements in the array since each index is visited at most once.
- **Space Complexity**: O(N) due to the visited array and the stack used for DFS.

This code should successfully solve the "Jump Game III" problem on LeetCode!