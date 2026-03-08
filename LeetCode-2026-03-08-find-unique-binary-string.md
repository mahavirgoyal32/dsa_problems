# LeetCode Daily – 2026-03-08

## 🧠 Problem #1980 – **Find Unique Binary String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-unique-binary-string)

---

### 📝 Problem Description

Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 
Example 1:


Input: nums = [&quot;01&quot;,&quot;10&quot;]
Output: &quot;11&quot;
Explanation: &quot;11&quot; does not appear in nums. &quot;00&quot; would also be correct.


Example 2:


Input: nums = [&quot;00&quot;,&quot;01&quot;]
Output: &quot;11&quot;
Explanation: &quot;11&quot; does not appear in nums. &quot;10&quot; would also be correct.


Example 3:


Input: nums = [&quot;111&quot;,&quot;011&quot;,&quot;001&quot;]
Output: &quot;101&quot;
Explanation: &quot;101&quot; does not appear in nums. &quot;000&quot;, &quot;010&quot;, &quot;100&quot;, and &quot;110&quot; would also be correct.


 
Constraints:


	n == nums.length
	1 <= n <= 16
	nums[i].length == n
	nums[i] is either &#39;0&#39; or &#39;1&#39;.
	All the strings of nums are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the "Find Unique Binary String" problem, we need to find a binary string of a certain length that is not in a given list of binary strings of the same length. Let's break down the problem and then look at the solution.

### Problem Analysis
You are given an array of binary strings (each string is made of '0's and '1's) of a certain length `n`. The task is to find a binary string of length `n` that is not present in the array.

### Key Observations
1. Since there are `2^n` possible binary strings of length `n`, you can always find at least one binary string not present in the input list.
2. If we systematically generate binary strings, we can ensure they are unique compared to the input strings.

### Approach
The simplest approach to ensure we find a unique binary string is to use a set to keep track of the binary strings already present in the input list. Then, we can generate binary strings systematically until we find one that is not in the set.

### Steps:
1. Create a set to store the existing binary strings for constant time lookup.
2. Generate binary strings in a systematic manner (like counting in binary) and check against the set.
3. Return the first binary string that is not found in the set.

Here's a sample C++ implementation:

```cpp
#include <vector>
#include <string>
#include <unordered_set>

class Solution {
public:
    std::string findUniqueBinaryString(std::vector<std::string>& nums) {
        // Step 1: Store all the existing binary strings in a set for quick lookup
        std::unordered_set<std::string> existingStrings(nums.begin(), nums.end());
        
        // Step 2: Generate all possible binary strings of length n
        int n = nums.size();
        for (int i = 0; i < (1 << n); ++i) { // 1 << n gives us 2^n
            // Create a binary string of length n
            std::string candidate;
            for (int j = n - 1; j >= 0; --j) {
                // For each position, check if the jth bit is set in i
                if (i & (1 << j)) {
                    candidate.push_back('1');
                } else {
                    candidate.push_back('0');
                }
            }
            // Step 3: Check if the generated string is not in the set
            if (existingStrings.find(candidate) == existingStrings.end()) {
                return candidate; // Found a unique binary string
            }
        }
        
        // It's guaranteed that we will find a unique string, so no need for any extra return
        return ""; // Placeholder, should never reach here as per problem statement
    }
};
```

### Explanation of the Code
- **Storing Existing Strings:** We create a set, `existingStrings`, to store all the binary strings from the input `nums`. This allows for O(1) average complexity for lookups.
- **Generating Candidates:** We loop from `0` to `2^n - 1` (using bitwise operations) to generate all possible binary strings of length `n`. Each integer `i` generates a distinct binary string.
- **Checking Uniqueness:** For each generated binary string, we check if it exists in our set. The first one that isn't found is returned immediately.

### Complexity
- **Time Complexity:** O(2^n), since we potentially generate all binary strings up to 2^n.
- **Space Complexity:** O(n), as we have to store an output that can be of length n.

This approach efficiently finds a unique binary string, ensuring that we adhere to the constraints provided by the problem.