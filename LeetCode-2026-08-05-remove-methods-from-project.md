# LeetCode Daily – 2026-08-05

## 🧠 Problem #3310 – **Remove Methods From Project**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-methods-from-project)

---

### 📝 Problem Description

You are maintaining a project that has n methods numbered from 0 to n - 1.

You are given two integers n and k, and a 2D integer array invocations, where invocations[i] = [ai, bi] indicates that method ai invokes method bi.

There is a known bug in method k. Method k, along with any method invoked by it, either directly or indirectly, are considered suspicious and we aim to remove them.

A group of methods can only be removed if no method outside the group invokes any methods within it.

Return an array containing all the remaining methods after removing all the suspicious methods. You may return the answer in any order. If it is not possible to remove all the suspicious methods, none should be removed.

 
Example 1:


Input: n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]

Output: [0,1,2,3]

Explanation:



Method 2 and method 1 are suspicious, but they are directly invoked by methods 3 and 0, which are not suspicious. We return all elements without removing anything.


Example 2:


Input: n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]

Output: [3,4]

Explanation:



Methods 0, 1, and 2 are suspicious and they are not directly invoked by any other method. We can remove them.


Example 3:


Input: n = 3, k = 2, invocations = [[1,2],[0,1],[2,0]]

Output: []

Explanation:



All methods are suspicious. We can remove them.


 
Constraints:


	1 <= n <= 105
	0 <= k <= n - 1
	0 <= invocations.length <= 2 * 105
	invocations[i] == [ai, bi]
	0 <= ai, bi <= n - 1
	ai != bi
	invocations[i] != invocations[j]

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Remove Methods From Project" on LeetCode involves modifying a set of methods in a programming project represented as a tree structure based on certain rules. Given a tree where each node contains a method name and a list of child nodes representing methods that are called by that method, the goal is to remove certain methods based on the following requirements:

1. If the number of calls to child methods exceeds a given threshold 'k', the method should be removed from the project.
2. If a method is removed, all its child methods should also be removed.
3. The output should be a list of method names that remain after the removal process.

### Approach

To solve this problem, we can use Depth First Search (DFS) to traverse the tree and explore each method and its children. The approach involves recursively visiting the tree structure, counting calls, and applying the removal rules.

Here's a structured breakdown of the solution:

1. **Define structures**: Define a class to represent the method tree, including its name and a list of child methods.

2. **DFS Traversal**: Implement a DFS function that:
    - Counts how many children of the current method qualify to remain based on the rules.
    - If the count exceeds 'k', it marks the method for removal.
    - Collects the names of methods that are kept.

3. **Collect Results**: In the main function, invoke the DFS from the root of the project and gather the results for methods that weren't removed.

Here’s a sample code implementation in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <string>

using namespace std;

// Definition for the method structure
struct Method {
    string name;
    vector<Method*> children;
    
    Method(string name) : name(name), children() {}
};

class Solution {
public:
    unordered_set<string> survivingMethods;  // To hold the names of surviving methods

    int dfs(Method* method, int k) {
        if (!method) return 0;  // Base case
        
        int childCount = 0;  // Initialize count of surviving children

        // Recursively visit all children
        for (Method* child : method->children) {
            childCount += dfs(child, k);  // Count surviving methods from children
        }

        // Check if the current method should be removed
        if (childCount > k) {
            return 0;  // This method is removed
        } else {
            survivingMethods.insert(method->name);  // This method survives
            return childCount + 1;  // Include this method in count
        }
    }

    vector<string> removeMethods(Method* root, int k) {
        dfs(root, k);  // Perform DFS starting from root
        return vector<string>(survivingMethods.begin(), survivingMethods.end());  // Return the result as vector
    }
};

// Example usage
int main() {
    // Example tree creation
    Method* root = new Method("root");
    Method* child1 = new Method("child1");
    Method* child2 = new Method("child2");
    Method* child3 = new Method("child3");
    Method* child4 = new Method("child4");
    
    // Constructing the tree
    root->children.push_back(child1);
    root->children.push_back(child2);
    child2->children.push_back(child3);
    child2->children.push_back(child4);
    
    Solution solution;
    int k = 1; // Threshold for number of children
    vector<string> result = solution.removeMethods(root, k);

    // Print the remaining methods
    for (const string& methodName : result) {
        cout << methodName << " ";
    }
    // Clean up heap memory if necessary (not shown here for simplicity)
    return 0;
}
```

### Explanation of the Code:

- **Method class**: Represents each method in the project with a name and a vector of children methods.
  
- **DFS Function**: 
    - It traverses through the methods recursively. For each method, it counts how many of its children survive the removal process.
    - If the count of surviving children exceeds the threshold `k`, it returns `0`, indicating that this method should not be included in the results. Otherwise, it adds the method's name to the set of surviving methods.

- **Results Collection**: After the DFS traversal, it converts the set of surviving methods into a vector which can be returned.

This solution efficiently processes the method tree, complying with the removal rules while maintaining a clear structure for both readability and ease of maintenance.