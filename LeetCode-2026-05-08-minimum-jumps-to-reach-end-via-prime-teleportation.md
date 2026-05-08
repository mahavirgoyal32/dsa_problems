# LeetCode Daily – 2026-05-08

## 🧠 Problem #3629 – **Minimum Jumps to Reach End via Prime Teleportation**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-jumps-to-reach-end-via-prime-teleportation)

---

### 📝 Problem Description

You are given an integer array nums of length n.

You start at index 0, and your goal is to reach index n - 1.

From any index i, you may perform one of the following operations:


	Adjacent Step: Jump to index i + 1 or i - 1, if the index is within bounds.
	Prime Teleportation: If nums[i] is a prime number p, you may instantly jump to any index j != i such that nums[j] % p == 0.


Return the minimum number of jumps required to reach index n - 1.

 
Example 1:


Input: nums = [1,2,4,6]

Output: 2

Explanation:

One optimal sequence of jumps is:


	Start at index i = 0. Take an adjacent step to index 1.
	At index i = 1, nums[1] = 2 is a prime number. Therefore, we teleport to index i = 3 as nums[3] = 6 is divisible by 2.


Thus, the answer is 2.


Example 2:


Input: nums = [2,3,4,7,9]

Output: 2

Explanation:

One optimal sequence of jumps is:


	Start at index i = 0. Take an adjacent step to index i = 1.
	At index i = 1, nums[1] = 3 is a prime number. Therefore, we teleport to index i = 4 since nums[4] = 9 is divisible by 3.


Thus, the answer is 2.


Example 3:


Input: nums = [4,6,5,8]

Output: 3

Explanation:


	Since no teleportation is possible, we move through 0 &rarr; 1 &rarr; 2 &rarr; 3. Thus, the answer is 3.



 
Constraints:


	1 <= n == nums.length <= 105
	1 <= nums[i] <= 106

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Minimum Jumps to Reach End via Prime Teleportation", we need to find the minimum number of jumps required to reach the end of the array (`arr`) by either jumping to the next element or teleporting to any element whose index is a prime number.

### Problem Breakdown
1. **Input/Output**: 
   - Input: An array of integers where each integer represents the maximum jump length from that index.
   - Output: The minimum number of jumps to reach the last index of the array.

2. **Mechanism**:
   - From each index `i`, we can jump forward up to `arr[i]` indices.
   - Additionally, we can teleport directly to any index that is prime.

3. **Graph Approach**: 
   - We can think of this problem as a graph where each index is a node, and edges connect indices that can be reached by jumps or teleportation.
   - We can use a BFS (Breadth-First Search) approach to find the shortest path to the last index.

### Implementation Steps
1. **Prime Generation**: Use the Sieve of Eratosthenes algorithm to generate a list of prime indices from 0 to the length of the array.
2. **BFS for Minimum Jumps**: Implement a BFS where:
   - Each node is the current index.
   - Edges are defined by valid jumps and teleportation to prime indices.
   - Track visited indices to avoid cycles.

### C++ Solution

```cpp
#include <vector>
#include <queue>
#include <iostream>
#include <cmath>

using namespace std;

class Solution {
public:
    vector<bool> generatePrimes(int n) {
        vector<bool> isPrime(n + 1, true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes
        for (int i = 2; i <= sqrt(n); i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return isPrime; // will return an array where true indicates a prime number
    }

    int jump(vector<int>& arr) {
        int n = arr.size();
        if (n == 1) return 0; // Already at the last index

        // Step 1: Generate prime numbers up to n - 1
        vector<bool> isPrime = generatePrimes(n - 1);
        
        // Step 2: BFS Setup
        queue<int> q;
        vector<bool> visited(n, false);
        q.push(0); // start from index 0
        visited[0] = true;

        int jumps = 0;

        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                int index = q.front();
                q.pop();
                
                // Check if we've reached the end
                if (index == n - 1) {
                    return jumps;
                }
                
                // 1. Jump to possible positions
                for (int jump = 1; jump <= arr[index] && (index + jump) < n; jump++) {
                    if (!visited[index + jump]) {
                        visited[index + jump] = true;
                        q.push(index + jump);
                    }
                }
                
                // 2. Teleport to prime indices
                for (int primeIndex = 2; primeIndex < n; primeIndex++) {
                    if (isPrime[primeIndex] && !visited[primeIndex]) {
                        visited[primeIndex] = true;
                        q.push(primeIndex);
                    }
                }
            }
            jumps++; // Increment jump count after processing current level
        }
        
        return -1; // If end is not reachable, though it should be for valid inputs
    }
};

// Example Usage
int main() {
    Solution sol;
    vector<int> arr = {6, 2, 4, 0, 5, 1, 1, 4, 3}; // Example Input
    int result = sol.jump(arr);
    cout << "Minimum jumps required: " << result << endl;
}
```

### Explanation of the Code:
1. **Prime Generation**: The function `generatePrimes` creates a boolean vector indicating which indices are prime.
2. **BFS Initialization**: A queue is initialized with the starting index (0). The visited array ensures we don't process the same index more than once.
3. **Processing the Queue**: For each index, we compute:
   - Jump to reachable indices based on the value at the current index.
   - Teleport to all indices that are prime.
4. **Incrementing Jumps**: For each layer in BFS (depth), we increment the jump counter.
5. **Termination**: If we reach the last index, return the number of jumps taken.

This approach efficiently traverses the "graph" of indices and leverages the properties of primes and jumping to determine the minimum path needed to reach the end.