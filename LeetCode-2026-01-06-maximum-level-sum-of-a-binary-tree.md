# LeetCode Daily – 2026-01-06

## 🧠 Problem #1161 – **Maximum Level Sum of a Binary Tree**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree)

---

### 📝 Problem Description

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 
Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.


Example 2:


Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2


 
Constraints:


	The number of nodes in the tree is in the range [1, 104].
	-105 <= Node.val <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "Maximum Level Sum of a Binary Tree". This problem requires us to find the maximum sum of values at any level of a binary tree.

## Problem Statement
You are given a binary tree. Each node contains an integer value. Your task is to find the level with the maximum sum of values and return that sum.

### Approach
1. **Level Order Traversal**: We can do a level order traversal (BFS) of the binary tree. During this traversal, we can calculate the sum of the values at each level.
2. **Use a Queue**: We'll use a queue to help us process each level of the tree, adding the values of the nodes at that level to a sum, and then comparing it to the maximum sum we've seen so far.
3. **Iterate through each level**: For the current level, we'll determine how many nodes are at that level (the size of the queue), then process all nodes at that level, adding their values and queuing their children for the next level.

### Implementation
Here's the implementation in C++:

```cpp
#include <iostream>
#include <queue>
#include <algorithm> // for std::max
using namespace std;

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    int maxLevelSum(TreeNode* root) {
        if (!root) return 0; // If the tree is empty, return 0.
        
        queue<TreeNode*> q;
        q.push(root);
        int maxSum = INT_MIN; // Initialize to the smallest integer
        int currentLevelSum = 0;

        while (!q.empty()) {
            int levelSize = q.size(); // Number of nodes at the current level
            currentLevelSum = 0; // Reset current level sum
            
            // Traverse all nodes at the current level
            for (int i = 0; i < levelSize; ++i) {
                TreeNode* currentNode = q.front();
                q.pop();
                
                currentLevelSum += currentNode->val; // Add the node's value
                
                // Add child nodes to the queue for the next level
                if (currentNode->left) {
                    q.push(currentNode->left);
                }
                if (currentNode->right) {
                    q.push(currentNode->right);
                }
            }
            
            // Update the maximum level sum
            maxSum = max(maxSum, currentLevelSum);
        }
        
        return maxSum;
    }
};
```

### Explanation of the Code
1. **Structure Definition**: We start by defining the `TreeNode` struct to represent each node in the binary tree.
2. **Queue Initialization**: We initialize a queue that will help us traverse the tree level by level.
3. **Main Loop**:
   - We iterate as long as there are nodes in the queue.
   - For each level, we determine how many nodes there are (using `q.size()`).
   - We then reset `currentLevelSum` for this level and process each node:
     - Pop the front node from the queue, add its value to `currentLevelSum`.
     - Enqueue its children to the queue so that they can be processed in the next iteration.
4. **Update Maximum**: After processing all nodes on a level, we check if `currentLevelSum` is greater than our recorded `maxSum` and update it if necessary.
5. **Return Result**: Finally, we return `maxSum`, which is the maximum sum of values at any level of the binary tree.

### Complexity Analysis
- **Time Complexity**: O(N), where N is the number of nodes in the tree, since we visit each node exactly once.
- **Space Complexity**: O(W), where W is the maximum width of the tree. In the worst case (a complete tree), this can be O(N) as well.

This approach is efficient and straightforward for solving the problem of finding the maximum level sum in a binary tree.