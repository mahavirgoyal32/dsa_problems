# LeetCode Daily – 2025-12-21

## 🧠 Problem #955 – **Delete Columns to Make Sorted II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-columns-to-make-sorted-ii)

---

### 📝 Problem Description

You are given an array of n strings strs, all of the same length.

We may choose any deletion indices, and we delete all the characters in those indices for each string.

For example, if we have strs = [&quot;abcdef&quot;,&quot;uvwxyz&quot;] and deletion indices {0, 2, 3}, then the final array after deletions is [&quot;bef&quot;, &quot;vyz&quot;].

Suppose we chose a set of deletion indices answer such that after deletions, the final array has its elements in lexicographic order (i.e., strs[0] <= strs[1] <= strs[2] <= ... <= strs[n - 1]). Return the minimum possible value of answer.length.

 
Example 1:


Input: strs = [&quot;ca&quot;,&quot;bb&quot;,&quot;ac&quot;]
Output: 1
Explanation: 
After deleting the first column, strs = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;].
Now strs is in lexicographic order (ie. strs[0] <= strs[1] <= strs[2]).
We require at least 1 deletion since initially strs was not in lexicographic order, so the answer is 1.


Example 2:


Input: strs = [&quot;xc&quot;,&quot;yb&quot;,&quot;za&quot;]
Output: 0
Explanation: 
strs is already in lexicographic order, so we do not need to delete anything.
Note that the rows of strs are not necessarily in lexicographic order:
i.e., it is NOT necessarily true that (strs[0][0] <= strs[0][1] <= ...)


Example 3:


Input: strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]
Output: 3
Explanation: We have to delete every column.


 
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

The problem "Delete Columns to Make Sorted II" from LeetCode asks us to delete columns from a list of strings such that the remaining columns are sorted in lexicographical order. The twist here is that we might have to delete multiple columns if they are not in sorted order, and we can also have the freedom to delete columns multiple times.

### Problem Explanation:
You are given an array of strings, and you want to delete columns (i.e., specific characters in the strings) until the remaining columns are sorted in non-decreasing order. You need to return the minimum number of columns to delete.

### Example:

For a given list of strings:
```
["ca","bb","ac"]
```
- If you delete the 1st column (`c`, `b`, `a`), you will have:
```
["a","b"]
```
So the strings are sorted and you only deleted 1 column. Hence the answer will be `1`.

### Solution Approach:

1. **Sorting Columns**: We can iterate through columns and check if a column is sorted. If it's not sorted, we will consider deleting it. However, it’s essential to remember that deleting a column might create a situation where previously unsorted columns could now be ordered. Therefore, we can use a set to keep track of which columns we have already deleted.

2. **Iterate**: For each character position of the strings (i.e., column), we will check if it is in sorted order when compared to the previous characters of the strings. If not sorted and that column is not already marked for deletion, we will mark it.

### Implementation:

Here is the C++ solution implementing the above logic:

```cpp
#include <vector>
#include <string>
#include <set>

class Solution {
public:
    int minDeletionSize(std::vector<std::string>& A) {
        int m = A.size(); // number of strings
        int n = A[0].size(); // length of each string
        std::set<int> deletedColumns; // to track deleted columns
        int count = 0; // to count the number of deleted columns

        for (int col = 0; col < n; col++) {
            bool isSorted = true; // assume current column is sorted
            
            // Check if the current column is sorted in relation to the previous column(s)
            for (int row = 1; row < m; row++) {
                // If the previous column is not marked as deleted, check if current is in order
                if (deletedColumns.count(col - 1) == 0 && A[row][col] < A[row - 1][col]) {
                    isSorted = false; // not sorted
                    break;
                }
            }
            
            if (!isSorted) {
                deletedColumns.insert(col); // mark column as deleted
                count++; // increment delete count
            }
        }

        return count; // return the total number of deleted columns
    }
};
```

### Explanation of the Code:

1. **Initialization**: We define `m` as the number of strings and `n` as the length of the strings. We then define a `set` to keep track of which columns have been marked for deletion and a `count` variable to count those deletions.

2. **Outer Loop**: We iterate through each column index from `0` to `n - 1`.

3. **Inner Loop**: For each column, we check if the column entries are in sorted order:
   - For each row starting from the second row (index `1`), if the current character in the column is less than the previous row's character in the same column, we mark the column as not sorted.

4. **Check and Track Deletes**: If a column isn't sorted, we record it in the set and increase our delete count. 

5. **Result**: Finally, we return the count of columns deleted.

This algorithm effectively ensures that we track deleted columns properly to maintain the lexicographical order as needed.