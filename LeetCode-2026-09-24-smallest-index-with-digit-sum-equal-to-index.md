# LeetCode Daily – 2026-09-24

## 🧠 Problem #3550 – **Smallest Index With Digit Sum Equal to Index**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index)

---

### 📝 Problem Description

You are given an integer array nums.

Return the smallest index i such that the sum of the digits of nums[i] is equal to i.

If no such index exists, return -1.

 
Example 1:


Input: nums = [1,3,2]

Output: 2

Explanation:


	For nums[2] = 2, the sum of digits is 2, which is equal to index i = 2. Thus, the output is 2.



Example 2:


Input: nums = [1,10,11]

Output: 1

Explanation:


	For nums[1] = 10, the sum of digits is 1 + 0 = 1, which is equal to index i = 1.
	For nums[2] = 11, the sum of digits is 1 + 1 = 2, which is equal to index i = 2.
	Since index 1 is the smallest, the output is 1.



Example 3:


Input: nums = [1,2,3]

Output: -1

Explanation:


	Since no index satisfies the condition, the output is -1.



 
Constraints:


	1 <= nums.length <= 100
	0 <= nums[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the problem "Smallest Index With Digit Sum Equal to Index" from LeetCode.

### Problem Explanation
In this problem, you are asked to find the smallest index `i` such that the sum of the digits of `i` is equal to `i` itself. For example, if `i = 12`, the sum of its digits is `1 + 2 = 3`, which is not equal to `12`, but for `i = 3`, the sum of the digits is equal to `3`.

The task requires us to check each index `i` starting from `0` to a given number `n` and find the smallest index that satisfies this condition.

### Plan
1. Loop through every index `i` from `0` to `n`.
2. For each index, calculate the digit sum of `i`.
3. Compare the digit sum to `i`. If they are equal, return `i`.
4. If no such index is found by the end of the loop, return `-1`.

### C++ Implementation
Here's how you can implement this in C++:

```cpp
#include <iostream>
using namespace std;

// Function to compute the digit sum of a number
int digitSum(int num) {
    int sum = 0;
    while (num > 0) {
        sum += num % 10; // Add the last digit
        num /= 10;       // Remove the last digit
    }
    return sum;
}

// Function to find the smallest index with digit sum equal to index
int smallestIndexWithDigitSumEqualToIndex(int n) {
    for (int i = 0; i <= n; ++i) {
        if (digitSum(i) == i) {
            return i; // Found the smallest index
        }
    }
    return -1; // No such index found
}

int main() {
    int n = 20; // Example input
    int result = smallestIndexWithDigitSumEqualToIndex(n);
    cout << "Smallest index with digit sum equal to index: " << result << endl;
    return 0;
}
```

### Explanation of the Code
1. **digitSum Function**: This function takes an integer `num` and calculates the sum of its digits by repeatedly extracting the last digit using the modulo operator (`%`) and then removing that digit using integer division (`/`).

2. **smallestIndexWithDigitSumEqualToIndex Function**: This function iterates from `0` to `n`. For each index `i`, it calls the `digitSum` function to compute the digit sum. If the digit sum equals `i`, it returns `i`. If the loop completes without finding such an index, it returns `-1`.

3. **main Function**: This is the entry point of the program where we provide an example input `n` and print the result obtained from our function.

### Example
For `n = 20`, the output will be `0` because the digit sum of `0` is `0`, and thus it is the smallest index where digit sum equals to the index itself.

### Complexity Analysis
- Time Complexity: O(n * d), where `n` is the input number and `d` is the number of digits (worst case scenario). Since the number of digits in any number is relatively small (about log10(n)), we can say this is linear with respect to `n`.
- Space Complexity: O(1) as we use only a constant amount of extra space.

This approach is efficient for small values of `n` and works well within typical constraints for easy problems on LeetCode.