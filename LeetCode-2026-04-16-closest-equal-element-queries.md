# LeetCode Daily – 2026-04-16

## 🧠 Problem #3488 – **Closest Equal Element Queries**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/closest-equal-element-queries)

---

### 📝 Problem Description

You are given a circular array nums and an array queries.

For each query i, you have to find the following:


	The minimum distance between the element at index queries[i] and any other index j in the circular array, where nums[j] == nums[queries[i]]. If no such index exists, the answer for that query should be -1.


Return an array answer of the same size as queries, where answer[i] represents the result for query i.

 
Example 1:


Input: nums = [1,3,1,4,1,3,2], queries = [0,3,5]

Output: [2,-1,3]

Explanation:


	Query 0: The element at queries[0] = 0 is nums[0] = 1. The nearest index with the same value is 2, and the distance between them is 2.
	Query 1: The element at queries[1] = 3 is nums[3] = 4. No other index contains 4, so the result is -1.
	Query 2: The element at queries[2] = 5 is nums[5] = 3. The nearest index with the same value is 1, and the distance between them is 3 (following the circular path: 5 -> 6 -> 0 -> 1).



Example 2:


Input: nums = [1,2,3,4], queries = [0,1,2,3]

Output: [-1,-1,-1,-1]

Explanation:

Each value in nums is unique, so no index shares the same value as the queried element. This results in -1 for all queries.


 
Constraints:


	1 <= queries.length <= nums.length <= 105
	1 <= nums[i] <= 106
	0 <= queries[i] < nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Closest Equal Element Queries," we need to handle queries on an array for finding the closest equal element. The problem can be summarized as follows:

Given an array of integers `arr` and multiple queries, each defined by an index `index` and a value `value`, we need to find the closest index `j` such that `arr[j] == value` and `|j - index|` is minimized. If no such index exists, we should return `-1`.

### Approach

1. **Prepare for Queries**:
   - First, we can preprocess the given array. We will create a mapping from each distinct value in `arr` to the list of indices where it appears. This allows us to quickly access the indices of any value during query processing.

2. **Binary Search**:
   - For a given query, we will utilize binary search on the list of indices for the queried `value`. This allows us to quickly find the closest index to the queried `index`.

3. **Finding the Closest Index**:
   - Once we have the list of indices for the value from the mapping, we can use binary search to find the position where the queried `index` would fit in. We then check the closest indices around that position to find the desired result.

### Implementation

Here is the C++ implementation of the approach described:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
public:
    vector<int> closestNodes(vector<int>& arr, vector<vector<int>>& queries) {
        // Step 1: Map values to their indices
        unordered_map<int, vector<int>> valueToIndices;
        int n = arr.size();
        
        for (int i = 0; i < n; ++i) {
            valueToIndices[arr[i]].push_back(i);
        }
        
        vector<int> results;
        
        // Step 2: Process each query
        for (const auto& query : queries) {
            int index = query[0];
            int value = query[1];

            // Check if the value exists in the map
            if (valueToIndices.find(value) == valueToIndices.end()) {
                results.push_back(-1); // No such value
                continue;
            }

            auto& indices = valueToIndices[value];
            // Binary search to find the closest index
            int closestIndex = -1;
            int pos = lower_bound(indices.begin(), indices.end(), index) - indices.begin();
            
            // Check the found position and the one before it
            if (pos < indices.size()) {
                int j = indices[pos];
                if (closestIndex == -1 || abs(j - index) < abs(closestIndex - index)) {
                    closestIndex = j;
                }
            }
            if (pos > 0) {
                int j = indices[pos - 1];
                if (closestIndex == -1 || abs(j - index) < abs(closestIndex - index)) {
                    closestIndex = j;
                }
            }
            
            // Add the result for the current query
            results.push_back(closestIndex);
        }
        
        return results;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> arr = {1, 2, 1, 2, 1, 2};
    vector<vector<int>> queries = {{0, 2}, {2, 1}, {1, 3}};
    
    vector<int> results = solution.closestNodes(arr, queries);
    for (int res : results) {
        cout << res << " ";
    }
    return 0;
}
```

### Explanation of the Code

1. **Mapping Values to Indices**:
   - `unordered_map<int, vector<int>> valueToIndices` maps each unique value to a vector containing all the indices in `arr` where that value appears.
  
2. **Handling Queries**:
   - For each query, we first check if the value exists in our map. If it doesn't, we return `-1`.
   - If it exists, we use `lower_bound` to find where the current index would fit in the sorted list of indices for the given value. This returns an iterator to the first element that is not less than the specified value.

3. **Checking Neighbors**:
   - We check the index found and the one before it (if it exists) to find the closest index that satisfies the query conditions.
  
4. **Returning Results**:
   - After processing all queries, we return a vector containing the results.

This solution is efficient and uses preprocessing and binary search techniques to handle potentially multiple queries effectively.