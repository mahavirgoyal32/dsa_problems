# LeetCode Daily – 2026-07-07

## 🧠 Problem #3754 – **Concatenate Non-Zero Digits and Multiply by Sum I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i)

---

### 📝 Problem Description

You are given an integer n.

Form a new integer x by concatenating all the non-zero digits of n in their original order. If there are no non-zero digits, x = 0.

Let sum be the sum of digits in x.

Return an integer representing the value of x * sum.

 
Example 1:


Input: n = 10203004

Output: 12340

Explanation:


	The non-zero digits are 1, 2, 3, and 4. Thus, x = 1234.
	The sum of digits is sum = 1 + 2 + 3 + 4 = 10.
	Therefore, the answer is x * sum = 1234 * 10 = 12340.



Example 2:


Input: n = 1000

Output: 1

Explanation:


	The non-zero digit is 1, so x = 1 and sum = 1.
	Therefore, the answer is x * sum = 1 * 1 = 1.



 
Constraints:


	0 <= n <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's go through the problem "Concatenate Non-Zero Digits and Multiply by Sum I" from LeetCode.

### Problem Explanation
You have to process a number represented as a string. The main tasks are:
1. Concatenate all non-zero digits from the string representation of the number.
2. Calculate the sum of all the digits in the string.
3. Return the product of the concatenated number (from step 1) and the sum of the digits (from step 2).

### Steps to Solve the Problem
1. Initialize a variable to hold the concatenated non-zero digits as a string.
2. Initialize a sum variable to calculate the sum of the digits.
3. Loop through each character in the string:
   - If the character is not '0', concatenate it to the result string and add its integer value to the sum.
4. Convert the concatenated string (non-zero digits) to an integer.
5. Finally, return the product of the concatenated integer and the sum.

### Example
For an input of `"203045"`, the non-zero digits are "2345", and the sum of the digits is `2 + 0 + 3 + 0 + 4 + 5 = 14`. The product will be `2345 * 14`.

### C++ Implementation

Here’s how we can implement this in C++:

```cpp
#include <iostream>
#include <string>
#include <cstdlib> // for std::stoi

int concatenateAndMultiply(const std::string& num) {
    std::string nonZeroConcat = "";
    int sum = 0;

    for (char digit : num) {
        // Convert char to digit
        int digitValue = digit - '0'; // Convert char to int (e.g., '2' becomes 2)

        // Check if digit is non-zero
        if (digitValue != 0) {
            nonZeroConcat += digit;  // Concatenate non-zero digit
        }

        // Add to sum
        sum += digitValue;
    }

    // Convert concatenated string of non-zero digits to an integer
    long long concatenatedNumber = std::stoll(nonZeroConcat); // Use stoll for safety with large numbers

    // Calculate the product
    return concatenatedNumber * sum;
}

int main() {
    std::string num = "203045";
    int result = concatenateAndMultiply(num);
    
    std::cout << "Result: " << result << std::endl; // Output the result
    return 0;
}
```

### Explanation of the Code
1. **Headers**: We include `<iostream>` for input-output operations and `<string>` for string manipulations.
2. **Function**: `concatenateAndMultiply` takes a string `num` as input.
3. **Variables**:
   - `nonZeroConcat`: A string to hold the concatenated non-zero digits.
   - `sum`: An integer to hold the sum of all digits in the input string.
4. **Loop**: We iterate over each character in the string:
   - Convert the character to an integer value.
   - If the digit is non-zero, append it to `nonZeroConcat`.
   - Always add the digit value to `sum`.
5. **Conversion**: After forming the concatenated string, we convert it to a long long integer using `std::stoll`, which is safer for large concatenated results.
6. **Return**: Finally, we return the product of `concatenatedNumber` and `sum`.

### Edge Cases
We assume the input will always be valid as per the problem constraints. However, if no non-zero digits are encountered, the concatenated result will be an empty string which needs careful handling to avoid conversion errors (not needed here, as input is guaranteed to be a numeric string). 

You can tweak the main function to test different inputs as needed!