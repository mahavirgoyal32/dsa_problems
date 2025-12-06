# LeetCode Daily – 2025-12-06

## 🧠 Problem #3578 – **Count Partitions With Max-Min Difference at Most K**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k)

---

### 📝 Problem Description

You are given an integer array nums and an integer k. Your task is to partition nums into one or more non-empty contiguous segments such that in each segment, the difference between its maximum and minimum elements is at most k.

Return the total number of ways to partition nums under this condition.

Since the answer may be too large, return it modulo 109 + 7.

 
Example 1:


Input: nums = [9,4,1,3,7], k = 4

Output: 6

Explanation:

There are 6 valid partitions where the difference between the maximum and minimum elements in each segment is at most k = 4:


	[[9], [4], [1], [3], [7]]
	[[9], [4], [1], [3, 7]]
	[[9], [4], [1, 3], [7]]
	[[9], [4, 1], [3], [7]]
	[[9], [4, 1], [3, 7]]
	[[9], [4, 1, 3], [7]]



Example 2:


Input: nums = [3,3,4], k = 0

Output: 2

Explanation:

There are 2 valid partitions that satisfy the given conditions:


	[[3], [3], [4]]
	[[3, 3], [4]]



 
Constraints:


	2 <= nums.length <= 5 * 104
	1 <= nums[i] <= 109
	0 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Count Partitions With Max-Min Difference at Most K", we need to determine the number of ways to partition an array into non-empty subsets such that the maximum element minus the minimum element in each subset does not exceed a value \( k \).

### Problem Explanation
You are given an array `arr` of integers and an integer `k`. We need to partition the array into contiguous, non-empty subsets. The objective is to count how many such partitions can be formed such that the maximum element minus the minimum element in each partition (subset) is at most \( k \).

### Approach
We can utilize a two-pointer technique (or sliding window algorithm) to keep track of valid partitions of the array. Here's a step-by-step breakdown of the approach:

1. **Sorting**: Sort the array `arr`. This helps us easily find the maximum and minimum values for any contiguous subset.
  
2. **Two Pointer Technique**:
   - Use two pointers, `left` and `right`, to represent the current window of valid subsets.
   - Move `right` to expand the window until the condition (max - min ≤ k) is violated.
   - Count the number of valid partitions for each position of the `left` pointer.
   
3. **Count Valid Partitions**:
   - For each position of the `left` index, where it starts a new subset, count how many valid partitions can end with the right pointer before the condition is violated.
   - For each valid pair of `left` and `right`, update the total count of partitions.

### C++ Implementation
Here's the code that implements the above logic:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int countPartitions(vector<int>& arr, int k) {
        sort(arr.begin(), arr.end());
        int n = arr.size();
        long long cnt = 0; // Using long long to handle large counts
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            // Expand the window until the condition is violated
            while (arr[right] - arr[left] > k) {
                left++;
            }
            // All elements between left and right (inclusive) form valid partitions
            // So we can add the number of partitions which can be formed
            cnt += (right - left + 1);
        }
        
        return cnt;
    }
};

int main() {
    Solution sol;
    vector<int> arr = {3, 6, 3, 6, 3};
    int k = 2;
    int result = sol.countPartitions(arr, k);
    cout << "Number of valid partitions: " << result << endl;
    return 0;
}
```

### Explanation of the Code
1. **Sorting the array**: We start by sorting the array to simplify the check for max - min difference.
2. **Two pointers (`left` and `right`)**: We begin `left` at 0 and move `right` from 0 to \( n-1 \). For each position of `right`, we move `left` as far to the right as needed to maintain the max-min condition.
3. **Counting valid partitions**: The number of valid subsets for each `left` is simply `right - left + 1`, representing all elements between `left` and `right`.
4. **Returning the count**: Once we iterate through all possible positions, we return the accumulated count.

This function runs in \( O(n \log n) \) due to sorting, and \( O(n) \) for the sliding window which makes it efficient for large inputs.