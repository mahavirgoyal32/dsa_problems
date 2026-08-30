# LeetCode Daily – 2026-08-30

## 🧠 Problem #2091 – **Removing Minimum and Maximum From Array**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/removing-minimum-and-maximum-from-array)

---

### 📝 Problem Description

You are given a 0-indexed array of distinct integers nums.

There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

 
Example 1:


Input: nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation: 
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.


Example 2:


Input: nums = [0,-4,19,1,8,-2,-3,5]
Output: 3
Explanation: 
The minimum element in the array is nums[1], which is -4.
The maximum element in the array is nums[2], which is 19.
We can remove both the minimum and maximum by removing 3 elements from the front.
This results in only 3 deletions, which is the minimum number possible.


Example 3:


Input: nums = [101]
Output: 1
Explanation:  
There is only one element in the array, which makes it both the minimum and maximum element.
We can remove it with 1 deletion.


 
Constraints:


	1 <= nums.length <= 105
	-105 <= nums[i] <= 105
	The integers in nums are distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's tackle the problem of removing the minimum and maximum elements from an array, and then calculating the size of the new array that results after their removal. 

### Problem Explanation:

Given an integer array `nums`, we need to:

1. Remove the minimum element from the array.
2. Remove the maximum element from the array.
3. Return the length of the array after these two removals.

If the array has less than 3 elements, after removing the minimum and maximum, we are left with an empty array or an array with one element, which gives us a size of zero.

### Steps to Solve:

1. First, check if the length of the array is less than 3. If true, return 0, since removing both minimum and maximum will leave us with nothing or just one element.
2. If the length is at least 3, find the minimum and maximum values in the array.
3. Count how many times the minimum and maximum values appear in the array.
4. Calculate the final size by subtracting the counts of the minimum and maximum from the original size of the array.
5. Return the calculated size.

### C++ Code Implementation:

Here is one way to implement this solution in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int minimumRemoval(std::vector<int>& nums) {
        int n = nums.size();
        // If array has less than 3 elements, return 0
        if (n < 3) {
            return 0;
        }
        
        // Finding the minimum and maximum elements
        int minElem = *std::min_element(nums.begin(), nums.end());
        int maxElem = *std::max_element(nums.begin(), nums.end());
        
        // Count occurrences of min and max elements
        int countMin = std::count(nums.begin(), nums.end(), minElem);
        int countMax = std::count(nums.begin(), nums.end(), maxElem);
        
        // Calculate remaining size after removal
        return n - countMin - countMax;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    std::cout << "Remaining size: " << solution.minimumRemoval(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code:

1. **Input and Edge Case Handling**: We begin by defining the method `minimumRemoval` which takes a vector of integers. We check if the size of the vector (`n`) is less than 3, returning 0 if it is.
  
2. **Finding Min and Max**: We use `std::min_element` and `std::max_element` to find the minimum and maximum values in the array.

3. **Counting Occurrences**: We count how many times these min and max values appear in the array using `std::count`.

4. **Calculating Remaining Size**: We subtract the counts of min and max from the original size, `n`, to determine the remaining size of the array after removals.

5. **Return Value**: We return this size, which is printed in the `main` function.

This solution efficiently calculates the remaining size in O(n) time complexity by leveraging built-in functions for finding min and max, as well as counting occurrences, resulting in a clean and straightforward implementation.