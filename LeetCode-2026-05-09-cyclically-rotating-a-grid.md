# LeetCode Daily – 2026-05-09

## 🧠 Problem #1914 – **Cyclically Rotating a Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/cyclically-rotating-a-grid)

---

### 📝 Problem Description

You are given an m x n integer matrix grid​​​, where m and n are both even integers, and an integer k.

The matrix is composed of several layers, which is shown in the below image, where each color is its own layer:



A cyclic rotation of the matrix is done by cyclically rotating each layer in the matrix. To cyclically rotate a layer once, each element in the layer will take the place of the adjacent element in the counter-clockwise direction. An example rotation is shown below:

Return the matrix after applying k cyclic rotations to it.

 
Example 1:


Input: grid = [[40,10],[30,20]], k = 1
Output: [[10,20],[40,30]]
Explanation: The figures above represent the grid at every state.


Example 2:
  


Input: grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2
Output: [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
Explanation: The figures above represent the grid at every state.


 
Constraints:


	m == grid.length
	n == grid[i].length
	2 <= m, n <= 50
	Both m and n are even integers.
	1 <= grid[i][j] <= 5000
	1 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem of cyclically rotating a grid step by step, and then I'll provide a C++ solution.

### Problem Explanation

You are given a grid (a 2D array of integers) and a positive integer `k`. The task is to rotate the grid `k` times in a cyclic manner. A cyclic rotation means that every element in the grid is moved `k` positions in a clockwise direction. For example, if you consider a single layer of a grid, elements will wrap around from the end to the beginning.

### Key Points to Consider

1. **Identifying Layers**: The grid can be thought of in terms of "layers" or rings. For example, a 4x4 grid has:
   - An outer layer (the perimeter),
   - An inner layer (the next elements inside the outer layer).

2. **Extracting Elements**: For each layer, we can extract its elements into a 1D array, perform the rotation on this array, and then place the elements back into their original positions in the grid.

3. **Rotation Logic**: Given `k`, we only need to rotate the extracted array by `k % size_of_layer` to handle cases where `k` is larger than the number of elements in that layer.

### C++ Solution

Here’s how we can implement the solution using the points discussed:

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    void rotateGrid(vector<vector<int>>& grid, int k) {
        int rows = grid.size();
        int cols = grid[0].size();
        
        // Calculate number of layers
        int layers = min(rows, cols) / 2;

        for (int layer = 0; layer < layers; ++layer) {
            vector<int> elements;
            // Extract the elements of the current layer
            int top = layer, bottom = rows - 1 - layer;
            int left = layer, right = cols - 1 - layer;

            // Extract top row
            for (int i = left; i <= right; ++i)
                elements.push_back(grid[top][i]);

            // Extract right column
            for (int i = top + 1; i <= bottom; ++i)
                elements.push_back(grid[i][right]);

            // Extract bottom row
            if (bottom > top) {
                for (int i = right - 1; i >= left; --i)
                    elements.push_back(grid[bottom][i]);
            }

            // Extract left column
            if (right > left) {
                for (int i = bottom - 1; i > top; --i)
                    elements.push_back(grid[i][left]);
            }

            // Calculate the effective rotation
            int n = elements.size();
            k = k % n; // Only need to rotate by k % n
            vector<int> rotated(n);

            // Rotate the elements
            for (int i = 0; i < n; ++i) {
                rotated[(i + k) % n] = elements[i];
            }

            // Put the elements back into the grid
            int index = 0;

            // Fill top row
            for (int i = left; i <= right; ++i)
                grid[top][i] = rotated[index++];

            // Fill right column
            for (int i = top + 1; i <= bottom; ++i)
                grid[i][right] = rotated[index++];

            // Fill bottom row
            if (bottom > top) {
                for (int i = right - 1; i >= left; --i)
                    grid[bottom][i] = rotated[index++];
            }

            // Fill left column
            if (right > left) {
                for (int i = bottom - 1; i > top; --i)
                    grid[i][left] = rotated[index++];
            }
        }
    }
};

int main() {
    Solution sol;
    vector<vector<int>> grid = {
        { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 }
    };
    int k = 2;

    sol.rotateGrid(grid, k);

    for (const auto &row : grid) {
        for (int num : row) {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;
}
```

### Explanation of the Code

1. **Layer Extraction**: We traverse the grid and collect the elements of each layer (top row, right column, bottom row, left column) into a 1D array `elements`.

2. **Rotation**: We compute the effective rotation using `k % n`, where `n` is the number of elements in the layer. A new rotated array is constructed using this effective k.

3. **Reinsertion**: Finally, we put the elements back to the corresponding positions in the grid.

4. **Main Function**: The `main` function is an example usage of how to call the `rotateGrid` function and verify the output.

This code efficiently handles the rotation of each layer of the grid as required by the problem statement.