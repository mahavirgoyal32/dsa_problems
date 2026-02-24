# LeetCode Daily – 2026-02-24

## 🧠 Problem #1022 – **Sum of Root To Leaf Binary Numbers**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers)

---

### 📝 Problem Description

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.


	For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.


For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.

 
Example 1:


Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22


Example 2:


Input: root = [0]
Output: 0


 
Constraints:


	The number of nodes in the tree is in the range [1, 1000].
	Node.val is 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The LeetCode problem "Sum of Root to Leaf Binary Numbers" asks us to calculate the sum of all the root-to-leaf binary numbers represented by the paths in a binary tree. Each path corresponds to a binary number formed from the values of the nodes starting from the root node to the leaf node.

### Problem Explanation:
1. Each node in the binary tree has a value of either 0 or 1.
2. As we traverse from the root to the leaves, we form binary numbers by appending the node values.
3. The goal is to calculate the sum of all these binary numbers.

### Example:
Consider the binary tree:
```
     1
   /   \
  0     1
 / \   / \
0   1 0   1
```
The root-to-leaf paths are:
- 100 (1 -> 0 -> 0)
- 101 (1 -> 0 -> 1)
- 110 (1 -> 1 -> 0)
- 111 (1 -> 1 -> 1)

The respective binary to decimal conversions are:
- 100 = 4
- 101 = 5
- 110 = 6
- 111 = 7

The result should be 4 + 5 + 6 + 7 = 22.

### Approach:
1. Use Depth First Search (DFS) to traverse the tree.
2. Keep track of the current value of the binary number as you go down the tree.
3. When you reach a leaf node, add the current binary number to the result.
4. Return the final result.

### C++ Solution:

```cpp
#include <iostream>

// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
    
    int dfs(TreeNode* node, int currentSum) {
        if (!node) {
            return 0;  // Base case: if the node is null, return 0.
        }
        
        // Update the current sum by shifting left and adding the node's value
        currentSum = (currentSum << 1) | node->val; 
        
        // If the current node is a leaf, return the currentSum
        if (!node->left && !node->right) {
            return currentSum;
        }
        
        // Recursively traverse left and right subtrees
        return dfs(node->left, currentSum) + dfs(node->right, currentSum);
    }
};
```

### Explanation of the Code:
1. **TreeNode Definition**:
   - We define a struct `TreeNode` which represents each node in the binary tree.

2. **sumNumbers Function**:
   - The main function `sumNumbers` calls a helper function `dfs` to perform the DFS.

3. **dfs Function**:
   - This function takes a `TreeNode` and the current binary number's accumulated value (`currentSum`).
   - If the node is `null`, it returns 0.
   - The current sum is updated by shifting left (which is equivalent to multiplying by 2) and adding the current node's value. This constructs the binary number correctly.
   - If the node is a leaf (no left or right children), it returns the current sum as this is one complete binary number.
   - If it's not a leaf, it recursively calls itself for the left and right children, summing their results.

### Time Complexity:
- The time complexity is O(N), where N is the number of nodes in the binary tree, since we visit every node exactly once.

### Space Complexity:
- The space complexity is O(H), where H is the height of the tree, due to the recursion stack in the DFS approach.

This algorithm provides an efficient way to solve the problem, leveraging depth-first traversal to accumulate binary numbers and compute their sum.