# LeetCode Daily – 2025-12-07

## 🧠 Problem #1523 – **Count Odd Numbers in an Interval Range**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range)

---

### 📝 Problem Description

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 
Example 1:


Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:


Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

 
Constraints:


	0 <= low <= high <= 10^9

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "Count Odd Numbers in an Interval Range". 

### Problem Description
You are given two integers `low` and `high`. Your task is to determine how many odd numbers exist in the inclusive range from `low` to `high`.

### Example
- Input: `low = 3`, `high = 7`
- Output: `3` (the odd numbers are 3, 5, and 7)

### Plan
We can calculate the number of odd numbers in the range without explicitly looping through each number. To do this, we can leverage the fact that odd numbers are spaced evenly:

1. Calculate the total numbers in the range: `totalNumbers = high - low + 1`
2. To find how many of these numbers are odd:
   - If both `low` and `high` are odd, both of them contribute to the count.
   - If both `low` and `high` are even, there will be fewer odd numbers than the count of total numbers.
   - If `low` is odd and `high` is even (or vice versa), we need to check the total count of numbers to determine the odd count.

### Mathematical Insight
- If `high` is even, the number of odd numbers up to `high` is `high / 2`.
- If `high` is odd, the number of odd numbers up to `high` is `high / 2 + 1`.
- The same logic applies to `low`.

### C++ Implementation
Let's implement the above logic in C++ code:

```cpp
class Solution {
public:
    int countOdds(int low, int high) {
        // The total count of numbers from low to high
        int totalCount = high - low + 1;
        
        // Count odd numbers from 1 to high
        int countHigh = (high + 1) / 2; // use (high + 1) for even cases
        
        // Count odd numbers from 1 to low-1
        int countLow = low / 2; // count odd numbers below low
        
        // Total odd numbers in the range [low, high]
        return countHigh - countLow;
    }
};
```

### Explanation
- `totalCount`: This variable calculates how many numbers are there from `low` to `high`.
- `countHigh`: This calculates how many odd numbers exist from `1` to `high`. We use `(high + 1) / 2` to count the odd numbers:
  - If `high` is odd, this counts the odd numbers correctly.
  - If `high` is even, it gives us one less than it should, which is resolved by adding one before division.
- `countLow`: This counts how many odd numbers are there from `1` to `low-1`. This is simply `low / 2` since it counts all odd numbers less than `low`.
- Finally, we subtract `countLow` from `countHigh` to get the number of odd numbers in the interval `[low, high]`.

This approach runs in O(1) time complexity, which is efficient because it does not involve any loops; it merely performs some arithmetic calculations.

### Conclusion
With this solution, we can quickly compute the count of odd numbers in any specified range, utilizing fundamental arithmetic properties of numbers.