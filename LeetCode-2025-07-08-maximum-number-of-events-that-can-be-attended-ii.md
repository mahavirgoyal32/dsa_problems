# LeetCode Daily – 2025-07-08

## 🧠 Problem #1751 – **Maximum Number of Events That Can Be Attended II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii)

---

### 📝 Problem Description

You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend.

You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day.

Return the maximum sum of values that you can receive by attending events.

 
Example 1:




Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
Output: 7
Explanation: Choose the green events, 0 and 1 (0-indexed) for a total value of 4 + 3 = 7.

Example 2:




Input: events = [[1,2,4],[3,4,3],[2,3,10]], k = 2
Output: 10
Explanation: Choose event 2 for a total value of 10.
Notice that you cannot attend any other event as they overlap, and that you do not have to attend k events.

Example 3:




Input: events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3
Output: 9
Explanation: Although the events do not overlap, you can only attend 3 events. Pick the highest valued three.

 
Constraints:


	1 <= k <= events.length
	1 <= k * events.length <= 106
	1 <= startDayi <= endDayi <= 109
	1 <= valuei <= 106

---

### 💡 Solution (Language)

```cpp
class Solution {
public:
    int maxValue(vector<vector<int>>& events, int k) {
        int n = events.size();
        // Sort events by end time
        sort(events.begin(), events.end(), [](auto &a, auto &b) {
            return a[1] < b[1];
        });

        // Precompute only the start and end times for binary search
        vector<int> endTimes(n);
        for (int i = 0; i < n; ++i)
            endTimes[i] = events[i][1];

        // Binary search to find last non-overlapping event
        auto findLastNonOverlapping = [&](int idx) {
            int low = 0, high = idx - 1, ans = -1;
            while (low <= high) {
                int mid = low + (high - low) / 2;
                if (events[mid][1] < events[idx][0]) {
                    ans = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return ans;
        };

        // dp[i][j] = max value using first i events and attending j events
        vector<vector<int>> dp(n + 1, vector<int>(k + 1, 0));

        for (int i = 1; i <= n; ++i) {
            int last = findLastNonOverlapping(i - 1); // 0-based
            for (int j = 1; j <= k; ++j) {
                // Skip current event
                dp[i][j] = max(dp[i][j], dp[i - 1][j]);
                // Take current event
                dp[i][j] = max(dp[i][j], dp[last + 1][j - 1] + events[i - 1][2]);
            }
        }

        return dp[n][k];
    }
};

