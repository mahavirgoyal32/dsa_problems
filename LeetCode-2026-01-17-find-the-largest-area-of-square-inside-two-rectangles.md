# LeetCode Daily – 2026-01-17

## 🧠 Problem #3047 – **Find the Largest Area of Square Inside Two Rectangles**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles)

---

### 📝 Problem Description

There exist n rectangles in a 2D plane with edges parallel to the x and y axis. You are given two 2D integer arrays bottomLeft and topRight where bottomLeft[i] = [a_i, b_i] and topRight[i] = [c_i, d_i] represent the bottom-left and top-right coordinates of the ith rectangle, respectively.

You need to find the maximum area of a square that can fit inside the intersecting region of at least two rectangles. Return 0 if such a square does not exist.

 
Example 1:

Input: bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]

Output: 1

Explanation:

A square with side length 1 can fit inside either the intersecting region of rectangles 0 and 1 or the intersecting region of rectangles 1 and 2. Hence the maximum area is 1. It can be shown that a square with a greater side length can not fit inside any intersecting region of two rectangles.

Example 2:

Input: bottomLeft = [[1,1],[1,3],[1,5]], topRight = [[5,5],[5,7],[5,9]]

Output: 4

Explanation:

A square with side length 2 can fit inside either the intersecting region of rectangles 0 and 1 or the intersecting region of rectangles 1 and 2. Hence the maximum area is 2 * 2 = 4. It can be shown that a square with a greater side length can not fit inside any intersecting region of two rectangles.

Example 3:
  

Input: bottomLeft = [[1,1],[2,2],[1,2]], topRight = [[3,3],[4,4],[3,4]]

Output: 1

Explanation:

A square with side length 1 can fit inside the intersecting region of any two rectangles. Also, no larger square can, so the maximum area is 1. Note that the region can be formed by the intersection of more than 2 rectangles.

Example 4:
  

Input: bottomLeft = [[1,1],[3,3],[3,1]], topRight = [[2,2],[4,4],[4,2]]

Output: 0

Explanation:

No pair of rectangles intersect, hence, the answer is 0.

 
Constraints:


	n == bottomLeft.length == topRight.length
	2 <= n <= 103
	bottomLeft[i].length == topRight[i].length == 2
	1 <= bottomLeft[i][0], bottomLeft[i][1] <= 107
	1 <= topRight[i][0], topRight[i][1] <= 107
	bottomLeft[i][0] < topRight[i][0]
	bottomLeft[i][1] < topRight[i][1]

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem at hand is to find the largest area of a square that can fit entirely within the overlapping region of two rectangles defined by their bottom-left and top-right corners.

## Problem Breakdown

Given two rectangles:
1. Rectangle 1 defined by bottom-left corner \((x_1, y_1)\) and top-right corner \((x_2, y_2)\).
2. Rectangle 2 defined by bottom-left corner \((x_3, y_3)\) and top-right corner \((x_4, y_4)\).

To find the largest square that fits within the overlapping area, we must first determine the bounds of the overlap:
- The overlapping rectangle will have coordinates:
  - Bottom-left corner: \((\max(x_1, x_3), \max(y_1, y_3))\)
  - Top-right corner: \((\min(x_2, x_4), \min(y_2, y_4))\)

The width of the overlapping rectangle can be obtained from:
- Width = \(\min(x_2, x_4) - \max(x_1, x_3)\)

The height can similarly be calculated as:
- Height = \(\min(y_2, y_4) - \max(y_1, y_3)\)

The largest square that can fit inside this overlapping area will have a side equal to the smaller of the width and height of the overlap. Therefore, the area of this largest square is:
- Area = \( \text{side}^2\)

## Implementation in C++

Here is the C++ function that follows this logic:

```cpp
#include <algorithm> // For std::min and std::max

class Solution {
public:
    int maxSquareArea(std::vector<int>& rect1, std::vector<int>& rect2) {
        // Extract coordinates from rect1
        int x1 = rect1[0], y1 = rect1[1], x2 = rect1[2], y2 = rect1[3];
        // Extract coordinates from rect2
        int x3 = rect2[0], y3 = rect2[1], x4 = rect2[2], y4 = rect2[3];
        
        // Find the bottom left and top right coordinates of the overlapping rectangle
        int overlapX1 = std::max(x1, x3);
        int overlapY1 = std::max(y1, y3);
        int overlapX2 = std::min(x2, x4);
        int overlapY2 = std::min(y2, y4);
        
        // Calculate the width and height of the overlapping area
        int width = overlapX2 - overlapX1;
        int height = overlapY2 - overlapY1;
        
        // If there is no overlap, the output should be 0
        if (width <= 0 || height <= 0) {
            return 0;
        }
        
        // The side of the largest square that can fit inside the overlap
        int side = std::min(width, height);
        // Return the area of the square
        return side * side;
    }
};
```

### Explanation of the Code

1. We extract the coordinates of the two rectangles from the input vectors.
2. We calculate the coordinates of the overlapping rectangle using `std::max` for the bottom-left corner and `std::min` for the top-right corner.
3. We then compute the dimensions of the overlapping area.
4. If there's no overlap (either dimension is non-positive), we return \(0\).
5. Finally, we find the side of the largest square that can fit inside the overlap by taking the minimum of the calculated width and height, and we return the area by squaring this side length.

This solution is efficient, as it operates in constant time \(O(1)\), and is straightforward once we understand the overlap logic.