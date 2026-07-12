# LeetCode Daily – 2026-07-12

## 🧠 Problem #1331 – **Rank Transform of an Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/rank-transform-of-an-array)

---

### 📝 Problem Description

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:


	Rank is an integer starting from 1.
	The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
	Rank should be as small as possible.


 
Example 1:


Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

Example 2:


Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.


Example 3:


Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]


 
Constraints:


	0 <= arr.length <= 105
	-109 <= arr[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Rank Transform of an Array" is a straightforward problem where we need to transform the input array into a rank-based array. Each unique element in the given array will be replaced with its rank, which is the 1-based index of that element in the sorted list of unique elements.

Here's how we can solve the problem step by step:

### Problem Breakdown
1. **Identify Unique Elements**: First, we need to find all the unique elements in the array.
2. **Sort Unique Elements**: Next, we sort these unique elements to determine their ranks.
3. **Map Ranks**: We will then create a mapping from each unique element to its rank.
4. **Transform the Original Array**: Finally, we will replace each element in the original array with its corresponding rank using the mapping we created.

### C++ Code Implementation
Here's the C++ solution to the problem:

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    std::vector<int> arrayRankTransform(std::vector<int>& arr) {
        // Step 1: Create a sorted version of the unique elements
        std::vector<int> uniqueArr(arr.begin(), arr.end());
        std::sort(uniqueArr.begin(), uniqueArr.end());
        uniqueArr.erase(std::unique(uniqueArr.begin(), uniqueArr.end()), uniqueArr.end());

        // Step 2: Create a map to store the rank of each unique element
        std::unordered_map<int, int> rankMap;
        for (int i = 0; i < uniqueArr.size(); ++i) {
            rankMap[uniqueArr[i]] = i + 1; // Rank is 1-based
        }

        // Step 3: Transform the original array using the rank map
        for (int i = 0; i < arr.size(); ++i) {
            arr[i] = rankMap[arr[i]];
        }

        return arr;
    }
};
```

### Explanation of the Code
1. **Creating Unique Elements**:
   - We copy the original array into another vector `uniqueArr` to manipulate and store unique elements.
   - We then sort `uniqueArr`. After sorting, we use the `std::unique` function, which removes consecutive duplicate elements, effectively giving us only unique values.
   
2. **Mapping Ranks**:
   - We create an `unordered_map<int, int>` called `rankMap`. This map will associate each unique value with its corresponding rank (1-based).
   - We loop through the `uniqueArr`, assigning the rank (`i + 1` because we want a 1-based index) to each unique element in the map.

3. **Transforming the Original Array**:
   - Finally, we iterate over the original array again, and for each element, we replace it with its corresponding rank from the `rankMap`.

### Complexity Analysis
- **Time Complexity**: The time complexity is \( O(N \log N) \) due to sorting, and the other operations (adding to the map, and transforming the original array) are \( O(N) \). So overall, it is dominated by the sorting step, resulting in \( O(N \log N) \).
  
- **Space Complexity**: The space complexity is \( O(N) \) as we store unique elements and use a map for ranks.

This solution efficiently solves the problem using a clear strategy of sorting and mapping, making it easy to understand and implement.