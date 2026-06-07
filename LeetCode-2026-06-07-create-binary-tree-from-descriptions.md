# LeetCode Daily – 2026-06-07

## 🧠 Problem #2196 – **Create Binary Tree From Descriptions**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/create-binary-tree-from-descriptions)

---

### 📝 Problem Description

You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,


	If isLefti == 1, then childi is the left child of parenti.
	If isLefti == 0, then childi is the right child of parenti.


Construct the binary tree described by descriptions and return its root.

The test cases will be generated such that the binary tree is valid.

 
Example 1:


Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.


Example 2:


Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
Output: [1,2,null,null,3,4]
Explanation: The root node is the node with value 1 since it has no parent.
The resulting binary tree is shown in the diagram.


 
Constraints:


	1 <= descriptions.length <= 104
	descriptions[i].length == 3
	1 <= parenti, childi <= 105
	0 <= isLefti <= 1
	The binary tree described by descriptions is valid.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Create Binary Tree From Descriptions" involves constructing a binary tree from a set of node descriptions. Each description consists of a parent node, a child node, and a boolean indicating whether the child is a left or right child.

### Problem Explanation

You are given a list of descriptions, where each description is an array of three integers:
- `parent`: The parent node's value.
- `child`: The child node's value.
- `isLeft`: A boolean that indicates if the child is a left child (1) or a right child (0).

The goal is to construct the binary tree and return its root.

### Steps to Solve the Problem

1. **Use a Map**: Use a map (or unordered map) to keep track of created nodes. This way, we can easily check if a node already exists when we encounter it as a child.
  
2. **Create Nodes**: For each description, check if the parent and child nodes already exist in the map. If not, create new nodes.

3. **Link Nodes**: Depending on the `isLeft` value, link the child to the parent either as a left child or as a right child.

4. **Determine the Root**: Since the descriptions might imply that multiple nodes are created, track all child nodes to find the root. The root will be a node that is never a child of any other node.

5. **Return the Root**: Finally, return the root node of the constructed binary tree.

### C++ Implementation

Here's a C++ implementation of the above steps:

```cpp
#include <unordered_map>
#include <vector>

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    TreeNode* createBinaryTree(std::vector<std::vector<int>>& descriptions) {
        std::unordered_map<int, TreeNode*> nodes;
        std::unordered_set<int> children;  // To track all child nodes
        TreeNode* root = nullptr;

        // Create nodes and build the tree
        for (const auto& description : descriptions) {
            int parentValue = description[0];
            int childValue = description[1];
            bool isLeft = description[2];

            // Create or get the parent node
            if (nodes.find(parentValue) == nodes.end()) {
                nodes[parentValue] = new TreeNode(parentValue);
            }
            TreeNode* parentNode = nodes[parentValue];

            // Create or get the child node
            if (nodes.find(childValue) == nodes.end()) {
                nodes[childValue] = new TreeNode(childValue);
            }
            TreeNode* childNode = nodes[childValue];

            // Link child to parent
            if (isLeft) {
                parentNode->left = childNode;
            } else {
                parentNode->right = childNode;
            }
            
            // Mark this node as a child
            children.insert(childValue);
        }

        // Find the root node (a node that is not a child of any other node)
        for (const auto& pair : nodes) {
            if (children.find(pair.first) == children.end()) {
                root = pair.second; // This is the root
                break;
            }
        }
        
        return root;
    }
};
```

### Explanation of the Code

1. **Data Structures**:
   - We use an unordered map `nodes` to map node values to their corresponding `TreeNode` pointers.
   - An unordered set `children` is used to keep track of all the child nodes encountered.

2. **Loop through Descriptions**:
   - For each description, we check if the parent and child nodes already exist. If not, we create new nodes.
   - Depending on whether the child is a left or right child, we link it to the parent's corresponding pointer.

3. **Finding the Root**:
   - After constructing the tree, we loop through the `nodes` map to find the root node, which will not appear in the `children` set.

4. **Return the Root**:
   - Finally, we return the root node of the constructed binary tree.

This implementation efficiently constructs the binary tree while conforming to the requirements of the problem statement.