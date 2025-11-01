# LeetCode Daily – 2025-11-01

## 🧠 Problem #3217 – **Delete Nodes From Linked List Present in Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array)

---

### 📝 Problem Description

You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 
Example 1:


Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]

Explanation:



Remove the nodes with values 1, 2, and 3.


Example 2:


Input: nums = [1], head = [1,2,1,2,1,2]

Output: [2,2,2]

Explanation:



Remove the nodes with value 1.


Example 3:


Input: nums = [5], head = [1,2,3,4]

Output: [1,2,3,4]

Explanation:



No node has value 5.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 105
	All elements in nums are unique.
	The number of nodes in the given list is in the range [1, 105].
	1 <= Node.val <= 105
	The input is generated such that there is at least one node in the linked list that has a value not present in nums.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Delete Nodes From Linked List Present in Array" involves deleting nodes from a given linked list if their values are found in a provided array. Below are the necessary steps to implement the solution in C++, accompanied by an explanation.

### Problem Breakdown
1. **Input**: You have a linked list and an array of integers.
2. **Output**: A linked list from which all nodes whose values are present in the array have been removed.

### Steps to Solve the Problem
1. **Use a Hash Set**: Since the values in the array need to be searched frequently, we can use a hash set (unordered_set in C++) to store these values for O(1) average time complexity during look-up.
2. **Traverse the Linked List**: We will iterate through the linked list and check for each node if its value exists in the hash set.
3. **Delete or Retain Nodes**: If a node's value is found in the set, we skip that node; otherwise, we keep it in the modified linked list.
4. **Handle Edge Cases**: Ensure to handle the case when the head of the list is to be deleted as well.

### Implementation
Here's the complete C++ code to solve the problem:

```cpp
#include <unordered_set>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* deleteNodes(ListNode* head, std::vector<int>& to_delete) {
        // Hash set to store values to delete
        std::unordered_set<int> toDeleteSet(to_delete.begin(), to_delete.end());
        
        // Dummy node to help easily manage the head of the linked list
        ListNode dummy(0);
        dummy.next = head;
        
        // Previous node points to 'dummy' initially, current node starts at head
        ListNode* prev = &dummy;
        ListNode* curr = head;
        
        while (curr) {
            // If current node's value is in the set, we need to delete it
            if (toDeleteSet.count(curr->val)) {
                // Skip the current node
                prev->next = curr->next;
                // Optionally: delete curr (memory management), if needed, to prevent leaks
                // delete curr; 
            } else {
                // Only move prev to curr if we're keeping the current node
                prev = curr;
            }
            // Move to the next node in the list
            curr = curr->next;
        }
        
        // Return the modified list starting from the next of the dummy node
        return dummy.next;
    }
};
```

### Explanation of the Code
- We start by including the standard library for `unordered_set`, which will be used to hold the values from the `to_delete` vector.
- The `ListNode` structure is defined to represent each node of the linked list.
- The `Solution` class contains a method called `deleteNodes` which takes the head of the linked list and a vector of integers.
  
**Using Dummy Node**:
- A dummy node (`dummy`) is used to simplify the code by handling cases where the head may need to be deleted.
- The `dummy` node points to the same node as `head` initially. This helps us easily manage the head of the result list.

**Traversal logic**:
- We maintain two pointers, `prev` and `curr`. `prev` references the last retained node while `curr` iterates through the list.
- If `curr->val` is found in `toDeleteSet`, we adjust `prev->next` to skip the current node effectively deleting it from the chain.
- If it is not to be deleted, we move `prev` forward.
  
**Return Value**:
- Finally, we return `dummy.next`, which points to the head of the modified linked list that doesn’t contain the deleted nodes.

### Complexity Analysis
- **Time Complexity**: O(n + m), where n is the number of nodes in the linked list and m is the number of elements in the array. This is because we traverse the linked list and insert elements into the hash set.
- **Space Complexity**: O(m) is used for the hash set where m is the number of elements in the array. 

This approach efficiently deletes nodes from the linked list using a combination of a hash set for quick look-up and a dummy node for ease of management.