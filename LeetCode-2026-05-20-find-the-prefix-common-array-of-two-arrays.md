# LeetCode Daily – 2026-05-20

## 🧠 Problem #2657 – **Find the Prefix Common Array of Two Arrays**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays)

---

### 📝 Problem Description

You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

 
Example 1:


Input: A = [1,3,2,4], B = [3,1,2,4]
Output: [0,2,3,4]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.


Example 2:


Input: A = [2,3,1], B = [3,1,2]
Output: [0,1,3]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: only 3 is common in A and B, so C[1] = 1.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.


 
Constraints:


	1 <= A.length == B.length == n <= 50
	1 <= A[i], B[i] <= n
	It is guaranteed that A and B are both a permutation of n integers.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's solve the LeetCode problem "Find the Prefix Common Array of Two Arrays".

### Problem Statement

You are given two integer arrays `A` and `B` of the same length `n`. Your task is to create an output integer array `C` of length `n`, where `C[i]` is the number of elements that are present in both `A[0:i]` and `B[0:i]`. 

In essence, `C[i]` counts the common elements between the prefixes of `A` and `B` up to index `i`.

### Solution Explanation

To calculate `C[i]`:
1. We need to iterate through each index of the arrays `A` and `B`.
2. We can use a hash set to keep track of the elements that have appeared in each of the arrays so far.
3. For each index `i`, we will check how many of the unique elements from the prefix of `A` are present in the prefix of `B`.

### Algorithm Steps
1. Initialize an empty hash set for tracking unique elements from both `A` and `B`.
2. Initialize an output array `C` of the same length as `A` and `B`.
3. Iterate over the indices of the arrays:
   - For each index `i`, check if `A[i]` is in the set of common elements. If it is, increment the common count for that position.
   - Check if `B[i]` is in the same set and do similar counting.
   - Add `A[i]` and `B[i]` to the set of seen elements.
4. The output array `C` will be updated with the count of common elements at each index.

### C++ Implementation

Here’s how we can implement this in C++:

```cpp
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
    int n = A.size();
    vector<int> C(n, 0);
    unordered_set<int> seen; // set to track seen elements
    int commonCount = 0; // to track number of common elements

    for (int i = 0; i < n; i++) {
        // Check if A[i] is already in the seen set and update commonCount accordingly
        if (seen.count(A[i]) > 0) {
            commonCount++;
        }
        // Check if B[i] is already in the seen set and update commonCount accordingly
        if (seen.count(B[i]) > 0) {
            commonCount++;
        }

        // Update the count of common elements in C at position i
        C[i] = commonCount;

        // Add A[i] and B[i] to the seen set
        seen.insert(A[i]);
        seen.insert(B[i]);
    }
    
    return C;
}
```

### Explanation of the Code

1. **Initialization**: We create an integer vector `C` to hold the resulting counts of common elements at each position, initializing it to zero.
2. **Hash Set**: Using `unordered_set`, we keep track of elements we've encountered from both arrays.
3. **Iterating through Arrays**: We loop through each index of `A` and `B`:
   - We check if the current elements of both `A` and `B` already exist in the `seen` set to update the number of common elements.
4. **Count Update**: After checking both elements, we record the `commonCount` into `C[i]`.
5. **Element Insertion**: Finally, we add the current elements of both arrays into the `seen` set for future checks.

### Complexity
- **Time Complexity**: O(n), where n is the length of the arrays because we go through each element exactly once.
- **Space Complexity**: O(n), due to the hash set storing up to n elements.

Using this method efficiently counts the common prefixes and gives us the desired output as required by the problem statement.