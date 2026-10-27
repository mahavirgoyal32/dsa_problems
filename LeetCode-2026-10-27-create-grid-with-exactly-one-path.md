# LeetCode Daily – 2026-10-27

## 🧠 Problem #3963 – **Create Grid With Exactly One Path**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/create-grid-with-exactly-one-path)

---

### 📝 Problem Description

You are given two integers m and n, representing the number of rows and columns of a grid.

Construct any m x n grid consisting only of the characters &#39;.&#39; and &#39;#&#39;, where:


	&#39;.&#39; represents a free cell.
	&#39;#&#39; represents an obstacle cell.


A valid path is a sequence of free cells that:


	Starts at the top-left cell (0, 0).
	Ends at the bottom-right cell (m - 1, n - 1).
	Moves only:
	
		Right, from (i, j) to (i, j + 1), or
		Down, from (i, j) to (i + 1, j).
	
	


Return any grid such that there is exactly one valid path from the top-left cell to the bottom-right cell.

 
Example 1:


Input: m = 2, n = 3

Output: [&quot;..#&quot;,&quot;#..&quot;]

Explanation:



The only valid path is: (0,0) &rarr; (0,1) &rarr; (1,1) &rarr; (1,2)


Example 2:


Input: m = 3, n = 3

Output: [&quot;..#&quot;,&quot;#..&quot;,&quot;##.&quot;]

Explanation:



The only valid path is: (0,0) &rarr; (0,1) &rarr; (1,1) &rarr; (1,2) &rarr; (2,2)


Example 3:


Input: m = 1, n = 4

Output: [&quot;....&quot;]

Explanation:

The only valid path is: (0,0) &rarr; (0,1) &rarr; (0,2) &rarr; (0,3)


 
Constraints:


	1 <= m, n <= 25

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's dive into the problem "Create Grid With Exactly One Path". Here's a complete explanation of the problem, followed by a solution in C++.

### Problem Explanation

The task is to construct a grid of size `m x n` that contains exactly one valid path from the top-left corner to the bottom-right corner. The only valid moves are to the right or downward. 

**Input:**
- Two integers, `m` and `n`, representing the number of rows and columns of the grid, respectively (where 1 ≤ m, n ≤ 100).

**Output:**
- A 2D grid represented as a vector of vectors, where:
    - `1` denotes a cell that is part of the path.
    - `0` denotes a cell that is not part of the path.
  
**Constraints:**
- The path must follow the rules of moving only right or down, and must have exactly one distinct path from the top-left to the bottom-right.

### Constructing the Solution

To create a grid with exactly one path:
1. Start at the top-left corner (0, 0).
2. Move right until you reach the last column of the first row.
3. From the last column, move down until you reach the last row.
4. Fill those cells with `1` to denote the path.
5. Fill the remaining cells with `0`.

### Implementation in C++

```cpp
#include <vector>
#include <iostream>

std::vector<std::vector<int>> createGrid(int m, int n) {
    // Initialize a grid of size m x n filled with 0
    std::vector<std::vector<int>> grid(m, std::vector<int>(n, 0));

    // Create the path in the grid
    // Move right along the first row
    for (int j = 0; j < n; ++j) {
        grid[0][j] = 1;  // Set the path cells
    }

    // Move down along the last column (from the second row)
    for (int i = 1; i < m; ++i) {
        grid[i][n - 1] = 1;  // Set the path cells
    }

    return grid;
}

// A helper function to print the grid
void printGrid(const std::vector<std::vector<int>>& grid) {
    for (const auto& row : grid) {
        for (int cell : row) {
            std::cout << cell << " ";
        }
        std::cout << std::endl;
    }
}

int main() {
    int m = 3, n = 4; // You can change the input values for testing
    std::vector<std::vector<int>> grid = createGrid(m, n);
    
    // Print the resulting grid
    printGrid(grid);
    
    return 0;
}
```

### Explanation of the Code:

1. **Grid Initialization:** 
   - We create a 2D vector called `grid` filled with `0`s, representing the entire grid with dimensions `m x n`.

2. **Creating the Path:**
   - We first fill the first row with `1`s (moving right).
   - Then, we fill the last column starting from the second row down to the last row with `1`s (moving down).

3. **Output:**
   - Finally, we have a grid with exactly one path from the top-left corner to the bottom-right corner. The `printGrid()` function helps visualize the resulting grid.

### Complexity:
- **Time Complexity:** O(m + n), as we are iterating through the first row and the last column.
- **Space Complexity:** O(m * n), for storing the `m x n` grid.

This solution effectively constructs a grid that meets the criteria of the problem and can be easily modified to handle different sizes.