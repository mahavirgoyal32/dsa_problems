# LeetCode Daily – 2026-04-19

## 🧠 Problem #1855 – **Maximum Distance Between a Pair of Values**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values)

---

### 📝 Problem Description

You are given two non-increasing 0-indexed integer arrays nums1​​​​​​ and nums2​​​​​​.

A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length, is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i​​​​.

Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.

An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.

 
Example 1:


Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
Output: 2
Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).


Example 2:


Input: nums1 = [2,2,2], nums2 = [10,10,1]
Output: 1
Explanation: The valid pairs are (0,0), (0,1), and (1,1).
The maximum distance is 1 with pair (0,1).


Example 3:


Input: nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]
Output: 2
Explanation: The valid pairs are (2,2), (2,3), (2,4), (3,3), and (3,4).
The maximum distance is 2 with pair (2,4).


 
Constraints:


	1 <= nums1.length, nums2.length <= 105
	1 <= nums1[i], nums2[j] <= 105
	Both nums1 and nums2 are non-increasing.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Maximum Distance Between a Pair of Values", we need to find the maximum distance `j - i` such that `arr[i] <= arr[j]` for a given array `arr`. Here, `i` and `j` are indices of elements in the array, and the constraint on the values must hold.

## Problem Breakdown
We are given an integer array `arr` and tasked with finding:
1. Indices `i` and `j` such that \( i < j \)
2. The condition \( arr[i] \leq arr[j] \) needs to be satisfied.
3. We want to maximize the value of \( j - i \).

### Considerations
- A naive solution would involve checking every possible pair of indices, which would result in a time complexity of \( O(n^2) \). This approach is not efficient for larger inputs.
- Instead, we can use a more efficient approach that makes use of the properties of the array. 

### Optimized Approach
1. **Two-pointer Technique**: This is a classic technique where you can maintain two pointers to find the maximum valid range in linear time.
2. **Precomputations**: First, to make the search efficient, we can precompute the minimum values to the left and maximum values to the right for each index.

### Steps:
1. **Calculate min_left**:
   - Create an array `min_left` where `min_left[i]` will store the minimum value from the start of the array up to index `i`.
   
2. **Calculate max_right**:
   - Create an array `max_right` where `max_right[j]` will store the maximum value from index `j` to the end of the array.

3. **Iterate to Find Maximum Distance**:
   - Use two pointers, one for `min_left` (let's call it `i`) and another for `max_right` (let's call it `j`).
   - Increment `j` if the condition \( min\_left[i] \leq max\_right[j] \) holds, otherwise increment `i`.
   - Keep track of the maximum distance \( j - i \) observed that satisfies the condition.

### Code Implementation
Here is the C++ implementation of the above logic:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxDistance(vector<int>& arr) {
        int n = arr.size();
        
        // Create arrays to store min_left and max_right
        vector<int> min_left(n);
        vector<int> max_right(n);
        
        // Fill min_left
        min_left[0] = arr[0];
        for (int i = 1; i < n; ++i) {
            min_left[i] = min(min_left[i - 1], arr[i]);
        }
        
        // Fill max_right
        max_right[n - 1] = arr[n - 1];
        for (int j = n - 2; j >= 0; --j) {
            max_right[j] = max(max_right[j + 1], arr[j]);
        }
        
        // Find the maximum distance
        int max_dist = 0;
        int i = 0, j = 0;
        
        while (i < n && j < n) {
            if (min_left[i] <= max_right[j]) {
                max_dist = max(max_dist, j - i);
                j++;  // Move the right pointer to explore further
            } else {
                i++;  // Move the left pointer to find a higher valid min_left
            }
        }
        
        return max_dist;
    }
};
```

### Explanation of the Code:
1. We initialize two arrays, `min_left` and `max_right`, to store the respective values based on the logic we discussed.
2. We first fill these arrays by iterating over the original array.
3. We then use two pointers `i` and `j` to explore the valid pairs while maintaining the maximum distance.
4. The condition checks if the current `min_left[i]` is less than or equal to `max_right[j]`, allowing us to potentially increase our distance.
5. The final answer is returned as `max_dist`.

### Complexity Analysis:
- **Time Complexity**: \( O(n) \) for creating the `min_left` and `max_right` arrays, and \( O(n) \) for finding the maximum distance, resulting in overall \( O(n) \).
- **Space Complexity**: \( O(n) \) due to the storage of `min_left` and `max_right` arrays.

This method is efficient and works well within the given constraints of the problem.