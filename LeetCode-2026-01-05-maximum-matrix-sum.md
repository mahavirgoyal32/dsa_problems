# LeetCode Daily – 2026-01-05

## 🧠 Problem #1975 – **Maximum Matrix Sum**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-matrix-sum)

---

### 📝 Problem Description

You are given an n x n integer matrix. You can do the following operation any number of times:


	Choose any two adjacent elements of matrix and multiply each of them by -1.


Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix&#39;s elements. Return the maximum sum of the matrix&#39;s elements using the operation mentioned above.

 
Example 1:


Input: matrix = [[1,-1],[-1,1]]
Output: 4
Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1.


Example 2:


Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
Output: 16
Explanation: We can follow the following step to reach sum equals 16:
- Multiply the 2 last elements in the second row by -1.


 
Constraints:


	n == matrix.length == matrix[i].length
	2 <= n <= 250
	-105 <= matrix[i][j] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the maximum matrix sum, we need to manipulate the values in the matrix based on certain rules involving their signs. The goal is to maximize the sum by deciding whether to keep the values as they are or negate them to maximize the total sum.

### Problem Breakdown

1. **Understanding the Problem**: 
   - We're given an `n x n` matrix with both positive and negative integers.
   - The objective is to maximize the sum of the elements in the matrix after potentially flipping the signs of some elements.

2. **Key Insights**:
   - If the count of negative numbers in the matrix is even, simply taking the absolute sum of all elements will yield the maximum sum.
   - If the count of negative numbers is odd, we need to flip one of the numbers to minimize the loss from the negative values.

3. **Strategy**:
   - Calculate the absolute sum of all the elements.
   - Count the number of negative elements.
   - If the count of negative elements is odd:
     - Find the smallest absolute value in the matrix. This will be the best candidate for flipping to minimize our loss.
   - Deduct double the smallest absolute value (flipping it from negative to positive) from the absolute sum.

### C++ Implementation

Below is the C++ implementation of the above strategy:

```cpp
#include <vector>
#include <cstdlib> // for abs
#include <algorithm> // for min_element

class Solution {
public:
    int maximizeMatrixSum(std::vector<std::vector<int>>& matrix) {
        int totalSum = 0;
        int negativeCount = 0;
        int smallestAbsValue = INT_MAX;

        for (const auto& row : matrix) {
            for (int value : row) {
                // Add the absolute value of the current element to total sum
                totalSum += std::abs(value);
                
                // Count negatives
                if (value < 0) {
                    negativeCount++;
                }
                
                // Track the smallest absolute value
                smallestAbsValue = std::min(smallestAbsValue, std::abs(value));
            }
        }

        // If there are an odd number of negative numbers
        if (negativeCount % 2 != 0) {
            // Subtract twice the smallest absolute value to flip it (which causes decrease)
            totalSum -= 2 * smallestAbsValue;
        }

        return totalSum;
    }
};
```

### Explanation of the Code:
- We initialize variables to keep track of the total sum, the count of negative elements, and the smallest absolute value found in the matrix.
- Next, we iterate through each element of the matrix:
   - We update `totalSum` with the absolute value of each element.
   - We check if the element is negative to count it and simultaneously track the smallest absolute value.
- After traversing the entire matrix, we check if the count of negative elements is odd.
   - If it is, we reduce the total sum by flipping the sign of the smallest element found (subtracting it twice) to account for maximizing our total.
- Finally, we return the calculated maximum sum.

### Complexity Analysis:
- **Time Complexity**: O(n^2), where n is the number of rows or columns in the matrix since we might have to traverse each element once.
- **Space Complexity**: O(1), as we are using a constant amount of additional space. The matrix itself is not counted as extra space.

You can run this function by creating an instance of the `Solution` class and calling the `maximizeMatrixSum` method with your matrix as input.