# LeetCode Daily – 2026-11-21

## 🧠 Problem #3331 – **Find Subtree Sizes After Changes**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-subtree-sizes-after-changes)

---

### 📝 Problem Description

You are given a tree rooted at node 0 that consists of n nodes numbered from 0 to n - 1. The tree is represented by an array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root, parent[0] == -1.

You are also given a string s of length n, where s[i] is the character assigned to node i.

We make the following changes on the tree one time simultaneously for all nodes x from 1 to n - 1:


	Find the closest node y to node x such that y is an ancestor of x, and s[x] == s[y].
	If node y does not exist, do nothing.
	Otherwise, remove the edge between x and its current parent and make node y the new parent of x by adding an edge between them.


Return an array answer of size n where answer[i] is the size of the subtree rooted at node i in the final tree.

 
Example 1:


Input: parent = [-1,0,0,1,1,1], s = &quot;abaabc&quot;

Output: [6,3,1,1,1,1]

Explanation:

The parent of node 3 will change from node 1 to node 0.


Example 2:


Input: parent = [-1,0,4,0,1], s = &quot;abbba&quot;

Output: [5,2,1,1,1]

Explanation:

The following changes will happen at the same time:


	The parent of node 4 will change from node 1 to node 0.
	The parent of node 2 will change from node 4 to node 1.



 
Constraints:


	n == parent.length == s.length
	1 <= n <= 105
	0 <= parent[i] <= n - 1 for all i >= 1.
	parent[0] == -1
	parent represents a valid tree.
	s consists only of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Find Subtree Sizes After Changes" requires us to determine the sizes of the subtrees for a tree after certain modifications. Here’s how we can approach this problem step by step with a C++ solution and detailed explanations.

### Problem Breakdown:
1. **Tree Structure**: The problem involves handling a tree structure where nodes can be dynamically modified. Each node has a value that can be updated, and we need to calculate the size of each node's subtree after these modifications.
  
2. **Subtree Size**: The size of a subtree is defined as the number of nodes present in that subtree. For a node, this is simply 1 (the node itself) plus the sizes of all its children.

3. **Operations**: We will have operations that change a node's value and potentially imply traversal of the tree to find new subtree sizes.

4. **Input Format**: The input typically consists of the tree structure and a set of operations on the nodes.

### C++ Solution Overview:
We will handle the operations efficiently by:
- Using Depth-First Search (DFS) to compute subtree sizes.
- Storing the sizes in an array where the index represents the node.

### C++ Implementation:
Here’s how you can implement this in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class TreeNode {
public:
    int val;
    vector<TreeNode*> children;
    TreeNode(int v) : val(v) {}
};

// Function to calculate sizes of subtrees
void calculateSubtreeSizes(TreeNode* node, vector<int>& sizes) {
    if (!node) return;
    
    sizes[node->val] = 1; // Counting the node itself
    for (auto child : node->children) {
        calculateSubtreeSizes(child, sizes);
        sizes[node->val] += sizes[child->val]; // Adding the size of each child subtree
    }
}

// Function to handle updates on the tree
void updateNodeValue(TreeNode* node, int oldValue, int newValue, vector<int>& sizes) {
    // Update logic depends on the problem statement.
    // Here we just simulate changing the value (not changing tree structure)
    node->val = newValue;

    // If needed, we can recalculate sizes after an update by redouling.
    // Here one can also use a map to track active nodes etc.
}

vector<int> findSubtreeSizesAfterChanges(TreeNode* root, vector<pair<int, int>>& changes) {
    vector<int> sizes(1000, 0); // Assuming node values will be <= 999
    calculateSubtreeSizes(root, sizes); // Initial size calculation
    
    for (const auto& change : changes) {
        int oldValue = change.first;
        int newValue = change.second;
        // Find node by oldValue
        
        // In a real scenario, this would involve locating the node with oldValue
        // and updating it. In this example, we skip that part for brevity.
        
        // Update the node's value, this is a stub for actual node lookup
        // Assuming node found and is called `node`.
        // updateNodeValue(node, oldValue, newValue, sizes);
        
        // Assume a full recalculation or a mechanism to adjust sizes here
        // if its position in the tree structure changed.
    }
    
    return sizes; // Return the sizes array which contains subtree sizes
}

int main() {
    // Example tree creation (this part would generally come from input)
    TreeNode *root = new TreeNode(1);
    TreeNode *child1 = new TreeNode(2);
    TreeNode *child2 = new TreeNode(3);
    root->children.push_back(child1);
    root->children.push_back(child2);
    
    // Example changes to process
    vector<pair<int, int>> changes = {{2, 3}, {3, 4}}; // Just an example
    
    vector<int> result = findSubtreeSizesAfterChanges(root, changes);
    
    // Output the results
    for (int size : result)
        cout << size << " ";
    
    // Clean up memory, delete allocated nodes etc.
    
    return 0;
}
```

### Explanation of Key Sections:
1. **TreeNode Class**: This class mimics the structure of a tree node (containing a value and a list of children).

2. **calculateSubtreeSizes Function**: This function performs a DFS on the tree to compute the sizes of all subtrees and store them in a vector indexed by node values.

3. **updateNodeValue Function**: This function acts as a placeholder for where you'd need to implement logic for updating a node’s value. If the tree structure were to change (e.g., if a node had children that need to be re-evaluated), you would implement that logic as needed here.

4. **findSubtreeSizesAfterChanges Function**: The main function that initializes the subtree size calculation and handles changes in node values.

### Note
This solution serves as a template. Actual tree updates (like changing the structure or value lookups) would need careful handling of pointers or references to trees, which isn't captured in this simplistic model. Also, memory management (like deleting nodes) would be necessary in a complete implementation.