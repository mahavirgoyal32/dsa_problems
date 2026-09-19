# LeetCode Daily – 2026-09-19

## 🧠 Problem #1401 – **Circle and Rectangle Overlapping**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/circle-and-rectangle-overlapping)

---

### 📝 Problem Description

You are given a circle represented as (radius, xCenter, yCenter) and an axis-aligned rectangle represented as (x1, y1, x2, y2), where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the rectangle.

Return true if the circle and rectangle are overlapped otherwise return false. In other words, check if there is any point (xi, yi) that belongs to the circle and the rectangle at the same time.

 
Example 1:


Input: radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
Output: true
Explanation: Circle and rectangle share the point (1,0).


Example 2:


Input: radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
Output: false


Example 3:


Input: radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
Output: true


 
Constraints:


	1 <= radius <= 2000
	-104 <= xCenter, yCenter <= 104
	-104 <= x1 < x2 <= 104
	-104 <= y1 < y2 <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Circle and Rectangle Overlapping" problem on LeetCode, we need to determine if a circle defined by its center and radius overlaps with a rectangle defined by its lower-left and upper-right corners. 

### Problem Breakdown:

1. **Circle Definition**: 
   - The circle is defined by its center point `(x_center, y_center)` and its radius `radius`.
   
2. **Rectangle Definition**: 
   - The rectangle is defined by two points: its lower-left corner `(x1, y1)` and its upper-right corner `(x2, y2)`.

3. **Overlap Condition**: 
   - The circle and rectangle overlap if the distance from the circle's center to the rectangle is less than or equal to the radius. 
   - To determine this, we can find the closest point on the rectangle to the circle’s center and measure the distance from this point to the circle’s center.

### Steps to Implementation:

1. **Calculate the closest point on the rectangle**: 
   - If the circle's center `x_center` is left of the rectangle's left edge, the closest rectangle point in x-direction will be `x1`.
   - If the circle's center `x_center` is right of the rectangle's right edge, the closest point will be `x2`.
   - If it lies inside the rectangle, the closest point will be `x_center`.

   This logic can be applied similarly for the y-coordinate.

2. **Compute the distance**: 
   - Once we have the closest point `(closestX, closestY)` on the rectangle, we can calculate the squared distance from the circle's center to the point `(closestX, closestY)`.
   - Compare this squared distance to `radius^2` to avoid computing the square root, which is unnecessary for comparison.

### C++ Solution:

Here’s how you can implement the solution in C++:

```cpp
#include <cmath>
using namespace std;

class Solution {
public:
    bool checkOverlap(int x_center, int y_center, int radius, int x1, int y1, int x2, int y2) {
        // Determine the closest point on the rectangle to the circle
        int closestX = clamp(x_center, x1, x2);
        int closestY = clamp(y_center, y1, y2);
        
        // Calculate the squared distance from the circle's center to the closest point
        int dx = x_center - closestX;
        int dy = y_center - closestY;
        
        // Compare squared distance with squared radius to avoid square root computation
        return (dx * dx + dy * dy) <= (radius * radius);
    }
    
private:
    // Clamps val between min and max (inclusive)
    int clamp(int val, int min_val, int max_val) {
        return max(min_val, min(val, max_val));
    }
};
```

### Explanation of the Code:

1. **Clamp Function**: The `clamp` function restricts a value to be within a specified minimum and maximum range. This helps find the closest point on the rectangle.

2. **Main Logic**:
   - First, we calculate the closest point `(closestX, closestY)` on the rectangle using the `clamp` function.
   - Next, we compute the differences `dx` and `dy` between the circle's center and the closest rectangle point.
   - Finally, we check if the squared distance from the circle's center to this closest point is less than or equal to the square of the radius.

### Complexity:
The time complexity for this solution is O(1) since it involves a constant amount of calculations, thereby making it very efficient.

This solution effectively handles all cases of overlapping and non-overlapping scenarios while maintaining clarity and efficiency in the code.