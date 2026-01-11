# LeetCode Daily – 2026-01-11

## 🧠 Problem #85 – **Maximal Rectangle**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximal-rectangle)

---

### 📝 Problem Description

Given a rows x cols binary matrix filled with 0&#39;s and 1&#39;s, find the largest rectangle containing only 1&#39;s and return its area.

 
Example 1:


Input: matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.


Example 2:


Input: matrix = [[&quot;0&quot;]]
Output: 0


Example 3:


Input: matrix = [[&quot;1&quot;]]
Output: 1


 
Constraints:


	rows == matrix.length
	cols == matrix[i].length
	1 <= rows, cols <= 200
	matrix[i][j] is &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The **Maximal Rectangle** problem from LeetCode asks us to find the area of the largest rectangle that can be formed in a binary matrix containing only `0`s and `1`s. Here's the approach to solve this problem using C++ along with an explanation.

### Problem Explanation
Given a binary matrix, we want to find the largest rectangle containing only `1`s and return its area.

### Approach
1. **Histogram Interpretation**: The key insight is to treat each row of the matrix as the base of a histogram. Each element in the row can be considered as the height of the histogram.
2. **Dynamic Height Calculation**: As we iterate through each row, we calculate the height of `1`s for each column. If a `1` is found, we increment the height; if a `0` is found, we reset the height to `0`.
3. **Largest Rectangle in Histogram**: For every updated height array (constructed for each row), we can use a stack-based approach to calculate the maximal rectangle area that can be formed in a histogram. This algorithm is efficient and computes the area in O(n) time.

### C++ Implementation
Here’s how you can implement the solution in C++:

```cpp
#include <vector>
#include <stack>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int maximalRectangle(std::vector<std::vector<char>>& matrix) {
        if (matrix.empty() || matrix[0].empty()) return 0;
        
        int maxArea = 0;
        int n = matrix.size();        // number of rows
        int m = matrix[0].size();     // number of columns
        std::vector<int> heights(m, 0); // height array for histogram
        
        for (int i = 0; i < n; ++i) {
            // Update the histogram heights for the current row
            for (int j = 0; j < m; ++j) {
                if (matrix[i][j] == '1') {
                    heights[j]++; // Increment height for 1
                } else {
                    heights[j] = 0; // Reset height for 0
                }
            }
            // Calculate area for rectangle in histogram
            maxArea = std::max(maxArea, largestRectangleArea(heights));
        }
        
        return maxArea;
    }
    
private:
    int largestRectangleArea(std::vector<int>& heights) {
        std::stack<int> s;
        int maxArea = 0;
        heights.push_back(0);  // Append a sentinel value for easier handling
        
        for (int i = 0; i < heights.size(); ++i) {
            while (!s.empty() && heights[s.top()] > heights[i]) {
                int height = heights[s.top()];
                s.pop();
                int width = s.empty() ? i : i - s.top() - 1;
                maxArea = std::max(maxArea, height * width);
            }
            s.push(i);
        }
        
        return maxArea;
    }
};

int main() {
    Solution sol;
    std::vector<std::vector<char>> matrix = {
        {'1', '0', '1', '0', '0'},
        {'1', '0', '1', '1', '1'},
        {'1', '1', '1', '1', '1'},
        {'1', '0', '0', '1', '0'}
    };
    int result = sol.maximalRectangle(matrix);
    std::cout << "Maximal Rectangle Area: " << result << std::endl; // Output: 6
    return 0;
}
```

### Explanation of the Code
1. We define a function `maximalRectangle` that initializes the histogram heights for each column in the matrix and updates it as we iterate through each row.
2. For every row processed, we call the `largestRectangleArea` function, which is responsible for calculating the maximum rectangle area in a histogram using a stack.
3. The approach efficiently computes the maximum area as follows:
   - Push indices of `heights` onto the stack.
   - If we encounter a height that is less than the height at the index stored on top of the stack, we pop from the stack and calculate the area using the popped height.
   - The width is determined by the current index and the new top of the stack after popping.

This approach is efficient with a time complexity of \(O(n \cdot m)\), where \(n\) is the number of rows and \(m\) is the number of columns in the matrix. The space complexity mainly stems from the stack used, which can go up to \(O(m)\).

Feel free to test the solution with different test cases!