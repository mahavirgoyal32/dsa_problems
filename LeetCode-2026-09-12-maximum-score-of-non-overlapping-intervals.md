# LeetCode Daily – 2026-09-12

## 🧠 Problem #3414 – **Maximum Score of Non-overlapping Intervals**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals)

---

### 📝 Problem Description

You are given a 2D integer array intervals, where intervals[i] = [li, ri, weighti]. Interval i starts at position li and ends at ri, and has a weight of weighti. You can choose up to 4 non-overlapping intervals. The score of the chosen intervals is defined as the total sum of their weights.

Return the lexicographically smallest array of at most 4 indices from intervals with maximum score, representing your choice of non-overlapping intervals.

Two intervals are said to be non-overlapping if they do not share any points. In particular, intervals sharing a left or right boundary are considered overlapping.

 
Example 1:


Input: intervals = [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]

Output: [2,3]

Explanation:

You can choose the intervals with indices 2, and 3 with respective weights of 5, and 3.


Example 2:


Input: intervals = [[5,8,1],[6,7,7],[4,7,3],[9,10,6],[7,8,2],[11,14,3],[3,5,5]]

Output: [1,3,5,6]

Explanation:

You can choose the intervals with indices 1, 3, 5, and 6 with respective weights of 7, 6, 3, and 5.


 
Constraints:


	1 <= intevals.length <= 5 * 104
	intervals[i].length == 3
	intervals[i] = [li, ri, weighti]
	1 <= li <= ri <= 109
	1 <= weighti <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Maximum Score of Non-overlapping Intervals," we need to maximize the total score we can obtain by selecting non-overlapping intervals from a list. Each interval has a start time, an end time, and a score. The challenge is to select the intervals in such a way that no two intervals overlap and the total score of the selected intervals is maximized.

### Approach

1. **Define the Problem**: We have multiple intervals, each characterized by a start time, an end time, and a score. Our goal is to select intervals such that they do not overlap and the sum of their scores is maximized.

2. **Sorting**: The intervals should be sorted based on their end times. This will help us quickly assess which intervals can be chosen without overlapping.

3. **Dynamic Programming with Binary Search**: 
   - We can use a dynamic programming approach, where we maintain an array `dp` where `dp[i]` holds the maximum score we can achieve considering the first `i` intervals.
   - For each interval, we decide whether to include it in our selection. If we do include it, we need to find the last non-overlapping interval (using binary search) to ensure we do not violate the non-overlapping condition.

4. **Updating the DP array**: For each interval `i`, we have two choices:
   - Exclude it: The maximum score is simply `dp[i-1]`.
   - Include it: The maximum score will be the current interval’s score plus the maximum score we can achieve from the last non-overlapping interval.

### Implementation

Here's the C++ code to implement the above approach:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

struct Interval {
    int start;
    int end;
    int score;

    bool operator<(const Interval &other) const {
        return this->end < other.end; // Sort by end time
    }
};

class Solution {
public:
    int maximizeScore(vector<vector<int>>& intervals) {
        vector<Interval> items;
        
        // Convert the input vector to a vector of intervals
        for (const auto& interval : intervals) {
            items.push_back({interval[0], interval[1], interval[2]});
        }

        // Sort intervals based on their end time
        sort(items.begin(), items.end());

        int n = items.size();
        vector<int> dp(n + 1, 0);
        
        // Create a vector of end times for binary search
        vector<int> endTimes(n);
        for (int i = 0; i < n; ++i) {
            endTimes[i] = items[i].end;
        }

        for (int i = 1; i <= n; ++i) {
            // Option 1: not include the current interval
            dp[i] = dp[i - 1];
            // Option 2: include the current interval
            int currentScore = items[i - 1].score;

            // Binary search to find the last non-overlapping interval
            int left = 0, right = i - 1;
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (endTimes[mid] < items[i - 1].start) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            // We need to adjust the left index if it points to an overlapping interval
            if (left < i - 1 && endTimes[left] >= items[i - 1].start) {
                left--;
            }

            int includeCurrentScore = currentScore;
            if (left >= 0) {
                includeCurrentScore += dp[left + 1]; // Include the max score from non-overlapping intervals
            }

            // Update dp table with the maximum score
            dp[i] = max(dp[i], includeCurrentScore);
        }

        return dp[n]; // The last entry contains the maximum score
    }
};
```

### Explanation of the Code
1. **Data Structure**: We defined a structure `Interval` for clarity, which includes `start`, `end`, and `score` of an interval.
2. **Input Preparation**: We convert the input into a more manageable structure (`vector<Interval>`).
3. **Sort Intervals**: We sort the intervals based on their end times to facilitate the dynamic programming step.
4. **Dynamic Programming Table**: We maintain a DP array where each entry `dp[i]` holds the maximum score up to the `i-th` interval.
5. **Binary Search Logic**: Where necessary, we use binary search to efficiently find the last interval that does not overlap with the current interval.
6. **Returning the Result**: Finally, we return `dp[n]`, where `n` is the total number of intervals, indicating the maximum score achievable.

### Time Complexity
The overall time complexity of the solution is O(n log n) due to the sorting of intervals and O(n) for filling the DP table, making it efficient for larger inputs.