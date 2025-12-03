# LeetCode Daily – 2025-12-03

## 🧠 Problem #3625 – **Count Number of Trapezoids II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-number-of-trapezoids-ii)

---

### 📝 Problem Description

You are given a 2D integer array points where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.

Return the number of unique trapezoids that can be formed by choosing any four distinct points from points.

A trapezoid is a convex quadrilateral with at least one pair of parallel sides. Two lines are parallel if and only if they have the same slope.

 
Example 1:


Input: points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]

Output: 2

Explanation:

 

There are two distinct ways to pick four points that form a trapezoid:


	The points [-3,2], [2,3], [3,2], [2,-3] form one trapezoid.
	The points [2,3], [3,2], [3,0], [2,-3] form another trapezoid.



Example 2:


Input: points = [[0,0],[1,0],[0,1],[2,1]]

Output: 1

Explanation:



There is only one trapezoid which can be formed.


 
Constraints:


	4 <= points.length <= 500
	&ndash;1000 <= xi, yi <= 1000
	All points are pairwise distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Count Number of Trapezoids II" at LeetCode requires us to count the number of trapezoids that can be formed from a given set of line segments defined by their lengths.

### Problem Analysis

A trapezoid is defined by its sides, and the condition to form a trapezoid using sides of lengths `a`, `b`, `c`, and `d` is defined as:
1. The lengths of any two opposite sides must be equal. For instance:
   - It can either be \( a + b > c \) and \( a + c > b \) and \( b + d > a \) and \( c + d > b \) or similar conditions based on the combinations of sides.

Given an array of integers denoting the different lengths of segments, our task is to count how many distinct trapezoids can be formed by selecting two equal lengths for the bases and any two lengths for the sides.

### Approach

1. **Counting Combinations**:
    - Use a frequency array (or unordered map) to count how many times each length appears since we need pairs of equal lengths.
    
2. **Calculating Possible Trapezoids**:
    - For each unique length, calculate how many ways we can choose two bases. If a length appears \( freq \) times, the number of ways to choose 2 is given by \( C(freq, 2) = \frac{freq \times (freq - 1)}{2} \).
    
3. **Counting Side Combinations**:
    - For other lengths, we need two sides which can be any lengths from the list.
    - The counting of the number of ways to choose these sides involves combinations of two distinct segments.

4. **Loop through combinations**:
    - For any specific base length chosen, iterate through the possible side lengths and count combinations.

### C++ Code Solution

Here's a solution implementing the above approach in C++:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    int countTrapezoids(vector<int>& lengths) {
        unordered_map<int, int> countMap;
        
        // Count occurrences of each length
        for (int length : lengths) {
            countMap[length]++;
        }
        
        int totalTrapezoids = 0;

        // Calculate the number of trapezoids based on pairs of bases
        for (auto& pair1 : countMap) {
            int base1 = pair1.first;
            int count1 = pair1.second;

            if (count1 >= 2) {
                // Count of ways to choose two bases of this length
                int basePairs = count1 * (count1 - 1) / 2;

                // Now count how many lengths can be used for side pairs
                int sideCount = 0;
                for (auto& pair2 : countMap) {
                    if (pair2.first != base1) {
                        sideCount += pair2.second;
                    }
                }
                // Each valid side selected gives tuples of pairs for sides
                totalTrapezoids += basePairs * sideCount;
            }
        }

        return totalTrapezoids;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> lengths = {1, 2, 1, 2, 3}; // Sample input
    int result = solution.countTrapezoids(lengths);
    cout << "Number of trapezoids: " << result << endl; // Output
    return 0;
}
```

### Explanation of the Code

1. **Count Frequencies**: We use `unordered_map` to count how many times each length appears in the given list.
2. **Choose Bases**: We iterate through each unique length and if it appears more than once, we compute the number of ways to pick these lengths as bases.
3. **Choose Sides**: For each base, we calculate the potential sides that can be selected, taking care not to choose the same length again.
4. **Final Count**: The total count of trapezoids is then returned after combining the counts from the base pairs and the viable sides.

This solution efficiently counts the number of trapezoids following the given constraints, ensuring optimal performance.