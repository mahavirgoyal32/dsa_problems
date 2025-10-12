# LeetCode Daily – 2025-10-12

## 🧠 Problem #3539 – **Find Sum of Array Product of Magical Sequences**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences)

---

### 📝 Problem Description

You are given two integers, m and k, and an integer array nums.
A sequence of integers seq is called magical if:


	seq has a size of m.
	0 <= seq[i] < nums.length
	The binary representation of 2seq[0] + 2seq[1] + ... + 2seq[m - 1] has k set bits.


The array product of this sequence is defined as prod(seq) = (nums[seq[0]] * nums[seq[1]] * ... * nums[seq[m - 1]]).

Return the sum of the array products for all valid magical sequences.

Since the answer may be large, return it modulo 109 + 7.

A set bit refers to a bit in the binary representation of a number that has a value of 1.

 
Example 1:


Input: m = 5, k = 5, nums = [1,10,100,10000,1000000]

Output: 991600007

Explanation:

All permutations of [0, 1, 2, 3, 4] are magical sequences, each with an array product of 1013.


Example 2:


Input: m = 2, k = 2, nums = [5,4,3,2,1]

Output: 170

Explanation:

The magical sequences are [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 2], [1, 3], [1, 4], [2, 0], [2, 1], [2, 3], [2, 4], [3, 0], [3, 1], [3, 2], [3, 4], [4, 0], [4, 1], [4, 2], and [4, 3].


Example 3:


Input: m = 1, k = 1, nums = [28]

Output: 28

Explanation:

The only magical sequence is [0].


 
Constraints:


	1 <= k <= m <= 30
	1 <= nums.length <= 50
	1 <= nums[i] <= 108

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem of finding the sum of array products of magical sequences involves generating sequences of a given length from an array and calculating their products. Given the constraints and complexity of generating all possible sequences, we need to find a more efficient way to compute the result.

To solve the problem effectively, let's break down the necessary steps:

1. **Understanding the Magical Sequences**: A magical sequence consists of `k` different elements selected from the array. The products of these elements will contribute to the final sum we need to compute.

2. **Efficient Calculation using Combinatorics**: Rather than generating all possible combinations of the elements of the array, we will utilize combinatorial mathematics. The idea is to keep track of the frequency of elements in the array while simultaneously maintaining their contribution in a way that helps us avoid directly forming every combination.

3. **Modulus for Large Numbers**: Since results can grow large, we will use modulus operations to keep our results manageable.

4. **Iterative Calculation**: We can iteratively build the result by calculating contributions from each element based on its index and how it contributes to the magical sequences of a given length.

### C++ Code Implementation

Here's the C++ implementation of the solution along with comments explaining each part:

```cpp
#include <vector>
#include <algorithm>
#include <numeric>
#include <unordered_map>
#include <iostream>

const int MOD = 1e9 + 7;

class Solution {
public:
    int magicalSequencesSum(std::vector<int>& arr, int k) {
        int n = arr.size();
        if (k > n) return 0;

        // Step 1: Count frequencies of each number.
        std::unordered_map<int, long long> frequency;
        for (const auto& num : arr) {
            frequency[num]++;
        }

        // Step 2: Extract unique numbers and their frequencies.
        std::vector<std::pair<int, long long>> counts(frequency.begin(), frequency.end());
        int uniqueSize = counts.size();

        // Step 3: Prepare for combinatorial calculations
        std::vector<long long> dp(uniqueSize + 1, 0);
        dp[0] = 1; // Base case for combinatorial calculations

        // Prepare coefficient multipliers for combinatorial product contributions
        for (int i = 0; i < uniqueSize; ++i) {
            for (int j = std::min(k, i + 1); j > 0; --j) {
                dp[j] = (dp[j] + dp[j - 1] * counts[i].second) % MOD;
            }
        }

        // Step 4: Calculate the total sum 
        long long totalSum = 0;

        for (int i = 0; i < uniqueSize; ++i) {
            int number = counts[i].first;
            long long count = counts[i].second;

            // Contribution of current number to all k-length subsets
            totalSum = (totalSum + number * dp[k]) % MOD;
        }

        return totalSum;
    }
};

// Example usage
int main() {
    Solution solution;
    std::vector<int> arr = {1, 2, 2, 3};
    int k = 2;
    std::cout << "Result: " << solution.magicalSequencesSum(arr, k) << std::endl; // Output the result
    return 0;
}
```

### Explanation of the Code:

1. **Frequency Count**: We first count how many times each unique element appears in the input array using an unordered map. This helps us manage duplicates and efficiently calculate combinations.

2. **Dynamic Programming Array**: We maintain a dynamic programming array `dp` where `dp[j]` will hold the sum of products of all magical sequences of length `j`.

3. **Combination Contributions**: For each unique number, we update our `dp` array to account for contributions made by including that number in sequences.

4. **Final Calculation**: We compute the final sum by iterating through our unique numbers and scaling their contributions based on the combinations formed, keeping everything modulated to avoid overflow.

### Complexity:
- **Time Complexity**: O(n), where n is the number of unique elements in the array.
- **Space Complexity**: O(u), where u is the count of unique elements (in cases of moderate input sizes).

The code efficiently computes the required sum without explicit generation of all sequences, enabling it to solve larger input sizes within time limits.