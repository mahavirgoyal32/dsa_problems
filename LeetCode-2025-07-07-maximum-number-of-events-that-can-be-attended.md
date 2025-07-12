# LeetCode Daily – 2025-07-07

## 🧠 Problem #1353 – **Maximum Number of Events That Can Be Attended**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended)

---

### 📝 Problem Description

You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend one event at any time d.

Return the maximum number of events you can attend.

 
Example 1:


Input: events = [[1,2],[2,3],[3,4]]
Output: 3
Explanation: You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.


Example 2:


Input: events= [[1,2],[2,3],[3,4],[1,2]]
Output: 4


 
Constraints:


	1 <= events.length <= 105
	events[i].length == 2
	1 <= startDayi <= endDayi <= 105

---

### 💡 Solution (Language)

```cpp
class Solution {
public:
    int maxEvents(vector<vector<int>>& events) {
        // Sort by start day
        sort(events.begin(), events.end());

        priority_queue<int, vector<int>, greater<int>> minHeap; // stores end days
        int day = 0, i = 0, n = events.size(), res = 0;

        // Process days up to the latest possible end day
        while (!minHeap.empty() || i < n) {
            if (minHeap.empty()) {
                // No events active, jump to the next start day
                day = events[i][0];
            }

            // Add all events starting today
            while (i < n && events[i][0] == day) {
                minHeap.push(events[i][1]);
                i++;
            }

            // Remove expired events
            while (!minHeap.empty() && minHeap.top() < day) {
                minHeap.pop();
            }

            // Attend one event (earliest ending)
            if (!minHeap.empty()) {
                minHeap.pop();
                res++;
                day++;
            }
        }

        return res;
    }
};

