# LeetCode Daily – 2026-01-12

## 🧠 Problem #1266 – **Minimum Time Visiting All Points**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-time-visiting-all-points)

---

### 📝 Problem Description

On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

You can move according to these rules:


	In 1 second, you can either:

	
		move vertically by one unit,
		move horizontally by one unit, or
		move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
	
	
	You have to visit the points in the same order as they appear in the array.
	You are allowed to pass through points that appear later in the order, but these do not count as visits.


 
Example 1:


Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:


Input: points = [[3,2],[-2,2]]
Output: 5


 
Constraints:


	points.length == n
	1 <= n <= 100
	points[i].length == 2
	-1000 <= points[i][0], points[i][1] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Time Visiting All Points" requires you to determine the minimum time required to visit all given points on a 2D plane, starting from the origin (0, 0). The time taken to move from one point to another is determined by the maximum of the absolute differences in their x-coordinates and y-coordinates. This is equivalent to the Chebyshev distance.

### Problem Breakdown:

Here’s the step-by-step approach to solve the problem:

1. **Understanding Movement**: From one point `(x1, y1)` to another point `(x2, y2)`, the time to reach the second point is calculated as: 
   \[
   \text{time} = \max(|x1 - x2|, |y1 - y2|)
   \]
   This means you can move diagonally, which allows for the simultaneous change of both coordinates.

2. **Iterate Through Points**: Start from the origin `(0, 0)` and move to each point provided in the list. Sequentially calculate the time taken to move to the next point using the above formula.

3. **Accumulate Time**: Add up the times calculated for each transition to get the total minimum time.

### C++ Implementation:

Below is the C++ code that implements the solution:

```cpp
#include <vector>
#include <iostream>
#include <cmath> // for abs function

using namespace std;

class Solution {
public:
    int minTimeToVisitAllPoints(vector<vector<int>>& points) {
        // Starting point (0,0)
        int x1 = 0, y1 = 0;
        int totalTime = 0;
        
        for (const auto& point : points) {
            int x2 = point[0];
            int y2 = point[1];
            
            // Calculate the movement time to the next point using Chebyshev distance
            totalTime += max(abs(x2 - x1), abs(y2 - y1));
            
            // Update the current position to the new point
            x1 = x2;
            y1 = y2;
        }
        
        return totalTime;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> points = {{1, 1}, {3, 4}, {-1, 0}};
    int result = solution.minTimeToVisitAllPoints(points);
    cout << "Minimum time to visit all points: " << result << endl;
    return 0;
}
```

### Explanation of Code:

1. **Vector Iteration**: The code uses a loop to iterate through each point in the 2D vector `points`.

2. **Variable Initialization**: We initialize `x1` and `y1` to `0`, which are used to keep track of the current position. `totalTime` is initialized to `0` to store the sum of all the required times to transition between points.

3. **Calculating Time**:
   - For each point, we calculate the time needed to reach it from the current position by using the maximum of the absolute differences of their coordinates.
   - We then update our current position to the coordinates of the point we just visited.

4. **Return Result**: At the end of the loop, we return `totalTime`, which contains the total minimum time to visit all points.

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the number of points. We traverse the list of points once.
- **Space Complexity**: O(1), since we use a constant amount of space for variables, irrespective of the input size.

This solution effectively calculates the minimum time in a straightforward manner while adhering to the constraints of the problem.