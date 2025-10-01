# LeetCode Daily – 2025-10-01

## 🧠 Problem #1518 – **Water Bottles**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/water-bottles)

---

### 📝 Problem Description

There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

 
Example 1:


Input: numBottles = 9, numExchange = 3
Output: 13
Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
Number of water bottles you can drink: 9 + 3 + 1 = 13.


Example 2:


Input: numBottles = 15, numExchange = 4
Output: 19
Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
Number of water bottles you can drink: 15 + 3 + 1 = 19.


 
Constraints:


	1 <= numBottles <= 100
	2 <= numExchange <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Water Bottles" can be summarized as follows:

You have `numBottles`, the number of full water bottles you initially have, and `numExchange`, the number of empty bottles you need to exchange for one full bottle. You want to determine the maximum number of water bottles you can drink.

**Problem Explanation:**
1. You begin with `numBottles` full bottles.
2. After drinking all the full bottles, you will have `numBottles` empty bottles.
3. You can exchange some of these empty bottles for new full ones until you cannot exchange anymore, either because you don't have enough empty bottles or no new bottles are available to be exchanged.

The process is iterated:
- Drink the full bottles.
- Count the new empty bottles.
- Check how many new full bottles can be exchanged from the empty bottles.
- Repeat until you can no longer exchange.

**Solution Approach:**
1. Start with the initial full bottles.
2. Iteratively convert empty bottles back to full bottles if possible.
3. Keep a total count of all the bottles drunk during the process.

Below is a C++ solution that implements this logic:

```cpp
class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int totalDrunk = 0; // Total number of bottles drunk
        int emptyBottles = 0; // Number of empty bottles we have
        
        // Continue until we don't have any full bottles to drink
        while (numBottles > 0) {
            // Drink the current full bottles
            totalDrunk += numBottles; // Increment total bottles drunk
            emptyBottles += numBottles; // Add to empty bottles
            
            // Calculate new full bottles we can get by exchanging empty ones
            numBottles = emptyBottles / numExchange; // Get new full bottles from empty ones
            
            // Update empty bottles count
            emptyBottles = emptyBottles % numExchange; // Remaining empty bottles after exchange
        }
        
        return totalDrunk; // Return the total number of bottles drunk
    }
};
```

### Explanation of the Code:
1. **Initialization**: We start by initializing `totalDrunk` to keep track of the total number of bottles drunk, and `emptyBottles` to count the empty bottles we will generate as we consume water.
  
2. **While Loop**: The loop continues as long as there are full bottles:
   - We drink the current `numBottles` which adds to `totalDrunk`.
   - We then update the number of `emptyBottles` by adding `numBottles` (all drunk bottles become empty).
  
3. **Exchanging Bottles**:
   - We calculate how many new full bottles we can get by dividing `emptyBottles` by `numExchange`.
   - The remaining empty bottles that cannot be exchanged are calculated with the modulus operator `%`.

4. **Return Result**: Once there are no more full bottles to drink, we exit the loop and return the total count of bottles consumed.

### Complexity:
- **Time Complexity**: O(log(numBottles)). The loop reduces the number of full bottles in a logarithmic manner with respect to the number of exchanges.
- **Space Complexity**: O(1). We only use a constant amount of space for variables.

This solution is efficient and effectively calculates the total number of bottles drunk, adhering to the exchange rules given.