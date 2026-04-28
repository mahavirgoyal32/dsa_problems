# LeetCode Daily – 2026-04-28

## 🧠 Problem #2033 – **Minimum Operations to Make a Uni-Value Grid**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid)

---

### 📝 Problem Description

You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

A uni-value grid is a grid where all the elements of it are equal.

Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

 
Example 1:


Input: grid = [[2,4],[6,8]], x = 2
Output: 4
Explanation: We can make every element equal to 4 by doing the following: 
- Add x to 2 once.
- Subtract x from 6 once.
- Subtract x from 8 twice.
A total of 4 operations were used.


Example 2:


Input: grid = [[1,5],[2,3]], x = 1
Output: 5
Explanation: We can make every element equal to 3.


Example 3:


Input: grid = [[1,2],[3,4]], x = 2
Output: -1
Explanation: It is impossible to make every element equal.


 
Constraints:


	m == grid.length
	n == grid[i].length
	1 <= m, n <= 105
	1 <= m * n <= 105
	1 <= x, grid[i][j] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Minimum Operations to Make a Uni-Value Grid" problem on LeetCode, we need to analyze how to convert a given grid into a uni-value grid (all elements in the grid having the same value) with the least number of operations. An operation is defined as incrementing or decrementing the value of any cell in the grid by 1.

Here's a structured approach to solving the problem, followed by a C++ implementation.

### Problem Breakdown

1. **Understanding Uni-Value Grid**: A uni-value grid means that all values in the grid are the same. The optimal value (let's call it `target`) to which we adjust all cells minimizes the total number of operations.

2. **Choosing the Target Value**: The best target value to minimize the number of operations will be the median of all values in the grid. This is because the median minimizes the sum of absolute deviations.

3. **Calculating the Operations**:
   - Once we've identified the target value (which is the median), we can calculate the total number of operations required by summing the absolute differences between each cell value and the target.

### Implementation Steps

1. Flatten the 2D grid into a 1D vector.
2. Sort the vector to easily find the median.
3. Compute the number of operations needed to convert all elements to the median value.

### C++ Code Implementation

Here's how the complete implementation looks in C++:

```cpp
#include <vector>
#include <algorithm>
#include <numeric>
#include <iostream>

class Solution {
public:
    int minOperations(std::vector<std::vector<int>>& grid) {
        std::vector<int> numbers;
        
        // Flatten the grid into a single vector
        for (const auto& row : grid) {
            numbers.insert(numbers.end(), row.begin(), row.end());
        }
        
        // Sort the numbers to find the median
        std::sort(numbers.begin(), numbers.end());
        int n = numbers.size();
        int median = numbers[n / 2];  // Median for the sorted array
        
        // Calculate the total operations needed to convert all to median
        int operations = 0;
        for (int num : numbers) {
            operations += abs(num - median);
        }
        
        return operations;
    }
};

// Example usage:
int main() {
    Solution solution;
    std::vector<std::vector<int>> grid = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    std::cout << "Minimum Operations: " << solution.minOperations(grid) << std::endl;  // Output: Minimum operations
    return 0;
}
```

### Explanation of Code

1. **Flattening the Grid**: We loop through each row of the grid and add its elements to a 1D vector named `numbers`.

2. **Finding the Median**:
   - We sort the `numbers` vector, which allows us to easily find the median. If the number of elements is odd, the median is the middle element. If it's even, we can choose either of the two central elements (the lower or upper would yield the same operations count due to symmetry).

3. **Calculating Operations**: We compute the total number of operations by iterating over the `numbers` vector and summing the absolute difference between each number and the median.

### Complexity Analysis

- **Time Complexity**: O(M * N * log(M * N)), where M is the number of rows and N is the number of columns in the grid due to the sorting step.
- **Space Complexity**: O(M * N) for storing the flattened numbers.

This solution effectively finds the minimum operations required to make the grid uni-value by leveraging sorting and properties of the median.