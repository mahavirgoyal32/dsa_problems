# LeetCode Daily – 2026-08-15

## 🧠 Problem #3702 – **Longest Subsequence With Non-Zero Bitwise XOR**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor)

---

### 📝 Problem Description

You are given an integer array nums.

Return the length of the longest subsequence in nums whose bitwise XOR is non-zero. If no such subsequence exists, return 0.

 
Example 1:


Input: nums = [1,2,3]

Output: 2

Explanation:

One longest subsequence is [2, 3]. The bitwise XOR is computed as 2 XOR 3 = 1, which is non-zero.


Example 2:


Input: nums = [2,3,4]

Output: 3

Explanation:

The longest subsequence is [2, 3, 4]. The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non-zero.


 
Constraints:


	1 <= nums.length <= 105
	0 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the longest subsequence of an array such that the bitwise XOR of its elements is non-zero, we can leverage the properties of bitwise operations and the concept of linear independence in vector spaces over GF(2) (Galois Field of two elements).

### Problem Overview

We need to find the longest subsequence of an array such that the XOR of its elements is non-zero. A subsequence can be derived by deleting some or no elements without changing the order of the remaining elements.

### Key Insight

The XOR of a set of numbers can be thought of in terms of linear combinations over the field GF(2). Specifically:

1. Each number can be represented as a vector in a binary space.
2. The goal is to form a basis set where the vectors (numbers) are linearly independent.
3. If we manage to create a basis set with more than one element, we can combine them in such a way that the XOR is non-zero.

### Steps to Solve

1. **Construct a Basis**: We will build a basis (set of linearly independent vectors) for the given set of numbers. The number of elements that can be represented as a combination of basis vectors corresponds to the largest subsequence with a non-zero XOR.
  
2. **Count Elements**: The count of the basis vectors will give the maximum length of the subsequence we can achieve with a non-zero XOR.

### Implementation

```cpp
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int longestSubsequence(vector<int>& arr) {
        vector<int> basis(32, 0);  // Basis array to store independent vectors
        for (int num : arr) {
            for (int i = 31; i >= 0; --i) { // Process bits from 31 down to 0
                if ((num >> i) & 1) { // Check if i-th bit is set
                    if (basis[i] == 0) { // If there's no basis vector for this bit
                        basis[i] = num; // Set the current number as the basis for this bit
                        break; // Break early as we can't add more than one basis for the same bit
                    }
                    // If we have an existing basis, reduce `num`
                    num ^= basis[i]; // Reduce the number using the existing basis
                }
            }
        }
        
        // Count the number of non-zero entries in the basis
        int count = 0;
        for (int num : basis) {
            if (num != 0) {
                count++;
            }
        }
        
        // If we have more than one basis vector, we can form a non-zero XOR
        return (count > 0) ? count : 0; // If count is 0, the result is impossible (empty case)
    }
};

int main() {
    Solution solution;
    vector<int> arr = {1, 2, 3, 4}; // Example input
    cout << solution.longestSubsequence(arr) << endl; // Example output
    return 0;
}
```

### Explanation of the Code

1. **Basis Initialization**: We create an array `basis` of size 32 (since integers are represented in 32 bits) initialized to zeros. Each position represents whether we have an independent vector corresponding to that bit.

2. **Building the Basis**:
   - For each number in `arr`, we check each bit from the highest (31) to the lowest (0).
   - If the current bit is set and there’s no existing basis vector for that bit, we store the number in the basis and break.
   - If there is an existing basis vector, we reduce the `num` using the XOR operation with the basis vector.

3. **Counting Non-Zero Basis Vectors**: Finally, we count how many entries in the `basis` array are non-zero. Each non-zero entry corresponds to an independent vector contributing to the longest subsequence with a non-zero XOR.

4. **Return Count**: If there are independent vectors (count > 0), we return the count, as it indicates the maximum length of the subsequence we can take.

This method effectively computes the solution using a time complexity of O(n * k), where n is the number of elements and k is the number of bits (which is constant, 32 for integers).