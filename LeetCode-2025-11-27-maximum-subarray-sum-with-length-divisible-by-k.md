# LeetCode Daily – 2025-11-27

## 🧠 Problem #3381 – **Maximum Subarray Sum With Length Divisible by K**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k)

---

### 📝 Problem Description

You are given an array of integers nums and an integer k.

Return the maximum sum of a subarray of nums, such that the size of the subarray is divisible by k.

 
Example 1:


Input: nums = [1,2], k = 1

Output: 3

Explanation:

The subarray [1, 2] with sum 3 has length equal to 2 which is divisible by 1.


Example 2:


Input: nums = [-1,-2,-3,-4,-5], k = 4

Output: -10

Explanation:

The maximum sum subarray is [-1, -2, -3, -4] which has length equal to 4 which is divisible by 4.


Example 3:


Input: nums = [-5,1,2,-3,4], k = 2

Output: 4

Explanation:

The maximum sum subarray is [1, 2, -3, 4] which has length equal to 4 which is divisible by 2.


 
Constraints:


	1 <= k <= nums.length <= 2 * 105
	-109 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Maximum Subarray Sum With Length Divisible by K" requires us to find the maximum sum of a subarray such that the length of the subarray is divisible by `k`. 

Here's a structured approach to solve the problem:

### Understanding the Problem
- We need to iterate through the array and consider all possible subarrays.
- For each subarray whose length is divisible by `k`, we will calculate its sum.
- The task is to return the maximum sum found across all valid subarrays.

### Approach
1. **Prefix Sums**: Use prefix sums to efficiently calculate the sum of any subarray.
2. **Iterate Over Lengths**: For every valid length that is a multiple of `k`, use nested loops to check all subarrays of that length.
3. **Calculate Sums**: Maintain a running maximum of the found sums.

### Implementation
Let's implement this approach in C++:

```cpp
#include <vector>
#include <iostream>
#include <limits.h>

using namespace std;

class Solution {
public:
    int maxSumDivK(vector<int>& nums, int k) {
        int n = nums.size();
        if (n == 0 || k <= 0) return 0;
        
        // we will use a prefix array
        vector<int> prefix(n + 1, 0);
        
        // Create the prefix sum array
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        
        int maxSum = INT_MIN; // To track the maximum sum
        
        // Iterate over lengths from k to n that are divisible by k
        for (int length = k; length <= n; length += k) {
            for (int start = 0; start <= n - length; start++) {
                int end = start + length - 1;
                int currentSum = prefix[end + 1] - prefix[start]; // Get sum via prefix
                maxSum = max(maxSum, currentSum);
            }
        }
        
        return maxSum == INT_MIN ? 0 : maxSum; // If no valid subarray found
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 4, 5};
    int k = 2;
    cout << "Maximum Subarray Sum with length divisible by " << k << " is: " << sol.maxSumDivK(nums, k) << endl;
    return 0;
}
```

### Explanation of the Code:
1. **Prefix Sum Array**: We create a `prefix` vector where `prefix[i + 1]` holds the sum of all elements from `nums[0]` to `nums[i]`. This allows us to calculate any subarray sum in constant time.
  
2. **Outer Loop on Length**: We start from `k` and go up to `n`, incrementing by `k` each time. This ensures that we only consider lengths that are divisible by `k`.

3. **Inner Loop on Start Index**: For each valid length, the inner loop iterates over possible starting indices for the subarray such that the subarray fits within the bounds of the array.

4. **Calculating the Sum**: Using the prefix sum array, we compute the sum of the current subarray in constant time: `currentSum = prefix[end + 1] - prefix[start]`.

5. **Tracking Maximum Sum**: We continuously update `maxSum` with the maximum value found until the final result is computed.

6. **Return Result**: If no valid subarray is found (maxSum still equals `INT_MIN`), we return `0`. Otherwise, we return the maximum sum found.

### Complexity Analysis
- **Time Complexity**: O(n * m), where `m` is the number of valid lengths (roughly n/k), making it O(n^2 / k).
- **Space Complexity**: O(n) for the prefix sum array.

This solution effectively finds the required maximum subarray sum under the constraints given in the problem statement.