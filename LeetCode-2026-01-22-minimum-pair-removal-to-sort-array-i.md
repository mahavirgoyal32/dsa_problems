# LeetCode Daily – 2026-01-22

## 🧠 Problem #3507 – **Minimum Pair Removal to Sort Array I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i)

---

### 📝 Problem Description

Given an array nums, you can perform the following operation any number of times:


	Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
	Replace the pair with their sum.


Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

 
Example 1:


Input: nums = [5,2,3,1]

Output: 2

Explanation:


	The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
	The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].


The array nums became non-decreasing in two operations.


Example 2:


Input: nums = [1,2,2]

Output: 0

Explanation:

The array nums is already sorted.


 
Constraints:


	1 <= nums.length <= 50
	-1000 <= nums[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the problem "Minimum Pair Removal to Sort Array I" step by step and provide a C++ solution along with an explanation.

### Problem Explanation

You are given an array of integers, and the goal is to determine the minimum number of pairs you need to remove so that the remaining elements can be sorted in non-decreasing order. A pair consists of two elements that can be removed together.

### Key Observations

1. **Pairs of Values**: If you group elements by their frequencies, you can figure out which values can be paired.
  
2. **Sorting Necessity**: To achieve a non-decreasing order, the array must have all occurrences of a number together. Thus, after counting the frequencies, any number that has an odd count will need to have at least one of its occurrences removed to make it even.

3. **Number of Removals**: Given the counts of each unique number:
   - If a number appears an even number of times, all can be kept.
   - If a number appears an odd number of times, one has to be removed to make them even.

### Plan

The steps to solve this problem are as follows:
1. Count the frequency of each unique number in the array.
2. Calculate how many numbers need to be removed to ensure that all remaining counts are even.
3. The answer will be the sum of odd counts divided by 2 (because each removal affects pairs).

### C++ Solution

Here's how you can implement the above logic in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int minPairRemovals(vector<int>& nums) {
        unordered_map<int, int> frequency;
        
        // Count the frequency of each number
        for(int num : nums) {
            frequency[num]++;
        }
        
        int removals = 0;
        
        // Check the frequency of each number
        for(const auto& pair : frequency) {
            if(pair.second % 2 != 0) {
                removals++; // We need to remove one instance to make it even
            }
        }
        
        // Each removal affects a pair, so we can only remove pairs (removals / 2)
        return removals; // As each removal is considered a removal of a number of a pair
    }
};

int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3, 4, 5};
    cout << solution.minPairRemovals(nums) << endl; // Example usage
    return 0;
}
```

### Explanation of the Code

1. **Frequency Map**: We use `unordered_map` to count how many times each number appears.
  
2. **Count Removals**: We iterate through our frequency map to check how many numbers have an odd count. Each odd count requires one removal to make it even.

3. **Return Result**: We simply return the total count of numbers that needed to be "paired" and removed.

### Complexity Analysis
- **Time Complexity**: O(n), where n is the number of elements in the array since we only traverse the array once to count frequencies and once more to check them.
- **Space Complexity**: O(u), where u is the number of unique numbers in the array, due to the space taken by the frequency map.

This solution is efficient and follows logically from the problem's requirements. Each step leads directly to the answer in a clear manner.