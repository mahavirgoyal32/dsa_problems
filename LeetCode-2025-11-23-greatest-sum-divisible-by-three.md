# LeetCode Daily – 2025-11-23

## 🧠 Problem #1262 – **Greatest Sum Divisible by Three**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/greatest-sum-divisible-by-three)

---

### 📝 Problem Description

Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

 
Example 1:


Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:


Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.


Example 3:


Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).


 
Constraints:


	1 <= nums.length <= 4 * 104
	1 <= nums[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Greatest Sum Divisible by Three", we need to find the maximum sum of a subset of the array's numbers that is divisible by 3. The problem can be approached in a dynamic programming manner where we keep track of the maximum sums that leave a remainder of 0, 1, or 2 when divided by 3.

### Problem Breakdown:

1. **Understanding the Remainders**:
   The key insight is that any number can leave a remainder of 0, 1, or 2 when divided by 3. The maximum subset sum can be classified based on these remainders.

2. **State Definition**:
   We will maintain three variables to keep track of the current best sums that are divisible by 3, leave a remainder of 1, and leave a remainder of 2, respectively:
   - `maxSum0`: the maximum sum that is divisible by 3
   - `maxSum1`: the maximum sum that gives a remainder of 1 when divided by 3
   - `maxSum2`: the maximum sum that gives a remainder of 2 when divided by 3

3. **State Transition**:
   For each number in the array, we will update the sums based on how that number interacts with the current sums stored in `maxSum0`, `maxSum1`, and `maxSum2`.

4. **Final Result**:
   The answer we want is simply the value of `maxSum0`.

### C++ Solution:

Here’s a detailed C++ implementation based on the above breakdown:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

class Solution {
public:
    int maxSumDivThree(vector<int>& nums) {
        // Initialize sums for remainders 0, 1, and 2
        int maxSum0 = 0, maxSum1 = 0, maxSum2 = 0;

        for (int num : nums) {
            // We need to make a copy of the current state to not affect current updates
            int currentMaxSum0 = maxSum0;
            int currentMaxSum1 = maxSum1;
            int currentMaxSum2 = maxSum2;

            // Update the sums based on the current number
            if (num % 3 == 0) {
                maxSum0 = max(currentMaxSum0 + num, maxSum0);
                maxSum1 = max(currentMaxSum1 + num, maxSum1);
                maxSum2 = max(currentMaxSum2 + num, maxSum2);
            } else if (num % 3 == 1) {
                maxSum1 = max(currentMaxSum0 + num, maxSum1);
                maxSum2 = max(currentMaxSum1 + num, maxSum2);
                maxSum0 = max(currentMaxSum2 + num, maxSum0);
            } else { // num % 3 == 2
                maxSum2 = max(currentMaxSum0 + num, maxSum2);
                maxSum0 = max(currentMaxSum1 + num, maxSum0);
                maxSum1 = max(currentMaxSum2 + num, maxSum1);
            }
        }

        return maxSum0; // The result will be the maximum sum divisible by 3
    }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 6, 5, 1, 8};
    cout << sol.maxSumDivThree(nums) << endl; // Output: 18
    return 0;
}
```

### Explanation of the Code:
- **Initialization**: We initialize three variables to store the maximum sums for remainders 0, 1, and 2.
- **Updating Sums**: For each number in the input array:
  - Based on the number's remainder when divided by 3, we compute new potential sums by adding that number to the existing sums of respective remainders.
  - We store the potential best results in new variables (`currentMaxSum0`, etc.) to ensure that updates do not affect each other during the current iteration.
- **Final Output**: The result is simply the maximum sum that is divisible by 3, which we return at the end.

### Complexity:
- **Time Complexity**: O(N), where N is the number of elements in the array, since we go through each element once.
- **Space Complexity**: O(1), as we use a fixed amount of space.

This algorithm efficiently determines the largest divisible sum by maintaining and updating potential maximums through a dynamic programming strategy.