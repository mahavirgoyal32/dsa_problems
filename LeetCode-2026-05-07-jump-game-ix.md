# LeetCode Daily – 2026-05-07

## 🧠 Problem #3660 – **Jump Game IX**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game-ix)

---

### 📝 Problem Description

You are given an integer array nums.

From any index i, you can jump to another index j under the following rules:


	Jump to index j where j > i is allowed only if nums[j] < nums[i].
	Jump to index j where j < i is allowed only if nums[j] > nums[i].


For each index i, find the maximum value in nums that can be reached by following any sequence of valid jumps starting at i.

Return an array ans where ans[i] is the maximum value reachable starting from index i.

 
Example 1:


Input: nums = [2,1,3]

Output: [2,2,3]

Explanation:


	For i = 0: No jump increases the value.
	For i = 1: Jump to j = 0 as nums[j] = 2 is greater than nums[i].
	For i = 2: Since nums[2] = 3 is the maximum value in nums, no jump increases the value.


Thus, ans = [2, 2, 3].





Example 2:


Input: nums = [2,3,1]

Output: [3,3,3]

Explanation:


	For i = 0: Jump forward to j = 2 as nums[j] = 1 is less than nums[i] = 2, then from i = 2 jump to j = 1 as nums[j] = 3 is greater than nums[2].
	For i = 1: Since nums[1] = 3 is the maximum value in nums, no jump increases the value.
	For i = 2: Jump to j = 1 as nums[j] = 3 is greater than nums[2] = 1.


Thus, ans = [3, 3, 3].


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109​​​​​​​

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the "Jump Game IX" problem from LeetCode step by step. The problem statement is as follows:

You are given an array of integers `nums` of `length n`, where `nums[i]` represents the maximum number of steps you can jump to the next position from index `i`. For some element of the array `nums[i]`, the jump can result in reaching a higher or lower index, but not exceeding the boundaries of the array. Your goal is to determine if you can reach the last index of the array starting from the first index.

### Problem Breakdown

Here are the key points of the problem:

1. **Jump Nature**: Each position can allow you to jump forwards (within the bounds) up to `nums[i]` positions.
2. **Goal**: Start from index `0` and see if you can reach the last element of the array `nums[n-1]`.
3. **Example**: For an input like `nums = [2,3,1,1,4]`, starting from index `0`, you can jump 2 positions forward to index `1`, and then subsequently jump directly to the last index.

### Approach

To solve the problem, we can iterate through the list while maintaining a "farthest reachable index." If at any point the current index exceeds the furthest reachable point, we can't proceed further, and we return false. If we can reach or exceed the last index during our iteration, we return true.

### C++ Implementation

Here's a C++ implementation of our approach:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
        int maxReachable = 0;  // Initialize to track the farthest reachable index
        
        for (int i = 0; i < nums.size(); i++) {
            // If the current index is beyond the furthest reachable index, we can't proceed
            if (i > maxReachable) {
                return false;
            }
            // Update the farthest reachable point from current index
            maxReachable = max(maxReachable, i + nums[i]);
            // If we can reach or exceed the last index, return true
            if (maxReachable >= nums.size() - 1) {
                return true;
            }
        }
        
        // If we complete the loop and couldn't reach the last index
        return false;
    }
};
```

### Explanation of the Code

1. **Initialization**: We initialize `maxReachable` to `0`, which will store the maximum index we can reach at any point during our traversal.
   
2. **Iteration**: We loop through each index `i` of the array.
   - **Check Reachability**: If `i` is greater than `maxReachable`, that means we can’t get to `i` (and thus can’t move further), so we return `false`.
   - **Update Max Reachable**: We update `maxReachable` by taking the maximum of its current value or the index `i` plus the jump length `nums[i]`.
   - **Check for Completion**: We check if `maxReachable` has reached or exceeded the index of the last element (`nums.size() - 1`). If it has, we return `true`.

3. **Final Check**: If we finish iterating through the list and haven't returned `true`, we return `false`, indicating we cannot reach the last index.

This algorithm runs in `O(n)` time complexity since we traverse the list once, and the space complexity is `O(1)` as we're using only a few extra variables. 

This solution efficiently determines whether it’s possible to reach the last index of the `nums` array.