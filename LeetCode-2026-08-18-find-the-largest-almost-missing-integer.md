# LeetCode Daily – 2026-08-18

## 🧠 Problem #3471 – **Find the Largest Almost Missing Integer**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-largest-almost-missing-integer)

---

### 📝 Problem Description

You are given an integer array nums and an integer k.

An integer x is almost missing from nums if x appears in exactly one subarray of size k within nums.

Return the largest almost missing integer from nums. If no such integer exists, return -1.
A subarray is a contiguous sequence of elements within an array.
 
Example 1:


Input: nums = [3,9,2,1,7], k = 3

Output: 7

Explanation:


	1 appears in 2 subarrays of size 3: [9, 2, 1] and [2, 1, 7].
	2 appears in 3 subarrays of size 3: [3, 9, 2], [9, 2, 1], [2, 1, 7].
	3 appears in 1 subarray of size 3: [3, 9, 2].
	7 appears in 1 subarray of size 3: [2, 1, 7].
	9 appears in 2 subarrays of size 3: [3, 9, 2], and [9, 2, 1].


We return 7 since it is the largest integer that appears in exactly one subarray of size k.


Example 2:


Input: nums = [3,9,7,2,1,7], k = 4

Output: 3

Explanation:


	1 appears in 2 subarrays of size 4: [9, 7, 2, 1], [7, 2, 1, 7].
	2 appears in 3 subarrays of size 4: [3, 9, 7, 2], [9, 7, 2, 1], [7, 2, 1, 7].
	3 appears in 1 subarray of size 4: [3, 9, 7, 2].
	7 appears in 3 subarrays of size 4: [3, 9, 7, 2], [9, 7, 2, 1], [7, 2, 1, 7].
	9 appears in 2 subarrays of size 4: [3, 9, 7, 2], [9, 7, 2, 1].


We return 3 since it is the largest and only integer that appears in exactly one subarray of size k.


Example 3:


Input: nums = [0,0], k = 1

Output: -1

Explanation:

There is no integer that appears in only one subarray of size 1.


 
Constraints:


	1 <= nums.length <= 50
	0 <= nums[i] <= 50
	1 <= k <= nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's walk through the LeetCode problem "Find the Largest Almost Missing Integer," and I'll provide you a C++ solution along with explanations.

### Problem Statement

You are given a zero-indexed array of integers `A` of size `n`. An integer `x` is called almost missing if the following conditions are satisfied:

1. `x` is not present in the array.
2. `1 <= x <= n + 1`

Your task is to find the largest almost missing integer in the array.

### Steps to Solve the Problem

1. **Track the Presence of Integers**: Use a set to record all the integers present in the array for quick lookup.
  
2. **Determine the Range**: Since `x` needs to be between `1` and `n + 1`, we need to check all integers in this range.

3. **Find the Largest Almost Missing Integer**: Loop through the range from `n + 1` down to `1`. The first integer you find that is not in the set of integers from the array is the largest almost missing integer.

### C++ Solution

Here is the C++ code that implements the above logic:

```cpp
#include <vector>
#include <set>
#include <iostream>

class Solution {
public:
    int findLargestInteger(std::vector<int>& A) {
        int n = A.size();
        std::set<int> presentNumbers;

        // Step 1: Store all numbers present in the array in a set
        for (int num : A) {
            presentNumbers.insert(num);
        }

        // Step 2: Check from n + 1 down to 1
        for (int x = n + 1; x >= 1; --x) {
            if (presentNumbers.find(x) == presentNumbers.end()) {
                return x;  // x is almost missing, return it
            }
        }

        // If no value found, return -1 (not specified but a safe default)
        return -1;
    }
};

// Example usage
int main() {
    Solution solution;
    std::vector<int> A = {1, 2, 3, 4};
    std::cout << solution.findLargestInteger(A) << std::endl;  // Output: 5
    return 0;
}
```

### Explanation of the Code

1. **Data Structures**: 
   - We use a `set<int>` called `presentNumbers` to efficiently store and check for integers present in the array `A`.

2. **Populating the Set**:
   - We iterate through the array `A` and insert each number into the `presentNumbers` set.

3. **Finding the Largest Almost Missing Integer**:
   - We start checking from `n + 1` down to `1`. If we find an integer `x` that isn't in `presentNumbers`, we return it immediately.

4. **Main Function**: 
   - In the `main` function, we demonstrate how to use the `Solution` class by creating an example vector and printing the result.

### Time Complexity
- Inserting all elements into a set takes O(n) time.
- Checking for the largest almost missing integer involves iterating up to `n + 1` which takes O(n) in the worst case.
- Overall, the time complexity is O(n).

This solution is efficient and straightforward while meeting the problem's requirements. Let me know if you have any other questions or need further clarifications!