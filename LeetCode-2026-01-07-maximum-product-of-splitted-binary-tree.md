# LeetCode Daily – 2026-01-07

## 🧠 Problem #1339 – **Maximum Product of Splitted Binary Tree**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree)

---

### 📝 Problem Description

Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.

 
Example 1:


Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)


Example 2:


Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)


 
Constraints:


	The number of nodes in the tree is in the range [2, 5 * 104].
	1 <= Node.val <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Product of Splitted Binary Tree" asks us to find the maximum product of the sums of two subtrees formed by splitting a binary tree into two parts. The maximum product is defined as the maximum value of `(S1 * S2)` where `S1` and `S2` are the sums of the two resulting subtrees.

### Problem Breakdown:
1. **Input:** A binary tree rooted at a node with various integer values in the nodes.
2. **Output:** The maximum product of two subtree sums after splitting the tree.
3. **Constraints:** The tree can have up to 10^4 nodes and each node can contain a value that can be negative or positive.

### Steps to Solve:

1. **Calculate the Total Sum:** First, we need to calculate the total sum of all nodes in the tree (`TotalSum`).
   
2. **Calculate the Sum of Subtrees:** We can traverse the tree using DFS (Depth First Search) and for each node, we calculate the sum of its subtree.

3. **Calculate Products:** As we compute the sum of each subtree, we can compute the product of the current subtree sum (`subtree_sum`) and the remaining tree sum, which is given by `TotalSum - subtree_sum`.

4. **Track the Maximum Product:** We'll keep track of the maximum product encountered during the traversal.

5. **Return Result:** Finally, return the maximum product modulo `10^9 + 7` to handle large numbers.

### Implementation in C++

Below is the C++ code that implements the above approach:

```cpp
#include <iostream>
#include <algorithm>
#include <climits>

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
    long long totalSum = 0;
    long long maxProduct = 0;
    const int MOD = 1e9 + 7;

    // Function to calculate the total sum of the tree
    long long calculateTotalSum(TreeNode* root) {
        if (!root) return 0;
        totalSum += root->val;
        calculateTotalSum(root->left);
        calculateTotalSum(root->right);
        return totalSum;
    }

    // Function to calculate the sum of subtree and check for maximum product
    long long dfs(TreeNode* node) {
        if (!node) return 0;
        
        long long subtreeSum = node->val + dfs(node->left) + dfs(node->right);
        
        // Calculate the product of the split
        long long product = (subtreeSum * (totalSum - subtreeSum)) % MOD;
        maxProduct = max(maxProduct, product);
        
        return subtreeSum;
    }
    
    int maxProduct(TreeNode* root) {
        // Step 1: Calculate the total sum of the tree
        calculateTotalSum(root);
        // Step 2: Perform DFS to find maximum product
        dfs(root);
        // Return the maximum product found
        return maxProduct;
    }
};

// Example usage:
// TreeNode* root = new TreeNode(1);
// root->left = new TreeNode(2);
// root->right = new TreeNode(3);
// Solution sol;
// cout << sol.maxProduct(root);  // Output: 6, based on the example structure
```

### Explanation of the Code:
1. **Structure Definition:** We define a `TreeNode` structure representing each node in the binary tree.
2. **Solution Class:** The `Solution` class contains methods and variables needed to compute the maximum product.
3. **Total Sum Calculation:** The `calculateTotalSum` method recursively sums all node values and stores the total in `totalSum`.
4. **DFS Traversal:** The `dfs` method computes the subtree sums and checks for the maximum product while traversing the tree.
5. **Max Product Calculation:** For every computed subtree sum, we derive the product of that sum with the rest of the tree and update `maxProduct` when we find a larger product.
6. **Final Output:** The result is returned as the maximum product found during the traversal mod `10^9 + 7`.

This method efficiently calculates and keeps track of necessary sums and products, yielding the desired maximum product for the split binary tree.