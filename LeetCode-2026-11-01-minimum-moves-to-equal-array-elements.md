# LeetCode Daily – 2026-11-01

## 🧠 Problem #453 – **Minimum Moves to Equal Array Elements**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-moves-to-equal-array-elements)

---

### 📝 Problem Description

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment n - 1 elements of the array by 1.

 
Example 1:


Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments two elements):
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]


Example 2:


Input: nums = [1,1,1]
Output: 0


 
Constraints:


	n == nums.length
	1 <= nums.length <= 105
	-109 <= nums[i] <= 109
	The answer is guaranteed to fit in a 32-bit integer.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the minimum moves required to equalize all elements in an array, we can break down the problem logically.

### Problem Explanation

The task requires us to equalize all the elements of a given array by performing the following operation any number of times: choose an element from the array and increment it by 1. Our goal is to achieve this with the minimum number of operations.

### Observations

1. **Relative Moves**: Instead of making all elements equal to the largest element, we can think in terms of making all elements equal to the smallest element because incrementing all elements towards a larger value will always require more moves than decrementing one or several elements down to a smaller value.
2. **Total Moves Calculation**: The minimum moves required to equalize the array can be computed by determining the sum of the differences between each element and the smallest element in that array.

### Steps to Solve

1. **Find the Minimum Element**: Determine the smallest element in the array.
2. **Calculate Moves**: Iterate through the array and sum the differences between each element and this minimum element.

### C++ Implementation

Here is the C++ code to implement this logic:

```cpp
#include <vector>
#include <algorithm> // For std::min_element
#include <numeric>   // For std::accumulate

class Solution {
public:
    int minMoves(std::vector<int>& nums) {
        // Step 1: Find the minimum element in the array
        int minElement = *std::min_element(nums.begin(), nums.end());
        
        // Step 2: Calculate the total number of moves
        int moves = 0;
        for (int num : nums) {
            moves += num - minElement; // Calculate the moves needed to equalize to minElement
        }
        
        return moves; // Return the total moves
    }
};
```

### Explanation of the Code

1. **Find Minimum Element**: We use `std::min_element` to find the minimum value in the array. This helps us determine the target value we'd like all elements to converge to.
2. **Calculate the Moves**: We initialize a `moves` counter to 0. For each element in the array, we find the difference from the minimum element and add this difference to our `moves` counter.
3. **Return the Result**: After iterating through the array and accumulating the differences, we return `moves`, which represents the minimum number of operations needed to equalize the array elements.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the number of elements in the array. We make a single pass to find the minimum and another pass to compute the total moves.
- **Space Complexity**: O(1), since we are using a constant amount of extra space.

This solution efficiently computes the minimum number of moves required to make all array elements equal based on the aforementioned logic.