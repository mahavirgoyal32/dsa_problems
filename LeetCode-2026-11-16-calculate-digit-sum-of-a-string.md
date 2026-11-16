# LeetCode Daily – 2026-11-16

## 🧠 Problem #2243 – **Calculate Digit Sum of a String**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/calculate-digit-sum-of-a-string)

---

### 📝 Problem Description

You are given a string s consisting of digits and an integer k.

A round can be completed if the length of s is greater than k. In one round, do the following:


	Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
	Replace each group of s with a string representing the sum of all its digits. For example, &quot;346&quot; is replaced with &quot;13&quot; because 3 + 4 + 6 = 13.
	Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.


Return s after all rounds have been completed.

 
Example 1:


Input: s = &quot;11111222223&quot;, k = 3
Output: &quot;135&quot;
Explanation: 
- For the first round, we divide s into groups of size 3: &quot;111&quot;, &quot;112&quot;, &quot;222&quot;, and &quot;23&quot;.
  ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5. 
  So, s becomes &quot;3&quot; + &quot;4&quot; + &quot;6&quot; + &quot;5&quot; = &quot;3465&quot; after the first round.
- For the second round, we divide s into &quot;346&quot; and &quot;5&quot;.
  Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5. 
  So, s becomes &quot;13&quot; + &quot;5&quot; = &quot;135&quot; after second round. 
Now, s.length <= k, so we return &quot;135&quot; as the answer.


Example 2:


Input: s = &quot;00000000&quot;, k = 3
Output: &quot;000&quot;
Explanation: 
We divide s into &quot;000&quot;, &quot;000&quot;, and &quot;00&quot;.
Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0. 
s becomes &quot;0&quot; + &quot;0&quot; + &quot;0&quot; = &quot;000&quot;, whose length is equal to k, so we return &quot;000&quot;.


 
Constraints:


	1 <= s.length <= 100
	2 <= k <= 100
	s consists of digits only.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Calculate Digit Sum of a String" involves taking a string that can potentially have both digits and alphabetic characters, and then calculating the sum of all digit characters within the string. The sum needs to be returned as a single digit, which may involve repeating the summation process until we are left with a single digit.

### Steps to Solve the Problem:

1. **Extract Digit Characters**: We need to iterate through the input string and collect all digit characters.
2. **Sum the Digits**: Convert the character representation of these digits to their integer values and compute the total sum.
3. **Reduce to Single Digit**: If the sum is greater than 9, we need to repeatedly sum the digits of the result until we are left with a single digit.

### C++ Implementation:

Let's implement the above steps in C++.

```cpp
#include <iostream>
#include <string>

int digitSum(const std::string& s) {
    // First, we will sum all the digit characters in the string
    int total_sum = 0;
    
    for (char c : s) {
        if (isdigit(c)) {  // Check if the character is a digit
            total_sum += (c - '0');  // Convert character to integer and add to total_sum
        }
    }

    // Now we need to reduce total_sum to a single digit
    while (total_sum > 9) {
        int temp_sum = 0;
        while (total_sum > 0) {
            temp_sum += total_sum % 10;  // Add the last digit
            total_sum /= 10;              // Remove the last digit
        }
        total_sum = temp_sum;  // Update total_sum to the digit sum
    }

    return total_sum;  // Return the result as the single digit
}

int main() {
    std::string input = "a1b2c3";  // Example input
    int result = digitSum(input);
    std::cout << "The single digit sum is: " << result << std::endl; // Output the result
    return 0;
}
```

### Explanation of the Code:

1. **Input Handling**: The function `digitSum` takes a string `s` as an input.
2. **Digit Summation**:
   - We initialize `total_sum` to zero.
   - We iterate through each character of the string:
     - For each character, we check if it is a digit using `isdigit(c)`.
     - If it is a digit, we convert it to its integer value by subtracting `'0'` and add it to `total_sum`.
3. **Reducing to Single Digit**:
   - We use a `while` loop to check if `total_sum` is greater than 9.
   - Inside this loop, we create another variable `temp_sum` to accumulate the sum of the digits of `total_sum`.
   - We extract digits one by one using modulo operation and update `total_sum` to its integer division by 10 until it reaches zero.
   - After we finish summing the digits, we update `total_sum` with `temp_sum`.
4. **Return the Result**: Finally, we return the `total_sum`, which is guaranteed to be a single digit at this point.

### Example Usage:
For an input string like `"a1b2c3"`, the code will find the digits `1`, `2`, and `3`, sum them to get `6`, and since `6` is already a single digit, it will return `6`.