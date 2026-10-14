# LeetCode Daily – 2026-10-14

## 🧠 Problem #3723 – **Maximize Sum of Squares of Digits**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-sum-of-squares-of-digits)

---

### 📝 Problem Description

You are given two positive integers num and sum.

A positive integer n is good if it satisfies both of the following:


	The number of digits in n is exactly num.
	The sum of digits in n is exactly sum.


The score of a good integer n is the sum of the squares of digits in n.

Return a string denoting the good integer n that achieves the maximum score. If there are multiple possible integers, return the maximum ​​​​​​​one. If no such integer exists, return an empty string.

 
Example 1:


Input: num = 2, sum = 3

Output: &quot;30&quot;

Explanation:

There are 3 good integers: 12, 21, and 30.


	The score of 12 is 12 + 22 = 5.
	The score of 21 is 22 + 12 = 5.
	The score of 30 is 32 + 02 = 9.


The maximum score is 9, which is achieved by the good integer 30. Therefore, the answer is &quot;30&quot;.


Example 2:


Input: num = 2, sum = 17

Output: &quot;98&quot;

Explanation:

There are 2 good integers: 89 and 98.


	The score of 89 is 82 + 92 = 145.
	The score of 98 is 92 + 82 = 145.


The maximum score is 145. The maximum good integer that achieves this score is 98. Therefore, the answer is &quot;98&quot;.


Example 3:


Input: num = 1, sum = 10

Output: &quot;&quot;

Explanation:

There are no integers that have exactly 1 digit and whose digits sum to 10. Therefore, the answer is &quot;&quot;.


 
Constraints:


	1 <= num <= 2 * 105
	1 <= sum <= 2 * 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Maximize Sum of Squares of Digits", we need to understand the task clearly. The goal is to maximize the sum of the squares of the digits of a given integer `num` after performing a series of operations defined by `k`.

### Problem Explanation

Given an integer `num` and an integer `k`, you can perform the operation of increasing any digit of `num` by 1 for a total of `k` times (you may distribute the increases among different digits). The objective is to determine the maximum possible value of the sum of the squares of the digits of `num` after performing these operations.

### Steps to Solve

1. **Identify Digits**: Convert the number into its constituent digits.
2. **Increase Strategy**: To maximize the sum of squares, always increase the digit that is currently the largest (since squaring a larger number yields a significantly larger result). 
3. **Distribute k Operations**: Use a priority queue (max-heap) to keep track of the largest digit at any point, as this allows us to efficiently get and modify the largest digit.
4. **Perform Operations**: Each operation involves taking the largest digit, increasing it, recalculating its square, and putting it back into the priority queue until we have exhausted `k` operations.
5. **Calculate Result**: Once all operations are performed, calculate the sum of squares of the digits to get the final result.

### C++ Implementation

Here's how the implementation looks in C++:

```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
public:
    int maximizeSum(vector<int>& nums, int k) {
        // Create a max heap (priority queue) to store the digits
        priority_queue<int> maxHeap;
        
        // Push all digits into the max heap
        for (int num : nums) {
            maxHeap.push(num);
        }

        // Perform the operation k times
        while (k > 0) {
            // Extract the maximum element
            int currentMax = maxHeap.top();
            maxHeap.pop();

            // Increment this digit
            currentMax++;
            
            // Push it back into the heap
            maxHeap.push(currentMax);
            k--;
        }

        // Calculate the result: the sum of squares of digits
        int result = 0;
        while (!maxHeap.empty()) {
            int digit = maxHeap.top();
            maxHeap.pop();
            result += digit * digit; // Sum of squares
        }

        return result;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3}; // Example input
    int k = 3; // Number of increments allowed
    int maxSum = solution.maximizeSum(nums, k);
    cout << "Maximum sum of squares: " << maxSum << endl;
    return 0;
}
```

### Explanation of the Code

1. **Priority Queue**: We use a priority queue (max-heap) to keep track of the digits.
2. **Increments Loop**: For each increment, we extract the largest digit, increment it, and then push it back into the heap.
3. **Sum of Squares Calculation**: After all increments, we pop all digits from the heap to compute the sum of their squares.
4. **Complexity**: The time complexity is \(O(k \log n)\) where \(n\) is the number of digits, because each insert and erase operation in a heap takes \(O(\log n)\).

This approach ensures that we always act on the most strategically advantageous digit, thus maximizing the final sum of squares.