# LeetCode Daily – 2025-10-29

## 🧠 Problem #3370 – **Smallest Number With All Set Bits**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-number-with-all-set-bits)

---

### 📝 Problem Description

You are given a positive number n.

Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

 
Example 1:


Input: n = 5

Output: 7

Explanation:

The binary representation of 7 is &quot;111&quot;.


Example 2:


Input: n = 10

Output: 15

Explanation:

The binary representation of 15 is &quot;1111&quot;.


Example 3:


Input: n = 3

Output: 3

Explanation:

The binary representation of 3 is &quot;11&quot;.


 
Constraints:


	1 <= n <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Smallest Number With All Set Bits" requires us to find the smallest integer that has exactly `n` bits set. This means that if `n` is 3, we need to find the smallest number which, in its binary form, has exactly three 1's.

### Explanation

**Key Observations:**
1. A number with `n` bits set can be represented as a binary number that contains `n` ones. The number that achieves this is simply `2^n - 1`. This results in a number that is `n` bits filled with 1's, which is the smallest representation of having `n` set bits.
2. For example:
    - For `n = 1`, the number is `1` (binary: `1`)
    - For `n = 2`, the number is `3` (binary: `11`)
    - For `n = 3`, the number is `7` (binary: `111`)
    
The formula `2^n - 1` yields a number where all bits are set.

### C++ Implementation

The implementation is straightforward since we can compute the result using left-shift operation or simply use the formula.

Here’s how we can write it in C++:

```cpp
#include <iostream>
#include <cmath> // For pow function
using namespace std;

class Solution {
public:
    int smallestNumber(int n) {
        return (1 << n) - 1; // Left shift 1 by n to get 2^n and subtract 1
    }
};

int main() {
    Solution solution;
    int n;

    // Test case input
    cout << "Enter the number of set bits: ";
    cin >> n;

    int result = solution.smallestNumber(n);
    cout << "Smallest number with " << n << " set bits is: " << result << endl;

    return 0;
}
```

### Explanation of the Code:
1. We define a class `Solution` with a method `smallestNumber(int n)` that computes the result for the given `n`.
2. Inside the `smallestNumber` function, we compute `(1 << n) - 1`. The left shift operator `<<` moves `1` to the left `n` spaces, effectively calculating `2^n`.
3. Finally, we subtract `1` to obtain a number that has `n` set bits.
4. In the `main` function, we take an input for `n`, call the `smallestNumber` method and print the result.

### Complexity:
- **Time Complexity:** O(1) because we are just doing a few arithmetic operations.
- **Space Complexity:** O(1) since we are using a fixed amount of space.

This solution efficiently calculates the desired number with the required number of set bits.