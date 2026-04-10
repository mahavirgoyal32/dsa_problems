# LeetCode Daily – 2026-04-10

## 🧠 Problem #3740 – **Minimum Distance Between Three Equal Elements I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i)

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


	1 <= n == nums.length <= 100
	1 <= nums[i] <= n

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The LeetCode problem "Minimum Distance Between Three Equal Elements I" requires us to find the minimum distance between three equal elements in a given array. If there are not three equal elements, we return -1. 

Let’s break down the solution step by step.

### Problem Explanation:
Given an array `arr`, we need to find indices of three occurrences of the same element and then calculate the distances between these occurrences. The minimum of these distances is the result we want to find.

### Steps to Solve the Problem:
1. **Store Indexes**: We need to track the last two occurrences of each element in the array using a hash map (`unordered_map` in C++) which maps an element to a vector of its indices.
  
2. **Calculate Distances**: As we store the indices, we can simultaneously calculate the distances when we have seen the third occurrence of any element.

3. **Return the Minimum Distance**: Finally, iterate through the stored indices and calculate the distances for elements which have three occurrences, then return the minimum distance found.

### C++ Implementation:
```cpp
#include <vector>
#include <unordered_map>
#include <limits> // For numeric_limits

using namespace std;

class Solution {
public:
    int minimumDistance(vector<int>& arr) {
        // map to store the indices of each element
        unordered_map<int, vector<int>> index_map;
        
        // Populate the map with indices of each element
        for (int i = 0; i < arr.size(); ++i) {
            index_map[arr[i]].push_back(i);
        }
        
        int min_distance = numeric_limits<int>::max(); // Start with max value
        // Iterate over each entry in the map
        for (const auto& entry : index_map) {
            if (entry.second.size() >= 3) { // We need at least 3 occurrences
                // Get the list of indices for the current element
                const vector<int>& indices = entry.second;
                // Calculate distance between the first and the last occurrence among the three
                int distance = indices[2] - indices[0]; // distance between 1st and 3rd occurrence
                min_distance = min(min_distance, distance); // update min_distance
            }
        }
        
        // If we never found a valid distance, return -1
        return min_distance == numeric_limits<int>::max() ? -1 : min_distance;
    }
};
```

### Explanation of the Code:
1. **Index Mapping**: We use an `unordered_map<int, vector<int>>` to map each integer from the array to its indices. As we traverse the array, we append the index of each occurrence to the corresponding vector.
   
2. **Distance Calculation**: After populating the map, for each integer with at least three occurrences, we compute the distance between the first occurrence and the third occurrence `(indices[2] - indices[0])`. This gives us the minimum distance we need since we only want the distance between the three indices.

3. **Result**: If we find at least one valid triplet, we return the minimum distance found; otherwise, we return `-1` if no valid triplet exists.

### Complexity Analysis:
- **Time Complexity**: O(n), where n is the number of elements in the array. We traverse the array once to fill in the map and then go through the unique elements to find distances.
  
- **Space Complexity**: O(n), in the worst case where all elements are unique and are stored in the map.

This solution efficiently finds the minimum distance between three equal elements in linear time and handles all edge cases, returning `-1` when necessary.