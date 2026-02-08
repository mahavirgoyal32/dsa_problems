# LeetCode Daily – 2026-02-08

## 🧠 Problem #110 – **Balanced Binary Tree**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/balanced-binary-tree)

---

### 📝 Problem Description

Given a binary tree, determine if it is height-balanced.

 
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true


Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false


Example 3:


Input: root = []
Output: true


 
Constraints:


	The number of nodes in the tree is in the range [0, 5000].
	-104 <= Node.val <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the "Balanced Binary Tree" problem from LeetCode.

### Problem Statement:
A balanced binary tree is a tree where the left and right subtrees of every node differ in height by no more than 1. Given a binary tree, we need to determine if it is height-balanced.

### Approach:
To solve this problem, we can use a recursive approach to determine the height of each subtree while checking the balance condition:

1. **Base Case**: If the node is `nullptr`, the tree is balanced, and its height is `0`.
2. **Recursive Case**: 
   - Recursively compute the height of the left and right subtrees.
   - Check if the left and right subtrees are balanced (by checking whether the heights differ by no more than 1).
   - If both subtrees are balanced, return the height of the current subtree.
   - If not balanced, return a special value to indicate it isn’t balanced.

In this implementation, we can define a helper function that not only calculates the height but also indicates if the tree is balanced.

### C++ Code:
Here is how you might implement this:

```cpp
#include <iostream>
#include <algorithm> // For std::max

// Definition of a binary tree node
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    // Function to check if the tree is balanced
    bool isBalanced(TreeNode* root) {
        return checkBalance(root) != -1;
    }

private:
    // Helper function to check balance and return height
    int checkBalance(TreeNode* node) {
        // Base case: An empty tree is balanced, height is 0
        if (node == nullptr) {
            return 0;
        }

        // Check left subtree
        int leftHeight = checkBalance(node->left);
        if (leftHeight == -1) return -1; // Left subtree is not balanced

        // Check right subtree
        int rightHeight = checkBalance(node->right);
        if (rightHeight == -1) return -1; // Right subtree is not balanced

        // Check if current node is balanced
        if (std::abs(leftHeight - rightHeight) > 1) {
            return -1; // Current node is not balanced
        }

        // Return the height of the tree rooted at current node
        return std::max(leftHeight, rightHeight) + 1;
    }
};

// Example Usage
int main() {
    // Creating a balanced binary tree for testing
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    
    Solution solution;
    std::cout << "Is the binary tree balanced? " << (solution.isBalanced(root) ? "Yes" : "No") << std::endl;

    // Clean up memory (not shown: ideally you should delete nodes you allocated)
    delete root->left->left;
    delete root->left->right;
    delete root->left;
    delete root->right;
    delete root;

    return 0;
}
```

### Explanation:
1. **TreeNode Structure**: This structure represents a node in the binary tree containing a value, a left child, and a right child.
2. **isBalanced Method**: This is the main method that the user calls. It invokes `checkBalance` recursively starting from the root.
3. **checkBalance Method**: 
   - It computes the height of the tree while simultaneously checking if it’s balanced.
   - If the left or right subtree is not balanced (`checkBalance` returns `-1`), the current tree is not balanced as well.
   - If the difference in heights of the left and right subtrees is greater than `1`, it also returns `-1`.
   - Finally, it returns the height (which is `1 + max(leftHeight, rightHeight)`).

### Complexity:
- **Time Complexity**: O(n), where n is the number of nodes, because each node is visited once.
- **Space Complexity**: O(h), where h is the height of the tree, which accounts for the recursion stack in the case of a skewed tree.

This approach efficiently checks the balance while computing heights, ensuring optimal performance.