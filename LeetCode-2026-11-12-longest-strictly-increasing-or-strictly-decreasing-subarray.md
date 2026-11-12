# LeetCode Daily – 2026-11-12

## 🧠 Problem #3105 – **Longest Strictly Increasing or Strictly Decreasing Subarray**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray)

---

### 📝 Problem Description

You are given an array of integers nums. Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing.

 
Example 1:


Input: nums = [1,4,3,3,2]

Output: 2

Explanation:

The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].

The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].

Hence, we return 2.


Example 2:


Input: nums = [3,3,3,3]

Output: 1

Explanation:

The strictly increasing subarrays of nums are [3], [3], [3], and [3].

The strictly decreasing subarrays of nums are [3], [3], [3], and [3].

Hence, we return 1.


Example 3:


Input: nums = [3,2,1]

Output: 3

Explanation:

The strictly increasing subarrays of nums are [3], [2], and [1].

The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

Hence, we return 3.


 
Constraints:


	1 <= nums.length <= 50
	1 <= nums[i] <= 50

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Longest Strictly Increasing or Strictly Decreasing Subarray" asks us to find the length of the longest contiguous subarray that is either strictly increasing or strictly decreasing within an array of integers. 

To tackle this problem, we can use a single pass through the array to track and update the lengths of potential increasing and decreasing subarrays. Let's break down the approach step by step:

### Approach:

1. **Initialization**: We will maintain some variables to track:
   - `longest`: The length of the longest strictly increasing or decreasing subarray found so far.
   - `currentLength`: The length of the current valid subarray being analyzed.
   - `direction`: An integer to indicate whether we are currently increasing or decreasing. We can set it to `0` initially, which indicates no direction.

2. **Iterate through the array**: Starting from the first element, we compare each element with the next one:
   - If the next element is greater than the current one, it indicates an increasing sequence:
     - If the direction is not already increasing, reset the `currentLength` to 2 (current and next), and set the `direction` to increasing (1).
     - If it is already increasing, simply increment the `currentLength`.
   - If the next element is less than the current one, it indicates a decreasing sequence:
     - If the direction is not already decreasing, reset the `currentLength` to 2 and set the `direction` to decreasing (-1).
     - If it is already decreasing, increment the `currentLength`.
   - If the next element is equal to the current one, we reset the `currentLength` to 1 (since a strictly increasing or decreasing sequence cannot include equal values).

3. **Update the longest length**: After each step, maintain the maximum length found so far.

4. **Return the longest length**: Finally, return the `longest` computed.

### Implementation:

Here’s how you can implement the above logic in C++:

```cpp
#include <vector>
#include <algorithm> // For max function
using namespace std;

class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        if (nums.empty()) return 0;

        int longest = 1; // Minimum length of subarray
        int currentLength = 1; // Start with the current length as 1
        int direction = 0; // 0: no direction, 1: increasing, -1: decreasing

        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] > nums[i - 1]) { // increasing
                if (direction != 1) { // a new increasing sequence starts
                    currentLength = 2; // Reset to 2
                    direction = 1;
                } else { // still increasing
                    currentLength++;
                }
            } 
            else if (nums[i] < nums[i - 1]) { // decreasing
                if (direction != -1) { // a new decreasing sequence starts
                    currentLength = 2; // Reset to 2
                    direction = -1;
                } else { // still decreasing
                    currentLength++;
                }
            } 
            else { // equal elements
                currentLength = 1; // Reset to 1 for equal values
                direction = 0; // No valid direction
            }

            longest = max(longest, currentLength); // Update longest length found
        }

        return longest; // Return the length of the longest subarray
    }
};
```

### Explanation of the Code:
- We start by checking if the input array is empty; if so, we return 0.
- We initialize `longest` to 1 because the minimum length of any valid subarray (even in the simplest case) is 1.
- We iterate through the array starting from the second element (`index 1`) and compare it with the previous element to determine if it's increasing, decreasing, or equal.
- We adjust `currentLength` based on the direction of the comparison, while also updating `longest` with the maximum length found.

This approach processes each element exactly once, giving us an O(n) time complexity, where n is the number of elements in the input array, and the space complexity is O(1), as we are using a constant amount of additional space.