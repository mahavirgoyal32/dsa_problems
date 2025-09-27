# LeetCode Daily – 2025-09-27

## 🧠 Problem #812 – **Largest Triangle Area**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/largest-triangle-area)

---

### 📝 Problem Description

Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

 
Example 1:


Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2.00000
Explanation: The five points are shown in the above figure. The red triangle is the largest.


Example 2:


Input: points = [[1,0],[0,0],[0,1]]
Output: 0.50000


 
Constraints:


	3 <= points.length <= 50
	-50 <= xi, yi <= 50
	All the given points are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the largest triangle area that can be formed from given points on a 2D plane, we can utilize a simple mathematical formula for the area of a triangle given three vertices. The vertices of the triangle are represented as points in the format \((x_1, y_1)\), \((x_2, y_2)\), and \((x_3, y_3)\).

### Formula for the Area of a Triangle:

The area \( A \) of a triangle defined by three points \((x_1, y_1)\), \((x_2, y_2)\), and \((x_3, y_3)\) can be calculated using the following formula:

\[
A = 0.5 \times |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|
\]

This formula is derived from the determinant of the matrix formed by the coordinates of the triangle. The absolute value ensures that the area is non-negative.

### Approach:

1. Loop through all unique combinations of three points from the given list of points.
2. For each combination, calculate the area using the formula.
3. Keep track of the maximum area encountered during the iterations.

### C++ Implementation:

Here's how we can implement the above approach in C++:

```cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

class Solution {
public:
    double largestTriangleArea(vector<vector<int>>& points) {
        double maxArea = 0.0;

        int n = points.size();
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                for (int k = j + 1; k < n; ++k) {
                    // Extracting the points
                    int x1 = points[i][0], y1 = points[i][1];
                    int x2 = points[j][0], y2 = points[j][1];
                    int x3 = points[k][0], y3 = points[k][1];
                    
                    // Calculating the area using the formula
                    double area = 0.5 * abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
                    
                    // Update maxArea if we found a larger one
                    maxArea = max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> points = {{0,0}, {0,1}, {1,0}, {0,2}, {2,0}};
    cout << "Largest Triangle Area: " << solution.largestTriangleArea(points) << endl;
    return 0;
}
```

### Explanation of Code:

1. **Input**: The input points are passed in as a vector of vectors.
2. **Max Area Initialization**: We initialize `maxArea` to keep track of the maximum area found.
3. **Triple Nested Loops**: We use three nested loops to iterate through all unique combinations of three points.
   - The outer loop (`i`) acts as the first point.
   - The middle loop (`j`) acts as the second point and starts from `i + 1`.
   - The innermost loop (`k`) acts as the third point and starts from `j + 1`.
4. **Area Calculation**: We extract the coordinates of the three points and apply the triangle area formula.
5. **Update Maximum Area**: If the calculated area is larger than the previously stored maximum area, we update `maxArea`.
6. **Return Result**: After the loops complete, the function returns the largest area found.

### Complexity:

- **Time Complexity**: The algorithm runs in O(n^3) since we check all combinations of three points.
- **Space Complexity**: O(1) since we are using a fixed amount of extra space regardless of the input size.

This straightforward brute-force approach is sufficient for this problem considering the constraints typically allow for a manageable number of points, and ensures we find the largest triangle area efficiently.