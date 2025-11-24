# LeetCode Daily – 2025-11-24

## 🧠 Problem #1018 – **Binary Prefix Divisible By 5**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-prefix-divisible-by-5)

---

### 📝 Problem Description

You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).


	For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.


Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

 
Example 1:


Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.


Example 2:


Input: nums = [1,1,1]
Output: [false,false,false]


 
Constraints:


	1 <= nums.length <= 105
	nums[i] is either 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's dive into the "Binary Prefix Divisible By 5" problem from LeetCode.

### Problem Statement

You are given a binary array `nums`. A **binary prefix** is a prefix of the array that contains the first `k` elements, where `0 <= k <= nums.length`. We need to determine if the value of the binary prefix is divisible by 5 for each prefix.

For example, for a binary array `nums`, if you consider `nums = [1, 0, 1]`, the prefixes would be `1`, `10`, and `101` which in decimal are `1`, `2`, and `5`, respectively. For the output, you need to return an array of booleans that indicate whether each of these prefixes are divisible by 5.

### Approach

To solve the problem, we can iterate through the input array while maintaining a current value of the binary prefix as we go. 

1. Start with an integer variable `prefixValue` initialized to `0`.
2. For each element in `nums`, update `prefixValue` by shifting it left (multiplying by 2) and adding the current binary digit (either `0` or `1`).
3. After updating `prefixValue`, check if it is divisible by `5` (`prefixValue % 5 == 0`).
4. Store the result in a results list.
5. Finally, return the results list.

### C++ Implementation

Here’s how we can implement this solution in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    vector<bool> prefixesDivBy5(vector<int>& nums) {
        vector<bool> result;
        int prefixValue = 0;

        for (int num : nums) {
            // Shift left and add the current number (binary digit)
            prefixValue = (prefixValue << 1) + num;
            // Check divisibility by 5
            result.push_back(prefixValue % 5 == 0);
        }

        return result;
    }
};
```

### Explanation of the Code

1. **Function Definition**: We define the `prefixesDivBy5` function that takes a reference to a vector of integers `nums`.
2. **Variable Initialization**: Initialize a vector `result` that will hold the boolean values for each prefix's divisibility by `5` and `prefixValue` to hold the computed binary value as we progress.
3. **Iterate through `nums`**: For each element in the input binary array:
   - We perform a left shift on `prefixValue` (equivalent to multiplying by `2`), and then add the current element (`num`).
   - After updating the `prefixValue`, check if it is divisible by `5` and store the result (`true` or `false`) in the `result` vector.
4. **Return the Result**: Finally, we return the `result` vector which contains the boolean values for each prefix.

### Complexity Analysis

- **Time Complexity**: O(N), where N is the number of elements in `nums`, since we make a single pass through the array.
- **Space Complexity**: O(N), to store the results in the output vector.

This solution captures the essence of the problem and operates efficiently.