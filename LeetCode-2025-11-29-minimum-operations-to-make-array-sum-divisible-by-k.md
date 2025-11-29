# LeetCode Daily – 2025-11-29

## 🧠 Problem #3512 – **Minimum Operations to Make Array Sum Divisible by K**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k)

---

### 📝 Problem Description

You are given an integer array nums and an integer k. You can perform the following operation any number of times:


	Select an index i and replace nums[i] with nums[i] - 1.


Return the minimum number of operations required to make the sum of the array divisible by k.

 
Example 1:


Input: nums = [3,9,7], k = 5

Output: 4

Explanation:


	Perform 4 operations on nums[1] = 9. Now, nums = [3, 5, 7].
	The sum is 15, which is divisible by 5.



Example 2:


Input: nums = [4,1,3], k = 4

Output: 0

Explanation:


	The sum is 8, which is already divisible by 4. Hence, no operations are needed.



Example 3:


Input: nums = [3,2], k = 6

Output: 5

Explanation:


	Perform 3 operations on nums[0] = 3 and 2 operations on nums[1] = 2. Now, nums = [0, 0].
	The sum is 0, which is divisible by 6.



 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i] <= 1000
	1 <= k <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Operations to Make Array Sum Divisible by K", let's first understand the requirements and then break down the solution.

### Problem Description
Given an array of integers `nums` and an integer `k`, the task is to determine the minimum number of operations required to make the sum of `nums` divisible by `k`. The operations involve either removing an element from the array.

### Key Observations
1. **Calculate the Sum:** First, we need to calculate the sum of all elements in the array, denoted as `sum`.
2. **Check for Divisibility:** If `sum % k == 0`, then the sum is already divisible by `k`, and we can return `0` because no operations are needed.
3. **Finding Remainder:** If the sum is not divisible, we need to find the remainder when `sum` is divided by `k`, denoted as `remainder = sum % k`.
4. **Identify Elements for Removal:** The objective now is to find elements in the array whose removal will yield a new sum that is divisible by `k`. 
   - To achieve this, we want to find an element `num` in `nums` such that `num % k == remainder`.
5. **Count Valid Elements:** If we can find such an element, we can just remove one element (as it would reduce the sum by an amount that matches the remainder), resulting in one operation. If not, we will need to remove two elements.

### Solution Steps
1. Calculate the sum of the array.
2. Check if the sum is divisible by `k`. If yes, return `0`.
3. Determine the remainder.
4. Traverse through the array to check for the existence of an element that can be removed to make the sum divisible by `k`.
5. If found, return `1`. If not found, return `2` indicating that at least two removals are necessary.

### Complexity
- Time Complexity: O(n), where n is the number of elements in `nums` (for calculating the sum and traversing the array).
- Space Complexity: O(1), since we are using a constant amount of extra space.

### C++ Implementation

Here is the solution in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        long long sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        // Check if the current sum is divisible by k
        if (sum % k == 0) {
            return 0;
        }
        
        // Calculate the remainder
        int remainder = sum % k;
        bool foundSingleRemove = false;
        
        // Try to find an element with a value that gives the same remainder
        for (int num : nums) {
            if (num % k == remainder) {
                foundSingleRemove = true;
                break;
            }
        }
        
        // If found an element to remove
        if (foundSingleRemove) {
            return 1;
        } else {
            // If no such element exists, we need to remove at least two elements
            return 2;
        }
    }
};
```

### Explanation of the Code
1. We initialize `sum` to calculate the sum of all elements in the `nums` array.
2. We check if `sum` is divisible by `k`. If yes, we return `0`.
3. We compute the `remainder` of `sum` divided by `k`.
4. We loop through the `nums` array to check if there exists an element that can help in achieving the desired divisibility.
5. If we find an element with the corresponding remainder, we return `1`. Otherwise, we conclude two removals are necessary and return `2`. 

This solution efficiently determines the minimum number of operations needed to achieve the desired outcome.