# LeetCode Daily – 2026-07-21

## 🧠 Problem #3499 – **Maximize Active Section with Trade I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-active-section-with-trade-i)

---

### 📝 Problem Description

You are given a binary string s of length n, where:


	&#39;1&#39; represents an active section.
	&#39;0&#39; represents an inactive section.


You can perform at most one trade to maximize the number of active sections in s. In a trade, you:


	Convert a contiguous block of &#39;1&#39;s that is surrounded by &#39;0&#39;s to all &#39;0&#39;s.
	Afterward, convert a contiguous block of &#39;0&#39;s that is surrounded by &#39;1&#39;s to all &#39;1&#39;s.


Return the maximum number of active sections in s after making the optimal trade.

Note: Treat s as if it is augmented with a &#39;1&#39; at both ends, forming t = &#39;1&#39; + s + &#39;1&#39;. The augmented &#39;1&#39;s do not contribute to the final count.

 
Example 1:


Input: s = &quot;01&quot;

Output: 1

Explanation:

Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.


Example 2:


Input: s = &quot;0100&quot;

Output: 4

Explanation:


	String &quot;0100&quot; &rarr; Augmented to &quot;101001&quot;.
	Choose &quot;0100&quot;, convert &quot;101001&quot; &rarr; &quot;100001&quot; &rarr; &quot;111111&quot;.
	The final string without augmentation is &quot;1111&quot;. The maximum number of active sections is 4.



Example 3:


Input: s = &quot;1000100&quot;

Output: 7

Explanation:


	String &quot;1000100&quot; &rarr; Augmented to &quot;110001001&quot;.
	Choose &quot;000100&quot;, convert &quot;110001001&quot; &rarr; &quot;110000001&quot; &rarr; &quot;111111111&quot;.
	The final string without augmentation is &quot;1111111&quot;. The maximum number of active sections is 7.



Example 4:


Input: s = &quot;01010&quot;

Output: 4

Explanation:


	String &quot;01010&quot; &rarr; Augmented to &quot;1010101&quot;.
	Choose &quot;010&quot;, convert &quot;1010101&quot; &rarr; &quot;1000101&quot; &rarr; &quot;1111101&quot;.
	The final string without augmentation is &quot;11110&quot;. The maximum number of active sections is 4.



 
Constraints:


	1 <= n == s.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximize Active Section with Trade I" on LeetCode asks us to determine the maximum number of active sections of a project that can be obtained by executing trades. We are given a list that represents the changes in the active sections after each trade. Our goal is to maximize the number of sections that can be active after performing trades over a series of specified days.

### Problem Explanation

You are required to find the maximum number of active sections we can have after one transaction (for example, one buy followed by one sell). This problem resembles the "Best Time to Buy and Sell Stock" problem in stock trading.

### Approach to the Solution

1. **Variables**:
   - We will keep track of the minimum price and maximum profit as we iterate through the list of active section changes.

2. **Logic**:
   - Loop through the array of sections:
     - Update the minimum price if you find a value lower than the recorded minimum.
     - Calculate the potential profit if you were to sell at the current index and update the maximum profit if this potential profit is higher than the recorded maximum profit.

3. **Return the Maximum Profit.**

### C++ Code

Here’s how you can implement this in C++:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int maxActiveSections(std::vector<int>& changes) {
        if (changes.empty()) {
            return 0;
        }

        int minPrice = changes[0]; // Initialize with the first element
        int maxProfit = 0; // Initialize maximum profit

        // Iterate through the changes array
        for (int i = 1; i < changes.size(); ++i) {
            // Update minPrice if we find a smaller value
            if (changes[i] < minPrice) {
                minPrice = changes[i];
            }
            // Calculate the possible profit
            int currentProfit = changes[i] - minPrice;
            // Update maxProfit if we found a better profit
            maxProfit = std::max(maxProfit, currentProfit);
        }

        return maxProfit;
    }
};

int main() {
    Solution solution;
    std::vector<int> changes = {7, 1, 5, 3, 6, 4}; // Example input
    int result = solution.maxActiveSections(changes);
    std::cout << "Maximum active sections obtainable: " << result << std::endl;

    return 0;
}
```

### Explanation of the Code

1. **Input Handling**: The function checks if the input vector `changes` is empty. If so, it returns 0 because there's no data to process.

2. **Initialization**: We set `minPrice` to the first element of the vector, representing the minimum price (or the least number of active sections) we've seen so far. `maxProfit` starts at 0.

3. **Looping**:
   - The loop starts from the second element (index 1) and moves through to the end.
   - For each element, check if it’s smaller than `minPrice`. If it is, update `minPrice`.
   - Calculate `currentProfit` as the difference between the current element and the `minPrice`. If this profit is greater than `maxProfit`, update `maxProfit`.

4. **Return Value**: After processing all elements, `maxProfit` now holds the maximum possible profit (or active sections) that can be obtained with one buy-sell transaction.

This approach runs in O(n) time complexity, where n is the number of elements in the input array, making it efficient for large datasets.