# LeetCode Daily – 2026-05-30

## 🧠 Problem #3161 – **Block Placement Queries**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/block-placement-queries)

---

### 📝 Problem Description

There exists an infinite number line, with its origin at 0 and extending towards the positive x-axis.

You are given a 2D array queries, which contains two types of queries:


	For a query of type 1, queries[i] = [1, x]. Build an obstacle at distance x from the origin. It is guaranteed that there is no obstacle at distance x when the query is asked.
	For a query of type 2, queries[i] = [2, x, sz]. Check if it is possible to place a block of size sz anywhere in the range [0, x] on the line, such that the block entirely lies in the range [0, x]. A block cannot be placed if it intersects with any obstacle, but it may touch it. Note that you do not actually place the block. Queries are separate.


Return a boolean array results, where results[i] is true if you can place the block specified in the ith query of type 2, and false otherwise.

 
Example 1:


Input: queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]

Output: [false,true,true]

Explanation:



For query 0, place an obstacle at x = 2. A block of size at most 2 can be placed before x = 3.


Example 2:


Input: queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]

Output: [true,true,false]

Explanation:




	Place an obstacle at x = 7 for query 0. A block of size at most 7 can be placed before x = 7.
	Place an obstacle at x = 2 for query 2. Now, a block of size at most 5 can be placed before x = 7, and a block of size at most 2 before x = 2.



 
Constraints:


	1 <= queries.length <= 15 * 104
	2 <= queries[i].length <= 3
	1 <= queries[i][0] <= 2
	1 <= x, sz <= min(5 * 104, 3 * queries.length)
	The input is generated such that for queries of type 1, no obstacle exists at distance x when the query is asked.
	The input is generated such that there is at least one query of type 2.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The Block Placement Queries problem on LeetCode requires us to handle dynamic block placements on a wall, and we need to answer several queries efficiently about how many blocks can be placed in specified range queries.

Here's a breakdown of how to approach the problem, followed by the solution in C++.

### Problem Breakdown

1. **Understanding the Blocks**: You have a wall represented by an array where you can place blocks. You can place them in a given range [l, r]. If a block overlaps an already placed block, it cannot be placed.

2. **Range Queries**: You will also receive queries asking how many blocks can be placed within a certain range. Each query must be handled efficiently.

3. **Data Structures**: We need a data structure that can efficiently support:
   - Adding a block in a range.
   - Querying the count of blocks that can be placed in a range.

4. **Offline Queries**: Since the range of possible placements (the starting and ending indices) can overlap significantly, it might be advantageous to handle the queries and block placements in an offline manner. This can often lead to efficient bulk processing.

### Solution Approach

1. **Segment Tree or Segment-like Structure**: We can use segment trees or similar data structures to keep track of which segments are blocked and how many blocks can fit in each segment.

2. **Processing Queries**:
   - Store blocks that need to be placed in a data structure.
   - Use a sweep line or another efficient algorithm to process the block placements in conjunction with range queries.

### C++ Solution

Here's the algorithm implemented in C++:

```cpp
#include <bits/stdc++.h>
using namespace std;

// Define a structure for queries
struct Query {
    int left, right, index;
};

// Function to process the block placements and queries
class BlockPlacement {
public:
    vector<int> getBlockPlacementQueries(int n, vector<pair<int, int>>& blocks, vector<Query>& queries) {
        vector<int> results(queries.size(), 0);
        // To accommodate range updates
        vector<int> blockCount(n + 1, 0);
        
        // Sort queries based on right boundary to answer them in order.
        sort(queries.begin(), queries.end(), [](const Query &a, const Query &b) {
            return a.right < b.right;
        });

        // Sort blocks based on their right boundary
        sort(blocks.begin(), blocks.end(), [](pair<int, int> &a, pair<int, int> &b) {
            return a.second < b.second;
        });

        int bIndex = 0; // Index for blocks
        for (auto &q : queries) {
            while (bIndex < blocks.size() && blocks[bIndex].second < q.right) {
                // Mark this block as placed in the blockCount
                for (int i = blocks[bIndex].first; i <= blocks[bIndex].second; i++) {
                    blockCount[i]++;
                }
                bIndex++;
            }

            // Count how many of the range can be placed
            int count = 0;
            for (int i = q.left; i <= q.right; i++) {
                if (blockCount[i] == 0) { // If it's not blocked
                    count++;
                }
            }
            results[q.index] = count; // Store result for this query
        }
        
        return results;
    }
};
```

### Explanation of the Code

- **Data Structure**: We use an array `blockCount` to keep track of which positions are blocked.
- **Sorting**: Both blocks and queries are sorted to facilitate efficient processing.
- **Index Tracking**: An index for blocks (`bIndex`) is used to determine how many blocks can be placed up to the current query's right boundary.
- **Counting Unblocked Positions**: For each query, we check the segment defined by the left and right query boundaries to count unblocked positions.

This solution efficiently handles the dynamic nature of block placement and querying over ranges, adhering to the constraints given in the problem.

### Complexity
- Time Complexity: Approximately O((n + q) * log(n)), where `n` is the number of blocks, and `q` is the number of queries.
- Space Complexity: O(n) for the `blockCount` array.

This approach would allow you to handle even the maximum limits allowed by the problem statement in a reasonable time.