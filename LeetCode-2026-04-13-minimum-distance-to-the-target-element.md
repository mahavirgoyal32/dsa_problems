# LeetCode Daily – 2026-04-13

## 🧠 Problem #1848 – **Minimum Distance to the Target Element**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-distance-to-the-target-element)

---

### 📝 Problem Description

Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).

It is guaranteed that target exists in nums.

 
Example 1:


Input: nums = [1,2,3,4,5], target = 5, start = 3
Output: 1
Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.


Example 2:


Input: nums = [1], target = 1, start = 0
Output: 0
Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.


Example 3:


Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
Output: 0
Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.


 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i] <= 104
	0 <= start < nums.length
	target is in nums.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "Minimum Distance to the Target Element." This problem involves finding the minimum distance from each element in an array to a target value.

### Problem Statement:

Given an array of integers `arr` and an integer `target`, we need to find the minimum distance between any element in `arr` and the given `target`. The distance is defined as the absolute difference between the indices of an element in `arr` and the index of the target element (if present).

### Example:

Input: 
```cpp
arr = [1, 2, 3, 4, 5]
target = 5
```
Output: 
```
4
```
Explanation: The target element `5` is at index `4`. The distance from the other elements is `4`, `3`, `2`, `1` respectively.

### Approach:

1. **Iterate through the array** to find the index of the `target`.
2. Maintain a variable to store the `minimum distance`.
3. If the target doesn't exist in the array, return `-1`.

### Complexity:
- Time Complexity: O(n), where n is the length of the array since we may have to scan through the entire array.
- Space Complexity: O(1), since we are using a constant amount of extra space.

### Implementation in C++

Here's the C++ code for the solution:

```cpp
#include <vector>
#include <cmath>
#include <iostream>
#include <climits>

class Solution {
public:
    int getMinDistance(std::vector<int>& arr, int target) {
        int minDistance = INT_MAX; // initialize minimum distance to a large number
        int targetIndex = -1; // variable to store the index of the target
        
        // Find the index of the target element
        for (int i = 0; i < arr.size(); ++i) {
            if (arr[i] == target) {
                targetIndex = i; // store the index of the target
            }
        }
        
        // If target was not found, we return -1
        if (targetIndex == -1) {
            return -1; // target element does not exist
        }
        
        // Calculate the minimum distance
        for (int i = 0; i < arr.size(); ++i) {
            if (arr[i] != target) { // skip the target element itself
                minDistance = std::min(minDistance, abs(targetIndex - i));
            }
        }
        
        return minDistance; // return the found minimum distance
    }
};

int main() {
    Solution solution;
    std::vector<int> arr = {1, 2, 3, 4, 5};
    int target = 5;
    int result = solution.getMinDistance(arr, target);
    std::cout << "Minimum distance to target: " << result << std::endl; // Expected Output: 4
    return 0;
}
```

### Explanation:

1. **Initialization**: We initialize `minDistance` to `INT_MAX` to ensure any found distance will be less than this value. We also initialize `targetIndex` to `-1`, which helps in checking if the target exists in the array.
  
2. **Finding the Target Index**: The first `for` loop iterates through the array to find the index of the target. If found, `targetIndex` is updated.
  
3. **Checking Validity**: If `targetIndex` remains `-1`, we return `-1` indicating the target is not present in the array.

4. **Calculating Minimum Distance**: We have another loop that calculates the distance from each element to `target`. If the current element is not the target, we calculate the distance using the absolute difference of indices, updating `minDistance` when a smaller distance is found.

5. **Return the Result**: Finally, we return the minimum distance found.

This provides a straightforward way to solve the problem efficiently while ensuring clarity and correctness.