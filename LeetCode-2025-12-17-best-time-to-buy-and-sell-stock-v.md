# LeetCode Daily – 2025-12-17

## 🧠 Problem #3573 – **Best Time to Buy and Sell Stock V**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-v)

---

### 📝 Problem Description

You are given an integer array prices where prices[i] is the price of a stock in dollars on the ith day, and an integer k.

You are allowed to make at most k transactions, where each transaction can be either of the following:


	
	Normal transaction: Buy on day i, then sell on a later day j where i < j. You profit prices[j] - prices[i].
	
	
	Short selling transaction: Sell on day i, then buy back on a later day j where i < j. You profit prices[i] - prices[j].
	


Note that you must complete each transaction before starting another. Additionally, you can't buy or sell on the same day you are selling or buying back as part of a previous transaction.

Return the maximum total profit you can earn by making at most k transactions.

 
Example 1:


Input: prices = [1,7,9,8,2], k = 2

Output: 14

Explanation:
We can make $14 of profit through 2 transactions:


	A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9.
	A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.



Example 2:


Input: prices = [12,16,19,19,8,1,19,13,9], k = 3

Output: 36

Explanation:
We can make $36 of profit through 3 transactions:


	A normal transaction: buy the stock on day 0 for $12 then sell it on day 2 for $19.
	A short selling transaction: sell the stock on day 3 for $19 then buy back on day 4 for $8.
	A normal transaction: buy the stock on day 5 for $1 then sell it on day 6 for $19.



 
Constraints:


	2 <= prices.length <= 103
	1 <= prices[i] <= 109
	1 <= k <= prices.length / 2

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's dive into the LeetCode problem titled "Best Time to Buy and Sell Stock V". In this problem, we need to maximize our profit by buying and selling stock with a constraint. The constraint is that after selling a stock, we must wait for `fee` transactions before we can buy again.

### Problem Explanation
You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day, and an integer `fee` that represents the transaction fee for each buy/sell. The goal is to determine the maximum profit you can achieve by making as many transactions (buy and sell) as you want, while paying the transaction fee after each sale.

To solve this problem, we can use dynamic programming, maintaining two states:
1. `cash`: The maximum profit we can have if we do not own any stock on that day.
2. `hold`: The maximum profit we can have if we own stock on that day.

### Approach
1. Initialize two variables: `cash` (which starts at 0, because if we don't sell anything, our profit is 0) and `hold` (which starts at a very negative value, as owning a stock means we've bought it at some price).
2. Loop over each price in `prices`:
   - Update `cash` to be the maximum of itself or `hold + prices[i] - fee` (this indicates that we sell stock today).
   - Update `hold` to be the maximum of itself or `cash - prices[i]` (this indicates that we buy stock today).
3. After processing all prices, `cash` will contain the maximum profit we can achieve without holding any stock.

### Implementation
Here's how the code looks in C++:

```cpp
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        // Initialize cash and hold
        int cash = 0; // Maximum profit when not holding stock
        int hold = -prices[0]; // Maximum profit when holding stock
        
        for (int price : prices) {
            // Update cash: max of previous cash or selling today
            cash = max(cash, hold + price - fee);
            // Update hold: max of previous hold or buying today
            hold = max(hold, cash - price);
        }
        
        return cash; // Maximum profit achievable
    }
};

int main() {
    Solution solution;
    vector<int> prices = {1, 3, 2, 8, 4, 9};
    int fee = 2;
    cout << "Maximum profit: " << solution.maxProfit(prices, fee) << endl; // Should output 8
    return 0;
}
```

### Explanation of the Code
1. **Initialization**: We initialize `cash` to 0 because there’s no profit before any transactions. The `hold` is initialized to `-prices[0]` to simulate buying the first stock.
  
2. **Loop through prices**: For each price:
   - Update the `cash` by considering either selling the stock we hold (which would add profit) after paying the fee or keeping the existing cash.
   - Update the `hold` by either keeping the current hold or buying the stock at the current price which would take from our cash.

3. **Return Result**: Finally, return the value in `cash`, since we want to know the maximum profit we can have without holding any stocks.

### Complexity
- **Time Complexity**: O(n), where n is the number of days (length of the `prices` array), since we are iterating through the array once.
- **Space Complexity**: O(1), since we are using only a constant amount of space for our variables.

This method efficiently computes the maximum profit we can achieve while adhering to the transaction fees, making it optimal for this problem.