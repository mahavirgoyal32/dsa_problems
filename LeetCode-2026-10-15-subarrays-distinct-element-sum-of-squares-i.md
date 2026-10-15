# LeetCode Daily – 2026-10-15

## 🧠 Problem #2913 – **Subarrays Distinct Element Sum of Squares I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i)

---

### 📝 Problem Description

You are given a 0-indexed integer array nums.

The distinct count of a subarray of nums is defined as:


	Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].


Return the sum of the squares of distinct counts of all subarrays of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

 
Example 1:


Input: nums = [1,2,1]
Output: 15
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.


Example 2:


Input: nums = [1,1]
Output: 3
Explanation: Three possible subarrays are:
[1]: 1 distinct value
[1]: 1 distinct value
[1,1]: 1 distinct value
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 = 3.

 
Constraints:


	1 <= nums.length <= 100
	1 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Subarrays Distinct Element Sum of Squares I" on LeetCode requires calculating the sum of squares of counts of distinct elements in all possible subarrays of a given integer array. Here's a breakdown of how to approach solving this problem, along with the C++ implementation.

## Explanation

To solve this problem, we can take the following steps:

1. **Understanding Subarrays**: For each possible subarray, we need to gather the elements and determine the count of distinct elements. The sum of squares of these counts will be added to a total sum.

2. **Using a Sliding Window (or Two-Pointer Technique)**: Instead of generating every possible subarray explicitly (which can be inefficient), we can maintain a sliding window that expands or contracts based on the elements being added or removed:

   - Start with two pointers, `i` and `j`, representing the start and end of the current subarray.
   - Use a HashMap (unordered_map in C++) to keep counts of each integer in the current subarray.
   - Expand the `j` pointer to include new elements, updating the count of distinct elements.
   - For each position of `j`, calculate the square of distinct elements and add it to the result.

3. **Implementation**: This method combines the use of the HashMap to maintain counts of distinct elements and accumulates the results as we iterate over the array.

### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    long long distinctElementSumOfSquares(vector<int>& nums) {
        long long totalSum = 0;
        int n = nums.size();
        
        for (int i = 0; i < n; ++i) {
            unordered_map<int, int> countMap; // To store counts of elements in the current subarray
            int distinctCount = 0; // To track the number of distinct elements
            
            for (int j = i; j < n; ++j) {
                // Include nums[j] in the current subarray
                if (countMap[nums[j]] == 0) {
                    distinctCount++; // New distinct element
                }
                countMap[nums[j]]++;
                
                // Calculate the square of distinct count and add it to the total sum
                totalSum += distinctCount * distinctCount;
            }
        }
        
        return totalSum;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {1, 2, 1};
    long long result = sol.distinctElementSumOfSquares(nums);
    cout << "Sum of Squares of Distinct Elements in Subarrays: " << result << endl;
    return 0;
}
```

### Explanation of the Code

1. **Initialization**: We define a long long variable `totalSum` to hold the result and get the size of the input array `n`.

2. **Outer Loop (i)**: This loop iterates through each element of the array, where `i` is the starting index of the subarray.

3. **Inner Loop (j)**: This loop extends the subarray from the start index `i` to the end of the array:
   - `countMap` tracks the number of each element in the current subarray.
   - `distinctCount` keeps the count of unique elements.

4. **Updating Counts**: Each time we include a new element from the array, we update the count in `countMap`:
   - If the count of that element was 0 (implying it's distinct), we increase `distinctCount`.

5. **Calculating and Storing the Result**: For each valid end index `j`, we compute the square of `distinctCount` and add that to `totalSum`.

6. **Return the Result**: The method returns the final sum representing the sum of squares of distinct elements in all subarrays.

This solution maintains a complexity of \(O(n^2)\) in the worst case due to the nested loops, which is manageable for moderate sizes of `n`.