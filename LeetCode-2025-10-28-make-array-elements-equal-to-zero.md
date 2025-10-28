# LeetCode Daily – 2025-10-28

## 🧠 Problem #3354 – **Make Array Elements Equal to Zero**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/make-array-elements-equal-to-zero)

---

### 📝 Problem Description

You are given an integer array nums.

Start by selecting a starting position curr such that nums[curr] == 0, and choose a movement direction of either left or right.

After that, you repeat the following process:


	If curr is out of the range [0, n - 1], this process ends.
	If nums[curr] == 0, move in the current direction by incrementing curr if you are moving right, or decrementing curr if you are moving left.
	Else if nums[curr] > 0:
	
		Decrement nums[curr] by 1.
		Reverse your movement direction (left becomes right and vice versa).
		Take a step in your new direction.
	
	


A selection of the initial position curr and movement direction is considered valid if every element in nums becomes 0 by the end of the process.

Return the number of possible valid selections.

 
Example 1:


Input: nums = [1,0,2,0,3]

Output: 2

Explanation:

The only possible valid selections are the following:


	Choose curr = 3, and a movement direction to the left.

	
		[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,0].
	
	
	Choose curr = 3, and a movement direction to the right.
	
		[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].
	
	



Example 2:


Input: nums = [2,3,4,0,4,1,0]

Output: 0

Explanation:

There are no possible valid selections.


 
Constraints:


	1 <= nums.length <= 100
	0 <= nums[i] <= 100
	There is at least one element i where nums[i] == 0.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Make Array Elements Equal to Zero" on LeetCode requires us to count the number of operations needed to make all elements of an array equal to zero. Each operation allows us to reduce all elements of a chosen subset by 1. If we repeatedly choose subsets until all elements are reduced to zero, our goal is to find how many distinct operations we need.

### Problem Explanation:

Given an array `nums` of `n` elements, the task is to perform a sequence of operations. In each operation, you can select any subset of `nums` and decrease each of its elements by 1, provided that no element in that subset becomes less than zero.

To ultimately minimize the number of operations to make all elements equal to zero:

1. **Understanding the Operations:** When you choose a subset of numbers to decrease, any number in that subset can only be chosen once per operation. Therefore, each number informs us how many operations we need based on its value.
  
2. **Strategy for Minimizing Operations:** The key observation is that each unique value in the array saves us one operation:
   - To reduce the maximum value, we will need one operation.
   - To reduce the next unique maximum value, we will require a second operation, and so on.
   
This means that the number of unique elements in `nums` is directly equal to the number of operations we need.

### Steps to Solve the Problem in C++:

1. Utilize a `std::set` to keep track of unique elements in the array.
2. Return the size of the set, which corresponds to the number of distinct values present in the array.

### C++ Code Implementation:

```cpp
#include <vector>
#include <set>

class Solution {
public:
    int minimumOperations(std::vector<int>& nums) {
        // Create a set to store unique numbers
        std::set<int> uniqueNumbers;

        // Insert elements into the set
        // Only insert non-zero elements
        for (int num : nums) {
            if (num != 0) {
                uniqueNumbers.insert(num);
            }
        }
        
        // The size of the set corresponds to the number of unique operations needed
        return uniqueNumbers.size();
    }
};
```

### Explanation of the Code:

1. **Set Data Structure:** We use a `std::set` to store unique values because a set automatically handles duplicates and only keeps unique entries.

2. **Iterating Over the Input Array:** We loop through each element in the input `nums` array. If the element is not zero, we insert it into the set.

3. **Counting Unique Non-Zero Values:** After populating the set, the number of operations required to reduce all elements of the array to zero is simply the size of this set (as each unique non-zero element represents a distinct operation).

### Complexity Analysis:

- **Time Complexity:** O(n), where `n` is the number of elements in `nums`. We traverse the array once to populate the set.
- **Space Complexity:** O(k), where `k` is the number of unique non-zero elements in `nums`, which is stored in the set.

This solution efficiently counts the minimum number of operations required based on the unique values found in the input array.