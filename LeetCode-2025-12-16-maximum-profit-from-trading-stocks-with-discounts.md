# LeetCode Daily – 2025-12-16

## 🧠 Problem #3562 – **Maximum Profit from Trading Stocks with Discounts**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-profit-from-trading-stocks-with-discounts)

---

### 📝 Problem Description

You are given an integer n, representing the number of employees in a company. Each employee is assigned a unique ID from 1 to n, and employee 1 is the CEO. You are given two 1-based integer arrays, present and future, each of length n, where:


	present[i] represents the current price at which the ith employee can buy a stock today.
	future[i] represents the expected price at which the ith employee can sell the stock tomorrow.


The company&#39;s hierarchy is represented by a 2D integer array hierarchy, where hierarchy[i] = [ui, vi] means that employee ui is the direct boss of employee vi.

Additionally, you have an integer budget representing the total funds available for investment.

However, the company has a discount policy: if an employee&#39;s direct boss purchases their own stock, then the employee can buy their stock at half the original price (floor(present[v] / 2)).

Return the maximum profit that can be achieved without exceeding the given budget.

Note:


	You may buy each stock at most once.
	You cannot use any profit earned from future stock prices to fund additional investments and must buy only from budget.


 
Example 1:


Input: n = 2, present = [1,2], future = [4,3], hierarchy = [[1,2]], budget = 3

Output: 5

Explanation:




	Employee 1 buys the stock at price 1 and earns a profit of 4 - 1 = 3.
	Since Employee 1 is the direct boss of Employee 2, Employee 2 gets a discounted price of floor(2 / 2) = 1.
	Employee 2 buys the stock at price 1 and earns a profit of 3 - 1 = 2.
	The total buying cost is 1 + 1 = 2 <= budget. Thus, the maximum total profit achieved is 3 + 2 = 5.



Example 2:


Input: n = 2, present = [3,4], future = [5,8], hierarchy = [[1,2]], budget = 4

Output: 4

Explanation:




	Employee 2 buys the stock at price 4 and earns a profit of 8 - 4 = 4.
	Since both employees cannot buy together, the maximum profit is 4.



Example 3:


Input: n = 3, present = [4,6,8], future = [7,9,11], hierarchy = [[1,2],[1,3]], budget = 10

Output: 10

Explanation:




	Employee 1 buys the stock at price 4 and earns a profit of 7 - 4 = 3.
	Employee 3 would get a discounted price of floor(8 / 2) = 4 and earns a profit of 11 - 4 = 7.
	Employee 1 and Employee 3 buy their stocks at a total cost of 4 + 4 = 8 <= budget. Thus, the maximum total profit achieved is 3 + 7 = 10.



Example 4:


Input: n = 3, present = [5,2,3], future = [8,5,6], hierarchy = [[1,2],[2,3]], budget = 7

Output: 12

Explanation:




	Employee 1 buys the stock at price 5 and earns a profit of 8 - 5 = 3.
	Employee 2 would get a discounted price of floor(2 / 2) = 1 and earns a profit of 5 - 1 = 4.
	Employee 3 would get a discounted price of floor(3 / 2) = 1 and earns a profit of 6 - 1 = 5.
	The total cost becomes 5 + 1 + 1 = 7 <= budget. Thus, the maximum total profit achieved is 3 + 4 + 5 = 12.



 
Constraints:


	1 <= n <= 160
	present.length, future.length == n
	1 <= present[i], future[i] <= 50
	hierarchy.length == n - 1
	hierarchy[i] == [ui, vi]
	1 <= ui, vi <= n
	ui != vi
	1 <= budget <= 160
	There are no duplicate edges.
	Employee 1 is the direct or indirect boss of every employee.
	The input graph hierarchy is guaranteed to have no cycles.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Maximum Profit from Trading Stocks with Discounts" is about maximizing the profits from trading stocks, given certain constraints regarding purchase prices and discounts. We'll provide a solution in C++ and explain it in detail.

### Problem Breakdown

You are given:
- An array prices where `prices[i]` is the price of the stock on day `i`.
- An integer `discount` which indicates how much you will get off the price if you decide to purchase the stock on that day.

Your goal is to sell the stock at any later day and maximize your profit.

### Approach

To solve this problem, we can use a dynamic programming approach. Here's the rationale:

1. **Initialization**: We maintain a variable `max_profit` to track the maximum profit we can achieve.

2. **Two Scenarios**:
   - Buying the stock at a discounted price.
   - Not buying the stock on certain days.

3. **Dynamic Programming Array**:
   - We need to maintain the maximum price we could have sold the stock for up until the current day.

### Steps

1. Traverse through each day, calculating the potential price at which you would be buying the stock after applying the discount.
2. Keep track of the maximum purchasing price you could have if you bought the stock on a prior day.
3. Update the maximum profit accordingly.

### C++ Solution

Here’s how this can be implemented in C++:

```cpp
#include <vector>
#include <algorithm> // For std::max
#include <iostream>

using namespace std;

class Solution {
public:
    int maximumProfit(vector<int>& prices, int discount) {
        int max_profit = 0;
        int n = prices.size();
        
        // Initialize max_sale_price which corresponds to the maximum sale price seen so far
        int max_sale_price = 0;

        for (int i = 0; i < n; ++i) {
            // Calculate the discounted buying price for today
            int discounted_price = prices[i] - discount;

            // Maintain the maximum price at which we could sell the stock at any day
            max_sale_price = max(max_sale_price, prices[i]);

            // Calculate potential profit if we buy stock today at the discounted price
            max_profit = max(max_profit, max_sale_price - discounted_price);
        }
        
        return max_profit;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> prices = {1, 4, 3, 5, 6}; // Sample prices
    int discount = 1;
    cout << "Maximum Profit: " << solution.maximumProfit(prices, discount) << endl;
    return 0;
}
```

### Explanation of the Code

- We define a class `Solution` which contains the method `maximumProfit`.
- We initialize `max_profit` and `max_sale_price` to keep track of the maximum profit and the maximum prices we can sell the stock for.
- We iterate through `prices`, for each price:
  - Calculate the discounted price if we bought the stock on that day.
  - Update `max_sale_price` with the maximum price up to that day.
  - Compute the current potential profit (`max_sale_price - discounted_price`) and update `max_profit` accordingly.
- Finally, we return `max_profit`.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the number of days/prices.
- **Space Complexity**: O(1), as we use a constant amount of extra space.

This solution efficiently calculates the maximum profit possible by considering both the discounted price and the best sale price recorded so far, adhering to the constraints given in the problem.