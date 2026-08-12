# LeetCode Daily – 2026-08-12

## 🧠 Problem #2958 – **Length of Longest Subarray With at Most K Frequency**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency)

---

### 📝 Problem Description

You are given an integer array nums and an integer k.

The frequency of an element x is the number of times it occurs in an array.

An array is called good if the frequency of each element in this array is less than or equal to k.

Return the length of the longest good subarray of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

 
Example 1:


Input: nums = [1,2,3,1,2,3,1,2], k = 2
Output: 6
Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
It can be shown that there are no good subarrays with length more than 6.


Example 2:


Input: nums = [1,2,1,2,1,2,1,2], k = 1
Output: 2
Explanation: The longest possible good subarray is [1,2] since the values 1 and 2 occur at most once in this subarray. Note that the subarray [2,1] is also good.
It can be shown that there are no good subarrays with length more than 2.


Example 3:


Input: nums = [5,5,5,5,5,5,5], k = 4
Output: 4
Explanation: The longest possible good subarray is [5,5,5,5] since the value 5 occurs 4 times in this subarray.
It can be shown that there are no good subarrays with length more than 4.


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	1 <= k <= nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

### Problem Statement

You are given an integer array `nums` and an integer `k`. Your task is to find the length of the longest contiguous subarray that contains at most `k` distinct integers.

### Explanation

To solve this problem, we can use the **sliding window** technique combined with a hash map (or dictionary) to keep track of the frequency of elements within the current window. The algorithm works as follows:

1. **Initialize Variables**:
   - Use two pointers: `start` and `end` to denote the current window's bounds.
   - A hash map (or a frequency array) to count occurrences of each number within the window.
   - A variable `max_length` to store the maximum length of valid subarrays found.

2. **Expand the Window**:
   - Use the `end` pointer to expand the window by moving through the `nums` array.
   - For each element at `end`, increase its count in the frequency map.

3. **Shrink the Window**:
   - After adding a new number, check if the number of distinct integers (the size of the frequency map) exceeds `k`.
   - If it does, move the `start` pointer to the right until the condition (at most `k` distinct integers) is satisfied again. This is done by decrementing the count of the number at the `start` pointer and removing it from the map if its count drops to zero.

4. **Update Maximum Length**:
   - Every time you expand the window, calculate the current window size (`end - start + 1`) and update `max_length` if this size is greater.

5. **Return Result**:
   - After processing all elements, return `max_length`.

### Implementation

Here’s how this can be implemented in C++:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
    int longestSubarray(vector<int>& nums, int k) {
        unordered_map<int, int> freq_map; // To count the frequency of elements
        int start = 0; // Left pointer of the window
        int max_length = 0; // To store the maximum length found
        
        for (int end = 0; end < nums.size(); ++end) {
            freq_map[nums[end]]++; // Add current number to the frequency map
            
            // While the size of the frequency map exceeds k, shrink the window
            while (freq_map.size() > k) {
                freq_map[nums[start]]--; // Decrease the count of the start element
                if (freq_map[nums[start]] == 0) {
                    freq_map.erase(nums[start]); // Remove it if count goes to zero
                }
                start++; // Move the start pointer forward
            }
            
            // Calculate the maximum length of a valid window
            max_length = max(max_length, end - start + 1);
        }
        
        return max_length; // Return the maximum length found
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> nums = {1, 2, 1, 2, 3};
    int k = 2;
    cout << "Length of longest subarray: " << solution.longestSubarray(nums, k) << endl; // Output: 4
    return 0;
}
```

### Explanation of the Implementation

- **Data Structures**: We use `unordered_map<int, int>` to keep track of how many times each number appears in the current window.
- **Two Pointers**: The `start` pointer moves forward when we exceed `k` distinct integers, ensuring the window remains valid.
- **Max Length Calculation**: For every new element added (when `end` moves), we calculate and potentially update `max_length`.

### Complexity Analysis

- **Time Complexity**: O(n), where `n` is the number of elements in `nums`. Each element is processed at most twice, once when added and once when removed.
- **Space Complexity**: O(k) in the worst case when all elements in the window are distinct and stored in the frequency map.