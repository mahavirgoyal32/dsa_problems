# LeetCode Daily – 2025-09-28

## 🧠 Problem #976 – **Largest Perimeter Triangle**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/largest-perimeter-triangle)

---

### 📝 Problem Description

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 
Example 1:


Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.


Example 2:


Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.


 
Constraints:


	3 <= nums.length <= 104
	1 <= nums[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Largest Perimeter Triangle" asks us to determine the largest perimeter of a triangle that can be formed from a given list of side lengths. We need to return 0 if it's not possible to form any triangle. 

### Problem Breakdown:
1. **Triangle Inequality Theorem**: To form a triangle with sides \(a\), \(b\), and \(c\) (where \(a \leq b \leq c\)), the following must hold true:
   \[
   a + b > c
   \]
2. **Sorting**: If we sort the array of side lengths in non-decreasing order, we can efficiently check for the triangle condition for every triplet of sides.
3. **Maximize the Perimeter**: To maximize the perimeter, we should check the largest values first after sorting.

### Approach:
1. Sort the array of side lengths in descending order.
2. Traverse through the sorted array and for each triplet of sides, check if they form a triangle using the triangle inequality.
3. If a valid triplet is found, calculate its perimeter and return it immediately because we are checking the largest values first.
4. If no valid triplet is found, return 0.

### C++ Code Solution:
```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int largestPerimeter(std::vector<int>& nums) {
        // Step 1: Sort the array in descending order
        std::sort(nums.begin(), nums.end(), std::greater<int>());
        
        // Step 2: Check for the largest valid triangle
        for (size_t i = 0; i < nums.size() - 2; ++i) {
            // Check if nums[i], nums[i+1], nums[i+2] can form a triangle
            if (nums[i] < nums[i+1] + nums[i+2]) {
                // If they can form a triangle, calculate and return the perimeter
                return nums[i] + nums[i+1] + nums[i+2];
            }
        }
        
        // Step 3: Return 0 if no valid triangle was found
        return 0;
    }
};
```

### Explanation of the Code:
1. **Sorting**: We sort the side lengths in descending order so that the largest values are checked first, optimizing our chances of finding the largest perimeter quickly.
2. **Iterating through triplets**: We iterate through the sorted array and check only adjacent triplets. If the current side is less than the sum of the next two sides, it confirms a valid triangle, and we calculate the perimeter.
3. **Returning the perimeter**: If a valid triangle is found, the sum of the sides is returned immediately.
4. **No valid triangle case**: If the loop finishes without finding a valid triplet, we return 0.

### Time Complexity:
- **Sorting the array** takes \(O(n \log n)\), and the subsequent linear scan takes \(O(n)\), making the total time complexity \(O(n \log n)\).

### Space Complexity:
- The space complexity is \(O(1)\) if we ignore the input storage since we are not using any additional data structures apart from the input array. 

This implementation efficiently determines the largest perimeter of a triangle formed by the given side lengths, adhering to the constraints and properties of triangles.