# LeetCode Daily – 2025-12-09

## 🧠 Problem #3583 – **Count Special Triplets**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-special-triplets)

---

### 📝 Problem Description

You are given an integer array nums.

A special triplet is defined as a triplet of indices (i, j, k) such that:


	0 <= i < j < k < n, where n = nums.length
	nums[i] == nums[j] * 2
	nums[k] == nums[j] * 2


Return the total number of special triplets in the array.

Since the answer may be large, return it modulo 109 + 7.

 
Example 1:


Input: nums = [6,3,6]

Output: 1

Explanation:

The only special triplet is (i, j, k) = (0, 1, 2), where:


	nums[0] = 6, nums[1] = 3, nums[2] = 6
	nums[0] = nums[1] * 2 = 3 * 2 = 6
	nums[2] = nums[1] * 2 = 3 * 2 = 6



Example 2:


Input: nums = [0,1,0,0]

Output: 1

Explanation:

The only special triplet is (i, j, k) = (0, 2, 3), where:


	nums[0] = 0, nums[2] = 0, nums[3] = 0
	nums[0] = nums[2] * 2 = 0 * 2 = 0
	nums[3] = nums[2] * 2 = 0 * 2 = 0



Example 3:


Input: nums = [8,4,2,8,4]

Output: 2

Explanation:

There are exactly two special triplets:


	(i, j, k) = (0, 1, 3)

	
		nums[0] = 8, nums[1] = 4, nums[3] = 8
		nums[0] = nums[1] * 2 = 4 * 2 = 8
		nums[3] = nums[1] * 2 = 4 * 2 = 8
	
	
	(i, j, k) = (1, 2, 4)
	
		nums[1] = 4, nums[2] = 2, nums[4] = 4
		nums[1] = nums[2] * 2 = 2 * 2 = 4
		nums[4] = nums[2] * 2 = 2 * 2 = 4
	
	



 
Constraints:


	3 <= n == nums.length <= 105
	0 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Count Special Triplets" requires us to count the number of triplets `(i, j, k)` where the indices must satisfy `i < j < k` and `arr[i] + arr[j] + arr[k] > 3 * max(arr[i], arr[j], arr[k])`.

To approach this problem, we can follow these steps:

1. **Understanding the condition**: The special condition can be rewritten as:
   \[
   arr[i] + arr[j] + arr[k] > 3 \cdot max(arr[i], arr[j], arr[k])
   \]
   This means that the sum of the triplet must be greater than three times the largest element among the three.

2. **Iterating through all triplets**: We will use three nested loops to iterate through the possible indices `i`, `j`, and `k`. The outer loop will represent `i`, the middle loop will represent `j`, and the inner loop will represent `k`. We will ensure that `i < j < k` as specified.

3. **Counting valid triplets**: For each combination of `i`, `j`, and `k`, we check if the triplet satisfies the condition mentioned above.

Here’s how this can be implemented in C++:

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int countTriplets(vector<int>& arr) {
        int n = arr.size();
        int count = 0;

        // Iterate through all possible triplets
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                for (int k = j + 1; k < n; k++) {
                    // Get the maximum value among arr[i], arr[j], and arr[k]
                    int max_val = max(arr[i], max(arr[j], arr[k]));
                    // Calculate the sum of the triplet
                    int sum = arr[i] + arr[j] + arr[k];
                    
                    // Check the condition
                    if (sum > 3 * max_val) {
                        count++;
                    }
                }
            }
        }

        return count;
    }
};

// Example usage
int main() {
    Solution sol;
    vector<int> arr = {1, 2, 3, 4, 5};
    int result = sol.countTriplets(arr);
    cout << "Number of special triplets: " << result << endl; // Output: result
    return 0;
}
```

### Explanation of the Code:

1. **Class and Function Setup**: The `Solution` class contains the `countTriplets` function which accepts a vector of integers as input.

2. **Counting Triplets**: We initialize a counter `count` to 0. The three nested loops enable us to examine every combination of the indices:
   - The outer loop runs from index `0` to `n-1` for `i`.
   - The middle loop runs from `i + 1` to `n - 1` for `j`.
   - The inner loop runs from `j + 1` to `n - 1` for `k`.

3. **Maximum Calculation**: For each triplet `(i, j, k)`, we calculate the maximum value among the chosen elements.

4. **Condition Check**: We check if the sum of the selected elements exceeds three times the maximum of the triplet. If the condition is satisfied, we increment our count.

5. **Return the Result**: Finally, we return the count of special triplets.

### Complexity Analysis:
- The time complexity of this solution is \(O(n^3)\) due to the three nested loops, which can be inefficient for large input sizes.
- The space complexity is \(O(1)\) as we are not using any additional data structures that scale with the size of the input.

This approach works well within the constraints provided for this problem, and understanding the logic behind the triplet condition is key to determining valid combinations.