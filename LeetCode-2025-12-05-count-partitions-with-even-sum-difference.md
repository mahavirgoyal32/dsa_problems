# LeetCode Daily – 2025-12-05

## 🧠 Problem #3432 – **Count Partitions with Even Sum Difference**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-partitions-with-even-sum-difference)

---

### 📝 Problem Description

You are given an integer array nums of length n.

A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:


	Left subarray contains indices [0, i].
	Right subarray contains indices [i + 1, n - 1].


Return the number of partitions where the difference between the sum of the left and right subarrays is even.

 
Example 1:


Input: nums = [10,10,3,7,6]

Output: 4

Explanation:

The 4 partitions are:


	[10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
	[10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
	[10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
	[10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.



Example 2:


Input: nums = [1,2,2]

Output: 0

Explanation:

No partition results in an even sum difference.


Example 3:


Input: nums = [2,4,6,8]

Output: 3

Explanation:

All partitions result in an even sum difference.


 
Constraints:


	2 <= n == nums.length <= 100
	1 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count Partitions with Even Sum Difference" requires us to find the number of ways to split an array `nums` into two non-empty subsets such that the absolute difference of their sums is even. A key observation here is that the difference of the sums of two subsets is even if both subsets have either even or odd sums.

To solve this problem, we can approach it using the following steps:

1. **Calculate Total Sum**: Calculate the total sum of the array `nums`.

2. **Determine Parity**: Count the number of odd and even numbers in the array. The parity of the subsets will be determined by these counts.

3. **Count Valid Partitions**: To maintain an even sum difference, both subsets we create must either have both even sums or both odd sums. Thus, our problem can be simplified to counting combinations of odd and even elements in specific groups.

### Implementation

Here's a C++ solution to implement the above logic:

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int countPartitions(vector<int>& nums) {
        int total_sum = 0;
        int odd_count = 0;
        int even_count = 0;
        
        // Calculate the total sum and count of odd and even numbers
        for (int num : nums) {
            total_sum += num;
            if (num % 2 == 0) {
                even_count++;
            } else {
                odd_count++;
            }
        }
        
        // If total_sum is odd, it's impossible to split into two subsets with even difference
        if (total_sum % 2 != 0) return 0;

        // We can count valid partitions where both selected subsets have the same parity
        // 1. Both have even sums: Use even_count
        // 2. Both have odd sums: Use odd_count

        // Calculate the number of valid groups with non-empty subsets
        int subsets_with_odd = (1 << odd_count) - 1; // 2^odd_count - 1 (all non-empty subsets)
        int subsets_with_even = (1 << even_count) - 1; // 2^even_count - 1 (all non-empty subsets)

        // The answer is a combination of selecting odd and even subsets
        return subsets_with_odd * subsets_with_even;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3, 4}; // Example input
    cout << solution.countPartitions(nums) << endl; // Output the result
    return 0;
}
```

### Explanation of the Code

1. **Input Handling**: We initialize counters for the total sum, count of odd numbers, and count of even numbers.

2. **Count Even and Odd Numbers**: We loop through the `nums` array to calculate the total sum and to count how many numbers are even and how many are odd.

3. **Check Sum Parity**: Before proceeding, we check if the total sum is odd. If it is, we immediately return `0`, because it's impossible to split into two subsets such that both have even sums.

4. **Calculate Valid Partitions**:
   - We calculate the number of valid subsets that can be formed using the odd numbers (`subsets_with_odd`) and even numbers (`subsets_with_even`). The formula `2^count - 1` gives us all non-empty subsets of a given count.
   - Finally, we return the product of `subsets_with_odd` and `subsets_with_even` as it represents all valid combinations that maintain an even difference condition.

5. **Output**: The function `countPartitions` returns the total number of valid partitions.

This solution efficiently calculates the number of valid partitions with a time complexity primarily determined by the size of the input array (`O(n)`), where `n` is the number of elements in `nums`.