# LeetCode Daily – 2026-06-02

## 🧠 Problem #3633 – **Earliest Finish Time for Land and Water Rides I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i)

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


	1 <= n, m <= 100
	landStartTime.length == landDuration.length == n
	waterStartTime.length == waterDuration.length == m
	1 <= landStartTime[i], landDuration[i], waterStartTime[j], waterDuration[j] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Earliest Finish Time for Land and Water Rides I", we need to compute the earliest finish time for each ride, given a list of ride tuples. Each tuple contains the start time, duration, and the type of ride (either "land" or "water"). 

### Problem Breakdown:
1. **Input Structure**: Each ride is represented by a tuple: `(start_time, duration, type)`. 
   - Here `start_time` indicates when the ride starts, `duration` indicates how long the ride lasts, and `type` specifies if the ride is land or water.
  
2. **Output Requirement**: We need to calculate the finish time of each ride, defined as:
   \[
   \text{finish_time} = \text{start_time} + \text{duration}
   \]
   and return a vector of finish times corresponding to the rides provided.

### Steps to Solve the Problem:
1. Initialize a vector to store the finish times.
2. Iterate over each ride tuple:
   - Calculate the finish time for each ride.
   - Add it to the finish times vector.
3. Return the vector of finish times.

### C++ Solution:
Here's how we can implement our solution in C++:

```cpp
#include <iostream>
#include <vector>
#include <tuple>

using namespace std;

vector<int> earliestFinishTime(vector<tuple<int, int, string>>& rides) {
    vector<int> finishTimes; // Vector to hold the finish times of rides

    for (const auto& ride : rides) {
        int start_time = get<0>(ride); // Get start time
        int duration = get<1>(ride);    // Get duration
        
        // Calculate finish time
        int finish_time = start_time + duration;
        
        // Store the finish time
        finishTimes.push_back(finish_time);
    }
    
    return finishTimes;
}

int main() {
    // Example rides input
    vector<tuple<int, int, string>> rides = { 
        {0, 5, "land"}, 
        {1, 2, "water"}, 
        {3, 3, "land"} 
    };
    
    vector<int> finishTimes = earliestFinishTime(rides);
    
    // Print the finish times
    for (int time : finishTimes) {
        cout << time << " ";
    }
    
    return 0;
}
```

### Explanation of the Code:
- **Includes and using directive**: Standard C++ libraries for using basic types and functions.
- **Function `earliestFinishTime`**: This function takes a vector of tuples where each tuple represents a ride, calculates its finish time, and returns a vector containing all finish times:
  - It uses `get<index>` to extract elements from the tuple.
  - The finish time is calculated using the formula mentioned above.
- **Main function**: We create a sample vector of rides, call the `earliestFinishTime` function, and print the results.
- **Output**: The calculated finish times are printed in the order corresponding to the input rides.

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the number of rides. We iterate through the list of rides once.
- **Space Complexity**: O(n) for storing the finish times.

This straightforward implementation effectively calculates the earliest finish time for each ride based on the given conditions and outputs them correctly.