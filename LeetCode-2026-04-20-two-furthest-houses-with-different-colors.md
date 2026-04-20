# LeetCode Daily – 2026-04-20

## 🧠 Problem #2078 – **Two Furthest Houses With Different Colors**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/two-furthest-houses-with-different-colors)

---

### 📝 Problem Description

There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

 
Example 1:


Input: colors = [1,1,1,6,1,1,1]
Output: 3
Explanation: In the above image, color 1 is blue, and color 6 is red.
The furthest two houses with different colors are house 0 and house 3.
House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
Note that houses 3 and 6 can also produce the optimal answer.


Example 2:


Input: colors = [1,8,3,8,3]
Output: 4
Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
The furthest two houses with different colors are house 0 and house 4.
House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.


Example 3:


Input: colors = [0,1]
Output: 1
Explanation: The furthest two houses with different colors are house 0 and house 1.
House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.


 
Constraints:


	n == colors.length
	2 <= n <= 100
	0 <= colors[i] <= 100
	Test data are generated such that at least two houses have different colors.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let me give you an explanation and a C++ solution to the problem "Two Furthest Houses With Different Colors."

### Problem Statement:

You're given an array `houses`, where `houses[i]` represents the color of the `i-th` house. The colors are integers. The goal is to find the maximum distance between two houses that have different colors.

### Key Observations:

1. The maximum distance will always be between the first house of one color and the last house of another color. 
2. Therefore, to solve the problem, you can simply find the color of the first and the last house and check their colors.
3. If the first house and the last house have the same color, you'll need to look for the farthest house of a different color.

### Steps:
1. Identify the color of the first house (`houses[0]`).
2. Identify the color of the last house (`houses[n - 1]`).
3. If color of the first and last house are different, the maximum distance will be `n - 1`.
4. If they are the same, we need to find the farthest house with a different color from either end (start or end).

### C++ Code:
```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int maxDistance(vector<int>& houses) {
        int n = houses.size();
        int firstColor = houses[0];
        int lastColor = houses[n - 1];

        // If colors of the first and last house are different,
        // return the distance directly
        if (firstColor != lastColor) {
            return n - 1;
        }

        // Otherwise, we find the farthest house with a different color
        int left = 0;
        int right = n - 1;

        // Check from the leftmost side
        while (left < n && houses[left] == firstColor) {
            left++;
        }

        // Check from the rightmost side
        while (right >= 0 && houses[right] == firstColor) {
            right--;
        }

        // Compute distances
        int maxDistance = 0;
        if (left < n) { // There's a house with a different color on the left
            maxDistance = max(maxDistance, left); // distance from houses[0] to leftmost different
        }
        if (right >= 0) { // There's a house with a different color on the right
            maxDistance = max(maxDistance, n - 1 - right); // distance from houses[n-1] to rightmost different
        }

        return maxDistance;
    }
};
```

### Explanation of the Code:
- We start by determining the number of houses and identifying the colors of the first and last houses.
- If they are different, we immediately return the maximum distance as `n - 1`.
- If they are the same, we traverse from both ends of the `houses` array to find the first house with a different color:
  - For the left side, we keep increasing the index until we find a different color.
  - For the right side, we keep decreasing the index similarly.
- Finally, we compute the distance based on the indices we found and return the maximum of those distances.

### Complexity:
- **Time Complexity:** O(n), where n is the number of houses, since we may need to traverse the array once.
- **Space Complexity:** O(1), as we are using a constant amount of extra space.

This solution is efficient and straightforward, leveraging the fact that the first and last houses determine the maximal possible distance.