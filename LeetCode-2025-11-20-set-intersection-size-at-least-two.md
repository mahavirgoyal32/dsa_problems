# LeetCode Daily – 2025-11-20

## 🧠 Problem #757 – **Set Intersection Size At Least Two**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/set-intersection-size-at-least-two)

---

### 📝 Problem Description

You are given a 2D integer array intervals where intervals[i] = [starti, endi] represents all the integers from starti to endi inclusively.

A containing set is an array nums where each interval from intervals has at least two integers in nums.


	For example, if intervals = [[1,3], [3,7], [8,9]], then [1,2,4,7,8,9] and [2,3,4,8,9] are containing sets.


Return the minimum possible size of a containing set.

 
Example 1:


Input: intervals = [[1,3],[3,7],[8,9]]
Output: 5
Explanation: let nums = [2, 3, 4, 8, 9].
It can be shown that there cannot be any containing array of size 4.


Example 2:


Input: intervals = [[1,3],[1,4],[2,5],[3,5]]
Output: 3
Explanation: let nums = [2, 3, 4].
It can be shown that there cannot be any containing array of size 2.


Example 3:


Input: intervals = [[1,2],[2,3],[2,4],[4,5]]
Output: 5
Explanation: let nums = [1, 2, 3, 4, 5].
It can be shown that there cannot be any containing array of size 4.


 
Constraints:


	1 <= intervals.length <= 3000
	intervals[i].length == 2
	0 <= starti < endi <= 108

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Set Intersection Size At Least Two" involves finding the minimum size of a set \( S \) such that for every interval in a given list of intervals, the intersection of \( S \) with the interval contains at least two elements. We will solve this problem using a greedy approach.

### Problem Explanation

You are given a list of intervals, represented by their start and end points. Your goal is to find a minimum set of integers such that:

- For every interval \((start_i, end_i)\), the intersection of this set with the interval contains at least two integers.

### Steps to Solve the Problem

1. **Sort the Intervals:** Since we need to cover each interval, sorting them helps in deciding the placement of our integers optimally.

2. **Greedily Choose Numbers:** For each interval, check if it is covered by the current set of chosen numbers. If it isn't covered by at least two integers, we add enough numbers from the interval to fulfill the requirement.

3. **Update the Set:** Continue to check each interval and update the set of chosen integers accordingly.

### Implementation

Here's a C++ implementation for the problem:

```cpp
#include <vector>
#include <algorithm>
#include <set>
#include <iostream>

using namespace std;

class Solution {
public:
    int intersectionSizeTwo(vector<vector<int>>& intervals) {
        // Sort intervals first by their end point, and then by their start point (in reverse)
        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[1] == b[1])
                return a[0] > b[0];
            return a[1] < b[1];
        });

        set<int> chosen; // To store the chosen points
        int requiredSize = 0;

        // Traverse through each interval
        for (const auto& interval : intervals) {
            int start = interval[0];
            int end = interval[1];

            // Check how many points are already in the current interval
            vector<int> currentChosen;
            for (int num : chosen) {
                if (start <= num && num <= end) {
                    currentChosen.push_back(num);
                }
            }

            // We need at least 2 points in the current interval
            if (currentChosen.size() < 2) {
                // Add numbers to satisfy the condition
                while (currentChosen.size() < 2) {
                    if (currentChosen.empty() || currentChosen.back() != end) {
                        chosen.insert(end);
                        currentChosen.push_back(end);
                    } 
                    if (currentChosen.size() < 2 && (currentChosen.size() == 1 || currentChosen[0] != end - 1)) {
                        chosen.insert(end - 1);
                        currentChosen.push_back(end - 1);
                    }
                }
            }
        }

        return chosen.size();
    }
};

int main() {
    Solution sol;
    vector<vector<int>> intervals = {{1, 2}, {2, 3}, {2, 5}, {3, 4}};
    cout << sol.intersectionSizeTwo(intervals) << endl; // Output the minimum size of set S
    return 0;
}
```

### Explanation of the Code

1. **Sorting Intervals:** We first sort the intervals by their ending point in ascending order. In case of a tie, we sort by the starting point in descending order. This sorting helps in covering the intervals optimally.

2. **Choosing Integers:** We loop through each interval and check how many of the chosen integers are already within the current interval:
   - If we have fewer than 2 integers in the interval, we need to add enough integers to satisfy the requirement of having at least 2 integers from that interval.
   - We greedily add integers, prioritizing the end of the interval, as this ensures that we can cover subsequent overlapping intervals efficiently.

3. **Set Structure:** Using a `set` to store the chosen points ensures that we have distinct integers and allows us to keep track of the total size of our chosen set easily.

### Complexity
- **Time Complexity:** \( O(n \log n + n) \), due to sorting and the subsequent linear scan.
- **Space Complexity:** \( O(n) \) for storing the chosen integers.

This approach ensures that the solution is optimal while being concise and efficient, addressing the problem requirements thoroughly.