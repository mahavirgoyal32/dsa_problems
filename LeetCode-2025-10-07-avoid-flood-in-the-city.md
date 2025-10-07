# LeetCode Daily – 2025-10-07

## 🧠 Problem #1488 – **Avoid Flood in The City**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/avoid-flood-in-the-city)

---

### 📝 Problem Description

Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water. If it rains over a lake that is full of water, there will be a flood. Your goal is to avoid floods in any lake.

Given an integer array rains where:


	rains[i] > 0 means there will be rains over the rains[i] lake.
	rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.


Return an array ans where:


	ans.length == rains.length
	ans[i] == -1 if rains[i] > 0.
	ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.


If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.

Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes.

 
Example 1:


Input: rains = [1,2,3,4]
Output: [-1,-1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day full lakes are [1,2,3]
After the fourth day full lakes are [1,2,3,4]
There&#39;s no day to dry any lake and there is no flood in any lake.


Example 2:


Input: rains = [1,2,0,0,2,1]
Output: [-1,-1,2,1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day, we dry lake 2. Full lakes are [1]
After the fourth day, we dry lake 1. There is no full lakes.
After the fifth day, full lakes are [2].
After the sixth day, full lakes are [1,2].
It is easy that this scenario is flood-free. [-1,-1,1,2,-1,-1] is another acceptable scenario.


Example 3:


Input: rains = [1,2,0,1,2]
Output: []
Explanation: After the second day, full lakes are  [1,2]. We have to dry one lake in the third day.
After that, it will rain over lakes [1,2]. It&#39;s easy to prove that no matter which lake you choose to dry in the 3rd day, the other one will flood.


 
Constraints:


	1 <= rains.length <= 105
	0 <= rains[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Avoid Flood in The City" is a medium-level problem on LeetCode that involves simulating water storage in a series of lakes (or locations) and ensuring that flooding does not occur.

### Problem Statement

You have `n` lakes, indexed from `0` to `n - 1`, and a list `rains` of length `n` representing the rainfall events. Each element `rains[i]` indicates one of the following scenarios:

1. `rains[i] == 0` means that it is a dry day, and you have the option to put water in one of the lakes.
2. `rains[i] > 0` means that lake `rains[i] - 1` receives water.

If a lake receives water on a day, it will overflow if it has received water on two or more distinct days. To avoid overflow, you can choose to dry one lake on a `0` day, provided that lake has received water on a previous day.

### Objective

Your goal is to return a list of length `n` where:
- For `rains[i] > 0`, the corresponding entry indicates the lake that got flooded.
- For `rains[i] == 0`, the corresponding entry indicates which lake you chose to dry on that day or `1` for no drying.

### Approach

1. Use a hash set to keep track of lakes that have been flooded.
2. Use a priority queue to keep track of which lakes to dry on a dry day (`0` day). This ensures that we dry the lake that has received water the earliest, minimizing the risk of flooding.
3. Loop through the `rains` array:
   - If it rains on a lake, check whether it’s already flooded. If yes, return an empty list (as it would overflow). If no, mark the lake as flooded.
   - If it’s a dry day, dry the lake with the earliest water reception from the priority queue. If no such lake exists, just add `1` to indicate no drying.
4. At the end, return the resulting list.

### Implementation in C++

Here's the C++ implementation of the above logic:

```cpp
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<int> avoidFlood(vector<int>& rains) {
        int n = rains.size();
        vector<int> result(n, 1); // by default, consider drying no lakes on dry days.
        unordered_set<int> floodedLakes; // to keep track of flooded lakes
        priority_queue<int, vector<int>, greater<int>> dryDays; // to store the days when rain is 0
        unordered_map<int, int> lakeDay; // last day each lake received rain

        for (int day = 0; day < n; ++day) {
            if (rains[day] > 0) {
                int lake = rains[day];

                // If the lake is flooded already, return empty
                if (floodedLakes.count(lake)) {
                    return {}; // overflow
                }

                // Mark this lake as flooded
                floodedLakes.insert(lake);
                lakeDay[lake] = day; // update last day this lake got rain

                // If there are any dry days, we should consider drying a lake
                if (!dryDays.empty()) {
                    int dryDay = dryDays.top(); // get the earliest dry day
                    dryDays.pop();
                    result[dryDay] = lake; // we chose to dry `lake` on `dryDay`
                }
            } else {
                // It is a dry day
                dryDays.push(day); // record that we have a dry day option
            }
        }

        // Fill the 0 entries in result for dry days without any drying action
        for (int dryDay : dryDays) {
            result[dryDay] = 1; // no lake to dry
        }

        return result;
    }
};
```

### Explanation of the Code

- We maintain a result vector initialized to `1` (indicating no lake being dried).
- We use a set `floodedLakes` to keep track of which lakes have received rainfall to quickly determine if a lake will overflow.
- We use a priority queue `dryDays` to efficiently manage which dry days are available for drying lakes.
- We process each day according to whether it rains or is dry, maintaining consistent checks for flooding conditions.

### Complexity Analysis

- **Time Complexity:** O(n log n) due to operations on the priority queue.
- **Space Complexity:** O(n) for the storage of flooded lakes and dry days.

This solution effectively ensures that flooding conditions are avoided while allowing for maximum flexibility on dry days.