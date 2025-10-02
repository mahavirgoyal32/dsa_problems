# LeetCode Daily – 2025-10-02

## 🧠 Problem #3100 – **Water Bottles II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/water-bottles-ii)

---

### 📝 Problem Description

You are given two integers numBottles and numExchange.

numBottles represents the number of full water bottles that you initially have. In one operation, you can perform one of the following operations:


	Drink any number of full water bottles turning them into empty bottles.
	Exchange numExchange empty bottles with one full water bottle. Then, increase numExchange by one.


Note that you cannot exchange multiple batches of empty bottles for the same value of numExchange. For example, if numBottles == 3 and numExchange == 1, you cannot exchange 3 empty water bottles for 3 full bottles.

Return the maximum number of water bottles you can drink.

 
Example 1:


Input: numBottles = 13, numExchange = 6
Output: 15
Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.


Example 2:


Input: numBottles = 10, numExchange = 3
Output: 13
Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.


 
Constraints:


	1 <= numBottles <= 100 
	1 <= numExchange <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Here’s a breakdown of how to solve the "Water Bottles II" problem from LeetCode, complete with a C++ solution and explanation.

## Problem Overview

In the "Water Bottles II" problem, we have a certain number of full water bottles and each bottle has a defined capacity. We can drink the water, and we are interested in maximizing the number of liters of water we can drink.

The constraints are:
1. You can drink water from the bottles, and the amount you drink from each bottle is limited to its capacity.
2. You can also refill some of the bottles; however, this requires you to pay for them.
3. The goal is to maximize the total amount of water you can drink.

## Approach

### Dynamic Programming

The problem can be approached using dynamic programming. We will use a DP array where `dp[j]` represents the maximum amount of water that can be consumed when drinking from the first `i` bottles with `j` additional refills.

1. We start by initializing a DP array of size `maxBottles + 1` (where `maxBottles` is the sum of all capacities of the bottles).
2. We iterate through each bottle and update our DP array based on the number of possible refills.
3. For each bottle, we consider both options: not refilling, and using refills wisely to maximize drinking.

### Steps
- Iterate through each bottle while maintaining a DP array for maximum water consumed.
- For each bottle, traverse the DP array backwards to avoid overwriting values before they are used.
- Update the DP values based on whether we decide to refill or not.

Here is how the C++ code looks:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxWater(int numBottles, int numExchange) {
        // Step 1: Create an initial DP array
        std::vector<int> dp(numBottles + 1, 0);
        
        int totalWater = 0;

        // Step 2: Iterate through each bottle
        for (int i = 0; i < numBottles; ++i) {
            totalWater += 1; // Each bottle gives us initially 1 liter of water
            // Traveling backwards to avoid overwriting data
            for (int j = std::min(totalWater, numBottles); j >= 0; --j) {
                if (j > 0) {
                    // Calculate the new possible value by consuming refills
                    dp[j] = std::max(dp[j], dp[j - 1] + 1);
                }
            }
        }
        
        // Step 3: Return the maximum water consumed with available exchanges
        return dp[numExchange];
    }
};
```

## Key Points in the Code
1. **Initialization**: We create a DP array that will store the maximum water possible for each refill count.
2. **Outer Loop**: This loop iterates through the number of bottles.
3. **Inner Loop**: This loop updates our `dp` array in reverse order to prevent using the same bottle multiple times in a calculation.
4. **Returning the Result**: Finally, we return the maximum capacity of water that can be consumed with the given number of exchanges.

## Complexity
- **Time Complexity**: O(`numBottles` * `numExchange`), where `numBottles` is the number of bottles and `numExchange` is the maximum number of allowed bottle exchanges.
- **Space Complexity**: O(`numBottles`), which is used by the DP array.

In summary, the problem is solved using a greedy approach combined with dynamic programming to keep track of the best possible outcomes based on the number of exchanges and the water provided by the bottles.