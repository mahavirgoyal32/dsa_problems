# LeetCode Daily – 2025-11-22

## 🧠 Problem #3190 – **Find Minimum Operations to Make All Elements Divisible by Three**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three)

---

### 📝 Problem Description

You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.

 
Example 1:


Input: nums = [1,2,3,4]

Output: 3

Explanation:

All array elements can be made divisible by 3 using 3 operations:


	Subtract 1 from 1.
	Add 1 to 2.
	Subtract 1 from 4.



Example 2:


Input: nums = [3,6,9]

Output: 0


 
Constraints:


	1 <= nums.length <= 50
	1 <= nums[i] <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem titled "Find Minimum Operations to Make All Elements Divisible by Three", we need to determine the minimum number of operations required to modify the elements of an array such that all elements become divisible by three. The operations allowed are incrementing or decrementing the elements of the array by 1.

### Problem Breakdown

1. **Understanding Modulo Operation**: 
   - When we take a number and perform a modulo operation with 3, it can yield three possible results: \(0\), \(1\), or \(2\).
   - A number that gives \(0\) when taken modulo \(3\) is already divisible by \(3\).
   - A number that gives \(1\) requires one operation (either decrement by \(1\) or increment by \(2\)) to become divisible by \(3\).
   - A number that gives \(2\) requires one operation (either increment by \(1\) or decrement by \(2\)) to become divisible by \(3\).

Given these observations, it is clear that:
- For each number in the array, if it gives a remainder of \(1\), we can make it divisible by \(3\) using \(1\) operation.
- For a number yielding a remainder of \(2\), we also require \(1\) operation.

### Steps to Solution:

1. Iterate through each number in the array.
2. Calculate the remainder of each number when divided by \(3\).
3. Sum the operations required based on the remainders found:
   - If remainder is \(1\): Count \(1\) operation.
   - If remainder is \(2\): Count \(1\) operation.

### C++ Implementation

Here's how you can implement the solution in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int minOperations(vector<int>& nums) {
        int operations = 0; // Initialize the total operations count

        // Iterate through each number in the array
        for (int num : nums) {
            int remainder = num % 3; // Calculate remainder when num is divided by 3
            
            // If remainder is 1 or 2, we need 1 operation to make it divisible by 3
            if (remainder == 1 || remainder == 2) {
                operations += 1; // Count this operation
            }
        }

        return operations; // return total operations needed
    }
};
```

### Explanation of the Code:

1. **Input Handling**: We take a vector of integers as input.
2. **Loop**: We loop through each number in the given array.
3. **Remainder Calculation**: For each number, compute the remainder when it is divided by \(3\).
4. **Conditional Checks**: 
   - We check if the remainder is \(1\) or \(2\). If either condition is true, we need one operation to adjust the number to become divisible by \(3\).
5. **Count Operations**: For each number requiring adjustment, we increment our `operations` counter by \(1\).
6. **Return Result**: Finally, return the total number of operations.

### Complexities:
- **Time Complexity**: \(O(n)\), where \(n\) is the number of elements in the array, since we process each element once.
- **Space Complexity**: \(O(1)\), since we are using a constant amount of space for our variables. 

This approach efficiently counts the minimum operations needed to make all array elements divisible by three.