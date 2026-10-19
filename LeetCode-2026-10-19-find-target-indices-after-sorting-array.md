# LeetCode Daily – 2026-10-19

## 🧠 Problem #2089 – **Find Target Indices After Sorting Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-target-indices-after-sorting-array)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 
Example 1:


Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.


Example 2:


Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.


Example 3:


Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.


 
Constraints:


	1 <= nums.length <= 100
	1 <= nums[i], target <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Find Target Indices After Sorting Array" on LeetCode requires you to find all the indices of a given target value in an array after it has been sorted.

### Problem Explanation

1. **Input**: You are given an integer array `nums` and an integer `target`.
2. **Output**: You need to return a list of indices where the `target` appears in the sorted version of `nums`.

### Approach

To solve the problem, follow these steps:

1. **Sort the Array**: Sort the input array `nums`.
2. **Find Target Indices**: Iterate through the sorted array to find all the indices where the target appears.
3. **Return Results**: Collect these indices and return them in a list.

### Complexity

- **Time Complexity**: O(n log n), where n is the length of `nums` due to the sorting operation.
- **Space Complexity**: O(n) for storing the result indices.

Here's how you can implement this in C++:

```cpp
#include <vector>
#include <algorithm> // for std::sort
using namespace std;

class Solution {
public:
    vector<int> findTargetIndices(vector<int>& nums, int target) {
        // Step 1: Sort the array
        sort(nums.begin(), nums.end());
        
        // Step 2: Find the target indices
        vector<int> indices;
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] == target) {
                indices.push_back(i);
            }
        }
        
        return indices;
    }
};
```

### Explanation of the Code

1. **Sorting the Array**: We use the `sort` function from the `<algorithm>` header to sort the `nums` array.
2. **Finding Target Indices**:
   - We initialize a vector `indices` to hold the indices where the target is found.
   - We iterate through the sorted `nums` array:
     - If the current element `nums[i]` matches `target`, we push `i` into the `indices` vector.
3. **Returning the Result**: Finally, we return the `indices` vector containing all the indices of the target values.

### Edge Cases
- If the target does not exist in the array, the function will return an empty vector.
- If the array has multiple occurrences of the target, all indices will be collected.

This approach effectively gives you the target indices after sorting the array, meeting the problem requirements efficiently.