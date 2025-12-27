# LeetCode Daily – 2025-12-27

## 🧠 Problem #2402 – **Meeting Rooms III**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/meeting-rooms-iii)

---

### 📝 Problem Description

You are given an integer n. There are n rooms numbered from 0 to n - 1.

You are given a 2D integer array meetings where meetings[i] = [starti, endi] means that a meeting will be held during the half-closed time interval [starti, endi). All the values of starti are unique.

Meetings are allocated to rooms in the following manner:


	Each meeting will take place in the unused room with the lowest number.
	If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
	When a room becomes unused, meetings that have an earlier original start time should be given the room.


Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.

A half-closed interval [a, b) is the interval between a and b including a and not including b.

 
Example 1:


Input: n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]
Output: 0
Explanation:
- At time 0, both rooms are not being used. The first meeting starts in room 0.
- At time 1, only room 1 is not being used. The second meeting starts in room 1.
- At time 2, both rooms are being used. The third meeting is delayed.
- At time 3, both rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 1 finishes. The third meeting starts in room 1 for the time period [5,10).
- At time 10, the meetings in both rooms finish. The fourth meeting starts in room 0 for the time period [10,11).
Both rooms 0 and 1 held 2 meetings, so we return 0. 


Example 2:


Input: n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]
Output: 1
Explanation:
- At time 1, all three rooms are not being used. The first meeting starts in room 0.
- At time 2, rooms 1 and 2 are not being used. The second meeting starts in room 1.
- At time 3, only room 2 is not being used. The third meeting starts in room 2.
- At time 4, all three rooms are being used. The fourth meeting is delayed.
- At time 5, the meeting in room 2 finishes. The fourth meeting starts in room 2 for the time period [5,10).
- At time 6, all three rooms are being used. The fifth meeting is delayed.
- At time 10, the meetings in rooms 1 and 2 finish. The fifth meeting starts in room 1 for the time period [10,12).
Room 0 held 1 meeting while rooms 1 and 2 each held 2 meetings, so we return 1. 


 
Constraints:


	1 <= n <= 100
	1 <= meetings.length <= 105
	meetings[i].length == 2
	0 <= starti < endi <= 5 * 105
	All the values of starti are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Meeting Rooms III" problem from LeetCode, we need to manage the scheduling of meetings across multiple rooms, ensuring that we maximize the number of meetings that can be held given their start and end times, which can be quite complex due to overlapping intervals.

### Problem Overview

You are given:
- `n`, the total number of meeting rooms.
- An array of `meetings`, where each meeting is represented as an array of two integers, `[start, end]`.

Your task is to determine the maximum number of meetings that can be scheduled given that:
1. A meeting can start at the same time when another meeting ends (i.e., they can be back-to-back).
2. A meeting can only occupy one room at any given time.

### Approach

To solve the problem, we can use a min-heap (priority queue) to keep track of when rooms become free.

1. **Sort Meetings by Start Time**:
   This allows us to consider meetings in the order they start.

2. **Use a Min-Heap**:
   - This heap will keep track of the end times of meetings currently occupying rooms.
   - When a new meeting begins, we'll check if it can start after any currently running meetings have ended (by checking the top of the heap).
   - If a room is available (i.e., the top of the heap’s end time is less than or equal to the new meeting's start time), we can use that room for the new meeting.

3. **Count Utilized Rooms**:
   We will maintain a count of occupied rooms and only keep track of free rooms as meetings complete.

4. **Return the Maximum Count**:
   Finally, we'll return the maximum number of meetings that fit within the constraints.

### Implementation in C++

Here's how we can implement this approach in C++:

```cpp
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxMeetingRooms(vector<vector<int>>& meetings, int n) {
        // Sort meetings by start time
        sort(meetings.begin(), meetings.end());

        // Min-heap to track end times of meetings in rooms
        priority_queue<int, vector<int>, greater<int>> endTimes;

        int maxMeetings = 0;

        for (const auto& meeting : meetings) {
            // Remove rooms that have finished their meetings
            while (!endTimes.empty() && endTimes.top() <= meeting[0]) {
                endTimes.pop();
            }
            
            // If we have space in rooms or if this meeting can fit into an available room
            if (endTimes.size() < n) {
                endTimes.push(meeting[1]);
            }
            
            // Keep track of maximum meetings held
            maxMeetings = max(maxMeetings, static_cast<int>(endTimes.size()));
        }

        return maxMeetings;
    }
};
```

### Explanation of Code

1. **Sorting**: The `sort` function arranges the meetings based on their start times (`O(m log m)`, where `m` is the number of meetings).
   
2. **Using Min-Heap**:
   - We utilize a priority queue to manage the end times of the meetings.
   - We perform a loop over each meeting. For every meeting, we first remove all the meetings from the heap that are finished before the current meeting starts.

3. **Counting Rooms**:
   - If we still have room (i.e., the size of the heap is less than `n`), we push the end time of the current meeting onto the heap.
   - We continually evaluate and update the maximum number of meetings that can fit based on the size of the heap.

### Complexity Analysis
- **Time Complexity**: `O(m log m)`, where `m` is the number of meetings due to the sorting and heap operations.
- **Space Complexity**: `O(n)`, where `n` is the number of rooms, in the worst case, to accommodate the end times in the heap.

By keeping track of the end times and managing room availability with a min-heap, we can efficiently determine how many meetings can fit given the constraints of the meeting rooms.