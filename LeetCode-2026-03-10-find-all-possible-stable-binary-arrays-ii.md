# LeetCode Daily – 2026-03-10

## 🧠 Problem #3130 – **Find All Possible Stable Binary Arrays II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii)

---

### 📝 Problem Description

You are given 3 positive integers zero, one, and limit.

A binary array arr is called stable if:


	The number of occurrences of 0 in arr is exactly zero.
	The number of occurrences of 1 in arr is exactly one.
	Each subarray of arr with a size greater than limit must contain both 0 and 1.


Return the total number of stable binary arrays.

Since the answer may be very large, return it modulo 109 + 7.

 
Example 1:


Input: zero = 1, one = 1, limit = 2

Output: 2

Explanation:

The two possible stable binary arrays are [1,0] and [0,1].


Example 2:


Input: zero = 1, one = 2, limit = 1

Output: 1

Explanation:

The only possible stable binary array is [1,0,1].


Example 3:


Input: zero = 3, one = 3, limit = 2

Output: 14

Explanation:

All the possible stable binary arrays are [0,0,1,0,1,1], [0,0,1,1,0,1], [0,1,0,0,1,1], [0,1,0,1,0,1], [0,1,0,1,1,0], [0,1,1,0,0,1], [0,1,1,0,1,0], [1,0,0,1,0,1], [1,0,0,1,1,0], [1,0,1,0,0,1], [1,0,1,0,1,0], [1,0,1,1,0,0], [1,1,0,0,1,0], and [1,1,0,1,0,0].


 
Constraints:


	1 <= zero, one, limit <= 1000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Find All Possible Stable Binary Arrays II" requires us to generate all possible binary arrays of a fixed size `n` that meet the criteria of being "stable." A stable binary array is defined such that no three adjacent elements are the same, which means for each element at position `i`, the elements at `i-1` and `i+1` must be different.

### Problem Outline

1. **Input:** An integer `n`, which specifies the size of the binary arrays. 
2. **Output:** List of all possible stable binary arrays of size `n`.

### Approach

1. **Backtracking Method:** We can use backtracking to build our binary arrays recursively. At each position in the binary array:
   - We can place either `0` or `1`, but we must ensure that the array remains stable.
   - Specifically, we check the last two elements before placing a new element to ensure that adding this element won't violate the stability condition.

2. **Base Case:** When the current length of the binary array equals `n`, we add the formed binary array to our result list.

3. **Recursion:** For each element, if we can place `0`, we do so and then recursively attempt to place the next element. The same goes for `1`.

### C++ Implementation

Here is a C++ implementation of the approach discussed above:

```cpp
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<string> findStableBinaryArrays(int n) {
        vector<string> result;
        vector<int> current;
        generateArrays(current, n, result);
        return result;
    }

private:
    void generateArrays(vector<int>& current, int n, vector<string>& result) {
        if (current.size() == n) {
            // Convert current vector into a string representation
            string stableArray;
            for (int bit : current) {
                stableArray += to_string(bit);
            }
            result.push_back(stableArray);
            return;
        }

        int length = current.size();
        
        // Option to append 0
        if (length < 2 || !(current[length - 1] == 0 && current[length - 2] == 0)) {
            current.push_back(0);
            generateArrays(current, n, result);
            current.pop_back(); // backtrack
        }
        
        // Option to append 1
        if (length < 2 || !(current[length - 1] == 1 && current[length - 2] == 1)) {
            current.push_back(1);
            generateArrays(current, n, result);
            current.pop_back(); // backtrack
        }
    }
};
```

### Explanation of Code:

1. **Function Definitions:**
   - `findStableBinaryArrays(int n)`: This function is responsible for initiating the backtracking process. It calls `generateArrays` to start building the binary arrays.
   - `generateArrays(...)`: This recursive function generates the stable binary arrays.
   
2. **Base Case:** When the size of the current vector (`current.size()`) equals `n`, we convert it to a string and store it in the result vector.

3. **Adding Elements:**
   - Before adding `0` or `1`, we check the last two elements of the current array. If the last two values are the same, we cannot add the same value (which would violate stability).

4. **Backtracking:** After each recursive call, we backtrack by removing the last added element, allowing exploration of other options.

### Time Complexity
The worst-case time complexity is exponential due to the recursive nature of the backtracking. It can be succinctly represented as `O(2^n)`, since in the worst case each of the `n` positions can potentially branch into two options.

### Conclusion
This implementation efficiently generates all possible stable binary arrays of a given size `n` using backtracking, ensuring that we satisfy the conditions for stability while building the arrays.