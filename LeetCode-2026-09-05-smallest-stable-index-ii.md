# LeetCode Daily – 2026-09-05

## 🧠 Problem #3904 – **Smallest Stable Index II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-stable-index-ii)

---

### 📝 Problem Description

You are given an integer array nums of length n and an integer k.

For each index i, define its instability score as max(nums[0..i]) - min(nums[i..n - 1]).

In other words:


	max(nums[0..i]) is the largest value among the elements from index 0 to index i.
	min(nums[i..n - 1]) is the smallest value among the elements from index i to index n - 1.


An index i is called stable if its instability score is less than or equal to k.

Return the smallest stable index. If no such index exists, return -1.

 
Example 1:


Input: nums = [5,0,1,4], k = 3

Output: 3

Explanation:


	At index 0: The maximum in [5] is 5, and the minimum in [5, 0, 1, 4] is 0, so the instability score is 5 - 0 = 5.
	At index 1: The maximum in [5, 0] is 5, and the minimum in [0, 1, 4] is 0, so the instability score is 5 - 0 = 5.
	At index 2: The maximum in [5, 0, 1] is 5, and the minimum in [1, 4] is 1, so the instability score is 5 - 1 = 4.
	At index 3: The maximum in [5, 0, 1, 4] is 5, and the minimum in [4] is 4, so the instability score is 5 - 4 = 1.
	This is the first index with an instability score less than or equal to k = 3. Thus, the answer is 3.



Example 2:


Input: nums = [3,2,1], k = 1

Output: -1

Explanation:


	At index 0, the instability score is 3 - 1 = 2.
	At index 1, the instability score is 3 - 1 = 2.
	At index 2, the instability score is 3 - 1 = 2.
	None of these values is less than or equal to k = 1, so the answer is -1.



Example 3:


Input: nums = [0], k = 0

Output: 0

Explanation:

At index 0, the instability score is 0 - 0 = 0, which is less than or equal to k = 0. Therefore, the answer is 0.


 
Constraints:


	1 <= nums.length <= 105
	0 <= nums[i] <= 109
	0 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the "Smallest Stable Index II" problem and provide a C++ solution with a detailed explanation.

### Problem Statement

You are given an array `A` of `n` integers. An index `i` in the array is called a "stable index" if starting from `i`, the sum of the elements starting from index `i` and continuing to the right is at least the sum of all the elements to the left of the index `i`. The challenge is to find the smallest index `i` such that `i` is a stable index.

### Key Concept

For an index `i` to be considered stable, the following condition must hold:

```
sum(A[i]...A[n-1]) >= sum(A[0]...A[i-1])
```

Where:
- `sum(A[i]...A[n-1])` is the sum of the suffix starting from index `i`.
- `sum(A[0]...A[i-1])` is the sum of the prefix up to index `i-1`.

This equation can be rearranged as:
```
total_sum - prefix_sum >= prefix_sum
```

This can be simplified to:
```
total_sum >= 2 * prefix_sum
```

### Approach

1. Compute the total sum of the array.
2. Keep a running prefix sum as you iterate through the array.
3. For each index `i`, check if `total_sum >= 2 * prefix_sum`. If it is, return `i`.
4. If no stable index is found, return `-1`.

### C++ Solution

Here’s how you can implement the solution in C++:

```cpp
#include <vector>

class Solution {
public:
    int smallestStableIndexII(std::vector<int>& A) {
        int n = A.size();
        long long total_sum = 0;
        
        // Calculate the total sum of the array
        for (int num : A) {
            total_sum += num;
        }
        
        long long prefix_sum = 0;
        
        // Iterate through the array to find the smallest stable index
        for (int i = 0; i < n; ++i) {
            // Check the condition for being a stable index
            if (total_sum >= 2 * prefix_sum) {
                return i; // Found the smallest stable index
            }
            // Update the prefix sum to include A[i]
            prefix_sum += A[i];
        }
        
        return -1; // If no stable index is found
    }
};
```

### Explanation of the Code

1. **Initialization**: Start by determining the size `n` of the input array and create a variable `total_sum` to store the total sum of the entire array.
   
2. **Calculate Total Sum**: Use a loop to calculate `total_sum` by summing up all the elements in the array `A`.

3. **Iterate to Find Stable Index**: 
   - Use a loop to go through each element of the array.
   - For each index `i`, check if `total_sum` is greater than or equal to `2 * prefix_sum`.
   - If the condition is satisfied, return the current index `i` as the smallest stable index.
   - After the check, update `prefix_sum` to include the current element `A[i]`.

4. **Return -1 if Not Found**: If the loop completes without finding a stable index, return `-1`.

### Complexity Analysis

- **Time Complexity**: O(n), as we only need to traverse the array a couple of times (once for total sum and once for checking stable indices).
- **Space Complexity**: O(1), as we are using a constant amount of extra space.

This approach efficiently calculates the smallest stable index by leveraging cumulative sums, making it optimal for large inputs.