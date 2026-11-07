# LeetCode Daily – 2026-11-07

## 🧠 Problem #1882 – **Process Tasks Using Servers**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/process-tasks-using-servers)

---

### 📝 Problem Description

You are given two 0-indexed integer arrays servers and tasks of lengths n​​​​​​ and m​​​​​​ respectively. servers[i] is the weight of the i​​​​​​th​​​​ server, and tasks[j] is the time needed to process the j​​​​​​th​​​​ task in seconds.

Tasks are assigned to the servers using a task queue. Initially, all servers are free, and the queue is empty.

At second j, the jth task is inserted into the queue (starting with the 0th task being inserted at second 0). As long as there are free servers and the queue is not empty, the task in the front of the queue will be assigned to a free server with the smallest weight, and in case of a tie, it is assigned to a free server with the smallest index.

If there are no free servers and the queue is not empty, we wait until a server becomes free and immediately assign the next task. If multiple servers become free at the same time, then multiple tasks from the queue will be assigned in order of insertion following the weight and index priorities above.

A server that is assigned task j at second t will be free again at second t + tasks[j].

Build an array ans​​​​ of length m, where ans[j] is the index of the server the j​​​​​​th task will be assigned to.

Return the array ans​​​​.

 
Example 1:


Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
Output: [2,2,0,2,1,2]
Explanation: Events in chronological order go as follows:
- At second 0, task 0 is added and processed using server 2 until second 1.
- At second 1, server 2 becomes free. Task 1 is added and processed using server 2 until second 3.
- At second 2, task 2 is added and processed using server 0 until second 5.
- At second 3, server 2 becomes free. Task 3 is added and processed using server 2 until second 5.
- At second 4, task 4 is added and processed using server 1 until second 5.
- At second 5, all servers become free. Task 5 is added and processed using server 2 until second 7.

Example 2:


Input: servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
Output: [1,4,1,4,1,3,2]
Explanation: Events in chronological order go as follows: 
- At second 0, task 0 is added and processed using server 1 until second 2.
- At second 1, task 1 is added and processed using server 4 until second 2.
- At second 2, servers 1 and 4 become free. Task 2 is added and processed using server 1 until second 4. 
- At second 3, task 3 is added and processed using server 4 until second 7.
- At second 4, server 1 becomes free. Task 4 is added and processed using server 1 until second 9. 
- At second 5, task 5 is added and processed using server 3 until second 7.
- At second 6, task 6 is added and processed using server 2 until second 7.


 
Constraints:


	servers.length == n
	tasks.length == m
	1 <= n, m <= 2 * 105
	1 <= servers[i], tasks[j] <= 2 * 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's walk through the problem "Process Tasks Using Servers" step-by-step.

### Problem Explanation

The problem involves a simulation where you have a number of servers and tasks that need processing. Each server can process a task in 1 time unit, and the tasks arrive over a period of time with distinct indices. Each server has a maximum load it can handle. 

The main objective is to process tasks such that:
1. The server that has the least number of tasks is selected.
2. If there is a tie in the number of tasks, select the server with the lowest index.
3. If all servers are busy when a task arrives, we must drop that task.

### Input and Output

- You are given:
  - `servers`: An integer array that describes the servers' weights/capacity.
  - `tasks`: An integer array that describes the tasks' processing times.
- The expected output is an integer array where each element represents the index of the server that processed the corresponding task.

### Approach

To efficiently manage processing the tasks by the servers, we can utilize a priority queue (min-heap):
1. Use one min-heap for available servers, which will allow us to easily find the server with the least load (and lowest index in case of a tie).
2. Use another min-heap for busy servers, which will help manage the servers that are currently processing tasks.

Now let’s detail the implementation:

### C++ Implementation

```cpp
#include <vector>
#include <queue>
#include <tuple>

using namespace std;

class Solution {
public:
    vector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {
        int n = servers.size(), m = tasks.size();
        
        // Priority queue for available servers (weight, index)
        priority_queue<tuple<int, int>, vector<tuple<int, int>>, greater<tuple<int, int>>> available;
        // Priority queue for busy servers (finish time, weight, index)
        priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<tuple<int, int, int>>> busy;
        
        // Initialize available servers
        for (int i = 0; i < n; ++i) {
            available.push({servers[i], i}); // push (weight, index)
        }

        vector<int> result(m);

        int currentTime = 0; // Track current time

        for (int taskIndex = 0; taskIndex < m; ++taskIndex) {
            // Increment current time when tasks arrive
            currentTime = max(currentTime, taskIndex);

            // Free up servers that have completed their tasks
            while (!busy.empty() && get<0>(busy.top()) <= currentTime) {
                auto [finishTime, weight, index] = busy.top();
                busy.pop();
                available.push({weight, index}); // push back the server to available
            }

            // If there are available servers, assign the task
            if (!available.empty()) {
                auto [weight, index] = available.top();
                available.pop();
                result[taskIndex] = index; // record the assigned server index
                busy.push({currentTime + tasks[taskIndex], weight, index}); // server will be busy until finishTime
            } 
            // If all servers are busy, drop the task (not specified in the output)
        }

        return result;
    }
};
```

### Explanation of the Code

1. **Initialization**:
   - We create two priority queues: one (`available`) for the available servers and another (`busy`) for the servers currently processing tasks.
   - Initially, we add all servers to the `available` queue.

2. **Task Processing**:
   - We loop through each task, managing the current time and updating server statuses.
   - If a server's finishing time (if it was busy) has surpassed the current time, it is moved back to the `available` queue.
   - If there are available servers, we assign the least loaded one to the task.
   - The index of the server processing the task is recorded in the result.

3. **Completion**:
   - Return the result array containing the indices of the servers for each task.

### Conclusion

This solution efficiently simulates the task assignment to servers and performs well within competitive programming constraints. The use of priority queues ensures that both the server selection criteria are met appropriately.