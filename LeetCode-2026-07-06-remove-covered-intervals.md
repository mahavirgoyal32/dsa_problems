# LeetCode Daily – 2026-07-06

## 🧠 Problem #1288 – **Remove Covered Intervals**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-covered-intervals)

---

### 📝 Problem Description

Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

Return the number of remaining intervals.

 
Example 1:


Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.


Example 2:


Input: intervals = [[1,4],[2,3]]
Output: 1


 
Constraints:


	1 <= intervals.length <= 1000
	intervals[i].length == 2
	0 <= li < ri <= 105
	All the given intervals are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of "Remove Covered Intervals", we need to understand the definition of covered intervals. An interval \([a, b]\) is said to be covered by another interval \([c, d]\) if \(c \leq a\) and \(b \leq d\). The task is to remove all intervals that are covered by at least one other interval and return the count of remaining intervals.

### Approach

1. **Sorting Intervals**: 
   - First, sort the intervals. We will sort by the start of each interval. If two intervals have the same start, we will sort by the end in descending order. This ensures that when we iterate through the sorted intervals, if one interval starts at the same point as another but ends later, it will appear first in the sorted list.
  
2. **Counting Non-Covered Intervals**: 
   - After sorting, we can iterate through the intervals, maintaining a variable to keep track of the maximum end we've seen so far. If the end of the current interval is greater than the maximum end we've seen, it means this interval is not covered by any previous interval. We increment our count of non-covered intervals and update the maximum end.

3. **Final Count**: 
   - The count at the end of the iteration will be the number of remaining intervals that aren't covered by any other interval.

### C++ Code Implementation

Here’s how you can implement this approach in C++:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        // Sorting intervals - first by start (ascending), then by end (descending)
        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] == b[0] ? a[1] > b[1] : a[0] < b[0];
        });
        
        int count = 0; // Count of non-covered intervals
        int maxEnd = 0; // The end of the last added interval
        
        for (const auto& interval : intervals) {
            // If the end of the current interval is greater than the maxEnd
            // it is not covered by any previous interval
            if (interval[1] > maxEnd) {
                count++;
                maxEnd = interval[1]; // Update the maxEnd to current interval's end
            }
        }
        
        return count; // Return count of intervals that are not covered
    }
};
```

### Explanation of the Code

1. **Sorting the Intervals**:
    - We use `std::sort` with a custom comparator to sort the intervals first by their starting point. When the starting points are equal, we sort by their ending point in descending order. This setup helps us manage which intervals get covered appropriately.
  
2. **Iterating Through Intervals**:
    - A loop traverses through each interval after sorting.
    - If the end of the current interval is greater than `maxEnd`, it indicates that this interval is not covered, and we increment `count`. We then update `maxEnd` to be the end of this interval.

3. **Result**:
    - Finally, the function returns the `count` of non-covered intervals.

This algorithm runs in \(O(n \log n)\) time due to sorting, where \(n\) is the number of intervals. The subsequent iteration is \(O(n)\), leading to an efficient solution suitable for medium-difficulty problems.