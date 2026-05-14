# LeetCode Daily – 2026-05-14

## 🧠 Problem #2784 – **Check if Array is Good**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/check-if-array-is-good)

---

### 📝 Problem Description

You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].

base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].

Return true if the given array is good, otherwise return false.

Note: A permutation of integers represents an arrangement of these numbers.

 
Example 1:


Input: nums = [2, 1, 3]
Output: false
Explanation: Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. However, base[3] has four elements but array nums has three. Therefore, it can not be a permutation of base[3] = [1, 2, 3, 3]. So the answer is false.


Example 2:


Input: nums = [1, 3, 3, 2]
Output: true
Explanation: Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. It can be seen that nums is a permutation of base[3] = [1, 2, 3, 3] (by swapping the second and fourth elements in nums, we reach base[3]). Therefore, the answer is true.

Example 3:


Input: nums = [1, 1]
Output: true
Explanation: Since the maximum element of the array is 1, the only candidate n for which this array could be a permutation of base[n], is n = 1. It can be seen that nums is a permutation of base[1] = [1, 1]. Therefore, the answer is true.

Example 4:


Input: nums = [3, 4, 4, 1, 2, 1]
Output: false
Explanation: Since the maximum element of the array is 4, the only candidate n for which this array could be a permutation of base[n], is n = 4. However, base[4] has five elements but array nums has six. Therefore, it can not be a permutation of base[4] = [1, 2, 3, 4, 4]. So the answer is false.


 
Constraints:


	1 <= nums.length <= 100
	1 <= num[i] <= 200

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Check if Array is Good" on LeetCode, we need to determine if an array can be considered "good" based on the definition provided in the problem statement.

### Problem Definition:
An array `arr` of size `n` is said to be good if:
- For every element `val` in the array, it has exactly `val` occurrences in the array.

For example:
- If `arr = [1,2,2]`, it is good because `1` appears once and `2` appears twice.
- If `arr = [3,3,2,2,1,1]`, it is also good because `1` appears once, `2` appears twice, and `3` appears thrice.

### Steps to Solve:
1. Count the frequency of each distinct number in the array.
2. Check if each number meets the required frequency condition (i.e., the number of occurrences of `val` should be exactly `val`).
3. If all numbers satisfy the condition, the array is good; otherwise, it is not.

### Implementation:
We'll use a hash map (`unordered_map`) to store the frequency of each number, and then iterate through this map to verify the good condition.

Here's how this can be implemented in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

class Solution {
public:
    bool isGood(std::vector<int>& arr) {
        std::unordered_map<int, int> freq;

        // Step 1: Count the frequency of each number in the array
        for (int num : arr) {
            freq[num]++;
        }

        // Step 2: Check the good condition for each number
        for (const auto& [key, count] : freq) {
            if (key != count) {
                return false; // If the number of occurrences does not match the number, return false
            }
        }
        
        return true; // All numbers satisfy the condition
    }
};

int main() {
    Solution solution;
    std::vector<int> arr = {1, 2, 2}; // Example input, can test with different values
    bool result = solution.isGood(arr);
    std::cout << (result ? "The array is good!" : "The array is not good!") << std::endl;
    
    return 0;
}
```

### Explanation of the Code:
1. **Using `unordered_map`**: This data structure allows us to count the frequency of each element in constant average time complexity for insert and lookup operations.
  
2. **Counting Frequencies**: We loop over the input array, incrementing the count for each element we encounter in the map.

3. **Validating Frequencies**: We then loop over each element in the frequency map. For each element, we check if the key (the number) equals its frequency (the value). If any key does not match its frequency, we return `false`.

4. **Return Result**: If all checks are passed, the function returns `true`, confirming the array is good.

### Complexity Analysis:
- **Time Complexity**: O(n) where n is the size of the array. We traverse the array once to count frequencies and then traverse the frequency map, which contains at most n entries.
- **Space Complexity**: O(n) in the worst case, where all elements are distinct and stored in the hash map.

This implementation is efficient and straightforward, making it easy to understand the problem statement and its solution.