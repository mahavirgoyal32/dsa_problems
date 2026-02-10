# LeetCode Daily – 2026-02-10

## 🧠 Problem #3719 – **Longest Balanced Subarray I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-balanced-subarray-i)

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


	1 <= nums.length <= 1500
	1 <= nums[i] <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the **Longest Balanced Subarray I** problem on LeetCode, we need to find the longest contiguous subarray that contains an equal number of `0`s and `1`s in a binary array (consisting of `0`s and `1`s).

### Explanation:

The approach to solve this problem can be summarized as follows:

1. **Transform the Array**: We can convert the binary array into a new array where `0` becomes `-1` and `1` remains `1`. This transformation allows us to reduce the problem of finding a balanced subarray (equal numbers of `0`s and `1`s) to finding a subarray with a sum of `0`.

2. **Use a HashMap for Prefix Sums**: As we iterate through the transformed array, we maintain a running sum (prefix sum). We keep track of each prefix sum's first occurrence using a hashmap. If we encounter the same prefix sum again, it means that the elements between the two occurrences sum to `0`, thereby forming a balanced subarray.

3. **Calculate Length of Balanced Subarray**: Whenever we see a previously recorded prefix sum, we can find the length of the subarray between those two indices and compare it with the maximum length found so far.

Here is the C++ implementation of this approach.

### C++ Implementation:

```cpp
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        // HashMap to store the first occurrence of each prefix sum
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1; // To handle the case for subarray that starts from index 0
        
        int maxLength = 0;
        int sum = 0;

        for (int i = 0; i < nums.size(); ++i) {
            // Treat 0 as -1 to find the balanced subarray
            sum += (nums[i] == 0) ? -1 : 1;

            // Check if this prefix sum is already in the map
            if (prefixMap.find(sum) != prefixMap.end()) {
                // If it exists, calculate the length of the subarray
                int length = i - prefixMap[sum];
                maxLength = max(maxLength, length);
            } else {
                // Record the first occurrence of this prefix sum
                prefixMap[sum] = i;
            }
        }

        return maxLength;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> nums = {0, 1, 0, 1, 0, 1, 1, 0};
    int result = solution.findMaxLength(nums);
    cout << "The length of the longest balanced subarray is: " << result << endl; // Output: 8
    return 0;
}
```

### Explanation of the Code:

1. **Initialization**:
   - We initialize a hashmap called `prefixMap` to store the first occurrence of each prefix sum, with `0` mapped to `-1` to handle the case where a balanced subarray starts from index `0`.
   - We also declare `maxLength` to store the maximum length found and `sum` to compute the running prefix sum.

2. **Iteration**:
   - We loop through each element in the `nums` array.
   - We update the `sum` based on the condition where `0` is treated as `-1`.
   - If this `sum` is found in `prefixMap`, it indicates that we have found a balanced subarray, and we calculate its length and update `maxLength` if this length is greater.

3. **Return Result**:
   - Finally, we return the `maxLength`, which represents the length of the longest balanced subarray.

This algorithm operates in linear time `O(n)` due to a single pass through the array and uses space `O(n)` for the hashmap in the worst case.