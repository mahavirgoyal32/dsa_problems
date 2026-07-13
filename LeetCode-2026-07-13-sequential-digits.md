# LeetCode Daily – 2026-07-13

## 🧠 Problem #1291 – **Sequential Digits**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sequential-digits)

---

### 📝 Problem Description

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 
Example 1:
Input: low = 100, high = 300
Output: [123,234]
Example 2:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

 
Constraints:


	10 <= low <= high <= 10^9

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Sequential Digits" asks us to generate all numbers that consist of digits in increasing sequential order within a given range defined by `low` and `high`. For example, for `low = 100` and `high = 300`, the valid outputs would be `123` and `234`.

### Explanation:

To solve the problem, we can follow these steps:

1. **Generate Sequential Digits**: We can generate all possible sequential digit numbers and store them in a list. Sequential digits start from `1` and go up to `9`, and for each starting digit, we can keep adding the next digit sequentially.

2. **Check Range**: After generating all sequential digits, we will filter the list to include only those within the specified range `[low, high]`.

3. **Output the Result**: Finally, we will return the filtered result.

### C++ Implementation:

Here’s how we can implement this in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    std::vector<int> sequentialDigits(int low, int high) {
        // Vector to store the results
        std::vector<int> result;

        // Generate sequential digits
        for (int start = 1; start <= 9; ++start) {
            int num = start;
            for (int next = start + 1; next <= 9; ++next) {
                num = num * 10 + next; // Build the number
                if (num >= low && num <= high) {
                    result.push_back(num); // If it's in range, add to result
                }
                if (num > high) {
                    break; // No need to continue if the number exceeds high
                }
            }
        }

        // Sort the result (even though they will be generated in order, it's good to ensure)
        std::sort(result.begin(), result.end());
        return result;
    }
};

// Example usage:
int main() {
    Solution sol;
    int low = 100;
    int high = 300;
    std::vector<int> result = sol.sequentialDigits(low, high);
    
    // Print the results
    for (int num : result) {
        std::cout << num << " ";
    }
    return 0;
}
```

### Explanation of the Code:

1. **Outer Loop (`start` from 1 to 9)**: This loop initiates the sequential digit from each starting digit (1 to 9).

2. **Inner Loop (`next` from `start + 1` to 9)**: This loop appends the next sequential digit to the current sequence to create a number (e.g., if `start` is 2, you can create 23, 234, etc.)

3. **Check Validity**: After forming a number, we check if it lies within the given bounds (`low` and `high`). If it does, we add it to our `result` vector.

4. **Early Termination**: If at any point the formed number exceeds `high`, we break out of the inner loop to save computational time.

5. **Sorting (optional)**: Although the numbers are generated in sorted order based on the looping structure, sorting the results ensures that we fulfill the requirement.

6. **Return**: The function ultimately returns the vector of valid sequential digits.

### Time Complexity:
The time complexity of this solution is bounded by a fixed constant since the maximum number of sequential digits is limited to `10` (from `123456789`), making it efficient. Thus, it runs in O(1) time in practical scenarios due to the limited range of output.

### Conclusion:
This solution efficiently generates and filters the required sequential digits while maintaining simplicity and clarity.