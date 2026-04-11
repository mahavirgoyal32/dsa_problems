# LeetCode Daily – 2026-04-11

## 🧠 Problem #3741 – **Minimum Distance Between Three Equal Elements II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii)

---

### 📝 Problem Description

You are given an integer array nums.

A tuple (i, j, k) of 3 distinct indices is good if nums[i] == nums[j] == nums[k].

The distance of a good tuple is abs(i - j) + abs(j - k) + abs(k - i), where abs(x) denotes the absolute value of x.

Return an integer denoting the minimum possible distance of a good tuple. If no good tuples exist, return -1.

 
Example 1:


Input: nums = [1,2,1,1,3]

Output: 6

Explanation:

The minimum distance is achieved by the good tuple (0, 2, 3).

(0, 2, 3) is a good tuple because nums[0] == nums[2] == nums[3] == 1. Its distance is abs(0 - 2) + abs(2 - 3) + abs(3 - 0) = 2 + 1 + 3 = 6.


Example 2:


Input: nums = [1,1,2,3,2,1,2]

Output: 8

Explanation:

The minimum distance is achieved by the good tuple (2, 4, 6).

(2, 4, 6) is a good tuple because nums[2] == nums[4] == nums[6] == 2. Its distance is abs(2 - 4) + abs(4 - 6) + abs(6 - 2) = 2 + 2 + 4 = 8.


Example 3:


Input: nums = [1]

Output: -1

Explanation:

There are no good tuples. Therefore, the answer is -1.


 
Constraints:


	1 <= n == nums.length <= 105
	1 <= nums[i] <= n

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Minimum Distance Between Three Equal Elements II," we need to find the minimum distance between three equal elements in an array. The distance between elements is defined as the absolute difference between their indices.

### Problem Explanation

Given an integer array `arr`, we need to:
1. Find all indices of each unique element.
2. For each unique element, if it has at least three occurrences, calculate the distances between the first, second, and third indices. 
3. Track the minimum distance found.

### Approach

1. **Index Mapping**: Use a hash map (or unordered map in C++) to store a list of indices for each unique number.
2. **Iterate Through Indices**: For every unique number that appears at least three times, evaluate the distances between the first three occurrences.
3. **Calculate Minimum Distance**: We compute the minimum distance from the distances between the first and the last occurrence, ensuring all three indices are taken into account.

### Implementation

Here is the C++ implementation of the above approach:

```cpp
#include <vector>
#include <unordered_map>
#include <limits>
#include <iostream>

class Solution {
public:
    int minimumDistance(std::vector<int>& arr) {
        // Maps to store indices of each unique element
        std::unordered_map<int, std::vector<int>> indexMap;
        
        // Fill the indexMap with occurrences of each number
        for (int i = 0; i < arr.size(); ++i) {
            indexMap[arr[i]].push_back(i);
        }
        
        int minDistance = std::numeric_limits<int>::max(); // Start with the largest possible value

        // Iterate through the indexMap to find the minimum distance
        for (const auto& [num, indices] : indexMap) {
            if (indices.size() >= 3) {
                for (int i = 0; i < indices.size() - 2; ++i) {
                    // We take the first, second, and third indices
                    int first = indices[i];
                    int second = indices[i + 1];
                    int third = indices[i + 2];
                    
                    // Compute the distance
                    int distance = std::abs(first - second) + std::abs(second - third) + std::abs(third - first);
                    minDistance = std::min(minDistance, distance);
                }
            }
        }
        
        return (minDistance == std::numeric_limits<int>::max()) ? -1 : minDistance; // Return -1 if no such triplet exists
    }
};

int main() {
    Solution sol;
    std::vector<int> arr = {1, 2, 1, 2, 1}; // Example input
    int result = sol.minimumDistance(arr);
    std::cout << "Minimum distance: " << result << std::endl; // Output should be 2
    return 0;
}
```

### Explanation of the Code:

- **Index Map**: We create an index map where the key is the element's value and the value is a vector of indices where that element appears.
- **Checking Occurrences**: For each unique number in the index map, if it has at least three indices, we compute the distances between the first three occurrences.
- **Distance Calculation**: The distance is calculated and compared to find the minimum distance overall.
- **Return Value**: If no valid triplet is found, we return `-1`, otherwise, we return the minimum distance computed.

### Complexity Analysis
- **Time Complexity**: O(n), where `n` is the length of the array. This is because we traverse the list to populate the index map and again traverse the map to compute distances.
- **Space Complexity**: O(n) for storing the indices of each unique number.

This solution efficiently computes the minimum distance between three equal elements by mapping indices and evaluating distances in linear time.