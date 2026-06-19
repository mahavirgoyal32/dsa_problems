# LeetCode Daily – 2026-06-19

## 🧠 Problem #1732 – **Find the Highest Altitude**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-highest-altitude)

---

### 📝 Problem Description

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 
Example 1:


Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.


Example 2:


Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.


 
Constraints:


	n == gain.length
	1 <= n <= 100
	-100 <= gain[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's tackle the problem titled "Find the Highest Altitude".

### Problem Statement
You are given an array `gain` where `gain[i]` is the net change in altitude between points `i` and `i + 1`. Starting at an altitude of `0`, you need to determine the highest altitude that can be reached.

### Example
```
Input: gain = [-5, 1, 5, 0, -7]
Output: 1
Explanation: The changes in altitude are as follows:
- Start at 0
- After change -5, altitude = 0 - 5 = -5
- After change +1, altitude = -5 + 1 = -4
- After change +5, altitude = -4 + 5 = 1
- After change +0, altitude = 1 + 0 = 1
- After change -7, altitude = 1 - 7 = -6
The highest altitude reached is 1.
```

### Approach
1. Initialize a variable to keep track of the current altitude, starting at `0`.
2. Initialize a variable to keep track of the highest altitude encountered, also starting at `0`.
3. Iterate through the `gain` array, updating the current altitude and checking if it exceeds the highest altitude recorded.
4. Return the highest altitude after iterating through the list.

### C++ Implementation
Here's how you can implement this in C++:

```cpp
#include <vector>
#include <algorithm> // for std::max

class Solution {
public:
    int largestAltitude(std::vector<int>& gain) {
        int currentAltitude = 0; // Starting altitude
        int highestAltitude = 0;  // Initialize highest altitude to 0
        
        for (int g : gain) {
            currentAltitude += g; // Update the current altitude
            highestAltitude = std::max(highestAltitude, currentAltitude); // Update highest altitude if current is greater
        }
        
        return highestAltitude; // Return the highest altitude reached
    }
};
```

### Explanation of the Code:
- We include the necessary header files.
- We define a class `Solution` that contains the method `largestAltitude`, which takes a vector of integers `gain`.
- We initialize `currentAltitude` and `highestAltitude` to `0`.
- We use a range-based for loop to iterate through each element in the `gain` array.
- For each change in altitude (`g`), we update `currentAltitude`.
- We then use `std::max` to update `highestAltitude` if the new `currentAltitude` exceeds the previous `highestAltitude`.
- Finally, we return `highestAltitude`, which contains the maximum altitude reached during the iteration.

### Complexity Analysis
- **Time Complexity:** O(n) where n is the number of elements in the `gain` array, as we traverse the array once.
- **Space Complexity:** O(1), since we are using a fixed amount of space (only a couple of integer variables). 

This solution efficiently computes the highest altitude using a single pass through the data, maintaining simplicity and clarity.