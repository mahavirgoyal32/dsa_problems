# LeetCode Daily – 2025-11-19

## 🧠 Problem #2154 – **Keep Multiplying Found Values by Two**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/keep-multiplying-found-values-by-two)

---

### 📝 Problem Description

You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:


	If original is found in nums, multiply it by two (i.e., set original = 2 * original).
	Otherwise, stop the process.
	Repeat this process with the new number as long as you keep finding the number.


Return the final value of original.

 
Example 1:


Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.


Example 2:


Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.


 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i], original <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem and provide a solution in C++.

### Problem Description

The task is to create a function that takes an array of integers `A` and an integer `initial_value`. The function should iterate through the array, and whenever it finds an integer that matches `initial_value`, it should multiply this value by 2. After finding the matching value, we need to update `initial_value` to this new value and continue looking for the next match. Finally, we return the modified `initial_value`.

### Example

For example, given the array `A = [1, 2, 3, 4, 2]` and `initial_value = 2`, the algorithm will:
- Find the first `2` in `A`, multiply it by `2` (resulting in `4`), and update `initial_value` to `4`.
- Next, it will not find the new `initial_value` (which is `4`) in the array.
- Thus, the final result will be `4`.

### Approach

1. Initialize `current_value` with `initial_value`.
2. Loop through each element of the array.
3. If an element matches `current_value`, multiply it by 2 and update `current_value`.
4. Return `current_value` after the loop.

### C++ Code Implementation

Here’s the C++ code for the described solution:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int findFinalValue(vector<int>& A, int initialValue) {
        int currentValue = initialValue;

        for (int num : A) {
            // Check if the current number in the array matches the currentValue
            if (num == currentValue) {
                // Multiply currentValue by 2 if a match is found
                currentValue *= 2;
            }
        }

        return currentValue; // Return the final updated value
    }
};
```

### Explanation of the Code

1. **Include Libraries**: We include the necessary library for vector manipulation.
2. **Class Definition**: The solution is encapsulated within a `Solution` class, as required by LeetCode.
3. **Method Declaration**: The method `findFinalValue` takes a vector of integers `A` and an integer `initialValue`.
4. **Initialization**: We initialize `currentValue` with `initialValue` to track the current matching number.
5. **Loop Through Array**: We iterate through each number `num` in the input array `A`:
   - If `num` equals `currentValue`, it means we have found a match, so we double `currentValue`.
6. **Return Result**: After processing all elements in `A`, we return `currentValue`, which reflects the updates based on the matches found in the array.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the length of the array A. We need to traverse the array at most once.
- **Space Complexity**: O(1), we are using only a constant amount of space for variables.

This implementation is efficient and straightforward, handling the given problem as described.