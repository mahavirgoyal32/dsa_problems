# LeetCode Daily – 2026-11-10

## 🧠 Problem #3693 – **Climbing Stairs II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/climbing-stairs-ii)

---

### 📝 Problem Description

You are climbing a staircase with n + 1 steps, numbered from 0 to n.

You are also given a 1-indexed integer array costs of length n, where costs[i] is the cost of step i.

From step i, you can jump only to step i + 1, i + 2, or i + 3. The cost of jumping from step i to step j is defined as: costs[j] + (j - i)2

You start from step 0 with cost = 0.

Return the minimum total cost to reach step n.

 
Example 1:


Input: n = 4, costs = [1,2,3,4]

Output: 13

Explanation:

One optimal path is 0 &rarr; 1 &rarr; 2 &rarr; 4


	
		
			Jump
			Cost Calculation
			Cost
		
	
	
		
			0 &rarr; 1
			costs[1] + (1 - 0)2 = 1 + 1
			2
		
		
			1 &rarr; 2
			costs[2] + (2 - 1)2 = 2 + 1
			3
		
		
			2 &rarr; 4
			costs[4] + (4 - 2)2 = 4 + 4
			8
		
	


Thus, the minimum total cost is 2 + 3 + 8 = 13


Example 2:


Input: n = 4, costs = [5,1,6,2]

Output: 11

Explanation:

One optimal path is 0 &rarr; 2 &rarr; 4


	
		
			Jump
			Cost Calculation
			Cost
		
	
	
		
			0 &rarr; 2
			costs[2] + (2 - 0)2 = 1 + 4
			5
		
		
			2 &rarr; 4
			costs[4] + (4 - 2)2 = 2 + 4
			6
		
	


Thus, the minimum total cost is 5 + 6 = 11


Example 3:


Input: n = 3, costs = [9,8,3]

Output: 12

Explanation:

The optimal path is 0 &rarr; 3 with total cost = costs[3] + (3 - 0)2 = 3 + 9 = 12


 
Constraints:


	1 <= n == costs.length <= 105​​​​​​​
	1 <= costs[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Climbing Stairs II" on LeetCode is about finding the number of distinct ways to climb a staircase with `n` steps, where you can take 1 to `k` steps at a time. 

### Problem Explanation

You are given an integer `n` (the total number of steps) and an integer `k` (the maximum number of steps you can take in a single jump). You need to determine the total number of distinct ways to reach the nth step. The problem is primarily a variation of the Fibonacci sequence where instead of just taking 1 or 2 steps, you can take from 1 to `k` steps at a time.

### Dynamic Programming Approach

To solve this, we can use dynamic programming. We can maintain a DP array where `dp[i]` represents the number of distinct ways to reach the `i`th step.

The recurrence relation can be established as follows:

- To reach step `i`, you can come from:
  - step `i-1` (taking 1 step)
  - step `i-2` (taking 2 steps)
  - ...
  - step `i-k` (taking k steps)

Thus, the relation will be:
```cpp
dp[i] = dp[i-1] + dp[i-2] + ... + dp[i-k]
```

For the base cases:
- `dp[0]` = 1 (there's one way to stay at the ground level).
- `dp[1]` = 1 (only one way to get to the first step).

To efficiently calculate the sum for the last `k` steps, we can maintain a rolling window sum.

### C++ Implementation 

Here is the C++ code that implements the above logic:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int climbStairs(int n, int k) {
        if (n == 0) return 1; // Only one way to ground
        if (n == 1) return 1; // Only one way to step 1

        vector<int> dp(n + 1, 0);
        dp[0] = 1; // Base case
        dp[1] = 1; // Base case

        // Initialize the sum of the first step
        int windowSum = dp[0] + dp[1];

        for (int i = 2; i <= n; ++i) {
            // Calculate the current dp[i]
            dp[i] = windowSum;

            // Update the window sum
            windowSum += dp[i]; // Include the new dp[i]
            if (i >= k) {
                windowSum -= dp[i - k]; // Exclude the dp[i - k] which is out of the window
            }
        }

        return dp[n];
    }
};
```

### Explanation of the Code

1. **Base Cases**: The first two indices `dp[0]` and `dp[1]` are set to `1`, indicating that there is one way to stay on the ground and one way to reach the first step.

2. **Loop for Each Step**: We loop from `2` to `n`. For each step `i`, calculate the number of ways to reach it using the `windowSum` variable which keeps track of the total ways to reach the previous `k` steps.

3. **Window Sum Update**: 
   - We add the current `dp[i]` to the `windowSum`.
   - If `i` is greater than or equal to `k`, we subtract `dp[i-k]` from the `windowSum` to maintain the size of the sum.

4. **Return Result**: Finally, return `dp[n]` which contains the number of distinct ways to reach the nth step.

This implementation is efficient and runs in O(n) time with O(n) space complexity due to the `dp` array. The window sum helps us to avoid recalculating sums for overlapping segments of steps, keeping the computation optimal.