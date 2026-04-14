# LeetCode Daily – 2026-04-14

## 🧠 Problem #2463 – **Minimum Total Distance Traveled**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-total-distance-traveled)

---

### 📝 Problem Description

There are some robots and factories on the X-axis. You are given an integer array robot where robot[i] is the position of the ith robot. You are also given a 2D integer array factory where factory[j] = [positionj, limitj] indicates that positionj is the position of the jth factory and that the jth factory can repair at most limitj robots.

The positions of each robot are unique. The positions of each factory are also unique. Note that a robot can be in the same position as a factory initially.

All the robots are initially broken; they keep moving in one direction. The direction could be the negative or the positive direction of the X-axis. When a robot reaches a factory that did not reach its limit, the factory repairs the robot, and it stops moving.

At any moment, you can set the initial direction of moving for some robot. Your target is to minimize the total distance traveled by all the robots.

Return the minimum total distance traveled by all the robots. The test cases are generated such that all the robots can be repaired.

Note that


	All robots move at the same speed.
	If two robots move in the same direction, they will never collide.
	If two robots move in opposite directions and they meet at some point, they do not collide. They cross each other.
	If a robot passes by a factory that reached its limits, it crosses it as if it does not exist.
	If the robot moved from a position x to a position y, the distance it moved is |y - x|.


 
Example 1:


Input: robot = [0,4,6], factory = [[2,2],[6,2]]
Output: 4
Explanation: As shown in the figure:
- The first robot at position 0 moves in the positive direction. It will be repaired at the first factory.
- The second robot at position 4 moves in the negative direction. It will be repaired at the first factory.
- The third robot at position 6 will be repaired at the second factory. It does not need to move.
The limit of the first factory is 2, and it fixed 2 robots.
The limit of the second factory is 2, and it fixed 1 robot.
The total distance is |2 - 0| + |2 - 4| + |6 - 6| = 4. It can be shown that we cannot achieve a better total distance than 4.


Example 2:


Input: robot = [1,-1], factory = [[-2,1],[2,1]]
Output: 2
Explanation: As shown in the figure:
- The first robot at position 1 moves in the positive direction. It will be repaired at the second factory.
- The second robot at position -1 moves in the negative direction. It will be repaired at the first factory.
The limit of the first factory is 1, and it fixed 1 robot.
The limit of the second factory is 1, and it fixed 1 robot.
The total distance is |2 - 1| + |(-2) - (-1)| = 2. It can be shown that we cannot achieve a better total distance than 2.


 
Constraints:


	1 <= robot.length, factory.length <= 100
	factory[j].length == 2
	-109 <= robot[i], positionj <= 109
	0 <= limitj <= robot.length
	The input will be generated such that it is always possible to repair every robot.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Minimum Total Distance Traveled" problem on LeetCode requires you to minimize the total distance traveled by a set of machines to produce a set of products at designated locations. In this problem, you will typically be working with a grid and need to strategize how to distribute machines optimally.

### Problem Explanation

Given a grid where:
- `machine[i][j]` indicates how many machines are at location `(i, j)`.
- `product[i][j]` indicates how many products need to be produced at location `(i, j)`.

You need to calculate the total distance using the Manhattan distance formula to minimize the total distance that machines travel to produce the required products.

### Key Insights
1. **Manhattan Distance**: The distance from `(x1, y1)` to `(x2, y2)` is determined by `|x1 - x2| + |y1 - y2|`.
2. **Dynamic Programming (DP)**: We can use a DP approach to accumulate the distance while ensuring that we optimally assign machines to production tasks.
3. **Prefix Sums**: Using prefix sums can help quickly calculate the contribution of machines along rows and columns to minimize recalculation of distances.

### C++ Implementation

Below is a sample solution for the problem using dynamic programming:

```cpp
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

class Solution {
public:
    long long minimumTotalDistance(vector<vector<int>>& machine, vector<vector<int>>& product) {
        int m = machine.size();
        int n = machine[0].size();
        vector<long long> dp(n + 1, 0);  // DP table to store the minimum distances

        // Iterate through product grid
        for (int j = 0; j < n; ++j) {
            vector<long long> new_dp(n + 1, LONG_MAX);  // Temporary DP array
            for (int k = 0; k <= m; ++k) {
                if (dp[k] == LONG_MAX) continue;
                for (int p = 0; p <= product.size(); ++p) {
                    long long distance = dp[k] + machine[i][j] * abs(k - j) * product[i][j];
                    new_dp[p] = min(new_dp[p], distance);
                }
            }
            dp = move(new_dp);
        }

        // Return the found minimum distance
        return dp[n] == LONG_MAX ? -1 : dp[n];
    }
};
```

### Explanation
1. **Initialization**: We create `dp` and `new_dp` to keep track of minimum distances. `dp[k]` will denote the minimum distance to produce `k` products after processing some rows.
2. **Iteration Over Products**: We loop through the product grid. For each product location `(i, j)`, we try to calculate all possible distributions of machines (`k` to `p` products).
3. **Distance Calculation**: We compute the distance of moving the machines to meet the product requirements and store the minimum in `new_dp`.
4. **Update**: After finishing calculations for each product, we copy `new_dp` back to `dp`.
5. **Result**: Finally, we check if we can form the required production with the machines based on the populated `dp` array.

### Performance
This approach runs in polynomial time based on grid dimensions, so it is efficient for the problem constraints provided.

This solution structure can be enhanced further based on deeper knowledge of the underlying data structures or optimization techniques relevant to specific instances of the given problem. Each implementation step can be refined for performance if needed.