# LeetCode Daily – 2025-12-02

## 🧠 Problem #3623 – **Count Number of Trapezoids I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-number-of-trapezoids-i)

---

### 📝 Problem Description

You are given a 2D integer array points, where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.

A horizontal trapezoid is a convex quadrilateral with at least one pair of horizontal sides (i.e. parallel to the x-axis). Two lines are parallel if and only if they have the same slope.

Return the  number of unique horizontal trapezoids that can be formed by choosing any four distinct points from points.

Since the answer may be very large, return it modulo 109 + 7.

 
Example 1:


Input: points = [[1,0],[2,0],[3,0],[2,2],[3,2]]

Output: 3

Explanation:

  

There are three distinct ways to pick four points that form a horizontal trapezoid:


	Using points [1,0], [2,0], [3,2], and [2,2].
	Using points [2,0], [3,0], [3,2], and [2,2].
	Using points [1,0], [3,0], [3,2], and [2,2].



Example 2:


Input: points = [[0,0],[1,0],[0,1],[2,1]]

Output: 1

Explanation:



There is only one horizontal trapezoid that can be formed.


 
Constraints:


	4 <= points.length <= 105
	&ndash;108 <= xi, yi <= 108
	All points are pairwise distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Count Number of Trapezoids I," we need to implement an efficient algorithm in C++ that counts the number of valid trapezoids that can be formed based on the given conditions. The problem states that we will receive two integer arrays of points representing the x-coordinates of segments with a height of 1, and our goal is to count how many trapezoids can be formed with these segments.

### Problem Understanding

In the problem, trapezoids are determined by two pairs of points:
- If we have an upper base represented by segments `[a1, a2]` and a lower base represented by segments `[b1, b2]`, the condition for a trapezoid is that both segments must have the same slopes.

For example, if you have two heights where \( a1 < b1 \) (upper base is left of lower base), the trapezoids can be formed in such a way that \( a1 \) connects to \( b1 \) and \( a2 \) connects to \( b2 \).

### Steps to Solve the Problem

1. Count the occurrences of each height using a hash map (or unordered map).
2. For each unique height (let's call it `h`):
   - Calculate the number of segments that can be selected from this height.
   - Use combinations to compute how many pairs of segments can be selected.
3. The total number of trapezoids is the sum of the products of the counts of segments at two different heights.

### C++ Implementation

Here is the C++ implementation with explanations:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int countTrapezoids(vector<int>& heights) {
        // Frequency map to count segments at each height
        unordered_map<int, int> heightCount;

        // Count the frequency of each height
        for (int height : heights) {
            heightCount[height]++;
        }

        int totalTrapezoids = 0;

        // Get the distinct heights in a sorted manner
        vector<int> uniqueHeights;
        for (const auto& entry : heightCount) {
            uniqueHeights.push_back(entry.first);
        }

        // Calculate the count of trapezoids
        int n = uniqueHeights.size();

        // Iterate over all pairs of distinct heights
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Get the number of segments at each height
                int count1 = heightCount[uniqueHeights[i]];
                int count2 = heightCount[uniqueHeights[j]];
                // Each combination of height1 and height2 forms a trapezoid
                totalTrapezoids += count1 * count2;
            }
        }

        return totalTrapezoids;
    }
};

int main() {
    Solution solution;
    vector<int> heights = {1, 1, 2, 2, 3, 3}; // Example input
    int result = solution.countTrapezoids(heights);
    cout << "Number of trapezoids: " << result << endl; // Should print result
    return 0;
}
```

### Explanation of the Code

1. **Counting Heights**: We create an unordered map `heightCount` to store how many segments exist for each height in the `heights` vector.

2. **Populating Unique Heights**: We extract unique heights from the map for further processing.

3. **Counting Trapezoids**:
   - We loop over pairs of heights (one representing the upper base and the other the lower base).
   - For each pair, the total number of trapezoids that can be formed using those segments is the product of their counts in the `heightCount` map.

4. **Final Count**: We sum the counts from all pairs to get the total number of trapezoids.

### Complexity
- **Time Complexity**: O(n^2) where n is the number of unique heights, as we are checking every pair of distinct heights in our nested loops.
- **Space Complexity**: O(m) where m is the number of unique heights (we store their counts).

This method ensures that we efficiently count the trapezoids based on the segments provided in the input.