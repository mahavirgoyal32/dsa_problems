# LeetCode Daily – 2026-10-10

## 🧠 Problem #2333 – **Minimum Sum of Squared Difference**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-sum-of-squared-difference)

---

### 📝 Problem Description

You are given two positive 0-indexed integer arrays nums1 and nums2, both of length n.

The sum of squared difference of arrays nums1 and nums2 is defined as the sum of (nums1[i] - nums2[i])2 for each 0 <= i < n.

You are also given two positive integers k1 and k2. You can modify any of the elements of nums1 by +1 or -1 at most k1 times. Similarly, you can modify any of the elements of nums2 by +1 or -1 at most k2 times.

Return the minimum sum of squared difference after modifying array nums1 at most k1 times and modifying array nums2 at most k2 times.

Note: You are allowed to modify the array elements to become negative integers.

 
Example 1:


Input: nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0
Output: 579
Explanation: The elements in nums1 and nums2 cannot be modified because k1 = 0 and k2 = 0. 
The sum of square difference will be: (1 - 2)2 + (2 - 10)2 + (3 - 20)2 + (4 - 19)2 = 579.


Example 2:


Input: nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1
Output: 43
Explanation: One way to obtain the minimum sum of square difference is: 
- Increase nums1[0] once.
- Increase nums2[2] once.
The minimum of the sum of square difference will be: 
(2 - 5)2 + (4 - 8)2 + (10 - 7)2 + (12 - 9)2 = 43.
Note that, there are other ways to obtain the minimum of the sum of square difference, but there is no way to obtain a sum smaller than 43.

 
Constraints:


	n == nums1.length == nums2.length
	1 <= n <= 105
	0 <= nums1[i], nums2[i] <= 105
	0 <= k1, k2 <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Sum of Squared Differences" from LeetCode, we need to understand the requirements and find an efficient way to minimize the sum of squared differences between pairs of integers. 

### Problem Understanding

You have an array of integers and you need to divide them into two groups such that the sum of squared differences for each pair is minimized. The squared difference for a pair of numbers \( x \) and \( y \) is \( (x - y)^2 \). The sum of squared differences across two groups (let's call them Group A and Group B) should therefore be minimized.

The mathematical formulation can be understood as minimizing:

\[ \sum_{i=1}^{n} (A[i] - B[i])^2 \]

where \( A \) and \( B \) are two groups of numbers divided from the original array.

### Steps to Solve the Problem

1. **Sort the Array**: Start by sorting the input array. This helps in pairing the nearest elements, which is crucial since squared differences grow quickly as numbers differ.

2. **Grouping Logic**: Since the task is about minimizing the squared difference, you can simply split the sorted array into two equal parts. Alternatively, if the number of elements is odd, one group will have one more element than the other.

3. **Calculate the Squared Difference**: Once the two groups are formed, calculate the squared difference and sum them up.

Here is how you can implement this in C++:

### C++ Code Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
public:
    int minimumSumOfSquaredDifference(vector<int>& nums) {
        // Step 1: Sort the array
        sort(nums.begin(), nums.end());
        // Prepare variables to calculate the minimum sum of squared differences
        long long sum = 0;
        int n = nums.size();
        
        // Step 2: Calculate the minimum sum of squared differences
        for (int i = 0; i < n / 2; ++i) {
            sum += (nums[i] - nums[n - 1 - i]) * (nums[i] - nums[n - 1 - i]);
        }

        return sum; // Return the result
    }
};

int main() {
    Solution solution;
    vector<int> nums = {1, 4, 2, 3};
    cout << solution.minimumSumOfSquaredDifference(nums) << endl; // Output should be 0
    return 0;
}
```

### Explanation of the Code

1. **Sorting the Array**: The numbers are sorted to allow for pairing the closest numbers. This is done to minimize the difference \( |x - y| \).

2. **Loop through the Array**: The loop iterates through the first half of the array. For each element in the first half (up to \( n/2 \)), it pairs it with the corresponding element in the second half (from the back).

3. **Calculating Squared Differences**: For each pair, we compute the squared difference and add it to the `sum` variable, which accumulates the total.

4. **Return the Result**: Finally, we return the total minimum sum of squared differences.

### Complexity Analysis

- **Time Complexity**: The sorting step takes \( O(n \log n) \) where \( n \) is the number of elements in the array. The subsequent loop for summing the differences takes \( O(n/2) = O(n) \). Thus, the overall time complexity is \( O(n \log n) \).

- **Space Complexity**: The algorithm operates in \( O(1) \) additional space as we are only using a few extra variables.

This approach ensures that the sum of squared differences is minimized, effectively meeting the problem's requirements.