# LeetCode Daily – 2026-01-01

## 🧠 Problem #66 – **Plus One**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/plus-one)

---

### 📝 Problem Description

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0&#39;s.

Increment the large integer by one and return the resulting array of digits.

 
Example 1:


Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


Example 2:


Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].


Example 3:


Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].


 
Constraints:


	1 <= digits.length <= 100
	0 <= digits[i] <= 9
	digits does not contain any leading 0&#39;s.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the "Plus One" problem from LeetCode, where we need to increment an integer represented as an array of digits.

### Problem Statement

You are given a large integer represented as an array of digits, where each digit is stored in an element of the array. The digits are stored such that the most significant digit is at the head of the list, and each element in the array is a single digit. You need to add one to the integer represented by this array and return the resulting array of digits.

### Example

**Input:**  
`digits = [1, 2, 3]`  
**Output:**  
`[1, 2, 4]`  
   
**Input:**  
`digits = [4, 3, 2, 1]`  
**Output:**  
`[4, 3, 2, 2]`  
   
**Input:**  
`digits = [9]`  
**Output:**  
`[1, 0]`  

### Approach

To solve the problem, we can simulate the addition process manually:
1. Start from the last digit (least significant digit).
2. Add one to the last digit.
3. If this digit becomes 10, set it to 0 and carry over 1 to the previous digit.
4. Continue this process until there is no carry or we reach the beginning of the array.
5. If there is a carry left after processing all digits, insert `1` at the beginning of the array.

### Implementation

Here’s a C++ implementation of the approach:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();
        
        // Start from the end of the vector 
        for (int i = n - 1; i >= 0; i--) {
            // If we can add one without carrying over, do it and return the result
            if (digits[i] < 9) {
                digits[i]++;
                return digits; // No further processing needed
            }
            // If the current digit is 9, it becomes 0
            digits[i] = 0;
        }
        
        // If we exited the loop, that means we had a carry out of the most significant digit
        digits.insert(digits.begin(), 1); // Insert 1 at the beginning
        return digits;
    }
};
```

### Explanation of the Code

1. **Function Signature**: `vector<int> plusOne(vector<int>& digits)` - This function takes a reference to a vector of integers (representing the digits) and returns a vector of integers that correspond to the result after adding one.

2. **Get Size**: We determine the size of the array using `int n = digits.size();`.

3. **Reverse Loop**: We loop backwards from the last index to handle the addition:
   - If the current digit is less than 9, we simply increment it and return the modified array since we've added one without any carry.
   - If it's a 9, we set it to 0 (since 9 + 1 = 10, carry 1).

4. **Handling Carry**: If we finish the loop and still have a carry (i.e., if all digits were 9), we insert 1 at the start of the `digits` array, changing `999` to `1000`.

5. **Return Result**: Finally, we return the updated `digits`.

### Conclusion

This straightforward solution efficiently handles adding one to a number represented as an array of its digits with a time complexity of O(n), where n is the number of digits. The space complexity is O(1) for the original array, plus O(n) if we have to insert a new digit.