# LeetCode Daily – 2026-09-17

## 🧠 Problem #1477 – **Find Two Non-overlapping Sub-arrays Each With Target Sum**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum)

---

### 📝 Problem Description

You are given an array of integers arr and an integer target.

You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.

 
Example 1:


Input: arr = [3,2,2,4,3], target = 3
Output: 2
Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.


Example 2:


Input: arr = [7,3,4,7], target = 7
Output: 2
Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.


Example 3:


Input: arr = [4,3,2,6,2,3,4], target = 6
Output: -1
Explanation: We have only one sub-array of sum = 6.


 
Constraints:


	1 <= arr.length <= 105
	1 <= arr[i] <= 1000
	1 <= target <= 108

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To tackle the LeetCode problem "Find Two Non-overlapping Sub-arrays Each With Target Sum," we can break it down step-by-step. The goal is to identify two non-overlapping subarrays in a given array such that each subarray sums up to a specified target. We need to return the maximum combined length of these two subarrays.

### Problem Breakdown

1. **Understanding Subarrays**: A subarray is a contiguous portion of an array. The two subarrays must not overlap, meaning that the indices of one subarray must not encroach upon the other.

2. **Brute Force Limitations**: A naive approach would involve checking every possible pair of subarrays, which is inefficient and can lead to a time complexity of \(O(N^2)\). We need a more optimal solution.

3. **Using a HashMap for Prefix Sums**: An efficient method involves using a hash map to store the starting indices of the first occurrence of each possible subarray sum equal to the target. This utilizes a sliding window technique for identifying the subarrays.

4. **Iterating Through and Checking Non-Overlapping Conditions**: As we find valid subarrays, we will keep track of their lengths while ensuring that they do not overlap.

### Implementation Steps

1. Use a hash map (`unordered_map`) to record the latest ending index of subarrays that sum up to the target.
2. Iterate through the array to find the first valid subarray and keep track of its maximum length.
3. As we find new valid subarrays, check if they can be combined with any previously found subarray without overlapping, and compute the maximum combined length.

### C++ Code Implementation

Here's the complete C++ solution with explanations:

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxSumTwoNoOverlap(vector<int>& nums, int target) {
        int n = nums.size();
        unordered_map<int, int> sumToIndex;
        sumToIndex[0] = -1;  // To handle subarrays that start from index 0
        
        int currentSum = 0;
        int maxLength1 = 0;  // Maximum length of the first subarray found
        int maxCombinedLength = 0;  // Maximum length of two non-overlapping subarrays
        
        // 1. Find all instances of subarrays summing to the target
        for (int i = 0; i < n; ++i) {
            currentSum += nums[i];

            // Record where the target sum is found 
            sumToIndex[currentSum] = i;
            
            // Check for the first subarray sum
            if (sumToIndex.find(currentSum - target) != sumToIndex.end()) {
                int endIndex = i;
                int startIndex = sumToIndex[currentSum - target];
                maxLength1 = max(maxLength1, endIndex - startIndex);
                
                // Now find the second non-overlapping subarray
                for (const auto& entry : sumToIndex) {
                    int length2 = entry.first == currentSum - target ? 0 : entry.second + 1; // Make sure it's a different subarray
                    if (entry.second < endIndex) {
                        maxCombinedLength = max(maxCombinedLength, maxLength1 + length2);
                    }
                }
            }
        }

        // Reset and repeat to maximize length for the first subarray at every step
        currentSum = 0;
        sumToIndex.clear();
        sumToIndex[0] = -1;

        // 2. Repeat the process with respect to "second" subarray lengths
        for (int i = 0; i < n; ++i) {
            currentSum += nums[i];

            sumToIndex[currentSum] = i;

            if (sumToIndex.find(currentSum - target) != sumToIndex.end()) {
                int endIndex = i;
                int startIndex = sumToIndex[currentSum - target];
                int maxLength2 = endIndex - startIndex;

                for (const auto& entry : sumToIndex) {
                    int length1 = entry.first == currentSum - target ? 0 : entry.second + 1; // Ensure it's different
                    if (entry.second < endIndex) {
                        maxCombinedLength = max(maxCombinedLength, maxLength2 + length1);
                    }
                }
            }
        }

        return maxCombinedLength;
    }
};
```

### Explanation of the Code

- We maintain an `unordered_map` called `sumToIndex` to track the ending indices of previous cumulative sums of subarrays.
- As we compute the sum while iterating, whenever we encounter a sum that indicates the existence of a previous subarray equal to the target, we consider it a candidate.
- We carefully check the lengths of possible non-overlapping subarrays, ensuring that we maintain an optimal solution by comparing lengths.
- We repeat a similar process to find potential subarrays again but with roles reversed to maximize overall combinations.

### Complexity Analysis
- **Time Complexity**: The solution runs in \(O(N)\) because each pass through the array processes information efficiently using a hash map.
- **Space Complexity**: The space used by the hash map is \(O(K)\), where \(K\) is the number of unique prefix sums.

Through this approach, we efficiently find two non-overlapping subarrays summing to the target, while maximizing the total length of both.