# LeetCode Daily – 2026-07-23

## 🧠 Problem #3513 – **Number of Unique XOR Triplets I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-unique-xor-triplets-i)

---

### 📝 Problem Description

You are given an integer array nums of length n, where nums is a permutation of the numbers in the range [1, n].

A XOR triplet is defined as the XOR of three elements nums[i] XOR nums[j] XOR nums[k] where i <= j <= k.

Return the number of unique XOR triplet values from all possible triplets (i, j, k).

 
Example 1:


Input: nums = [1,2]

Output: 2

Explanation:

The possible XOR triplet values are:


	(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1
	(0, 0, 1) &rarr; 1 XOR 1 XOR 2 = 2
	(0, 1, 1) &rarr; 1 XOR 2 XOR 2 = 1
	(1, 1, 1) &rarr; 2 XOR 2 XOR 2 = 2


The unique XOR values are {1, 2}, so the output is 2.


Example 2:


Input: nums = [3,1,2]

Output: 4

Explanation:

The possible XOR triplet values include:


	(0, 0, 0) &rarr; 3 XOR 3 XOR 3 = 3
	(0, 0, 1) &rarr; 3 XOR 3 XOR 1 = 1
	(0, 0, 2) &rarr; 3 XOR 3 XOR 2 = 2
	(0, 1, 2) &rarr; 3 XOR 1 XOR 2 = 0


The unique XOR values are {0, 1, 2, 3}, so the output is 4.


 
Constraints:


	1 <= n == nums.length <= 105
	1 <= nums[i] <= n
	nums is a permutation of integers from 1 to n.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem titled "Number of Unique XOR Triplets I" involves counting the number of unique triplets `(i, j, k)` in an array `arr` such that the values are unique and the XOR of the three distinct elements is equal to a target value `target`.

Here's a step-by-step approach to solving the problem, and then I will provide the C++ code.

### Problem Breakdown:

1. **Understanding XOR**: The XOR operation has some interesting properties:
   - `a ^ a = 0` (any number XORed with itself is 0)
   - `a ^ 0 = a` (any number XORed with 0 is itself)
   - It is commutative and associative, which means the order in which we apply the XOR doesn't matter.

2. **Triplet Definition**: We need to find unique indices `(i, j, k)` where `i < j < k` in the array `arr`. We have to ensure the elements at these indices are unique.

3. **Constraints and Approach**:
   - We need to iterate through all possible triplets, which can be done using three nested loops.
   - We must store the unique triplets efficiently, taking care to add only those whose XOR equals the given target.

4. **Efficiency**: Since the maximum size for `arr` isn’t specified but treated as small in competitive programming, a cubic complexity approach `O(n^3)` is feasible, but we can definitely preprocess the input for removing duplicates and ensuring we have unique elements for triplet formation.

### C++ Implementation:

Here is a C++ solution to the problem:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int countTriplets(vector<int>& arr, int target) {
        int n = arr.size();
        unordered_set<int> uniqueElements(arr.begin(), arr.end()); // get unique elements
        vector<int> uniqueArr(uniqueElements.begin(), uniqueElements.end());

        int count = 0;
        int m = uniqueArr.size();
        
        // Iterate over all unique triplets
        for (int i = 0; i < m; ++i) {
            for (int j = i + 1; j < m; ++j) {
                for (int k = j + 1; k < m; ++k) {
                    int xorValue = uniqueArr[i] ^ uniqueArr[j] ^ uniqueArr[k];
                    if (xorValue == target) {
                        count++;
                    }
                }
            }
        }
        
        return count;
    }
};

int main() {
    Solution sol;
    vector<int> arr = {1, 2, 3, 4};
    int target = 6;
    cout << "Number of unique XOR triplets: " << sol.countTriplets(arr, target) << endl;
    return 0;
}
```

### Explanation of the Code:

1. **Input Handling**: We first convert the input `arr` into a set to remove duplicates and then back into a vector for easier iteration.

2. **Triplet Iteration**: We use triple nested loops to iterate through all unique combinations of three indices:
   - The outermost loop fixes the first element.
   - The middle loop fixes the second element (ensured to be after the first).
   - The innermost loop fixes the third element (ensured to be after the second).
   
3. **XOR Check**: For each triplet of unique elements, we compute the XOR and check if it equals the target.

4. **Count**: We increment our counter whenever we find a valid triplet.

5. **Output**: Finally, we return the total count of unique XOR triplets.

This solution is efficient for problems of reasonable size and adheres to the constraints typical for competitive programming challenges.