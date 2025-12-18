# LeetCode Daily – 2025-12-18

## 🧠 Problem #3652 – **Best Time to Buy and Sell Stock using Strategy**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-using-strategy)

---

### 📝 Problem Description

You are given two integer arrays prices and strategy, where:


	prices[i] is the price of a given stock on the ith day.
	strategy[i] represents a trading action on the ith day, where:
	
		-1 indicates buying one unit of the stock.
		0 indicates holding the stock.
		1 indicates selling one unit of the stock.
	
	


You are also given an even integer k, and may perform at most one modification to strategy. A modification consists of:


	Selecting exactly k consecutive elements in strategy.
	Set the first k / 2 elements to 0 (hold).
	Set the last k / 2 elements to 1 (sell).


The profit is defined as the sum of strategy[i] * prices[i] across all days.

Return the maximum possible profit you can achieve.

Note: There are no constraints on budget or stock ownership, so all buy and sell operations are feasible regardless of past actions.

 
Example 1:


Input: prices = [4,2,8], strategy = [-1,0,1], k = 2

Output: 10

Explanation:


	
		
			Modification
			Strategy
			Profit Calculation
			Profit
		
	
	
		
			Original
			[-1, 0, 1]
			(-1 &times; 4) + (0 &times; 2) + (1 &times; 8) = -4 + 0 + 8
			4
		
		
			Modify [0, 1]
			[0, 1, 1]
			(0 &times; 4) + (1 &times; 2) + (1 &times; 8) = 0 + 2 + 8
			10
		
		
			Modify [1, 2]
			[-1, 0, 1]
			(-1 &times; 4) + (0 &times; 2) + (1 &times; 8) = -4 + 0 + 8
			4
		
	


Thus, the maximum possible profit is 10, which is achieved by modifying the subarray [0, 1]​​​​​​​.


Example 2:


Input: prices = [5,4,3], strategy = [1,1,0], k = 2

Output: 9

Explanation:



	
		
			Modification
			Strategy
			Profit Calculation
			Profit
		
	
	
		
			Original
			[1, 1, 0]
			(1 &times; 5) + (1 &times; 4) + (0 &times; 3) = 5 + 4 + 0
			9
		
		
			Modify [0, 1]
			[0, 1, 0]
			(0 &times; 5) + (1 &times; 4) + (0 &times; 3) = 0 + 4 + 0
			4
		
		
			Modify [1, 2]
			[1, 0, 1]
			(1 &times; 5) + (0 &times; 4) + (1 &times; 3) = 5 + 0 + 3
			8
		
	


Thus, the maximum possible profit is 9, which is achieved without any modification.



 
Constraints:


	2 <= prices.length == strategy.length <= 105
	1 <= prices[i] <= 105
	-1 <= strategy[i] <= 1
	2 <= k <= prices.length
	k is even

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Best Time to Buy and Sell Stock" (specifically, the version asking for a strategy) typically involves finding the maximum profit one can achieve from buying and selling stocks, given a list of prices where each index represents the price of the stock on that day. In this variation, we assume that we are allowed to perform multiple transactions.

### Problem Description:
The key feature of this problem is that you can buy and sell an unlimited number of times but cannot hold onto stocks (i.e., after selling, you can immediately buy again). The goal is to maximize the profit by determining the optimal times to buy and sell.

### Approach:
1. Traverse through the list of stock prices.
2. Whenever there is a rise in stock price from one day to the next (i.e., `prices[i] > prices[i - 1]`), add the difference to the profit. This captures the idea of buying on the day the price dips and selling when it rises.

By summing up these differences, you can capture all potential profits from the price fluctuations.

### Complexity:
- **Time Complexity**: O(n), where n is the number of days/prices since we need to traverse the list once.
- **Space Complexity**: O(1) since we are using only a few variables to track profit.

### C++ Solution:
```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profit = 0;

        // Iterate through the prices
        for (size_t i = 1; i < prices.size(); ++i) {
            // If today's price is higher than yesterday's
            if (prices[i] > prices[i - 1]) {
                // Add the profit from selling today after buying yesterday
                profit += prices[i] - prices[i - 1];
            }
        }

        return profit;  // Return total profit
    }
};
```

### Explanation of the Code:
1. **Initialization**: Start with a `profit` variable initialized to zero.
2. **Loop through Prices**: From the second day (index 1) to the last day, compare today's price (`prices[i]`) to yesterday's price (`prices[i - 1]`).
3. **Profit Calculation**: If today's price is greater than yesterday's:
    - Add the difference (`prices[i] - prices[i - 1]`) to the total `profit`. This simulates buying yesterday and selling today.
4. **Return**: Once the loop is complete, return the accumulated profit.

This greedy strategy effectively captures all profitable transactions by always buying before a rise and selling at the peak, leading to the maximized profit from allowed multiple transactions.