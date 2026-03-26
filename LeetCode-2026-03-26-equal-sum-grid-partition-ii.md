# LeetCode Daily – 2026-03-26

## 🧠 Problem #3548 – **Equal Sum Grid Partition II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/equal-sum-grid-partition-ii)

---

### 📝 Problem Description

You are given an m x n matrix grid of positive integers. Your task is to determine if it is possible to make either one horizontal or one vertical cut on the grid such that:


	Each of the two resulting sections formed by the cut is non-empty.
	The sum of elements in both sections is equal, or can be made equal by discounting at most one single cell in total (from either section).
	If a cell is discounted, the rest of the section must remain connected.


Return true if such a partition exists; otherwise, return false.

Note: A section is connected if every cell in it can be reached from any other cell by moving up, down, left, or right through other cells in the section.

 
Example 1:


Input: grid = [[1,4],[2,3]]

Output: true

Explanation:




	A horizontal cut after the first row gives sums 1 + 4 = 5 and 2 + 3 = 5, which are equal. Thus, the answer is true.



Example 2:


Input: grid = [[1,2],[3,4]]

Output: true

Explanation:




	A vertical cut after the first column gives sums 1 + 3 = 4 and 2 + 4 = 6.
	By discounting 2 from the right section (6 - 2 = 4), both sections have equal sums and remain connected. Thus, the answer is true.



Example 3:


Input: grid = [[1,2,4],[2,3,5]]

Output: false

Explanation:




	A horizontal cut after the first row gives 1 + 2 + 4 = 7 and 2 + 3 + 5 = 10.
	By discounting 3 from the bottom section (10 - 3 = 7), both sections have equal sums, but they do not remain connected as it splits the bottom section into two parts ([2] and [5]). Thus, the answer is false.



Example 4:


Input: grid = [[4,1,8],[3,2,6]]

Output: false

Explanation:

No valid cut exists, so the answer is false.


 
Constraints:


	1 <= m == grid.length <= 105
	1 <= n == grid[i].length <= 105
	2 <= m * n <= 105
	1 <= grid[i][j] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Equal Sum Grid Partition II" requires us to determine whether we can partition a given 2D grid of integers into two equal-sum subsets. The challenge is to decide if it is possible to select non-overlapping subsets of rows and columns such that the sum of the chosen elements equals half of the total sum of all grid cells.

### Explanation

1. **Understanding the Problem**:
    - We are given a grid of integers, and we need to check if there are two non-overlapping subsets of rows and columns whose sums are equal.
    - The first step is to compute the total sum of all elements in the grid. If this sum is odd, it is immediately impossible to partition it into two equal parts.
  
2. **Subset Sum Problem**:
    - If the total sum is even, we then look for subsets of the 2D grid that sum up to `totalSum / 2`. This can be treated like a 2D subset sum problem.
  
3. **Dynamic Programming Approach**:
    - We can use a 2D dynamic programming approach to keep track of possible sums using bit masking for rows and columns.
    - The idea is to iterate through all possible subsets of rows and columns, compute the corresponding sums, and check if we can achieve the required sum.

### C++ Implementation

Here's how we can implement this approach in C++:

```cpp
#include <vector>
#include <unordered_set>
#include <numeric>
#include <iostream>

class Solution {
public:
    bool canPartition(std::vector<std::vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int totalSum = 0;

        // Calculate total sum of the grid
        for (const auto& row : grid) {
            totalSum += std::accumulate(row.begin(), row.end(), 0);
        }
        
        // If total sum is odd, cannot partition equally
        if (totalSum % 2 != 0) {
            return false;
        }
        
        int target = totalSum / 2;
        
        // This set will hold the possible sums we can achieve using subsets of rows
        std::unordered_set<int> possibleSums;
        possibleSums.insert(0);
        
        // Iterate through each row to update possible sums
        for (int i = 0; i < n; ++i) {
            int rowSum = std::accumulate(grid[i].begin(), grid[i].end(), 0);
            std::unordered_set<int> newSums;
            
            for (auto sum : possibleSums) {
                int newSum = sum + rowSum;
                if (newSum <= target) {
                    newSums.insert(newSum);
                }
            }
            
            // Add the current row's sum
            possibleSums.insert(newSums.begin(), newSums.end());
            possibleSums.insert(rowSum);
        }
        
        // The final answer is whether we can reach the target sum
        return possibleSums.count(target) > 0;
    }
};

int main() {
    Solution solution;
    std::vector<std::vector<int>> grid = {
        {1, 2, 3, 4},
        {5, 1, 2, 3},
        {4, 2, 1, 1}
    };
    
    if (solution.canPartition(grid)) {
        std::cout << "Can partition the grid" << std::endl;
    } else {
        std::cout << "Cannot partition the grid" << std::endl;
    }

    return 0;
}
```

### Explanation of the Code:

1. **Initialization**: We first calculate the total sum of the grid. If it's odd, we return false immediately.

2. **Possible Sums Tracking**: We maintain a set `possibleSums` to track achievable sums as we go through each row in the grid.

3. **Updating Sums**: For each row, we calculate its sum and update the `possibleSums` by including the sum of the current row along with previous sums already in the set.

4. **Final Check**: After processing all the rows, we check if our target sum is present in the `possibleSums`. If it is, we can partition the grid; otherwise, we cannot.

This code captures the essence of the problem effectively using a dynamic programming approach with a set for sum tracking, ensuring efficient checks and updates.