# LeetCode Daily – 2026-05-04

## 🧠 Problem #48 – **Rotate Image**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotate-image)

---

### 📝 Problem Description

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 
Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]


Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


 
Constraints:


	n == matrix.length == matrix[i].length
	1 <= n <= 20
	-1000 <= matrix[i][j] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Rotate Image" from LeetCode requires us to rotate a given `n x n` 2D matrix (image) by 90 degrees clockwise in place. This means that we need to modify the matrix directly without using any extra space for a second matrix.

## Explanation:

To rotate the image clockwise by 90 degrees, we can break the operation into two main steps:

1. **Transpose the matrix**: In this step, we will swap the rows with columns. Specifically, for every `i` and `j`, we will set `matrix[i][j]` to `matrix[j][i]`. This effectively flips the matrix over its diagonal.

2. **Reverse each row**: After transposing, we will reverse each row of the matrix. This will complete the 90-degree clockwise rotation.

### Steps:
- For example, take a 3x3 matrix:
    ```
    1 2 3
    4 5 6
    7 8 9
    ```
    After transposing, it becomes:
    ```
    1 4 7
    2 5 8
    3 6 9
    ```
    
- After reversing each row, it becomes:
    ```
    7 4 1
    8 5 2
    9 6 3
    ```

This gives us the rotated output.

## C++ Code:

Here's how you can implement this in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();

        // Step 1: Transpose the matrix
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                swap(matrix[i][j], matrix[j][i]);
            }
        }

        // Step 2: Reverse each row
        for (int i = 0; i < n; i++) {
            reverse(matrix[i].begin(), matrix[i].end());
        }
    }
};
```

### Explanation of the Code:

1. **Transpose the Matrix:**
   - The outer loop runs with `i` from 0 to `n-1`.
   - The inner loop runs with `j` from `i+1` to `n-1` (to avoid swapping already swapped elements).
   - We swap `matrix[i][j]` with `matrix[j][i]`. This transposes the matrix.

2. **Reverse Each Row:**
   - For each row `i`, we reverse it using `reverse(matrix[i].begin(), matrix[i].end())`.

### Complexity Analysis:
- **Time Complexity:** The time complexity is `O(n^2)`, where `n` is the number of rows (or columns) in the matrix. We process every element twice.
- **Space Complexity:** The space complexity is `O(1)` because we perform the operations in place without using any additional data structures.

This solution efficiently rotates the image and adheres to the problem's constraints requiring in-place modification.

Feel free to ask if you have any more questions or need further elaboration!