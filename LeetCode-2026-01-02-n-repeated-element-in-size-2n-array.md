# LeetCode Daily – 2026-01-02

## 🧠 Problem #961 – **N-Repeated Element in Size 2N Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/n-repeated-element-in-size-2n-array)

---

### 📝 Problem Description

You are given an integer array nums with the following properties:


	nums.length == 2 * n.
	nums contains n + 1 unique elements.
	Exactly one element of nums is repeated n times.


Return the element that is repeated n times.

 
Example 1:
Input: nums = [1,2,3,3]
Output: 3
Example 2:
Input: nums = [2,1,2,5,3,2]
Output: 2
Example 3:
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5

 
Constraints:


	2 <= n <= 5000
	nums.length == 2 * n
	0 <= nums[i] <= 104
	nums contains n + 1 unique elements and one of them is repeated exactly n times.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem titled "N-Repeated Element in Size 2N Array." 

### Problem Overview
In this problem, you're given an integer array `A` of size `2N`, where `N` is a positive integer. The array consists of `N` elements repeated twice. Your task is to find the element that appears `N` times in the array.

### Example
For instance:
- Input: `A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2]`
- Output: `2`

### Approach
The simplest approach to solve this problem is to use a hash map (or unordered_map in C++) to count the occurrences of each element in the array `A`. Since we know that one of the elements appears exactly `N` times and all others appear either `1` or `2` times, we can simply check the counts.

### C++ Code
Below is a C++ implementation of the proposed solution:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>

class Solution {
public:
    int repeatedNTimes(std::vector<int>& A) {
        std::unordered_map<int, int> countMap;

        // Count occurrences of each element
        for (int num : A) {
            countMap[num]++;
        }
        
        // Find the element that has N occurrences
        for (const auto& pair : countMap) {
            if (pair.second == A.size() / 2) {
                return pair.first;
            }
        }
        
        return -1; // This should never be reached given problem constraints
    }
};

int main() {
    Solution solution;
    std::vector<int> A = {1, 2, 3, 4, 5, 6, 2, 2};
    std::cout << "The repeated element is: " << solution.repeatedNTimes(A) << std::endl;
    return 0;
}
```

### Explanation of the Code
1. **Data Structure**: We use `unordered_map<int, int> countMap` to store the count of each element.
  
2. **Counting Elements**:
   - We iterate through the given array `A` using a range-based for loop. For each element, we increase its count in the map.
   
3. **Finding the N-Repeated Element**:
   - After populating the map, we iterate through the map entries to check the counts.
   - As soon as we find an element that has a count equal to `N` (which is half the size of the array, i.e., `A.size() / 2`), we return that element.

4. **Main Function**: In the `main` function, an example vector is defined, and we call the method `repeatedNTimes` to find and print the repeated element.

### Complexity Analysis
- **Time Complexity**: O(N), where N is the size of the input array. We traverse the array to populate the map and then traverse the map to find the repeated element.
- **Space Complexity**: O(N), in the worst case, if all elements were unique (which they can't be according to the problem constraints).

This approach is efficient and directly solves the problem with clarity.