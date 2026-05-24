# LeetCode Daily – 2026-05-24

## 🧠 Problem #1340 – **Jump Game V**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game-v)

---

### 📝 Problem Description

Given an array of integers arr and an integer d. In one step you can jump from index i to index:


	i + x where: i + x < arr.length and  0 < x <= d.
	i - x where: i - x >= 0 and  0 < x <= d.


In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] for all indices k between i and j (More formally min(i, j) < k < max(i, j)).

You can choose any index of the array and start jumping. Return the maximum number of indices you can visit.

Notice that you can not jump outside of the array at any time.

 
Example 1:


Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
Output: 4
Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 > 9. You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
Similarly You cannot jump from index 3 to index 2 or index 1.


Example 2:


Input: arr = [3,3,3,3,3], d = 3
Output: 1
Explanation: You can start at any index. You always cannot jump to any index.


Example 3:


Input: arr = [7,6,5,4,3,2,1], d = 1
Output: 7
Explanation: Start at index 0. You can visit all the indicies. 


 
Constraints:


	1 <= arr.length <= 1000
	1 <= arr[i] <= 105
	1 <= d <= arr.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The Jump Game V problem is a challenging problem that requires us to traverse an array and determine the maximum score we can obtain by jumping to certain elements. The key challenge is to efficiently explore potential jumps while ensuring we don't re-evaluate states unnecessarily.

### Problem Statement Recap

You are given an integer array `arr` and a target integer `d`. You start at any index, and from there, you can jump to any index that is at most `d` steps away (either left or right) as long as the value at the target index is less than the value at your current index. Your goal is to find the maximum score obtainable by starting at any index, where the score at index `i` is the value `arr[i]`.

### Approach

To solve this problem, we can use a combination of dynamic programming and a deque (double-ended queue) to efficiently track the maximum reachable scores from our current position.

1. **Dynamic Programming Array**: We'll maintain an array `dp` where `dp[i]` will store the maximum score obtainable starting at index `i`.

2. **Priority Queue (Deque)**: To keep track of indices in a manner that allows us to efficiently find the maximum score reachable with valid jumps, we'll use a deque. This deque will help in managing candidate indices based on their score.

3. **Two-pass Method**: We'll make two passes over the array:
   - In the first pass, we process jumps to the right.
   - In the second pass, we process jumps to the left.

### Implementation

Here's the C++ code that implements the above approach:

```cpp
#include <iostream>
#include <vector>
#include <deque>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxJumps(vector<int>& arr, int d) {
        int n = arr.size();
        vector<int> dp(n, 0);
        int maxScore = 0;
        
        // Process jumps to the right
        deque<int> deq; // to store indices of arr
        for (int i = 0; i < n; ++i) {
            // Remove index that's out of the jump range
            if (!deq.empty() && deq.front() < i - d) {
                deq.pop_front();
            }
            // Calculate dp[i]
            dp[i] = arr[i]; 
            if (!deq.empty()) {
                dp[i] = max(dp[i], dp[deq.front()] + arr[i]);
            }
            // Maintain max in deque (pop indices from back)
            while (!deq.empty() && dp[deq.back()] <= dp[i]) {
                deq.pop_back();
            }
            deq.push_back(i);
            maxScore = max(maxScore, dp[i]);
        }

        // Process jumps to the left
        deq.clear(); // Clear deque for next pass
        for (int i = n - 1; i >= 0; --i) {
            // Remove index that's out of the jump range
            if (!deq.empty() && deq.front() > i + d) {
                deq.pop_front();
            }
            // Calculate dp[i]
            dp[i] = max(dp[i], arr[i]); 
            if (!deq.empty()) {
                dp[i] = max(dp[i], dp[deq.front()] + arr[i]);
            }
            // Maintain max in deque (pop indices from back)
            while (!deq.empty() && dp[deq.back()] <= dp[i]) {
                deq.pop_back();
            }
            deq.push_back(i);
            maxScore = max(maxScore, dp[i]);
        }

        return maxScore;
    }
};

int main() {
    Solution sol;
    vector<int> arr = {10, 5, 2, 1, 100, 6};
    int d = 2;
    cout << "Maximum Jump Score: " << sol.maxJumps(arr, d) << endl; // Output the maximum score
    return 0;
}
```

### Explanation of the Code

1. **Initialization**: We initialize a dynamic programming array `dp` to hold the scores and a variable `maxScore` to track the maximum score across all indices.

2. **Rightward Pass**:
   - For each index, we check if any indices in the deque are out of range for a right jump (`i - d`).
   - We compute the current `dp[i]` score based on the maximum score obtainable from indices within the jump range that have a lesser value than `arr[i]`.
   - We maintain the order in the deque based on the scores, ensuring that we always have the index with the highest score to jump to.

3. **Leftward Pass**: We repeat similar logic as the rightward pass but in reverse to handle jumps to the left.

4. **Result**: The function returns the maximum score found during both passes.

This solution efficiently handles the jumps with O(n) complexity per pass due to the use of a deque, making it suitable for large inputs.