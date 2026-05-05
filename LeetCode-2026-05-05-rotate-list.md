# LeetCode Daily – 2026-05-05

## 🧠 Problem #61 – **Rotate List**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotate-list)

---

### 📝 Problem Description

Given the head of a linked list, rotate the list to the right by k places.

 
Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]


Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]


 
Constraints:


	The number of nodes in the list is in the range [0, 500].
	-100 <= Node.val <= 100
	0 <= k <= 2 * 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The "Rotate List" problem on LeetCode asks you to rotate a linked list to the right by a given k places. Let me explain the problem first and then provide a solution in C++.

### Problem Explanation

Given a linked list, you need to move the last `k` nodes in the list to the front. Here are some key points to consider:

- If `k` is greater than the length of the list, you only need to perform the rotation `k % length` times.
- An empty list input or a single-node list will remain unchanged regardless of `k`.
  
### Example
For example, given the list `1 -> 2 -> 3 -> 4 -> 5` and `k = 2`, the rotated list should be `4 -> 5 -> 1 -> 2 -> 3`.

### Steps to Solve the Problem
1. **Calculate the Length of the List**: Traverse the list to find its length.
2. **Modulus Operation**: Determine the effective rotations needed (`k = k % length`).
3. **Find the New Tail**: Traverse the list until you find the `length - k`-th node. This will be the new tail.
4. **Update Pointers**: Change the pointers to rotate the list.
5. **Return the New Head**: The new head will be the node right after the new tail.

### C++ Solution
Here's how you can implement the solution:

```cpp
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        // Handle edge case where list is empty or has only one node
        if (!head || !head->next || k == 0) {
            return head;
        }

        // Step 1: Determine the length of the list
        ListNode* current = head;
        int length = 1; // Start at 1 to count the head
        while (current->next) {
            current = current->next;
            length++;
        }

        // Step 2: Connect last node to head to form a circular list
        current->next = head;

        // Step 3: Calculate the effective rotations needed
        k = k % length;
        
        // If k is 0 after the modulus operation, no rotations needed
        if (k == 0) {
            current->next = nullptr; // Break the circular link
            return head;
        }

        // Step 4: Find the new tail and new head
        int stepsToNewTail = length - k;
        ListNode* newTail = head;
        for (int i = 1; i < stepsToNewTail; ++i) {
            newTail = newTail->next;
        }

        ListNode* newHead = newTail->next; // New head is next to new tail
        newTail->next = nullptr; // Break the link to make it list again

        return newHead; // Return the new head of the rotated list
    }
};
```

### Explanation of the Code
- **Line 2-5**: Define the ListNode structure which consists of an integer value and a pointer to the next node.
- **Line 8**: Define the Solution class and the `rotateRight` method.
- **Line 10-14**: Handle edge cases where the head is `null`, has one node, or if `k` is zero.
- **Line 17-23**: Traverse the list to calculate its length and make the list circular by connecting the last node to the head.
- **Line 26**: Use the modulus operator to get the effective number of rotations.
- **Line 29-36**: Find the new tail and new head. This involves traversing the list up to the `length - k` node to set up the new connections.
- Finally, update and return the new linked list starting from `newHead`.

This solution efficiently rotates the list in a single pass to determine the length and another pass to find the new head. The time complexity is O(n) and the space complexity is O(1).