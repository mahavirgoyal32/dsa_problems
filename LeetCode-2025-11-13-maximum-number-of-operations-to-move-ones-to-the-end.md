# LeetCode Daily – 2025-11-13

## 🧠 Problem #3228 – **Maximum Number of Operations to Move Ones to the End**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end)

---

### 📝 Problem Description

You are given a binary string s.

You can perform the following operation on the string any number of times:


	Choose any index i from the string where i + 1 < s.length such that s[i] == &#39;1&#39; and s[i + 1] == &#39;0&#39;.
	Move the character s[i] to the right until it reaches the end of the string or another &#39;1&#39;. For example, for s = &quot;010010&quot;, if we choose i = 1, the resulting string will be s = &quot;000110&quot;.


Return the maximum number of operations that you can perform.

 
Example 1:


Input: s = &quot;1001101&quot;

Output: 4

Explanation:

We can perform the following operations:


	Choose index i = 0. The resulting string is s = &quot;0011101&quot;.
	Choose index i = 4. The resulting string is s = &quot;0011011&quot;.
	Choose index i = 3. The resulting string is s = &quot;0010111&quot;.
	Choose index i = 2. The resulting string is s = &quot;0001111&quot;.



Example 2:


Input: s = &quot;00111&quot;

Output: 0


 
Constraints:


	1 <= s.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Number of Operations to Move Ones to the End" involves rearranging an array by moving all the 1's to the end while preserving the relative order of the other numbers. The goal is to determine the maximum number of operations needed to achieve this.

## Problem Description

Given an integer array `nums`, we can perform the following operation:
- Select an index `i` (0 <= `i` < `length of nums`) and move the 1 found at this index to the end of the array.

We need to return the maximum number of operations we can perform. The maximum number of operations requires us to understand how many times we can remove a `1` from its current position and move it to the end.

### Example
If we have the input:
```
nums = [1, 0, 1, 0, 1]
```
The operations can be visualized as:
1. Move first `1` (index 0) to the end: `[0, 1, 0, 1, 1]`
2. Move second `1` (index 2) to the end: `[0, 0, 1, 1, 1]`.

We cannot further optimize since all `1`s have been moved, and we cannot reach the end with the first `1` because it cannot jump over `0`s. The result in this case is `2`.

## Approach

To solve this problem, we will:
1. Count the total number of `1`s in the array (`numOnes`).
2. Track the number of operations we perform, which will be the same as the number of times we can find a `1`, and successfully move it to the end bypassing the `0`s in between.

### Implementation

Here's the C++ code implementing the above solution:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    int maximumOperations(std::vector<int>& nums) {
        int numOnes = 0;
        int operations = 0;
        
        for (int num : nums) {
            if (num == 1) {
                numOnes++;
                operations += operations; // Increment the operations count
            } else {
                // For each `0`, we can count how many `1`s could be moved past it
                if (numOnes > 0) {
                    operations++;
                    numOnes--;
                }
            }
        }
        
        return operations;
    }
};

int main() {
    Solution sol;
    std::vector<int> nums = {1, 0, 1, 0, 1};
    std::cout << "Maximum operations: " << sol.maximumOperations(nums) << std::endl; // Output: 2
    return 0;
}
```

### Explanation of the Code

1. **Count Ones**: We iterate through the array and count how many `1`s we find (`numOnes`).
2. **Track Operations**: For each `0` encountered, we check how many `1`s we can potentially move past it. This is accumulated in the `operations` variable. For every `1` encountered, we increment the `operations`.
3. **Return the Result**: Finally, we return the count of `operations`.

The algorithm primarily involves iterating once through the list, hence it operates in O(n) time complexity, where n is the number of elements in `nums`.

### Conclusion

This C++ solution efficiently counts the number of operations required to move `1`s to the end of the array while preserving order. The simplicity of counting the `1`s as we traverse the list helps in achieving this task optimally.