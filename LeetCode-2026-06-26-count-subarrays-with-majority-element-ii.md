# LeetCode Daily – 2026-06-26

## 🧠 Problem #3739 – **Count Subarrays With Majority Element II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-subarrays-with-majority-element-ii)

---

### 📝 Problem Description

You are given an integer array nums and an integer target.

Return the number of subarrays of nums in which target is the majority element.

The majority element of a subarray is the element that appears strictly more than half of the times in that subarray.

 
Example 1:


Input: nums = [1,2,2,3], target = 2

Output: 5

Explanation:

Valid subarrays with target = 2 as the majority element:


	nums[1..1] = [2]
	nums[2..2] = [2]
	nums[1..2] = [2,2]
	nums[0..2] = [1,2,2]
	nums[1..3] = [2,2,3]


So there are 5 such subarrays.


Example 2:


Input: nums = [1,1,1,1], target = 1

Output: 10

Explanation: 

​​​​​​​All 10 subarrays have 1 as the majority element.


Example 3:


Input: nums = [1,2,3], target = 4

Output: 0

Explanation:

target = 4 does not appear in nums at all. Therefore, there cannot be any subarray where 4 is the majority element. Hence the answer is 0.


 
Constraints:


	1 <= nums.length <= 10​​​​​​​5
	1 <= nums[i] <= 10​​​​​​​9
	1 <= target <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Count Subarrays With Majority Element II" asks us to count the number of contiguous subarrays where there exists an element that appears more than `n/3` times in that subarray, where `n` is the length of the subarray.

### Problem Breakdown
1. **Majority Element**: An element is a majority element if it appears more than `n/3` times in a subarray.
2. **Brute Force Approach**: The naive approach can involve checking every subarray, which can lead to a time complexity of O(n^3) (where n is the length of the array) as you'd need to count occurrences within each subarray.
3. **Optimized Approach**: Instead of brute-forcing, we can leverage the concept of maintaining counts in a single pass.

### Key Steps
1. **Count Elements**: We can use a hashmap or an unordered map to keep track of how many times each element has appeared in the current subarray.
2. **Find Valid Elements**: Use a sliding window approach to keep track of elements that potentially can be a majority.
3. **Count Valid Subarrays**: When we encounter an element from the hashmap that appears more than `size/3`, we count the subarrays that end with the current index.

### Implementation

Here is how we can implement this in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

class Solution {
public:
    int countSubarraysWithMajorityElementII(std::vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;
        
        // Count contains the count of potential majorities
        std::unordered_map<int, int> count;
        int totalCount = 0;

        // We will maintain counts for each element and the total number of elements in view.
        int left = 0; // Start of the sliding window
        for (int right = 0; right < n; ++right) {
            // Add current element to the sliding window
            count[nums[right]]++;
            
            // While there are no majority elements in the window, move the left pointer
            while (true) {
                // Find and check if there is a majority element.
                int majorityElementCount = (right - left + 1) / 3 + 1; // More than n/3

                bool foundMajority = false;
                for (auto& [key, value] : count) {
                    if (value >= majorityElementCount) {
                        foundMajority = true;
                        break;
                    }
                }

                // If we found a majority element, break from the loop
                if (foundMajority) {
                    break;
                } else {
                    // Otherwise, reduce from window
                    count[nums[left]]--;
                    if (count[nums[left]] == 0) {
                        count.erase(nums[left]);
                    }
                    left++;
                }
            }

            // Add all valid subarrays ending in `right`
            totalCount += (right - left + 1);
        }
        
        return totalCount;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {1, 2, 2, 3, 2}; // Example input
    std::cout << solution.countSubarraysWithMajorityElementII(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code:
1. We initialize a map `count` to keep track of the frequency of elements in the current window.
2. The `left` pointer indicates the start of the window while the `right` pointer goes through each element of the array.
3. For every position of `right`, we count elements and adjust `left` to ensure that we always have a majority element, if possible.
4. If we find the valid subarrays, we add them to `totalCount`.

### Complexity Analysis
- **Time Complexity**: O(n), since we are essentially iterating through the array with two pointers.
- **Space Complexity**: O(n) in the worst case for the hash map to count element occurrences.

This approach should solve the problem efficiently under typical constraints you may find in competitive programming or interviews.