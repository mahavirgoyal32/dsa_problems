# LeetCode Daily – 2026-05-10

## 🧠 Problem #2770 – **Maximum Number of Jumps to Reach the Last Index**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index)

---

### 📝 Problem Description

You are given a 0-indexed array nums of n integers and an integer target.

You are initially positioned at index 0. In one step, you can jump from index i to any index j such that:


	0 <= i < j < n
	-target <= nums[j] - nums[i] <= target


Return the maximum number of jumps you can make to reach index n - 1.

If there is no way to reach index n - 1, return -1.

 
Example 1:


Input: nums = [1,3,6,4,1,2], target = 2
Output: 3
Explanation: To go from index 0 to index n - 1 with the maximum number of jumps, you can perform the following jumping sequence:
- Jump from index 0 to index 1. 
- Jump from index 1 to index 3.
- Jump from index 3 to index 5.
It can be proven that there is no other jumping sequence that goes from 0 to n - 1 with more than 3 jumps. Hence, the answer is 3. 

Example 2:


Input: nums = [1,3,6,4,1,2], target = 3
Output: 5
Explanation: To go from index 0 to index n - 1 with the maximum number of jumps, you can perform the following jumping sequence:
- Jump from index 0 to index 1.
- Jump from index 1 to index 2.
- Jump from index 2 to index 3.
- Jump from index 3 to index 4.
- Jump from index 4 to index 5.
It can be proven that there is no other jumping sequence that goes from 0 to n - 1 with more than 5 jumps. Hence, the answer is 5. 

Example 3:


Input: nums = [1,3,6,4,1,2], target = 0
Output: -1
Explanation: It can be proven that there is no jumping sequence that goes from 0 to n - 1. Hence, the answer is -1. 


 
Constraints:


	2 <= nums.length == n <= 1000
	-109 <= nums[i] <= 109
	0 <= target <= 2 * 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem “Maximum Number of Jumps to Reach the Last Index” can be solved efficiently using dynamic programming.

### Problem Explanation
You have a list of integers `nums` where `nums[i]` indicates the maximum number of indices you can jump forward from index `i`. Your task is to determine the maximum number of jumps you can take to reach the last index starting from index 0.

### Approach
To solve this problem, we will use a Dynamic Programming (DP) approach. We will maintain a `dp` array where `dp[i]` indicates the maximum number of jumps required to reach index `i`. The steps are as follows:

1. **Initialization**: Start by creating a `dp` array of the same size as `nums`, initialized with a value like `-1` which indicates that the index can't be reached.
2. **Base Case**: Set `dp[0] = 0` because it takes zero jumps to reach the starting position.
3. **Iterate Over the Array**: For each index `i` in `nums`, if `dp[i]` is not `-1`, calculate the maximum reachable index from `i` using `nums[i]`.
4. **Update DP**: Update the `dp[j]` for each index `j` that can be reached from `i`. Set `dp[j] = max(dp[j], dp[i] + 1)` to reflect the new maximum.
5. **Result**: The result will be stored in `dp[n-1]`, where `n` is the length of `nums`. If `dp[n-1]` remains `-1`, it means the last index cannot be reached.

### C++ Code
Here's the implementation based on the above approach:

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int maxJumps(vector<int>& nums) {
    int n = nums.size();
    if (n == 1) return 0; // If only one index, no jumps needed.

    vector<int> dp(n, -1);
    dp[0] = 0; // Starting index requires zero jumps.

    for (int i = 0; i < n; i++) {
        if (dp[i] == -1) continue; // Skip if current index is unreachable.

        int maxReach = min(n - 1, i + nums[i]); // Last index we can reach from i.
        for (int j = i + 1; j <= maxReach; j++) {
            if (dp[j] == -1) { // Only update if this index hasn't been reached yet.
                dp[j] = dp[i] + 1;
            } else {
                dp[j] = max(dp[j], dp[i] + 1); // Update with max jumps.
            }
        }
    }

    return dp[n - 1]; // Return maximum jumps to reach the last index
}

int main() {
    vector<int> nums = {6, 2, 4, 0, 5, 0, 3, 0}; // Example input
    int result = maxJumps(nums);
    cout << "Maximum number of jumps to reach the last index: " << result << endl;
    return 0;
}
```

### Explanation of the Code:
- We define the function `maxJumps` which takes a vector of integers `nums` as input.
- We create a `dp` array for dynamic programming, initialized to `-1`.
- We loop through each index and for each reachable index, we update the maximum jumps possible to the indexes that can be reached from current index `i`.
- Finally, we return the value in `dp[n-1]`, which represents the maximum jumps we can take to get to the last index.

### Time Complexity:
The time complexity of the solution is O(n^2) in the worst case since each index may be reached from every other index in the array.

### Space Complexity:
The space complexity is O(n) for the `dp` array.

This implementation provides a clear and structured approach to solving the problem while adhering to the dynamic programming paradigm.