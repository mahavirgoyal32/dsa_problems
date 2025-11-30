# LeetCode Daily – 2025-11-30

## 🧠 Problem #1590 – **Make Sum Divisible by P**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/make-sum-divisible-by-p)

---

### 📝 Problem Description

Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it&#39;s impossible.

A subarray is defined as a contiguous block of elements in the array.

 
Example 1:


Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.


Example 2:


Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.


Example 3:


Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	1 <= p <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's walk through the LeetCode problem titled "Make Sum Divisible by P". The problem statement details the following:

Given an array `A` and an integer `P`, the goal is to find the minimum length of a subarray that can be removed such that the sum of the remaining elements is divisible by `P`. If no such subarray can be removed, return `-1`.

### Steps to Solve the Problem

1. **Calculate the Total Sum**: First, compute the sum of all the elements in the array `A`.

2. **Check Modulo Condition**: If the total sum is already divisible by `P` (i.e., `totalSum % P == 0`), then we can directly return `0` because we don't need to remove any elements.

3. **Find Remainder**: Calculate the remainder when the total sum is divided by `P`. This is the target remainder we want to address.

4. **Use a Map for Tracking Indices**: Create a map to remember the first occurrence of each modulo value. This helps in determining how far we need to remove elements from either side of the array to maintain the desired divisibility.

5. **Iterate Through the Array**: As you iterate over the array, keep a running sum and calculate the current modulo. If you encounter a modulo that has been seen before, it means between two indices, the sum of the elements has produced a total that when removed, maintains a remainder divisible by `P`.

6. **Calculate Subarray Length**: The length of the removable subarray can be computed by the indices of the first and current occurrences of the modulo. Keep track of the minimum length of such subarrays.

7. **Return Result**: Finally return the minimum length or `-1` if it’s impossible to find such a subarray.

### C++ Code Implementation

Here's how this can be translated into C++ code:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <climits>

class Solution {
public:
    int minSubarray(std::vector<int>& A, int P) {
        long totalSum = 0;
        for (int num : A) {
            totalSum += num;
        }

        // If the total sum is already divisible by P, return 0
        if (totalSum % P == 0) return 0;

        long remainder = totalSum % P;
        std::unordered_map<long, int> modMap;
        modMap[0] = -1; // Handle cases where we find a matching sum from start
        long currentSum = 0;
        int minLength = INT_MAX;

        for (int i = 0; i < A.size(); i++) {
            currentSum += A[i];
            long currentModulo = currentSum % P;

            // Calculate the modulo we need to potentially remove
            long targetModulo = (currentModulo - remainder + P) % P;

            // If we've seen this targetModulo before, we can form a valid subarray
            if (modMap.find(targetModulo) != modMap.end()) {
                minLength = std::min(minLength, i - modMap[targetModulo]);
            }

            // Store the current modulo's index if not seen before
            modMap[currentModulo] = i;
        }

        return minLength == INT_MAX ? -1 : minLength;
    }
};

// Example usage
int main() {
    Solution sol;
    std::vector<int> A = {3, 1, 4, 2};
    int P = 6;
    int result = sol.minSubarray(A, P);
    std::cout << "The minimum length of a subarray to be removed is: " << result << std::endl;
    return 0;
}
```

### Explanation of the C++ Code:

- **Initialization**: We first compute the total sum and check for immediate divisibility.
- **Using `unordered_map`**: This keeps track of the first occurrence of each modulo while iterating through the list.
- **Remainder Handling**: As we process the array, we check against previously seen indices to find the shortest length of the subarray that could be removed to achieve the goal.
- **Final Check**: Return the minimum length found, or `-1` if no valid subarray can be found.

This approach runs in O(n) time complexity, where n is the number of elements in the array, making it efficient for the problem's constraints.