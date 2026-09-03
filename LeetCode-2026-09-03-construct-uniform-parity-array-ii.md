# LeetCode Daily – 2026-09-03

## 🧠 Problem #3876 – **Construct Uniform Parity Array II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/construct-uniform-parity-array-ii)

---

### 📝 Problem Description

You are given an array nums1 of n distinct integers.

You want to construct another array nums2 of length n such that the elements in nums2 are either all odd or all even.

For each index i, you must choose exactly one of the following (in any order):


	nums2[i] = nums1[i]​​​​​​​
	nums2[i] = nums1[i] - nums1[j], for an index j != i, such that nums1[i] - nums1[j] >= 1


Return true if it is possible to construct such an array, otherwise return false.

 
Example 1:


Input: nums1 = [1,4,7]

Output: true

Explanation:​​​​​​​​​​​​​​


	Set nums2[0] = nums1[0] = 1.
	Set nums2[1] = nums1[1] - nums1[0] = 4 - 1 = 3.
	Set nums2[2] = nums1[2] = 7.
	nums2 = [1, 3, 7], and all elements are odd. Thus, the answer is true.



Example 2:


Input: nums1 = [2,3]

Output: false

Explanation:

It is not possible to construct nums2 such that all elements have the same parity. Thus, the answer is false.


Example 3:


Input: nums1 = [4,6]

Output: true

Explanation:


	Set nums2[0] = nums1[0] = 4.
	Set nums2[1] = nums1[1] = 6.
	nums2 = [4, 6], and all elements are even. Thus, the answer is true.



 
Constraints:


	1 <= n == nums1.length <= 105
	1 <= nums1[i] <= 109
	nums1 consists of distinct integers.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Construct Uniform Parity Array II", we need to understand the problem statement and the requirements in detail.

### Problem Statement
You are given an integer `n` (which is guaranteed to be even) and an integer `odd` representing the number of odd numbers in the array. You need to create an array of length `n` that has:
- Exactly `odd` odd numbers.
- All the other numbers (i.e., `n - odd`) should be even.
- If both parts of the array can start from any number, they must have uniform parity.

### Approach
1. **Determine Odd and Even Counts**: 
   - Since `n` is even, if `odd` is the required number of odd integers, then the number of even integers would be `n - odd`.
  
2. **Fill the Array**:
   - For odd numbers, you can simply choose numbers starting from 1 (1, 3, 5, 7, ...). Only the first `odd` odd numbers are needed.
   - For even numbers, start with 0 (0, 2, 4, 6, ...). Only the first `n - odd` even numbers are needed.

3. **Generate the Result**:
   - Construct the result array by filling the odd numbers first, followed by even numbers.

### C++ Implementation
Here’s how you can implement it in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> constructArray(int n, int odd) {
        vector<int> result(n);
        
        // Fill odd numbers: 1, 3, 5, ...
        for (int i = 0; i < odd; ++i) {
            result[i] = 2 * i + 1;  // Generates odd numbers
        }
        
        // Fill even numbers: 0, 2, 4, ...
        for (int i = 0; i < n - odd; ++i) {
            result[odd + i] = 2 * i;  // Generates even numbers
        }

        return result;
    }
};
```
### Explanation of the Code
- We first create a vector `result` of size `n` to hold the final array.
- We use a loop to fill the first `odd` elements with odd integers using the formula `2 * i + 1`. This generates the sequence of odd numbers starting from 1.
- In the next loop, we fill the remaining `n - odd` elements with even integers using the formula `2 * i`, generating the sequence of even numbers starting from 0.
- Finally, the constructed array is returned.

### Example
Let’s consider an example:

1. **Input**: `n = 6` and `odd = 3`
   - Odd numbers needed = `3`: The first three odd numbers are `1`, `3`, `5`.
   - Even numbers needed = `n - odd = 6 - 3 = 3`: The first three even numbers are `0`, `2`, `4`.
   - Resulting Array = `[1, 3, 5, 0, 2, 4]`.

The solution guarantees that there are exactly `3` odd and `3` even numbers, fulfilling the problem requirements.

### Complexity
- **Time Complexity**: O(n), as we are looping through the range to fill the numbers.
- **Space Complexity**: O(n), for the result vector that we are returning. 

This approach efficiently constructs a uniform parity array that meets the conditions outlined in the problem statement.