# LeetCode Daily – 2025-11-17

## 🧠 Problem #1437 – **Check If All 1's Are at Least Length K Places Away**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away)

---

### 📝 Problem Description

Given an binary array nums and an integer k, return true if all 1&#39;s are at least k places away from each other, otherwise return false.

 
Example 1:


Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.


Example 2:


Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.


 
Constraints:


	1 <= nums.length <= 105
	0 <= k <= nums.length
	nums[i] is 0 or 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Check If All 1's Are at Least Length K Places Away", we need to ensure that all the occurrences of `1` in a given binary array are at least `k` positions apart from each other. Let's outline the approach and provide the C++ implementation with explanations.

### Problem Understanding

You are given an array of binary digits (0s and 1s) and a non-negative integer `k`. The objective is to check whether every pair of `1`s in the array are at least `k` indices apart. 

### Plan

1. Traverse through the array and keep track of the index of the last `1` encountered.
2. Each time you encounter a `1`, you check the distance from this `1` to the last `1` encountered. If the distance is less than `k`, return `false`.
3. If after checking all `1`s the conditions are satisfied, return `true`.

### Steps

- Initialize a variable to keep track of the index of the last encountered `1`.
- Loop through the array:
  - When you find a `1`, check the difference between the current index and the index of the last found `1`.
  - If the difference is less than `k`, return `false`.
  - Update the index of the last `1`.
- If you complete the loop without returning `false`, return `true`.

### C++ Implementation

Here’s how this plan translates into C++ code:

```cpp
#include <vector>

class Solution {
public:
    bool kLengthApart(std::vector<int>& nums, int k) {
        int lastIndex = -1; // Initialize the index of the last '1' to -1

        // Iterate through the binary array
        for (int i = 0; i < nums.size(); ++i) {
            // Check if the current position has '1'
            if (nums[i] == 1) {
                // If this is not the first '1', check the distance
                if (lastIndex != -1) {
                    // If the distance between this '1' and the last '1' is less than k
                    if (i - lastIndex < k) {
                        return false; // Condition not met
                    }
                }
                // Update the index of the last '1'
                lastIndex = i;
            }
        }
        // If no conditions were violated, return true
        return true;
    }
};
```

### Explanation of the Code

- We start by including the necessary header file for vector.
- A class `Solution` is defined with a public member function `kLengthApart` that takes a vector of integers (`nums`) and an integer `k`.
- We initialize `lastIndex` to `-1` to indicate that we haven't encountered a `1` yet.
- We loop through each element of `nums` using an index `i`.
- When we find a `1`, we check:
  - If `lastIndex` is not `-1`, it means we have previously found a `1`. We then check the difference `i - lastIndex`. If this difference is less than `k`, the function returns `false`.
- Finally, after checking all `1`s, the function returns `true` if all conditions are satisfied.

### Complexity

- **Time Complexity**: O(n), where n is the length of the input array `nums`. We traverse the list only once.
- **Space Complexity**: O(1), since we’re using a constant amount of extra space regardless of the input size.

This approach ensures we efficiently check the requirements for the positions of `1`s in the array.