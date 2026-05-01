# LeetCode Daily – 2026-05-01

## 🧠 Problem #396 – **Rotate Function**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotate-function)

---

### 📝 Problem Description

You are given an integer array nums of length n.

Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow:


	F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].


Return the maximum value of F(0), F(1), ..., F(n-1).

The test cases are generated so that the answer fits in a 32-bit integer.

 
Example 1:


Input: nums = [4,3,2,6]
Output: 26
Explanation:
F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.


Example 2:


Input: nums = [100]
Output: 0


 
Constraints:


	n == nums.length
	1 <= n <= 105
	-100 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Rotate Function" problem requires calculating the maximum value of a specific function \( F(k) \) which is defined based on a list of integers when rotated. The key here is to derive a solution that avoids recalculating the function from scratch for each rotation.

### Problem Statement

You are given an integer array `A` of size `n`. The **rotate function** \( F(k) \) for a given rotation \( k \) is defined as:

\[
F(k) = 0 \cdot A[k] + 1 \cdot A[(k + 1) \mod n] + 2 \cdot A[(k + 2) \mod n] + \ldots + (n-1) \cdot A[(k + n - 1) \mod n]
\]

Your task is to find the maximum value of \( F(k) \) for \( 0 \leq k < n \).

### Approach to Solution

Instead of calculating \( F(k) \) separately for every \( k \) from 0 to \( n-1 \), we can notice that there is a relationship between successive \( F(k) \) values:

\[
F(k+1) = F(k) + \text{sum}(A) - n \cdot A[k]
\]

Where:
- \( \text{sum}(A) \) is the sum of all elements in the array.
- \( A[k] \) is the element that gets excluded from the weighted sum when moving from \( F(k) \) to \( F(k+1) \).

### C++ Code Implementation

Here's how you could implement this in C++:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    int maxRotateFunction(std::vector<int>& A) {
        int n = A.size();
        if (n == 0) return 0;

        int sumA = 0;  // Sum of all elements in A
        int F = 0;     // F(0), initial value of the rotate function

        // Calculate sumA and F(0)
        for (int i = 0; i < n; i++) {
            sumA += A[i];
            F += i * A[i];
        }

        int maxValue = F; // Initialize max to F(0)

        // Calculate F(k) for k from 1 to n-1
        for (int k = 1; k < n; k++) {
            F = F + sumA - n * A[k - 1]; // Update F using the relationship
            maxValue = std::max(maxValue, F); // Update the max value found
        }

        return maxValue;
    }
};

int main() {
    Solution solution;
    std::vector<int> A = {4, 3, 2, 6};
    int result = solution.maxRotateFunction(A);
    std::cout << "Maximum Rotate Function Value: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code

1. **Initialization**:
   - Calculate the sum of the array `sumA` and the initial value `F(0)`.
   - `F(0)` is computed with a simple loop that goes through each index and sums up the products of the index and its corresponding value.

2. **Iterate Over Rotations**:
   - For each rotation from 1 to \( n-1 \):
     - Update `F` using our previously derived relation.
     - Update `maxValue` to keep track of the maximum of all calculated values of \( F(k) \).

3. **Return the Result**:
   - Finally, return the maximum value found during the iterations.

This efficient approach results in a time complexity of \( O(n) \) as each element of the array is processed a constant number of times, making it suitable for large arrays. The solution also uses \( O(1) \) extra space beyond the input array.