# LeetCode Daily – 2026-07-27

## 🧠 Problem #1464 – **Maximum Product of Two Elements in an Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array)

---

### 📝 Problem Description

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 
Example 1:


Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 


Example 2:


Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.


Example 3:


Input: nums = [3,7]
Output: 12


 
Constraints:


	2 <= nums.length <= 500
	1 <= nums[i] <= 10^3

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem titled "Maximum Product of Two Elements in an Array". The goal is to find the maximum product of two elements from an array after adding 1 to each of those elements.

### Problem Statement:

Given an integer array `nums`, you need to:
1. Choose two distinct indices `i` and `j`.
2. Compute the product `(nums[i] + 1) * (nums[j] + 1)`.
3. Return the maximum product you can get.

### Example:

Input: `nums = [1, 5, 4, 5]`  
Output: `36`  
Explanation: The maximum product is `(5 + 1) * (5 + 1) = 6 * 6 = 36`.

### Approach:

1. **Find the Two Largest Elements:** 
   - The product will be maximized when you take the two largest unique elements in the array. Adding 1 to these elements ensures that their individual contributions to the product are maximized.
   
2. **Iterate Through the Array:**
   - As you explore the elements, keep track of the top two maximum values.

3. **Calculate the Maximum Product:** 
   - Once you have identified the two largest values, compute the product using the formula `(max1 + 1) * (max2 + 1)`.

### Complexity:
- **Time Complexity:** O(n), where n is the number of elements in the array, since we only make one pass through the array.
- **Space Complexity:** O(1), as we only use a few extra variables for bookkeeping.

### C++ Code Implementation:

Here's how you can implement this in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        // Initialize the two largest elements
        int max1 = 0, max2 = 0;
        
        // Iterate through the array to find the two largest numbers
        for (int num : nums) {
            if (num > max1) {
                max2 = max1; // update second largest
                max1 = num;  // update largest
            } else if (num > max2) {
                max2 = num;  // update second largest if num is less than max1
            }
        }
        
        // Calculate the maximum product
        return (max1 + 1) * (max2 + 1);
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> nums = {1, 5, 4, 5};
    cout << "Maximum Product: " << solution.maxProduct(nums) << endl; // Outputs: 36
    return 0;
}
```

### Explanation of the Code:

1. **Class Definition:**
   - We define a class `Solution` with a public method `maxProduct` which takes a vector of integers.

2. **Finding Two Largest Elements:**
   - We initialize `max1` and `max2` to zero.
   - We loop through each number in the `nums` vector.
   - If the current number is greater than `max1`, we update `max2` with the value of `max1` before updating `max1` with the current number. This ensures that `max1` always holds the largest number.
   - If the current number is not greater than `max1` but greater than `max2`, we update `max2`.

3. **Calculating and Returning the Result:**
   - Finally, we return the product of `(max1 + 1)` and `(max2 + 1)`.

This code effectively finds the maximum product of two elements added by one in the array, solving the problem efficiently.