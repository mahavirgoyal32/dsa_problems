# LeetCode Daily – 2025-10-08

## 🧠 Problem #2300 – **Successful Pairs of Spells and Potions**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/successful-pairs-of-spells-and-potions)

---

### 📝 Problem Description

You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

 
Example 1:


Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.


Example 2:


Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
Thus, [2,0,2] is returned.


 
Constraints:


	n == spells.length
	m == potions.length
	1 <= n, m <= 105
	1 <= spells[i], potions[i] <= 105
	1 <= success <= 1010

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the problem "Successful Pairs of Spells and Potions" from LeetCode and then I'll provide you with a C++ solution along with an explanation.

### Problem Description
You are given two integer arrays `spells` and `potions`. Each spell has a power level, and each potion has a power level. A spell and a potion can be combined to create a successful pairing if the product of the spell's power and the potion's power is greater than or equal to a given threshold `success`. You need to determine, for each spell, how many potions are successful pairs with it.

### Inputs
- `spells`: A vector of integers representing the power levels of the spells.
- `potions`: A vector of integers representing the power levels of the potions.
- `success`: An integer representing the threshold for a successful pair.

### Output
- A vector of integers where the `i-th` element represents the number of successful potion pairs for the `i-th` spell.

### Solution Approach
To solve this problem efficiently:
1. **Sort the potions:** By sorting the potions array, we can use binary search to quickly count how many potions can form a successful pair with a given spell.
2. **Binary Search:** For each spell, calculate the minimum required potion power to meet or exceed the success threshold using the formula: 
   \[
   \text{min\_required\_potion} = \lceil \frac{\text{success}}{\text{spell}} \rceil
   \]
   Using binary search, we can find the index of the first potion that meets or exceeds this requirement.
3. **Count:** The number of successful pairs for that spell can then be found by taking the size of the potion array and subtracting the index of the first successful potion.

### C++ Implementation

Now, let's dive into the code that implements the above logic:

```cpp
#include <vector>
#include <algorithm>
#include <cmath> // For ceil function

class Solution {
public:
    std::vector<int> successfulPairs(std::vector<int>& spells, std::vector<int>& potions, int success) {
        // Sort the potions array for binary search
        std::sort(potions.begin(), potions.end());
        int n = potions.size(); // size of potions
        std::vector<int> result; // Result vector to store successful pairs count

        for (int spell : spells) {
            // Calculate minimum required potion power
            int min_required_potion = (success + spell - 1) / spell; // Equivalent to ceil(success / spell)
            
            // Finding the lower bound index of the required potion power
            auto it = std::lower_bound(potions.begin(), potions.end(), min_required_potion);
            
            // Number of successful pairs is the count of potions >= min_required_potion
            int successful_count = n - (it - potions.begin());
            result.push_back(successful_count);
        }

        return result;
    }
};
```

### Explanation of the Code:
1. **Sorting**: The `potions` vector is sorted to allow for efficient binary searching.
2. **Loop through spells**: For each `spell`, calculate the minimum potion power needed using integer math to avoid floating-point operations.
3. **Binary Search (lower_bound)**: The `std::lower_bound` function is used to find the first potion that meets or exceeds the `min_required_potion`. This returns an iterator pointing to the first element that is not less than `min_required_potion`.
4. **Counting Pairs**: The difference between the size of the potion vector and the index returned by `lower_bound` gives the number of successful potions for that particular spell.
5. **Output**: Finally, store the results in the `result` vector and return it.

### Complexity
- Time complexity: \(O(m \log n + m)\) where \(m\) is the number of spells and \(n\) is the number of potions. The sorting step takes \(O(n \log n)\) and each spell check takes \(O(\log n)\).
- Space complexity: \(O(1)\) for additional storage if you exclude the input and output.

This solution is efficient and should perform well within the problem constraints.