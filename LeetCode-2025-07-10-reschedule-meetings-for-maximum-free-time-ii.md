# LeetCode Daily – 2025-07-10

## 🧠 Problem #3440 – **Reschedule Meetings for Maximum Free Time II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii)

---

### 📝 Problem Description

You are given an integer eventTime denoting the duration of an event. You are also given two integer arrays startTime and endTime, each of length n.

These represent the start and end times of n non-overlapping meetings that occur during the event between time t = 0 and time t = eventTime, where the ith meeting occurs during the time [startTime[i], endTime[i]].

You can reschedule at most one meeting by moving its start time while maintaining the same duration, such that the meetings remain non-overlapping, to maximize the longest continuous period of free time during the event.

Return the maximum amount of free time possible after rearranging the meetings.

Note that the meetings can not be rescheduled to a time outside the event and they should remain non-overlapping.

Note: In this version, it is valid for the relative ordering of the meetings to change after rescheduling one meeting.

 
Example 1:


Input: eventTime = 5, startTime = [1,3], endTime = [2,5]

Output: 2

Explanation:



Reschedule the meeting at [1, 2] to [2, 3], leaving no meetings during the time [0, 2].


Example 2:


Input: eventTime = 10, startTime = [0,7,9], endTime = [1,8,10]

Output: 7

Explanation:



Reschedule the meeting at [0, 1] to [8, 9], leaving no meetings during the time [0, 7].


Example 3:


Input: eventTime = 10, startTime = [0,3,7,9], endTime = [1,4,8,10]

Output: 6

Explanation:



Reschedule the meeting at [3, 4] to [8, 9], leaving no meetings during the time [1, 7].


Example 4:


Input: eventTime = 5, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]

Output: 0

Explanation:

There is no time during the event not occupied by meetings.


 
Constraints:


	1 <= eventTime <= 109
	n == startTime.length == endTime.length
	2 <= n <= 105
	0 <= startTime[i] < endTime[i] <= eventTime
	endTime[i] <= startTime[i + 1] where i lies in the range [0, n - 2].

---

### 💡 Solution (Language)

```cpp
class Solution 
{
public:
    int maxFreeTime(int eventTime, vector<int>& startTime, vector<int>& endTime) 
    {
        int n = startTime.size();

        // Step 1: Combine start and end times into intervals
        vector<pair<int, int>> intervals(n);
        for (int i = 0; i < n; ++i) 
        {
            intervals[i] = {startTime[i], endTime[i]};
        }

        // Step 2: Sort intervals by start time
        sort(intervals.begin(), intervals.end());

        // Step 3: Calculate free time gaps
        vector<int> gaps;
        gaps.push_back(intervals[0].first); // gap before first meeting
        for (int i = 1; i < n; ++i) 
        {
            gaps.push_back(intervals[i].first - intervals[i - 1].second); // between meetings
        }
        gaps.push_back(eventTime - intervals[n - 1].second); // gap after last meeting

        // Step 4: Precompute max gaps before and after each meeting
        vector<int> maxBefore(n + 2, 0), maxAfter(n + 2, 0);
        for (int i = 1; i <= n; ++i) 
        {
            maxBefore[i] = max(maxBefore[i - 1], gaps[i - 1]);
        }
        
        for (int i = n; i >= 1; --i) 
        {
            maxAfter[i] = max(maxAfter[i + 1], gaps[i]);
        }

        int maxFree = 0;

        // Step 5: Try removing each meeting
        for (int i = 0; i < n; ++i) 
        {
            int duration = intervals[i].second - intervals[i].first;
            int leftGap = gaps[i];
            int rightGap = gaps[i + 1];
            int combinedGap = leftGap + rightGap;

            int bestGap = max(i > 0 ? maxBefore[i] : 0,
                              i < n - 1 ? maxAfter[i + 2] : 0);

            if (duration <= bestGap) 
            {
                maxFree = max(maxFree, combinedGap + duration);
            } 
            else 
            {
                maxFree = max(maxFree, combinedGap);
            }
        }

        // Step 6: Check original max gap without rescheduling
        for (int gap : gaps) 
        {
            maxFree = max(maxFree, gap);
        }

        // Step 7: Return the max free time
        return maxFree;
    }
};
