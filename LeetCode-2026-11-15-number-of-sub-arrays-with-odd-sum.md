# LeetCode Daily – 2026-11-15

## 🧠 Problem #1524 – **Number of Sub-arrays With Odd Sum**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum)

---

### 📝 Problem Description

Given an array of integers arr, return the number of subarrays with an odd sum.

Since the answer can be very large, return it modulo 109 + 7.

 
Example 1:


Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.


Example 2:


Input: arr = [2,4,6]
Output: 0
Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
All sub-arrays sum are [2,6,12,4,10,6].
All sub-arrays have even sum and the answer is 0.


Example 3:


Input: arr = [1,2,3,4,5,6,7]
Output: 16


 
Constraints:


	1 <= arr.length <= 105
	1 <= arr[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's tackle the problem titled "Number of Subarrays With Odd Sum" from LeetCode. The objective is to determine the number of contiguous subarrays whose sum is odd.

### Problem Explanation
To solve this problem, you need to understand the properties of sums of integers:

1. **Even + Even = Even**
2. **Odd + Odd = Even**
3. **Even + Odd = Odd**

From the above properties, we can derive that:
- A subarray sum is odd if the number of odd integers in that subarray is odd.

### Approach
1. **Prefix Sum**: We can keep track of the prefix sums while iterating through the array.
2. **Count Occurrences**: We maintain two counters, one for the count of even prefix sums and one for odd prefix sums.
   - Initially, the count of even prefix sums is `1` (the prefix sum of 0).
3. **Iterate through the array**: At each index, update the prefix sum:
   - If the current element is odd, toggle the parity of the prefix sum.
   - Depending on whether the current prefix sum is even or odd, add to the result based on the counts maintained.
   - Update the respective count for even or odd.

### Implementation in C++
Here's how you can implement this logic in C++:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int numOfSubarrays(vector<int>& arr) {
        // Count of subarrays with odd sums
        int oddCount = 0;
        // Total number of valid subarrays
        int count = 0;
        // Initial prefix sum is considered as even (0)
        int evenCount = 1; 
        // Current prefix sum
        int currentSum = 0;

        for (int num : arr) {
            // Update the prefix sum
            currentSum += num;
            
            // Check the parity of the current prefix sum
            if (currentSum % 2 == 0) {
                // Current prefix sum is even
                // The count of odd prefix sums seen before contributes to odd sum subarrays
                count += oddCount;
                evenCount++; // Increase even count
            } else {
                // Current prefix sum is odd
                // The count of even prefix sums seen before contributes to odd sum subarrays
                count += evenCount;
                oddCount++; // Increase odd count
            }
        }
        
        return count;
    }
};
```

### Explanation of the Code
1. **Initialization**: We initialize `oddCount`, `count`, `evenCount` (with a value of `1` because we start with a prefix sum of zero which is even), and `currentSum`.
2. **Iterate through the array**:
   - For each element, we add it to `currentSum`.
   - We check if `currentSum` is even or odd.
   - If it's even, we add the number of previously seen odd prefix sums (`oddCount`) to our total `count`.
   - If it's odd, we do the opposite and add the number of even prefix sums (`evenCount`).
   - Finally, we update the respective counts based on whether `currentSum` is even or odd.
3. **Return the result**: The total count of subarrays with odd sums is stored in `count`.

### Complexity
- **Time Complexity**: O(n), where n is the length of the array, since we iterate through the array once.
- **Space Complexity**: O(1), since we use a constant amount of extra space.

This method efficiently counts subarrays with odd sums using the properties of prefix sums and parity.