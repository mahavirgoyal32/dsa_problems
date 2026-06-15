# LeetCode Daily – 2026-06-15

## 🧠 Problem #2095 – **Delete the Middle Node of a Linked List**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list)

---

### 📝 Problem Description

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the &lfloor;n / 2&rfloor;th node from the start using 0-based indexing, where &lfloor;x&rfloor; denotes the largest integer less than or equal to x.


	For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.


 
Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 


Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.


Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

 
Constraints:


	The number of nodes in the list is in the range [1, 105].
	1 <= Node.val <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of deleting the middle node of a linked list, we can break it down into a few strategic steps. The middle node can be defined as the node that should be deleted if the list has an odd number of nodes or the second middle node if the list has an even number of nodes. Here's a step-by-step guide to the solution:

### Steps:
1. **Determine the Length**: First, we need to find the length of the linked list to identify the index of the middle node.
2. **Find the Middle Node**: Use the length to calculate the middle node's index.
3. **Delete the Node**: Traverse the list again to find the node just before the middle node, and adjust the `next` pointer to skip the middle node.

### Implementation:

Here's a C++ implementation of the above approach:

```cpp
// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
        // If the list is empty or has only one node, return nullptr
        if (!head || !head->next) {
            return nullptr;
        }

        // Step 1: Calculate the length of the linked list
        ListNode* current = head;
        int length = 0;
        
        while (current) {
            length++;
            current = current->next;
        }

        // Step 2: Find the index of the middle node
        int middleIndex = length / 2; // This gives the correct middle index
        
        // Step 3: Traverse to the node just before the middle node
        current = head;
        for (int i = 0; i < middleIndex - 1; i++) {
            current = current->next;
        }
        
        // Step 4: Delete the middle node
        current->next = current->next->next;
        
        return head; // Return the modified list
    }
};
```

### Explanation:

1. **Node Definition**: We start by defining a `ListNode` structure which represents a single node in the linked list.

2. **Class Solution**: Inside the `Solution` class, we define a method called `deleteMiddle`.

3. **Edge Cases**: If the head is `nullptr` (the list is empty) or contains only one node (the head itself), we directly return `nullptr`. This is because if there's only one node, deleting it leaves us with an empty list.

4. **Length Calculation**: We traverse the linked list to count the total number of nodes.

5. **Determine Middle Node**: The index of the middle node is determined by `length / 2`. This handles both odd and even lengths correctly when using integer division.

6. **Traverse to the Node Before Middle**: We loop to reach the node just before the middle node. If `length` is odd, this is straightforward (like before the 3rd node for 5 nodes). For an even length, it also works correctly to give the first middle (since we chose length / 2).

7. **Delete the Middle Node**: We adjust the `next` pointer of the node before the middle to skip over the middle node.

8. **Return the Updated List**: Finally, the head of the modified linked list is returned.

### Complexity:
- **Time Complexity**: O(n), where n is the number of nodes in the linked list since we traverse the list a couple of times.
- **Space Complexity**: O(1), as we are using a constant amount of extra space for pointers. 

This solution efficiently addresses the problem while maintaining clarity and simplicity.