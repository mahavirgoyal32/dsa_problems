# LeetCode Daily – 2026-02-27

## 🧠 Problem #3666 – **Minimum Operations to Equalize Binary String**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-operations-to-equalize-binary-string)

---

### 📝 Problem Description

You are given a binary string s, and an integer k.

In one operation, you must choose exactly k different indices and flip each &#39;0&#39; to &#39;1&#39; and each &#39;1&#39; to &#39;0&#39;.

Return the minimum number of operations required to make all characters in the string equal to &#39;1&#39;. If it is not possible, return -1.

 
Example 1:


Input: s = &quot;110&quot;, k = 1

Output: 1

Explanation:


	There is one &#39;0&#39; in s.
	Since k = 1, we can flip it directly in one operation.



Example 2:


Input: s = &quot;0101&quot;, k = 3

Output: 2

Explanation:

One optimal set of operations choosing k = 3 indices in each operation is:


	Operation 1: Flip indices [0, 1, 3]. s changes from &quot;0101&quot; to &quot;1000&quot;.
	Operation 2: Flip indices [1, 2, 3]. s changes from &quot;1000&quot; to &quot;1111&quot;.


Thus, the minimum number of operations is 2.


Example 3:


Input: s = &quot;101&quot;, k = 2

Output: -1

Explanation:

Since k = 2 and s has only one &#39;0&#39;, it is impossible to flip exactly k indices to make all &#39;1&#39;. Hence, the answer is -1.


 
Constraints:


	1 <= s.length <= 10​​​​​​​5
	s[i] is either &#39;0&#39; or &#39;1&#39;.
	1 <= k <= s.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Minimum Operations to Equalize Binary String", we need to determine the minimum number of operations required to make all characters of a binary string equal. The operations allowed are flipping a substring of the binary string. 

Here’s a step-by-step explanation of how to approach solving this problem in C++.

### Problem Breakdown:
1. **Understanding the Binary String**: The string consists of '0's and '1's. To equalize the string, we want to know how many contiguous sequences of '0's and '1's we have in the string.

2. **Count Transitions**: By counting the transitions (i.e., changes from '0' to '1' or '1' to '0') in the string, we can understand how many segments of '0's and '1's exist.

3. **Operations Calculation**:
   - If we have `k` transitions, the number of segments of different characters will be `k + 1`. 
   - To equalize the string (to make it all '0's or all '1's), we can always convert the segments of one character to the other. 
   - The minimum operations required would be `min(number_of_segments_of_0s, number_of_segments_of_1s)` which can be derived from the number of transitions.

### Implementation Steps:
1. Initialize counters for the segments of '0's and '1's.
2. Traverse the binary string, count segments based on transitions.
3. Calculate the result based on the counts of segments.

### C++ Implementation:

```cpp
class Solution {
public:
    int minimumOperations(string s) {
        if (s.empty()) return 0; // Edge case for empty string
        
        // Count the number of segments of '0's and '1's
        int count_zero_segments = 0;
        int count_one_segments = 0;
        
        char previous_char = s[0];
        if (previous_char == '0') {
            count_zero_segments++;
        } else {
            count_one_segments++;
        }
        
        for (size_t i = 1; i < s.size(); ++i) {
            if (s[i] != previous_char) { // Transition detected
                if (s[i] == '0') {
                    count_zero_segments++;
                } else {
                    count_one_segments++;
                }
                previous_char = s[i]; // Update previous character
            }
        }
        
        // The result is the minimum of the two segment counts
        return min(count_zero_segments, count_one_segments);
    }
};
```

### Explanation of the Code:
1. **Edge case handling**: If the input string `s` is empty, we return 0 immediately.
2. **Initialization**: We initialize counters for `count_zero_segments` and `count_one_segments`. We also track the previous character we encountered.
3. **Loop through the string**: Starting from the second character, we check for any transition from '0' to '1' or '1' to '0'. Each time we encounter a transition, we increment the corresponding segment counter.
4. **Calculate the result**: Finally, we compute the minimum of the two segment counters, which will give us the minimum operations needed to equalize the binary string.

This approach runs in O(n) time complexity where n is the length of the string, making it efficient for typical input sizes in competitive programming.