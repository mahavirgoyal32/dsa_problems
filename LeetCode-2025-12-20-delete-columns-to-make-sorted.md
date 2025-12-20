# LeetCode Daily – 2025-12-20

## 🧠 Problem #944 – **Delete Columns to Make Sorted**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-columns-to-make-sorted)

---

### 📝 Problem Description

You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.


	For example, strs = [&quot;abc&quot;, &quot;bce&quot;, &quot;cae&quot;] can be arranged as follows:



abc
bce
cae


You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 (&#39;a&#39;, &#39;b&#39;, &#39;c&#39;) and 2 (&#39;c&#39;, &#39;e&#39;, &#39;e&#39;) are sorted, while column 1 (&#39;b&#39;, &#39;c&#39;, &#39;a&#39;) is not, so you would delete column 1.

Return the number of columns that you will delete.

 
Example 1:


Input: strs = [&quot;cba&quot;,&quot;daf&quot;,&quot;ghi&quot;]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.


Example 2:


Input: strs = [&quot;a&quot;,&quot;b&quot;]
Output: 0
Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.


Example 3:


Input: strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]
Output: 3
Explanation: The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.


 
Constraints:


	n == strs.length
	1 <= n <= 100
	1 <= strs[i].length <= 1000
	strs[i] consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Delete Columns to Make Sorted" requires us to determine how many columns we need to delete from a list of strings so that the remaining columns are sorted in non-decreasing order.

Here's a breakdown of how to approach the problem along with the C++ solution:

## Problem Explanation

We have `n` strings, each of length `m`. We want to delete the minimum number of columns such that the remaining columns (after potential deletions) are sorted in non-decreasing order from top to bottom.

For instance, given the strings:
```
["cba", "daf", "ghi"]
```
- The first column contains `["c", "d", "g"]`, the second column contains `["b", "a", "h"]`, and the third column contains `["a", "f", "i"]`.
- The first column is sorted, but the second and third are not. Therefore, to make the strings sorted, we can delete the second column and possibly the third.

## Approach

1. **Iterate through the columns**: For each column, check if it is sorted with respect to the rows.
2. **Count unsorted columns**: Every time we find a column that is not sorted, we increment a counter representing the number of columns to be deleted.
3. **Output the count**: After checking all columns, the counter will represent the minimum number of columns to delete to make the remaining columns sorted.

### C++ Solution

```cpp
#include <vector>
#include <string>

class Solution {
public:
    int minDeletionSize(std::vector<std::string>& strs) {
        int count = 0;
        int numRows = strs.size();
        int numCols = strs[0].size();

        // Loop through each column
        for (int col = 0; col < numCols; ++col) {
            for (int row = 1; row < numRows; ++row) {
                // Check if the current column is sorted
                if (strs[row][col] < strs[row - 1][col]) {
                    count++;
                    break; // No need to check further for this column
                }
            }
        }

        return count; // The count of columns that need to be deleted
    }
};
```

### Explanation of the Code
1. **Initialization**: 
   - We declare a variable `count` to keep track of how many columns are unsorted.
   - We retrieve the number of rows (`numRows`) and the number of columns (`numCols`).

2. **Outer loop through columns**:
   - We loop through each column index from `0` to `numCols - 1`.

3. **Inner loop through rows**:
   - For each column, we start from the second row (index `1`) and compare each character in the current column with the character from the row above.
   - If the current character (`strs[row][col]`) is less than the character above it (`strs[row - 1][col]`), the column is considered unsorted.

4. **Count the unsorted columns**:
   - If we find an unsorted column, we increment the `count` and break out of the inner loop because we don't need to check further for this column.

5. **Return the result**:
   - Finally, we return the `count` which indicates the number of columns that need to be deleted.

This algorithm runs in O(n * m) time complexity, where n is the number of strings and m is the length of each string. This is efficient enough for the input limits specified in the problem statement.