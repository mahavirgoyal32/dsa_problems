# LeetCode Daily – 2026-11-02

## 🧠 Problem #462 – **Minimum Moves to Equal Array Elements II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii)

---

### 📝 Problem Description

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

Test cases are designed so that the answer will fit in a 32-bit integer.

 
Example 1:


Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]


Example 2:


Input: nums = [1,10,2,9]
Output: 16


 
Constraints:


	n == nums.length
	1 <= nums.length <= 105
	-109 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Minimum Moves to Equal Array Elements II" problem, we need to minimize the number of moves required to make all elements in an array equal. In this case, a move is defined as incrementing or decrementing an element of the array by 1.

### Understanding the Problem
Given an array of integers, the task is to find the minimum number of moves required to make all elements in the array equal to the same value. The optimal strategy involves finding a target value that minimizes the total moves. 

### Key Observations
1. If we think about the median of the array:
   - The median minimizes the sum of absolute differences, which translates to our moves.
   - Moving all elements to the median will give us the minimum number of moves because it balances the numbers around the center.

### Steps to Approach:
1. Sort the array.
2. Find the median of the sorted array.
3. Calculate the total moves required to make all elements equal to the median.

### Implementation
Let’s implement this step-by-step in C++.

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int minMoves2(std::vector<int>& nums) {
        // Step 1: Sort the array
        std::sort(nums.begin(), nums.end());
        
        // Step 2: Find the median
        int n = nums.size();
        int median = nums[n / 2];  // this works correctly for both odd and even sizes
        
        // Step 3: Calculate the total moves to the median
        int moves = 0;
        for (int num : nums) {
            moves += std::abs(num - median);
        }
        
        return moves;
    }
};
```

### Explanation of the Code
1. **Sorting the Array**: We start by sorting the input array `nums`. Sorting is essential to easily find the median.
2. **Finding the Median**: The median is located at the index `n / 2` where `n` is the size of the array. This approach ensures that we are considering the middle value (or one of the two middle values in case of an even length).
3. **Calculating Moves**: We iterate over the array again, calculating the absolute difference (move cost) between each element and the median. We accumulate these differences into the `moves` variable.
4. **Returning the Result**: Finally, return the total number of moves.

### Complexity Analysis
- **Time Complexity**: The time complexity is O(n log n) due to the sorting step, followed by an O(n) operation to calculate the moves. Thus, the overall time complexity is O(n log n).
- **Space Complexity**: The space complexity is O(1) if we don’t count the input array as extra space; otherwise, it's O(n) for the sorted array.

This solution effectively addresses the problem using a median-based strategy, ensuring efficiency and clarity.