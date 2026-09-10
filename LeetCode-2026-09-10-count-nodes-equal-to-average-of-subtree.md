# LeetCode Daily – 2026-09-10

## 🧠 Problem #2265 – **Count Nodes Equal to Average of Subtree**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree)

---

### 📝 Problem Description

Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

Note:


	The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
	A subtree of root is a tree consisting of root and all of its descendants.


 
Example 1:


Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.


Example 2:


Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.


 
Constraints:


	The number of nodes in the tree is in the range [1, 1000].
	0 <= Node.val <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem "Count Nodes Equal to Average of Subtree". The goal is to count the number of nodes in a binary tree where the value of the node is equal to the average of the values of all nodes in its subtree (including itself).

### Problem Breakdown

1. **Understanding the Average**: For any node, you need to calculate the average of all values in its subtree. The average is calculated as:
   \[
   \text{average} = \frac{\text{sum of values in subtree}}{\text{number of nodes in subtree}}
   \]

2. **Traversal Method**: Since we need to evaluate subtree properties (sum and count), a Depth First Search (DFS) approach is appropriate. We can use recursive functions to traverse the tree.

3. **Base Cases**: If a node is null (i.e., we have reached a leaf's child), we return zero for both the sum and count.

### C++ Implementation

We'll create a `TreeNode` class, a function to calculate the required values, and a main counting function. Here's the implementation:

```cpp
#include <iostream>

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    // Helper function to perform DFS and calculate sum and count
    std::pair<int, int> dfs(TreeNode* node, int& count) {
        if (!node) return {0, 0};  // base case, return sum = 0, count = 0
        
        auto left = dfs(node->left, count);   // (sum, count) for left subtree
        auto right = dfs(node->right, count); // (sum, count) for right subtree
        
        // Calculate current node's subtree sum and count
        int subtreeSum = node->val + left.first + right.first;  // sum = node's value + left + right
        int subtreeCount = 1 + left.second + right.second;      // count = 1 (current) + left + right
        
        // Check if the node's value equals the average of its subtree
        if (subtreeCount > 0 && node->val == subtreeSum / subtreeCount) {
            count++;  // Increment count if condition is met
        }
        
        return {subtreeSum, subtreeCount};  // return sum and count to parent
    }
    
    // Main function to count nodes equal to average of subtree
    int averageOfSubtree(TreeNode* root) {
        int count = 0;
        dfs(root, count);  // Start DFS traversal from root
        return count;      // Return the count of nodes that match the condition
    }
};
```

### Explanation of the Code

1. **TreeNode Structure**: This structure defines the node of a binary tree, containing a value and pointers to the left and right children.

2. **dfs Function**:
   - The `dfs` function is recursive and returns a `pair<int, int>` where:
     - The first element is the sum of all node values in the subtree.
     - The second element is the count of nodes in the subtree.
   - It calls itself recursively for the left and right children.
   - After calculating the sum and count for children, it computes the total for the current node and checks if its value equals the calculated average.

3. **averageOfSubtree Function**:
   - Initializes the count of matching nodes to zero and starts the DFS traversal from the root node.
   - Finally, it returns the count.

### Complexity Analysis

- **Time Complexity**: O(N), where N is the number of nodes in the tree, since we visit each node once.
- **Space Complexity**: O(H), where H is the height of the tree due to the recursion stack.

This implementation efficiently counts the nodes in the binary tree that are equal to the average of their respective subtrees.