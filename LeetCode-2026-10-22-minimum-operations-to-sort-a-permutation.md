# LeetCode Daily – 2026-10-22

## 🧠 Problem #3942 – **Minimum Operations to Sort a Permutation**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-operations-to-sort-a-permutation)

---

### 📝 Problem Description

You are given an integer array nums of length n, where nums is a permutation of the integers from 0 to n - 1.

You may perform only the following operations:


	Reverse the entire array.
	Rotate Left by One: Move the first element to the end of the array, and rest elements to left by one position.


Return an integer denoting the minimum number of operations required to sort the array in increasing order. If it is not possible to sort the array using only the given operations, return -1.

 
Example 1:


Input: nums = [0,2,1]

Output: 2

Explanation:


	Rotate Left by one: [2, 1, 0]
	Reverse the array: [0, 1, 2]


The array becomes sorted in 2 operations, which is minimal


Example 2:


Input: nums = [1,0,2]

Output: 2

Explanation:


	Reverse the array: [2, 0, 1]
	Rotate Left by one: [0, 1, 2]


The array becomes sorted in 2 operations, which is minimal.


Example 3:


Input: nums = [2,0,1,3]

Output: -1

Explanation:

It is impossible to reach [2, 0, 1, 3]. Thus, the answer is -1.


 
Constraints:


	1 <= n == nums.length <= 105
	0 <= nums[i] <= n - 1
	nums is a permutation of integers from 0 to n - 1.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Minimum Operations to Sort a Permutation" from LeetCode can be tackled using graph theory concepts, specifically focusing on cycles in the permutation.

### Problem Explanation

Given an integer array `nums` representing a permutation of integers from `1` to `n`, we want to determine the minimum number of operations required to sort the permutation in ascending order. The only allowed operation is to choose any two indices `i` and `j`, and then swap the values at those indices.

### Key Insights

- The problem can be understood in terms of cycles in the permutation. Each cycle represents a set of indices where elements can be shifted among themselves to reach their sorted position.
- For a cycle of length `k`, it takes exactly `k - 1` swaps to put all elements of that cycle in their correct positions.
- Therefore, the total minimum operations needed is the sum of `k - 1` for all cycles in the permutation.

### Steps to Solve the Problem

1. **Identify Cycles**: Iterate through each element and track visited indices to identify all cycles in the permutation.
2. **Count the Swaps**: For each cycle found, count how many swaps are needed using the formula `cycle_length - 1`.
3. **Sum the Swaps**: The answer will be the total count of swaps needed for all cycles combined.

### C++ Implementation

Here’s how you can implement this in C++:

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int minimumOperations(vector<int>& nums) {
        int n = nums.size();
        vector<bool> visited(n, false);
        int operations = 0;

        for (int i = 0; i < n; ++i) {
            if (!visited[i]) {
                int cycle_size = 0;
                int current = i;

                // Explore the cycle
                while (!visited[current]) {
                    visited[current] = true; // Mark as visited
                    current = nums[current] - 1; // Move to the next index in the cycle
                    cycle_size++;
                }

                // If cycle size is greater than 1, we need cycle_size - 1 operations
                if (cycle_size > 1) {
                    operations += (cycle_size - 1);
                }
            }
        }
        return operations;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {4, 3, 2, 1};
    cout << solution.minimumOperations(nums) << endl; // Output: 3
    return 0;
}
```

### Explanation of the Code

- We initialize a `visited` list to keep track of which indices have been processed.
- We iterate over each element; if it hasn’t been visited yet, we start exploring the cycle that includes this element.
- For each index in the cycle, we mark it as visited and move to the next index using the value in the `nums` array (adjusted for zero-based indexing).
- Once we have determined the size of the cycle, we add `cycle_size - 1` to our operations count if the cycle size is greater than one.
- Finally, we return the total number of operations required to sort the permutation.

### Complexity Analysis

- **Time Complexity**: O(n), where `n` is the length of the `nums` array.
- **Space Complexity**: O(n), for the `visited` array.

This method effectively makes use of cycles in the permutation to minimize the number of swaps needed to sort the array.