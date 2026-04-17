# LeetCode Daily – 2026-04-17

## 🧠 Problem #3761 – **Minimum Absolute Distance Between Mirror Pairs**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs)

---

### 📝 Problem Description

You are given an integer array nums.

A mirror pair is a pair of indices (i, j) such that:


	0 <= i < j < nums.length, and
	reverse(nums[i]) == nums[j], where reverse(x) denotes the integer formed by reversing the digits of x. Leading zeros are omitted after reversing, for example reverse(120) = 21.


Return the minimum absolute distance between the indices of any mirror pair. The absolute distance between indices i and j is abs(i - j).

If no mirror pair exists, return -1.

 
Example 1:


Input: nums = [12,21,45,33,54]

Output: 1

Explanation:

The mirror pairs are:


	(0, 1) since reverse(nums[0]) = reverse(12) = 21 = nums[1], giving an absolute distance abs(0 - 1) = 1.
	(2, 4) since reverse(nums[2]) = reverse(45) = 54 = nums[4], giving an absolute distance abs(2 - 4) = 2.


The minimum absolute distance among all pairs is 1.


Example 2:


Input: nums = [120,21]

Output: 1

Explanation:

There is only one mirror pair (0, 1) since reverse(nums[0]) = reverse(120) = 21 = nums[1].

The minimum absolute distance is 1.


Example 3:


Input: nums = [21,120]

Output: -1

Explanation:

There are no mirror pairs in the array.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109​​​​​​​

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Absolute Distance Between Mirror Pairs" from LeetCode, we need first to understand what mirror pairs are and how to compute the minimum absolute distance between them.

### Problem Overview
Given an integer array `arr`, a pair of indices `(i, j)` is called a "mirror pair" if:

1. `arr[i] == arr[j]` and,
2. `i < j`.

The task is to find the minimum absolute distance defined as `|i - j|` across all mirror pairs in the array.

### Steps to Solve the Problem
1. **Use a Hash Map**: We can use a hash map (or unordered map in C++) to store the indices of each element as we iterate through the array.
2. **Track Minimum Distance**: When we encounter an element that has been seen before (i.e., it exists in the map), we calculate the absolute distance from the current index to the index stored in the map. If this distance is smaller than our current minimum distance, we update our minimum.
3. **Update Hash Map**: After checking for existing elements, we update the hash map with the current index of the element.

### Implementation
Let's now implement this in C++:

```cpp
#include <vector>
#include <unordered_map>
#include <climits>

class Solution {
public:
    int minimumAbsDistance(std::vector<int>& arr) {
        std::unordered_map<int, int> indexMap; // Maps values to its last index
        int minDistance = INT_MAX; // Initialize minimum distance to maximum
        
        // Loop through the array to fill the index map and compute minimum distance
        for (int i = 0; i < arr.size(); ++i) {
            // Check if the element has been seen before
            if (indexMap.find(arr[i]) != indexMap.end()) {
                // Calculate the distance based on previous index
                int distance = i - indexMap[arr[i]];
                // Update minimum distance if found smaller
                minDistance = std::min(minDistance, distance);
            }
            // Update the last seen index of the current element
            indexMap[arr[i]] = i;
        }
        
        // If minDistance was not updated, return -1, otherwise return minDistance
        return (minDistance == INT_MAX) ? -1 : minDistance;
    }
};
``` 

### Explanation of the Code
1. **Index Map**: We declare an unordered map `indexMap` to store the most recent index of each number encountered in the array.
2. **Initialize Minimum Distance**: We initialize `minDistance` to `INT_MAX`, which represents the largest possible value for an integer. This will be updated as we find valid mirror pairs.
3. **Iterate Through Array**:
   - For every element, we check if it has been encountered before by checking its existence in the map.
   - If it exists, we calculate the distance to the last occurrence and check if it's less than our current `minDistance`. If so, we update `minDistance`.
   - Regardless of finding a pair or not, we update the map with the current index of the element.
4. **Return the Result**: Finally, if `minDistance` has not been updated (still `INT_MAX`), it means there were no pairs found, so we return `-1`. Otherwise, we return `minDistance`.

### Complexity Analysis
- **Time Complexity**: O(N), where N is the number of elements in the array. Each element is processed once.
- **Space Complexity**: O(N) in the worst case for storing the indices in the hash map.

This approach efficiently finds the minimum absolute distance between mirror pairs using a single pass through the array while maintaining the needed data in the hash map.