# LeetCode Daily – 2026-02-03

## 🧠 Problem #3637 – **Trionic Array I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/trionic-array-i)

---

### 📝 Problem Description

You are given an integer array nums of length n.

An array is trionic if there exist indices 0 < p < q < n &minus; 1 such that:


	nums[0...p] is strictly increasing,
	nums[p...q] is strictly decreasing,
	nums[q...n &minus; 1] is strictly increasing.


Return true if nums is trionic, otherwise return false.

 
Example 1:


Input: nums = [1,3,5,4,2,6]

Output: true

Explanation:

Pick p = 2, q = 4:


	nums[0...2] = [1, 3, 5] is strictly increasing (1 < 3 < 5).
	nums[2...4] = [5, 4, 2] is strictly decreasing (5 > 4 > 2).
	nums[4...5] = [2, 6] is strictly increasing (2 < 6).



Example 2:


Input: nums = [2,1,3]

Output: false

Explanation:

There is no way to pick p and q to form the required three segments.


 
Constraints:


	3 <= n <= 100
	-1000 <= nums[i] <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem statement from LeetCode's "Trionic Array I" and provide a solution in C++ along with explanations.

### Problem Statement

You are given an array `nums` that consists of integers where the array is divided into groups of three. Each group’s first element must be unique, while its other two elements can be any integers. Your task is to find the maximum number of unique groups of three that can be formed, and then return the number of unique triplets that can be formed.

### Understanding the Problem

1. Each group must have three elements.
2. The first element of each triplet should be unique.
3. We need to return the maximum number of such unique triplets.

### Strategy to Solve

1. Count the number of unique elements in the array. This can be achieved using a `std::unordered_set` which will help in both counting and ensuring uniqueness.
2. Each unique element can serve as the first number of a triplet. 
3. For each unique element, we can pair it with any two other elements. Thus, if the count of unique elements is `x`, then the maximum possible triplets we can form would be limited by both `x` and `(n / 3)` where `n` is the length of the original array.

### Steps:

1. Initialize a set to collect unique numbers.
2. Iterate through the given vector, adding each number to the set.
3. Compute the size of the set to get the count of unique numbers.
4. Use the formula `min(uniqueCount, n / 3)` to get the maximum number of unique groups.

### C++ Code

Here's how you would implement this:

```cpp
#include <vector>
#include <unordered_set>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maximumUniqueTriplets(vector<int>& nums) {
        // Using a set to find unique numbers
        unordered_set<int> uniqueNumbers;
        
        // Fill the set with unique elements
        for (int num : nums) {
            uniqueNumbers.insert(num);
        }

        // Count of unique numbers
        int uniqueCount = uniqueNumbers.size();
        
        // Total number of triplets that can be made is limited by uniqueCount and n/3
        return min(uniqueCount, static_cast<int>(nums.size() / 3));
    }
};
```

### Explanation of the Code

1. We include necessary headers `vector` and `unordered_set`.
2. The `maximumUniqueTriplets` function takes a vector of integers as input.
3. We initialize an unordered set `uniqueNumbers` to store the unique elements from the vector.
4. We iterate through each number in the vector and insert it into the set, which inherently manages uniqueness.
5. We calculate the number of unique elements using `uniqueCount`.
6. Finally, we return the minimum of `uniqueCount` and `n / 3`, where `n` is the total length of `nums`. This gives us the maximum possible unique triplets.

### Conclusion

This solution is efficient and runs in O(n) time complexity because inserting elements in a set and checking its size both operate in average-case O(1) time. Hence, this solution effectively counts unique triplets based on the rules provided while ensuring the maximum uniqueness in triplet formation.