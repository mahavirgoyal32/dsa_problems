# LeetCode Daily – 2026-05-25

## 🧠 Problem #1871 – **Jump Game VII**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/jump-game-vii)

---

### 📝 Problem Description

You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to &#39;0&#39;. You can move from index i to index j if the following conditions are fulfilled:


	i + minJump <= j <= min(i + maxJump, s.length - 1), and
	s[j] == &#39;0&#39;.


Return true if you can reach index s.length - 1 in s, or false otherwise.

 
Example 1:


Input: s = &quot;011010&quot;, minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3. 
In the second step, move from index 3 to index 5.


Example 2:


Input: s = &quot;01101110&quot;, minJump = 2, maxJump = 3
Output: false


 
Constraints:


	2 <= s.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.
	s[0] == &#39;0&#39;
	1 <= minJump <= maxJump < s.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem "Jump Game VII" step by step. 

### Problem Overview

You are given a string `s` consisting of characters `'0'` and `'1'`, and two integers `minJump` and `maxJump`. The objective is to determine if you can reach the last index of the string starting from the first index by jumping according to the rules defined by `minJump` and `maxJump`.

- You can jump from index `i` to any index `j` if `i + minJump <= j <= i + maxJump` and `s[j]` is `'0'`.

### Approach

1. **Initialization**: The starting point is index `0`. We need to track the farthest index we can reach.

2. **BFS-like Exploration**: As we explore indices, we'll check valid jumps from the current reachable index to see if we can reach further:
   - Use a variable `furthest` which keeps track of how far we can jump to from any valid position.
   - Maintain a window to count how many valid zeros are there that we can jump from.

3. **Index Management**:
   - If the current index is reachable (`i`), check if we can jump to indices from `i + minJump` to `i + maxJump`.
   - If we find `s[j]` is `'0'`, we extend our reach and increase our `furthest` index.

4. **Termination**: If at any point `furthest` reaches or exceeds the last index of `s`, return `true`. If we exhaust all reachable indices and can't reach the end, return `false`.

### Implementation

Here's the C++ code that implements this logic:

```cpp
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    bool canReach(string s, int minJump, int maxJump) {
        int n = s.length();
        if (s[0] != '0' || s[n - 1] != '0') {
            return false; // First and last must be '0'
        }

        // The farthest index we can reach
        int furthest = 0;
        // Start BFS from the first index
        for (int i = 0; i < n; ++i) {
            // If the index i is reachable
            if (i > furthest) return false; // If we're here, i must be reachable
            // Update the farthest we can go from our current index
            if (s[i] == '0') {
                if (i + minJump <= n - 1) {
                    furthest = max(furthest, i + maxJump); // Update furthest
                }
            }
            // When the furthest can reach the last index
            if (furthest >= n - 1) {
                return true; // We can reach the last index
            }
        }
        return false; // If we finish the loop without reaching the end
    }
};
```

### Explanation of the Code

1. **Input Check**: First, we check if the first and last characters of the string are `0`. If not, jumping from the start to the end isn't possible.

2. **Iterate through Indices**: We loop through each index and check if it’s reachable:
   - If `i` is greater than `furthest`, we return `false` because it means we can't reach this index.
   - If the current index `i` can jump further (it's a `0`), we calculate the possible maximum reach from `i` and update `furthest`.

3. **Check if Goal is Achievable**: After updating `furthest`, if it reaches or exceeds `n - 1`, we return `true`.

This algorithm runs in O(n) time because we traverse the string once, which is efficient for this problem. The space complexity is O(1) as we only use a few variables for tracking indices.