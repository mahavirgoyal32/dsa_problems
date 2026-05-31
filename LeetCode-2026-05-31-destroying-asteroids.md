# LeetCode Daily – 2026-05-31

## 🧠 Problem #2126 – **Destroying Asteroids**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/destroying-asteroids)

---

### 📝 Problem Description

You are given an integer mass, which represents the original mass of a planet. You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.

You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.

Return true if all asteroids can be destroyed. Otherwise, return false.

 
Example 1:


Input: mass = 10, asteroids = [3,9,19,5,21]
Output: true
Explanation: One way to order the asteroids is [9,19,5,3,21]:
- The planet collides with the asteroid with a mass of 9. New planet mass: 10 + 9 = 19
- The planet collides with the asteroid with a mass of 19. New planet mass: 19 + 19 = 38
- The planet collides with the asteroid with a mass of 5. New planet mass: 38 + 5 = 43
- The planet collides with the asteroid with a mass of 3. New planet mass: 43 + 3 = 46
- The planet collides with the asteroid with a mass of 21. New planet mass: 46 + 21 = 67
All asteroids are destroyed.


Example 2:


Input: mass = 5, asteroids = [4,9,23,4]
Output: false
Explanation: 
The planet cannot ever gain enough mass to destroy the asteroid with a mass of 23.
After the planet destroys the other asteroids, it will have a mass of 5 + 4 + 9 + 4 = 22.
This is less than 23, so a collision would not destroy the last asteroid.

 
Constraints:


	1 <= mass <= 105
	1 <= asteroids.length <= 105
	1 <= asteroids[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Destroying Asteroids" involves determining whether you can destroy all asteroids using a spaceship. You have the following parameters:
- `mass`: the initial mass of the spaceship.
- `asteroids`: an array representing the asteroids. The spaceship can destroy an asteroid if its mass is greater than or equal to the absolute value of the asteroid's mass (where asteroids can be positive for rightward direction and negative for leftward direction).

### Problem Explanation:
The key steps to solve this problem are:
1. Traverse the list of asteroids.
2. Manage the spaceship's mass and the asteroids. When the spaceship encounters an asteroid:
   - If the asteroid is headed towards the spaceship (i.e., is negative), it will immediately destroy any positive asteroids it encounters (in which case we'll add their masses to the spaceship).
   - If the spaceship's mass is greater than or equal to the asteroid's mass, it can destroy that asteroid, and we add that asteroid's mass to the spaceship.
   - If the asteroid's mass is greater than the spaceship's mass, the spaceship is destroyed and the function returns false.

### C++ Implementation:
Below is the C++ code that implements the above logic using a stack to handle the asteroids' direction and interaction neatly.

```cpp
#include <vector>
#include <stack>

using namespace std;

class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {
        stack<int> st;  // Stack to keep track of positively directed asteroids

        // Process each asteroid
        for (int asteroid : asteroids) {
            if (asteroid > 0) {
                // If it's a positive asteroid, just add it to the stack
                st.push(asteroid);
            } else {
                // It's a negative asteroid (moving left)
                // While there are asteroids in the stack and spaceship has enough mass
                while (!st.empty() && mass > 0) {
                    int topAsteroid = st.top();
                    // Compare spaceship mass with the top asteroid mass
                    if (mass >= topAsteroid) {
                        // Spaceship can destroy this asteroid
                        mass += topAsteroid;  // Increase mass of spaceship
                        st.pop();  // Remove the destroyed asteroid from the stack
                    } else {
                        // If spaceship mass is less, it cannot destroy the current asteroid
                        return false;
                    }
                }
                // If no positive asteroids are left in the stack, check if the ship can survive
                if (mass <= 0) {
                    return false; // Spaceship mass is zero or less, it can't survive
                }
            }
        }
        
        // After processing all asteroids, the spaceship has survived
        return true;
    }
};

// Example Usage
// int main() {
//     Solution solution;
//     vector<int> asteroids = {10, 2, -5, -1};
//     bool result = solution.asteroidsDestroyed(12, asteroids);
//     cout << (result ? "True" : "False") << endl;
// }
```

### Explanation of Code:
1. We create a stack to keep track of positive asteroids since they can only be destroyed by incoming negative asteroids.
2. We loop through the `asteroids`:
   - If the asteroid is positive, we push it onto the stack.
   - If the asteroid is negative:
     - We check if the spaceship's mass is sufficient to destroy the positive asteroids (on the stack) and continue doing so until either the stack is empty or the spaceship's mass is insufficient.
     - If at any point the negative asteroid is encountered and cannot be destroyed by the spaceship, we return `false`.
3. At the end of all encounters, if the spaceship's mass is still greater than 0, we successfully destroyed all asteroids, and return `true`.

With this implementation, we efficiently handle the interplay of spaceship mass and asteroid destruction using a stack. This leads to a time complexity of O(N), where N is the number of asteroids, which is efficient and suitable for large inputs.