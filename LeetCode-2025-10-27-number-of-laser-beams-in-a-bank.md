# LeetCode Daily – 2025-10-27

## 🧠 Problem #2125 – **Number of Laser Beams in a Bank**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-laser-beams-in-a-bank)

---

### 📝 Problem Description

Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of &#39;0&#39;s and &#39;1&#39;s. &#39;0&#39; means the cell is empty, while&#39;1&#39; means the cell has a security device.

There is one laser beam between any two security devices if both conditions are met:


	The two devices are located on two different rows: r1 and r2, where r1 < r2.
	For each row i where r1 < i < r2, there are no security devices in the ith row.


Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return the total number of laser beams in the bank.

 
Example 1:


Input: bank = [&quot;011001&quot;,&quot;000000&quot;,&quot;010100&quot;,&quot;001000&quot;]
Output: 8
Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
 * bank[0][1] -- bank[2][1]
 * bank[0][1] -- bank[2][3]
 * bank[0][2] -- bank[2][1]
 * bank[0][2] -- bank[2][3]
 * bank[0][5] -- bank[2][1]
 * bank[0][5] -- bank[2][3]
 * bank[2][1] -- bank[3][2]
 * bank[2][3] -- bank[3][2]
Note that there is no beam between any device on the 0th row with any on the 3rd row.
This is because the 2nd row contains security devices, which breaks the second condition.


Example 2:


Input: bank = [&quot;000&quot;,&quot;111&quot;,&quot;000&quot;]
Output: 0
Explanation: There does not exist two devices located on two different rows.


 
Constraints:


	m == bank.length
	n == bank[i].length
	1 <= m, n <= 500
	bank[i][j] is either &#39;0&#39; or &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem "Number of Laser Beams in a Bank," we need to understand the problem statement first. Here's a brief overview:

### Problem Statement

In a bank represented as a 2D grid:
- Each row of the grid represents a bank branch.
- Each cell in that row can either be empty (`'0'`) or contain a security device (`'1'`).
  
The lasers can only be activated between the security devices of two adjacent rows if both rows have at least one security device in them. The number of beams (lasers) activated between row `i` and row `i+1` is equal to the product of the count of security devices in row `i` and the count of security devices in row `i+1`.

### Steps to Solve the Problem

1. **Count the security devices**: For each row, count how many security devices (`'1'`) it contains.
2. **Calculate the beams**: For each pair of adjacent rows, if both have at least one security device, multiply their counts and add to the total beam count.
3. **Return the total count** of beams.

### C++ Implementation

```cpp
#include <vector>
#include <string>

class Solution {
public:
    int numberOfBeams(std::vector<std::string>& bank) {
        int totalBeams = 0;    // Total number of beams
        std::vector<int> deviceCounts; // Vector to store counts of devices in each row

        // Count the number of security devices in each row
        for (const std::string& row : bank) {
            int count = 0; // security devices in this row
            for (char cell : row) {
                if (cell == '1') {
                    count++;
                }
            }
            // Add the count to the deviceCounts only if it is greater than 0
            if (count > 0) {
                deviceCounts.push_back(count);
            }
        }

        // Calculate total beams
        for (int i = 0; i < deviceCounts.size() - 1; i++) {
            totalBeams += deviceCounts[i] * deviceCounts[i + 1]; // Multiply adjacent devices
        }

        return totalBeams; // Return the total beams
    }
};
```

### Explanation of the Code

1. **Input Handling**: The function takes a vector of strings called `bank`, where each string represents a branch in the bank.
  
2. **Counting Security Devices**: We iterate through each string (row) in the `bank`. For each row, we count how many times `'1'` appears. If the count for a row is greater than zero, it is added to the `deviceCounts` vector.

3. **Calculating Beams**: After collecting counts of security devices, we iterate through the `deviceCounts` vector. For each pair of adjacent rows, the number of beams is calculated as the product of the counts for those two rows, and this product is added to the `totalBeams` variable.

4. **Returning the Result**: Finally, we return `totalBeams`, which gives the total number of laser beams activated in the bank.

### Complexity Analysis

- **Time Complexity**: O(n * m), where `n` is the number of rows in the bank and `m` is the number of characters in each row (assuming all rows have equal length).
- **Space Complexity**: O(n) for storing the device counts.

This solution efficiently counts and calculates the required beams while keeping the code clean and manageable.