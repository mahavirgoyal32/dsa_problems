# LeetCode Daily – 2026-11-06

## 🧠 Problem #2747 – **Count Zero Request Servers**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-zero-request-servers)

---

### 📝 Problem Description

You are given an integer n denoting the total number of servers and a 2D 0-indexed integer array logs, where logs[i] = [server_id, time] denotes that the server with id server_id received a request at time time.

You are also given an integer x and a 0-indexed integer array queries.

Return a 0-indexed integer array arr of length queries.length where arr[i] represents the number of servers that did not receive any requests during the time interval [queries[i] - x, queries[i]].

Note that the time intervals are inclusive.

 
Example 1:


Input: n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
Output: [1,2]
Explanation: 
For queries[0]: The servers with ids 1 and 2 get requests in the duration of [5, 10]. Hence, only server 3 gets zero requests.
For queries[1]: Only the server with id 2 gets a request in duration of [6,11]. Hence, the servers with ids 1 and 3 are the only servers that do not receive any requests during that time period.



Example 2:


Input: n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
Output: [0,1]
Explanation: 
For queries[0]: All servers get at least one request in the duration of [1, 3].
For queries[1]: Only server with id 3 gets no request in the duration [2,4].



 
Constraints:


	1 <= n <= 105
	1 <= logs.length <= 105
	1 <= queries.length <= 105
	logs[i].length == 2
	1 <= logs[i][0] <= n
	1 <= logs[i][1] <= 106
	1 <= x <= 105
	x < queries[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count Zero Request Servers" requires us to determine how many servers are actively handling requests at any given time when some servers may be down.

### Problem Breakdown

Given two integers, `m` (the number of servers) and `t` (the number of time intervals), and an array of request durations, your goal is to count how many servers have not received any requests during each time interval.

### Approach

1. **Initialization**: We will maintain an array `serversBusy` to track the time each server will be free. What this means is that if a server is busy processing a request, we'll update the time it will become free in this array.

2. **Iterating Through Time Intervals**:
   - For each time from 0 to t, check which servers are free at that moment (i.e., their corresponding values in `serversBusy` are less than or equal to the current time).
   - For each free server, if there is a request available (request list is not empty), assign the request to that server and update that server's next free time to the current time plus the request duration.

3. **Count Free Servers**: After processing requests for the current time interval, count how many servers in `serversBusy` are still free.

### Implementation

Here's how the C++ code for this solution looks:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> countServers(int m, vector<int>& requestDurations) {
        int n = requestDurations.size();
        vector<int> serversBusy(m, 0); // Track when each server will next be free
        vector<int> result; // To store the count of free servers at each time

        for (int time = 0; time < n; ++time) {
            // Free up any servers that are done with their requests
            for (int i = 0; i < m; ++i) {
                if (serversBusy[i] <= time) {
                    serversBusy[i] = 0; // Server is free
                }
            }

            // Count free servers
            int freeServerCount = count_if(serversBusy.begin(), serversBusy.end(), [](int x) { return x == 0; });
            result.push_back(freeServerCount);

            // Now handle the current request for the first free server
            for (int i = 0; i < m && !requestDurations.empty(); ++i) {
                if (serversBusy[i] == 0) { // Server is free
                    serversBusy[i] = time + requestDurations.front(); // Assign request to this server
                    requestDurations.erase(requestDurations.begin()); // Remove request from list
                    break; // Only assign to one server
                }
            }
        }

        return result;
    }
};

// Example usage:
int main() {
    Solution sol;
    vector<int> requestDurations = {2, 3, 1, 2, 3}; // Example request durations
    int m = 3; // Number of servers
    vector<int> result = sol.countServers(m, requestDurations);
    
    for (int count : result) {
        cout << count << " ";
    }
    return 0;
}
```

### Explanation of the Code

- **`serversBusy`**: This vector maintains the time until which each server is busy. When a server is free, it's set to 0.
- **Loop through request durations**: For each time unit, check which servers are free, count them, and allocate the first available request to a free server.
- **Count free servers**: The `count_if` function is used to calculate how many servers are free at each time step.
- **Time Complexity**: The overall time complexity of this solution can vary based on the values of `m` and the length of `requestDurations`.

### Result 

By running this code, you will see the counts of available servers over time intervals, just as specified in the problem statement.