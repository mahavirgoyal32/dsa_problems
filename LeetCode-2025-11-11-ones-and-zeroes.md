# LeetCode Daily – 2025-11-11

## 🧠 Problem #474 – **Ones and Zeroes**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/ones-and-zeroes)

---

### 📝 Problem Description

You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0&#39;s and n 1&#39;s in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

 
Example 1:


Input: strs = [&quot;10&quot;,&quot;0001&quot;,&quot;111001&quot;,&quot;1&quot;,&quot;0&quot;], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0&#39;s and 3 1&#39;s is {&quot;10&quot;, &quot;0001&quot;, &quot;1&quot;, &quot;0&quot;}, so the answer is 4.
Other valid but smaller subsets include {&quot;0001&quot;, &quot;1&quot;} and {&quot;10&quot;, &quot;1&quot;, &quot;0&quot;}.
{&quot;111001&quot;} is an invalid subset because it contains 4 1&#39;s, greater than the maximum of 3.


Example 2:


Input: strs = [&quot;10&quot;,&quot;0&quot;,&quot;1&quot;], m = 1, n = 1
Output: 2
Explanation: The largest subset is {&quot;0&quot;, &quot;1&quot;}, so the answer is 2.


 
Constraints:


	1 <= strs.length <= 600
	1 <= strs[i].length <= 100
	strs[i] consists only of digits &#39;0&#39; and &#39;1&#39;.
	1 <= m, n <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Ones and Zeroes" on LeetCode asks us to determine the maximum number of strings from a given list that can be formed using a limited number of `m` zeroes and `n` ones. Each string consists of a certain number of zeroes and ones.

### Problem Breakdown
Given an array of strings:
- Count how many '0's and '1's each string contains.
- You have `m` zeroes and `n` ones available to form valid strings.
- Our goal is to maximize the number of strings that can be formed without exceeding the limits of `m` and `n`.

### Dynamic Programming Approach
The solution can be approached using a dynamic programming method similar to the Knapsack problem. Here's a step-by-step breakdown of the approach:

1. **Count the number of zeroes and ones** in each string. Store this information in a vector of pairs.

2. **Initialize a DP table** where `dp[i][j]` represents the maximum number of strings that can be formed with `i` zeroes and `j` ones.

3. **Iterate through each string**, and for each string, update the DP table. Use a reverse iteration to prevent overwriting results in the current iteration.

4. **Return the maximum value** from the DP table after processing all strings.

### C++ Implementation
Here’s the C++ code for the above approach along with comments explaining each step:

```cpp
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int findMaxForm(vector<string>& strs, int m, int n) {
        // Initialize the DP table with dimensions (m+1) x (n+1)
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Iterate over each string
        for (const auto& str : strs) {
            int zeros = count(str.begin(), str.end(), '0'); // Count of '0's in the current string
            int ones = str.size() - zeros; // Total length minus count of '0's gives count of '1's
            
            // Update the DP table in reverse order
            for (int i = m; i >= zeros; --i) { // Start from m down to zeros
                for (int j = n; j >= ones; --j) { // Start from n down to ones
                    dp[i][j] = max(dp[i][j], dp[i - zeros][j - ones] + 1);
                }
            }
        }
        
        return dp[m][n]; // The result is in the bottom-right cell of the DP table
    }
};
```

### Explanation of the Code:
1. **DP Table Initialization**: We create a 2D vector `dp` initialized with zeros, with dimensions `(m + 1)` x `(n + 1)`. 

2. **Counting Zeros and Ones**: For each string, we count the number of '0's using `count()` and derive the number of '1's accordingly.

3. **Updating the DP Table**: We update the DP table by iterating backwards through the dimensions `m` and `n`. This ensures that when we compute the maximum number of strings that can be formed with the current string considered, we do not count the same string more than once.

4. **Result Retrieval**: Finally, the maximum number of strings that can be formed is found at `dp[m][n]`.

### Time Complexity
- The algorithm runs in `O(S * m * n)`, where `S` is the number of strings. This is due to iterating through each string and updating the DP table.

### Space Complexity
- The space complexity is `O(m * n)` due to the DP table storage.

This solution is efficient and effectively solves the problem by leveraging dynamic programming!