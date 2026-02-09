# LeetCode Daily – 2026-02-09

## 🧠 Problem #1382 – **Balance a Binary Search Tree**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/balance-a-binary-search-tree)

---

### 📝 Problem Description

Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

 
Example 1:


Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.


Example 2:


Input: root = [2,1,3]
Output: [2,1,3]


 
Constraints:


	The number of nodes in the tree is in the range [1, 104].
	1 <= Node.val <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of balancing a binary search tree (BST), we can follow these steps:

1. **In-order Traversal**: First, perform an in-order traversal of the given BST to retrieve its elements in a sorted array. This is possible because in a BST, the in-order traversal produces a sorted list of the node values.

2. **Build a Balanced BST**: Using the sorted array, we can build a balanced BST. This can be done by recursively selecting the middle element of the current array (which becomes the root of the subtree) and then applying the same process to the left and right halves of the array to build the left and right subtrees.

### C++ Implementation

Here is a complete C++ solution for the problem:

```cpp
#include <iostream>
#include <vector>

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    // Function to perform in-order traversal and fill the sorted nodes vector.
    void inorderTraversal(TreeNode* root, std::vector<int>& nodes) {
        if (!root) return;
        inorderTraversal(root->left, nodes);
        nodes.push_back(root->val);
        inorderTraversal(root->right, nodes);
    }
    
    // Function to construct a balanced BST from sorted nodes array.
    TreeNode* sortedArrayToBST(std::vector<int>& nodes, int left, int right) {
        if (left > right) return nullptr;
        
        // Choose the middle element as the root.
        int mid = left + (right - left) / 2; // To avoid potential overflow
        TreeNode* root = new TreeNode(nodes[mid]);
        
        // Recursively construct the left and right subtrees.
        root->left = sortedArrayToBST(nodes, left, mid - 1);
        root->right = sortedArrayToBST(nodes, mid + 1, right);
        
        return root;
    }
    
    TreeNode* balanceBST(TreeNode* root) {
        // Step 1: Get the sorted elements from the BST
        std::vector<int> nodes;
        inorderTraversal(root, nodes);
        
        // Step 2: Construct a balanced BST from the sorted array
        return sortedArrayToBST(nodes, 0, nodes.size() - 1);
    }
};

// Example usage
int main() {
    // Create a sample BST
    TreeNode* root = new TreeNode(1);
    root->right = new TreeNode(2);
    root->right->right = new TreeNode(3);
    
    Solution solution;
    TreeNode* balancedRoot = solution.balanceBST(root);
    
    // Further processes like printing the balanced BST can be done here.
    
    return 0;
}
```

### Explanation of the Code:

1. **TreeNode Structure**: A simple struct `TreeNode` is defined to represent nodes in the tree.

2. **In-order Traversal**:
   - The `inorderTraversal` function performs a recursive in-order traversal on the BST.
   - As it visits each node, it appends the node’s value to the `nodes` vector.

3. **Building a Balanced BST**:
   - The `sortedArrayToBST` function takes the sorted list of values and builds a balanced BST recursively.
   - The middle element of the current segment of the array is chosen as the root of the subtree. This ensures balance.
   - The function recursively creates left and right subtrees using the left and right segments of the array.

4. **Balancing the BST**:
   - The `balanceBST` function orchestrates the overall process: first it collects values in sorted order from the original BST, then it builds a new balanced BST from those values.

This solution efficiently balances the BST in \(O(n)\) time for the traversal and construction, where \(n\) is the number of nodes in the tree, and uses \(O(n)\) space for storing the node values.