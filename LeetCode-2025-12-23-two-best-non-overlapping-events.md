# LeetCode Daily – 2025-12-23

## 🧠 Problem #2054 – **Two Best Non-Overlapping Events**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/two-best-non-overlapping-events)

---

### 📝 Problem Description

You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

Return this maximum sum.

Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.

 
Example 1:


Input: events = [[1,3,2],[4,5,2],[2,4,3]]
Output: 4
Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.


Example 2:


Input: events = [[1,3,2],[4,5,2],[1,5,5]]
Output: 5
Explanation: Choose event 2 for a sum of 5.


Example 3:


Input: events = [[1,5,3],[1,5,1],[6,6,5]]
Output: 8
Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.

 
Constraints:


	2 <= events.length <= 105
	events[i].length == 3
	1 <= startTimei <= endTimei <= 109
	1 <= valuei <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Two Best Non-Overlapping Events" on LeetCode asks you to find the maximum sum of values of two non-overlapping events from a given list of events, where each event can be represented by a start time, end time, and a value.

### Problem Explanation

You are given a list of events described by three integers each: `(startTime, endTime, value)`. Your goal is to select two non-overlapping events such that the sum of their values is maximized.

### Approach

1. **Sort the Events**: Start by sorting the list of events based on their end time. This allows us to efficiently find non-overlapping events later on.

2. **Dynamic Programming**: Use a dynamic programming approach to keep track of the maximum value we can achieve by selecting events up to the current position.

3. **Binary Search**: For each event, to ensure that it is non-overlapping with another event before it, use binary search to find the last event that ends before the current event starts.

4. **Calculate the Maximum Values**: Maintain an array that keeps the maximum value achievable up to each event. Then, combine this with the current event value to find possible sums.

5. **Return the Result**: Finally, return the maximum sum of the two event values.

### Implementation

Here’s how you can implement the above steps in C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Event {
    int startTime;
    int endTime;
    int value;
};

// Comparator to sort events by end time
bool compare(const Event& a, const Event& b) {
    return a.endTime < b.endTime;
}

int maxTwoEvents(vector<vector<int>>& events) {
    vector<Event> eventList;

    // Transform the input into a list of Event structs
    for (const auto& event : events) {
        eventList.push_back(Event{event[0], event[1], event[2]});
    }
    
    // Sort by end time
    sort(eventList.begin(), eventList.end(), compare);

    // dp[i]: max value we can have up to the i-th event 
    int n = eventList.size();
    vector<int> dp(n, 0);
    dp[0] = eventList[0].value;

    // Fill the dp array
    for (int i = 1; i < n; ++i) {
        dp[i] = max(dp[i - 1], eventList[i].value);
    }

    int maxSum = 0;

    for (int i = 0; i < n; ++i) {
        // Binary search to find the last event that ends before eventList[i].startTime
        int j = -1, low = 0, high = i - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (eventList[mid].endTime < eventList[i].startTime) {
                j = mid; // this event doesn't overlap
                low = mid + 1; // try for a later one
            } else {
                high = mid - 1; // this overlaps
            }
        }

        // If we found a valid non-overlapping event
        if (j != -1) {
            maxSum = max(maxSum, eventList[i].value + dp[j]);
        }
    }

    return maxSum;
}

// Example usage
int main() {
    vector<vector<int>> events = {{1, 3, 5}, {3, 4, 2}, {1, 2, 1}, {4, 5, 3}};
    cout << "Maximum Sum of Two Non-Overlapping Events: " << maxTwoEvents(events) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Event Struct**: We create a simple struct to hold the properties of an event.

2. **Sorting**: We sort the events based on their end time using the `compare` function.

3. **Dynamic Programming Array**: We construct a dynamic programming array `dp` where `dp[i]` gives the maximum value we can achieve by considering events up to index `i`.

4. **Binary Search**: For each event, we use binary search to find the last event that does not overlap with it (`j`). If found, we calculate the potential maximum sum of values.

5. **Max Sum Calculation**: We keep track of the maximum sum found during the iteration.

By following these steps, you can solve the problem efficiently.