# LeetCode Daily – 2026-01-09

## 🧠 Problem #865 – **Smallest Subtree with all the Deepest Nodes**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes)

---

### 📝 Problem Description

Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

 
Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.


Example 2:


Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree.


Example 3:


Input: root = [0,1,3,null,2]
Output: [2]
Explanation: The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.


 
Constraints:


	The number of nodes in the tree will be in the range [1, 500].
	0 <= Node.val <= 500
	The values of the nodes in the tree are unique.


 
Note: This question is the same as 1123: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Smallest Subtree with all the Deepest Nodes" is about identifying the smallest subtree that contains all the deepest nodes from a binary tree. The deepest nodes are those that are farthest from the root node.

## Problem Explanation

Given a binary tree, you need to find the smallest subtree that contains all the deepest nodes. The deepest nodes might not necessarily be leaves; they could be any node as long as they have the maximum depth in the tree.

## Approach

Here’s a structured approach to solve the problem:

1. **Depth Calculation**: First, we need to determine the maximum depth of the tree. We can do this by performing a depth-first search (DFS).

2. **Find All Deepest Nodes**: While performing DFS, we can also track all the nodes at the maximum depth.

3. **Identifying the Subtree**: The smallest subtree containing all the deepest nodes will always have to include their lowest common ancestor (LCA).

4. **DFS for LCA**: To find the LCA of all the deepest nodes, we can make use of another DFS traversal. If we reach a node where both of its subtrees contain deepest nodes, then that node is the LCA.

The steps can be summarized as follows:

- Perform a DFS to calculate the maximum depth.
- Perform a second DFS to find and return the LCA of all deepest nodes.

## C++ Implementation

Here is the C++ code to solve the problem:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    // Function to find the deepest node and its depth
    int maxDepth(TreeNode* root) {
        if (!root) {
            return 0;
        }
        return 1 + std::max(maxDepth(root->left), maxDepth(root->right));
    }

    // Function to find the LCA of deepest nodes
    TreeNode* subtreeWithAllDeepest(TreeNode* root) {
        int max_depth = maxDepth(root);
        return findLCA(root, 1, max_depth);
    }

private:
    // Function to find the LCA while tracking depth
    TreeNode* findLCA(TreeNode* node, int current_depth, int max_depth) {
        if (!node) {
            return nullptr;
        }

        // If we reach a leaf node, return it if it is at max depth
        if (current_depth == max_depth) {
            return node;
        }
        
        TreeNode* leftLCA = findLCA(node->left, current_depth + 1, max_depth);
        TreeNode* rightLCA = findLCA(node->right, current_depth + 1, max_depth);

        // If both left and right LCA are not null, this node is the LCA
        if (leftLCA && rightLCA) {
            return node;
        }
        // Otherwise, return the non-null child
        return leftLCA ? leftLCA : rightLCA;
    }
};
```

### Explanation of the Code

1. **Binary Tree Node Definition**: A structure `TreeNode` is defined to represent each node of the binary tree.

2. **maxDepth Function**: This is a helper function that calculates the maximum depth of the tree using a recursive DFS.

3. **subtreeWithAllDeepest Function**: This function first computes the maximum depth and then starts the LCA search.

4. **findLCA Function**: This function performs the LCA search. 
   - It traverses the tree and checks if the current node is null or at the maximum depth.
   - It recursively searches the left and right subtrees for the deepest nodes.
   - If both left and right calls return valid nodes, it implies that the current node is the LCA.
   - If one side returns a valid node, it returns that; otherwise, it returns `nullptr`.

### Complexity Analysis

- **Time Complexity**: O(N), where N is the number of nodes in the tree, because we visit each node once.
- **Space Complexity**: O(H), where H is the height of the tree due to recursion stack space.

This approach efficiently finds the smallest subtree containing all the deepest nodes in a binary tree.