# LeetCode Daily – 2026-01-26

## 🧠 Problem #1200 – **Minimum Absolute Difference**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-absolute-difference)

---

### 📝 Problem Description

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows


	a, b are from arr
	a < b
	b - a equals to the minimum absolute difference of any two elements in arr


 
Example 1:


Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:


Input: arr = [1,3,6,10,15]
Output: [[1,3]]


Example 3:


Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]


 
Constraints:


	2 <= arr.length <= 105
	-106 <= arr[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the "Minimum Absolute Difference" problem from LeetCode. The problem statement is as follows:

### Problem Statement:
Given an array of integers `arr`, return the minimum absolute difference between any two elements in the array. The absolute difference between two elements `a` and `b` is defined as `|a - b|`.

### Example:
Input: `arr = [4, 1, 8, 3]`  
Output: `1`  
Explanation: The minimum absolute difference is between 8 and 7.

### Approach to Solve the Problem:
1. **Sort the Array**: The first step is to sort the given array. Sorting the array will bring similar numbers closer to each other, making it easier to find the minimum absolute differences.

2. **Calculate Differences**: After sorting, we can iterate through the array and calculate the absolute differences between adjacent elements. Since the array is sorted, the absolute difference between two adjacent elements will yield the minimum difference for that range.

3. **Track the Minimum**: As we calculate the differences, we keep track of the minimum difference found.

### Complexity:
- **Time Complexity**: `O(n log n)` due to the sorting step, where `n` is the number of elements in the input array.
- **Space Complexity**: `O(1)` if we consider the space used by input only, as we can sort it in place.

### C++ Implementation:
Here is how you can implement this solution in C++:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

class Solution {
public:
    int minimumAbsDifference(std::vector<int>& arr) {
        // Sort the array first
        std::sort(arr.begin(), arr.end());
        
        // Variable to hold the minimum difference
        int min_diff = INT_MAX;
        // Vector to hold the pairs with minimum difference
        std::vector<std::pair<int, int>> result;
        
        // Iterate through the sorted array
        for (size_t i = 1; i < arr.size(); ++i) {
            // Calculate the absolute difference between current and previous element
            int diff = arr[i] - arr[i - 1];
            // If this difference is less than the current minimum difference
            if (diff < min_diff) {
                // Update minimum difference
                min_diff = diff;
                // Clear previous pairs and add the new pair
                result.clear();
                result.push_back({arr[i - 1], arr[i]});
            } else if (diff == min_diff) {
                // If it's equal to the minimum difference, add the pair to results
                result.push_back({arr[i - 1], arr[i]});
            }
        }
        
        // Print the pairs if needed
        for (const auto& pair : result) {
            std::cout << "(" << pair.first << ", " << pair.second << ")\n";
        }
        
        // Return the minimum absolute difference
        return min_diff;
    }
};

int main() {
    Solution solution;
    std::vector<int> arr = {4, 1, 8, 3};
    int result = solution.minimumAbsDifference(arr);
    std::cout << "Minimum Absolute Difference: " << result << std::endl; // Output: 1
    return 0;
}
```

### Explanation of the Code:
1. We include necessary headers for using vectors, algorithms, and common functions.
  
2. We define the `Solution` class with the method `minimumAbsDifference`, which takes a reference to a vector of integers.

3. Inside the method:
   - We sort the array using `std::sort`.
   - We initialize `min_diff` to `INT_MAX` to hold the minimum difference found.
   - We declare a `result` vector to store pairs of numbers with the minimum difference.
   - We loop through the sorted array starting from index 1 to compare each element with its previous element, calculating the difference.
   - If we find a new minimum difference, we clear the previous results and store the new pair. If we find another pair with the same minimum difference, we add it to the results.

4. At the end, we print the pairs (this part can be omitted if you only need to return the minimum difference), and return the `min_diff`.

This implementation should cover the problem effectively and efficiently.