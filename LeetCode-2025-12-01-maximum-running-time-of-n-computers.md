# LeetCode Daily – 2025-12-01

## 🧠 Problem #2141 – **Maximum Running Time of N Computers**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-running-time-of-n-computers)

---

### 📝 Problem Description

You have n computers. You are given the integer n and a 0-indexed integer array batteries where the ith battery can run a computer for batteries[i] minutes. You are interested in running all n computers simultaneously using the given batteries.

Initially, you can insert at most one battery into each computer. After that and at any integer time moment, you can remove a battery from a computer and insert another battery any number of times. The inserted battery can be a totally new battery or a battery from another computer. You may assume that the removing and inserting processes take no time.

Note that the batteries cannot be recharged.

Return the maximum number of minutes you can run all the n computers simultaneously.

 
Example 1:


Input: n = 2, batteries = [3,3,3]
Output: 4
Explanation: 
Initially, insert battery 0 into the first computer and battery 1 into the second computer.
After two minutes, remove battery 1 from the second computer and insert battery 2 instead. Note that battery 1 can still run for one minute.
At the end of the third minute, battery 0 is drained, and you need to remove it from the first computer and insert battery 1 instead.
By the end of the fourth minute, battery 1 is also drained, and the first computer is no longer running.
We can run the two computers simultaneously for at most 4 minutes, so we return 4.



Example 2:


Input: n = 2, batteries = [1,1,1,1]
Output: 2
Explanation: 
Initially, insert battery 0 into the first computer and battery 2 into the second computer. 
After one minute, battery 0 and battery 2 are drained so you need to remove them and insert battery 1 into the first computer and battery 3 into the second computer. 
After another minute, battery 1 and battery 3 are also drained so the first and second computers are no longer running.
We can run the two computers simultaneously for at most 2 minutes, so we return 2.


 
Constraints:


	1 <= n <= batteries.length <= 105
	1 <= batteries[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Maximum Running Time of N Computers" problem is about distributing power among a number of computers to maximize their running time. Let's break down the problem first and then look at a C++ solution.

### Problem Understanding

You have:
- `n` computers, each with a different power requirement.
- An initial total power available to distribute evenly among all computers.

You need to maximize the running time of the computers given that:
1. Each computer consumes a certain amount of power per hour.
2. You can only run the computers for as long as you can supply power.

### Input
- An integer `n` representing the number of computers.
- A vector of integers `batteries` where `batteries[i]` represents the power of the `i-th` battery.

### Output
- The maximum time that all computers can run simultaneously.

### Approach

1. **Binary Search**: Since we want to maximize the running time, we can use binary search. We will search for the maximum possible running time `T`.
2. **Checking Feasibility**: For a given time `T`, check if it's possible to power all `n` computers for `T` hours. This is done by calculating the total power required and checking if it's less than or equal to the supplied total power from the batteries.
3. **Total Power Calculation**: For `T` hours, if a computer requires `power[i]` units of power per hour, the total power required for all computers is `n * T`. The power provided by the batteries for `T` hours is calculated by summing `min(battery, T)` for all batteries.

### C++ Solution

```cpp
#include <vector>
#include <numeric>  // for accumulate
#include <algorithm> // for sort

using namespace std;

class Solution {
public:
    long long maxRunTime(int n, vector<int>& batteries) {
        long long left = 0, right = accumulate(batteries.begin(), batteries.end(), 0LL) / n;
        
        while (left < right) {
            long long mid = left + (right - left + 1) / 2; // Middle point
            
            // Calculate the total power supply for mid running time
            long long totalPower = 0;
            for (int battery : batteries) {
                totalPower += min(static_cast<long long>(battery), mid);
            }
            
            // If total power can sustain running for mid hours for n computers
            if (totalPower >= n * mid) {
                left = mid; // mid is possible, so search in the upper half
            } else {
                right = mid - 1; // mid is not possible, search in the lower half
            }
        }
        
        return left; // left will be the maximum running time
    }
};
```

### Explanation of the Code

1. **Binary Search Setup**: We set the search range from `0` to the maximum theoretical running time with total battery power divided evenly by the number of computers.
2. **Power Calculation**: For each potential running time `mid`, we compute how much total power we can gather from the batteries when capped by `mid` (each battery can only provide power equal to its capacity or `mid`, whichever is smaller).
3. **Feasibility Check**: If the amount of power we can gather is at least `n * mid`, it means we can afford `T = mid` hours. If it’s less, we adjust our search downwards.
4. **Result**: Finally, after the search loop, `left` will contain the maximum time.

This solution efficiently checks each potential maximum running time and converges to the best possible value using binary search. This approach ensures that we do not exceed the time complexity of O(m log(max_time)), where `m` is the number of batteries.