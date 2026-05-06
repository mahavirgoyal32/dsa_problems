# LeetCode Daily – 2026-05-06

## 🧠 Problem #1861 – **Rotating the Box**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rotating-the-box)

---

### 📝 Problem Description

You are given an m x n matrix of characters boxGrid representing a side-view of a box. Each cell of the box is one of the following:


	A stone &#39;#&#39;
	A stationary obstacle &#39;*&#39;
	Empty &#39;.&#39;


The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles&#39; positions, and the inertia from the box&#39;s rotation does not affect the stones&#39; horizontal positions.

It is guaranteed that each stone in boxGrid rests on an obstacle, another stone, or the bottom of the box.

Return an n x m matrix representing the box after the rotation described above.

 
Example 1:




Input: boxGrid = [[&quot;#&quot;,&quot;.&quot;,&quot;#&quot;]]
Output: [[&quot;.&quot;],
         [&quot;#&quot;],
         [&quot;#&quot;]]


Example 2:




Input: boxGrid = [[&quot;#&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;],
              [&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;]]
Output: [[&quot;#&quot;,&quot;.&quot;],
         [&quot;#&quot;,&quot;#&quot;],
         [&quot;*&quot;,&quot;*&quot;],
         [&quot;.&quot;,&quot;.&quot;]]


Example 3:




Input: boxGrid = [[&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;,&quot;*&quot;,&quot;.&quot;],
              [&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;*&quot;,&quot;.&quot;,&quot;.&quot;],
              [&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;]]
Output: [[&quot;.&quot;,&quot;#&quot;,&quot;#&quot;],
         [&quot;.&quot;,&quot;#&quot;,&quot;#&quot;],
         [&quot;#&quot;,&quot;#&quot;,&quot;*&quot;],
         [&quot;#&quot;,&quot;*&quot;,&quot;.&quot;],
         [&quot;#&quot;,&quot;.&quot;,&quot;*&quot;],
         [&quot;#&quot;,&quot;.&quot;,&quot;.&quot;]]


 
Constraints:


	m == boxGrid.length
	n == boxGrid[i].length
	1 <= m, n <= 500
	boxGrid[i][j] is either &#39;#&#39;, &#39;*&#39;, or &#39;.&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "Rotating the Box" and explain the solution step-by-step.

## Problem Statement
You are given a 2D grid representing a box, where:
- `'#'` represents a stone.
- `'.'` represents an empty space.

Your task is to rotate the box 90 degrees clockwise. When rotating, the stones should shift down to fill the empty spaces below them.

## Approach
1. **Understand the Rotation**: In a clockwise rotation, the first row of the original matrix will become the last column of the new matrix, the second row will become the second last column, and so on.
2. **Simulate Gravity**: Before performing the rotation, we need to simulate a gravity effect where stones fall down to the lowest available row in each column.
3. **Build the New Rotated Matrix**: After adjusting the stones, we construct the new matrix based on the updated positions of the stones.

## Steps
1. Traverse each column of the box to simulate gravity and reposition the stones.
2. Create a new grid for the rotated box of size `m * n` (where `m` is the number of rows in the original box and `n` is the number of columns).
3. Fill the new grid based on the adjusted positions of the stones.

### Implementation in C++
Here's how you'd implement the above logic in C++:

```cpp
#include <vector>
#include <string>

using namespace std;

vector<vector<char>> rotateTheBox(vector<vector<char>>& box) {
    // Determine the dimensions of the box
    int m = box.size();
    int n = box[0].size();
    
    // Step 1: Simulate gravity in the original box
    for (int j = 0; j < n; j++) {
        int emptySpace = m - 1; // Start filling from the bottom
        for (int i = m - 1; i >= 0; i--) {
            if (box[i][j] == '#') {
                // Place stone in the empty space
                box[emptySpace][j] = '#';
                // Only move the empty space pointer when placing a stone
                if (emptySpace != i) {
                    box[i][j] = '.'; // Leave the original spot empty
                }
                // Move the empty space pointer up
                emptySpace--;
            } else if (box[i][j] == '.') {
                // Move empty space up
                // This doesn't require an action, as we keep track of emptySpace
            }
        }
    }

    // Step 2: Build the rotated box
    vector<vector<char>> rotated(n, vector<char>(m));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            rotated[j][m - 1 - i] = box[i][j]; // Fill the rotated box
        }
    }

    return rotated;
}
```

### Explanation of Code
1. **Gravity Simulation**:
    - We loop through each column (j) and start from the bottom row (i) moving upwards.
    - We keep an `emptySpace` index to place stones wherever the stones are found. If we encounter a stone (`'#'`), we place it in the `emptySpace` position and move the `emptySpace` up (decrement it). If we encounter an empty space (`'.'`), we simply continue our search upwards.

2. **Constructing the Rotated Box**:
    - A new vector `rotated` is created where the new columns will correspond to the original rows. The mapping is done by setting `rotated[j][m - 1 - i] = box[i][j]` which effectively rotates the box.

3. **Return Statement**: Finally, we return the `rotated` vector containing the new configuration of the box rotated 90 degrees clockwise.

This solution has a time complexity of O(m * n), as we process each cell a constant number of times. The space complexity is also O(m * n) for the new rotated matrix.