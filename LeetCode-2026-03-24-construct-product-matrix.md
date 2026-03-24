# LeetCode Daily – 2026-03-24

## 🧠 Problem #2906 – **Construct Product Matrix**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/construct-product-matrix)

---

### 📝 Problem Description

Given a 0-indexed 2D integer matrix grid of size n * m, we define a 0-indexed 2D matrix p of size n * m as the product matrix of grid if the following condition is met:


	Each element p[i][j] is calculated as the product of all elements in grid except for the element grid[i][j]. This product is then taken modulo 12345.


Return the product matrix of grid.

 
Example 1:


Input: grid = [[1,2],[3,4]]
Output: [[24,12],[8,6]]
Explanation: p[0][0] = grid[0][1] * grid[1][0] * grid[1][1] = 2 * 3 * 4 = 24
p[0][1] = grid[0][0] * grid[1][0] * grid[1][1] = 1 * 3 * 4 = 12
p[1][0] = grid[0][0] * grid[0][1] * grid[1][1] = 1 * 2 * 4 = 8
p[1][1] = grid[0][0] * grid[0][1] * grid[1][0] = 1 * 2 * 3 = 6
So the answer is [[24,12],[8,6]].

Example 2:


Input: grid = [[12345],[2],[1]]
Output: [[2],[0],[0]]
Explanation: p[0][0] = grid[0][1] * grid[0][2] = 2 * 1 = 2.
p[0][1] = grid[0][0] * grid[0][2] = 12345 * 1 = 12345. 12345 % 12345 = 0. So p[0][1] = 0.
p[0][2] = grid[0][0] * grid[0][1] = 12345 * 2 = 24690. 24690 % 12345 = 0. So p[0][2] = 0.
So the answer is [[2],[0],[0]].

 
Constraints:


	1 <= n == grid.length <= 105
	1 <= m == grid[i].length <= 105
	2 <= n * m <= 105
	1 <= grid[i][j] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Construct Product Matrix" problem, we need to create a new matrix that holds the product of all elements in the original matrix except for the element at the same position. This can be achieved efficiently by using prefix and suffix products for each row and column.

### Explanation

Given an `m x n` matrix `A`, we want to create a result matrix `B` of the same size. The element `B[i][j]` should be the product of all elements in `A` except for `A[i][j]`. 

Here's a breakdown of how to compute this efficiently:
1. **Compute Prefix and Suffix Products**:
   - For each row, compute a prefix product and a suffix product.
   - The prefix product for a row at index `j` is the product of all elements to the left of `A[i][j]`.
   - The suffix product for a row at index `j` is the product of all elements to the right of `A[i][j]`.

2. **Fill the Result Matrix**:
   - For each element `B[i][j]`, multiply the prefix and suffix products corresponding to that element.

### Implementation

Here's how you can implement this in C++:

```cpp
#include <vector>
using namespace std;

vector<vector<int>> constructProductMatrix(vector<vector<int>>& A) {
    int rows = A.size();
    int cols = A[0].size();
    vector<vector<int>> B(rows, vector<int>(cols, 1));

    // Calculate prefix and suffix products for each row
    for (int i = 0; i < rows; i++) {
        vector<int> prefix(cols, 1);
        vector<int> suffix(cols, 1);

        // Compute prefix products
        for (int j = 1; j < cols; j++) {
            prefix[j] = prefix[j - 1] * A[i][j - 1];
        }

        // Compute suffix products
        for (int j = cols - 2; j >= 0; j--) {
            suffix[j] = suffix[j + 1] * A[i][j + 1];
        }

        // Fill the result matrix B
        for (int j = 0; j < cols; j++) {
            B[i][j] = prefix[j] * suffix[j];
        }
    }

    return B;
}
```

### Explanation of the Code

1. **Initialization**:
   - We declare a vector of vectors `B` of the same size as `A`, initialized with ones. This will hold the final product matrix.

2. **Row-by-row Calculation**:
   - We loop through each row of the matrix `A`.
   - For each row, we create arrays for `prefix` and `suffix` products.

3. **Prefix Product Calculation**:
   - We fill the `prefix` array by multiplying each element with the product of the previous elements in the same row.

4. **Suffix Product Calculation**:
   - Similarly, we fill the `suffix` array in reverse order, multiplying each element with the product of all subsequent elements.

5. **Combining Results**:
   - For each element, we calculate the product of its prefix and suffix to fill in the result matrix `B`.

### Time Complexity
The time complexity of this approach is \(O(m \times n)\) where \(m\) is the number of rows and \(n\) is the number of columns, making it efficient and suitable for medium-sized matrices.

### Space Complexity
The space complexity is \(O(n)\) for storing the prefix and suffix products for each row, which is quite acceptable.