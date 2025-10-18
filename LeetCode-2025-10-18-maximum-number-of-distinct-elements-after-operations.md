# LeetCode Daily – 2025-10-18

## 🧠 Problem #3397 – **Maximum Number of Distinct Elements After Operations**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations)

---

### 📝 Problem Description

You are given an integer array nums and an integer k.

You are allowed to perform the following operation on each element of the array at most once:


	Add an integer in the range [-k, k] to the element.


Return the maximum possible number of distinct elements in nums after performing the operations.

 
Example 1:


Input: nums = [1,2,2,3,3,4], k = 2

Output: 6

Explanation:

nums changes to [-1, 0, 1, 2, 3, 4] after performing operations on the first four elements.


Example 2:


Input: nums = [4,4,4,4], k = 1

Output: 3

Explanation:

By adding -1 to nums[0] and 1 to nums[1], nums changes to [3, 5, 4, 4].


 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	0 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To tackle the problem of finding the maximum number of distinct elements after performing a series of operations, we can follow a structured approach. The problem involves reducing numbers in an array and using the reduction to potentially form new distinct values.

### Problem Breakdown
Given an integer array `nums` and an integer `k`, the operations allowed are:
1. You can reduce any number in the array by 1.
2. You can perform this operation a total of `k` times.

The goal is to maximize the number of distinct elements in the resulting array after performing the operations.

### Steps to Solve the Problem
1. **Count Frequency**: Use a frequency map to determine how many times each element appears in the `nums` array.
2. **Determine Unique Elements**: The direct unique elements count is derived from the keys of the frequency map.
3. **Use Operations**:
   - Prioritize reducing elements that appear more than once to increase distinct values.
   - Store the elements that can be reduced and their counts.
4. **Maximize Distinct Count**: Calculate how many distinct elements can be achieved by using up to `k` reductions efficiently.

### Implementation
We will implement the above logic in C++. Here is the code along with comments to explain each part:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <set>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maximizeDistinctElements(vector<int>& nums, int k) {
        unordered_map<int, int> count;
        
        // Count the frequency of each number
        for (int num : nums) {
            count[num]++;
        }

        // Create a set to store unique elements
        set<int> distinctElements(count.begin(), count.end());

        // Calculate how many excess duplicates we have
        vector<int> excessCounts; // To hold counts of duplicates
        for (auto& [num, cnt] : count) {
            if (cnt > 1) {
                excessCounts.push_back(cnt - 1); // Store excess counts
            }
        }

        // Sort excess counts in ascending order
        sort(excessCounts.begin(), excessCounts.end());
        int numberOfDistinctElements = distinctElements.size();

        // Use `k` to remove duplicates
        for (int excess : excessCounts) {
            if (k <= 0) break;

            // We can only convert one of the duplicates to a distinct number
            if (k >= excess) {
                k -= excess; // Use k to reduce all but one count of this number
                numberOfDistinctElements++; // One more distinct number can be obtained
            } else {
                // If we don't have enough k to remove excess, we can still use k partially
                numberOfDistinctElements++; // We can convert `k` duplicates into new distinct elements
                break; // No more operations possible
            }
        }

        // Add how many distinct numbers we can create from using remaining `k` if any
        if (k > 0) {
            numberOfDistinctElements += k; // For each left operation, we can create a potentially new distinct number
        }

        return numberOfDistinctElements;
    }
};

// Example usage
int main() {
    Solution sol;
    vector<int> nums = {1, 2, 2, 3, 3, 3};
    int k = 4;
    cout << "Maximum Distinct Elements: " << sol.maximizeDistinctElements(nums, k) << endl;
    return 0;
}
```

### Explanation of Code
1. **Frequency Count**: We count each number's occurrences using a hash map (`unordered_map`).
2. **Duplicates Handling**: We gather how many duplicates each number has and store this information to later reduce these duplicates.
3. **Maximize Distinction**:
   - Sort the list of excess counts to tackle the smallest duplicates first which allows us to use `k` effectively.
   - Keep reducing duplicates until we run out of operations or have minimized the duplicates sufficiently.
   - Finally, if there are operations left (`k > 0`), they can be used to create new distinct values, as each `k` can potentially represent a new distinct value.

### Time Complexity
The time complexity of this algorithm is O(n log n), primarily due to sorting the excess counts, where `n` is the number of elements in the input array. The space complexity is O(n) as well, due to storing the frequency counts and distinct elements.

This solution should effectively maximize the number of distinct elements possible after performing up to `k` operations.