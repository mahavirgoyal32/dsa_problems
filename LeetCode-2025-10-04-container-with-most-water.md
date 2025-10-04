# LeetCode Daily – 2025-10-04

## 🧠 Problem #11 – **Container With Most Water**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/container-with-most-water)

---

### 📝 Problem Description

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 
Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


Example 2:


Input: height = [1,1]
Output: 1


 
Constraints:


	n == height.length
	2 <= n <= 105
	0 <= height[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Container With Most Water" problem is a classic algorithm challenge. Let's break it down step-by-step and provide both an explanation and a C++ solution.

### Problem Explanation:

You are given an array of integers where each integer represents the height of a vertical line drawn on a 2D plane at specific indices. The goal is to find two lines that together with the x-axis form a container that holds the most water. The water that can be held is determined by the height of the shorter of the two lines multiplied by the distance between them.

### Key Observations:

1. The water "held" by two lines at indices `i` and `j` is given by the formula:
   \[
   \text{water} = \text{min}(height[i], height[j]) \times (j - i)
   \]
2. To maximize the area, we should consider lines that are far apart as well as tall, but we are constrained because moving the pointer towards the shorter line will not improve the area (since it will either remain the same or become smaller).
3. We can use a two-pointer approach, starting with one pointer at the beginning and one at the end of the array.

### Steps for the Two-Pointer Approach:

1. Initialize two pointers, one at the start (`left`) and one at the end (`right`) of the height array.
2. Calculate the current area using the heights at `left` and `right`.
3. Update the maximum area found so far.
4. Move the pointer that points to the shorter line inward.
5. Repeat until the two pointers meet.

### C++ Solution:

Here is a sample code in C++ to solve the problem:

```cpp
#include <vector>
#include <algorithm> // For std::max

class Solution {
public:
    int maxArea(std::vector<int>& height) {
        int left = 0;                    // Start pointer
        int right = height.size() - 1;  // End pointer
        int maxArea = 0;                 // Variable to store the maximum area

        while (left < right) {
            // Calculate area with current left and right
            int currentHeight = std::min(height[left], height[right]);
            int width = right - left;
            int currentArea = currentHeight * width;

            // Update maxArea if currentArea is larger
            maxArea = std::max(maxArea, currentArea);

            // Move the pointer pointing to the shorter line inward
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea; // Return the maximum area found
    }
};
```

### Explanation of the Code:

- We define a class `Solution` with a member function `maxArea`.
- We initialize two pointers (`left` and `right`) and a variable `maxArea` to keep track of the maximum area found.
- We enter a `while` loop that runs until the two pointers meet.
- Inside the loop, we calculate the height of the container formed by the lines at the `left` and `right` pointers and the width between them.
- We then calculate the area formed and update `maxArea` if the current area is larger.
- Depending on the heights, we move the pointer pointing to the shorter line inward to potentially find a taller line that might produce a larger area.
- Finally, we return the `maxArea` which represents the maximum container capacity.

### Time Complexity:
- `O(n)`, where `n` is the number of heights, because we pass through the list at most once with the two-pointer approach.

### Space Complexity:
- `O(1)`, since we are using a constant amount of space for the pointers and area calculations.

This solution is efficient and works well for the problem constraints.