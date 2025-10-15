# LeetCode Daily – 2025-10-15

## 🧠 Problem #3350 – **Adjacent Increasing Subarrays Detection II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii)

---

### 📝 Problem Description

Given an array nums of n integers, your task is to find the maximum value of k for which there exist two adjacent subarrays of length k each, such that both subarrays are strictly increasing. Specifically, check if there are two subarrays of length k starting at indices a and b (a < b), where:


	Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
	The subarrays must be adjacent, meaning b = a + k.


Return the maximum possible value of k.

A subarray is a contiguous non-empty sequence of elements within an array.

 
Example 1:


Input: nums = [2,5,7,8,9,2,3,4,3,1]

Output: 3

Explanation:


	The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
	The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
	These two subarrays are adjacent, and 3 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.



Example 2:


Input: nums = [1,2,3,4,4,4,4,5,6,7]

Output: 2

Explanation:


	The subarray starting at index 0 is [1, 2], which is strictly increasing.
	The subarray starting at index 2 is [3, 4], which is also strictly increasing.
	These two subarrays are adjacent, and 2 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.



 
Constraints:


	2 <= nums.length <= 2 * 105
	-109 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Adjacent Increasing Subarrays Detection II" requires us to identify if there exist any two adjacent subarrays such that both subarrays are strictly increasing in nature. The constraints specify that the length of the input array can go up to \( 10^6 \), which requires our solution to be efficient.

To solve this problem, we can follow these steps:

1. **Identify Increasing Subarrays**: We can iterate through the input array and find all the subarrays that are strictly increasing.
2. **Check for Adjacent Increasing Subarrays**: While we find these subarrays, we can keep track of their lengths and check if any two increasing subarrays are adjacent.

The algorithm essentially involves a single pass through the array to detect increasing segments/patterns and check for adjacency.

### Approach:
1. **Walk through the array**: We keep track of the current length of the increasing subarray as we traverse.
2. **Store lengths**: Whenever we encounter a break (i.e., when the current element is not greater than the previous), we save the length of the currently found increasing subarray.
3. **Check adjacency**: If we find the lengths of two consecutive increasing subarrays that are greater than 1, we return true.

### C++ Implementation:
Here’s a C++ solution based on the aforementioned approach.

```cpp
#include <iostream>
#include <vector>

class Solution {
public:
    bool checkAdjacentIncreasingSubarrays(std::vector<int>& nums) {
        int n = nums.size();
        if (n < 2) {
            return false; // No adjacent pairs possible
        }
        
        int lastLength = 0; // Length of the last found increasing subarray
        int currentLength = 0; // Length of the current increasing subarray

        for (int i = 1; i < n; ++i) {
            if (nums[i] > nums[i - 1]) {
                // Current subarray is still increasing
                currentLength++;
            } else {
                // We have reached the end of an increasing subarray
                if (currentLength > 0) {
                    // If the length of the previous increasing subarray was greater than 1,
                    // and the last one ended right now is also greater than 1
                    if (lastLength > 0 && currentLength > 0) {
                        return true; // We found adjacent increasing subarrays
                    }
                    // Update the lastLength and reset currentLength
                    lastLength = currentLength;
                    currentLength = 0; // Reset for next possible subarray
                }
            }
        }
        
        // After the loop, we need to check for the last increasing segment
        if (currentLength > 0 && lastLength > 0) {
            return true; // Check for adjacency again after the loop
        }
        
        return false; // No adjacent increasing subarrays found
    }
};

// Example usage
int main() {
    Solution solution;
    std::vector<int> nums = {1, 2, 3, 4, 2, 1, 5, 6, 7};
    bool result = solution.checkAdjacentIncreasingSubarrays(nums);
    std::cout << (result ? "True" : "False") << std::endl; // Output depends on the input
    return 0;
}
```

### Explanation of the Code:
- We declare two variables, `lastLength` and `currentLength`, to keep track of the lengths of the last and current increasing subarrays, respectively.
- We iterate through the array from index 1 to n-1:
  - If the current element is greater than the previous element, we increase the `currentLength`.
  - If we hit a break (current element is not greater than the previous), we check if both `lastLength` and `currentLength` are greater than 0, confirming the presence of two adjacent increasing subarrays.
  - After exiting the loop, we handle the edge case for the last detected increasing subarray using the same check.
- Finally, if no adjacent increasing subarrays are found, we return false.

This approach efficiently finds the solution in O(n) time complexity, which is optimal for the given constraints.