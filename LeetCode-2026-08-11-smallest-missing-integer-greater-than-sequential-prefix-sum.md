# LeetCode Daily – 2026-08-11

## 🧠 Problem #2996 – **Smallest Missing Integer Greater Than Sequential Prefix Sum**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum)

---

### 📝 Problem Description

You are given a 0-indexed array of integers nums.

A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.

Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix.

 
Example 1:


Input: nums = [1,2,3,2,5]
Output: 6
Explanation: The longest sequential prefix of nums is [1,2,3] with a sum of 6. 6 is not in the array, therefore 6 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.


Example 2:


Input: nums = [3,4,5,1,12,14,13]
Output: 15
Explanation: The longest sequential prefix of nums is [3,4,5] with a sum of 12. 12, 13, and 14 belong to the array while 15 does not. Therefore 15 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.


 
Constraints:


	1 <= nums.length <= 50
	1 <= nums[i] <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let’s tackle the problem of finding the smallest missing integer greater than the sequential prefix sums of a given vector of integers.

### Problem Explanation

Given a list of integers, we first need to compute the prefix sums. After that, we will determine the smallest integer that is greater than all of these prefix sums and is not present in the list of integers.

For example, if you have an array `[1, 2, 3]`, the prefix sums would be:
- First prefix sum: `1`
- Second prefix sum: `1 + 2 = 3`
- Third prefix sum: `1 + 2 + 3 = 6`

So, the prefix sums are `[1, 3, 6]`. If we want to find the smallest missing integer greater than these prefix sums, we can evaluate the numbers greater than `6` which are not in the original array (in this case, the first missing integer is `4`).

### C++ Implementation

Let's write a C++ solution based on the above understanding.

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>

int smallestMissingIntegerGreaterThanPrefixSum(std::vector<int>& nums) {
    // Step 1: Compute the prefix sums and store them in a set
    std::unordered_set<int> prefixSumsSet;
    int prefixSum = 0;

    for (int num : nums) {
        prefixSum += num;
        prefixSumsSet.insert(prefixSum);
    }

    // Step 2: Find the smallest missing integer greater than the prefix sums
    int missingInteger = 1; // Start checking from 1
    while (prefixSumsSet.count(missingInteger) || (missingInteger <= prefixSum)) {
        ++missingInteger;
    }

    return missingInteger; // This is the smallest missing integer
}

int main() {
    std::vector<int> nums = {1, 2, 3};
    std::cout << "Smallest Missing Integer: " << smallestMissingIntegerGreaterThanPrefixSum(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code

1. **Prefix Sum Calculation**:
   - We initialize a `prefixSum` variable to keep track of the cumulative sum.
   - We iterate through each number in the input array, adding it to the `prefixSum` and inserting the current value of `prefixSum` into the `unordered_set` called `prefixSumsSet`. This set will help us efficiently check whether a number is missing.

2. **Finding the Missing Integer**:
   - We start checking from `1` (the smallest positive integer).
   - We continue to check if `missingInteger` exists in `prefixSumsSet` or if it is less than or equal to the last calculated prefix sum.
   - If it is found in the set, or it is not greater than all prefix sums, we increment `missingInteger` and check again.

3. **Output**:
   - Once we find the first integer that isn't in the set and is greater than all prefix sums, we return that as the result.

### Complexity:
- The time complexity is O(n) for calculating the prefix sums and checking for the smallest missing integer.
- The space complexity is O(n) for storing the prefix sums in a set.

By applying these concepts and structures, this solution efficiently solves the problem as required.