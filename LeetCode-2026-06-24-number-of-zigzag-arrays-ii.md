# LeetCode Daily – 2026-06-24

## 🧠 Problem #3700 – **Number of ZigZag Arrays II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-zigzag-arrays-ii)

---

### 📝 Problem Description

You are given three integers n, l, and r.

A ZigZag array of length n is defined as follows:


	Each element lies in the range [l, r].
	No two adjacent elements are equal.
	No three consecutive elements form a strictly increasing or strictly decreasing sequence.


Return the total number of valid ZigZag arrays.

Since the answer may be large, return it modulo 109 + 7.

A sequence is said to be strictly increasing if each element is strictly greater than its previous one (if exists).

A sequence is said to be strictly decreasing if each element is strictly smaller than its previous one (if exists).

 
Example 1:


Input: n = 3, l = 4, r = 5

Output: 2

Explanation:

There are only 2 valid ZigZag arrays of length n = 3 using values in the range [4, 5]:


	[4, 5, 4]
	[5, 4, 5]



Example 2:


Input: n = 3, l = 1, r = 3

Output: 10

Explanation:

​​​​​​​There are 10 valid ZigZag arrays of length n = 3 using values in the range [1, 3]:


	[1, 2, 1], [1, 3, 1], [1, 3, 2]
	[2, 1, 2], [2, 1, 3], [2, 3, 1], [2, 3, 2]
	[3, 1, 2], [3, 1, 3], [3, 2, 3]


All arrays meet the ZigZag conditions.


 
Constraints:


	3 <= n <= 109
	1 <= l < r <= 75​​​​​​​

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Number of Zigzag Arrays II" from LeetCode requires us to determine the number of different zigzag arrays that can be formed using the numbers from 1 to n. A zigzag array is defined as an array where every two consecutive elements are different and either increase or decrease alternately. 

### Problem Breakdown:
1. **Understanding Zigzag Arrays**: A zigzag array of length `n` can start with either an increasing or a decreasing pattern. The challenge is to count all such valid configurations.

2. **Dynamic Programming Approach**: 
   - We can use dynamic programming to build the solution. We maintain two states:
     - `add[i]`: Number of zigzag arrays of length `i` ending with a larger number than its previous number.
     - `sub[i]`: Number of zigzag arrays of length `i` ending with a smaller number than its previous number.

3. **Recurrence Relation**:
   - For lengths greater than 1:
     - From a zigzag array of length `i-1` ending with a larger number, you can append any number that is smaller (this forms a "down" transition).
     - From a zigzag array of length `i-1` ending with a smaller number, you can append any number that is larger (this forms an "up" transition).
   - Hence, the recurrence relations can be defined as:
     - `add[i] = sub[i-1] * (n - i + 1)`, because to have a big number on the end of length `i`, we can choose from smaller numbers at the end of `i-1` length.
     - `sub[i] = add[i-1] * (n - i + 1)`, similarly for smaller ends.

4. **Base Conditions**:
   - For `n >= 1`, we can initialize:
     - `add[1] = n` (1 through n are all valid).
     - `sub[1] = 0`, since there's no valid zigzag for size 1 that ends with a smaller element.

5. **Final Result**:
   - Total zigzag arrays will be the sum of both configurations for arrays of length `n`.

### C++ Implementation
Below is the C++ code that implements the above logic:

```cpp
class Solution {
public:
    int zigzag(int n) {
        if (n == 1) return 1; // Only one way for n = 1
        
        long long add = n;    // for length 1 we can have any number from 1 to n as an end with larger
        long long sub = 0;    // no element exists for length 1 as an end with smaller
        
        // We use long long to avoid overflow for large n
        for (int i = 2; i <= n; ++i) {
            long long new_add = sub * (n - i + 1); // new add states from current sub
            long long new_sub = add * (n - i + 1); // new sub states from current add
            
            add = new_add; // update add
            sub = new_sub; // update sub
        }
        
        return add + sub; // Total zigzag arrays
    }
    
    int countZigzagArrays(int n) {
        return zigzag(n);
    }
};
```

### Explanation of the Code:
- We initialize `add` and `sub` for length 1.
- For each subsequent length (from 2 to n), we calculate the new values for `add` and `sub` based on the current values.
- We return the sum of `add` and `sub` as the final result, which gives the total number of zigzag arrays of length `n`.

### Complexity:
- **Time Complexity**: O(n) due to iterating from 2 to n.
- **Space Complexity**: O(1) because we only need a few variables to store current and previous counts. 

This approach efficiently computes the answer while minimizing computational overhead.