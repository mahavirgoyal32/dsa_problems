# LeetCode Daily – 2025-12-24

## 🧠 Problem #3074 – **Apple Redistribution into Boxes**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/apple-redistribution-into-boxes)

---

### 📝 Problem Description

You are given an array apple of size n and an array capacity of size m.

There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.

Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

Note that, apples from the same pack can be distributed into different boxes.

 
Example 1:


Input: apple = [1,3,2], capacity = [4,3,1,5,2]
Output: 2
Explanation: We will use boxes with capacities 4 and 5.
It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.


Example 2:


Input: apple = [5,5,5], capacity = [2,4,2,7]
Output: 4
Explanation: We will need to use all the boxes.


 
Constraints:


	1 <= n == apple.length <= 50
	1 <= m == capacity.length <= 50
	1 <= apple[i], capacity[i] <= 50
	The input is generated such that it&#39;s possible to redistribute packs of apples into boxes.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Apple Redistribution into Boxes" involves redistributing apples among boxes in a way that ensures no box contains more than a specified maximum of apples, and all apples are redistributed in accordance with the problem's constraints.

### Problem Statement

You have an integer array `boxes` where `boxes[i]` represents the number of apples in the `i-th` box, and a maximum integer `maxSize` that specifies the maximum number of apples that can be contained in a single box after redistribution. Your goal is to determine the minimum number of boxes needed to hold all the apples such that no box exceeds `maxSize`.

### Explanation

To solve this problem, the approach is straightforward:
1. Calculate the total number of apples by summing all elements in the `boxes` array.
2. Determine the minimum number of boxes required by dividing the total number of apples by `maxSize`. If there are remaining apples (i.e., the total isn't divisible evenly by `maxSize`), you'll need an additional box.

### Steps:
1. Initialize a variable to store the total number of apples from all boxes.
2. Iterate through the `boxes` array to sum up all the apples.
3. Calculate the necessary number of boxes:
   - Use integer division to find how many full boxes can fit in the total apples.
   - If there's a remainder when dividing total apples by `maxSize`, increase the box count by one to accommodate the leftover apples.

### C++ Implementation

Here’s the C++ code that implements the above logic:

```cpp
#include <vector>
#include <iostream>

class Solution {
public:
    int minBoxes(std::vector<int>& boxes, int maxSize) {
        // Step 1: Calculate the total number of apples
        int totalApples = 0;
        for (int apples : boxes) {
            totalApples += apples;
        }
        
        // Step 2: Calculate the minimum number of boxes needed
        int fullBoxes = totalApples / maxSize; // Full boxes that can be filled
        if (totalApples % maxSize != 0) { // If there's a remainder
            fullBoxes++; // We need one more box for the remaining apples
        }
        return fullBoxes; // Return the total number of boxes needed
    }
};
```

### Explanation of the Code

1. **Calculate `totalApples`:** We sum up all the values in the `boxes` vector using a simple for loop.
2. **Calculate `fullBoxes`:** This line computes how many full boxes of `maxSize` can fit into `totalApples`. 
3. **Check for Remainder:** If `totalApples % maxSize` is not zero, we know that there's a need for one extra box to accommodate the extra apples.
4. **Return Result:** Finally, we return the total number of boxes needed.

### Complexity Analysis
- **Time Complexity:** O(n), where n is the number of boxes. We need to iterate through the boxes to compute the total number of apples.
- **Space Complexity:** O(1), since we are only using a fixed amount of space for variables and do not use any additional data structures that grow with input size.

This solution is efficient and adheres to the constraints provided in the problem statement.