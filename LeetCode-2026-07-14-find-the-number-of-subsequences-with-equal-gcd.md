# LeetCode Daily – 2026-07-14

## 🧠 Problem #3336 – **Find the Number of Subsequences With Equal GCD**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd)

---

### 📝 Problem Description

You are given an integer array nums.

Your task is to find the number of pairs of non-empty subsequences (seq1, seq2) of nums that satisfy the following conditions:


	The subsequences seq1 and seq2 are disjoint, meaning no index of nums is common between them.
	The GCD of the elements of seq1 is equal to the GCD of the elements of seq2.


Return the total number of such pairs.

Since the answer may be very large, return it modulo 109 + 7.

 
Example 1:


Input: nums = [1,2,3,4]

Output: 10

Explanation:

The subsequence pairs which have the GCD of their elements equal to 1 are:


	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])
	([1, 2, 3, 4], [1, 2, 3, 4])



Example 2:


Input: nums = [10,20,30]

Output: 2

Explanation:

The subsequence pairs which have the GCD of their elements equal to 10 are:


	([10, 20, 30], [10, 20, 30])
	([10, 20, 30], [10, 20, 30])



Example 3:


Input: nums = [1,1,1,1]

Output: 50


 
Constraints:


	1 <= nums.length <= 200
	1 <= nums[i] <= 200

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Find the Number of Subsequences With Equal GCD" efficiently, we need to focus on the relationship between GCD (Greatest Common Divisor) and subsequences.

### Problem Breakdown

1. **Understanding Subsequences**: A subsequence can be formed from an array by deleting some elements without changing the order of the remaining elements. 

2. **GCD Definition**: The GCD of a set of numbers is the largest integer that divides all the numbers in the set.

3. **Objective**: We're tasked with counting the number of non-empty subsequences such that their GCD equals a specific value `g`.

### Approach

1. **Frequency Count**: First, we need to determine how many times each number appears in the input array. This can be stored in a frequency array.

2. **Finding Valid Subsequences**: For each potential GCD value `g`, count how many elements in the array are multiples of `g` (i.e., elements equal to `g`, `2g`, `3g`, etc.). Let's denote this count as `count_multiples_g`.

3. **Counting Subsequences**: The number of non-empty subsequences that can be formed from these multiples is `2^count_multiples_g - 1`.

4. **Check GCD**: We need to check that the GCD of the formed subsequence equals `g`—to ensure this, we also need to enforce that there is at least one element that is exactly `g` in the subsequence.

5. **Iterate Through Possible GCD Values**: We iterate through all potential GCD values (up to the maximum element in the original array) and apply the aforementioned steps.

6. **Avoiding Duplicates**: We must ensure that we count the subsequences correctly without duplicates.

### Implementation

Here's how the above approach can be translated into C++ code:

```cpp
#include <vector>
#include <unordered_map>
#include <cmath>
#include <iostream>
using namespace std;

class Solution {
public:
    int countSubsequencesWithGCD(vector<int>& nums) {
        // Maximum number in nums for GCD calculations
        int max_num = 0;
        for (int num : nums) {
            max_num = max(max_num, num);
        }

        // Frequency map to count occurrences
        vector<int> freq(max_num + 1, 0);
        for (int num : nums) {
            freq[num]++;
        }

        long long totalSubsequences = 0;

        // Iterate over all possible GCD values
        for (int g = 1; g <= max_num; g++) {
            long long count_multiples_g = 0;
            for (int multiple = g; multiple <= max_num; multiple += g) {
                count_multiples_g += freq[multiple];
            }

            if (count_multiples_g > 0) {
                // Calculate the number of subsequences formed by multiples of g
                long long subsequences = (1LL << count_multiples_g) - 1; // 2^count_multiples_g - 1
                // Check if there's at least one 'g' among the multiples
                if (freq[g] > 0) {
                    totalSubsequences += subsequences; // valid subsequences for which GCD is g
                }
            }
        }

        return totalSubsequences;
    }
};

// Example Usage
int main() {
    Solution sol;
    vector<int> nums = {4, 6, 16, 24}; // Example input
    cout << sol.countSubsequencesWithGCD(nums) << endl; // Outputs the count
    return 0;
}
```

### Explanation of the Code

1. **Input Parsing**: We first parse the input to find the maximum number which helps us in creating our frequency array.

2. **Frequency Count**: We create a frequency array that tracks how many times each integer up to `max_num` appears in `nums`.

3. **GCD Calculation**: For each possible GCD `g`, we count how many of the numbers are multiples of `g`. Using this count, we compute the number of non-empty subsequences.

4. **Final Check**: We ensure that for each `g`, we only count subsequences if `g` itself appears in the input array.

5. **Output**: Finally, we return the total number of valid subsequences. 

This solution efficiently counts the number of valid subsequences and operates in a feasible time complexity, making it suitable for larger inputs typical in competitive programming contexts.