# LeetCode Daily – 2025-12-29

## 🧠 Problem #756 – **Pyramid Transition Matrix**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/pyramid-transition-matrix)

---

### 📝 Problem Description

You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains one less block than the row beneath it and is centered on top.

To make the pyramid aesthetically pleasing, there are only specific triangular patterns that are allowed. A triangular pattern consists of a single block stacked on top of two blocks. The patterns are given as a list of three-letter strings allowed, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block.


	For example, &quot;ABC&quot; represents a triangular pattern with a &#39;C&#39; block stacked on top of an &#39;A&#39; (left) and &#39;B&#39; (right) block. Note that this is different from &quot;BAC&quot; where &#39;B&#39; is on the left bottom and &#39;A&#39; is on the right bottom.


You start with a bottom row of blocks bottom, given as a single string, that you must use as the base of the pyramid.

Given bottom and allowed, return true if you can build the pyramid all the way to the top such that every triangular pattern in the pyramid is in allowed, or false otherwise.

 
Example 1:


Input: bottom = &quot;BCD&quot;, allowed = [&quot;BCC&quot;,&quot;CDE&quot;,&quot;CEA&quot;,&quot;FFF&quot;]
Output: true
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 3), we can build &quot;CE&quot; on level 2 and then build &quot;A&quot; on level 1.
There are three triangular patterns in the pyramid, which are &quot;BCC&quot;, &quot;CDE&quot;, and &quot;CEA&quot;. All are allowed.


Example 2:


Input: bottom = &quot;AAAA&quot;, allowed = [&quot;AAB&quot;,&quot;AAC&quot;,&quot;BCD&quot;,&quot;BBE&quot;,&quot;DEF&quot;]
Output: false
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 4), there are multiple ways to build level 3, but trying all the possibilites, you will get always stuck before building level 1.


 
Constraints:


	2 <= bottom.length <= 6
	0 <= allowed.length <= 216
	allowed[i].length == 3
	The letters in all input strings are from the set {&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;}.
	All the values of allowed are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Pyramid Transition Matrix" requires us to determine if we can build a pyramid from a given base using certain allowed transitions of blocks. Each block is represented by a string of uppercase letters and the transition is valid if the three blocks on the lower row can produce a block on the row above that can be formed by any combination of those blocks.

Here's a step-by-step explanation of how to solve the problem:

### Problem Breakdown:
1. **Input**: You have a base (a string of blocks), and a list of valid transitions. The base can be represented as an array of characters, and the transitions allow specific groupings of three lower blocks to collapse into one upper block.
  
2. **Output**: You need to determine if it's possible to build up to the top of the pyramid, returning `true` if it can be done, and `false` otherwise.

### Approach:
1. **Generate Transitions**: Use a hash map to store the valid transitions where each entry will map a pair of blocks (the two blocks that can contribute to the one above) to the possible blocks they can form above.
  
2. **Recursive Backtracking**: Starting from the base, recursively attempt to build each row above using the possible transitions. If you reach a single block at the top that is valid, you return `true`.

3. **Depth-first Search (DFS)**: The recursive call will check combinations of the blocks and will ensure that only valid combinations are formed based on the pre-stored transitions.

### C++ Implementation:

```cpp
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>

class Solution {
public:
    // A memoization table to avoid recalculating states.
    std::unordered_map<std::string, bool> memo;
    
    // We can keep a map of from pair to possible character
    std::unordered_map<std::string, std::unordered_set<char>> transitions;

    bool canBuild(std::string current) {
        // If we reach the top of the pyramid and only have one block.
        if (current.size() == 1) {
            return true;
        }
        
        // Use memoization to avoid recomputing the same state
        if (memo.find(current) != memo.end()) {
            return memo[current];
        }
        
        std::string nextRow;
        
        // Check each triplet of blocks from the current row.
        for (int i = 0; i < current.size() - 1; ++i) {
            // Get the two blocks on the current base level
            std::string pair = std::string(1, current[i]) + current[i + 1];
            
            // If there's no possible block for this pair, skip
            if (transitions.find(pair) == transitions.end()) {
                continue;
            }
            
            // For each possible block that can be formed
            for (char block : transitions[pair]) {
                // Add the new block to the next row
                nextRow.push_back(block);
                
                // If we can build the rest of the pyramid with this new block
                if (canBuild(current.substr(i + 1))) {
                    // Store the result in memo and return true
                    memo[current] = true;
                    return true;
                }
                nextRow.pop_back(); // Remove last added block
            }
        }
        
        // Store result for current state before returning false
        memo[current] = false;
        return false;
    }

    bool pyramidTransition(std::string bottom, std::vector<std::string>& allowed) {
        // Populate the transitions map
        for (const auto& transition : allowed) {
            std::string base = transition.substr(0, 2);
            char top = transition[2];
            transitions[base].insert(top);
        }
        
        // Start building the pyramid from the bottom row
        return canBuild(bottom);
    }
};
```

### Explanation of the Code:
- **Transitions Mapping**: We create a map that allows us to see which combinations of two blocks can lead to possible blocks above.
- **DFS with Recursion**: The `canBuild` function uses recursion to explore each level of the pyramid. It checks every adjacent pair of blocks and appends the possible blocks from the transitions.
- **Memoization**: We store results in a hash map called `memo` to speed up our solution by avoiding recomputation of states we've already evaluated.

### Conclusion:
This code effectively builds the pyramid using recursive checks with memoization, ensuring optimal performance even with overlapping subproblems. The transitions are used to determine valid upper blocks based on the pairs below.