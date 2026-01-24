# LeetCode Daily – 2026-01-24

## 🧠 Problem #1877 – **Minimize Maximum Pair Sum in Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array)

---

### 📝 Problem Description

The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.


	For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.


Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:


	Each element of nums is in exactly one pair, and
	The maximum pair sum is minimized.


Return the minimized maximum pair sum after optimally pairing up the elements.

 
Example 1:


Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.


Example 2:


Input: nums = [3,5,4,2,4,6]
Output: 8
Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.


 
Constraints:


	n == nums.length
	2 <= n <= 105
	n is even.
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimize Maximum Pair Sum in Array" requires us to pair elements in an array such that the maximum sum of any pair is minimized. Let's break down the approach and then present the C++ solution with explanations.

### Problem Explanation
Given an array of `n` integers, we need to:
1. Pair up the integers such that there are `n/2` pairs.
2. For each pair, the sum is computed.
3. The goal is to minimize the maximum sum among all pairs.

### Strategy
To minimize the maximum pair sum, the best strategy is typically to:
1. **Sort the array:** This allows us to efficiently create pairs that can potentially minimize the maximum sum.
2. **Pair elements:** Pair the smallest available element with the largest available element. This way, extreme values are balanced out.

### Step-by-step Breakdown
1. Sort the input array.
2. Create pairs from the ends toward the center:
   - Pair the smallest element with the largest element, the second smallest with the second largest, and so on.
3. Calculate the sums of these pairs and track the maximum of these sums.
4. The final answer will be the maximum sum of the pairs.

### Complexity
- **Time Complexity:** `O(n log n)` due to the sorting step, followed by a linear pass to calculate the pairs.
- **Space Complexity:** `O(1)` if we ignore the input storage.

### C++ Implementation
Here’s the C++ code that implements the above strategy:

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int minPairSum(std::vector<int>& nums) {
        // Step 1: Sort the array
        std::sort(nums.begin(), nums.end());
        
        int n = nums.size();
        int maxPairSum = 0;
        
        // Step 2: Pair the elements and calculate the maximum pair sum
        for (int i = 0; i < n / 2; ++i) {
            // Pairing the i-th smallest with the i-th largest
            int pairSum = nums[i] + nums[n - 1 - i];
            maxPairSum = std::max(maxPairSum, pairSum);
        }
        
        // Step 3: Return the minimized maximum pair sum
        return maxPairSum;
    }
};
```

### Explanation of the Code
1. **Sorting:** We first sort the array using `std::sort()`. This organizes the numbers in increasing order.
2. **Calculating pairs:** We then loop through the first half of the array (`n / 2`). For each `i`, we calculate `pairSum` by summing the `i-th` smallest and the `i-th` largest numbers from the sorted array.
   - The element at the start of the array (index `i`) will represent the smaller number in the pair, and the element at the end (index `n - 1 - i`) will represent the larger number.
3. **Tracking the maximum:** We keep track of the maximum pair sum encountered during the loop. After completing the loop, `maxPairSum` contains the minimized maximum pair sum.

This solution effectively utilizes sorting and systematic pairing to achieve the desired result efficiently and correctly.