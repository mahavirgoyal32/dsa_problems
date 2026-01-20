# LeetCode Daily – 2026-01-20

## 🧠 Problem #3314 – **Construct the Minimum Bitwise Array I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i)

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
	2 <= nums[i] <= 1000
	nums[i] is a prime number.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Construct the Minimum Bitwise Array I" is about creating a new array based on the XOR operation with an existing array.

### Problem Explanation

Given an integer array `A`, the task is to construct another integer array `B` such that:
- For each element `B[i]`, it should be the minimum possible value that satisfies the condition `A[i] = B[i] XOR (B[i] + 1)`.

To understand this condition, let's break it down:
1. **XOR Operation**: The XOR of two bits results in `1` when the bits are different, and `0` when they are the same.
2. The equation `A[i] = B[i] XOR (B[i] + 1)` implies that if you know `A[i]`, you can find `B[i]` relatively easily.

### Finding the Solution

Given the function of XOR, we can derive some properties about `B[i]`:
- If we express `B[i]` as `x`, then `A[i] = x XOR (x + 1)`.
- This means that we need to find a number `x` such that the XOR yields `A[i]`.

To solve this, we can iterate over each element of the input array and directly derive the corresponding `B[i]`:

- The mapping works like this:
  - For even `A[i]`: The optimal solution is simply `A[i] / 2`.
  - For odd `A[i]`: The optimal solution is `(A[i] - 1) / 2`.

Using the above logic, we can derive the array `B` efficiently.

### C++ Implementation

Here’s how we can implement this in C++:

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> constructArray(vector<int>& A) {
        vector<int> B;
        // Iterate over each element in A
        for (int a : A) {
            // Apply the derived condition to fill B based on A
            if (a % 2 == 0) {
                B.push_back(a / 2);
            } else {
                B.push_back((a - 1) / 2);
            }
        }
        return B;
    }
};

int main() {
    Solution solution;
    vector<int> A = { 2, 3, 4, 5 }; // Example input
    vector<int> B = solution.constructArray(A);
    
    cout << "Constructed B array: ";
    for (int b : B) {
        cout << b << " ";
    }
    cout << endl;
    
    return 0;
}
```

### How This Works

1. We create a solution class and define `constructArray` to take a vector `A`.
2. We then create a new vector `B`.
3. We iterate through each element in `A`, checking if it's odd or even to compute the appropriate `B[i]`.
4. Finally, we push the computed values into vector `B` and return it.

### Conclusion

This approach is simple, efficient, and runs in O(n) time complexity, where n is the size of the input array `A`. Each operation consists of basic arithmetic and is straightforward. You can test the implementation with various input arrays to see its correctness and efficiency!