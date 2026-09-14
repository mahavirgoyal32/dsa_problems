# LeetCode Daily – 2026-09-14

## 🧠 Problem #836 – **Rectangle Overlap**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rectangle-overlap)

---

### 📝 Problem Description

An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

 
Example 1:
Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
Example 2:
Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false
Example 3:
Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false

 
Constraints:


	rec1.length == 4
	rec2.length == 4
	-109 <= rec1[i], rec2[i] <= 109
	rec1 and rec2 represent a valid rectangle with a non-zero area.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Rectangle Overlap" on LeetCode can be summarized as follows:

You are given two rectangles, each defined by their lower-left and upper-right corners. Each rectangle is represented by four integers:

- `A` represented as `(A.x1, A.y1, A.x2, A.y2)`
- `B` represented as `(B.x1, B.y1, B.x2, B.y2)`

Where `(A.x1, A.y1)` is the bottom-left corner and `(A.x2, A.y2)` is the top-right corner. The task is to determine if the two rectangles overlap.

### Conditions for Non-Overlap:
Two rectangles do not overlap if:
1. One rectangle is to the left of the other.
2. One rectangle is above the other.

Using the above conditions, we specify the conditions for overlapping as:
- Rectangle A is to the left of Rectangle B if `A.x2 <= B.x1`
- Rectangle A is to the right of Rectangle B if `A.x1 >= B.x2`
- Rectangle A is above Rectangle B if `A.y1 >= B.y2`
- Rectangle A is below Rectangle B if `A.y2 <= B.y1`

If any of the above conditions are true, then the rectangles do not overlap.

### C++ Implementation:
Here is the C++ code to solve the problem:

```cpp
class Solution {
public:
    bool isRectangleOverlap(vector<int>& rec1, vector<int>& rec2) {
        // Extract rectangle coordinates
        int x1A = rec1[0], y1A = rec1[1], x2A = rec1[2], y2A = rec1[3];
        int x1B = rec2[0], y1B = rec2[1], x2B = rec2[2], y2B = rec2[3];

        // Check if they do not overlap
        if (x1A >= x2B || x2A <= x1B || y1A >= y2B || y2A <= y1B) {
            return false; // They do not overlap
        }
        
        return true; // They do overlap
    }
};
```

### Explanation:
1. **Input Representation**: The function `isRectangleOverlap` takes two vectors `rec1` and `rec2` representing the corners of the two rectangles.
2. **Extract Coordinates**: The coordinates of rectangles A and B are extracted. Each rectangle is represented by its lower-left and upper-right corners.
3. **Overlap Check**:
   - The checks `x1A >= x2B` and `x2A <= x1B` determine if one rectangle is completely to the left or right of the other.
   - The checks `y1A >= y2B` and `y2A <= y1B` determine if one rectangle is completely above or below the other.
4. **Return Value**: If any of the checks for non-overlap are true, the function returns `false`. Otherwise, it returns `true`, indicating that the rectangles do overlap.

### Complexity:
- **Time Complexity**: O(1) since we are just comparing a fixed number of integers.
- **Space Complexity**: O(1) as we are using a constant amount of space.

This solution is efficient and straightforward, handling basic rectangle overlap detection based on coordinate comparisons.