# LeetCode Daily – 2026-06-03

## 🧠 Problem #3635 – **Earliest Finish Time for Land and Water Rides II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii)

---

### 📝 Problem Description

You are given two categories of theme park attractions: land rides and water rides.


	Land rides

	
		landStartTime[i] &ndash; the earliest time the ith land ride can be boarded.
		landDuration[i] &ndash; how long the ith land ride lasts.
	
	
	Water rides
	
		waterStartTime[j] &ndash; the earliest time the jth water ride can be boarded.
		waterDuration[j] &ndash; how long the jth water ride lasts.
	
	


A tourist must experience exactly one ride from each category, in either order.


	A ride may be started at its opening time or any later moment.
	If a ride is started at time t, it finishes at time t + duration.
	Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.


Return the earliest possible time at which the tourist can finish both rides.

 
Example 1:


Input: landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]

Output: 9

Explanation:​​​​​​​


	Plan A (land ride 0 &rarr; water ride 0):
	
		Start land ride 0 at time landStartTime[0] = 2. Finish at 2 + landDuration[0] = 6.
		Water ride 0 opens at time waterStartTime[0] = 6. Start immediately at 6, finish at 6 + waterDuration[0] = 9.
	
	
	Plan B (water ride 0 &rarr; land ride 1):
	
		Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
		Land ride 1 opens at landStartTime[1] = 8. Start at time 9, finish at 9 + landDuration[1] = 10.
	
	
	Plan C (land ride 1 &rarr; water ride 0):
	
		Start land ride 1 at time landStartTime[1] = 8. Finish at 8 + landDuration[1] = 9.
		Water ride 0 opened at waterStartTime[0] = 6. Start at time 9, finish at 9 + waterDuration[0] = 12.
	
	
	Plan D (water ride 0 &rarr; land ride 0):
	
		Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
		Land ride 0 opened at landStartTime[0] = 2. Start at time 9, finish at 9 + landDuration[0] = 13.
	
	


Plan A gives the earliest finish time of 9.


Example 2:


Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]

Output: 14

Explanation:​​​​​​​


	Plan A (water ride 0 &rarr; land ride 0):
	
		Start water ride 0 at time waterStartTime[0] = 1. Finish at 1 + waterDuration[0] = 11.
		Land ride 0 opened at landStartTime[0] = 5. Start immediately at 11 and finish at 11 + landDuration[0] = 14.
	
	
	Plan B (land ride 0 &rarr; water ride 0):
	
		Start land ride 0 at time landStartTime[0] = 5. Finish at 5 + landDuration[0] = 8.
		Water ride 0 opened at waterStartTime[0] = 1. Start immediately at 8 and finish at 8 + waterDuration[0] = 18.
	
	


Plan A provides the earliest finish time of 14.​​​​​​​


 
Constraints:


	1 <= n, m <= 5 * 104
	landStartTime.length == landDuration.length == n
	waterStartTime.length == waterDuration.length == m
	1 <= landStartTime[i], landDuration[i], waterStartTime[j], waterDuration[j] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Earliest Finish Time for Land and Water Rides II" asks us to find the earliest time a person can finish riding all the rides given that there are two types of rides: land rides and water rides. Each type of ride is represented as a collection of rides with their start and finish times. The approach we'll take requires careful scheduling to find the earliest time.

To solve this problem, we can make use of a greedy algorithm. Here's a concise outline of the approach:

1. **Input Parsing**: Create structures to hold the times for land and water rides.
2. **Sorting**: Sort the rides based on their finishing times. This helps in efficiently finding the next ride to take that doesn't overlap with the previously taken ride.
3. **Greedy Scheduling**: Iterate through the rides, choosing the ride that finishes the earliest such that it starts after the last selected ride.
4. **Combining Rides**: Keep track of the finishing times for both types of rides and ensure that we switch between land and water rides optimally.

Here’s the full C++ implementation of the solution with explanations:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    // Function to find the earliest finish time
    int earliestFinishTime(vector<vector<int>>& landRides, vector<vector<int>>& waterRides) {
        // Sort land rides based on their finish times
        sort(landRides.begin(), landRides.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[1] < b[1]; // Sort by finish time
        });
        
        // Sort water rides based on their finish times
        sort(waterRides.begin(), waterRides.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[1] < b[1]; // Sort by finish time
        });
        
        int finishTime = 0; // Initial finish time
        int i = 0, j = 0; // Pointers for land and water rides
        int n = landRides.size();
        int m = waterRides.size();
        
        // Alternate between the rides
        while (i < n || j < m) {
            // Determine the next ride to take
            if (i < n && landRides[i][0] >= finishTime) {
                // If we can take a land ride
                finishTime = landRides[i][1]; // Update finish time to this ride's finish time
                i++; // Move to next land ride
            } else if (j < m && waterRides[j][0] >= finishTime) {
                // If we can take a water ride
                finishTime = waterRides[j][1]; // Update finish time to this ride's finish time
                j++; // Move to next water ride
            } else {
                // If no ride can be taken now, we must pick the one that will finish earliest
                int nextLandFinish = (i < n) ? landRides[i][1] : INT_MAX;
                int nextWaterFinish = (j < m) ? waterRides[j][1] : INT_MAX;
                
                if (nextLandFinish < nextWaterFinish) {
                    // Take the land ride
                    finishTime = nextLandFinish;
                    i++; // Move to next land ride
                } else {
                    // Take the water ride
                    finishTime = nextWaterFinish;
                    j++; // Move to next water ride
                }
            }
        }
        
        return finishTime; // Return the earliest finish time
    }
};
```

### Explanation of the Code:
1. **Sorting**: Land and water rides are sorted by their finish times, allowing us to always consider the earliest finishing ride first.
2. **Pointers**: Two pointers `i` and `j` are used to track the current index of the land rides and water rides respectively.
3. **Greedy Selection**: In each iteration:
   - If we can start a land ride after the current `finishTime`, we take it.
   - If not, we check if we can take a water ride.
   - If neither type is available to start after `finishTime`, we look ahead to choose the next ride that finishes the earliest.
4. **Return Value**: Finally, the finish time is returned after all possible rides are scheduled.

This solution efficiently utilizes a greedy approach with sorting principles and provides an O(n log n + m log m) complexity because of the sorting steps.