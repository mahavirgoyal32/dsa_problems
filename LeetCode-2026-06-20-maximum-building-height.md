# LeetCode Daily – 2026-06-20

## 🧠 Problem #1840 – **Maximum Building Height**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-building-height)

---

### 📝 Problem Description

You want to build n new buildings in a city. The new buildings will be built in a line and are labeled from 1 to n.

However, there are city restrictions on the heights of the new buildings:


	The height of each building must be a non-negative integer.
	The height of the first building must be 0.
	The height difference between any two adjacent buildings cannot exceed 1.


Additionally, there are city restrictions on the maximum height of specific buildings. These restrictions are given as a 2D integer array restrictions where restrictions[i] = [idi, maxHeighti] indicates that building idi must have a height less than or equal to maxHeighti.

It is guaranteed that each building will appear at most once in restrictions, and building 1 will not be in restrictions.

Return the maximum possible height of the tallest building.

 
Example 1:


Input: n = 5, restrictions = [[2,1],[4,1]]
Output: 2
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,1,2], and the tallest building has a height of 2.

Example 2:


Input: n = 6, restrictions = []
Output: 5
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,3,4,5], and the tallest building has a height of 5.


Example 3:


Input: n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]
Output: 5
Explanation: The green area in the image indicates the maximum allowed height for each building.
We can build the buildings with heights [0,1,2,3,3,4,4,5,4,3], and the tallest building has a height of 5.


 
Constraints:


	2 <= n <= 109
	0 <= restrictions.length <= min(n - 1, 105)
	2 <= idi <= n
	idi is unique.
	0 <= maxHeighti <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Building Height" on LeetCode involves finding the maximum height to which buildings can be constructed given certain constraints based on the heights of existing buildings and the maximum distance between them. Here’s a step-by-step breakdown of the problem and a C++ solution.

### Problem Explanation:

You have `n` buildings located at certain positions, and each building has a certain height. You are allowed to increase the heights of the buildings, but you must ensure that the following rules are maintained:
1. The heights of the buildings at any two positions should not differ by more than the distance between them.
2. You need to maximize the height of the tallest building after potentially increasing the heights of some buildings.

### Approach:

1. **Understanding the Constraints**: For buildings at positions `p1` and `p2` with heights `h1` and `h2`, the condition can be formulated as:
   -  `|h1 - h2| <= |p1 - p2|`
   This means if `p1` is less than `p2`, then:
   -  `h1 <= h2 + (p2 - p1)` 
   -  `h2 <= h1 + (p2 - p1)`

2. **Processing the Inputs**: The heights of the buildings and their positions can be treated as an array of pairs. We also add two virtual positions at 0 and `d` (where `d` is the maximum position of buildings) to handle the boundary conditions.

3. **Iterative Calculation**: We sort the pair of positions and heights. By iterating through the buildings, we can calculate the maximum possible heights at each position by utilizing the constraints mentioned.

4. **Final Calculation**: Finally, we check the maximum height possible by adjusting both ends of the array properly.

### C++ Solution:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxBuilding(int n, vector<vector<int>>& restrictions) {
        // Add boundaries
        restrictions.push_back({0, 0});
        restrictions.push_back({n, n});
        
        // Sort by position
        sort(restrictions.begin(), restrictions.end());
        
        int m = restrictions.size();
        // First pass: Ensure heights are non-decreasing
        for (int i = 1; i < m; ++i) {
            int heightDiff = restrictions[i][0] - restrictions[i - 1][0];
            restrictions[i][1] = max(restrictions[i][1], restrictions[i - 1][1] + heightDiff);
        }
        
        // Second pass: Ensure heights are non-increasing
        for (int i = m - 2; i >= 0; --i) {
            int heightDiff = restrictions[i + 1][0] - restrictions[i][0];
            restrictions[i][1] = max(restrictions[i][1], restrictions[i + 1][1] - heightDiff);
        }
        
        // Find the maximum possible height
        int maxHeight = 0;
        for (int i = 1; i < m; ++i) {
            int pos1 = restrictions[i - 1][0];
            int height1 = restrictions[i - 1][1];
            int pos2 = restrictions[i][0];
            int height2 = restrictions[i][1];
            
            // The buildings at pos1 and pos2 can be calculated for maximum height
            int currentHeight = (height1 + height2 + (pos2 - pos1)) / 2;
            maxHeight = max(maxHeight, currentHeight);
        }
        
        return maxHeight;
    }
};
```

### Explanation of the Code:

1. **Boundary Handling**: We add two virtual restrictions for position 0 with height 0 and position `n` with height `n` to model our problem correctly. This accounts for heights at both ends.
2. **Sorting**: We sort the restrictions based on positions to ensure that we can effectively apply the increase in heights.
3. **Forward and Backward Pass**: 
   - In the first pass, we ensure that as we move right, the heights are appropriately increased based on the distance between positions.
   - In the second pass, we iterate backward to ensure that moving left does not violate the height constraints.
4. **Calculating Maximum Height**: For each consecutive pair of buildings, we calculate the maximum height they can have using the formula derived from the constraints and keep track of the maximum height found.

This solution efficiently finds the maximum possible building height while adhering to the mentioned conditions, and it runs in O(m log m) time complexity due to the sorting step, where m is the number of restrictions.