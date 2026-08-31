# LeetCode Daily – 2026-08-31

## 🧠 Problem #2058 – **Find the Minimum and Maximum Number of Nodes Between Critical Points**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points)

---

### 📝 Problem Description

A critical point in a linked list is defined as either a local maxima or a local minima.

A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return [-1, -1].

 
Example 1:


Input: head = [3,1]
Output: [-1,-1]
Explanation: There are no critical points in [3,1].


Example 2:


Input: head = [5,3,1,2,5,1,2]
Output: [1,3]
Explanation: There are three critical points:
- [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
- [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
- [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.


Example 3:


Input: head = [1,3,2,2,3,2,2,2,7]
Output: [3,3]
Explanation: There are two critical points:
- [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
- [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
Both the minimum and maximum distances are between the second and the fifth node.
Thus, minDistance and maxDistance is 5 - 2 = 3.
Note that the last node is not considered a local maxima because it does not have a next node.


 
Constraints:


	The number of nodes in the list is in the range [2, 105].
	1 <= Node.val <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem "Find the Minimum and Maximum Number of Nodes Between Critical Points". The problem can be summarized as follows:

### Problem Description
In a linked list, a node is defined as a critical point if it is either a local minimum or a local maximum. Specifically, for a node `node`, it is a local minimum if both its neighbors are greater than `node`, and a local maximum if both its neighbors are smaller than `node`.

The task is to find the minimum and maximum number of nodes that lie between the critical points. 

### Steps to Solve the Problem

1. **Identify Critical Points**:
   Traverse the linked list and determine the critical points based on the values of the nodes and their neighbors.

2. **Count Nodes Between Critical Points**:
   Once you have the indices of the critical points, calculate the number of nodes between the first and last critical points to get the maximum value. For the minimum value, you can compute the smallest distance between any two consecutive critical points.

3. **Handle Edge Cases**:
   If there are fewer than two critical points, you should return `-1` for both the minimum and maximum.

### C++ Implementation
Here's the C++ solution:

```cpp
#include <iostream>
#include <vector>

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    std::vector<int> nodesBetweenCriticalPoints(ListNode* head) {
        std::vector<int> criticalPoints;
        ListNode* prev = nullptr;
        ListNode* curr = head;
        ListNode* next = head ? head->next : nullptr;
        int index = 0;

        // Traverse the list and find critical points
        while (next) {
            // Check if it's a critical point
            if ((prev && curr && next) && 
                ((curr->val < prev->val && curr->val < next->val) || // local minimum
                 (curr->val > prev->val && curr->val > next->val))) { // local maximum
                criticalPoints.push_back(index);
            }
            prev = curr;
            curr = next;
            next = next->next;
            ++index;
        }

        if (criticalPoints.size() < 2) {
            return {-1, -1}; // not enough critical points
        }

        int minDistance = std::numeric_limits<int>::max();
        int maxDistance = criticalPoints.back() - criticalPoints.front();

        // Calculate minimum distance between consecutive critical points
        for (size_t i = 1; i < criticalPoints.size(); ++i) {
            int distance = criticalPoints[i] - criticalPoints[i - 1];
            minDistance = std::min(minDistance, distance);
        }

        return {minDistance, maxDistance};
    }
};
```

### Explanation of the Code:
1. **Data Structure**:
   We define the `ListNode` structure to represent the nodes of the linked list.

2. **Finding Critical Points**:
   - We use a `while` loop to traverse the linked list.
   - For each node (except the first and last), we check if it's a critical point (i.e., a local minimum or maximum) by comparing its value with its neighbors.
   - If a critical point is found, we store its index in the `criticalPoints` vector.

3. **Calculating Distances**:
   - After locating the critical points, we check their count.
   - If there are fewer than two critical points, we return `-1` for both minimum and maximum distances.
   - We calculate the maximum distance as the difference between the first and last critical point index.
   - For the minimum distance, we find the smallest gap between consecutive critical point indices.

### Complexity:
- **Time Complexity**: O(N), where N is the number of nodes in the linked list, since we visit each node once.
- **Space Complexity**: O(K), where K is the number of critical points found (could be at most N-2).

With this implementation, you effectively identify critical points and calculate the required distances in a single traversal through the linked list.