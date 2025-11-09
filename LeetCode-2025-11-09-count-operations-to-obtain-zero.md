# LeetCode Daily – 2025-11-09

## 🧠 Problem #2169 – **Count Operations to Obtain Zero**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-operations-to-obtain-zero)

---

### 📝 Problem Description

You are given two non-negative integers num1 and num2.

In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.


	For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.


Return the number of operations required to make either num1 = 0 or num2 = 0.

 
Example 1:


Input: num1 = 2, num2 = 3
Output: 3
Explanation: 
- Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
- Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
- Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
So the total number of operations required is 3.


Example 2:


Input: num1 = 10, num2 = 10
Output: 1
Explanation: 
- Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
So the total number of operations required is 1.


 
Constraints:


	0 <= num1, num2 <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's work through the "Count Operations to Obtain Zero" problem from LeetCode. I'll start by summarizing the problem, and then I'll provide a C++ solution with an explanation.

### Problem Summary
In the problem, you are given two integers, `A` and `B`. Your task is to perform a series of operations where you can either subtract the smaller number from the larger one or subtract the larger number from the smaller one. Your goal is to count how many operations it takes to make both numbers zero.

### Example
For example:
- Input: `A = 2`, `B = 3`
- Output: `3`
  - Operations: (3-2=1), (2-1=1), (1-1=0), at this point both are 0.

### Solution Approach
To solve this problem, we can perform the following steps:
1. Continuously determine which of the two integers is greater.
2. Subtract the smaller integer from the larger integer. This is effectively a step towards reducing the difference between the two numbers.
3. Count how many times you can perform this operation in one go by using integer division (we can reduce `A` and `B` in one go depending on how many times the smaller number fits into the larger number).
4. Update the two numbers accordingly and repeat until both are zero.

### C++ Code Implementation
Here is a possible implementation:

```cpp
#include <iostream>
#include <algorithm>

int countOperations(int A, int B) {
    int operations = 0;
    
    while (A > 0 && B > 0) {
        // Always ensure A is the larger number.
        if (A < B) {
            std::swap(A, B);
        }
        // A is guaranteed to be greater than or equal to B here.
        operations += A / B; // Count how many times we can subtract B from A.
        A = A % B; // Update A to be A-B*A/B, using modulus.
    }

    return operations;
}

int main() {
    int A = 2, B = 3;
    std::cout << "Operations to obtain zero: " << countOperations(A, B) << std::endl;
    return 0;
}
```

### Explanation of Code
1. **Initialization**: We initialize a counter `operations` to keep track of the number of operations performed.
2. **Loop**: We use a `while` loop that runs as long as both `A` and `B` are greater than zero.
3. **Swapping**: Inside the loop, we check which of `A` or `B` is smaller and ensure that `A` is always the larger one by using `std::swap`.
4. **Count Operations**: We then calculate how many times we can subtract `B` from `A` in one go using `A / B`.
5. **Updating A**: We use the modulus to update `A` (`A = A % B`), which effectively mimics the subtraction operation iteratively until `A` becomes less than `B`.
6. **Return Result**: The final number of `operations` is returned.

### Complexity
- **Time Complexity**: O(log(max(A, B))) since each step reduces the problem size significantly (similar to how the Euclidean algorithm works for computing GCD).
- **Space Complexity**: O(1) as only a few integers are used for calculations.

This implementation efficiently counts the number of operations required to reduce both numbers to zero.