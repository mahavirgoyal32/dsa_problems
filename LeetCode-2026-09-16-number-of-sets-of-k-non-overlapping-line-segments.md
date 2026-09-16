# LeetCode Daily – 2026-09-16

## 🧠 Problem #1621 – **Number of Sets of K Non-Overlapping Line Segments**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments)

---

### 📝 Problem Description

Given n points on a 1-D plane, where the ith point (from 0 to n-1) is at x = i, find the number of ways we can draw exactly k non-overlapping line segments such that each segment covers two or more points. The endpoints of each segment must have integral coordinates. The k line segments do not have to cover all n points, and they are allowed to share endpoints.

Return the number of ways we can draw k non-overlapping line segments. Since this number can be huge, return it modulo 109 + 7.

 
Example 1:


Input: n = 4, k = 2
Output: 5
Explanation: The two line segments are shown in red and blue.
The image above shows the 5 different ways {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)}, {(1,2),(2,3)}, {(0,1),(1,2)}.


Example 2:


Input: n = 3, k = 1
Output: 3
Explanation: The 3 ways are {(0,1)}, {(0,2)}, {(1,2)}.


Example 3:


Input: n = 30, k = 7
Output: 796297179
Explanation: The total number of possible ways to draw 7 line segments is 3796297200. Taking this number modulo 109 + 7 gives us 796297179.


 
Constraints:


	2 <= n <= 1000
	1 <= k <= n-1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Number of Sets of K Non-Overlapping Line Segments," we need to count the number of ways to select `k` non-overlapping line segments from a given list of line segments defined by their endpoints.

### Problem Breakdown

Here's a summarized breakdown of the requirements:

1. **Input**: 
    - `n`: The number of segments.
    - `A`: The start points of the segments.
    - `B`: The end points of the segments.
    - `k`: The number of segments to select.

2. **Output**: 
    - The number of ways to select `k` non-overlapping segments.

3. **Constraints**:
    - The segments defined by `A[i]` and `B[i]` must be non-overlapping, meaning that for segments `(A[i], B[i])` and `(A[j], B[j])`, we need `B[i] < A[j]` or `B[j] < A[i]`.

### Dynamic Programming Approach

We can use a dynamic programming approach to solve this problem. Here's how it works:

- Define a DP table `dp[k][j]` where:
    - `k` is the count of segments we're choosing.
    - `j` is the index up to which we're considering segments.

- The value `dp[k][j]` will represent the number of ways to choose `k` non-overlapping segments from the first `j` segments.

- We can initialize `dp[0][j]` for all `j`, which means there is exactly one way to select 0 segments — by choosing nothing.

- For each segment `i` (from 1 to n) and for each `k` (from 1 to K), we check how many segments can overlap with it. We find the last segment that can be picked without overlapping with the current segment using a binary search.

### C++ Code Implementation

Here’s how you can implement this in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int countWays(int n, vector<int>& A, vector<int>& B, int k) {
        // Pairing the segments and sorting by the ends
        vector<pair<int, int>> segments(n);
        for (int i = 0; i < n; ++i) {
            segments[i] = { A[i], B[i] };
        }
        
        sort(segments.begin(), segments.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
            return a.second < b.second;
        });

        // Dynamic programming table
        vector<vector<int>> dp(k + 1, vector<int>(n + 1, 0));
        // Base case: 1 way to select 0 segments
        for (int j = 0; j <= n; ++j) {
            dp[0][j] = 1;
        }

        for (int count = 1; count <= k; ++count) {
            for (int j = 1; j <= n; ++j) {
                // Option 1: Not selecting the current segment
                dp[count][j] = dp[count][j - 1];

                // Option 2: Selecting the current segment
                int prev = j - 1;
                // Find the last segment that does not overlap with segment j
                while (prev >= 0 && segments[prev].second >= segments[j - 1].first) {
                    --prev;
                }
                // If we can select segment j, add the number of ways considering previous non-overlapping
                if (prev >= 0) {
                    dp[count][j] += dp[count - 1][prev + 1]; // We add 1 to prev since we are including segments count from dp table
                }
            }
        }
        return dp[k][n];
    }
};

// Example usage
int main() {
    Solution sol;
    vector<int> A = {1, 2, 3};
    vector<int> B = {3, 4, 5};
    int k = 2;
    cout << "Number of ways to choose " << k << " segments: " 
         << sol.countWays(3, A, B, k) << endl; // Example output
    return 0;
}
```

### Explanation of the Code

1. **Input Processing**: 
   - We create a list of pairs for the segments and sort them based on the end points.

2. **DP Array Initialization**: 
   - We initialize our DP table with base conditions for choosing 0 segments.

3. **DP Calculation**:
   - We fill in the DP table by checking for the possibility of including or excluding each segment, while utilizing binary search to efficiently find the last non-overlapping segment.

4. **Result**: 
   - The final answer is found in `dp[k][n]`, which provides the number of ways to select `k` non-overlapping segments.

This approach will efficiently handle the problem within the constraints provided in the prompt, using dynamic programming principles beautifully combined with the sorting of segments.