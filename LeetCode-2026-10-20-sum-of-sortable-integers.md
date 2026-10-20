# LeetCode Daily – 2026-10-20

## 🧠 Problem #3886 – **Sum of Sortable Integers**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sum-of-sortable-integers)

---

### 📝 Problem Description

You are given an integer array nums of length n.

An integer k is called sortable if k divides n and you can sort nums in non-decreasing order by sequentially performing the following operations:


	Partition nums into consecutive subarrays of length k.
	Cyclically rotate each subarray independently any number of times to the left or to the right.


Return an integer denoting the sum of all possible sortable integers k.

 
Example 1:


Input: nums = [3,1,2]

Output: 3

Explanation:​​​​​​​


	For n = 3, possible divisors are 1 and 3.
	For k = 1: each subarray has one element. No rotation can sort the array.
	For k = 3: the single subarray [3, 1, 2] can be rotated once to produce [1, 2, 3], which is sorted.
	Only k = 3 is sortable. Hence, the answer is 3.



Example 2:


Input: nums = [7,6,5]

Output: 0

Explanation:


	For n = 3, possible divisors are 1 and 3.
	For k = 1: each subarray has one element. No rotation can sort the array.
	For k = 3: the single subarray [7, 6, 5] cannot be rotated into non-decreasing order.
	No k is sortable. Hence, the answer is 0.



Example 3:


Input: nums = [5,8]

Output: 3

Explanation:​​​​​​​


	For n = 2, possible divisors are 1 and 2.
	Since [5, 8] is already sorted, every divisor is sortable. Hence, the answer is 1 + 2 = 3.



 
Constraints:


	1 <= n == nums.length <= 105
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Sum of Sortable Integers" requires calculating the sum of all integers from 1 to n that can be sorted in ascending order. A number is considered sortable if it can be rearranged (without changing its digits) to form a number that is greater than or equal to the original. 

### Key Observations:

1. A number can have its digits rearranged while still being less than or equal to itself if and only if the digits are in non-decreasing order.
   
2. Therefore, we need to consider numbers that have their digits in non-decreasing order. 

3. For instance, the number 123 is sortable because it can remain 123 or can be rearranged in the same order, while the number 321 is not sortable.

### Approach:

1. We simulate generating all integers from 1 to n, checking whether each integer is sortable.
  
2. For each integer:
   - Convert it to a string to analyze its digits.
   - Verify if the digits are in non-decreasing order.
  
3. If the integer is sortable, accumulate it in a total sum.

### Implementation:

We'll implement this step by step.

```cpp
#include <iostream>
#include <string>

using namespace std;

bool isSortable(int num) {
    string s = to_string(num);
    for (int i = 1; i < s.size(); ++i) {
        if (s[i] < s[i-1]) {
            return false; // Found a digit that is less than the previous one
        }
    }
    return true; // All digits are in non-decreasing order
}

int sumOfSortableIntegers(int n) {
    int sum = 0;
    for (int i = 1; i <= n; ++i) {
        if (isSortable(i)) {
            sum += i;
        }
    }
    return sum;
}

int main() {
    int n;
    cout << "Enter value of n: ";
    cin >> n; // User input for n
    cout << "Sum of sortable integers: " << sumOfSortableIntegers(n) << endl;
    return 0;
}
```

### Explanation:

- **Function `isSortable(int num)`**: This helper function takes an integer, converts it to its string representation, and checks whether the digits are in non-decreasing order. It returns `true` if the number is sortable and `false` otherwise.

- **Function `sumOfSortableIntegers(int n)`**: This function iterates through all integers from 1 to n, calling `isSortable()` for each integer to determine if it should be included in the sum. If it is sortable, the integer is added to the sum.

- The `main()` function serves as the entry point of the program. It prompts the user for input and outputs the computed result.

### Complexity Note:

The time complexity for checking sortability of a number is O(d), where d is the number of digits. In the worst-case scenario, we traverse numbers from 1 to n, meaning the overall complexity is O(n * d), where d = log(n) for numbers up to n.

This implementation covers all the necessary requirements of the problem comprehensively.