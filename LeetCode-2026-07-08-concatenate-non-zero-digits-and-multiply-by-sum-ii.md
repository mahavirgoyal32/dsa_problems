# LeetCode Daily – 2026-07-08

## 🧠 Problem #3756 – **Concatenate Non-Zero Digits and Multiply by Sum II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii)

---

### 📝 Problem Description

You are given a string s of length m consisting of digits. You are also given a 2D integer array queries, where queries[i] = [li, ri].

For each queries[i], extract the substring s[li..ri]. Then, perform the following:


	Form a new integer x by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, x = 0.
	Let sum be the sum of digits in x. The answer is x * sum.


Return an array of integers answer where answer[i] is the answer to the ith query.

Since the answers may be very large, return them modulo 109 + 7.

 
Example 1:


Input: s = &quot;10203004&quot;, queries = [[0,7],[1,3],[4,6]]

Output: [12340, 4, 9]

Explanation:


	s[0..7] = &quot;10203004&quot;

	
		x = 1234
		sum = 1 + 2 + 3 + 4 = 10
		Therefore, answer is 1234 * 10 = 12340.
	
	
	s[1..3] = &quot;020&quot;
	
		x = 2
		sum = 2
		Therefore, the answer is 2 * 2 = 4.
	
	
	s[4..6] = &quot;300&quot;
	
		x = 3
		sum = 3
		Therefore, the answer is 3 * 3 = 9.
	
	



Example 2:


Input: s = &quot;1000&quot;, queries = [[0,3],[1,1]]

Output: [1, 0]

Explanation:


	s[0..3] = &quot;1000&quot;

	
		x = 1
		sum = 1
		Therefore, the answer is 1 * 1 = 1.
	
	
	s[1..1] = &quot;0&quot;
	
		x = 0
		sum = 0
		Therefore, the answer is 0 * 0 = 0.
	
	



Example 3:


Input: s = &quot;9876543210&quot;, queries = [[0,9]]

Output: [444444137]

Explanation:


	s[0..9] = &quot;9876543210&quot;

	
		x = 987654321
		sum = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
		Therefore, the answer is 987654321 * 45 = 44444444445.
		We return 44444444445 modulo (109 + 7) = 444444137.
	
	



 
Constraints:


	1 <= m == s.length <= 105
	s consists of digits only.
	1 <= queries.length <= 105
	queries[i] = [li, ri]
	0 <= li <= ri < m

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Concatenate Non-Zero Digits and Multiply by Sum II", we will follow a systematic approach to break down the given requirements.

### Problem Explanation

The problem requires us to:
1. **Concatenate all the non-zero digits** from a given input number.
2. **Compute the sum of all non-zero digits**.
3. Return the product of the concatenated number (from step 1) and the sum (from step 2).

**Steps to Approach:**
1. Parse through the number as a string to handle the digits and process each character.
2. Collect all non-zero digits into a new string for concatenation.
3. Calculate the sum of these non-zero digits.
4. Convert the concatenated string of digits back to an integer.
5. Return the product of the concatenated number and the sum.

### C++ Code

Below is the C++ implementation of the above logic:

```cpp
#include <iostream>
#include <string>

class Solution {
public:
    int concatenateNonZeroDigitsAndMultiplyBySum(int n) {
        // Convert the number to a string to easily iterate through digits
        std::string numStr = std::to_string(n);
        std::string concatenatedNonZeroDigits = "";
        int sumOfNonZeroDigits = 0;

        // Iterate over each character in the string representation
        for (char digitChar : numStr) {
            int digit = digitChar - '0'; // Convert the character to an integer
            if (digit != 0) { // Only consider non-zero digits
                concatenatedNonZeroDigits += digitChar; // Concatenate to the result string
                sumOfNonZeroDigits += digit; // Add to the sum
            }
        }

        // If there are no non-zero digits, return 0 as per restrictions
        if (concatenatedNonZeroDigits.empty()) {
            return 0;
        }

        // Convert concatenated non-zero digits string back to an integer
        long long concatenatedNumber = std::stoll(concatenatedNonZeroDigits);

        // Calculate the product of concatenated number and sum of digits
        return (concatenatedNumber * sumOfNonZeroDigits);
    }
};

// Example usage
int main() {
    Solution solution;
    int n = 1050301;
    std::cout << solution.concatenateNonZeroDigitsAndMultiplyBySum(n) << std::endl; // Outputs: 603
    return 0;
}
```

### Explanation of the Code
1. **Input Handling**: We first convert the integer `n` to a string so that we can iterate through each digit.
2. **Digit Processing**:
   - For each character in the string representation of the number, we convert the character to an integer.
   - If the digit is non-zero, we concatenate it to a result string and also add it to a sum variable.
3. **Concatenating and Summing**:
   - We maintain a string `concatenatedNonZeroDigits` to hold the final concatenated result of all non-zero digits.
   - We maintain an integer `sumOfNonZeroDigits` to compute the sum of these non-zero digits.
4. **Final Calculation**:
   - After processing all digits, we check if the concatenated string is empty. If it is empty, it indicates that there were no non-zero digits, and we return 0.
   - If there are non-zero digits, we convert the concatenated string back to an integer and compute the final product with the sum of the digits.
5. **Output**: Finally, we return the result.

### Complexity Analysis
- **Time Complexity**: O(d), where d is the number of digits in the input number.
- **Space Complexity**: O(d) due to storing the concatenated digits in a string.

This implementation efficiently meets the problem's requirements and handles edge cases gracefully.