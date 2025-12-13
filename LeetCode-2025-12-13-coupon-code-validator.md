# LeetCode Daily – 2025-12-13

## 🧠 Problem #3606 – **Coupon Code Validator**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/coupon-code-validator)

---

### 📝 Problem Description

You are given three arrays of length n that describe the properties of n coupons: code, businessLine, and isActive. The ith coupon has:


	code[i]: a string representing the coupon identifier.
	businessLine[i]: a string denoting the business category of the coupon.
	isActive[i]: a boolean indicating whether the coupon is currently active.


A coupon is considered valid if all of the following conditions hold:


	code[i] is non-empty and consists only of alphanumeric characters (a-z, A-Z, 0-9) and underscores (_).
	businessLine[i] is one of the following four categories: &quot;electronics&quot;, &quot;grocery&quot;, &quot;pharmacy&quot;, &quot;restaurant&quot;.
	isActive[i] is true.


Return an array of the codes of all valid coupons, sorted first by their businessLine in the order: &quot;electronics&quot;, &quot;grocery&quot;, &quot;pharmacy&quot;, &quot;restaurant&quot;, and then by code in lexicographical (ascending) order within each category.

 
Example 1:


Input: code = [&quot;SAVE20&quot;,&quot;&quot;,&quot;PHARMA5&quot;,&quot;SAVE@20&quot;], businessLine = [&quot;restaurant&quot;,&quot;grocery&quot;,&quot;pharmacy&quot;,&quot;restaurant&quot;], isActive = [true,true,true,true]

Output: [&quot;PHARMA5&quot;,&quot;SAVE20&quot;]

Explanation:


	First coupon is valid.
	Second coupon has empty code (invalid).
	Third coupon is valid.
	Fourth coupon has special character @ (invalid).



Example 2:


Input: code = [&quot;GROCERY15&quot;,&quot;ELECTRONICS_50&quot;,&quot;DISCOUNT10&quot;], businessLine = [&quot;grocery&quot;,&quot;electronics&quot;,&quot;invalid&quot;], isActive = [false,true,true]

Output: [&quot;ELECTRONICS_50&quot;]

Explanation:


	First coupon is inactive (invalid).
	Second coupon is valid.
	Third coupon has invalid business line (invalid).



 
Constraints:


	n == code.length == businessLine.length == isActive.length
	1 <= n <= 100
	0 <= code[i].length, businessLine[i].length <= 100
	code[i] and businessLine[i] consist of printable ASCII characters.
	isActive[i] is either true or false.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Coupon Code Validator" on LeetCode asks us to validate coupon codes based on given criteria. The coupon code must follow a specific pattern combining uppercase letters and digits. Let's explore how to solve this problem step by step and then provide the C++ implementation.

### Problem Breakdown:
1. **Input**:
   - A coupon code, which is a string.
   
2. **Validation criteria**:
   - The length of the code must be exactly 10 characters.
   - It should be alphanumeric (contains both digits and uppercase letters).
   - It should contain at least **1 digit** and at least **1 uppercase letter**.

3. **Output**:
   - Return `true` if the coupon code is valid and `false` otherwise.

### Steps to Solve:
1. **Check the Length**: Before anything else, check if the length of the coupon code is exactly 10 characters.
  
2. **Check Character Types**: Loop through each character of the string and check:
   - If it's an uppercase letter.
   - If it's a digit.
   
   Use two boolean flags to track whether we have found at least one uppercase letter and one digit.

3. **Return Result**: If both flags are `true` after the loop and the length check is satisfied, return `true`; otherwise, return `false`.

### C++ Implementation:

Here is the implementation of the described solution:

```cpp
#include <iostream>
#include <string>

bool isValidCouponCode(const std::string &couponCode) {
    // Step 1: Length check
    if (couponCode.length() != 10) {
        return false; // Not valid if length is not 10
    }
    
    bool hasUpper = false;
    bool hasDigit = false;
    
    // Step 2: Check each character
    for (char ch : couponCode) {
        if (isupper(ch)) {
            hasUpper = true;
        } else if (isdigit(ch)) {
            hasDigit = true;
        }
    }

    // Step 3: Final decision
    return hasUpper && hasDigit;
}

int main() {
    std::string couponCode = "A1B2C3D4E5"; // Example coupon code
    if (isValidCouponCode(couponCode)) {
        std::cout << "Valid Coupon Code\n";
    } else {
        std::cout << "Invalid Coupon Code\n";
    }
    return 0;
}
```

### Explanation of the Code:
- We first define a function `isValidCouponCode` that takes a string `couponCode`.
- We check if the length is 10. If it isn't, we return `false`.
- Two boolean variables `hasUpper` and `hasDigit` are initialized to `false`.
- We loop through each character in the `couponCode`:
  - `isupper(ch)` checks if the character is an uppercase letter.
  - `isdigit(ch)` checks if the character is a digit.
  - If either condition is met, we set the corresponding flag to `true`.
- After checking all characters, we return true if both flags are true, indicating that the coupon code is valid based on the provided criteria.
- In `main`, we can test the code with an example coupon code.

### Conclusion:
The provided solution efficiently checks the criteria for the coupon code by using a single loop, making its time complexity O(n), where n is the length of the string (in this case, fixed at 10), and allows for a straightforward validation approach.