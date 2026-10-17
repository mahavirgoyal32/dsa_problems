# LeetCode Daily – 2026-10-17

## 🧠 Problem #3551 – **Minimum Swaps to Sort by Digit Sum**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum)

---

### 📝 Problem Description

You are given an array nums of distinct positive integers. You need to sort the array in increasing order based on the sum of the digits of each number. If two numbers have the same digit sum, the smaller number appears first in the sorted order.

Return the minimum number of swaps required to rearrange nums into this sorted order.

A swap is defined as exchanging the values at two distinct positions in the array.

 
Example 1:


Input: nums = [37,100]

Output: 1

Explanation:


	Compute the digit sum for each integer: [3 + 7 = 10, 1 + 0 + 0 = 1] &rarr; [10, 1]
	Sort the integers based on digit sum: [100, 37]. Swap 37 with 100 to obtain the sorted order.
	Thus, the minimum number of swaps required to rearrange nums is 1.



Example 2:


Input: nums = [22,14,33,7]

Output: 0

Explanation:


	Compute the digit sum for each integer: [2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] &rarr; [4, 5, 6, 7]
	Sort the integers based on digit sum: [22, 14, 33, 7]. The array is already sorted.
	Thus, the minimum number of swaps required to rearrange nums is 0.



Example 3:


Input: nums = [18,43,34,16]

Output: 2

Explanation:


	Compute the digit sum for each integer: [1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] &rarr; [9, 7, 7, 7]
	Sort the integers based on digit sum: [16, 34, 43, 18]. Swap 18 with 16, and swap 43 with 34 to obtain the sorted order.
	Thus, the minimum number of swaps required to rearrange nums is 2.



 
Constraints:


	1 <= nums.length <= 105
	1 <= nums[i] <= 109
	nums consists of distinct positive integers.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Minimum Swaps to Sort by Digit Sum", we need to first understand the problem requirements more thoroughly:

### Problem Overview:
We are given an array of integers, and we need to find the minimum number of swaps required to sort the array based on the digit sum of its elements. If two numbers have the same digit sum, their relative order in the sorted array should respect their original order (this means the sorting should be stable on equal digit sums).

### Steps to Solve the Problem:
1. **Calculate the Digit Sum**: Create a helper function to calculate the sum of the digits of each number.
  
2. **Pair and Sort**: Create pairs of (digit_sum, original_index) and then sort this list. This allows us to maintain the indices of the original elements and compare the digit sums easily.
  
3. **Minimum Swaps Calculation**: To find the minimum number of swaps to convert the original array into the sorted order, we can use a graph theory approach where we find cycles in the permutation. The number of swaps required for each cycle of size `k` is `k - 1`.

### Detailed Implementation:
Here's a detailed `C++` implementation following the steps outlined above.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

class Solution {
public:
    int minimumSwaps(std::vector<int>& arr) {
        // Helper function to calculate the digit sum of a number
        auto digit_sum = [](int n) {
            int sum = 0;
            while (n > 0) {
                sum += n % 10;
                n /= 10;
            }
            return sum;
        };
        
        // Create a vector of pairs to hold digit sums and their original indices
        std::vector<std::pair<int, int>> digitSumPairs;
        for (int i = 0; i < arr.size(); i++) {
            digitSumPairs.emplace_back(digit_sum(arr[i]), i);
        }
        
        // Sort the digit sum pairs. If digit sums are equal, original indices will maintain order
        std::sort(digitSumPairs.begin(), digitSumPairs.end());
        
        // To keep track of visited nodes for cycle detection
        std::vector<bool> visited(arr.size(), false);
        int swaps = 0;
        
        // Iterate through each element to find cycles
        for (int i = 0; i < arr.size(); i++) {
            // If already visited or in the correct position, skip
            if (visited[i] || digitSumPairs[i].second == i) {
                continue;
            }
            
            // Compute the size of the cycle
            int cycle_size = 0;
            int j = i;
            while (!visited[j]) {
                visited[j] = true;
                j = digitSumPairs[j].second; // Move to the next index in the cycle
                cycle_size++;
            }
            // If there is a cycle of size k, it takes k - 1 swaps to sort
            if (cycle_size > 0) {
                swaps += (cycle_size - 1);
            }
        }
        
        return swaps;
    }
};

// Sample usage
int main() {
    Solution solution;
    std::vector<int> arr = {10, 6, 12, 5, 8}; // Example case
    std::cout << "Minimum swaps required: " << solution.minimumSwaps(arr) << std::endl;
    return 0;
}
```

### Explanation of the Code:
1. **Digit Sum Calculation**:
   - We use a lambda function `digit_sum` that calculates the sum of the digits of an integer.
  
2. **Creating and Sorting Pairs**:
   - We create a vector of pairs consisting of the digit sum and the original index.
   - This vector is then sorted primarily by digit sums. If two numbers have the same digit sum, the original order is respected because `std::sort` is stable.

3. **Finding Cycles**:
   - Using a boolean vector `visited`, we can keep track of which indices we have already accounted for to avoid counting them multiple times.
   - For each unvisited index, we construct a cycle and count its size. The number of swaps needed for a cycle of size `k` is `k - 1`, since we can always place one element in its correct position with each swap.

4. **Result**:
   - Finally, we return the total number of swaps calculated.

### Complexity Analysis:
- **Time Complexity**: O(n log n) due to the sorting step, where n is the number of elements in the array.
- **Space Complexity**: O(n) since we use a additional vector to store pairs of digit sums and their original indices.

This approach efficiently calculates the minimum swaps required to sort the array based on the digit sums of its elements.