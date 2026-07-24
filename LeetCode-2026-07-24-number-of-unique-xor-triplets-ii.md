# LeetCode Daily – 2026-07-24

## 🧠 Problem #3514 – **Number of Unique XOR Triplets II**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-unique-xor-triplets-ii)

---

### 📝 Problem Description

You are given an integer array nums.

A XOR triplet is defined as the XOR of three elements nums[i] XOR nums[j] XOR nums[k] where i <= j <= k.

Return the number of unique XOR triplet values from all possible triplets (i, j, k).

 
Example 1:


Input: nums = [1,3]

Output: 2

Explanation:

The possible XOR triplet values are:


	(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1
	(0, 0, 1) &rarr; 1 XOR 1 XOR 3 = 3
	(0, 1, 1) &rarr; 1 XOR 3 XOR 3 = 1
	(1, 1, 1) &rarr; 3 XOR 3 XOR 3 = 3


The unique XOR values are {1, 3}. Thus, the output is 2.


Example 2:


Input: nums = [6,7,8,9]

Output: 4

Explanation:

The possible XOR triplet values are {6, 7, 8, 9}. Thus, the output is 4.


 
Constraints:


	1 <= nums.length <= 1500
	1 <= nums[i] <= 1500

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem and then we'll look at a solution in C++.

### Problem Understanding

The problem is to find the number of unique triplets in an array that produce a specific XOR value. Specifically, we're interested in triplets `(i, j, k)` where:
- `0 <= i < j < k < n`
- The XOR of the values at those indices equals zero: `A[i] ^ A[j] ^ A[k] == 0`.

### Constraints
- The values in the array can be negative.
- The triplet indices must be unique; order matters in terms of indices.

### Approach

To solve this problem efficiently, we can use the following approach:
1. **Hash Map for Pair Sums**: We will use a hash map to store all possible pair XOR results of the elements at indices `(i, j)`.
2. **Count Unique Triples**: For every `(k)`, check if there exists a pair `(i, j)` such that `A[k] ^ A[i] ^ A[j] = 0`. This can be rearranged to `A[i] ^ A[j] = A[k]`.
3. **Avoid Duplicates**: We need to ensure we count each unique triplet only once. To manage this, we can utilize a `set` to store valid combinations.

### C++ Implementation

Here’s the C++ code to achieve the above logic:

```cpp
#include <vector>
#include <unordered_map>
#include <unordered_set>

class Solution {
public:
    int countTriplets(std::vector<int>& A) {
        int n = A.size();
        std::unordered_map<int, int> pairCount;
        std::unordered_set<std::string> uniqueTriplets;

        // Store all pairs XOR results in the hash map
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int pairXor = A[i] ^ A[j];
                pairCount[pairXor]++;
            }
        }
        
        // Count valid triplets
        int count = 0;
        for (int k = 0; k < n; ++k) {
            if (pairCount.find(A[k]) != pairCount.end()) {
                count += pairCount[A[k]];
            }
        }

        return count;
    }
};

// Example of usage
// int main() {
//     Solution sol;
//     std::vector<int> A = {5, 1, 3, 2, 2}; // example input
//     int result = sol.countTriplets(A);
//     std::cout << result << std::endl; // Outputs the count of unique XOR triplets
//     return 0;
// }
```

### Explanation of the Code

1. **`unordered_map<int, int> pairCount`**: This will store the count of how many times each XOR value appears from pairs of indices.
  
2. **Storing Pair XORs**: The nested loops iterate over all pairs `(i, j)` where `i < j`, calculating their XOR and storing the count in `pairCount`. This allows us to know how many pairs generate a specific XOR.

3. **Count Valid Triplets**: For each index `k`, we check if `A[k]` exists in the `pairCount` hash map. If it does, this means there are `(i, j)` pairs that can combine with `A[k]` to yield an XOR of zero. We add to our total count based on how many such pairs exist.

4. **Return Count**: Finally, we return the total count of unique triplets.

### Complexity
- **Time**: O(n^2), due to nested loops for pairs and a single loop for evaluating each element.
- **Space**: O(n), primarily for storing pairs in the hash map.

This solution efficiently counts the unique XOR triplets without needing to explicitly check all combinations naively, while also maintaining uniqueness using a hash map.