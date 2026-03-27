# LeetCode Daily – 2026-03-27

## 🧠 Problem #2946 – **Matrix Similarity After Cyclic Shifts**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts)

---

### 📝 Problem Description

You are given an m x n integer matrix mat and an integer k. The matrix rows are 0-indexed.

The following proccess happens k times:


	Even-indexed rows (0, 2, 4, ...) are cyclically shifted to the left.





	Odd-indexed rows (1, 3, 5, ...) are cyclically shifted to the right.




Return true if the final modified matrix after k steps is identical to the original matrix, and false otherwise.

 
Example 1:


Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4

Output: false

Explanation:

In each step left shift is applied to rows 0 and 2 (even indices), and right shift to row 1 (odd index).




Example 2:


Input: mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2

Output: true

Explanation:




Example 3:


Input: mat = [[2,2],[2,2]], k = 3

Output: true

Explanation:

As all the values are equal in the matrix, even after performing cyclic shifts the matrix will remain the same.


 
Constraints:


	1 <= mat.length <= 25
	1 <= mat[i].length <= 25
	1 <= mat[i][j] <= 25
	1 <= k <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem "Matrix Similarity After Cyclic Shifts" and then I'll provide a C++ solution along with an explanation.

### Problem Understanding

You are given two `n x n` matrices `mat1` and `mat2`. You need to check if `mat2` can be obtained by applying some cyclic shifts to rows of `mat1`. A cyclic shift means that for any row in a matrix, you can shift all its elements left or right, wrapping around to the other side.

### Key Observations

1. **Row Normalization**: For each row in `mat1`, generate all possible cyclic forms of that row. This will be useful to see if any of these forms can match the rows in `mat2`.
  
2. **Using a Set**: Since the order of rows in `mat2` doesn't matter, we can use a `set` to store all cyclic forms of each row of `mat1`. For `mat2`, we'll check if each row exists in the set of cyclic forms.

3. **Efficiency**: Each row of `mat1` can create `n` cyclic forms, which results in `O(n^2)` time complexity for generating these forms and checking against `mat2` rows.

### C++ Solution

Here's the C++ code to implement the above logic:

```cpp
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool areSimilar(vector<vector<int>>& mat1, vector<vector<int>>& mat2) {
        unordered_set<string> normalizedRows;

        // Generate all cyclic shifts for each row in mat1 and add to the set
        for (const auto& row : mat1) {
            string cyclicForm = "";
            // Build a string for all cyclic shifts by concatenating the row with itself
            for (int num : row) {
                cyclicForm += to_string(num) + ",";
            }
            cyclicForm += cyclicForm;  // Append to itself to facilitate cyclic shifts
            for (int start = 0; start < row.size(); start++) {
                // Extract the substring representing the cyclic shift
                string shifted = cyclicForm.substr(start, cyclicForm.size() / 2);
                normalizedRows.insert(shifted);
            }
        }

        // Now we check if each row in mat2 can be found in the set of normalized rows
        for (const auto& row : mat2) {
            string cyclicForm = "";
            for (int num : row) {
                cyclicForm += to_string(num) + ",";
            }
            if (normalizedRows.find(cyclicForm) == normalizedRows.end()) {
                return false; // This row from mat2 isn't a cyclic form of any in mat1
            }
        }

        return true; // All rows from mat2 are matched
    }
};
```

### Explanation of the Code

1. **Set Definition**: We define an `unordered_set` called `normalizedRows` to hold all cyclic forms of rows from `mat1`.

2. **Generating Cyclic Forms**:
   - For each row in `mat1`, we create a string representation (with commas for easier handling).
   - We concatenate the row to itself which allows easy extraction of all possible cyclic shifts using a substring operation.

3. **Checking Rows of mat2**:
   - For each row in `mat2`, we generate its string representation and simply check if it exists in the `normalizedRows` set.
   - If we find even one row from `mat2` that cannot be matched with cyclic shifts of `mat1`, we return `false`.

4. **Return True**: If all the rows in `mat2` can be matched with cyclic shifts of rows from `mat1`, we return `true`.

This solution efficiently checks for cyclic similarity between the two matrices using string representation to handle cyclic shifts. The complexity is manageable given the constraints typical for matrix problems.