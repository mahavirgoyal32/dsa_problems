# LeetCode Daily – 2026-09-13

## 🧠 Problem #835 – **Image Overlap**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/image-overlap)

---

### 📝 Problem Description

You are given two images, img1 and img2, represented as binary, square matrices of size n x n. A binary matrix has only 0s and 1s as values.

We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a 1 in both images.

Note also that a translation does not include any kind of rotation. Any 1 bits that are translated outside of the matrix borders are erased.

Return the largest possible overlap.

 
Example 1:


Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3
Explanation: We translate img1 to right by 1 unit and down by 1 unit.

The number of positions that have a 1 in both images is 3 (shown in red).



Example 2:


Input: img1 = [[1]], img2 = [[1]]
Output: 1


Example 3:


Input: img1 = [[0]], img2 = [[0]]
Output: 0


 
Constraints:


	n == img1.length == img1[i].length
	n == img2.length == img2[i].length
	1 <= n <= 30
	img1[i][j] is either 0 or 1.
	img2[i][j] is either 0 or 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's discuss the "Image Overlap" problem from LeetCode, including how to solve it with a clear explanation and a C++ implementation.

## Problem Understanding

The task is to find the maximum overlap between two 2D binary matrices, `A` and `B`, where the overlapping can be achieved by shifting matrix `A` over matrix `B` in various directions.

### Definition:

- We denote `A` and `B` as two `N x N` binary matrices, each cell in the matrices can be either `0` (background) or `1` (foreground).
- The overlap would involve counting how many `1`s overlap when we shift `A` over `B`.

### Objective:

We need to determine how many `1s` overlap for the optimal shift of `A` over `B`.

### Approach:

1. **Brute Force and Sliding**: We can slide matrix `A` over matrix `B` in all possible ways. For a matrix of size `N x N`, this would involve shifting `A` from `(-N + 1, -N + 1)` to `(N - 1, N - 1)` in both x and y directions, where:
   - A positive shift means `A` moves down/right,
   - A negative shift means `A` moves up/left.
   
2. For each shift, check how many positions overlap and count those `1`s.

3. Keep track of the maximum overlap observed during these shifts.

### C++ Implementation

Here's the C++ code implementing the above logic:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int largestOverlap(vector<vector<int>>& A, vector<vector<int>>& B) {
        int n = A.size();
        int maxOverlap = 0;

        // Helper function to calculate overlap given a shift
        auto calculateOverlap = [&](int xOffset, int yOffset) {
            int overlapCount = 0;
            for (int i = 0; i < n; ++i) {
                for (int j = 0; j < n; ++j) {
                    // Calculate the new positions in B that A is affecting with the given offset
                    int newI = i + xOffset;
                    int newJ = j + yOffset;

                    // Check if new positions are in bounds and overlap
                    if (newI >= 0 && newI < n && newJ >= 0 && newJ < n) {
                        overlapCount += (A[i][j] && B[newI][newJ]);
                    }
                }
            }
            return overlapCount;
        };

        // Try all shifts
        for (int xOffset = -n + 1; xOffset < n; ++xOffset) {
            for (int yOffset = -n + 1; yOffset < n; ++yOffset) {
                maxOverlap = max(maxOverlap, calculateOverlap(xOffset, yOffset));
            }
        }

        return maxOverlap;
    }
};
```

### Explanation of the Code:

1. **Initialization**: The size of the matrix `n` is calculated. A variable `maxOverlap` is initialized to keep track of the maximum overlap.

2. **Calculate Overlap Function**: This lambda function takes two parameters — offsets for x and y. It computes how many `1`s are overlapping after shifting.

3. **Shifting Logic**: We iterate through possible shifts from `-(n-1)` to `+(n-1)` for both x and y dimensions. For each shift, we call `calculateOverlap` and check if the count is the maximum seen so far.

4. **Return Result**: Finally, after all shifts are checked, the maximum overlap value is returned.

### Time Complexity:
The time complexity is **O(N^4)**:
- There are N^2 positions in each matrix, and for each possible shift (O(N^2)), we check all N^2 positions for overlap.

### Space Complexity:
The space complexity is **O(1)** as we are not using any additional significant space relative to the input size.

This explanation should give a thorough understanding of both the problem and its solution!