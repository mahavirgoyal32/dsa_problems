# LeetCode Daily – 2025-10-11

## 🧠 Problem #3186 – **Maximum Total Damage With Spell Casting**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-total-damage-with-spell-casting)

---

### 📝 Problem Description

A magician has various spells.

You are given an array power, where each element represents the damage of a spell. Multiple spells can have the same damage value.

It is a known fact that if a magician decides to cast a spell with a damage of power[i], they cannot cast any spell with a damage of power[i] - 2, power[i] - 1, power[i] + 1, or power[i] + 2.

Each spell can be cast only once.

Return the maximum possible total damage that a magician can cast.

 
Example 1:


Input: power = [1,1,3,4]

Output: 6

Explanation:

The maximum possible damage of 6 is produced by casting spells 0, 1, 3 with damage 1, 1, 4.


Example 2:


Input: power = [7,1,6,6]

Output: 13

Explanation:

The maximum possible damage of 13 is produced by casting spells 1, 2, 3 with damage 1, 6, 6.


 
Constraints:


	1 <= power.length <= 105
	1 <= power[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem titled "Maximum Total Damage With Spell Casting" on LeetCode asks us to calculate the maximum damage dealt by casting spells on specific monsters while adhering to certain constraints. Below, I will provide a solution along with a detailed explanation of the approach.

### Problem Understanding

You have two arrays:
1. `damage`: An array where `damage[i]` represents the damage dealt to the i-th monster.
2. `cost`: An array where `cost[i]` indicates the cost of casting a spell on the i-th monster.

You are allowed to cast spells with a total cost not exceeding `k`, and your objective is to maximize the damage done to these monsters.

### Approach

To solve this problem, we can utilize a dynamic programming approach, similar to the "0/1 Knapsack" problem:

1. **Dynamic Programming Array**: We'll use a DP array where `dp[j]` represents the maximum damage we can maximize with a total cost of `j`.
  
2. **Initialization**: Start with a DP array initialized to zero, meaning if no cost is spent, the damage is zero.

3. **Iterate Over Monsters**: For each monster, consider the option of casting a spell on that monster. For each monster's cost and damage, update the DP array from the back to avoid using a monster's damage multiple times for the same spell cast.

4. **Final Result**: After processing all monsters, the maximum achievable damage with a budget of up to `k` will be the maximum value in `dp`.

### C++ Code Implementation

Here’s how you can implement this solution in C++:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxDamage(vector<int>& damage, vector<int>& cost, int k) {
        int n = damage.size();
        vector<int> dp(k + 1, 0); // DP array to track max damage for given costs

        // Iterate over each monster
        for (int i = 0; i < n; ++i) {
            int currentDamage = damage[i];
            int currentCost = cost[i];
            // Update DP array in reverse order
            for (int j = k; j >= currentCost; --j) {
                dp[j] = max(dp[j], dp[j - currentCost] + currentDamage);
            }
        }

        // The answer will be the maximum damage we can achieve with cost up to k
        return *max_element(dp.begin(), dp.end());
    }
};
```

### Explanation of the Code

1. **Initialization**:
   - We create a dynamic programming array `dp` of size `k+1`, initialized to zero. This will store the maximum damage possible for each cost from `0` to `k`.

2. **Processing Each Monster**:
   - We iterate over each monster's attack (i.e., its corresponding damage and cost).
   - For each monster, we process the DP array in reverse (from `k` to `currentCost`). This ensures we only consider each monster's impact on the DP array once for the current iteration.

3. **Update Logic**:
   - For each `j` (which represents the current allowed cost), the formula `dp[j] = max(dp[j], dp[j - currentCost] + currentDamage)` checks:
     - Whether taking the monster (spending its cost) yields a higher damage than the previous maximum stored in `dp[j]`.

4. **Final Output**:
   - We return the maximum value found in the `dp` array, which corresponds to the optimum damage we can achieve without exceeding the total cost of `k`.

### Complexity

- **Time Complexity**: O(n * k), where `n` is the number of monsters and `k` is the maximum allowed cost. This is because we iterate over each monster and update the DP array.
- **Space Complexity**: O(k) for the DP array.

This approach efficiently computes the desired maximum damage while staying within the given constraints!