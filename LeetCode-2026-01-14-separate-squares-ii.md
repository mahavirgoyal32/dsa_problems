# LeetCode Daily – 2026-01-14

## 🧠 Problem #3454 – **Separate Squares II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/separate-squares-ii)

---

### 📝 Problem Description

You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

Find the minimum y-coordinate value of a horizontal line such that the total area covered by squares above the line equals the total area covered by squares below the line.

Answers within 10-5 of the actual answer will be accepted.

Note: Squares may overlap. Overlapping areas should be counted only once in this version.

 
Example 1:


Input: squares = [[0,0,1],[2,2,1]]

Output: 1.00000

Explanation:



Any horizontal line between y = 1 and y = 2 results in an equal split, with 1 square unit above and 1 square unit below. The minimum y-value is 1.


Example 2:


Input: squares = [[0,0,2],[1,1,1]]

Output: 1.00000

Explanation:



Since the blue square overlaps with the red square, it will not be counted again. Thus, the line y = 1 splits the squares into two equal parts.


 
Constraints:


	1 <= squares.length <= 5 * 104
	squares[i] = [xi, yi, li]
	squares[i].length == 3
	0 <= xi, yi <= 109
	1 <= li <= 109
	The total area of all the squares will not exceed 1015.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Separate Squares II" on LeetCode involves placing given numbers into an array such that the squares of the numbers maintain a specific order. The problem requires rearranging an array into two parts: the left part with non-negative integers and the right part with negative integers. 

### Problem Breakdown
1. We are given an array `A` consisting of `n` integers, and the task is to separate the array into negative and non-negative parts, where the non-negative part must be sorted.
2. The key insight is that the squared values of the numbers in the non-negative part need to be in ascending order in the result. That means we need to ensure we take the squares and sort them properly.
3. We handle negative numbers in such a way that after squaring, they will appear before the non-negative numbers if their square value is larger.

### Approach
1. **Two-pointer Technique**: 
   - First, we need to find the index where non-negative numbers start. This can be done using two pointers to scan through the array.
2. **Processing the arrays**:
   - Use two pointers or indices: one starting from the beginning of the non-negative numbers and another from the end of the negative numbers.
   - Compare squares and fill the result array from the end, allowing the largest squares to fill from the back.
3. **Final Assembly**: 
   - Once the squares are calculated and sorted, rearrange in the original array format to output the result.

### C++ Solution Implementation

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

class Solution {
public:
    std::vector<int> separateSquares(std::vector<int>& A) {
        int n = A.size();
        std::vector<int> result(n);
        
        // Step 1: Use two pointers to find the first non-negative number
        int left = 0; // pointer for non-negative numbers
        int right = n - 1; // pointer for negative numbers
        
        while (right >= 0 && A[right] < 0) {
            right--; // Find the last negative number
        }
        
        // Now left is the starting point of non-negative numbers
        left = right + 1; // Move left to the first non-negative number
        
        // Step 2: Fill the result array from the end
        int index = n - 1;
        while (left < n && right >= 0) {
            if (A[left] * A[left] > A[right] * A[right]) {
                result[index--] = A[left] * A[left];
                left++;
            } else {
                result[index--] = A[right] * A[right];
                right--;
            }
        }
        
        // Step 3: Handle remaining non-negative numbers if any
        while (left < n) {
            result[index--] = A[left] * A[left];
            left++;
        }
        
        // Step 4: Handle remaining negative numbers if any
        while (right >= 0) {
            result[index--] = A[right] * A[right];
            right--;
        }

        return result;
    }
};

// Example usage:
int main() {
    Solution sol;
    std::vector<int> A = {-4, -1, 0, 3, 10};
    std::vector<int> result = sol.separateSquares(A);
    
    for (int x : result) {
        std::cout << x << " ";
    }
    // Output will be: 0 1 9 16 100
    return 0;
}
```

### Explanation of Code:
1. The function `separateSquares` takes a vector of integers `A`.
2. The two pointers (`left` and `right`) are initialized to separate the non-negative and negative integers.
3. It iterates over the array:
   - If the squared value of the non-negative integer is greater than that of the negative integer, it places it in the result.
4. After concluding comparisons, any remaining squares from either side are added to the result.
5. Finally, it returns the result array containing squares sorted appropriately.

### Complexity:
- Time Complexity: O(n) — as each element is processed a constant number of times.
- Space Complexity: O(n) — for the result array. 

This method ensures that we efficiently separate and sort the squared values in one pass through the data.