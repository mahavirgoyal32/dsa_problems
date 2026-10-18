# LeetCode Daily – 2026-10-18

## 🧠 Problem #1569 – **Number of Ways to Reorder Array to Get Same BST**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst)

---

### 📝 Problem Description

Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree (BST) by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to that formed from the original array nums.


	For example, given nums = [2,1,3], we will have 2 as the root, 1 as a left child, and 3 as a right child. The array [2,3,1] also yields the same BST but [3,2,1] yields a different BST.


Return the number of ways to reorder nums such that the BST formed is identical to the original BST formed from nums.

Since the answer may be very large, return it modulo 109 + 7.

 
Example 1:


Input: nums = [2,1,3]
Output: 1
Explanation: We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST.


Example 2:


Input: nums = [3,4,5,1,2]
Output: 5
Explanation: The following 5 arrays will yield the same BST: 
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]


Example 3:


Input: nums = [1,2,3]
Output: 0
Explanation: There are no other orderings of nums that will yield the same BST.


 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i] <= nums.length
	All integers in nums are distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Number of Ways to Reorder Array to Get Same BST", we need to determine the number of distinct ways to reorder a given array such that it constructs the same Binary Search Tree (BST) as the one constructed from the original array.

### Understanding the problem

1. **Binary Search Tree Properties**:
   - All elements in the left subtree of a node are less than the node's value.
   - All elements in the right subtree of a node are greater than the node's value.
   - The order in which elements are added respecting these properties determines the structure of the BST.

2. **Problem Breakdown**:
   - The original array will produce a unique BST.
   - The number of ways to reorder the array to produce the same BST depends on the number of ways to select elements for the left and right subtrees from the remaining elements during the construction of the BST.

3. **Combinatorial Representation**:
   - If `left` is the number of elements that will go to the left subtree and `right` is the number of elements that will go to the right subtree of the root node, the total unique arrangements of these subtrees can be calculated using:
     \[
     \frac{(left + right)!}{left! \times right!}
     \]
   - This is derived from combinatorics where we choose which positions in a sequence of length `left + right` will be filled with elements from the left subtree.

### Steps to Solution

1. **Count elements**: Use a recursive function to traverse the array and count how many elements will go to the left and right subtree for each node.
2. **Calculate combinations**: Use combinations to calculate how many ways to combine these elements to maintain the same order.
3. **Memoization**: Use memoization to cache results of subproblems to optimize the performance.

Here's the implementation in C++ that follows the outlined approach:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    // Function to calculate factorial
    long long factorial(int n) {
        long long res = 1;
        for (int i = 1; i <= n; ++i) {
            res *= i;
        }
        return res;
    }

    // Function to calculate combinations
    long long nCr(int n, int r) {
        if (r > n) return 0;
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    // Memoization map for storing previous results
    unordered_map<string, long long> memo;

    long long countWays(vector<int>& nums) {
        if (nums.size() <= 1) return 1; // 1 way to arrange 0 or 1 elements

        int root = nums[0];
        vector<int> left, right;

        // Partition the array into left and right subtrees
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] < root) {
                left.push_back(nums[i]);
            } else {
                right.push_back(nums[i]);
            }
        }

        // Calculate ways for left and right subtrees
        long long leftWays = countWays(left);
        long long rightWays = countWays(right);

        // Calculate the number of ways to interleave left and right
        long long interleaveWays = nCr(left.size() + right.size(), left.size());

        return leftWays * rightWays * interleaveWays;
    }

    int numOfWays(vector<int>& nums) {
        return countWays(nums);
    }
};

// Example Usage
int main() {
    Solution solution;
    vector<int> nums = {3, 4, 5, 1, 2};
    cout << solution.numOfWays(nums) << endl; // Output the number of ways
    return 0;
}
```

### Explanation of the Code

1. **factorial and nCr Functions**: We define these helper functions to calculate factorials and combinations.
2. **countWays Function**: This function recursively counts the number of ways to construct BSTs. For every node (root), it partitions the remaining nodes into those that go to the left and those that go to the right. It computes the number of arrangements possible for these partitions.
3. **memo**: This map helps to store previously computed results to avoid redundant calculations (though in the current implementation, memoization is set up but not actually utilized).
4. **numOfWays Function**: This is the main entry point that invokes the recursive counting.

### Time Complexity

The algorithm has a time complexity of \(O(n^2)\) in the worst case due to recursive calls and the combinations calculation, which can be optimized further.

### Conclusion

This solution provides a systematic approach to leveraging combinatorics and properties of BST efficiently using recursion.