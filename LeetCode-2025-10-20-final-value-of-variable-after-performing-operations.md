# LeetCode Daily – 2025-10-20

## 🧠 Problem #2011 – **Final Value of Variable After Performing Operations**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/final-value-of-variable-after-performing-operations)

---

### 📝 Problem Description

There is a programming language with only four operations and one variable X:


	++X and X++ increments the value of the variable X by 1.
	--X and X-- decrements the value of the variable X by 1.


Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 
Example 1:


Input: operations = [&quot;--X&quot;,&quot;X++&quot;,&quot;X++&quot;]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.


Example 2:


Input: operations = [&quot;++X&quot;,&quot;++X&quot;,&quot;X++&quot;]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.


Example 3:


Input: operations = [&quot;X++&quot;,&quot;++X&quot;,&quot;--X&quot;,&quot;X--&quot;]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.


 
Constraints:


	1 <= operations.length <= 100
	operations[i] will be either &quot;++X&quot;, &quot;X++&quot;, &quot;--X&quot;, or &quot;X--&quot;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's tackle the problem "Final Value of Variable After Performing Operations" from LeetCode.

### Problem Description

You are given a variable `x` initialized to 0. You have a list of strings `operations`, where each string consists of either "X++", "++X", "X--", or "--X". Your task is to calculate the final value of `x` after performing all the operations in the list.

- The operation "X++" or "++X" increases the value of `x` by 1.
- The operation "X--" or "--X" decreases the value of `x` by 1.

### Example

#### Input
```plaintext
operations = ["--X", "X++", "X++"]
```

#### Output
```plaintext
2
```

#### Explanation
- Start with `x = 0`.
- `--X` results in `x = -1`.
- `X++` results in `x = 0`.
- `X++` results in `x = 1`.

### Approach

To solve this problem, we can follow these steps:

1. Initialize `x` to 0.
2. Iterate through each operation in the `operations` array.
3. For each operation:
   - If it contains "++", increment `x` by 1.
   - If it contains "--", decrement `x` by 1.
4. At the end of the loop, `x` will hold the final value.
5. Return or print the final value of `x`.

### C++ Code Implementation

Here is the C++ implementation of the above approach:

```cpp
#include <vector>
#include <string>

class Solution {
public:
    int finalValueAfterOperations(std::vector<std::string>& operations) {
        int x = 0; // Start with x initialized to 0

        for (const std::string& operation : operations) {
            // Check if the operation increases or decreases x
            if (operation == "X++" || operation == "++X") {
                x++; // Increment x
            } else {
                x--; // Decrement x
            }
        }

        return x; // Return the final value of x
    }
};
```

### Explanation of the Code

1. We define a class `Solution` and inside it declare a public function `finalValueAfterOperations`. This function takes a vector of strings named `operations`.
2. We initialize a variable `x` to 0.
3. We then loop through each operation:
   - If the operation is either "X++" or "++X", we increment `x`.
   - If the operation is either "X--" or "--X", we decrement `x`.
4. Finally, we return the computed value of `x`.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the number of operations. We have to go through each operation exactly once.
- **Space Complexity**: O(1), since we are using a constant amount of space (just the integer `x`).

This solution efficiently computes the final value of `x` based on the specified operations.