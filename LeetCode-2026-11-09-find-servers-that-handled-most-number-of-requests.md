# LeetCode Daily – 2026-11-09

## 🧠 Problem #1606 – **Find Servers That Handled Most Number of Requests**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests)

---

### 📝 Problem Description

You have k servers numbered from 0 to k-1 that are being used to handle multiple requests simultaneously. Each server has infinite computational capacity but cannot handle more than one request at a time. The requests are assigned to servers according to a specific algorithm:


	The ith (0-indexed) request arrives.
	If all servers are busy, the request is dropped (not handled at all).
	If the (i % k)th server is available, assign the request to that server.
	Otherwise, assign the request to the next available server (wrapping around the list of servers and starting from 0 if necessary). For example, if the ith server is busy, try to assign the request to the (i+1)th server, then the (i+2)th server, and so on.


You are given a strictly increasing array arrival of positive integers, where arrival[i] represents the arrival time of the ith request, and another array load, where load[i] represents the load of the ith request (the time it takes to complete). Your goal is to find the busiest server(s). A server is considered busiest if it handled the most number of requests successfully among all the servers.

Return a list containing the IDs (0-indexed) of the busiest server(s). You may return the IDs in any order.

 
Example 1:


Input: k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3] 
Output: [1] 
Explanation: 
All of the servers start out available.
The first 3 requests are handled by the first 3 servers in order.
Request 3 comes in. Server 0 is busy, so it&#39;s assigned to the next available server, which is 1.
Request 4 comes in. It cannot be handled since all servers are busy, so it is dropped.
Servers 0 and 2 handled one request each, while server 1 handled two requests. Hence server 1 is the busiest server.


Example 2:


Input: k = 3, arrival = [1,2,3,4], load = [1,2,1,2]
Output: [0]
Explanation: 
The first 3 requests are handled by first 3 servers.
Request 3 comes in. It is handled by server 0 since the server is available.
Server 0 handled two requests, while servers 1 and 2 handled one request each. Hence server 0 is the busiest server.


Example 3:


Input: k = 3, arrival = [1,2,3], load = [10,12,11]
Output: [0,1,2]
Explanation: Each server handles a single request, so they are all considered the busiest.


 
Constraints:


	1 <= k <= 105
	1 <= arrival.length, load.length <= 105
	arrival.length == load.length
	1 <= arrival[i], load[i] <= 109
	arrival is strictly increasing.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the LeetCode problem "Find Servers That Handled Most Number of Requests".

### Problem Explanation

You are given two arrays:

1. `servers`: An array of integers representing the number of servers.
2. `requests`: An array of integers representing the time of requests.

Your goals are:

- To determine how many requests each server handles.
- To identify which servers handled the most number of requests.

### Constraints

1. Each server can handle only one request at a time.
2. If two servers are available when a request comes in (i.e., they are free), you should choose the server with the smallest index.
3. If no servers are available, the request is dropped.

### Task Breakdown

1. We need to simulate the requests being processed.
2. We can use a priority queue to keep track of available servers.
3. We need to keep track of the number of requests each server handled.
4. After processing all the requests, identify the servers with the maximum number of requests handled.

### C++ Solution

Here’s a C++ implementation of the above logic.

```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    vector<int> busiestServers(int k, vector<int>& arrival, vector<int>& load) {
        // Vector to count requests handled by each server
        vector<int> requestCount(k, 0);
        
        // Priority queue (min-heap) for available servers
        priority_queue<int, vector<int>, greater<int>> availableServers;
        
        // A priority queue to manage busy servers by their finish time
        priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> busyServers;

        for (int i = 0; i < k; ++i) {
            availableServers.push(i); // Initially, all servers are available
        }

        // Process each request
        for (int i = 0; i < arrival.size(); ++i) {
            // Free servers that have finished processing their requests by the current arrival time
            while (!busyServers.empty() && busyServers.top().first <= arrival[i]) {
                availableServers.push(busyServers.top().second);
                busyServers.pop();
            }

            // If there are available servers
            if (!availableServers.empty()) {
                int serverId = availableServers.top(); // Get the server with smallest index
                availableServers.pop(); // Server is now busy

                // Increment the request count for this server
                requestCount[serverId]++;
                
                // Schedule the server to be free after its load time
                busyServers.push({arrival[i] + load[i], serverId});
            }
        }

        // Determine the maximum number of requests handled by any server
        int maxRequests = 0;
        for (int count : requestCount) {
            maxRequests = max(maxRequests, count);
        }

        // Prepare the answer with servers that handled the maximum requests
        vector<int> result;
        for (int i = 0; i < k; ++i) {
            if (requestCount[i] == maxRequests) {
                result.push_back(i);
            }
        }

        return result;
    }
};

// Example usage
int main() {
    Solution sol;
    vector<int> arrival = {1, 2, 3, 4, 5};
    vector<int> load = {5, 2, 10, 3, 6};
    int k = 3;

    vector<int> busiest = sol.busiestServers(k, arrival, load);
    
    cout << "Busiest servers: ";
    for (int serverId : busiest) {
        cout << serverId << " ";
    }
    cout << endl;

    return 0;
}
```

### Explanation of the Code

1. **Initialization**:
   - We maintain a count of the number of requests handled by each server in `requestCount`.
   - `availableServers` is a min-heap to track the servers that are currently free.
   - `busyServers` is a min-heap to manage the servers that are busy, paired with their finish time.

2. **Process Each Request**:
   - For each request, we first free up any servers that are done processing their requests by the current arrival time.
   - If there's an available server, we take the one with the smallest index, increment its request count, and push it into `busyServers` with the time it will be free.

3. **Determine the Result**:
   - After processing all requests, we find the maximum number handled by any server.
   - We then collect the server indices that achieved this maximum.

### Summary
The solution efficiently handles the requests using priority queues, ensuring that we can quickly access the least indexed server and manage busy servers correctly while counting requests. This solution has a time complexity of \(O(n \log k)\) where \(n\) is the number of requests, making it suitable for the problem's constraints.