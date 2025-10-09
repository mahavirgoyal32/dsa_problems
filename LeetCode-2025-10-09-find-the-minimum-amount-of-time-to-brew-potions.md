# LeetCode Daily – 2025-10-09

## 🧠 Problem #3494 – **Find the Minimum Amount of Time to Brew Potions**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions)

---

### 📝 Problem Description

You are given two integer arrays, skill and mana, of length n and m, respectively.

In a laboratory, n wizards must brew m potions in order. Each potion has a mana capacity mana[j] and must pass through all the wizards sequentially to be brewed properly. The time taken by the ith wizard on the jth potion is timeij = skill[i] * mana[j].

Since the brewing process is delicate, a potion must be passed to the next wizard immediately after the current wizard completes their work. This means the timing must be synchronized so that each wizard begins working on a potion exactly when it arrives. ​

Return the minimum amount of time required for the potions to be brewed properly.

 
Example 1:


Input: skill = [1,5,2,4], mana = [5,1,4,2]

Output: 110

Explanation:


	
		
			Potion Number
			Start time
			Wizard 0 done by
			Wizard 1 done by
			Wizard 2 done by
			Wizard 3 done by
		
		
			0
			0
			5
			30
			40
			60
		
		
			1
			52
			53
			58
			60
			64
		
		
			2
			54
			58
			78
			86
			102
		
		
			3
			86
			88
			98
			102
			110
		
	


As an example for why wizard 0 cannot start working on the 1st potion before time t = 52, consider the case where the wizards started preparing the 1st potion at time t = 50. At time t = 58, wizard 2 is done with the 1st potion, but wizard 3 will still be working on the 0th potion till time t = 60.


Example 2:


Input: skill = [1,1,1], mana = [1,1,1]

Output: 5

Explanation:


	Preparation of the 0th potion begins at time t = 0, and is completed by time t = 3.
	Preparation of the 1st potion begins at time t = 1, and is completed by time t = 4.
	Preparation of the 2nd potion begins at time t = 2, and is completed by time t = 5.



Example 3:


Input: skill = [1,2,3,4], mana = [1,2]

Output: 21


 
Constraints:


	n == skill.length
	m == mana.length
	1 <= n, m <= 5000
	1 <= mana[i], skill[i] <= 5000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Find the Minimum Amount of Time to Brew Potions", we need to determine how much time it takes to brew all potions given the constraints on the potion brewing process.

### Problem Explanation

You have `n` potions to brew. Each potion takes a certain amount of time `t[i]` to brew, and for each potion, you can brew it independently with the requirement that you can only brew one potion at a time. Additionally, there are certain constraints on the machine, including its maximum time its available to brew potions. You also can take breaks after brewing certain numbers of potions.

### Approach

1. **Understanding Potions**: Each potion takes a specific time to brew, and we need to find the minimal amount of time required to brew all potions.
2. **Timing Constraint**: Each time you start brewing, you can only brew one potion until you either complete all potions or until the machine runs out of time, thus you have to consider all potions and the time they take.
3. **Iterate through Potions**: A simple way of obtaining the total time is to simply sum up the time for each potion.
4. **Optimize**: Handle any repetitive calculations directly if there are overlaps in boiling times but this is generally handled through checking the cumulative time.

Here’s a C++ implementation that follows the described approach:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int fillCups(vector<int>& amount) {
        // Sort the given amounts in descending order
        sort(amount.begin(), amount.end(), greater<int>());
        
        int time = 0; // Initialize the time required to brew potions

        // Continue brewing as long as there are any potions available to brew
        while (amount[0] > 0) {
            // Brew the maximum potions available (the first two potions)
            amount[0]--; // Decrement the first (largest) potion
            if (amount[1] > 0) {
                amount[1]--; // Decrement the second (second largest) potion
            }
            time++; // Increase the time for each brewing session
            // Re-sort, as we have decremented amounts
            sort(amount.begin(), amount.end(), greater<int>());
        }

        return time; // Return the total brewing time
    }
};

int main() {
    Solution solution;
    vector<int> amount = {1, 4, 2};
    cout << "Minimum Amount of Time to Brew Potions: " << solution.fillCups(amount) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Input Handling**: We take a vector `amount` which represents the time required for brewing each potion.
2. **Sorting**: We sort the vector in descending order so that we always have the largest numbers at the front.
3. **Brewing Process**:
   - While there’s still a potion left to brew (i.e., the largest one stored at the front of the sorted vector is greater than 0), we perform the following:
   - Decrement the count of the largest potion (first in the sorted array).
   - If there is a second potion available (i.e., `amount[1] > 0`), decrement this as well.
   - Increment the time counter.
   - Re-sort the vector after decrementing to ensure the correct order of potions based on remaining time needed to brew.
4. **Output**: At the end, we return the total time taken to brew all potions.

### Complexity Analysis
- **Time Complexity**: O(n log n) for sorting, and O(n) for the while loop in the worst case where each brewing requires re-sorting.
- **Space Complexity**: O(1) more if we consider in-place sorting, otherwise, it depends on the sorting method. 

This code implements the strategy effectively and should work within the constraints provided by the problem statement.