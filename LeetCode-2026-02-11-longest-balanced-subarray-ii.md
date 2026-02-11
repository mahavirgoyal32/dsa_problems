# LeetCode Daily – 2026-02-11

## 🧠 Problem #3721 – **Longest Balanced Subarray II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-balanced-subarray-ii)

---

### 📝 Problem Description

You are given an integer array nums.

A subarray is called balanced if the number of distinct even numbers in the subarray is equal to the number of distinct odd numbers.

Return the length of the longest balanced subarray.

 
Example 1:


Input: nums = [2,5,4,3]

Output: 4

Explanation:


	The longest balanced subarray is [2, 5, 4, 3].
	It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3]. Thus, the answer is 4.



Example 2:


Input: nums = [3,2,2,5,4]

Output: 5

Explanation:


	The longest balanced subarray is [3, 2, 2, 5, 4].
	It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [3, 5]. Thus, the answer is 5.



Example 3:


Input: nums = [1,2,3,2]

Output: 3

Explanation:


	The longest balanced subarray is [2, 3, 2].
	It has 1 distinct even number [2] and 1 distinct odd number [3]. Thus, the answer is 3.



 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's tackle the problem titled "Longest Balanced Subarray II" from LeetCode.

### Problem Explanation:
The task is to find the length of the longest contiguous subarray such that the number of even integers equals the number of odd integers. We will work with a list of integers which can be either odd or even.

### Insights:
1. **Identifying Even and Odd**: For any integer in the list, it can either be even or odd. By transforming the array into binary form (0 for even and 1 for odd), our problem reduces to finding the longest subarray where the sum equals zero (the number of 1's should equal the number of 0's).
  
2. **Subarray Sum Approach**: We can maintain a running sum and a hashmap to track the first occurrence of each sum. The idea is to use the running sum to calculate the balance between even and odd integers as we traverse the list.

3. **HashMap for First Occurrences**: If we encounter the same sum again, it means the subarray between the two indices has an equal number of evens and odds.

### C++ Solution:
Here is the implementation of this approach in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

class Solution {
public:
    int longestBalancedSubarray(std::vector<int>& nums) {
        std::unordered_map<int, int> map; // Sum to index map
        map[0] = -1; // To handle the case when the sum equals 0 from the start
        int maxLength = 0; // Variable to store the maximum length
        int currentSum = 0; // Running sum
        
        for (int i = 0; i < nums.size(); i++) {
            // Increment current sum based on whether the number is odd or even
            currentSum += (nums[i] % 2 == 0) ? -1 : 1; // -1 for even, +1 for odd
            
            // Check if currentSum has been seen before
            if (map.find(currentSum) != map.end()) {
                int length = i - map[currentSum]; // Current length of the balanced subarray
                maxLength = std::max(maxLength, length); // Update the maximum length
            } else {
                // Store the first occurrence of this sum
                map[currentSum] = i;
            }
        }
        
        return maxLength;
    }
};

// Example usage:
int main() {
    Solution sol;
    std::vector<int> nums = {1, 2, 3, 4, 5, 6}; // Example input
    int result = sol.longestBalancedSubarray(nums);
    std::cout << "Length of the longest balanced subarray: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code:
1. **Initialization**: We use an unordered map `map` to record the first index where each running sum occurs. We start by initializing the map with `{0: -1}` to handle cases where the subarray starting from index 0 is balanced.

2. **Loop Through the Array**: For each integer in `nums`, we update the current sum:
   - If it's even, we subtract 1 from the sum.
   - If it's odd, we add 1 to the sum.

3. **Checking for Previous Sums**: After updating the current sum:
   - We check if this sum has appeared before using the hashmap.
   - If it has, it means that we found a balanced subarray between the previous index and the current index.
   - We calculate the length of this subarray and update `maxLength` accordingly.

4. **Storing First Occurrence**: If the current sum has not been seen before, we store its index.

5. **Return Result**: Finally, we return the maximum length found.

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the number of elements in the input array since we traverse it once.
- **Space Complexity**: O(n), because in the worst case, we may store all n sums in the hashmap.

This solution efficiently finds the longest balanced subarray with a balance of even and odd integers.