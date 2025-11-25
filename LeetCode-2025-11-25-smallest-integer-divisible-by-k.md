# LeetCode Daily – 2025-11-25

## 🧠 Problem #1015 – **Smallest Integer Divisible by K**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/smallest-integer-divisible-by-k)

---

### 📝 Problem Description

Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.

Return the length of n. If there is no such n, return -1.

Note: n may not fit in a 64-bit signed integer.

 
Example 1:


Input: k = 1
Output: 1
Explanation: The smallest answer is n = 1, which has length 1.


Example 2:


Input: k = 2
Output: -1
Explanation: There is no such positive integer n divisible by 2.


Example 3:


Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.


 
Constraints:


	1 <= k <= 105

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! The problem "Smallest Integer Divisible by K" is to find the smallest integer \( n \) such that \( n \) is divisible by \( K \) and consists of only the digit '1'. This means \( n \) could be represented as '1', '11', '111', '1111', etc.

To solve this problem, we can approach it with the following steps:

1. **Brute Force**: A naive solution would be to construct numbers from '1' and check if they are divisible by \( K \). However, this could lead to very large numbers and difficult computations.

2. **Using Properties of Modulus**: Instead of constructing large numbers, we can keep track of the modulus. We can utilize the properties of modulus to prevent large number computations and to check for divisibility:
   - If \( n \equiv 0 \mod K \), then \( n \) is divisible by \( K \).
   - We can construct the next number of the form '1', '11', '111', by using the previous number \( n \) and computing \( \text{new\_mod} = (10 \times \text{old\_mod} + 1) \mod K \).

3. **BFS Approach**: We can also treat this problem like a breadth-first search (BFS) where each state represents a number constructed so far. We can keep track of previously seen remainders with a queue to avoid cycles and ensure efficiency.

Let's implement this solution in C++:

```cpp
#include <iostream>
#include <queue>
#include <unordered_set>

using namespace std;

int smallestRepunitDivByK(int K) {
    // If K is 1, the answer is immediately 1
    if (K == 1) return 1;

    // We use a queue for BFS to explore state space
    queue<long> q;
    q.push(1); // Start with the first repunit number '1'
    unordered_set<long> visited; // Track visited remainders
    visited.insert(1 % K); // Store remainder of initial number

    int length = 1; // Count of '1's in the number

    while (!q.empty()) {
        // Get the current number from the queue
        long current = q.front();
        q.pop();

        // Check if current number is divisible by K
        if (current % K == 0) {
            return length; // If divisible, return the count of '1's
        }

        // Generate next numbers by appending another '1'
        long next = (current * 10 + 1) % K; // New number represented by its remainder
        
        // Check if we've seen this remainder before
        if (visited.find(next) == visited.end()) {
            visited.insert(next); // Mark this remainder as seen
            q.push(next); // Push the new state into the queue
        }

        length++; // Increase the count of '1's for the next level
    }

    return -1; // In case there's no valid solution which won't happen as per problem constraints
}

int main() {
    int K = 3;
    cout << "Smallest integer divisible by " << K << " is represented by " << smallestRepunitDivByK(K) << " '1's." << endl;
    return 0;
}
```

### Explanation of the Code:

1. **Base Case**: If \( K \) is 1, we can immediately return 1 since '1' is divisible by 1.

2. **Queue and Set Initialization**: We use a queue for BFS where each element in the queue represents the current number formed by '1's modulo \( K \). We also maintain a set to record the remainders we have seen to avoid processing the same remainder multiple times (this helps to avoid infinite loops).

3. **BFS Loop**:
   - Continuously remove the front of the queue and check if the current number is divisible by \( K \).
   - If not, generate the next number by appending '1' and updating the modulus.
   - If this new remainder has not been visited, add it to the queue and mark it as visited.
   - Increment the length count as a new '1' is added.

4. **Output**: The function returns the length of '1's in the smallest integer divisible by \( K \).

This approach allows us to efficiently find the result without dealing with potentially huge integers directly.