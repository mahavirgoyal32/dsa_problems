# LeetCode Daily – 2026-10-11

## 🧠 Problem #2778 – **Sum of Squares of Special Elements **
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sum-of-squares-of-special-elements)

---

### 📝 Problem Description

You are given a 1-indexed integer array nums of length n.

An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

Return the sum of the squares of all special elements of nums.

 
Example 1:


Input: nums = [1,2,3,4]
Output: 21
Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4. 
Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.  


Example 2:


Input: nums = [2,7,1,19,18,3]
Output: 63
Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6. 
Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63. 


 
Constraints:


	1 <= nums.length == n <= 50
	1 <= nums[i] <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's take a look at the LeetCode problem titled "Sum of Squares of Special Elements". 

**Problem Description:**
The problem can be summarized as follows: Given a 1-indexed integer array `nums`, you need to identify elements that are "special". An element at index `i` in the array is considered special if it is greater than the square of its index. Your task is to return the sum of the squares of all special elements.

### Steps to Approach:

1. **Iterate through the Array**: We will loop through the array using 1-based indexing.
2. **Identify Special Elements**: For each element `nums[i]`, we will check if it is greater than `i * i` (the square of the index).
3. **Sum the Squares**: If the element is special, we will add the square of the element `nums[i]` to our sum.
4. **Return the Result**: Finally, return the computed sum.

### Example Walkthrough:
For an input array `nums = [1, 2, 3, 4]`:
- Index 1, Element 1: `1 > 1*1?` No, not special.
- Index 2, Element 2: `2 > 2*2?` No, not special.
- Index 3, Element 3: `3 > 3*3?` No, not special.
- Index 4, Element 4: `4 > 4*4?` No, not special.

Result would be 0 since there are no special elements. 

### C++ Implementation:
Here is the C++ code to solve the problem:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int sumOfSquares(vector<int>& nums) {
        int sum = 0; // To hold the sum of squares
        // Traverse the array with 1-based indexing
        for (int i = 1; i <= nums.size(); i++) {
            // Check if current element is special
            if (nums[i - 1] > i * i) {
                sum += nums[i - 1] * nums[i - 1]; // Add square of the element to sum
            }
        }
        return sum; // Return the total sum of squares
    }
};
```

### Explanation of the Code:
- We define a class named `Solution` with a public method `sumOfSquares`.
- We initialize a variable `sum` to 0. This will accumulate the sum of squares of special elements.
- We use a `for` loop that goes from `1` to the size of the array (`nums.size()`). The loop index `i` represents the 1-based index.
- Inside the loop, we check if the current element `nums[i - 1]` (since `nums` is 0-indexed in C++) is greater than `i * i`.
- If the condition is true, we calculate the square of `nums[i - 1]` and add it to `sum`.
- Finally, we return the computed `sum`.

This yields the required result in a straightforward manner with a time complexity of O(n), where n is the number of elements in the array.

### Conclusion:
This solution efficiently computes the sum of squares of special elements with minimal complexity and is straightforward to understand.