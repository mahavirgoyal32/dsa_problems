# LeetCode Daily – 2026-07-05

## 🧠 Problem #1301 – **Number of Paths with Max Score**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-paths-with-max-score)

---

### 📝 Problem Description

You are given a square board of characters. You can move on the board starting at the bottom right square marked with the character &#39;S&#39;.

You need to reach the top left square marked with the character &#39;E&#39;. The rest of the squares are labeled either with a numeric character 1, 2, ..., 9 or with an obstacle &#39;X&#39;. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.

Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo 10^9 + 7.

In case there is no path, return [0, 0].

 
Example 1:
Input: board = ["E23","2X2","12S"]
Output: [7,1]
Example 2:
Input: board = ["E12","1X1","21S"]
Output: [4,2]
Example 3:
Input: board = ["E11","XXX","11S"]
Output: [0,0]

 
Constraints:


	2 <= board.length == board[i].length <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Number of Paths with Max Score" on LeetCode (Problem ID 1300) requires you to find the maximum score you can achieve while moving through a matrix from the top-left corner to the bottom-right corner, and also how many different paths yield that maximum score.

### Problem Explanation
You have a 2D grid filled with integers where the first row and the last column represent potential scores you can accumulate. You can only move right or down in the grid, and you need to determine:
1. The maximum score obtainable.
2. The number of distinct paths that lead to this maximum score.

### Example
For instance, consider the grid:
```
[
  [1, 3, 1],
  [2, 2, 1],
  [3, 2, 1]
]
```
You can move from `(0, 0)` to `(2, 2)` by summing scores. If the maximum score is 6, you should also return the number of unique ways to achieve this score.

### Approach
To solve this problem efficiently, we can utilize dynamic programming:
1. Create a `score` matrix to store the maximum scores to reach each cell.
2. Create a `path_count` matrix to store the number of ways to reach each cell with the maximum score.

The steps are as follows:
1. Initialize the score at the top-left corner. 
2. Traverse each cell while updating the paths' scores and counts:
   - You can come from the left (if you are not in the first column) or from above (if you are not in the first row).
   - Calculate the maximum score obtainable at that cell and the corresponding count of paths leading to that score.
3. The result will be the values at the bottom-right corner of the `score` and `path_count` matrices.

### Implementation in C++
Here's the C++ implementation of the outlined approach:

```cpp
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> pathsWithMaxScore(vector<vector<int>>& board) {
        int n = board.size();
        int m = board[0].size();
        
        // Create DP arrays
        vector<vector<int>> score(n, vector<int>(m, 0));
        vector<vector<int>> path_count(n, vector<int>(m, 0));

        // Initialize the results for the bottom-right corner (n-1, m-1)
        score[n-1][m-1] = board[n-1][m-1];
        path_count[n-1][m-1] = 1;

        // Fill in the DP arrays from bottom to top and right to left
        for (int i = n - 1; i >= 0; --i) {
            for (int j = m - 1; j >= 0; --j) {
                // Skip the bottom-right corner as it's initialized
                if (i == n-1 && j == m-1) continue;

                // Determine maximum score from possible moves
                int down_score = (i + 1 < n) ? score[i + 1][j] : 0;
                int right_score = (j + 1 < m) ? score[i][j + 1] : 0;
                
                int max_score = max(down_score, right_score);
                score[i][j] = (board[i][j] == -1) ? 0 : board[i][j] + max_score;
                
                // Count paths
                if (board[i][j] != -1) {
                    if (down_score == max_score) {
                        path_count[i][j] += path_count[i + 1][j];
                    }
                    if (right_score == max_score) {
                        path_count[i][j] += path_count[i][j + 1];
                    }
                }
            }
        }
        
        // Result in the top-left corner
        int max_value = score[0][0];
        int number_of_paths = path_count[0][0];
        
        return max_value == 0 ? vector<int>{0, 0} : vector<int>{max_value, number_of_paths};
    }
};
```

### Explanation of the Code
1. **Initialization**: We create two matrices, `score` and `path_count`, to store the results of our dynamic programming approach.
2. **Bottom-Up Approach**: We iterate over the matrix from the bottom right to the top left, updating the score and path counts based on possible directions (down and right).
3. **Boundary Conditions**: When checking scores, we ensure to consider boundary conditions (i.e., avoid going out of bounds).
4. **Handling Obstacles**: Cells with a value of `-1` (if given in the problem description) are treated as impassable, adjusting our scores accordingly.
5. **Final Output**: We return the maximum score and the number of paths if the score is valid (non-zero). If there are no valid paths, we return {0, 0}.

This approach has a time complexity of O(n * m), which is efficient for this problem size.