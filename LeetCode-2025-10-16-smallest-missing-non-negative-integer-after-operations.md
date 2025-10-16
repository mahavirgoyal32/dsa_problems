# LeetCode Daily – 2025-10-16

## 🧠 Problem #2598 – **Smallest Missing Non-negative Integer After Operations**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums and an integer value.

In one operation, you can add or subtract value from any element of nums.


	For example, if nums = [1,2,3] and value = 2, you can choose to subtract value from nums[0] to make nums = [-1,2,3].


The MEX (minimum excluded) of an array is the smallest missing non-negative integer in it.


	For example, the MEX of [-1,2,3] is 0 while the MEX of [1,0,3] is 2.


Return the maximum MEX of nums after applying the mentioned operation any number of times.

 
Example 1:


Input: nums = [1,-10,7,13,6,8], value = 5
Output: 4
Explanation: One can achieve this result by applying the following operations:
- Add value to nums[1] twice to make nums = [1,0,7,13,6,8]
- Subtract value from nums[2] once to make nums = [1,0,2,13,6,8]
- Subtract value from nums[3] twice to make nums = [1,0,2,3,6,8]
The MEX of nums is 4. It can be shown that 4 is the maximum MEX we can achieve.


Example 2:


Input: nums = [1,-10,7,13,6,8], value = 7
Output: 2
Explanation: One can achieve this result by applying the following operation:
- subtract value from nums[2] once to make nums = [1,-10,0,13,6,8]
The MEX of nums is 2. It can be shown that 2 is the maximum MEX we can achieve.


 
Constraints:


	1 <= nums.length, value <= 105
	-109 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the smallest missing non-negative integer after applying operations, we need to analyze the operations and understand how they affect the possible values in the array.

### Problem Breakdown:
1. **Understanding Operations**:
   - We can perform an operation on any pair `(i, j)` where `i != j`. The operation transforms the values of the array as follows:
     - `A[i] -= 1`
     - `A[j] += 1`
   - The result of these operations potentially allows us to adjust the values in such a way that we can create a range of consecutive integers.

2. **Goal**:
   - The goal is to find the smallest non-negative integer that cannot be expressed using the values in the array after performing the operations.

3. **Key Insight**:
   - The method of pairing indices to adjust values means that we can effectively "spread" the values in the array. For any value in the array, we can increase or decrease it as needed, but the total sum of the array remains constant. Thus, if we manage to organize our values, we can cover a large range with the available integers.

### Steps to Solve:
1. **Determine the maximum possible value**: The maximum value you can reach is limited by the total sum of the original array.
2. **Use a set to track possible integers**: After applying the operations, we need to track which non-negative integers can be obtained.
3. **Iterate and find the smallest missing integer**: Finally, check each integer starting from `0` to find the first one that is missing.

### C++ Implementation:

Here's how we can implement this logic:

```cpp
#include <vector>
#include <unordered_set>
#include <algorithm>

class Solution {
public:
    int findSmallestInteger(std::vector<int>& A) {
        // Create a set to store available numbers
        std::unordered_set<int> st;
        
        // Populate the set with non-negative integers from the array
        for (int num : A) {
            if (num >= 0)
                st.insert(num);
        }
        
        // Calculate the total sum of the array
        long long totalSum = 0;
        for (int num : A) {
            totalSum += num;
        }
        
        // We can now find the smallest missing non-negative integer
        int missingInt = 0;
        while (st.count(missingInt) > 0 || missingInt <= totalSum) {
            ++missingInt;
        }
        
        return missingInt;
    }
};
```

### Explanation of the Code:
1. **Set Creation**: We create a hash set to store all non-negative integers present in the array. This allows for O(1) lookup time when checking for missing integers.
   
2. **Total Sum Calculation**: We compute the total sum of the integers in the array, which gives us an upper limit for checking possibles integers.
   
3. **Finding the Smallest Missing Integer**: We start from `0` and keep incrementing until we find the first integer that is not in the set or is greater than the sum. 

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the length of the array. We traverse the array twice – once to populate the set and another time to find the missing integer.
- **Space Complexity**: O(n) in the worst case, if all elements are unique non-negative integers.

This solution is efficient and straightforward, leveraging a hash set to track existences, leading to a quick determination of the smallest missing integer.