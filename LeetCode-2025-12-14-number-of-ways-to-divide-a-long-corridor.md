# LeetCode Daily – 2025-12-14

## 🧠 Problem #2147 – **Number of Ways to Divide a Long Corridor**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor)

---

### 📝 Problem Description

Along a long library corridor, there is a line of seats and decorative plants. You are given a 0-indexed string corridor of length n consisting of letters &#39;S&#39; and &#39;P&#39; where each &#39;S&#39; represents a seat and each &#39;P&#39; represents a plant.

One room divider has already been installed to the left of index 0, and another to the right of index n - 1. Additional room dividers can be installed. For each position between indices i - 1 and i (1 <= i <= n - 1), at most one divider can be installed.

Divide the corridor into non-overlapping sections, where each section has exactly two seats with any number of plants. There may be multiple ways to perform the division. Two ways are different if there is a position with a room divider installed in the first way but not in the second way.

Return the number of ways to divide the corridor. Since the answer may be very large, return it modulo 109 + 7. If there is no way, return 0.

 
Example 1:


Input: corridor = &quot;SSPPSPS&quot;
Output: 3
Explanation: There are 3 different ways to divide the corridor.
The black bars in the above image indicate the two room dividers already installed.
Note that in each of the ways, each section has exactly two seats.


Example 2:


Input: corridor = &quot;PPSPSP&quot;
Output: 1
Explanation: There is only 1 way to divide the corridor, by not installing any additional dividers.
Installing any would create some section that does not have exactly two seats.


Example 3:


Input: corridor = &quot;S&quot;
Output: 0
Explanation: There is no way to divide the corridor because there will always be a section that does not have exactly two seats.


 
Constraints:


	n == corridor.length
	1 <= n <= 105
	corridor[i] is either &#39;S&#39; or &#39;P&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Number of Ways to Divide a Long Corridor" from LeetCode asks us to determine the number of ways to divide a long corridor into segments such that each segment contains an even number of seats, and the number of segments equals `k`, under certain constraints. The constraints include that if there are any corridor seats represented by `n`, we cannot exceed `10^9 + 7` in our results.

### Problem Breakdown
Here's a simplified breakdown of the problem requirements:
1. You're given a string representing a corridor.
2. The corridor consists of 'S' (seats) and 'O' (open spaces).
3. The task is to split the `S` into `k` segments where each segment has an even number of seats.
4. The result needs to be returned modulo \(10^9 + 7\).

### Steps to Solve
1. **Count Seats**: First, count the number of seats 'S'.
2. **Even Segments**: To split the seats into segments containing even numbers of seats, the total number of seats (`totalSeats`) should be even; if it's odd, it’s impossible to split it into even segments.
3. **Dynamic Programming / Combinatorics**: Since the number of seats must be even and we must secure distinct spaces between segments, utilize combinatorial mathematics (specifically the binomial coefficient calculations) to determine the number of valid ways to place the cuts in the open spaces.

### Implementation
Here’s how you can implement this in C++:

```cpp
class Solution {
public:
    const int MOD = 1e9 + 7;
    
    int binomialCoefficient(int n, int k) {
        if (k > n) return 0;
        if (k == 0 || k == n) return 1;
        
        long long res = 1;
        for (int i = 0; i < k; ++i) {
            res = (res * (n - i)) % MOD;
            res = (res * modInverse(i + 1)) % MOD;
        }
        return res;
    }

    long long modInverse(int x) {
        long long res = 1;
        long long y = MOD - 2; // as MOD is prime
        while (y) {
            if (y % 2) res = (res * x) % MOD;
            x = (x * x) % MOD;
            y /= 2;
        }
        return res;
    }
    
    int numberOfWays(string corridor) {
        // Step 1: Count the number of seats
        int totalSeats = 0;
        for (char c : corridor) {
            if (c == 'S') totalSeats++;
        }

        // Step 2: If total number of seats is odd, return 0
        if (totalSeats % 2 != 0) return 0;

        // Step 3: Count occurrences of 'O' to place dividers
        vector<int> partitions;
        int currentCount = 0;

        // Count spaces between 'S'
        for (char c : corridor) {
            if (c == 'S') {
                if (currentCount > 0) {
                    partitions.push_back(currentCount);
                    currentCount = 0;
                }
            } else {
                currentCount++;
            }
        }

        // If there are no seats or only one partition of segments, return 1 way
        if (partitions.size() < 1) return 1;

        // Count the number of dividers we have
        int requiredSegments = totalSeats / 2; // We need this many even segments
        int spaces = partitions.size() - 1; // Number of available spaces for divisions

        // Step 4: We need to choose (requiredSegments - 1) from available spaces
        return binomialCoefficient(spaces, requiredSegments - 1);
    }
};
```

### Explanation of Code
1. **Counting Total Seats**: The method iterates through the corridor string to count the occurrences of 'S'.
2. **Check for Odd Total Seats**: If the count is odd, it's impossible to divide them into even segments.
3. **Creating Partitions**: Spaces ('O') are counted between segments of seats. This helps determine the number of dividers we can use to create splits.
4. **Calculating Binomial Coefficients**: Uses combinatorial logic to calculate the number of ways to place the segments within the available spaces using the `binomialCoefficient` function. This requires a modular inverse for division in modular arithmetic.

### Complexity
The time complexity of this solution is O(n) for counting and evaluating the partitions, while the binomial coefficient calculation is logarithmic with respect to factorial operations owing to its iterative form, making it quite efficient overall.