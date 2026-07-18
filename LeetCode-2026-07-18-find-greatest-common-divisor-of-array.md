# LeetCode Daily – 2026-07-18

## 🧠 Problem #1979 – **Find Greatest Common Divisor of Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-greatest-common-divisor-of-array)

---

### 📝 Problem Description

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 
Example 1:


Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.


Example 2:


Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.


Example 3:


Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.


 
Constraints:


	2 <= nums.length <= 1000
	1 <= nums[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the problem "Find Greatest Common Divisor of Array" from LeetCode in C++. 

### Problem Statement:
Given an integer array `nums`, you need to find the greatest common divisor (GCD) of all the elements in the array. The GCD of two or more integers is the largest integer that divides all the integers without leaving a remainder.

### Example:
For instance, if `nums = [2, 4, 6, 8]`, the GCD is 2 because:

- The divisors of 2 are: {1, 2}
- The divisors of 4 are: {1, 2, 4}
- The divisors of 6 are: {1, 2, 3, 6}
- The divisors of 8 are: {1, 2, 4, 8}

The largest common divisor among these is 2.

### Approach:
1. **Define the GCD function:** We can use the built-in function `std::gcd()` available in C++17 to calculate the GCD of two numbers.
2. **Iterate through the array:** Start with the GCD of the first element, and then iteratively calculate the GCD with the next elements using the previously computed GCD.
3. **Return the final GCD:** After processing all elements, the result will be the GCD of the entire array.

### C++ Implementation:

```cpp
#include <iostream>
#include <vector>
#include <numeric> // For std::gcd

class Solution {
public:
    int findGCD(std::vector<int>& nums) {
        // Start by assuming the first element is the GCD
        int current_gcd = nums[0];
        
        // Iterate through the next elements in the array
        for (size_t i = 1; i < nums.size(); ++i) {
            // Update the current_gcd with the GCD of current_gcd and the current number
            current_gcd = std::gcd(current_gcd, nums[i]);
        }
        
        return current_gcd; // Return the GCD of the entire array
    }
};

// Example usage
int main() {
    Solution solution;
    std::vector<int> nums = {2, 4, 6, 8}; // Example input
    int gcd = solution.findGCD(nums);
    std::cout << "The GCD of the array is: " << gcd << std::endl; // Output: 2
    return 0;
}
```

### Explanation of the Code:
1. **Library Inclusion:** We include `<vector>` for using the vector and `<numeric>` for the `std::gcd` function.
2. **Class Definition:** The `Solution` class contains a public method `findGCD` which takes a vector of integers and computes the GCD.
3. **GCD Calculation:**
   - Initialize `current_gcd` with the first element of `nums`.
   - Loop through the elements starting from the second element, updating the `current_gcd` with the GCD of `current_gcd` and the current number using `std::gcd`.
4. **Return the Result:** Finally, the function returns the computed GCD.
5. **Main Function:** For demonstration, we create a vector of integers, call the `findGCD()` function, and print the result.

### Complexity Analysis:
- **Time complexity:** O(n), where n is the number of elements in the array. Each GCD computation can be done in logarithmic time.
- **Space complexity:** O(1), as we are using only a fixed amount of extra space.

This is a simple and efficient solution to the problem. If you have any further questions or need additional explanations, feel free to ask!