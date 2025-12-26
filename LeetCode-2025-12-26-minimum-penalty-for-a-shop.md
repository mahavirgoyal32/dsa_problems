# LeetCode Daily – 2025-12-26

## 🧠 Problem #2483 – **Minimum Penalty for a Shop**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-penalty-for-a-shop)

---

### 📝 Problem Description

You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters &#39;N&#39; and &#39;Y&#39;:


	if the ith character is &#39;Y&#39;, it means that customers come at the ith hour
	whereas &#39;N&#39; indicates that no customers come at the ith hour.


If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:


	For every hour when the shop is open and no customers come, the penalty increases by 1.
	For every hour when the shop is closed and customers come, the penalty increases by 1.


Return the earliest hour at which the shop must be closed to incur a minimum penalty.

Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.

 
Example 1:


Input: customers = &quot;YYNY&quot;
Output: 2
Explanation: 
- Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
- Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
- Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
- Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
- Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.


Example 2:


Input: customers = &quot;NNNNN&quot;
Output: 0
Explanation: It is best to close the shop at the 0th hour as no customers arrive.

Example 3:


Input: customers = &quot;YYYY&quot;
Output: 4
Explanation: It is best to close the shop at the 4th hour as customers arrive at each hour.


 
Constraints:


	1 <= customers.length <= 105
	customers consists only of characters &#39;Y&#39; and &#39;N&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let’s solve the LeetCode problem "Minimum Penalty for a Shop" together. 

### Problem Statement

You are given a string where each character represents the status of a shop on a given day:
- `'Y'` indicates the shop is open.
- `'N'` indicates the shop is closed.

You need to find the minimum penalty you would incur if you were to visit the shop at a particular day. The penalty has two conditions:
- The penalty is zero if you visit on a day when the shop is open.
- If you visit when the shop is closed, you get a penalty equal to the day number, starting from 1.

Given that it can be any day, the task is to calculate the minimum incurred penalty over all days.

### Example

Input: `YNYN`
- Visiting on day 1 (Y): penalty = 0
- Visiting on day 2 (N): penalty = 2
- Visiting on day 3 (Y): penalty = 0
- Visiting on day 4 (N): penalty = 4

The minimum penalty in this example is 0 because of the days you can visit when the shop is open.

### Solution Approach

1. Traverse through each character of the string.
2. For each character:
   - If it is `Y`, it means no penalty, and you can update your minimum penalty.
   - If it is `N`, you calculate the penalty based on the day's index (i + 1).
3. Keep track of the minimum penalty encountered.
4. If at least one `Y` is found in the string, the answer will be 0. If no `Y` is found, return the minimum penalty found.

### C++ Code Implementation

Here's the C++ code that implements the above logic:

```cpp
#include <iostream>
#include <string>
#include <climits>

using namespace std;

class Solution {
public:
    int bestShop(string customers) {
        int minPenalty = INT_MAX; // Initialize penalty to max integer value
        bool hasOpenDay = false;  // Flag to check if there's any day the shop is open

        for (int i = 0; i < customers.size(); ++i) {
            if (customers[i] == 'Y') {
                // If the shop is open, we can always visit without penalty
                hasOpenDay = true;
            } else {
                // If the shop is closed, calculate the penalty for the day
                int penalty = i + 1; // Day number is 1-indexed (i + 1)
                minPenalty = min(minPenalty, penalty);
            }
        }

        // If there's at least one day when the shop is open, penalty is 0.
        if (hasOpenDay) {
            return 0;
        }
        
        // Return the minimum penalty if no open days found
        return minPenalty;
    }
};

int main() {
    Solution solution;
    string customers;
    cout << "Enter the shop status string (Y/N): ";
    cin >> customers;

    int result = solution.bestShop(customers);
    cout << "Minimum Penalty: " << result << endl;

    return 0;
}
```

### Explanation of Code:

1. We initialize `minPenalty` to the maximum integer value for comparison later. This will hold the minimum penalty found.
2. We use a boolean `hasOpenDay` to track if at least one `Y` (open day) is found.
3. We loop through each character of the string using the index `i`.
4. Inside the loop:
   - If the character is `Y`, we set `hasOpenDay` to true.
   - If it's `N`, we compute the penalty based on the index (plus one for 1-based indexing) and compare it with `minPenalty`.
5. After checking all characters, if there was at least one open day (`Y`), we return `0` as the minimum penalty.
6. If there are no open days, we return the calculated `minPenalty`.

This solution correctly computes the minimum penalty required to visit the shop based on the provided status string.