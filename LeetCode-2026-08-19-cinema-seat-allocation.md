# LeetCode Daily – 2026-08-19

## 🧠 Problem #1386 – **Cinema Seat Allocation**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/cinema-seat-allocation)

---

### 📝 Problem Description

A cinema has n rows of seats, numbered from 1 to n. Each row has 10 seats, numbered from 1 to 10.

You are given a 2D integer array reservedSeats, where reservedSeats[i] = [rowi, seati] means that seat seati in row rowi is already reserved.

A four-person group must be assigned to four seats in the same row. The group can be seated in one of the following seat blocks:


	seats 2, 3, 4, 5
	seats 4, 5, 6, 7
	seats 6, 7, 8, 9


A block can be used only if none of its seats are reserved. Each seat can be assigned to at most one group.

Return an integer denoting the maximum number of four-person groups that can be assigned.

 
Example 1:




Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows an optimal allocation of four groups. Seats marked in blue are already reserved, and each set of four contiguous seats marked in orange is assigned to one group.


Example 2:


Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2


Example 3:


Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4


 
Constraints:


	1 <= n <= 109
	1 <= reservedSeats.length <= min(10 * n, 104)
	reservedSeats[i] == [rowi, seati]
	1 <= rowi <= n
	1 <= seati <= 10
	All reservedSeats[i] are distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Cinema Seat Allocation" revolves around allocating cinema seats based on certain rules and constraints. Here’s a brief overview of the problem, an approach to solving it, and an implementation in C++.

### Problem Overview

You are given an integer `n` (number of rows) and an integer `m` (number of seats per row). You also have an array `reservedSeats`, which contains the reserved seat numbers for specific rows. Each seat number is represented in a specific format:

- Each row contains 10 seats numbered from 1 to 10.
- Reserved seats are represented using a combination of row number and seat number.

### Approach to Solution

1. **Setup a Data Structure:**
   - Use a vector of sets, where each index corresponds to a row in the cinema. This will help in storing reserved seat numbers for each row.

2. **Store Reserved Seats:**
   - Iterate through the `reservedSeats` array and populate the respective sets corresponding to each row.

3. **Count Available Combinations:**
   - For each row, check possible combinations of seats that can fit the criteria for a group of 4 people:
     - The group can either sit in seats {2,3,4,5}, {3,4,5,6}, {4,5,6,7}, {5,6,7,8}, or {6,7,8,9}.
   - Check if these combinations have any reserved seats; if not, they are valid allocations.

4. **Output the Result:**
   - Sum the counts of available combinations for all rows.

Let's see the C++ implementation:

```cpp
#include <vector>
#include <set>

class Solution {
public:
    int countOccupiedSeats = 0;

    int countAvailable(int n, int m, std::vector<std::vector<int>>& reservedSeats) {
        // Create an array of sets to hold reserved seats for each row
        std::vector<std::set<int>> rows(n + 1);
        
        // Fill reserved seats information
        for (const auto& seat : reservedSeats) {
            int row = seat[0];
            int seatNumber = seat[1];
            rows[row].insert(seatNumber);
        }

        // Iterate through each row and check for valid seat combinations
        for (int i = 1; i <= n; ++i) {
            countAvailableInRow(rows[i]);
        }

        return countOccupiedSeats;
    }

    void countAvailableInRow(const std::set<int>& reserved) {
        // List of possible groups of 4 consecutive seats
        int groups[5][4] = {{2, 3, 4, 5}, {3, 4, 5, 6}, {4, 5, 6, 7}, {5, 6, 7, 8}, {6, 7, 8, 9}};

        for (auto& group : groups) {
            if (isAvailable(group, reserved)) {
                countOccupiedSeats++;
            }
        }
    }

    bool isAvailable(const int* group, const std::set<int>& reserved) {
        // Check if any of the seats in the group are reserved
        for (int i = 0; i < 4; ++i) {
            if (reserved.find(group[i]) != reserved.end()) {
                return false; // One of the seats is reserved
            }
        }
        return true; // All seats are available
    }
};
```

### Explanation of the Code

1. **Data Structure:**
   - We use a vector of sets `rows`, where each set at index `i` keeps track of reserved seats in row `i`.

2. **Reservation Processing:**
   - We take each pair in `reservedSeats`, divide them into row and column, and fill our `rows` data structure.

3. **Available Seat Counting:**
   - For each row, we check predefined groups of 4 seats.
   - The `isAvailable` function checks if any of the seats in the specific group are reserved by checking membership in the set.

4. **Result Compilation:**
   - We maintain a counter `countOccupiedSeats` to add up valid combinations for all rows.

This C++ solution efficiently checks for available seat arrangements and outputs the total count based on the defined rules.