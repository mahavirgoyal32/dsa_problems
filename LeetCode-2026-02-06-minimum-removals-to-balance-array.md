# LeetCode Daily – 2026-02-06

## 🧠 Problem #3634 – **Minimum Removals to Balance Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-removals-to-balance-array)

---

### 📝 Problem Description

You are given an integer array nums and an integer k.

An array is considered balanced if the value of its maximum element is at most k times the minimum element.

You may remove any number of elements from nums​​​​​​​ without making it empty.

Return the minimum number of elements to remove so that the remaining array is balanced.

Note: An array of size 1 is considered balanced as its maximum and minimum are equal, and the condition always holds true.

 
Example 1:


Input: nums = [2,1,5], k = 2

Output: 1

Explanation:


	Remove nums[2] = 5 to get nums = [2, 1].
	Now max = 2, min = 1 and max <= min * k as 2 <= 1 * 2. Thus, the answer is 1.



Example 2:


Input: nums = [1,6,2,9], k = 3

Output: 2

Explanation:


	Remove nums[0] = 1 and nums[3] = 9 to get nums = [6, 2].
	Now max = 6, min = 2 and max <= min * k as 6 <= 2 * 3. Thus, the answer is 2.



Example 3:


Input: nums = [4,6], k = 2

Output: 0

Explanation:


	Since nums is already balanced as 6 <= 4 * 2, no elements need to be removed.



 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	1 <= k <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let’s solve the LeetCode problem "Minimum Removals to Balance Array" step by step, providing a C++ solution along with explanations.

### Problem Explanation

In this problem, you're given an array consisting of integers. Your task is to determine the minimum number of elements that need to be removed so that the remaining elements can be considered balanced. The array is defined as balanced if the count of the maximum element (let's call it `max_elem`) equals the count of the minimum element (let's call it `min_elem`).

### Steps to Solve the Problem

1. **Identify the Minimum and Maximum Elements**: First, we need to find the minimum (`min_elem`) and maximum (`max_elem`) values in the array.

2. **Count Their Occurrences**: Next, we count how many times these minimum and maximum values occur in the array.

3. **Calculate Removals**: The minimum number of removals necessary will be the total count of elements that need to be removed to make the array balanced. Specifically, the removals will be:
   - If the counts for `min_elem` and `max_elem` are equal, then no removals are necessary.
   - Otherwise, we will need to remove either all occurrences of the minimum or all occurrences of the maximum, depending on which one is greater.

### C++ Code Implementation

Below is the C++ code that implements the above logic:

```cpp
#include <vector>
#include <algorithm>
#include <unordered_map>
#include <iostream>

class Solution {
public:
    int minimumRemovals(std::vector<int>& nums) {
        if (nums.empty()) return 0; // Base case if the array is empty
        
        int min_elem = *std::min_element(nums.begin(), nums.end());
        int max_elem = *std::max_element(nums.begin(), nums.end());
        
        if (min_elem == max_elem) return 0; // All elements are the same
        
        int min_count = std::count(nums.begin(), nums.end(), min_elem);
        int max_count = std::count(nums.begin(), nums.end(), max_elem);

        // Minimum removals to balance
        return nums.size() - std::max(min_count, max_count);
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {1, 2, 2, 3, 1, 3, 3};
    int result = solution.minimumRemovals(nums);
    std::cout << "Minimum removals to balance array: " << result << std::endl; // Output the result
    return 0;
}
```

### Explanation of the Code

1. **Headers**: We include necessary headers such as `<vector>`, `<algorithm>`, and `<unordered_map>` which will help us with collections and algorithms.

2. **Class and Method**: We create a `Solution` class that contains the `minimumRemovals` method, which takes a vector `nums`.

3. **Getting Min and Max**: We use `std::min_element` and `std::max_element` functions to get the minimum and maximum values in the array.

4. **Counting Occurrences**: We then count how many times these min and max values appear in the array using `std::count`.

5. **Compute Removals**: Finally, we calculate the number of removals needed to balance the array. This is done by taking the size of the original array and subtracting the maximum of the counts of the minimum and maximum values.

6. **Main Function**: In the `main` function, we test the code with an example array and print the result.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the number of elements in the array. This is due to the use of `min_element`, `max_element`, and `count` functions, all of which scan the array.
- **Space Complexity**: O(1), as we are not using any additional space dependent on the input size; we only use a few variables.

This explanation should provide a solid understanding of how to approach and solve the problem. If you have any further questions, feel free to ask!