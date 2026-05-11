# LeetCode Daily – 2026-05-11

## 🧠 Problem #2553 – **Separate the Digits in an Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/separate-the-digits-in-an-array)

---

### 📝 Problem Description

Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

To separate the digits of an integer is to get all the digits it has in the same order.


	For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].


 
Example 1:


Input: nums = [13,25,83,77]
Output: [1,3,2,5,8,3,7,7]
Explanation: 
- The separation of 13 is [1,3].
- The separation of 25 is [2,5].
- The separation of 83 is [8,3].
- The separation of 77 is [7,7].
answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.


Example 2:


Input: nums = [7,1,3,9]
Output: [7,1,3,9]
Explanation: The separation of each integer in nums is itself.
answer = [7,1,3,9].


 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem of "Separate the Digits in an Array" involves separating the digits of each integer in a given array and returning them in a single array. Let's write the solution in C++ and break it down step by step.

### Problem Statement
Given an array of non-negative integers, we need to separate the digits of all the integers and return them in the order they appear in the array.

### Example
Input: `nums = [13, 25, 83]`
Output: `[1, 3, 2, 5, 8, 3]`

### Approach
1. **Iterate over each number** in the input array.
2. **Extract digits** from the number:
   - We can convert the number to a string to easily access each digit, or we can repeatedly use division and modulo operations to extract digits.
3. **Store all extracted digits** in a new array and return it.

### Implementation
Here's the C++ code that implements the above plan:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    std::vector<int> separateDigits(std::vector<int>& nums) {
        std::vector<int> result; // Resultant array to hold separated digits
        for (int num : nums) {    // Iterate through each number in nums
            std::string str = std::to_string(num); // Convert number to string
            for (char digit : str) { // Iterate through each character in the string
                result.push_back(digit - '0'); // Convert character to integer and add to result
            }
        }
        return result; // Return the final vector containing the separated digits
    }
};

int main() {
    Solution sol;
    std::vector<int> nums = {13, 25, 83};
    std::vector<int> result = sol.separateDigits(nums);
    
    // Output the result
    for (int digit : result) {
        std::cout << digit << " ";
    }
    return 0;
}
```

### Explanation of the Code
1. **Including Headers**: We include necessary headers such as `<vector>` for using vector and `<iostream>` for input/output.
  
2. **Defining the Class `Solution`**: The `Solution` class contains a public method `separateDigits`.

3. **Method `separateDigits`**:
   - **Input**: A reference to a vector of integers `nums`.
   - **Output**: A vector of integers containing individual digits.
   - **Process**:
     - We iterate over each integer in the `nums` vector.
     - Convert each integer to a string using the `std::to_string()` function.
     - Then, we iterate over each character of this string, converting it back to an integer by subtracting the character `'0'`.
     - Each extracted digit is added to the `result` vector using `push_back`.

4. **Main Function**: In the `main` function, we create an instance of `Solution`, define an input vector, call the `separateDigits` method, and print out the results.

### Complexity Analysis
- **Time Complexity**: O(K), where K is the total number of digits in all integers of the input array. This is because we need to process each digit once.
- **Space Complexity**: O(K) for storing the resulting digits.

This code efficiently separates and collects the digits from the given integers and outputs them as required.