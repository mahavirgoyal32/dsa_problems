# LeetCode Daily – 2026-11-19

## 🧠 Problem #2567 – **Minimum Score by Changing Two Elements**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-score-by-changing-two-elements)

---

### 📝 Problem Description

You are given an integer array nums.


	The low score of nums is the minimum absolute difference between any two integers.
	The high score of nums is the maximum absolute difference between any two integers.
	The score of nums is the sum of the high and low scores.


Return the minimum score after changing two elements of nums.

 
Example 1:


Input: nums = [1,4,7,8,5]

Output: 3

Explanation:


	Change nums[0] and nums[1] to be 6 so that nums becomes [6,6,7,8,5].
	The low score is the minimum absolute difference: |6 - 6| = 0.
	The high score is the maximum absolute difference: |8 - 5| = 3.
	The sum of high and low score is 3.



Example 2:


Input: nums = [1,4,3]

Output: 0

Explanation:


	Change nums[1] and nums[2] to 1 so that nums becomes [1,1,1].
	The sum of maximum absolute difference and minimum absolute difference is 0.



 
Constraints:


	3 <= nums.length <= 105
	1 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Minimum Score by Changing Two Elements", we need to understand the problem first.

## Problem Understanding
You are given an array of integers `nums` and an integer `k`. The problem requires us to find the minimum possible score of the array after you change any two elements, where the score is defined as the difference between the maximum and minimum values in the array. The goal is to determine the minimum difference that can be achieved by changing two elements to any values you choose.

## Approach
1. **Initial Range Calculation**: Start by calculating the initial maximum (`max_val`) and minimum (`min_val`) values in the array. This will help in understanding the current score which is `max_val - min_val`.

2. **Change Two Elements**: Since we can change two elements, consider changing:
   - The max element downwards to some value less than or equal to the second max.
   - The min element upwards to some value greater than or equal to the second min.

   The key is to figure out how optimally we can decrease `max_val` and increase `min_val`.

3. **Utilizing Sorted List**: By sorting the array, we can easily access:
   - The largest and second largest values (`max_val` and `2nd max`).
   - The smallest and second smallest values (`min_val` and `2nd min`).

4. **Result Calculation**: The minimum score after changing two elements can then be computed as:
   - `new_max = new second maximum` (which could be `nums[n-2]` after change).
   - `new_min = new second minimum` (which could be `nums[1]` after change).
   - Compute the final score as `new_max - new_min`.

5. **Code Implementation**: Let's implement this solution in C++.

### C++ Code
```cpp
#include <vector>
#include <algorithm>
#include <iostream>
#include <climits>

class Solution {
public:
    int minimumScore(std::vector<int>& nums) {
        // Sort the array to easily access min/max values
        std::sort(nums.begin(), nums.end());
        
        int n = nums.size();
        // If there are two or fewer elements, the score can be minimized to 0
        if (n <= 2) {
            return 0;
        }
        
        // The potential new max and min after changing two elements
        int potential_max = nums[n-2]; // 2nd largest value
        int potential_min = nums[1];    // 2nd smallest value
        
        // The minimum score after changing two elements
        return potential_max - potential_min;
    }
};
```

### Explanation of the Code:
- We first sort the input array `nums` to easily find the minimum and maximum values.
- We check if the number of elements is 2 or fewer, in which case we can set both to the same value, thus resulting in a score of 0.
- We then determine `potential_max` as the second largest element and `potential_min` as the second smallest element from the sorted array.
- Finally, we compute and return the difference between these two values, which ensures that we minimize the score after changing two elements.

### Time Complexity
The overall time complexity of this code is O(n log n), which comes from sorting the array. The space complexity is O(1), as we are using only a constant amount of extra space.

This approach effectively solves the problem within the given constraints and is efficient for an array of reasonable size.