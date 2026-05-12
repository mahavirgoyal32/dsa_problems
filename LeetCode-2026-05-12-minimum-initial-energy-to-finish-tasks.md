# LeetCode Daily – 2026-05-12

## 🧠 Problem #1665 – **Minimum Initial Energy to Finish Tasks**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks)

---

### 📝 Problem Description

You are given an array tasks where tasks[i] = [actuali, minimumi]:


	actuali is the actual amount of energy you spend to finish the ith task.
	minimumi is the minimum amount of energy you require to begin the ith task.


For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it.

You can finish the tasks in any order you like.

Return the minimum initial amount of energy you will need to finish all the tasks.

 
Example 1:


Input: tasks = [[1,2],[2,4],[4,8]]
Output: 8
Explanation:
Starting with 8 energy, we finish the tasks in the following order:
    - 3rd task. Now energy = 8 - 4 = 4.
    - 2nd task. Now energy = 4 - 2 = 2.
    - 1st task. Now energy = 2 - 1 = 1.
Notice that even though we have leftover energy, starting with 7 energy does not work because we cannot do the 3rd task.

Example 2:


Input: tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]]
Output: 32
Explanation:
Starting with 32 energy, we finish the tasks in the following order:
    - 1st task. Now energy = 32 - 1 = 31.
    - 2nd task. Now energy = 31 - 2 = 29.
    - 3rd task. Now energy = 29 - 10 = 19.
    - 4th task. Now energy = 19 - 10 = 9.
    - 5th task. Now energy = 9 - 8 = 1.

Example 3:


Input: tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]
Output: 27
Explanation:
Starting with 27 energy, we finish the tasks in the following order:
    - 5th task. Now energy = 27 - 5 = 22.
    - 2nd task. Now energy = 22 - 2 = 20.
    - 3rd task. Now energy = 20 - 3 = 17.
    - 1st task. Now energy = 17 - 1 = 16.
    - 4th task. Now energy = 16 - 4 = 12.
    - 6th task. Now energy = 12 - 6 = 6.


 
Constraints:


	1 <= tasks.length <= 105
	1 <= actual​i <= minimumi <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Initial Energy to Finish Tasks" from LeetCode, we need to determine the minimum initial energy required to finish all given tasks, each characterized by its energy requirement and the energy gained upon completion.

### Problem Explanation

Each task has two attributes:
1. **Energy required to complete the task (a[i])**
2. **Energy gained after completing the task (b[i])**

The goal is to determine the minimum initial energy needed to complete all tasks in order. If at any task the current energy is insufficient to meet the energy requirement, we need to use some initial energy.

### Approach

1. **Simulate Task Completion**:
   - Start with an initial energy (`initialEnergy`) and check if it’s enough to finish the tasks one by one.
   - For each task:
     - If the current energy is less than the required energy for the task, calculate how much more energy is needed and update the `initialEnergy` accordingly.
     - Deduct the task's energy requirement from the current energy.
     - After completing the task, add the energy gained from the task to the current energy.

2. **Implementation Steps**:
   - Initialize two variables: `initialEnergy` to 0 to start tracking how much initial energy might be needed and `currentEnergy` to track energy during task execution.
   - Iterate through each task, adjusting `currentEnergy` as tasks are completed.
   - If `currentEnergy` drops below the required energy for a task, we increment `initialEnergy` to account for the deficit.

### C++ Implementation

Here is a C++ implementation that follows the above approach:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int minimumEnergy(vector<vector<int>>& tasks) {
        long long totalEnergyRequired = 0;
        long long initialEnergy = 0;
        long long currentEnergy = 0;

        for (const auto& task : tasks) {
            // Energy required to complete the task
            long long requiredEnergy = task[0];
            // Energy gained after completing the task
            long long gainedEnergy = task[1];

            // First, check if current energy is sufficient to perform the task
            if (currentEnergy < requiredEnergy) {
                // Calculate how much initial energy we need to add
                initialEnergy += requiredEnergy - currentEnergy;
                currentEnergy = requiredEnergy;  // Set current energy to required since we add the deficit
            }

            // Complete the task
            currentEnergy -= requiredEnergy;  // Deduct the energy for this task
            currentEnergy += gainedEnergy;     // Gain energy from completing the task
        }

        return initialEnergy;
    }
};
```

### Explanation of the Code

- We use a `for` loop to traverse through each task in the `tasks` vector.
- For each task, we retrieve the required energy and the gained energy.
- If at any point the `currentEnergy` is less than required for that task, we calculate how much more initial energy we need (the difference) and update both `initialEnergy` and set `currentEnergy` to be equal to `requiredEnergy`.
- After either adjusting for the initial energy or if we had enough, we complete the task by deducting the required energy and adding the energy gained.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the number of tasks, as we need to iterate through all tasks once.
- **Space Complexity**: O(1), since we are using a constant amount of space for variables.

This approach efficiently determines the minimum initial energy required to complete all tasks while ensuring we remain mindful of energy levels throughout the task transitions.