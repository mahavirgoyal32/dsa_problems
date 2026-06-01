# LeetCode Daily – 2026-06-01

## 🧠 Problem #2144 – **Minimum Cost of Buying Candies With Discount**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount)

---

### 📝 Problem Description

A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free.

The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought.


	For example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3, they can take the candy with cost 1 for free, but not the candy with cost 4.


Given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy, return the minimum cost of buying all the candies.

 
Example 1:


Input: cost = [1,2,3]
Output: 5
Explanation: We buy the candies with costs 2 and 3, and take the candy with cost 1 for free.
The total cost of buying all candies is 2 + 3 = 5. This is the only way we can buy the candies.
Note that we cannot buy candies with costs 1 and 3, and then take the candy with cost 2 for free.
The cost of the free candy has to be less than or equal to the minimum cost of the purchased candies.


Example 2:


Input: cost = [6,5,7,9,2,2]
Output: 23
Explanation: The way in which we can get the minimum cost is described below:
- Buy candies with costs 9 and 7
- Take the candy with cost 6 for free
- We buy candies with costs 5 and 2
- Take the last remaining candy with cost 2 for free
Hence, the minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.


Example 3:


Input: cost = [5,5]
Output: 10
Explanation: Since there are only 2 candies, we buy both of them. There is not a third candy we can take for free.
Hence, the minimum cost to buy all candies is 5 + 5 = 10.


 
Constraints:


	1 <= cost.length <= 100
	1 <= cost[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "Minimum Cost of Buying Candies With Discount".

### Problem Explanation

The problem states that you have a list of candy prices represented as an array of integers. You want to buy all of the candies, and you can buy them optimally such that you take advantage of discounts. Specifically, if you purchase three candies, the cheapest one is free. The goal is to find the minimum cost of buying all the candies.

### Input and Output

- **Input**: An array of integers `prices` representing the prices of the candies.
- **Output**: An integer representing the minimum cost after considering the discount.

### Approach

To solve this problem, you can follow these steps:

1. **Sort the prices**: Sorting the array of prices will allow us to easily access the three most expensive candies once we start buying.
  
2. **Calculate total cost with discounts**: Iterate through the sorted prices in groups of three. For each group, you will add the two most expensive prices to the total cost (the least expensive in the group will be free).

3. **Handle leftovers**: If there are any leftover prices (less than three), simply add them to the total cost.

### Implementation

Here is how you can implement this approach in C++:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int minimumCost(std::vector<int>& prices) {
        // Sort the prices in descending order
        std::sort(prices.begin(), prices.end(), std::greater<int>());
        
        int totalCost = 0;
        int n = prices.size();
        
        // Iterate through prices in groups of three
        for (int i = 0; i < n; i++) {
            // Add the price if it's not the third candy in the group
            if (i % 3 != 2) {
                totalCost += prices[i];
            }
        }
        
        return totalCost;
    }
};
```

### Explanation of the Code

1. **Sorting**: The `std::sort` function sorts the prices in descending order. This way, the most expensive candies come first, making it easy to apply the discount.

2. **Loop through the prices**: 
   - The loop iterates through the sorted prices, and we check the index using `i % 3`. This helps us skip the third item in every group of three.
   - Every time `i % 3` equals `2`, we do nothing (effectively making it free), and for other indices, we add the price to `totalCost`.

3. **Result**: Finally, we return the computed `totalCost`, which represents the minimum cost of buying all the candies while applying the discount optimally.

### Complexity Analysis

- **Time Complexity**: The sorting step will dominate the time complexity, which is \(O(n \log n)\), where \(n\) is the number of candies.
- **Space Complexity**: We use \(O(1)\) extra space apart from the input array, thus the space complexity is \(O(1)\).

By following this approach, we efficiently calculate the minimum cost of buying candies considering the discount offered when purchasing three or more candies.