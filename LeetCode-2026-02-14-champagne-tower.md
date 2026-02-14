# LeetCode Daily – 2026-02-14

## 🧠 Problem #799 – **Champagne Tower**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/champagne-tower)

---

### 📝 Problem Description

We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.  Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top.  When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.  When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.  (A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top most glass is full.  After two cups of champagne are poured, the two glasses on the second row are half full.  After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.  After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below.



Now after pouring some non-negative integer cups of champagne, return how full the jth glass in the ith row is (both i and j are 0-indexed.)

 
Example 1:


Input: poured = 1, query_row = 1, query_glass = 1
Output: 0.00000
Explanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.


Example 2:


Input: poured = 2, query_row = 1, query_glass = 1
Output: 0.50000
Explanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.


Example 3:


Input: poured = 100000009, query_row = 33, query_glass = 17
Output: 1.00000


 
Constraints:


	0 <= poured <= 109
	0 <= query_glass <= query_row < 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Champagne Tower" problem from LeetCode is a fascinating problem that deals with simulating the distribution of champagne in a triangular tower structure. Let's go through the problem description, followed by a solution in C++, and then I'll provide an explanation.

### Problem Description

We have a champagne tower represented as a triangular structure, where a cup at position `(i, j)` (0-indexed) receives champagne from two cups directly above it: `(i-1, j-1)` and `(i-1, j)`. Each cup can contain a maximum capacity of `1.0` units of champagne. When a cup overflows (i.e., contains more than `1.0` units), the excess champagne is equally distributed to the two cups directly beneath it.

Given the number of poured champagne (`poured`) and a target cup at position `(query_row, query_glass)`, our goal is to determine how much champagne is in that cup at the end.

### Example Input
```plaintext
poured = 1
query_row = 1
query_glass = 1
```

### Expected Output
```plaintext
0.00
```

### C++ Solution

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        // Create a 2D vector to represent the tower
        vector<vector<double>> tower(query_row + 1, vector<double>(query_row + 1, 0.0));
        
        // Pour the champagne into the top cup
        tower[0][0] = poured;

        // Calculate champagne distribution row by row
        for (int i = 0; i <= query_row; ++i) {
            for (int j = 0; j <= i; ++j) {
                // If the current cup overflows, distribute the excess to lower cups
                if (tower[i][j] > 1.0) {
                    double excess = tower[i][j] - 1.0;
                    tower[i][j] = 1.0; // Cap the current cup at 1.0
                    // Distribute excess equally to the next row's cups
                    tower[i + 1][j] += excess / 2.0; // left cup
                    tower[i + 1][j + 1] += excess / 2.0; // right cup
                }
            }
        }

        // The result for the queried glass is the amount in that glass
        return tower[query_row][query_glass];
    }
};
```

### Explanation

1. **Data Structure**: We use a 2D vector `tower` where `tower[i][j]` holds the amount of champagne in the cup at row `i` and glass `j`.

2. **Initialization**:
   - The first cup at the top (`tower[0][0]`) receives all of the poured champagne.

3. **Simulating Pouring**:
   - We iterate through each row and each cup in that row up to `query_row`.
   - If any cup has more than `1.0` units of champagne, we compute the excess and distribute this excess equally to the two cups directly below it (`tower[i + 1][j]` and `tower[i + 1][j + 1]`).

4. **Final Output**:
   - After processing, we simply return `tower[query_row][query_glass]`, which contains the final amount of champagne in the specified cup.
   - If the amount is more than `1.0`, we just return `1.0` (though in this implementation, it’s controlled by the assignment `tower[i][j] = 1.0` when overflown).

### Complexity
- **Time Complexity**: O(n^2), where `n` is the number of rows we are filling until `query_row`, as we handle each cup in every row.
- **Space Complexity**: O(n^2) for storing the state of the tower.

This method is efficient and straightforward, leveraging a direct simulation of the flow of champagne through the tower structure.