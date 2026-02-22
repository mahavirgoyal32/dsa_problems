# LeetCode Daily – 2026-02-22

## 🧠 Problem #868 – **Binary Gap**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-gap)

---

### 📝 Problem Description

Given a positive integer n, find and return the longest distance between any two adjacent 1&#39;s in the binary representation of n. If there are no two adjacent 1&#39;s, return 0.

Two 1&#39;s are adjacent if there are only 0&#39;s separating them (possibly no 0&#39;s). The distance between two 1&#39;s is the absolute difference between their bit positions. For example, the two 1&#39;s in &quot;1001&quot; have a distance of 3.

 
Example 1:


Input: n = 22
Output: 2
Explanation: 22 in binary is &quot;10110&quot;.
The first adjacent pair of 1&#39;s is &quot;10110&quot; with a distance of 2.
The second adjacent pair of 1&#39;s is &quot;10110&quot; with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that &quot;10110&quot; is not a valid pair since there is a 1 separating the two 1&#39;s underlined.


Example 2:


Input: n = 8
Output: 0
Explanation: 8 in binary is &quot;1000&quot;.
There are not any adjacent pairs of 1&#39;s in the binary representation of 8, so we return 0.


Example 3:


Input: n = 5
Output: 2
Explanation: 5 in binary is &quot;101&quot;.


 
Constraints:


	1 <= n <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the "Binary Gap" problem step-by-step in C++. First, we'll outline the problem and then dive into the code.

### Problem Statement
You are given an integer `n`, and you need to find the longest distance between two consecutive `1's` in the binary representation of `n`. If there are no two `1's` in the binary representation, the answer should be `0`.

#### Example:
- Input: `n = 22` (binary representation: `10110`)
- Output: `2` (the longest distance between consecutive `1's` is 2)

### Steps to Solve:
1. Convert the integer `n` to its binary representation.
2. Traverse the binary string to find the positions of `1's`.
3. Calculate the distance between consecutive positions of `1's` and update the maximum distance found.
4. Return the maximum distance found.

### C++ Code
Here’s a simple implementation of the above logic:

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int binaryGap(int n) {
        // Store the last position of '1' encountered
        int lastPosition = -1;
        // The maximum gap found
        int maxGap = 0;
        
        // Traverse through each bit of the given integer
        for (int i = 0; i < 32; ++i) {
            // Check if the current bit is '1'
            if (n & (1 << i)) {
                // If lastPosition is not -1, it means we found a previous '1'
                if (lastPosition != -1) {
                    // Calculate the gap and update maxGap accordingly
                    maxGap = max(maxGap, i - lastPosition);
                }
                // Update lastPosition to the current index
                lastPosition = i;
            }
        }
        
        return maxGap;
    }
};

int main() {
    Solution solution;
    int n = 22; // Example input
    cout << "The binary gap for " << n << " is: " << solution.binaryGap(n) << endl;
    return 0;
}
```

### Explanation of the Code:
1. **Initialization**: We initialize `lastPosition` to `-1` to signify that we haven’t encountered any `1's` yet, and `maxGap` to `0` to store the maximum gap we find.
   
2. **Bitwise Traversal**: We loop through each bit of the integer `n` from 0 to 31 (assuming we are dealing with 32-bit integers). 
   - We use the bitwise AND operation (`n & (1 << i)`) to check if the bit at position `i` is set (i.e., is `1`).

3. **Update Logic**:
   - If the current bit is `1`, we check if `lastPosition` has been set (i.e., we’ve found a previous `1`).
   - If it has, we calculate the distance between the current position (`i`) and `lastPosition`. We then update `maxGap` if the calculated distance is greater than the current `maxGap`.
   - Finally, we update `lastPosition` to the current index `i`.

4. **Return the Result**: After the loop, we return `maxGap`, which contains the length of the longest binary gap.

### Complexity Analysis:
- **Time Complexity**: O(1), since we are always examining a fixed number of bits (32 for a typical integer).
- **Space Complexity**: O(1), no additional space is used that scales with input size.

This implementation captures the required functionality efficiently, providing the correct result for the problem statement.