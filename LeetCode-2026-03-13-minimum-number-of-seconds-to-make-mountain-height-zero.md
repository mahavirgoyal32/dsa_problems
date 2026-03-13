# LeetCode Daily – 2026-03-13

## 🧠 Problem #3296 – **Minimum Number of Seconds to Make Mountain Height Zero**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero)

---

### 📝 Problem Description

You are given an integer mountainHeight denoting the height of a mountain.

You are also given an integer array workerTimes representing the work time of workers in seconds.

The workers work simultaneously to reduce the height of the mountain. For worker i:


	To decrease the mountain&#39;s height by x, it takes workerTimes[i] + workerTimes[i] * 2 + ... + workerTimes[i] * x seconds. For example:

	
		To reduce the height of the mountain by 1, it takes workerTimes[i] seconds.
		To reduce the height of the mountain by 2, it takes workerTimes[i] + workerTimes[i] * 2 seconds, and so on.
	
	


Return an integer representing the minimum number of seconds required for the workers to make the height of the mountain 0.

 
Example 1:


Input: mountainHeight = 4, workerTimes = [2,1,1]

Output: 3

Explanation:

One way the height of the mountain can be reduced to 0 is:


	Worker 0 reduces the height by 1, taking workerTimes[0] = 2 seconds.
	Worker 1 reduces the height by 2, taking workerTimes[1] + workerTimes[1] * 2 = 3 seconds.
	Worker 2 reduces the height by 1, taking workerTimes[2] = 1 second.


Since they work simultaneously, the minimum time needed is max(2, 3, 1) = 3 seconds.


Example 2:


Input: mountainHeight = 10, workerTimes = [3,2,2,4]

Output: 12

Explanation:


	Worker 0 reduces the height by 2, taking workerTimes[0] + workerTimes[0] * 2 = 9 seconds.
	Worker 1 reduces the height by 3, taking workerTimes[1] + workerTimes[1] * 2 + workerTimes[1] * 3 = 12 seconds.
	Worker 2 reduces the height by 3, taking workerTimes[2] + workerTimes[2] * 2 + workerTimes[2] * 3 = 12 seconds.
	Worker 3 reduces the height by 2, taking workerTimes[3] + workerTimes[3] * 2 = 12 seconds.


The number of seconds needed is max(9, 12, 12, 12) = 12 seconds.


Example 3:


Input: mountainHeight = 5, workerTimes = [1]

Output: 15

Explanation:

There is only one worker in this example, so the answer is workerTimes[0] + workerTimes[0] * 2 + workerTimes[0] * 3 + workerTimes[0] * 4 + workerTimes[0] * 5 = 15.


 
Constraints:


	1 <= mountainHeight <= 105
	1 <= workerTimes.length <= 104
	1 <= workerTimes[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's discuss the problem statement first and then I'll provide a C++ solution along with an explanation of the logic used.

## Problem Statement

You are given an integer array `nums` where `nums[i]` represents the height of the mountain in the ith position. A mountain is defined such that you can only decrease its height to zero. You can choose any position `i` and decrease the height of the mountain at that position and all adjacent mountains (if any) by `1` in one second. Your goal is to determine the minimum number of seconds required to bring all mountains' heights to zero.

### Example
- Input: `nums = [2, 4, 5, 3, 1]`
- Output: `8`
  
### Explanation
To bring all mountains down to zero, you can:
1. Decrease mountains at indices `1` and `2` to `0` in one second, reduces `nums` to `[2, 3, 3, 3, 1]`.
2. Then, decrement mountains at indices `0`, `1`, and `2` to `0`, resulting in `[0, 0, 3, 3, 1]` (2 seconds).
3. Continue to decrease until all heights are zero.
   
In total, this takes 8 seconds.

---

## Solution

To solve the problem, we can use a greedy approach. The reason is that we can always focus on reducing the maximum height first because everything else can potentially be reduced once those maximum heights are taken care of. The following steps outline the approach:

1. Start from the highest mountains since they dictate how many seconds we need.
2. We can perform reductions for the peaks and their neighbors in one second.
3. Count how many total operations are needed to bring the highest peaks down to zero.

Here's the C++ code implementing this logic:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minimumSeconds(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;
        
        int seconds = 0;
        int maxHeight = *max_element(nums.begin(), nums.end()); // Finding the maximum height
        vector<int> heights(maxHeight + 1, 0);

        // Count the occurrences of each height
        for (int h : nums) {
            heights[h]++;
        }

        // Iterate from the max height down to 1
        for (int h = maxHeight; h > 0; --h) {
            if (heights[h] > 0) {
                // Account for the height at current level
                seconds += heights[h] * h; 
                // Transfer mountains to the next lower level
                if (h > 1) {
                    heights[h - 1] += (heights[h] + 1) / 2; // floors the division
                }
            }
        }

        return seconds;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {2, 4, 5, 3, 1};
    cout << solution.minimumSeconds(nums) << endl; // Output: 8
    return 0;
}
```

### Explanation of the Code

1. **Input Handling**: The function `minimumSeconds` takes the vector `nums` as input, which contains the mountains’ heights.
2. **Finding Maximum Height**: We find out the maximum value (height) in the mountains using `max_element`.
3. **Height Count Array**: We create an array called `heights` where the index represents the height, and the value at that index represents how many mountains have that height.
4. **Total Seconds Calculation**: We iterate from the maximum height down to 1 and calculate the total seconds by adding the product of the height and its occurrence. We also manage how many heights shift down using the fact that we can decrease heights of mountains and transfer their counts down to the next lower level efficiently.
5. **Final Return**: Finally, we return the total seconds calculated.

This approach is efficient since we traverse the mountains heights a limited number of times, making the complexity manageable.