# LeetCode Daily – 2026-11-03

## 🧠 Problem #3736 – **Minimum Moves to Equal Array Elements III**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii)

---

### 📝 Problem Description

You are given an integer array nums.

In one move, you may increase the value of any single element nums[i] by 1.

Return the minimum total number of moves required so that all elements in nums become equal.

 
Example 1:


Input: nums = [2,1,3]

Output: 3

Explanation:

To make all elements equal:


	Increase nums[0] = 2 by 1 to make it 3.
	Increase nums[1] = 1 by 1 to make it 2.
	Increase nums[1] = 2 by 1 to make it 3.


Now, all elements of nums are equal to 3. The minimum total moves is 3.


Example 2:


Input: nums = [4,4,5]

Output: 2

Explanation:

To make all elements equal:


	Increase nums[0] = 4 by 1 to make it 5.
	Increase nums[1] = 4 by 1 to make it 5.


Now, all elements of nums are equal to 5. The minimum total moves is 2.


 
Constraints:


	1 <= nums.length <= 100
	1 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Moves to Equal Array Elements III" on LeetCode, we need to find the minimum number of moves required to make all elements of an array equal. In one move, you can increment or decrement any element by 1. 

### Problem Understanding:
You want to minimize the total number of moves to make all elements of the array equal. The optimal way to do this is to convert every element in the array to the median of the array. This works because the median minimizes the sum of absolute deviations from the center.

### Steps to Solve:
1. **Sort the Array**: Sorting helps easily retrieve the median.
2. **Calculate the Median**: The median is the middle value in a sorted list. If the list is even, either of the two middle values can be the target.
3. **Calculate Moves**: For every element in the array, calculate the moves needed to convert it to the median and accumulate these moves.

### C++ Implementation:
Here’s how we can implement this in C++:

```cpp
#include <vector>
#include <algorithm>
#include <numeric>
#include <cmath>

class Solution {
public:
    int minMoves2(std::vector<int>& nums) {
        // Step 1: Sort the array to find the median
        std::sort(nums.begin(), nums.end());
        
        // Step 2: Find the median
        int n = nums.size();
        int median = nums[n / 2]; // For both odd and even, this is a valid median
        
        // Step 3: Calculate the total moves required
        int moves = 0;
        for (int num : nums) {
            moves += std::abs(num - median); // Count the moves to reach the median
        }
        
        return moves; // Return the total moves
    }
};
```

### Explanation:
1. **Sorting the Array**: We first sort the input array. The time complexity for sorting is O(n log n).
2. **Finding the Median**: We find the median which is located at the index `n/2`. For both odd and even numbers of elements, this index represents the optimal value to minimize moves.
3. **Calculating Moves**: We iterate through the sorted array and calculate the absolute difference from the median for each element and accumulate these differences to get the total number of moves.

### Example:
For example, consider an array `nums = [1, 2, 3]`:
1. After sorting: `[1, 2, 3]`
2. The median is `2`.
3. Moves to reach `2`: `|1 - 2| + |2 - 2| + |3 - 2|` which equals `1 + 0 + 1 = 2`.

### Complexity Analysis:
- **Time Complexity**: O(n log n) due to sorting.
- **Space Complexity**: O(1) if we just count moves, O(n) if we consider the space used for sorting, which is normally optimized to use in-place sorting.

This approach efficiently minimizes the number of moves needed to make all elements in the array equal.