# LeetCode Daily – 2026-07-15

## 🧠 Problem #3658 – **GCD of Odd and Even Sums**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/gcd-of-odd-and-even-sums)

---

### 📝 Problem Description

You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:


	
	sumOdd: the sum of the smallest n positive odd numbers.
	
	
	sumEven: the sum of the smallest n positive even numbers.
	


Return the GCD of sumOdd and sumEven.

 
Example 1:


Input: n = 4

Output: 4

Explanation:


	Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
	Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20


Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.


Example 2:


Input: n = 5

Output: 5

Explanation:


	Sum of the first 5 odd numbers sumOdd = 1 + 3 + 5 + 7 + 9 = 25
	Sum of the first 5 even numbers sumEven = 2 + 4 + 6 + 8 + 10 = 30


Hence, GCD(sumOdd, sumEven) = GCD(25, 30) = 5.


 
Constraints:


	1 <= n <= 10​​​​​​​00

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "GCD of Odd and Even Sums" asks you to determine the greatest common divisor (GCD) of two sums: the sum of the odd indexed elements and the sum of the even indexed elements in an array.

Here's how you can approach solving the problem in C++:

### Problem Breakdown
1. **Input**: An array of integers.
2. **Output**: The GCD of:
   - The sum of the elements at odd indices (1-based).
   - The sum of the elements at even indices (1-based).

### Steps to Solve the Problem:
- Initialize two variables to store the sums of the odd and even indexed elements.
- Iterate through the array and accumulate the sums based on the index.
- Use the `gcd` function from the `<numeric>` library to compute the GCD of the two sums.
- Return the GCD value.

### C++ Code
Here's a C++ implementation of the above logic:

```cpp
#include <iostream>
#include <vector>
#include <numeric> // For std::gcd

class Solution {
public:
    int findGCD(std::vector<int>& nums) {
        int oddSum = 0;
        int evenSum = 0;
        
        // Compute sums of odd and even indexed positions
        for (size_t i = 0; i < nums.size(); ++i) {
            if ((i + 1) % 2 == 0) { // 1-based even index
                evenSum += nums[i];
            } else { // 1-based odd index
                oddSum += nums[i];
            }
        }
        
        // Calculate and return the GCD of oddSum and evenSum
        return std::gcd(oddSum, evenSum);
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {1, 2, 3, 4, 5}; // Example input
    std::cout << "GCD of odd and even sums: " << solution.findGCD(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code:
1. **Header Files**: We include the necessary headers. `<numeric>` is useful for the `std::gcd` function.
2. **Solution Class**: We define a class `Solution` with a member function `findGCD`, which takes a vector of integers.
3. **Odd and Even Sums Calculation**:
   - We initialize `oddSum` and `evenSum` to zero.
   - We loop through each element in the `nums` vector using its index.
   - We check if the 1-based index (`i + 1`) is odd or even and update the respective sums accordingly.
4. **Calculate GCD**: Finally, we use `std::gcd` to compute the GCD of `oddSum` and `evenSum`.
5. **Main Function**: We demonstrate an example of using the `findGCD` method.

### Complexity
- **Time Complexity**: O(n), where n is the number of elements in the array since we iterate through the array once to compute the sums.
- **Space Complexity**: O(1), since we are using a constant amount of space regardless of the input size.

This implementation efficiently computes the desired GCD for the sums derived from odd and even indexed positions.