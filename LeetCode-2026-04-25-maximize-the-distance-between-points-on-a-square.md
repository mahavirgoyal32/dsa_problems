# LeetCode Daily – 2026-04-25

## 🧠 Problem #3464 – **Maximize the Distance Between Points on a Square**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-the-distance-between-points-on-a-square)

---

### 📝 Problem Description

You are given an integer side, representing the edge length of a square with corners at (0, 0), (0, side), (side, 0), and (side, side) on a Cartesian plane.

You are also given a positive integer k and a 2D integer array points, where points[i] = [xi, yi] represents the coordinate of a point lying on the boundary of the square.

You need to select k elements among points such that the minimum Manhattan distance between any two points is maximized.

Return the maximum possible minimum Manhattan distance between the selected k points.

The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.

 
Example 1:


Input: side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4

Output: 2

Explanation:



Select all four points.


Example 2:


Input: side = 2, points = [[0,0],[1,2],[2,0],[2,2],[2,1]], k = 4

Output: 1

Explanation:



Select the points (0, 0), (2, 0), (2, 2), and (2, 1).


Example 3:


Input: side = 2, points = [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], k = 5

Output: 1

Explanation:



Select the points (0, 0), (0, 1), (0, 2), (1, 2), and (2, 2).


 
Constraints:


	1 <= side <= 109
	4 <= points.length <= min(4 * side, 15 * 103)
	points[i] == [xi, yi]
	The input is generated such that:
	
		points[i] lies on the boundary of the square.
		All points[i] are unique.
	
	
	4 <= k <= min(25, points.length)

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of maximizing the distance between points on a square, we need to understand the geometry of the square and the concept of distance. We will summarize the problem briefly and then discuss a solution with a step-by-step explanation along with the C++ implementation.

### Problem Summary
Given two points on the perimeter of a square, we have to maximize the distance between them. The perimeter of the square can be represented using points labeled from 0 to 3. For any point `a` on the perimeter, we need to find the point `b` such that the distance between `a` and `b` is maximized.

The distance is measured along the perimeter of the square. The perimeter can be visualized as:
- Side 0: From (0, 0) to (1, 0) which corresponds to points [0, 1).
- Side 1: From (1, 0) to (1, 1) which corresponds to points [1, 2).
- Side 2: From (1, 1) to (0, 1) which corresponds to points [2, 3).
- Side 3: From (0, 1) to (0, 0) which corresponds to points [3, 4).

### Understanding Distance
The distance between any two points `a` and `b` on the square's perimeter can be defined as:
1. The direct distance, which is the absolute difference `|b - a|`
2. The wrapping distance, which is the remainder of the entire perimeter minus the direct distance.

Thus, we can compute the effective distance as:
\[ \text{distance} = \min(|b - a|, 4 - |b - a|) \]

### Solution Approach
To maximize the distance:
1. For a fixed point `a`, the points that maximize the distance are those that are halfway around the square.
2. For input values of `a` ranging from `0` to `3`, the maximum distance is always `2`, representing half of the square’s perimeter.

### C++ Implementation
Now, let's see the C++ code that implements this logic:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    double maxDistance(std::vector<int>& colors) {
        int n = colors.size();
        double max_dist = 0.0;
        
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                // We only care about points that have different colors
                if (colors[i] != colors[j]) {
                    double dist = std::min(std::abs(j - i), 4 - std::abs(j - i));
                    max_dist = std::max(max_dist, dist);
                }
            }
        }
        
        return max_dist;
    }
};

int main() {
    Solution solution;
    // Example usage:
    std::vector<int> colors = {0, 1, 0, 1}; // Different colors decorating the points
    double result = solution.maxDistance(colors);
    std::cout << "Maximum distance: " << result << std::endl; // Output will be 2.0
    return 0;
}
```

### Explanation of the Code:
1. **Input Handling**: We take an array of integers called `colors`, where each integer represents the color of the corresponding point on the square's perimeter.
2. **Double Loop**: We iterate through all pairs of points on the square’s perimeter—that is, we look at every combination of points.
3. **Distance Calculation**: For each pair `(i, j)`, we check if they have different colors. If they do, we calculate the distance using the formula provided and check if it's the maximum distance found so far.
4. **Return Value**: Finally, we return the maximum found distance.

### Complexity
The time complexity of this approach is \(O(n^2)\) because we potentially check every pair of points, where \(n\) is the number of input points (colors array size).

This solution should work efficiently within practical constraints for the problem.