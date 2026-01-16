# LeetCode Daily – 2026-01-16

## 🧠 Problem #2975 – **Maximum Square Area by Removing Fences From a Field**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field)

---

### 📝 Problem Description

There is a large (m - 1) x (n - 1) rectangular field with corners at (1, 1) and (m, n) containing some horizontal and vertical fences given in arrays hFences and vFences respectively.

Horizontal fences are from the coordinates (hFences[i], 1) to (hFences[i], n) and vertical fences are from the coordinates (1, vFences[i]) to (m, vFences[i]).

Return the maximum area of a square field that can be formed by removing some fences (possibly none) or -1 if it is impossible to make a square field.

Since the answer may be large, return it modulo 109 + 7.

Note: The field is surrounded by two horizontal fences from the coordinates (1, 1) to (1, n) and (m, 1) to (m, n) and two vertical fences from the coordinates (1, 1) to (m, 1) and (1, n) to (m, n). These fences cannot be removed.

 
Example 1:




Input: m = 4, n = 3, hFences = [2,3], vFences = [2]
Output: 4
Explanation: Removing the horizontal fence at 2 and the vertical fence at 2 will give a square field of area 4.


Example 2:




Input: m = 6, n = 7, hFences = [2], vFences = [4]
Output: -1
Explanation: It can be proved that there is no way to create a square field by removing fences.


 
Constraints:


	3 <= m, n <= 109
	1 <= hFences.length, vFences.length <= 600
	1 < hFences[i] < m
	1 < vFences[i] < n
	hFences and vFences are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Square Area by Removing Fences From a Field" requires us to determine the largest square area that can be formed by removing fences, given the number of fences that can be removed. Here, we present a C++ solution along with an explanation.

### Problem Breakdown

1. **Input Description**:
   - `n`: Total number of fences.
   - `k`: Number of fences that can be removed.
   - `squares`: An array representing the sizes of the squares formed by the fences.

2. **Output Description**:
   - Return the area of the maximum square (i.e. `side_length^2`), where `side_length = max_squares_size + k`.

3. **Approach**:
   - We can think of the square's maximum possible size which can be formed when we account for the fences we can remove (`k`).
   - We can iterate through possible square sizes and check if they can be formed with the available fences.

### C++ Solution

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

int maximumSquareArea(vector<int>& squares, int k) {
    int maxArea = 0;

    // Sort squares to efficiently consider possible square formations.
    sort(squares.begin(), squares.end());

    for (int squareSize : squares) {
        // Calculate the effective side length after removing k fences
        int effectiveSide = squareSize + k;
        // Calculate area
        int area = effectiveSide * effectiveSide;

        // Update max area if the new area is larger
        maxArea = max(maxArea, area);
    }

    return maxArea;
}

// Example usage:
int main() {
    vector<int> squares = {2, 3, 5};
    int k = 1;
    cout << "Maximum Area: " << maximumSquareArea(squares, k) << endl;
    return 0;
}
```

### Explanation of the Code

1. **Sorting**: 
   - We start by sorting the vector of square sizes. Sorting helps in ensuring that we check smaller squares first, which can help in systematically calculating areas.

2. **Iterating through Squares**:
   - We iterate through each size in the sorted list of squares.
   - For each square size, we calculate what the effective side would be if we were allowed to remove `k` fences. This is done with the formula:
     \[
     \text{effectiveSide} = \text{squareSize} + k
     \]
   - We then calculate the area using:
     \[
     \text{area} = \text{effectiveSide} \times \text{effectiveSide}
     \]

3. **Tracking Maximum Area**:
   - We maintain a `maxArea` variable that keeps track of the maximum area found so far through the iterations. We update it whenever we find a greater area.

4. **Return Value**:
   - Finally, return the value of `maxArea`.

### Complexity

- **Time Complexity**: The complexity of sorting the squares is \(O(n \log n)\), and iterating through them is \(O(n)\), making the overall time complexity \(O(n \log n)\).
- **Space Complexity**: \(O(1)\) additional space is used since we don't need any extra data structures (excluding the input).

This C++ solution efficiently determines the maximum square area given the constraints and can be easily modified to accommodate variations on the problem statement.