# LeetCode Daily – 2026-09-04

## 🧠 Problem #3903 – **Smallest Stable Index I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-stable-index-i)

---

### 📝 Problem Description

You are given an integer array nums of length n and an integer k.

For each index i, define its instability score as max(nums[0..i]) - min(nums[i..n - 1]).

In other words:


	max(nums[0..i]) is the largest value among the elements from index 0 to index i.
	min(nums[i..n - 1]) is the smallest value among the elements from index i to index n - 1.


An index i is called stable if its instability score is less than or equal to k.

Return the smallest stable index. If no such index exists, return -1.

 
Example 1:


Input: nums = [5,0,1,4], k = 3

Output: 3

Explanation:


	At index 0: The maximum in [5] is 5, and the minimum in [5, 0, 1, 4] is 0, so the instability score is 5 - 0 = 5.
	At index 1: The maximum in [5, 0] is 5, and the minimum in [0, 1, 4] is 0, so the instability score is 5 - 0 = 5.
	At index 2: The maximum in [5, 0, 1] is 5, and the minimum in [1, 4] is 1, so the instability score is 5 - 1 = 4.
	At index 3: The maximum in [5, 0, 1, 4] is 5, and the minimum in [4] is 4, so the instability score is 5 - 4 = 1.
	This is the first index with an instability score less than or equal to k = 3. Thus, the answer is 3.



Example 2:


Input: nums = [3,2,1], k = 1

Output: -1

Explanation:


	At index 0, the instability score is 3 - 1 = 2.
	At index 1, the instability score is 3 - 1 = 2.
	At index 2, the instability score is 3 - 1 = 2.
	None of these values is less than or equal to k = 1, so the answer is -1.



Example 3:


Input: nums = [0], k = 0

Output: 0

Explanation:

At index 0, the instability score is 0 - 0 = 0, which is less than or equal to k = 0. Therefore, the answer is 0.


 
Constraints:


	1 <= nums.length <= 100
	0 <= nums[i] <= 109
	0 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's discuss the problem "Smallest Stable Index I" from LeetCode.

### Problem Description

You are given an integer array `A` of size `n`. An index `i` of `A` is called "stable" if the following conditions are met:

- For every index `j` from `0` to `i`, the numbers in `A[0]` to `A[j]` are all less than or equal to `A[i]`.
- For every index `j` from `i` to `n - 1`, the numbers in `A[j]` are all greater than or equal to `A[i]`.

You need to return the smallest stable index `i`. If no such index exists, return `-1`.

### Example

For the input array `A = [3, 1, 2, 3, 4]`, the stable index is `3` because `A[3] = 3`, and for all indices `j`:
- `A[0]` to `A[3]` are all ≤ `3`.
- `A[3]` to `A[4]` are all ≥ `3`.

### Plan

1. We need to find the maximum value up till each index. We can use a vector `max_left` to store this.
2. Similarly, we need to find the minimum value from each index to the end. We can use a vector `min_right` for this.
3. After populating these two vectors, we can iterate through the array and check the conditions for stability.

### C++ Solution

Here is the C++ solution that implements the above idea:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int findStableIndex(vector<int>& A) {
        int n = A.size();
        if (n == 0) return -1;

        // Step 1: Create max_left array
        vector<int> max_left(n);
        max_left[0] = A[0];
        for (int i = 1; i < n; ++i) {
            max_left[i] = max(max_left[i - 1], A[i]);
        }

        // Step 2: Create min_right array
        vector<int> min_right(n);
        min_right[n - 1] = A[n - 1];
        for (int i = n - 2; i >= 0; --i) {
            min_right[i] = min(min_right[i + 1], A[i]);
        }

        // Step 3: Find the smallest stable index
        for (int i = 0; i < n; ++i) {
            if (max_left[i] <= A[i] && min_right[i] >= A[i]) {
                return i;
            }
        }

        return -1; // If no stable index found
    }
};

int main() {
    Solution sol;
    vector<int> A = {3, 1, 2, 3, 4};
    int result = sol.findStableIndex(A);
    cout << "Smallest Stable Index: " << result << endl; // Output: 3

    return 0;
}
```

### Explanation of the Code:

1. **Max Left Array**: We create an array `max_left` where each element at index `i` holds the maximum value from the start of the array up to index `i`. This is done in a single pass.
  
2. **Min Right Array**: We create another array `min_right` where each element at index `i` holds the minimum value from index `i` to the end of the array. This is also achieved in a single pass, but we iterate from the end to the beginning.

3. **Checking Stability**: Finally, we iterate through the array indices and check if the conditions for being a stable index are satisfied. If they are, we return that index.

4. **Final Return**: If no index satisfies the conditions, we return `-1`.

This algorithm runs in O(n) time, as we only pass through the array three times: two for constructing `max_left` and `min_right`, and one for checking stability.