# LeetCode Daily – 2026-09-23

## 🧠 Problem #1658 – **Minimum Operations to Reduce X to Zero**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero)

---

### 📝 Problem Description

You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

 
Example 1:


Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.


Example 2:


Input: nums = [5,6,7,8,9], x = 4
Output: -1


Example 3:


Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 104
	1 <= x <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Operations to Reduce X to Zero" asks us to find the minimum number of operations required to reduce a given integer `x` to zero using an array of integers `coins`. An operation consists of removing an element from either the beginning or the end of the array and subtracting it from `x`.

### Problem Breakdown

The essence of the problem is that we need to identify which elements from the "beginning" or "end" of the array add up to `x`, while minimizing the number of these operations. This suggests using a two-pointer technique or prefix sums to efficiently calculate subarray sums.

### Key Observations

1. The problem can be transformed into finding a subarray with a sum equal to `totalSum - x`, where `totalSum` is the sum of all elements in the array.
2. If we can find a contiguous segment with that sum, the rest of the elements (not in this segment) will comprise the minimum number of operations needed.

### Approach

1. Compute the `totalSum` of the array.
2. Calculate the target sum which is `totalSum - x`.
3. Use a sliding window (two-pointer) technique to find the longest subarray that sums to this target.
4. The length of this longest subarray will help us determine the minimum operations: `len(coins) - len(longest_subarray)`.

### C++ Implementation

Here's the C++ solution for this problem:

```cpp
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    int minOperations(vector<int>& coins, int x) {
        int totalSum = 0;
        for (int coin : coins) {
            totalSum += coin;
        }
        
        // Target we need to find in a subarray
        int target = totalSum - x;
        if (target < 0) {
            // If target is negative, we cannot achieve it
            return -1;
        }
        
        int maxLength = -1; // This will track the maximum length of subarray with sum = target
        unordered_map<int, int> prefixSum; // To store the prefix sums
        prefixSum[0] = -1; // A base case for prefix sum at index -1
        int currentSum = 0;

        for (int i = 0; i < coins.size(); i++) {
            currentSum += coins[i];

            // If currentSum - target is in our prefixSum map, we found a valid subarray
            if (prefixSum.find(currentSum - target) != prefixSum.end()) {
                maxLength = max(maxLength, i - prefixSum[currentSum - target]);
            }

            // Store the first occurrence of this prefix sum
            if (prefixSum.find(currentSum) == prefixSum.end()) {
                prefixSum[currentSum] = i;
            }
        }

        // If we did not find a valid subarray
        if (maxLength == -1) {
            return -1;
        }

        // Min operations is the total length minus the length of the found subarray
        return coins.size() - maxLength;
    }
};

// Example Usage
int main() {
    Solution solution;
    vector<int> coins = {1, 1, 4, 2, 3};
    int x = 5;
    cout << solution.minOperations(coins, x) << endl; // Output should be 2
    return 0;
}
```

### Explanation of the Code

1. **Calculate `totalSum`**: Loop through all elements in `coins` to compute the total sum.
2. **Determine the `target`**: Calculate the sum required to identify a suitable subarray.
3. **Lookup Table**: Use a hashmap (`unordered_map`) to store prefix sums and their indices which will help to identify potential subarray sums efficiently.
4. **Sliding Window**: Iterate through the array to check if the current sum minus the target exists in the map (`prefixSum`). If yes, update the maximum length of that valid subarray.
5. **Result Calculation**: Finally, calculate the minimum operations as the difference between the total length of the array and the found maximum subarray length.

This algorithm runs in O(n) time, where n is the number of elements in `coins`, because each element is processed a limited number of times due to the sliding window approach.