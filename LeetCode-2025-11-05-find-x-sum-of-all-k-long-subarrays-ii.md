# LeetCode Daily – 2025-11-05

## 🧠 Problem #3321 – **Find X-Sum of All K-Long Subarrays II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii)

---

### 📝 Problem Description

You are given an array nums of n integers and two integers k and x.

The x-sum of an array is calculated by the following procedure:


	Count the occurrences of all elements in the array.
	Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
	Calculate the sum of the resulting array.


Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

 
Example 1:


Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2

Output: [6,10,12]

Explanation:


	For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
	For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
	For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.



Example 2:


Input: nums = [3,8,7,8,7,5], k = 2, x = 2

Output: [11,15,15,15,12]

Explanation:

Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].


 
Constraints:


	nums.length == n
	1 <= n <= 105
	1 <= nums[i] <= 109
	1 <= x <= k <= nums.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Find X-Sum of All K-Long Subarrays II" on LeetCode requires us to calculate the sum of the smallest elements of all possible contiguous subarrays of length `k` in a given integer array. The twist here is that we need to use a specific mathematical operation termed as X-Sum based on the frequencies of numbers in the subarray.

### Problem Breakdown:
- For each contiguous subarray of length `k`, determine the minimum element in that subarray.
- The final result is computed using a frequencies of these minimum elements in the form: `sum(min_elem * frequency)`, where `min_elem` is the minimum element, and `frequency` is how many times this minimum appears over all the `k`-long subarrays.

### Strategy:
We can use a sliding window approach coupled with a data structure that allows us to efficiently find minimums and count their occurrences. A deque (double-ended queue) is well-suited for this task, as it allows us to maintain candidates for the minimum value efficiently while sliding the window across the array.

### Steps:
1. Utilize a deque to maintain indices of potential minimum values for the current window.
2. If the front of the deque is out of the bounds of the current window, pop it from the front.
3. Maintain the order such that elements in the deque are always sorted based on their values in the original array.
4. Count the frequencies of the smallest elements found in the subarrays.

### C++ Implementation:
```cpp
#include <vector>
#include <deque>
#include <unordered_map>
using namespace std;

class Solution {
public:
    long long findXSum(vector<int>& nums, int k) {
        int n = nums.size();
        long long x_sum = 0;
        unordered_map<int, int> frequency; // Map to count the frequencies of min elements

        deque<int> dq; // Deque to maintain indices of potential minimums
        
        // Initialize the first window
        for (int i = 0; i < k; i++) {
            // Maintain the deque
            while (!dq.empty() && nums[dq.back()] >= nums[i])
                dq.pop_back();
            dq.push_back(i);
        }
        // Count the minimum element in the first window
        frequency[nums[dq.front()]]++;

        // Slide the window over the array
        for (int i = k; i < n; i++) {
            // Remove the element that is sliding out of the window
            if (dq.front() == i - k) {
                dq.pop_front();
            }

            // Add the new element and maintain the deque
            while (!dq.empty() && nums[dq.back()] >= nums[i])
                dq.pop_back();
            dq.push_back(i);

            // Count the minimum in the current window
            frequency[nums[dq.front()]]++;
        }

        // Add last window frequency
        frequency[nums[dq.front()]]++;

        // Calculate the final x_sum
        for (const auto& [num, freq] : frequency) {
            x_sum += static_cast<long long>(num) * freq;
        }

        return x_sum;
    }
};
```

### Explanation:
1. **Deque Maintenance**: We maintain indices in a deque that helps track minimum elements for each window. When processing a new element, we ensure that we remove elements from the deque that are greater than or equal to the new element being processed, as they cannot be the minimum for any future windows containing the new element.
  
2. **Frequency Counting**: As we slide the window, we count how many times each minimum element appears using a hash map.

3. **Final Calculation**: After processing all windows, we calculate the final X-Sum based on the values in the frequency map.

This approach ensures that we efficiently compute the desired sum in `O(n)` time due to the sliding window mechanics combined with deque operations, making it suitable for large inputs as required by the problem's constraints.