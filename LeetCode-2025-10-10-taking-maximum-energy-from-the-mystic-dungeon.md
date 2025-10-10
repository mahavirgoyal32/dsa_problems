# LeetCode Daily – 2025-10-10

## 🧠 Problem #3147 – **Taking Maximum Energy From the Mystic Dungeon**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon)

---

### 📝 Problem Description

In a mystic dungeon, n magicians are standing in a line. Each magician has an attribute that gives you energy. Some magicians can give you negative energy, which means taking energy from you.

You have been cursed in such a way that after absorbing energy from magician i, you will be instantly transported to magician (i + k). This process will be repeated until you reach the magician where (i + k) does not exist.

In other words, you will choose a starting point and then teleport with k jumps until you reach the end of the magicians&#39; sequence, absorbing all the energy during the journey.

You are given an array energy and an integer k. Return the maximum possible energy you can gain.

Note that when you are reach a magician, you must take energy from them, whether it is negative or positive energy.

 
Example 1:


Input:  energy = [5,2,-10,-5,1], k = 3

Output: 3

Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.


Example 2:


Input: energy = [-2,-3,-1], k = 2

Output: -1

Explanation: We can gain a total energy of -1 by starting from magician 2.


 
Constraints:


	1 <= energy.length <= 105
	-1000 <= energy[i] <= 1000
	1 <= k <= energy.length - 1


 
​​​​​​

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Taking Maximum Energy From the Mystic Dungeon" requires us to maximize the energy we can collect from a series of enemies, each of which has units of energy and can only be attacked a limited number of times determined by a "cooldown" period. Let's break down the problem and provide a C++ solution along with an explanation.

### Problem Breakdown
1. **Input**:
   - An integer `n` representing the number of enemies.
   - An integer `k` representing the total cooldown period.
   - An array `energy` of integers where each element represents energy obtained from attacking the corresponding enemy.

2. **Output**:
   - The maximum energy collected after attacking all enemies following the cooldown rules.

### Cooldown Rules
- If you attack once, you have to "rest" for `k` turns before attacking that enemy again. 

### Strategy
The optimal approach is to use a greedy strategy combined with a priority queue (or max heap):
1. **Max-Heap**: Use a max-heap to always be able to attack the enemy who gives the most energy.
2. **Cooldown Management**: Maintain a queue to track the cooldowns of the enemies we have attacked.

### C++ Solution
Here's the implemented solution in C++:

```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    int maxEnergy(vector<int>& energy, int k) {
        int n = energy.size();
        priority_queue<int> maxHeap;
        
        // Fill the heap with the energies
        for (int e : energy) {
            maxHeap.push(e);
        }

        int totalEnergy = 0;
        queue<int> cooldownQueue;

        while (!maxHeap.empty() || !cooldownQueue.empty()) {
            if (!maxHeap.empty()) {
                // Attack the enemy with the maximum energy available
                int currentEnergy = maxHeap.top();
                maxHeap.pop();
                totalEnergy += currentEnergy;

                // Add this enemy to the cooldown queue
                cooldownQueue.push(currentEnergy);
            }

            // If we have completed k turns, we can release an enemy from cooldown
            if (cooldownQueue.size() > k) {
                // Release the enemy that has completed its cooldown
                cooldownQueue.pop();
            }
        }

        return totalEnergy;
    }
};

int main() {
    Solution sol;
    vector<int> energy = {3, 2, 5, 3};
    int k = 2;
    cout << "Maximum Energy: " << sol.maxEnergy(energy, k) << endl;
    return 0;
}
```

### Explanation
1. **Initialization**:
   - A max-heap is initialized to store the energy values from the enemies.
   - A queue is used to manage the cooldown periods.

2. **Main Loop**:
   - While there are enemies to attack (either in the heap or in the cooldown queue), we continue.
   - If the max-heap is not empty, we:
     - Pop the maximum energy value from the heap and add it to the total energy.
     - Push the current enemy energy into the cooldown queue.

3. **Cooldown Management**:
   - Check if the cooldown queue has more elements than allowed (`k`). If so, remove the front of the queue, allowing that enemy to be attacked again.

4. **Termination**: Loop continues until all enemies have been processed.

### Conclusion
This solution effectively utilizes a max-heap for efficiency in maximizing energy intake, while the cooldown queue manages the cooldown times necessary to ensure we can collect the most energy over the sequence of enemies. The algorithm works in O(n log n) time due to the heap operations, which is efficient enough for the given problem constraints.