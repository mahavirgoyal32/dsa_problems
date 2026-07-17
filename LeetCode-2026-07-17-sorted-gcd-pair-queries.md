# LeetCode Daily – 2026-07-17

## 🧠 Problem #3312 – **Sorted GCD Pair Queries**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sorted-gcd-pair-queries)

---

### 📝 Problem Description

You are given an integer array nums of length n and an integer array queries.

Let gcdPairs denote an array obtained by calculating the GCD of all possible pairs (nums[i], nums[j]), where 0 <= i < j < n, and then sorting these values in ascending order.

For each query queries[i], you need to find the element at index queries[i] in gcdPairs.

Return an integer array answer, where answer[i] is the value at gcdPairs[queries[i]] for each query.

The term gcd(a, b) denotes the greatest common divisor of a and b.

 
Example 1:


Input: nums = [2,3,4], queries = [0,2,2]

Output: [1,2,2]

Explanation:

gcdPairs = [gcd(nums[0], nums[1]), gcd(nums[0], nums[2]), gcd(nums[1], nums[2])] = [1, 2, 1].

After sorting in ascending order, gcdPairs = [1, 1, 2].

So, the answer is [gcdPairs[queries[0]], gcdPairs[queries[1]], gcdPairs[queries[2]]] = [1, 2, 2].


Example 2:


Input: nums = [4,4,2,1], queries = [5,3,1,0]

Output: [4,2,1,1]

Explanation:

gcdPairs sorted in ascending order is [1, 1, 1, 2, 2, 4].


Example 3:


Input: nums = [2,2], queries = [0,0]

Output: [2,2]

Explanation:

gcdPairs = [2].


 
Constraints:


	2 <= n == nums.length <= 105
	1 <= nums[i] <= 5 * 104
	1 <= queries.length <= 105
	0 <= queries[i] < n * (n - 1) / 2

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Sorted GCD Pair Queries", we need to process a series of queries where each query asks for the smallest GCD value that can be formed using given integers from an array.

## Problem Breakdown

1. **Understanding GCD**: The GCD (Greatest Common Divisor) of two numbers is the largest integer that divides both numbers without leaving a remainder. 

2. **Constraints**: We are given `n` numbers in an array and `m` queries, each query consists of two integers `k` and `x`. We need to find the smallest GCD of any two numbers in the first `k` numbers of the array that is greater than or equal to `x`.

3. **Efficient Queries**: Given the number of queries can be large, a naive approach (checking each pair for each query) would be too slow. We need a more efficient way to prepare and respond to queries.

## Approach

The idea here is to preprocess the first `k` numbers of the array in a way that allows us to quickly answer multiple queries.

### Steps:

1. **Preprocessing**:
   - Create a "frequency" array to store how many times each integer appears in the original array.
   - For each integer `k`, iterate through all possible integers in the range to calculate their GCD and maintain a sorted list of GCDs.

2. **GCD Computation**:
   - As we compute the GCDs, we store them efficiently so that for each query, we can use binary search to find the smallest GCD that satisfies the condition for the given `x`.

3. **Answering Queries**:
   - For each query `(k, x)`, determine the eligible elements from the first `k` numbers, then search for the required condition using binary search or similar techniques.

### Implementation

Here’s how the entire logic can be implemented in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>
#include <set>
#include <numeric>

using namespace std;

class SortedGCDPairQueries {
public:
    vector<int> gcdQueries(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        vector<int> answers;

        // Store GCDs in a sorted list for each prefix
        vector<set<int>> sortedGCDs(n + 1);
        
        // Precompute the GCDs for all combinations
        for (int k = 1; k <= n; ++k) {
            for (int i = 0; i < k; ++i) {
                for (int j = i + 1; j < k; ++j) {
                    int g = gcd(nums[i], nums[j]);
                    sortedGCDs[k].insert(g);
                }
            }
        }

        // Handle each query
        for (const auto& query : queries) {
            int k = query[0];
            int x = query[1];

            // Find the first GCD in sortedGCDs[k] that is >= x
            auto it = sortedGCDs[k].lower_bound(x);
            if (it == sortedGCDs[k].end()) {
                answers.push_back(-1); // If all elements are less than x
            } else {
                answers.push_back(*it); // The first GCD >= x
            }
        }

        return answers;
    }
};
```

### Explanation of the Code

1. We create a vector of sets called `sortedGCDs` to store GCD values for each prefix of the array.
2. We calculate the GCD for each pair `(i, j)` where `i < j < k`, and store it in the corresponding set for `k`.
3. For each query `(k, x)`, we find the first GCD greater than or equal to `x` in the sorted set using `lower_bound`. This is efficient and allows each query to be answered quickly after the preprocessing step.
4. Finally, we return the results from our processed queries.

### Conclusion

This approach efficiently processes GCD pair queries by leveraging preprocessing with sets to maintain sorted GCDs, allowing quick responses to queries through binary search. The overall complexity revolves around the preprocessing of possible pairs and efficient query handling.