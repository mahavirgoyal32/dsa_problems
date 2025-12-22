# LeetCode Daily – 2025-12-22

## 🧠 Problem #960 – **Delete Columns to Make Sorted III**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-columns-to-make-sorted-iii)

---

### 📝 Problem Description

You are given an array of n strings strs, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

For example, if we have strs = [&quot;abcdef&quot;,&quot;uvwxyz&quot;] and deletion indices {0, 2, 3}, then the final array after deletions is [&quot;bef&quot;, &quot;vyz&quot;].

Suppose we chose a set of deletion indices answer such that after deletions, the final array has every string (row) in lexicographic order. (i.e., (strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1]), and (strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1]), and so on). Return the minimum possible value of answer.length.

 
Example 1:


Input: strs = [&quot;babca&quot;,&quot;bbazb&quot;]
Output: 3
Explanation: After deleting columns 0, 1, and 4, the final array is strs = [&quot;bc&quot;, &quot;az&quot;].
Both these rows are individually in lexicographic order (ie. strs[0][0] <= strs[0][1] and strs[1][0] <= strs[1][1]).
Note that strs[0] > strs[1] - the array strs is not necessarily in lexicographic order.

Example 2:


Input: strs = [&quot;edcba&quot;]
Output: 4
Explanation: If we delete less than 4 columns, the only row will not be lexicographically sorted.


Example 3:


Input: strs = [&quot;ghi&quot;,&quot;def&quot;,&quot;abc&quot;]
Output: 0
Explanation: All rows are already lexicographically sorted.


 
Constraints:


	n == strs.length
	1 <= n <= 100
	1 <= strs[i].length <= 100
	strs[i] consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Delete Columns to Make Sorted III" asks us to delete the minimum number of columns from a given list of strings such that the remaining columns can sort the strings in non-decreasing order.

To solve this problem, we can use a dynamic programming approach, leveraging the concept of Longest Increasing Subsequence (LIS). Here’s the step-by-step explanation along with the C++ implementation.

### Explanation:

1. **Understanding the Goal**:
   - We want the remaining columns to help sort the strings. To achieve this, we need to determine which columns are critical for maintaining order among the rows.

2. **Dynamic Programming Setup**:
   - We'll create a dynamic programming array `dp` where `dp[j]` will store the length of the longest "increasing" subsequence that can be formed using the first `j` columns.
   - The key insight is that if we can ensure that for every column `j`, the values in that column must be greater than or equal to all previous columns being considered for the subsequence.

3. **Processing Columns**:
   - We iterate through each column and for every row in that column, we keep track of the indices and attempt to update our `dp` array.
   - If we can form a valid increasing subsequence with the columns we've seen so far, we will update the `dp` array accordingly.

4. **Result Calculation**:
   - Finally, the minimum number of deletions required will be the total number of columns minus the maximum length of the increasing subsequence we can form.

Here’s the C++ implementation of the above logic:

```cpp
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        int colCount = strs[0].size();
        int rowCount = strs.size();
        vector<int> dp(colCount, 1); // dp[i] - length of LIS ending at column i
        
        // Process each column
        for (int j = 0; j < colCount; j++) {
            for (int i = 0; i < j; i++) {
                bool isIncreasing = true;
                // Check if current column `j` can extend the LIS from column `i`
                for (int k = 0; k < rowCount; k++) {
                    if (strs[k][i] > strs[k][j]) {
                        isIncreasing = false;
                        break;
                    }
                }
                if (isIncreasing) {
                    dp[j] = max(dp[j], dp[i] + 1);
                }
            }
        }
        
        // Find the maximum length of increasing subsequence
        int maxLIS = *max_element(dp.begin(), dp.end());
        
        // Minimum deletions required
        return colCount - maxLIS;
    }
};
```

### Key Points:
- The `dp` array helps us keep track of the longest increasing subsequence we can form up to each column, ensuring that the string array remains sorted.
- The innermost loop checks if the current column can extend the sequence formed up to a previous column.
- Finally, we compute the minimum deletions required by subtracting the length of the maximum increasing subsequence from the total number of columns.

### Complexity:
- **Time Complexity**: \(O(C^2 \cdot R)\) where \(C\) is the number of columns and \(R\) is the number of rows. The algorithm involves a double loop over columns and an inner loop over rows.
- **Space Complexity**: \(O(C)\) for the `dp` array.

This solution effectively determines the columns that create an ordered sequence, allowing the necessary deletions to ensure sortedness.