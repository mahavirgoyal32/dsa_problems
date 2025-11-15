# LeetCode Daily – 2025-11-15

## 🧠 Problem #3234 – **Count the Number of Substrings With Dominant Ones**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones)

---

### 📝 Problem Description

You are given a binary string s.

Return the number of substrings with dominant ones.

A string has dominant ones if the number of ones in the string is greater than or equal to the square of the number of zeros in the string.

 
Example 1:


Input: s = &quot;00011&quot;

Output: 5

Explanation:

The substrings with dominant ones are shown in the table below.



	
		
			i
			j
			s[i..j]
			Number of Zeros
			Number of Ones
		
	
	
		
			3
			3
			1
			0
			1
		
		
			4
			4
			1
			0
			1
		
		
			2
			3
			01
			1
			1
		
		
			3
			4
			11
			0
			2
		
		
			2
			4
			011
			1
			2
		
	


Example 2:


Input: s = &quot;101101&quot;

Output: 16

Explanation:

The substrings with non-dominant ones are shown in the table below.

Since there are 21 substrings total and 5 of them have non-dominant ones, it follows that there are 16 substrings with dominant ones.



	
		
			i
			j
			s[i..j]
			Number of Zeros
			Number of Ones
		
	
	
		
			1
			1
			0
			1
			0
		
		
			4
			4
			0
			1
			0
		
		
			1
			4
			0110
			2
			2
		
		
			0
			4
			10110
			2
			3
		
		
			1
			5
			01101
			2
			3
		
	


 
Constraints:


	1 <= s.length <= 4 * 104
	s consists only of characters &#39;0&#39; and &#39;1&#39;.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem titled "Count the Number of Substrings With Dominant Ones". The goal is to count the number of substrings such that the count of `1`s in the substring is greater than half the length of the substring.

### Problem Understanding

For example, in a binary string:
- A substring is dominant if it contains more `1`s than `0`s.
- Given the input "11100", valid dominant substrings include: "11", "111", "1110", "11100", etc.

### Steps to Solve the Problem

1. **Prefix Array:** Create a prefix sum array to count the number of `1`s up to each index.
2. **Iterate Through All Substrings:** Use two nested loops to go through all possible substrings and check if they have more `1`s than `0`s.
3. **Count Valid Substrings:** Count substrings that meet the criteria.

### C++ Implementation

Here is a possible implementation in C++:

```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int countBinarySubstrings(string s) {
        int n = s.size();
        vector<int> count; // To count blocks of '0's and '1's

        // Count blocks of consecutive 1s and 0s
        for (int i = 0; i < n;) {
            int count1 = 0;
            while (i < n && s[i] == '1') {
                count1++;
                i++;
            }
            count.push_back(count1);

            int count0 = 0;
            while (i < n && s[i] == '0') {
                count0++;
                i++;
            }
            if (count0 > 0) count.push_back(count0); // only record if there's a block
        }

        int result = 0;
        // For each consecutive pairs of blocks, count dominant substrings
        for (int i = 1; i < count.size(); i += 2) { // only look at blocks of '1's
            // count[i] is the block of '1's
            // count[i-1] is the block of '0's
            result += min(count[i], count[i - 1]);
        }

        return result;
    }
};

int main() {
    Solution sol;
    string s = "00110011"; // Example input
    cout << "Number of dominant substrings: " << sol.countBinarySubstrings(s) << endl; // Output should be printed
    return 0;
}
```

### Explanation of the Code

1. **Counting Blocks:** We count blocks of consecutive `0`s and `1`s. For example, in "00110011", the blocks would be: `2 (0's), 2 (1's), 2 (0's), 2 (1's)`.
   
2. **Store in Vector:** We store these counts in a vector, `count`. Each element represents the size of the consecutive blocks in the string.

3. **Calculating Dominant Substrings:** 
   - We loop through the stored counts, specifically examining pairs of blocks: a block of `0`s followed by a block of `1`s.
   - For each pair (a block of `1`s at `count[i]` and the previous block of `0`s at `count[i-1]`), the number of substrings that are valid (dominant) is the minimum of the sizes of these two blocks because a substring can only be dominant if the smaller block can fully match its size.

4. **Return Result:** Finally, we return the total count of dominant substrings.

### Complexity Analysis

- **Time Complexity:** O(n), where n is the length of the input string. This is because we iterate through the string a couple of times but in a linear fashion.
- **Space Complexity:** O(k), where k is the number of blocks in the string since we are storing block counts in the vector.

This implementation efficiently counts the number of substrings that meet the criteria given the constraints of constrained substrings.