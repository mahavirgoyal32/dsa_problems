# LeetCode Daily – 2026-08-25

## 🧠 Problem #3718 – **Smallest Missing Multiple of K**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-missing-multiple-of-k)

---

### 📝 Problem Description

Given an integer array nums and an integer k, return the smallest positive multiple of k that is missing from nums.

A multiple of k is any positive integer divisible by k.

 
Example 1:


Input: nums = [8,2,3,4,6], k = 2

Output: 10

Explanation:

The multiples of k = 2 are 2, 4, 6, 8, 10, 12... and the smallest multiple missing from nums is 10.


Example 2:


Input: nums = [1,4,7,10,15], k = 5

Output: 5

Explanation:

The multiples of k = 5 are 5, 10, 15, 20... and the smallest multiple missing from nums is 5.


 
Constraints:


	1 <= nums.length <= 100
	1 <= nums[i] <= 100
	1 <= k <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Smallest Missing Multiple of K" asks us to find the smallest multiple of a given integer \( K \) that is not present in an array of positive integers. 

### Problem Overview

Given an array of positive integers and a positive integer \( K \), we need to determine the smallest integer \( m \) such that:
1. \( m \) is a multiple of \( K \)
2. \( m \) is not present in the given array

### Steps to Solve the Problem

1. **Read and Store Input**: Read the integers from the input array into a set for quick lookup.
  
2. **Iterate Through Multiples of K**: Start checking from the first multiple of \( K \), which is \( K \) itself, and keep checking subsequent multiples \( 2K, 3K, \) and so forth.

3. **Check for Presence in Set**: For each multiple, check if it is in the set. If it is not present in the set, that is our answer and we can return it.

4. **Stop Condition**: The first multiple not found in the set is necessarily the smallest missing multiple of \( K \).

### C++ Solution

Here's how you can implement this in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

int findSmallestMissingMultiple(vector<int>& arr, int K) {
    // Store the elements of the array in a set for quick lookup
    unordered_set<int> elements(arr.begin(), arr.end());
    
    // Start checking multiples of K
    int multiple = K;
    while (elements.find(multiple) != elements.end()) {
        // If the current multiple exists, check the next one
        multiple += K;
    }
    
    // Return the first missing multiple of K
    return multiple;
}

int main() {
    vector<int> arr = {2, 3, 4, 5, 6}; // Example array
    int K = 5; // Example K
    cout << findSmallestMissingMultiple(arr, K) << endl; // Output should be 10
    return 0;
}
```

### Explanation of the Code:

- We use a `unordered_set` to store elements from the input array. The `unordered_set` allows for \( O(1) \) average time complexity for lookups, making our solution efficient.
  
- We initialize `multiple` with \( K \) and enter a `while` loop that continues until we find a multiple that is not in the set.

- Inside the loop, if `multiple` is found in the set, we increment it by \( K \) and check again.

- Once we find a multiple not in the set, we simply return that multiple, which is guaranteed to be the smallest missing multiple of \( K \).

### Complexity Analysis
- **Time Complexity**: \( O(N + M) \), where \( N \) is the size of the input array and \( M \) is the number of multiples of \( K \) that we need to check until we find a missing one (worst-case scenario could be unbounded).
  
- **Space Complexity**: \( O(N) \) due to the storage of the elements in the set.

This solution is efficient and works well for the problem constraints.