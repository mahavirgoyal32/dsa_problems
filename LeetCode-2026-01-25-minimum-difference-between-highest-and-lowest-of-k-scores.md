# LeetCode Daily – 2026-01-25

## 🧠 Problem #1984 – **Minimum Difference Between Highest and Lowest of K Scores**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.

 
Example 1:


Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student:
- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
The minimum possible difference is 0.


Example 2:


Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.

 
Constraints:


	1 <= k <= nums.length <= 1000
	0 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Difference Between Highest and Lowest of K Scores" requires you to find the minimum difference between the maximum and minimum values in any subset of `k` scores from an array of scores. Here, the steps and thought process to solve this problem will be outlined, followed by a C++ implementation.

### Explanation

1. **Understanding the Problem**:
   - You are given an array of integers (representing scores) and an integer `k`.
   - The goal is to select any `k` scores from the array such that the difference between the maximum and minimum score among these selected scores is minimized.

2. **Approach**:
   - **Sorting**: The simplest approach to minimize the difference between the highest and lowest scores in any subset of `k` is to sort the array. This way, the scores are in a non-decreasing order.
   - **Sliding Window**: After sorting, we can use a sliding window of size `k`. For each valid subset of `k` scores, the maximum score will be the last element of the current window, and the minimum score will be the first element of the current window.
   - **Calculate Differences**: We simply compute the difference between the maximum and minimum scores for each subset and keep track of the minimum difference found.

3. **Implementation Steps**:
   - Sort the array of scores.
   - Initialize a variable to hold the minimum difference.
   - Iterate through the array, looking at each subset of size `k` and compute the difference between the first and last elements in that subset.
   - Keep updating the minimum difference as you find smaller differences.

### C++ Code Implementation

Here’s the implementation of the above approach:

```cpp
#include <vector>
#include <algorithm>
#include <limits>

class Solution {
public:
    int minimumDifference(std::vector<int>& nums, int k) {
        // Sort the scores
        std::sort(nums.begin(), nums.end());
        
        // Initialize minimum difference to a large value
        int minDiff = std::numeric_limits<int>::max();
        
        // Iterate through the array with a window of size k
        for (int i = 0; i + k - 1 < nums.size(); ++i) {
            // Calculate the difference between the last and first element in the current window of size k
            int diff = nums[i + k - 1] - nums[i];
            // Update the minimum difference
            minDiff = std::min(minDiff, diff);
        }
        
        return minDiff; // Return the smallest difference found
    }
};
```

### Explanation of the Code

1. **Sorting the Array**: We use `std::sort` to arrange the scores in ascending order. This allows us to efficiently find the maximum and minimum scores in each contiguous subset of `k`.

2. **Initializing Minimum Difference**: Before we start calculating differences, we initialize `minDiff` to the maximum possible integer value (using `std::numeric_limits<int>::max()`) for comparison.

3. **Sliding Window Loop**: We loop through the array from `0` to `n-k` where `n` is the size of the `nums` array. In each iteration, we compute the difference for the current window of size `k`.

4. **Updating Minimum Difference**: We compare each computed difference to our `minDiff` and update it if we found a smaller difference.

5. **Return Result**: Finally, we return the `minDiff` which is our answer.

### Complexity Analysis
- **Time Complexity**: The time complexity is dominated by the sorting step, which is O(n log n).
- **Space Complexity**: The space complexity is O(1) (excluding the input storage), as we are using a constant amount of space for our variables.

This solution efficiently finds the minimum difference between the highest and lowest scores for any subset of `k` scores with clarity and effectiveness.