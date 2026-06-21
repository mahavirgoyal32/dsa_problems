# LeetCode Daily – 2026-06-21

## 🧠 Problem #1833 – **Maximum Ice Cream Bars**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-ice-cream-bars)

---

### 📝 Problem Description

It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

Note: The boy can buy the ice cream bars in any order.

Return the maximum number of ice cream bars the boy can buy with coins coins.

You must solve the problem by counting sort.

 
Example 1:


Input: costs = [1,3,2,4,1], coins = 7
Output: 4
Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.


Example 2:


Input: costs = [10,6,8,7,7,8], coins = 5
Output: 0
Explanation: The boy cannot afford any of the ice cream bars.


Example 3:


Input: costs = [1,6,3,1,2,5], coins = 20
Output: 6
Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.


 
Constraints:


	costs.length == n
	1 <= n <= 105
	1 <= costs[i] <= 105
	1 <= coins <= 108

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's discuss the problem "Maximum Ice Cream Bars" from LeetCode. The problem can be summarized as follows:

### Problem Description

You are given an integer array `cost` where `cost[i]` is the price of the `i`-th ice cream bar, and an integer `coins` representing the total amount of coins you have. Your goal is to maximize the number of ice cream bars you can buy without exceeding the number of coins you have.

### Example

- Input: `cost = [1,3,2,4,1]`, `coins = 7`
- Output: `4`
- Explanation: You can buy ice cream bars with costs `[1, 1, 2, 3]` for a total cost of `1 + 1 + 2 + 3 = 7`, which means you can buy a maximum of 4 ice cream bars.

### Approach

To solve this problem, we can follow these general steps:

1. **Sort the cost array**: This allows us to always consider the cheapest ice cream bars first, maximizing the number we can buy with our given coins.
2. **Iterate through the sorted list**: Keep a running total of the number of coins spent and the number of ice cream bars purchased. If adding the cost of the next ice cream bar exceeds the number of coins, we stop.

### Implementation

Here’s how to implement the solution in C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxIceCream(vector<int>& cost, int coins) {
        // Step 1: Sort the cost array
        sort(cost.begin(), cost.end());
        
        int count = 0; // To count the number of ice cream bars purchased
        int totalCost = 0; // To track the total cost spent
        
        // Step 2: Buy ice cream bars
        for (int c : cost) {
            if (totalCost + c > coins) {
                break; // Stop if the next ice cream bar can't be afforded
            }
            totalCost += c; // Add the cost of the ice cream bar
            count++; // Increment the number of bars purchased
        }
        
        return count; // Return the total number of ice cream bars purchased
    }
};

int main() {
    Solution sol;
    vector<int> cost = {1, 3, 2, 4, 1};
    int coins = 7;
    cout << sol.maxIceCream(cost, coins) << endl; // Output: 4
    return 0;
}
```

### Explanation of the Code

- **Sorting**: We start by sorting the `cost` array, which allows us to efficiently assess the cheapest ice cream bars first.
- **Counting Purchases**: Using a `for` loop, we iterate through the sorted costs. 
  - We maintain a `totalCost` to keep track of how much we have spent so far.
  - For each ice cream bar cost `c`, we check if adding it to `totalCost` would exceed `coins`. If it does, we break the loop.
  - If it does not exceed, we add the cost of the current ice cream bar to `totalCost` and increment our `count` of purchased ice cream bars.
- **Return the Result**: After the loop concludes, we return the count of ice cream bars that have been purchased.

### Complexity Analysis

- **Time Complexity**: O(n log n) for sorting the cost array.
- **Space Complexity**: O(1) if we disregard the input array, as we’re using a fixed number of extra variables.

That's it! This approach efficiently finds the maximum number of ice cream bars you can buy given your constraints.