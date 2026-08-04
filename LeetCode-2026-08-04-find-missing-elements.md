# LeetCode Daily – 2026-08-04

## 🧠 Problem #3731 – **Find Missing Elements**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-missing-elements)

---

### 📝 Problem Description

You are given an integer array nums consisting of unique integers.

Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.

The smallest and largest integers of the original range are still present in nums.

Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.

 
Example 1:


Input: nums = [1,4,2,5]

Output: [3]

Explanation:

The smallest integer is 1 and the largest is 5, so the full range should be [1,2,3,4,5]. Among these, only 3 is missing.


Example 2:


Input: nums = [7,8,6,9]

Output: []

Explanation:

The smallest integer is 6 and the largest is 9, so the full range is [6,7,8,9]. All integers are already present, so no integer is missing.


Example 3:


Input: nums = [5,1]

Output: [2,3,4]

Explanation:

The smallest integer is 1 and the largest is 5, so the full range should be [1,2,3,4,5]. The missing integers are 2, 3, and 4.


 
Constraints:


	2 <= nums.length <= 100
	1 <= nums[i] <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem you're referring to is a classic one where we need to find missing elements in a sorted list ranging from 1 to n. Let's break down the problem, provide a solution in C++, and explain it step by step.

### Problem Explanation

Given an integer array `arr` that contains `n` elements, where the elements are in the range `[1, n + k]` (meaning they can include numbers up to `n + k`), we need to find the `k` missing numbers in that range, sorted in ascending order. Here `k` is the number of missing elements we need to find.

### Steps to Solve the Problem

1. **Initialize a Pointer**: We use a pointer to traverse the numbers from 1 to `n + k`.
2. **Use a Set or Vector to Track Elements**: We'll keep all present elements in a data structure to quickly check if they are in the original array.
3. **Iterate Over the Range**: As we iterate from 1 to `n + k`, if the current number is not in the set or vector, it is a missing number, and we collect it until we've found `k` missing numbers.
4. **Return the Result**: Once we have our missing numbers, we return them in a vector.

### C++ Solution

Here's a possible implementation based on the explained approach:

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> findMissingElements(vector<int>& arr, int n, int k) {
    unordered_set<int> elements(arr.begin(), arr.end());
    vector<int> missing;

    // We need to find k missing numbers from the range 1 to n + k
    for (int i = 1; i <= n + k; ++i) {
        // If the current number is not in the set of elements, it's missing
        if (elements.find(i) == elements.end()) {
            missing.push_back(i);
            // If we found k missing numbers, we can break out of the loop
            if (missing.size() == k) {
                break;
            }
        }
    }
    
    return missing;
}

int main() {
    vector<int> arr = {3, 7, 1, 2, 8}; // Example array
    int n = arr.size();
    int k = 3; // Number of missing elements we want to find
    vector<int> result = findMissingElements(arr, n, k);

    // Print the result
    for (int num : result) {
        cout << num << " ";
    }
    return 0;
}
```

### Explanation of the Code

1. **Input Handling**: We define a function `findMissingElements` that takes a vector of integers and two integers, `n` (size of array) and `k` (number of missing elements to find).
2. **Data Structure**: We use an `unordered_set` to store all the elements of the input array for O(1) look-up time.
3. **Finding Missing Numbers**:
   - We loop through the numbers from `1` to `n + k`.
   - For each number, we check if it exists in our set. If it does not, we append it to the `missing` vector.
   - We stop once we have collected `k` missing numbers.
4. **Output**: We return the vector containing the missing numbers.

### Complexity Analysis
- **Time Complexity**: O(n + k), where n is the number of elements in the array. The population of the set takes O(n), and finding k missing numbers will take at most O(k).
- **Space Complexity**: O(n), for the set storing elements of the array.

This method efficiently finds and returns the missing numbers as required by the problem statement.