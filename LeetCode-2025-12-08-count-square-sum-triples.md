# LeetCode Daily – 2025-12-08

## 🧠 Problem #1925 – **Count Square Sum Triples**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-square-sum-triples)

---

### 📝 Problem Description

A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

 
Example 1:


Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).


Example 2:


Input: n = 10
Output: 4
Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).


 
Constraints:


	1 <= n <= 250

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Count Square Sum Triples," we need to count how many triplets of integers (a, b, c) can be formed such that \(1 \leq a, b, c \leq n\) and \(a^2 + b^2 = c^2\). This means we are looking for Pythagorean triples, where the square of one side of a right triangle is equal to the sum of the squares of the other two sides.

Let's break down the solution step-by-step:

1. **Understand the Problem**: We need to count the number of valid triples (a, b, c) where \(1 \leq a, b, c \leq n\) and \(a^2 + b^2 = c^2\). The main constraint is that we will loop through potential values of `c` since \(c\) can take any value from 1 to \(n\).

2. **Iterate Over Possible Values of c**: For each \(c\) from 1 to \(n\), we will calculate \(c^2\). Then we will find all pairs (a, b) such that \(a^2 + b^2 = c^2\).

3. **Nested Loop for a and b**: For each value of \(c\), iterate over all potential values of \(a\) and \(b\). We don’t need \(b\) to go higher than \(c\) since we only want combinations where \(a \leq b\).

4. **Count Valid Combinations**: For each (a, b) pair that satisfies \(a^2 + b^2 = c^2\), we'll count it. Since the order of a and b does not matter (i.e., (a, b) is the same as (b, a)), we can check this by ensuring \(a \leq b\) and increment our count appropriately.

5. **Return the Count**: After iterating through possible values, return the total count of valid triples.

Here’s the implementation in C++:

```cpp
#include <iostream>

class Solution {
public:
    int countTriples(int n) {
        int count = 0;
        for (int c = 1; c <= n; ++c) {
            int c_squared = c * c; // Calculate c^2 once
            for (int a = 1; a <= c; ++a) {
                int a_squared = a * a; // Calculate a^2
                for (int b = a; b <= n; ++b) { // b starts from a to avoid duplicates
                    int b_squared = b * b; // Calculate b^2
                    if (a_squared + b_squared == c_squared) {
                        count++; // (a, b, c) is a valid triplet
                    }
                }
            }
        }
        return count; // Return the total count of valid triplets
    }
};

// Example usage:
int main() {
    Solution sol;
    int n = 5; // Change this to any value to test
    std::cout << "Count of square sum triples for n = " << n << " is: " << sol.countTriples(n) << std::endl;
    return 0;
}
```

### Explanation of the Code:

- The outer loop iterates through values of \(c\) from 1 to \(n\).
- For each \(c\), we calculate \(c^2\).
- The middle loop iterates through potential values of \(a\), and the innermost loop iterates through potential values of \(b\) starting from \(a\).
- We calculate \(a^2\) and \(b^2\) and check if their sum equals \(c^2\).
- If they match, we increase the count of valid triplets.
- Finally, the function returns the count, which is the answer.

### Time Complexity:
This approach runs in \(O(n^3)\) in the worst case, since for each \(c\) we potentially visit every combination of \(a\) and \(b\). It's feasible for small values of \(n\) but will be inefficient for larger numbers.

### Conclusion:
This implementation correctly counts all the Pythagorean triples that can be formed using integers within the given range, adhering to the constraints set by the problem.