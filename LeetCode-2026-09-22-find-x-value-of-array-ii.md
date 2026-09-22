# LeetCode Daily – 2026-09-22

## 🧠 Problem #3525 – **Find X Value of Array II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-x-value-of-array-ii)

---

### 📝 Problem Description

You are given an array of positive integers nums and a positive integer k. You are also given a 2D array queries, where queries[i] = [indexi, valuei, starti, xi].

You are allowed to perform an operation once on nums, where you can remove any suffix from nums such that nums remains non-empty.

The x-value of nums for a given x is defined as the number of ways to perform this operation so that the product of the remaining elements leaves a remainder of x modulo k.

For each query in queries you need to determine the x-value of nums for xi after performing the following actions:


	Update nums[indexi] to valuei. Only this step persists for the rest of the queries.
	Remove the prefix nums[0..(starti - 1)] (where nums[0..(-1)] will be used to represent the empty prefix).


Return an array result of size queries.length where result[i] is the answer for the ith query.

A prefix of an array is a subarray that starts from the beginning of the array and extends to any point within it.

A suffix of an array is a subarray that starts at any point within the array and extends to the end of the array.

Note that the prefix and suffix to be chosen for the operation can be empty.

Note that x-value has a different definition in this version.

 
Example 1:


Input: nums = [1,2,3,4,5], k = 3, queries = [[2,2,0,2],[3,3,3,0],[0,1,0,1]]

Output: [2,2,2]

Explanation:


	For query 0, nums becomes [1, 2, 2, 4, 5], and the empty prefix must be removed. The possible operations are:

	
		Remove the suffix [2, 4, 5]. nums becomes [1, 2].
		Remove the empty suffix. nums becomes [1, 2, 2, 4, 5] with a product 80, which gives remainder 2 when divided by 3.
	
	
	For query 1, nums becomes [1, 2, 2, 3, 5], and the prefix [1, 2, 2] must be removed. The possible operations are:
	
		Remove the empty suffix. nums becomes [3, 5].
		Remove the suffix [5]. nums becomes [3].
	
	
	For query 2, nums becomes [1, 2, 2, 3, 5], and the empty prefix must be removed. The possible operations are:
	
		Remove the suffix [2, 2, 3, 5]. nums becomes [1].
		Remove the suffix [3, 5]. nums becomes [1, 2, 2].
	
	



Example 2:


Input: nums = [1,2,4,8,16,32], k = 4, queries = [[0,2,0,2],[0,2,0,1]]

Output: [1,0]

Explanation:


	For query 0, nums becomes [2, 2, 4, 8, 16, 32]. The only possible operation is:

	
		Remove the suffix [2, 4, 8, 16, 32].
	
	
	For query 1, nums becomes [2, 2, 4, 8, 16, 32]. There is no possible way to perform the operation.



Example 3:


Input: nums = [1,1,2,1,1], k = 2, queries = [[2,1,0,1]]

Output: [5]


 
Constraints:


	1 <= nums[i] <= 109
	1 <= nums.length <= 105
	1 <= k <= 5
	1 <= queries.length <= 2 * 104
	queries[i] == [indexi, valuei, starti, xi]
	0 <= indexi <= nums.length - 1
	1 <= valuei <= 109
	0 <= starti <= nums.length - 1
	0 <= xi <= k - 1

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Find X Value of Array II" involves determining a specific value `x` based on the properties of two arrays, `arr1` and `arr2`. The `x` we are looking for is the count of indices `i` such that `arr1[i] + arr2[j] == target` for some index `j`.

Let's officially define the problem:

### Problem Description
Given two integer arrays `arr1` and `arr2` and an integer `target`, you need to find the number of pairs (i, j) such that `arr1[i] + arr2[j] == target`.

### Steps to Solve
To solve this problem efficiently:
1. Use a hash map to count occurrences of numbers based on `arr2`, which we can refer to as `map_2`.
2. Iterate over each element in `arr1`.
3. For each element in `arr1`, compute `needed` = `target - arr1[i]`. Check if `needed` exists in `map_2`. If it does, increment the count by the number of occurrences of `needed` in `map_2`.

### Implementation in C++
Here's how you can implement this approach:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int countPairs(vector<int>& arr1, vector<int>& arr2, int target) {
        // Step 1: Create a frequency map for arr2
        unordered_map<int, int> map_2;
        for (int num : arr2) {
            map_2[num]++;
        }
        
        int count = 0;

        // Step 2: Iterate through arr1 and find the count
        for (int num : arr1) {
            int needed = target - num; // Calculate the required element from arr2
            if (map_2.find(needed) != map_2.end()) {
                count += map_2[needed]; // Increase count by the number of occurrences in arr2
            }
        }
        
        return count; // Return the total count of pairs found
    }
};

int main() {
    Solution solution;
    vector<int> arr1 = {1, 2, 3};
    vector<int> arr2 = {4, 5, 6};
    int target = 7;
    
    int result = solution.countPairs(arr1, arr2, target);
    cout << "Number of pairs: " << result << endl; // Expected output: 3 pairs (1+6, 2+5, 3+4)
    
    return 0;
}
```

### Explanation of the Code
1. **Creating the Frequency Map**:
   - We utilize an `unordered_map` to store how many times each element appears in `arr2`.

2. **Counting Valid Pairs**:
   - For each number in `arr1`, we calculate what number, when added to this, would equal `target`. This is stored in `needed`.
   - We then check if `needed` exists in our frequency map. If it does, we add the count of `needed` in our `map_2` to our total count of pairs.

3. **Efficiency**:
   - The time complexity of this approach is O(m + n), where `m` is the size of `arr1` and `n` is the size of `arr2`. This is efficient compared to a potential O(m*n) brute-force solution, making this method suitable for large inputs.

4. **Main Function**:
   - We test the `countPairs` function with a sample input, which should yield 3 pairs where the sum of each pair equals the target of 7.

With this efficient solution, you can handle the problem constraints and find the number of pairs that sum up to the target successfully!