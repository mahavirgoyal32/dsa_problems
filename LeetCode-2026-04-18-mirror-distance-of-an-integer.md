# LeetCode Daily – 2026-04-18

## 🧠 Problem #3783 – **Mirror Distance of an Integer**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/mirror-distance-of-an-integer)

---

### 📝 Problem Description

You are given an integer n.

Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.

Return an integer denoting the mirror distance of n​​​​​​​.

abs(x) denotes the absolute value of x.

 
Example 1:


Input: n = 25

Output: 27

Explanation:


	reverse(25) = 52.
	Thus, the answer is abs(25 - 52) = 27.



Example 2:


Input: n = 10

Output: 9

Explanation:


	reverse(10) = 01 which is 1.
	Thus, the answer is abs(10 - 1) = 9.



Example 3:


Input: n = 7

Output: 0

Explanation:


	reverse(7) = 7.
	Thus, the answer is abs(7 - 7) = 0.



 
Constraints:


	1 <= n <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Mirror Distance of an Integer" requires us to find the "mirror" of an integer and calculate the distance between the original integer and its mirror. The mirror of an integer is obtained by reversing its digits. For instance, the mirror of `123` is `321`.

### Problem Breakdown:
1. **Input**: You are given an integer.
2. **Output**: You need to return the absolute difference between the original integer and its mirror.
3. **Constraints**:
   - The integer may have leading zeros when reversed, but those should not affect the value (e.g., the mirror of `100` is `1`, not `001`).

### Steps to Solution:
1. Convert the integer to a string to easily reverse it.
2. Reverse the string representation of the integer to get the mirrored version.
3. Convert the reversed string back to an integer.
4. Compute the absolute difference between the original integer and the mirrored integer.
5. Return the result.

### C++ Implementation:
Here's how you can implement this in C++.

```cpp
#include <iostream>
#include <string>
#include <cmath>

class Solution {
public:
    int mirrorDistance(int num) {
        // Convert the number to string
        std::string strNum = std::to_string(num);
        
        // Reverse the string
        std::string mirrorStr = std::string(strNum.rbegin(), strNum.rend());
        
        // Convert the reversed string back to an integer
        int mirrorNum = std::stoi(mirrorStr);
        
        // Calculate the absolute difference
        int distance = std::abs(num - mirrorNum);
        
        return distance;
    }
};

int main() {
    Solution solution;
    int num = 123;
    std::cout << "Mirror Distance of " << num << " is: " << solution.mirrorDistance(num) << std::endl;

    num = 100;
    std::cout << "Mirror Distance of " << num << " is: " << solution.mirrorDistance(num) << std::endl;

    return 0;
}
```

### Explanation of the Code:
1. **Function Definition**: We define a class `Solution` which contains the method `mirrorDistance`.
2. **String Conversion**: We convert the input integer `num` into a string using `std::to_string`.
3. **String Reversal**: Using string iterators (`rbegin()` and `rend()`), we create the mirrored string `mirrorStr`.
4. **Conversion Back to Int**: We convert the reversed string back to an integer using `std::stoi`, which automatically handles leading zeros.
5. **Distance Calculation**: We compute the absolute difference using `std::abs` between the original number and the mirrored integer.
6. **Return the Result**: The method returns the calculated distance.

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the number of digits in the integer (the string operations).
- **Space Complexity**: O(n), for the space used by the strings.

### Test Cases:
You can test the code with various inputs to ensure that it provides the correct results for different cases, including:
- Positive integers
- Integers that are already palindromic (e.g., `121`)
- Integers with trailing zeros (e.g., `100`, `5000`)