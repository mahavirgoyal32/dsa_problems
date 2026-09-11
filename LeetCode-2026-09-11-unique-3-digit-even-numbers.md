# LeetCode Daily – 2026-09-11

## 🧠 Problem #3483 – **Unique 3-Digit Even Numbers**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/unique-3-digit-even-numbers)

---

### 📝 Problem Description

You are given an array of digits called digits. Your task is to determine the number of distinct three-digit even numbers that can be formed using these digits.

Note: Each copy of a digit can only be used once per number, and there may not be leading zeros.

 
Example 1:


Input: digits = [1,2,3,4]

Output: 12

Explanation: The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.


Example 2:


Input: digits = [0,2,2]

Output: 2

Explanation: The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.


Example 3:


Input: digits = [6,6,6]

Output: 1

Explanation: Only 666 can be formed.


Example 4:


Input: digits = [1,3,5]

Output: 0

Explanation: No even 3-digit numbers can be formed.


 
Constraints:


	3 <= digits.length <= 10
	0 <= digits[i] <= 9

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Unique 3-Digit Even Numbers" problem from LeetCode, we need to generate all unique 3-digit numbers that are even and do not have repeated digits. Let's break down the requirements and the approach to solve this problem step-by-step.

### Problem Breakdown:
1. **Three-Digit Numbers**: We need to focus on numbers from 100 to 999.
2. **Even Numbers**: The last digit of the number must be even (0, 2, 4, 6, 8).
3. **Unique Digits**: All three digits must be distinct; this means that none of the digits can repeat.

### Approach:
1. We will iterate through each digit of a 3-digit number.
2. For the last digit (the even digit), we can choose from {0, 2, 4, 6, 8} since the number must be even.
3. The first digit can vary from 1 to 9 (to ensure it's a three-digit number).
4. The middle digit can be any digit from 0 to 9, ensuring it is distinct from the first and last digits.
5. After generating valid combinations, we can store them in a set to automatically handle duplicates and then convert the set into a vector or another structure to return as the answer.

### C++ Implementation:

Here is the C++ code to implement the above logic:

```cpp
#include <vector>
#include <set>

class Solution {
public:
    std::vector<int> findEvenNumbers(std::vector<int>& digits) {
        std::set<int> uniqueNumbers;
        
        // Iterate through each digit to form the 3-digit numbers
        for (int last_digit : {0, 2, 4, 6, 8}) {
            // Check if the last digit is actually in the array of digits
            if (std::count(digits.begin(), digits.end(), last_digit) > 0) {
                for (int i = 0; i < digits.size(); i++) {
                    if (digits[i] == last_digit) continue;  // Skip if it's the last digit

                    for (int j = 0; j < digits.size(); j++) {
                        if (i == j || digits[j] == last_digit) continue;  // Skip if it's the same index or last digit

                        int first_digit = digits[i];
                        int second_digit = digits[j];
                        int number = first_digit * 100 + second_digit * 10 + last_digit;
                        
                        if (number >= 100) {  // Verify it's a valid 3-digit number
                            uniqueNumbers.insert(number);
                        }
                    }
                }
            }
        }
        
        // Convert the set to a vector and return
        return std::vector<int>(uniqueNumbers.begin(), uniqueNumbers.end());
    }
};
```

### Explanation of the Code:
1. **Input:** The function takes a vector of integers (`digits`) that represents the digits we can use.
2. **Set for Uniqueness:** A `set<int>` is used to store unique numbers since sets automatically handle duplicate values.
3. **Nested Loops:** We use nested loops to iterate over possible digits:
   - The outer loop chooses the last digit, which can only be even.
   - The first inner loop takes a digit for the hundreds place.
   - The second inner loop takes a digit for the tens place while ensuring that the digits do not repeat.
4. **Number Formation:** A valid number is formed using the chosen digits, and we verify if it's actually a 3-digit number.
5. **Final Output:** We convert the set containing all unique numbers back to a vector to return.

### Conclusion:
This solution efficiently constructs all unique 3-digit even numbers using the provided digits while ensuring that digits do not repeat. The algorithm's complexity is manageable due to the limited number of digits and the straightforward nature of the nested loops.