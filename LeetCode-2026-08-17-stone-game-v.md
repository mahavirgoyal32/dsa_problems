# LeetCode Daily – 2026-08-17

## 🧠 Problem #1563 – **Stone Game V**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/stone-game-v)

---

### 📝 Problem Description

There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.

In each round of the game, Alice divides the row into two non-empty rows (i.e. left row and right row), then Bob calculates the value of each row which is the sum of the values of all the stones in this row. Bob throws away the row which has the maximum value, and Alice&#39;s score increases by the value of the remaining row. If the value of the two rows are equal, Bob lets Alice decide which row will be thrown away. The next round starts with the remaining row.

The game ends when there is only one stone remaining. Alice&#39;s score is initially zero.

Return the maximum score that Alice can obtain.

 
Example 1:


Input: stoneValue = [6,2,3,4,5,5]
Output: 18
Explanation: In the first round, Alice divides the row to [6,2,3], [4,5,5]. The left row has the value 11 and the right row has value 14. Bob throws away the right row and Alice&#39;s score is now 11.
In the second round Alice divides the row to [6], [2,3]. This time Bob throws away the left row and Alice&#39;s score becomes 16 (11 + 5).
The last round Alice has only one choice to divide the row which is [2], [3]. Bob throws away the right row and Alice&#39;s score is now 18 (16 + 2). The game ends because only one stone is remaining in the row.


Example 2:


Input: stoneValue = [7,7,7,7,7,7,7]
Output: 28


Example 3:


Input: stoneValue = [4]
Output: 0


 
Constraints:


	1 <= stoneValue.length <= 500
	1 <= stoneValue[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's take a look at the "Stone Game V" problem from LeetCode.

### Problem Explanation

In the "Stone Game V" challenge, you have a pile of stones represented by an array `stoneValue`. The game is played as follows:

1. You and another player take turns choosing a contiguous subarray of stones.
2. You gain points equal to the sum of the stones in the chosen subarray.
3. After your turn, the remaining stones are split into two piles (if any) based on the point you just scored:
   - The left pile consists of stones left before the chosen subarray.
   - The right pile consists of stones left after the chosen subarray.
4. The game continues until there are no stones left to choose, and the player with the most points wins.

### Goal
Your goal is to determine the maximum score you can achieve by strategically choosing your subarrays.

### Solution Overview
To solve this problem, we can use dynamic programming (DP). The DP approach essentially revolves around maintaining a DP table where each entry represents the maximum score that can be obtained from a specific subarray of `stoneValue`.

### Steps
1. **Define DP Array**: Create a DP table `dp[i][j]` where `dp[i][j]` represents the maximum score you can achieve considering the subarray from index `i` to `j`.
2. **Base Cases**: If `i == j`, there's only one stone, and hence the score is `stoneValue[i]`.
3. **Recurrence Relation**:
   - Iterate through all possible starting indices `i` and ending indices `j` of the subarrays.
   - Calculate the sum of values in the subarray `stoneValue[i]` to `stoneValue[j]`.
   - For each subarray, try every possible split and see what scores are obtainable from the left `leftSum` and right `rightSum` partitions.
   - Depending on whether the scores are equal or one exceeds the other, update the DP array.
4. **Final Result**: The result will be stored in `dp[0][n-1]`, where `n` is the length of the `stoneValue` array.

### C++ Implementation

Here's the C++ code that implements the above logic:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int stoneGameV(vector<int>& stoneValue) {
        int n = stoneValue.size();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        vector<int> prefix(n + 1, 0);

        // Calculate prefix sums
        for (int i = 0; i < n; ++i) {
            prefix[i + 1] = prefix[i] + stoneValue[i];
        }

        // Base case: single stones
        for (int i = 0; i < n; ++i) {
            dp[i][i] = stoneValue[i];
        }

        // Fill the DP table
        for (int length = 2; length <= n; ++length) {
            for (int i = 0; i <= n - length; ++i) {
                int j = i + length - 1;  // Subarray from i to j
                for (int k = i; k < j; ++k) {
                    int leftSum = prefix[k + 1] - prefix[i];  // Sum of stones from i to k
                    int rightSum = prefix[j + 1] - prefix[k + 1];  // Sum of stones from k+1 to j

                    if (leftSum < rightSum) {
                        dp[i][j] = max(dp[i][j], dp[i][k] + leftSum);
                    } else if (leftSum > rightSum) {
                        dp[i][j] = max(dp[i][j], dp[k + 1][j] + rightSum);
                    } else {
                        dp[i][j] = max(dp[i][j], dp[i][k] + leftSum);
                        dp[i][j] = max(dp[i][j], dp[k + 1][j] + rightSum);
                    }
                }
            }
        }

        return dp[0][n - 1];
    }
};

int main() {
    Solution solution;
    vector<int> stoneValue = {6, 2, 3, 4, 5, 5}; // Example input
    int result = solution.stoneGameV(stoneValue);
    cout << "Maximum score: " << result << endl; 
    return 0;
}
```

### Explanation of the Code
1. We create a `prefix` array to compute the sum of stones in any subarray efficiently.
2. We initialize the DP table with base cases.
3. For every possible length of subarrays (`length` from 2 to `n`), we update possible scores by checking splits and calculating the scores based on left and right sums.
4. Finally, the value in `dp[0][n-1]` gives the maximum score achievable.

This solution efficiently computes the result using an O(n^3) time complexity, due to the three nested loops (for lengths, and for each pair of i and j). Depending on the input size, this could potentially be optimized.