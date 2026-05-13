# LeetCode Daily – 2026-05-13

## 🧠 Problem #1674 – **Minimum Moves to Make Array Complementary**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-moves-to-make-array-complementary)

---

### 📝 Problem Description

You are given an integer array nums of even length n and an integer limit. In one move, you can replace any integer from nums with another integer between 1 and limit, inclusive.

The array nums is complementary if for all indices i (0-indexed), nums[i] + nums[n - 1 - i] equals the same number. For example, the array [1,2,3,4] is complementary because for all indices i, nums[i] + nums[n - 1 - i] = 5.

Return the minimum number of moves required to make nums complementary.

 
Example 1:


Input: nums = [1,2,4,3], limit = 4
Output: 1
Explanation: In 1 move, you can change nums to [1,2,2,3] (underlined elements are changed).
nums[0] + nums[3] = 1 + 3 = 4.
nums[1] + nums[2] = 2 + 2 = 4.
nums[2] + nums[1] = 2 + 2 = 4.
nums[3] + nums[0] = 3 + 1 = 4.
Therefore, nums[i] + nums[n-1-i] = 4 for every i, so nums is complementary.


Example 2:


Input: nums = [1,2,2,1], limit = 2
Output: 2
Explanation: In 2 moves, you can change nums to [2,2,2,2]. You cannot change any number to 3 since 3 > limit.


Example 3:


Input: nums = [1,2,1,2], limit = 2
Output: 0
Explanation: nums is already complementary.


 
Constraints:


	n == nums.length
	2 <= n <= 105
	1 <= nums[i] <= limit <= 105
	n is even.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Moves to Make Array Complementary," we need to understand the task that involves making two arrays complementary. An array is defined as complementary if for every element `x` in the first array, there is a corresponding element `y` in the second array such that `x + y = target`. 

In this specific problem, we are given a single array and need to determine the minimum number of moves to achieve a complementary array based on a specified target value. Each move consists of incrementing or decrementing an element in the array by one.

### Problem Breakdown
1. **Understanding Moves**: For each element in the array, to find its complementary element that pairs with the target, we need to determine how far each element is from its complementary value.
2. **Complementary Value**: For each number `ai` in the array, its complementary value to reach the target is `target - ai`.
3. **Cost Calculation**: The cost to convert `ai` to its complementary value is calculated as `abs(ai - (target - ai))`. Simplifying this, we find that the cost for each element could also be expressed as `abs(2*ai - target)`.

### Approach
1. Initialize a variable to accumulate the total cost of moves.
2. Iterate through each element in the array and compute the individual costs.
3. Sum these costs to get the minimum number of moves required to make the array complementary.

We will implement this in C++.

### C++ Solution

```cpp
#include <vector>
#include <cmath> // for abs
#include <numeric> // for accumulate

class Solution {
public:
    int minMoves(std::vector<int>& nums, int target) {
        int totalMoves = 0;
        
        for (int num : nums) {
            totalMoves += abs(2 * num - target);
        }
        
        return totalMoves;
    }
};
```

### Explanation of the Code
1. **Function Signature**: We define a member function `minMoves` that takes a vector of integers (`nums`) and an integer (`target`).
2. **Initializing the Total Moves**: We initialize `totalMoves` to accumulate the total number of moves needed.
3. **Iterating through the Array**: We loop through each number in the `nums` array.
4. **Calculating Cost**: For each `num`, we calculate the absolute difference between `2*num` and `target`, which indicates how far we need to move this element to make it complementary.
5. **Accumulate Moves**: We accumulate this cost in `totalMoves`.
6. **Return the Result**: Finally, we return the `totalMoves` which gives the minimum moves required.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the number of elements in the input array since we only perform a single pass through the array.
- **Space Complexity**: O(1), as we are using a constant amount of additional space.

This approach efficiently computes the total moves required to make the array complementary with respect to the target value provided, providing a clear solution to the problem.