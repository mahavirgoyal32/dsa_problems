# LeetCode Daily – 2026-06-14

## 🧠 Problem #2130 – **Maximum Twin Sum of a Linked List**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list)

---

### 📝 Problem Description

In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.


	For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.


The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

 
Example 1:


Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 


Example 2:


Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 


Example 3:


Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.


 
Constraints:


	The number of nodes in the list is an even integer in the range [2, 105].
	1 <= Node.val <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the maximum twin sum of a linked list, we need to approach it systematically. The twin sum is defined as the sum of the values of nodes from the start of the list and from the end of the list (i.e., the first node and the last node, the second node and the second last node, and so on). 

To solve the problem efficiently, we can use the following steps:

1. **Traverse the list and store the values**: First, we need to traverse the linked list and store the node values in a vector (or list). This allows us to access the values both from the front and from the back easily.

2. **Calculate the twin sums**: After storing the values, we can calculate the twin sums by iterating through the first half of the list and pairing it with the corresponding values from the second half.

3. **Find the maximum twin sum**: During the calculation of twin sums, we can keep track of the maximum value found.

Here’s the C++ code that implements this process, including the definition of the ListNode structure:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    int pairSum(ListNode* head) {
        std::vector<int> values;
        ListNode* current = head;

        // Step 1: Store the values of the nodes in a vector
        while (current != nullptr) {
            values.push_back(current->val);
            current = current->next;
        }

        int n = values.size();
        int maxTwinSum = 0;

        // Step 2 and 3: Calculate the twin sums and find the maximum
        for (int i = 0; i < n / 2; i++) {
            int twinSum = values[i] + values[n - 1 - i];
            maxTwinSum = std::max(maxTwinSum, twinSum);
        }

        return maxTwinSum;
    }
};

```

### Explanation of the Code:

1. **ListNode Structure**: A simple structure that defines the node of the linked list, holding an integer value and a pointer to the next node.

2. **pairSum Function**: This is the main function that computes the maximum twin sum.
   - **Storing Values**: We create a vector to hold the values of the linked list nodes. We traverse the list using a pointer `current`, pushing each node's value into the `values` vector.
   - **Calculating Twin Sums**: We iterate through the first half of `values`. For each index `i`, we calculate the twin sum by adding the value at index `i` and the value at index `n - 1 - i`, where `n` is the total number of values in the list.
   - **Finding Maximum Twin Sum**: We keep track of the maximum twin sum found during this iteration using the `maxTwinSum` variable.

This approach runs in **O(n)** time complexity, where `n` is the number of nodes in the linked list. The space complexity is also **O(n)** due to the additional vector storing the node values.

This solution effectively and efficiently solves the problem, yielding the maximum twin sum of the linked list.