# LeetCode Daily – 2026-08-16

## 🧠 Problem #2029 – **Stone Game IX**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game-ix)

---

### 📝 Problem Description

Alice and Bob continue their games with stones. There is a row of n stones, and each stone has an associated value. You are given an integer array stones, where stones[i] is the value of the ith stone.

Alice and Bob take turns, with Alice starting first. On each turn, the player may remove any stone from stones. The player who removes a stone loses if the sum of the values of all removed stones is divisible by 3. Bob will win automatically if there are no remaining stones (even if it is Alice&#39;s turn).

Assuming both players play optimally, return true if Alice wins and false if Bob wins.

 
Example 1:


Input: stones = [2,1]
Output: true
Explanation: The game will be played as follows:
- Turn 1: Alice can remove either stone.
- Turn 2: Bob removes the remaining stone. 
The sum of the removed stones is 1 + 2 = 3 and is divisible by 3. Therefore, Bob loses and Alice wins the game.


Example 2:


Input: stones = [2]
Output: false
Explanation: Alice will remove the only stone, and the sum of the values on the removed stones is 2. 
Since all the stones are removed and the sum of values is not divisible by 3, Bob wins the game.


Example 3:


Input: stones = [5,1,2,4,3]
Output: false
Explanation: Bob will always win. One possible way for Bob to win is shown below:
- Turn 1: Alice can remove the second stone with value 1. Sum of removed stones = 1.
- Turn 2: Bob removes the fifth stone with value 3. Sum of removed stones = 1 + 3 = 4.
- Turn 3: Alices removes the fourth stone with value 4. Sum of removed stones = 1 + 3 + 4 = 8.
- Turn 4: Bob removes the third stone with value 2. Sum of removed stones = 1 + 3 + 4 + 2 = 10.
- Turn 5: Alice removes the first stone with value 5. Sum of removed stones = 1 + 3 + 4 + 2 + 5 = 15.
Alice loses the game because the sum of the removed stones (15) is divisible by 3. Bob wins the game.


 
Constraints:


	1 <= stones.length <= 105
	1 <= stones[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem "Stone Game IX".

### Problem Explanation

In "Stone Game IX", you are given an array of integers `stones` representing the number of stones in piles. Two players take turns to remove stones from the piles according to the following rules:

1. On their turn, a player can remove stones from any pile.
2. The player cannot remove stones from a pile such that the total number of stones removed leaves the sum of the stones removed modulo 3 equal to 0.
3. The goal is to determine if the first player can win given both players play optimally.

### Key Insight

To understand who can win, we need to consider the modulo 3 result of the total number of stones removed. The game is affected by the modulo 3 counts of the stones. 

1. **Count the number of stones with the following mod values:**
   - Count how many stones have a modulo value of 0 (`count0`).
   - Count how many stones have a modulo value of 1 (`count1`).
   - Count how many stones have a modulo value of 2 (`count2`).

2. **Decision Making:**
   - If `count0` is greater than 0 and both `count1` and `count2` are greater than 0, the player who cannot play will leave behind the disadvantage when the turn ends.
   - If only `count0` exists, the game can pivot on removing stones from the piles with values 1 and 2. 
   - With `count1` and `count2`, the player’s decisions will determine if they reach a winning or losing state.

3. Depending on the counts, we can construct our conditions for a win.

### Implementation in C++

Here's a C++ implementation that follows the explained strategy:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    bool stoneGameIX(std::vector<int>& stones) {
        int count0 = 0, count1 = 0, count2 = 0;

        // Count the stones based on their values modulo 3
        for (int stone : stones) {
            if (stone % 3 == 0) {
                count0++;
            } else if (stone % 3 == 1) {
                count1++;
            } else {
                count2++;
            }
        }

        // Player 1 can win if:
        // - They can play when both count1 and count2 are non-zero and balance each other out.
        // - They can also win if the opposing count is less than or equal to 1 for the last possible turn.
        if (count1 == 0) {
            return count2 > 2; // If there are no stones to remove modulo 1,
        }
        if (count2 == 0) {
            return count1 > 2; // If there are no stones to remove modulo 2,
        }
        
        // If both count1 and count2 exist, but we only have "count0" as part
        return (count1 > count2 + 1);
    }
};

int main() {
    Solution solution;
    std::vector<int> stones = {2, 1, 2, 3}; // Example input
    std::cout << (solution.stoneGameIX(stones) ? "First Player Wins" : "Second Player Wins") << std::endl;
    return 0;
}
```

### Explanation of the Code
1. **Counting Modulo Occurrences:** We loop through the `stones` array to count how many stones have a value of `0`, `1`, or `2` when taken modulo `3`.

2. **Winning Conditions:**
   - We check specific conditions to determine if the first player can secure a win based on the counts of `count1`, `count2`, and `count0`.

3. **Final Output:** The solution checks the conditions and returns true or false depending on whether the first player can win.

### Complexity

- Time Complexity: O(n), where n is the length of the `stones` array. We only need a single pass through the array to count the stones.
- Space Complexity: O(1), since we are using a constant amount of space for the counters. 

You can run this code with different inputs to test its correctness!