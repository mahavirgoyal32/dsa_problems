# LeetCode Daily – 2026-06-23

## 🧠 Problem #3699 – **Number of ZigZag Arrays I**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-zigzag-arrays-i)

---

### 📝 Problem Description

You are given three integers n, l, and r.

A ZigZag array of length n is defined as follows:


	Each element lies in the range [l, r].
	No two adjacent elements are equal.
	No three consecutive elements form a strictly increasing or strictly decreasing sequence.


Return the total number of valid ZigZag arrays.

Since the answer may be large, return it modulo 109 + 7.

A sequence is said to be strictly increasing if each element is strictly greater than its previous one (if exists).

A sequence is said to be strictly decreasing if each element is strictly smaller than its previous one (if exists).

 
Example 1:


Input: n = 3, l = 4, r = 5

Output: 2

Explanation:

There are only 2 valid ZigZag arrays of length n = 3 using values in the range [4, 5]:


	[4, 5, 4]
	[5, 4, 5]​​​​​​​



Example 2:


Input: n = 3, l = 1, r = 3

Output: 10

Explanation:

There are 10 valid ZigZag arrays of length n = 3 using values in the range [1, 3]:


	[1, 2, 1], [1, 3, 1], [1, 3, 2]
	[2, 1, 2], [2, 1, 3], [2, 3, 1], [2, 3, 2]
	[3, 1, 2], [3, 1, 3], [3, 2, 3]


All arrays meet the ZigZag conditions.


 
Constraints:


	3 <= n <= 2000
	1 <= l < r <= 2000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Number of ZigZag Arrays I" on LeetCode asks us to determine how many arrays can be formed from a given integer `n` that are ZigZag sequences. A ZigZag sequence is defined such that it alternates between increasing and decreasing.

### Problem Explanation

In this problem, a sequence of integers is called a ZigZag sequence if it satisfies the following conditions:
1. If the length of the array is odd, the first element is greater than the second, the second is less than the third, and so on. 
2. If the length of the array is even, the first element is less than the second, the second is greater than the third, and so on.

The task is to count all the possible ZigZag sequences that can be formed using the integers from `1` to `n`.

### Key Insights

1. **Dynamic Programming**: We can leverage dynamic programming (DP) to keep track of valid sequences. Specifically, we will maintain two arrays:
   - `up[i]`: the number of valid ZigZag sequences of length `i` that end with an increasing step.
   - `down[i]`: the number of valid ZigZag sequences of length `i` that end with a decreasing step.

2. **Transitions**:
   - If we have a sequence of length `i-1`, we can extend a sequence ending in an increasing step (from `up[i-1]`) by adding a larger number, which will increase the count of `down[i]`.
   - Conversely, we can extend a sequence ending in a decreasing step (from `down[i-1]`) by adding a smaller number, which will increase the count of `up[i]`.

3. **Base Cases**: 
   - For sequences of length `1`, there is exactly 1 way to arrange a single number, so both `up[1]` and `down[1]` are initialized to 1.

### Implementation

Here's a C++ solution that reflects the above insights:

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int zigzagCount(int n) {
        // Edge case: If n is 1, there's only one valid array [1]
        if (n == 1) return 1;

        // Arrays to hold the number of valid up/down sequences for each length
        vector<long long> up(n + 1, 0);
        vector<long long> down(n + 1, 0);

        // Initial conditions: Base case for length 1
        up[1] = 1;
        down[1] = 1;

        // Fill the dp arrays
        for (int len = 2; len <= n; ++len) {
            up[len] = down[len - 1]; // Previous length down sequence can form up
            down[len] = up[len - 1]; // Previous length up sequence can form down
        }
        
        // The total number of zigzag sequences of length n can be calculated
        return up[n] + down[n];
    }
};

int main() {
    Solution sol;
    int n;
    cout << "Enter the value of n: ";
    cin >> n;
    cout << "Number of ZigZag arrays of length " << n << " is: " << sol.zigzagCount(n) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Input and Edge Case Handling**: We first check if `n` is 1. If true, we immediately return 1 as there's only one array possible with a single number.

2. **DP Arrays**: We initialize two DP arrays `up` and `down` to store counts.

3. **Filling the DP Tables**: We loop through lengths from 2 to `n`, updating the `up` and `down` counts based on the previous lengths.

4. **Final Count**: The result is obtained by adding the counts for both sequences of length `n`.

This code will give the total number of ZigZag arrays that can be created using numbers from `1` to `n`.