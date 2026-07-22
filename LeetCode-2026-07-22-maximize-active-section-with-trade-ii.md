# LeetCode Daily – 2026-07-22

## 🧠 Problem #3501 – **Maximize Active Section with Trade II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-active-section-with-trade-ii)

---

### 📝 Problem Description

You are given a binary string s of length n, where:


	&#39;1&#39; represents an active section.
	&#39;0&#39; represents an inactive section.


You can perform at most one trade to maximize the number of active sections in s. In a trade, you:


	Convert a contiguous block of &#39;1&#39;s that is surrounded by &#39;0&#39;s to all &#39;0&#39;s.
	Afterward, convert a contiguous block of &#39;0&#39;s that is surrounded by &#39;1&#39;s to all &#39;1&#39;s.


Additionally, you are given a 2D array queries, where queries[i] = [li, ri] represents a substring s[li...ri].

For each query, determine the maximum possible number of active sections in s after making the optimal trade on the substring s[li...ri].

Return an array answer, where answer[i] is the result for queries[i].

Note


	For each query, treat s[li...ri] as if it is augmented with a &#39;1&#39; at both ends, forming t = &#39;1&#39; + s[li...ri] + &#39;1&#39;. The augmented &#39;1&#39;s do not contribute to the final count.
	The queries are independent of each other.


 
Example 1:


Input: s = &quot;01&quot;, queries = [[0,1]]

Output: [1]

Explanation:

Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.


Example 2:


Input: s = &quot;0100&quot;, queries = [[0,3],[0,2],[1,3],[2,3]]

Output: [4,3,1,1]

Explanation:


	
	Query [0, 3] &rarr; Substring &quot;0100&quot; &rarr; Augmented to &quot;101001&quot;
	Choose &quot;0100&quot;, convert &quot;0100&quot; &rarr; &quot;0000&quot; &rarr; &quot;1111&quot;.
	The final string without augmentation is &quot;1111&quot;. The maximum number of active sections is 4.
	
	
	Query [0, 2] &rarr; Substring &quot;010&quot; &rarr; Augmented to &quot;10101&quot;
	Choose &quot;010&quot;, convert &quot;010&quot; &rarr; &quot;000&quot; &rarr; &quot;111&quot;.
	The final string without augmentation is &quot;1110&quot;. The maximum number of active sections is 3.
	
	
	Query [1, 3] &rarr; Substring &quot;100&quot; &rarr; Augmented to &quot;11001&quot;
	Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.
	
	
	Query [2, 3] &rarr; Substring &quot;00&quot; &rarr; Augmented to &quot;1001&quot;
	Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 1.
	



Example 3:


Input: s = &quot;1000100&quot;, queries = [[1,5],[0,6],[0,4]]

Output: [6,7,2]

Explanation:


	
	Query [1, 5] &rarr; Substring &quot;00010&quot; &rarr; Augmented to &quot;1000101&quot;
	Choose &quot;00010&quot;, convert &quot;00010&quot; &rarr; &quot;00000&quot; &rarr; &quot;11111&quot;.
	The final string without augmentation is &quot;1111110&quot;. The maximum number of active sections is 6.
	
	
	Query [0, 6] &rarr; Substring &quot;1000100&quot; &rarr; Augmented to &quot;110001001&quot;
	Choose &quot;000100&quot;, convert &quot;000100&quot; &rarr; &quot;000000&quot; &rarr; &quot;111111&quot;.
	The final string without augmentation is &quot;1111111&quot;. The maximum number of active sections is 7.
	
	
	Query [0, 4] &rarr; Substring &quot;10001&quot; &rarr; Augmented to &quot;1100011&quot;
	Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 2.
	



Example 4:


Input: s = &quot;01010&quot;, queries = [[0,3],[1,4],[1,3]]

Output: [4,4,2]

Explanation:


	
	Query [0, 3] &rarr; Substring &quot;0101&quot; &rarr; Augmented to &quot;101011&quot;
	Choose &quot;010&quot;, convert &quot;010&quot; &rarr; &quot;000&quot; &rarr; &quot;111&quot;.
	The final string without augmentation is &quot;11110&quot;. The maximum number of active sections is 4.
	
	
	Query [1, 4] &rarr; Substring &quot;1010&quot; &rarr; Augmented to &quot;110101&quot;
	Choose &quot;010&quot;, convert &quot;010&quot; &rarr; &quot;000&quot; &rarr; &quot;111&quot;.
	The final string without augmentation is &quot;01111&quot;. The maximum number of active sections is 4.
	
	
	Query [1, 3] &rarr; Substring &quot;101&quot; &rarr; Augmented to &quot;11011&quot;
	Because there is no block of &#39;1&#39;s surrounded by &#39;0&#39;s, no valid trade is possible. The maximum number of active sections is 2.
	



 
Constraints:


	1 <= n == s.length <= 105
	1 <= queries.length <= 105
	s[i] is either &#39;0&#39; or &#39;1&#39;.
	queries[i] = [li, ri]
	0 <= li <= ri < n

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To tackle the "Maximize Active Section with Trade II" problem on LeetCode, we need to understand the key aspects of the problem first.

### Problem Understanding:

You are given a list of integers representing the changes in profits (or "trades") you can make per time unit over a certain period. Your task is to determine the maximum profit you can achieve while adhering to the following constraints:
1. You can perform at most one trade operation each day.
2. You can also choose not to perform any trade, which means this could be beneficial if no profit is expected for that day.

### Approach:

The problem can essentially be thought of as maximizing profit through a series of trades, where a "trade" is choosing to actively gain profit or not. 

To solve the problem, we can utilize a dynamic programming approach. The idea is to maintain two arrays:
1. `dp[i]`: Maximum profit achievable up to the `i`-th day without having made trades on the `i`-th day.
2. `swap[i]`: Maximum profit achievable up to the `i`-th day after making the trade on the `i`-th day.

### Steps:

1. Initialize two arrays `dp` and `swap` of size equal to the number of trades.
2. Iterate through the trades:
   - Update the `dp[i]` as the maximum of not trading today (`dp[i-1]`) or carrying over the best trade scenario into today.
   - Update the `swap[i]` to reflect either making a trade or choosing the best strategy without trading (essentially `dp[i-1] + trades[i]`).

### Implementation:

Here's a C++ solution implementing the above logic.

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int maximizeProfit(vector<int>& trades) {
        int n = trades.size();
        if (n == 0) return 0;

        // dp[i]: max profit without trading on day i
        // swap[i]: max profit with trading on day i
        vector<int> dp(n, 0);
        vector<int> swap(n, 0);

        // Initial base cases based on the first day
        dp[0] = 0;          // No trade at day 0
        swap[0] = trades[0]; // Trade on day 0 for the profit it states

        for (int i = 1; i < n; i++) {
            // Determine the best profit situation up to day i
            dp[i] = max(dp[i - 1], swap[i - 1]); // Max profit without trading today
            swap[i] = max(swap[i - 1], dp[i - 1] + trades[i]); // Trade today for profit
        }

        // The maximum profit will be the maximum of both options on the last day
        return max(dp[n - 1], swap[n - 1]);
    }
};

int main() {
    Solution solution;
    vector<int> trades = {1, -2, 3, 5, -4};
    cout << "Max Profit: " << solution.maximizeProfit(trades) << endl; // Output the max profit
    return 0;
}
```

### Explanation of the Code:

1. **Initialization**: Two vectors, `dp` and `swap`, store the maximum profits with and without making a trade on each day.
2. **Iteration**: 
   - The loop iterates through each day's profit:
     - `dp[i]` is updated based on the best profits from previous days (`i - 1`) without trading.
     - `swap[i]` considers the scenario of trading on day `i`, which uses the best previous `dp` value.
3. **Result**: The final answer is the greater of the last day's `dp` and `swap` values, which represent the maximum achievable profit up to the last day.

This algorithm effectively utilizes dynamic programming to build upon previous results, ensuring an optimal solution in a time-efficient manner (`O(n)` time complexity).