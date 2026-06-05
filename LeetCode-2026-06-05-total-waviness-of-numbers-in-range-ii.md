# LeetCode Daily – 2026-06-05

## 🧠 Problem #3753 – **Total Waviness of Numbers in Range II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/total-waviness-of-numbers-in-range-ii)

---

### 📝 Problem Description

You are given two integers num1 and num2 representing an inclusive range [num1, num2].

The waviness of a number is defined as the total count of its peaks and valleys:


	A digit is a peak if it is strictly greater than both of its immediate neighbors.
	A digit is a valley if it is strictly less than both of its immediate neighbors.
	The first and last digits of a number cannot be peaks or valleys.
	Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range [num1, num2].
 
Example 1:


Input: num1 = 120, num2 = 130

Output: 3

Explanation:

In the range [120, 130]:


	120: middle digit 2 is a peak, waviness = 1.
	121: middle digit 2 is a peak, waviness = 1.
	130: middle digit 3 is a peak, waviness = 1.
	All other numbers in the range have a waviness of 0.


Thus, total waviness is 1 + 1 + 1 = 3.


Example 2:


Input: num1 = 198, num2 = 202

Output: 3

Explanation:

In the range [198, 202]:


	198: middle digit 9 is a peak, waviness = 1.
	201: middle digit 0 is a valley, waviness = 1.
	202: middle digit 0 is a valley, waviness = 1.
	All other numbers in the range have a waviness of 0.


Thus, total waviness is 1 + 1 + 1 = 3.


Example 3:


Input: num1 = 4848, num2 = 4848

Output: 2

Explanation:

Number 4848: the second digit 8 is a peak, and the third digit 4 is a valley, giving a waviness of 2.


 
Constraints:


	1 <= num1 <= num2 <= 1015​​​​​​​

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Total Waviness of Numbers in Range II" is an interesting one. Let's break down the problem and then implement a solution in C++.

### Problem Explanation

You are given two integers `low` and `high`, representing the inclusive range `[low, high]`. A number is called **waviness** if the sequence of numbers has a "waviness" calculation associated with it. The waviness score can be defined as follows:

1. For a 1-element sequence, the waviness is `0`.
2. For a 2-element sequence (e.g., `[a, b]`), the waviness is `|a - b|`.
3. For a 3-element sequence (e.g., `[a, b, c]`), the waviness is `|a - b| + |b - c|`.
4. More generally, for `n` elements, the waviness is defined as:
   \[
   |a_1 - a_2| + |a_2 - a_3| + |a_3 - a_4| + ... + |a_{n-1} - a_n|
   \]

Total waviness of the numbers in the range can be computed based on all possible combinations of numbers in the range `[low, high]`.

### Plan

1. **Count Sequences:** For given numbers `low` and `high`, generate all possible sequences with lengths from `1` to `N`, where `N` can be determined.
2. **Calc Waviness:** For each combination of numbers, calculate the waviness as per the mentioned rules.
3. **Sum Waviness:** Sum the total waviness for all possible sequences, where sequences beyond a certain size may be less relevant since the number limits can be large.

### Solution

Let's implement the solution in C++. Below is a brute-force approach, which may work for small ranges. However, to handle larger ranges efficiently, an alternative mathematical approach using combinatorial counting might be needed:

```cpp
#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

class Solution {
public:
    long long totalWaviness(int low, int high) {
        long long total = 0;
        
        // Iterate through all pairs of (a, b) where low <= a < b <= high
        for (int a = low; a < high; ++a) {
            for (int b = a + 1; b <= high; ++b) {
                
                // Calculate the contribution of this (a, b) to the total waviness
                int contribution = abs(a - b);
                
                // Each pair (a, b) can form several sequences 
                // Example with 2 elements: seq = [a, b]
                // If we consider sequences of length 2, contribution is simply |a - b|

                total += contribution;
            }
        }

        // The result is gotten by taking contributions for all pairs
        return total;
    }
};

int main() {
    Solution sol;
    int low = 1;
    int high = 3;
    
    cout << "Total Waviness: " << sol.totalWaviness(low, high) << endl;
    
    return 0;
}
```

### Explanation of the above code

1. **O(n^2) Approach:** The solution iterates through all valid pairs `(a, b)` within the range `[low, high]`. For each of these pairs:
   - We calculate the contribution to the total waviness with the formula `|a - b|`.
   - Each valid pair contributes to the total based on the distance between them.

2. **Return Result:** Finally, after loop completion, the total waviness is returned.

### Complexity
- **Time Complexity:** O(n^2), where `n` is the difference between `high` and `low`. This may not be efficient for larger ranges.
- **Space Complexity:** O(1), as we use a constant amount of space.

### Note
To improve on this naive solution and tackle larger ranges, a deeper combinatorial math approach or optimization may be required, possibly leading towards constant-time calculations based on the properties of integers within specific ranges.