# LeetCode Daily – 2026-06-27

## 🧠 Problem #3020 – **Find the Maximum Number of Elements in Subset**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset)

---

### 📝 Problem Description

You are given an array of positive integers nums.

You need to select a subset of nums which satisfies the following condition:


	You can place the selected elements in a 0-indexed array such that it follows the pattern: [x, x2, x4, ..., xk/2, xk, xk/2, ..., x4, x2, x] (Note that k can be be any non-negative power of 2). For example, [2, 4, 16, 4, 2] and [3, 9, 3] follow the pattern while [2, 4, 8, 4, 2] does not.


Return the maximum number of elements in a subset that satisfies these conditions.

 
Example 1:


Input: nums = [5,4,1,2,2]
Output: 3
Explanation: We can select the subset {4,2,2}, which can be placed in the array as [2,4,2] which follows the pattern and 22 == 4. Hence the answer is 3.


Example 2:


Input: nums = [1,3,2,4]
Output: 1
Explanation: We can select the subset {1}, which can be placed in the array as [1] which follows the pattern. Hence the answer is 1. Note that we could have also selected the subsets {2}, {3}, or {4}, there may be multiple subsets which provide the same answer. 


 
Constraints:


	2 <= nums.length <= 105
	1 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Find the Maximum Number of Elements in Subset" can be summarized as follows: Given an array of integers representing the score of elements, determine the maximum number of elements that can be included in a subset such that the sum of the integers does not exceed a certain value (`limit`).

To solve this problem, a greedy approach can be utilized:

1. **Sort the Scores**: First, sort the array of scores in ascending order. This allows us to try and include the smallest elements first, maximizing the number of elements in the subset without exceeding the limit.

2. **Iterate and Sum**: Initialize a counter to keep track of the number of elements included in the subset and a variable to keep track of the current sum. Iterate through the sorted scores, adding each score to the current sum. If adding the next score would exceed the limit, stop the iteration.

Here's how the C++ solution looks:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxElementsInSubset(vector<int>& scores, int limit) {
    // Sort the scores in ascending order
    sort(scores.begin(), scores.end());
    
    int count = 0; // To count the number of elements in the subset
    int currentSum = 0; // To keep track of the current sum of selected elements
    
    for (int score : scores) {
        // Check if adding this score would exceed the limit
        if (currentSum + score <= limit) {
            currentSum += score; // Update the current sum
            count++; // Include this element in the count
        } else {
            break; // Stop if we exceed the limit
        }
    }
    
    return count; // Return the maximum number of elements in the subset
}

int main() {
    // Example usage:
    vector<int> scores = {1, 3, 2, 5, 4}; // Sample scores
    int limit = 7; // Sample limit
    cout << maxElementsInSubset(scores, limit) << endl; // Output the result

    return 0;
}
```

### Explanation:

1. **Sorting the Array**: We start by sorting the input array `scores`. This makes it easier to try including the smallest elements first. 

2. **Initialization**: We set two variables, `count` which will store the number of elements we can include, and `currentSum` which tracks the total value of included elements.

3. **Loop Through Scores**: We go through each score in the sorted array:
   - If the `currentSum` plus the current `score` does not exceed the `limit`, we add that score to `currentSum` and increment `count`.
   - If it exceeds the limit, we break out of the loop because adding any further will also exceed the limit (given that the subsequent scores are equal to or larger than the one we are currently evaluating).

4. **Return Count**: After finishing the loop, we return the `count`, which represents the maximum number of elements that can fit within the given limit.

### Complexity:
- **Time Complexity**: O(n log n), due to the sorting operation.
- **Space Complexity**: O(1), since we are using a fixed number of extra variables and not exceeding the input size for storage. 

This approach effectively ensures that we maximize the number of elements in our subset while adhering to a strict sum constraint, which is the essence of the problem at hand.