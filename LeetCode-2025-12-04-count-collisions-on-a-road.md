# LeetCode Daily – 2025-12-04

## 🧠 Problem #2211 – **Count Collisions on a Road**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-collisions-on-a-road)

---

### 📝 Problem Description

There are n cars on an infinitely long road. The cars are numbered from 0 to n - 1 from left to right and each car is present at a unique point.

You are given a 0-indexed string directions of length n. directions[i] can be either &#39;L&#39;, &#39;R&#39;, or &#39;S&#39; denoting whether the ith car is moving towards the left, towards the right, or staying at its current point respectively. Each moving car has the same speed.

The number of collisions can be calculated as follows:


	When two cars moving in opposite directions collide with each other, the number of collisions increases by 2.
	When a moving car collides with a stationary car, the number of collisions increases by 1.


After a collision, the cars involved can no longer move and will stay at the point where they collided. Other than that, cars cannot change their state or direction of motion.

Return the total number of collisions that will happen on the road.

 
Example 1:


Input: directions = &quot;RLRSLL&quot;
Output: 5
Explanation:
The collisions that will happen on the road are:
- Cars 0 and 1 will collide with each other. Since they are moving in opposite directions, the number of collisions becomes 0 + 2 = 2.
- Cars 2 and 3 will collide with each other. Since car 3 is stationary, the number of collisions becomes 2 + 1 = 3.
- Cars 3 and 4 will collide with each other. Since car 3 is stationary, the number of collisions becomes 3 + 1 = 4.
- Cars 4 and 5 will collide with each other. After car 4 collides with car 3, it will stay at the point of collision and get hit by car 5. The number of collisions becomes 4 + 1 = 5.
Thus, the total number of collisions that will happen on the road is 5. 


Example 2:


Input: directions = &quot;LLRR&quot;
Output: 0
Explanation:
No cars will collide with each other. Thus, the total number of collisions that will happen on the road is 0.

 
Constraints:


	1 <= directions.length <= 105
	directions[i] is either &#39;L&#39;, &#39;R&#39;, or &#39;S&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Count Collisions on a Road", we will implement a C++ function that counts the number of collisions occurring when cars move on a road represented as a string. Let's first break down the problem requirements then dive into the code:

### Problem Breakdown

1. **Input Structure**: You are given a string `directions` where each character represents a car:
   - 'L' - a car moving left
   - 'R' - a car moving right
   - 'S' - a car stopping

2. **Collision Definition**: A collision occurs when:
   - A car moving right ('R') collides with a car moving left ('L').
   - A car moving right ('R') or left ('L') collides with a car that has stopped ('S').

3. **Goal**: To count the total number of collision events that occur based on the arrangement of cars in the string.

### Approach

- We can traverse the string and keep a count of collisions.
- According to the rules of movement:
  - When a car moving left ('L') is encountered, it can only collide with cars moving right ('R') that are already in front of it or stop cars ('S').
  - When we find 'S', we add to our collision count based on nearby moving cars ('R' and 'L').
  
### C++ Implementation

```cpp
#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int countCollisions(string directions) {
        int collisionCount = 0;
        int n = directions.size();
        
        // Scan from left to right
        for (int i = 0; i < n; ++i) {
            if (directions[i] == 'R') {
                // Find the next car that is not 'R'
                while (i < n && directions[i] == 'R') {
                    i++;
                }
                // If encountered 'L', that means there's a collision
                if (i < n && directions[i] == 'L') {
                    collisionCount += 1;  // Collision at this point
                    // Count the 'L's after 'R'
                    while (i < n && directions[i] == 'L') {
                        collisionCount++; // each 'L' colliding with the 'R'
                        i++;
                    }
                }
                // If we encounter 'S', count them as collision
                if (i < n && directions[i] == 'S') {
                    collisionCount++; // The 'S' is colliding with 'R'
                    while (i < n && directions[i] == 'S') {
                        collisionCount++;
                        i++;
                    }
                }
            } else if (directions[i] == 'L') {
                // All 'L's from here will collide with any subsequent 'R's or 'S's
                collisionCount++; // The car 'L' is a collision
                while (i < n && directions[i] == 'L') {
                    collisionCount++; // Each 'L' colliding with 'R'
                    i++;
                }
            } else if (directions[i] == 'S') {
                collisionCount++; // The 'S' is a collision point for any previous 'R's
                while (i < n && directions[i] == 'S') {
                    collisionCount++;
                    i++;
                }
            }
        }

        return collisionCount;
    }
};
```

### Explanation of the Code
1. We define a `countCollisions` function that takes a string `directions` as input.
2. We initialize a counter `collisionCount` to keep track of the collisions.
3. We loop through the string directionally:
   - If we encounter 'R', we look ahead for 'L' and 'S', counting collisions accordingly.
   - If we encounter 'L', we count its collisions with 'R' cars or consider itself as a collision.
   - If we encounter 'S', it counts as collisions with previous 'R' and 'L' cars.
4. Finally, we return the total `collisionCount`.

### Edge Cases
- Empty strings or strings with no cars will yield a collision count of zero.
- The function efficiently counts potential collisions in a linear pass through the string.

This simple linear scan provides an efficient solution to the problem within O(n) time complexity.