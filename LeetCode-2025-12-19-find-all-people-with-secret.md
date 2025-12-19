# LeetCode Daily – 2025-12-19

## 🧠 Problem #2092 – **Find All People With Secret**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-all-people-with-secret)

---

### 📝 Problem Description

You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson.

Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa.

The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame.

Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order.

 
Example 1:


Input: n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1
Output: [0,1,2,3,5]
Explanation:
At time 0, person 0 shares the secret with person 1.
At time 5, person 1 shares the secret with person 2.
At time 8, person 2 shares the secret with person 3.
At time 10, person 1 shares the secret with person 5.​​​​
Thus, people 0, 1, 2, 3, and 5 know the secret after all the meetings.


Example 2:


Input: n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3
Output: [0,1,3]
Explanation:
At time 0, person 0 shares the secret with person 3.
At time 2, neither person 1 nor person 2 know the secret.
At time 3, person 3 shares the secret with person 0 and person 1.
Thus, people 0, 1, and 3 know the secret after all the meetings.


Example 3:


Input: n = 5, meetings = [[3,4,2],[1,2,1],[2,3,1]], firstPerson = 1
Output: [0,1,2,3,4]
Explanation:
At time 0, person 0 shares the secret with person 1.
At time 1, person 1 shares the secret with person 2, and person 2 shares the secret with person 3.
Note that person 2 can share the secret at the same time as receiving it.
At time 2, person 3 shares the secret with person 4.
Thus, people 0, 1, 2, 3, and 4 know the secret after all the meetings.


 
Constraints:


	2 <= n <= 105
	1 <= meetings.length <= 105
	meetings[i].length == 3
	0 <= xi, yi <= n - 1
	xi != yi
	1 <= timei <= 105
	1 <= firstPerson <= n - 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Find All People With Secret," we'll utilize a combination of graph theory (specifically concepts related to connected components) and breadth-first search (BFS) or depth-first search (DFS).

## Problem Understanding

In this problem, we have several people (numbered from `0` to `n-1`), and we know certain pairs of people who can share a secret. The key points are:

1. We can only share the secret with people who have received it by a certain time.
2. We have a series of pairs of people and the time at which they can share the secret.

The goal is to determine which people ultimately know the secret after all the sharing has been completed, given the constraints of when they can share the secret.

## Approach

1. **Graph Representation**:  
   Treat each person as a node in a graph and each pair of people who can share the secret as an undirected edge between nodes.

2. **Storing the Data**:  
   Use an adjacency list to represent the graph. Also, store the times when the secret can be shared in a vector associated with each edge.

3. **BFS/DFS for Traversal**:  
   We can perform a BFS or DFS starting from person `0` (the original secret holder), only traversing edges where the time constraint allows sharing of the secret. We will mark all people who can eventually know the secret.

4. **Using a Queue**:  
   Since we are dealing with time, we can utilize a priority queue (min-heap) or simply a normal queue if we traverse in the right order to ensure that we're sharing the secret with as many people as possible.

5. **Result**:  
   Once we've traversed the relevant edges and people, we can compile the final list of people who know the secret.

Here's the C++ implementation of the above logic:

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <queue>
#include <set>

using namespace std;

class Solution {
public:
    vector<int> findAllPeople(int n, vector<vector<int>>& meetings, int firstPerson) {
        // Step 1: Create a graph
        unordered_map<int, vector<pair<int, int>>> graph; // {person: {(otherPerson, time)}}
        
        // Step 2: Populate the graph
        for (const auto& meeting : meetings) {
            int a = meeting[0], b = meeting[1], time = meeting[2];
            graph[a].push_back({b, time});
            graph[b].push_back({a, time});
        }
        
        // Step 3: Sort the meetings based on time
        sort(meetings.begin(), meetings.end(), [](const vector<int>& m1, const vector<int>& m2) {
            return m1[2] < m2[2];
        });

        // Step 4: Initialize BFS/DFS
        set<int> peopleWithSecret; // To keep track of people who know the secret
        peopleWithSecret.insert(0); // Person 0 knows the secret
        peopleWithSecret.insert(firstPerson); // firstPerson knows the secret

        // Step 5: Process meetings by time
        int i = 0; // index for the meetings
        while (i < meetings.size()) {
            // Gather all meetings that occur at the same time
            int currentTime = meetings[i][2];
            vector<int> currentBatch; // People that can potentially know the secret
            while (i < meetings.size() && meetings[i][2] == currentTime) {
                currentBatch.push_back(meetings[i][0]);
                currentBatch.push_back(meetings[i][1]);
                i++;
            }
            
            // Use a set to filter unique people for this time batch
            set<int> currentPeople(currentBatch.begin(), currentBatch.end());
            set<int> temp; // For tracking people knowing the secret in this batch
            
            // Traverse each person that knows the secret
            for (int person : peopleWithSecret) {
                if (currentPeople.count(person)) {
                    temp.insert(person); // they know the secret
                    // Traverse neighbors in the graph
                    for (const auto& neighbor : graph[person]) {
                        if (currentPeople.count(neighbor.first)) {
                            temp.insert(neighbor.first);
                        }
                    }
                }
            }
            
            peopleWithSecret.insert(temp.begin(), temp.end()); // Update the master set
        }
        
        // Step 6: Return the result in sorted order
        vector<int> result(peopleWithSecret.begin(), peopleWithSecret.end());
        sort(result.begin(), result.end());
        return result;
    }
};
```

### Explanation of the C++ Code

1. **Graph Creation**: We first build an adjacency list that represents meetings as edges with times.

2. **Sorting Meetings**: To process the meetings in chronological order, we sort them based on time.

3. **Initialization**: We start with `person 0` and `firstPerson` knowing the secret and track all the people who might know it.

4. **Processing Meetings**: We check each batch of meetings that occur at the same time, identify people who can receive the secret, and propagate the knowledge of the secret to connected persons.

5. **Returning Results**: We gather all unique individuals who eventually know the secret and return them in a sorted list.

### Complexity

- **Time Complexity**: O(M log M + P) where M is the number of meetings and P is the number of people, primarily for sorting the meetings and processing them.
  
- **Space Complexity**: O(N + M) where N is the number of people and M is the number of meetings due to the graph representation.

This approach efficiently handles the requirement of sharing secrets while respecting the time constraints associated with meetings.