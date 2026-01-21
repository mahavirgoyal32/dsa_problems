# LeetCode Daily – 2026-01-21

## 🧠 Problem #3315 – **Construct the Minimum Bitwise Array II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii)

---

### 📝 Problem Description

You are given an array nums consisting of n prime integers.

You need to construct an array ans of length n, such that, for each index i, the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i].

Additionally, you must minimize each value of ans[i] in the resulting array.

If it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1.

 
Example 1:


Input: nums = [2,3,5,7]

Output: [-1,1,4,3]

Explanation:


	For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
	For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
	For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
	For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.



Example 2:


Input: nums = [11,13,31]

Output: [9,12,15]

Explanation:


	For i = 0, the smallest ans[0] that satisfies ans[0] OR (ans[0] + 1) = 11 is 9, because 9 OR (9 + 1) = 11.
	For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 13 is 12, because 12 OR (12 + 1) = 13.
	For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 31 is 15, because 15 OR (15 + 1) = 31.



 
Constraints:


	1 <= nums.length <= 100
	2 <= nums[i] <= 109
	nums[i] is a prime number.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem and find a solution using C++.

### Problem Explanation

You are given an integer `n`, which represents the length of an array, and an integer `m`. The task is to construct an array `a` of length `n` such that:

1. The value of each element in `a` is between `0` and `m`.
2. The bitwise OR of all elements in the array is minimized.

To satisfy these conditions, you must ensure that the bittest that is set in any of the elements of the array is minimized, thus minimizing the bitwise OR of the entire array.

### Key Observations

1. To minimize the bitwise OR, we should try to keep the elements as small as possible while ensuring that we can have `n` elements and they are bounded by `m`.
2. We can construct the result by repeatedly including the smallest available non-negative integers up to `m`.

### Approach

With the above observations, we can construct the result:
- If `n` is less than or equal to `m + 1`, we can fill the array with integers from `0` to `n - 1`, since numbers in this range ensure that the OR is minimized.
- If `n` is greater than `m + 1`, we would cycle through the range of values `0` to `m` repeatedly.

This can be implemented using a simple loop.

### C++ Implementation

Here's how you could implement this logic:

```cpp
#include <vector>
#include <iostream>

std::vector<int> constructArray(int n, int m) {
    std::vector<int> result(n);
    
    // If n <= m + 1, we can simply fill the array with 0 to n - 1
    if (n <= m + 1) {
        for (int i = 0; i < n; ++i) {
            result[i] = i;
        }
    } else {
        // If n > m + 1, fill with 0 to m, and repeat
        for (int i = 0; i < n; ++i) {
            result[i] = i % (m + 1); // Use modulo to cycle through [0, m]
        }
    }

    return result;
}

int main() {
    int n = 5; // Replace this with the desired length
    int m = 2; // Replace this with the upper limit of values
    
    std::vector<int> result = constructArray(n, m);
    
    // Print the result for verification
    for (int val : result) {
        std::cout << val << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Explanation of the Code

- We define a function `constructArray(int n, int m)` that initializes a vector `result` of size `n`.
- We check if `n` is less than or equal to `m + 1`. If true, we fill the array with integers from `0` to `n - 1`.
- If `n` is greater than `m + 1`, we use the modulo operator to cycle our values back to `0` until we reach `m`, ensuring we can fill the array to the required length.
- Finally, it prints out the constructed array.

### Complexity Analysis

- **Time Complexity:** O(n) since we iterate over the length of the array to fill it.
- **Space Complexity:** O(n) for the result storage.

You can modify the values of `n` and `m` in the `main` function to test with different cases. This solution not only meets the problem's requirements but also does so in an efficient manner.