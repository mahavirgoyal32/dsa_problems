# LeetCode Daily – 2026-09-30

## 🧠 Problem #1111 – **Maximum Nesting Depth of Two Valid Parentheses Strings**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings)

---

### 📝 Problem Description

A string is a valid parentheses string (denoted VPS) if and only if it consists of &quot;(&quot; and &quot;)&quot; characters only, and:


	It is the empty string, or
	It can be written as AB (A concatenated with B), where A and B are VPS&#39;s, or
	It can be written as (A), where A is a VPS.


We can similarly define the nesting depth depth(S) of any VPS S as follows:


	depth(&quot;&quot;) = 0
	depth(A + B) = max(depth(A), depth(B)), where A and B are VPS&#39;s
	depth(&quot;(&quot; + A + &quot;)&quot;) = 1 + depth(A), where A is a VPS.


For example, &quot;&quot;, &quot;()()&quot;, and &quot;()(()())&quot; are VPS&#39;s (with nesting depths 0, 1, and 2), and &quot;)(&quot; and &quot;(()&quot; are not VPS&#39;s.

Given a VPS seq, split it into two disjoint subsequences A and B, such that A and B are VPS&#39;s (and A.length + B.length = seq.length). The subsequences may not necessarily be contiguous.

For example, for the sequence 123456789, one possible split is:


	
	A = {1, 3, 5, 7, 9},
	
	
	B = {2, 4, 6, 8}.
	


This corresponds to the output [0, 1, 0, 1, 0, 1, 0, 1, 0]  where 0 indicates membership in A and 1 indicates membership in B.

Now choose any such A and B such that max(depth(A), depth(B)) is the minimum possible value.

Return an answer array (of length seq.length) that encodes such a choice of A and B:  answer[i] = 0 if seq[i] is part of A, else answer[i] = 1.  Note that even though multiple answers may exist, you may return any of them.

 
Example 1:


Input: seq = &quot;(()())&quot;
Output: [0,1,1,1,1,0]


Example 2:


Input: seq = &quot;()(())()&quot;
Output: [0,0,0,1,1,0,1,1]


 
Constraints:


	1 <= seq.size <= 10000

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Maximum Nesting Depth of Two Valid Parentheses Strings," we need to find the maximum depth of nesting that can be achieved using two valid parentheses strings.

### Key Points:

1. **Nesting Depth**: This refers to the number of layers of parentheses. For example, the depth of the string "(()())" is 2.
2. **Valid Parentheses Strings**: A valid parentheses string must:
   - Start with an opening bracket `(` and end with a closing bracket `)`.
   - At any point in the string, the number of opening brackets must be greater than or equal to the number of closing brackets.

### Approach:

1. We need to iterate through the two input strings and check how deep the nesting can go.
2. To calculate the depth, we need to keep track of:
   - The maximum depth of the first string.
   - The maximum depth of the second string.
3. The combined maximum depth will be the sum of the maximum depths of both strings.

### Steps:

1. Define a helper function that calculates the maximum nesting depth for a given parentheses string.
2. Iterate through each character of the string, adjusting the depth based on whether the character is `(` or `)`.
3. Return the maximum depth found for both strings, summed together.

Here's how we can implement this in C++:

```cpp
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    pair<int, int> maxDepth(const string& s) {
        int depth = 0; // Current depth
        int maxDepth = 0; // Maximum depth encountered

        for (char ch : s) {
            if (ch == '(') {
                depth++; // Increase depth for an opening bracket
            } else if (ch == ')') {
                depth--; // Decrease depth for a closing bracket
            }
            maxDepth = max(maxDepth, depth); // Track the maximum depth
        }
        
        return make_pair(maxDepth, depth);
    }

    int maxDepthAfterSplit(string seq) {
        // We could split based on even/odd indices; a simple method is to consider if the index is even/odd
        // It simulates two valid parentheses strings after splitting
        
        auto firstPart = maxDepth(seq);

        // In the optimal split, we split to maximize depths for valid parentheses strings
        // The even and odd indexed characters can create two separate threads
        // Dealing with even indices
        string firstHalf;
        string secondHalf;

        for (int i = 0; i < seq.length(); ++i) {
            if (i % 2 == 0) {
                firstHalf += seq[i]; // Characters at even indices
            } else {
                secondHalf += seq[i]; // Characters at odd indices
            }
        }

        auto firstHalfDepth = maxDepth(firstHalf);
        auto secondHalfDepth = maxDepth(secondHalf);

        // Maximum depth after the split is the sum of individual maximums
        return firstHalfDepth.first + secondHalfDepth.first; 
    }
};

// Example usage
int main() {
    Solution solution;
    string seq = "((()))"; // Example input
    cout << solution.maxDepthAfterSplit(seq) << endl; // Output will be maximum nesting depth
    return 0;
}
```

### Explanation of the Code:

1. **maxDepth Function**: This function takes a string of parentheses and calculates the maximum depth:
   - A counter `depth` keeps track of the current depth as we iterate through the string.
   - Whenever we encounter `(`, we increment the depth; for `)`, we decrement it.
   - We maintain a record of `maxDepth` observed during this traversal.

2. **maxDepthAfterSplit Function**: This method aims to split the input string optimally:
   - We iterate the original string and create two separate strings based on even and odd indices (simulating the split).
   - We call `maxDepth` for both new strings to get their maximum depths.
   - The answer to the problem is the sum of the depths of the two separate strings.

3. **Main Function**: A simple test case is provided to demonstrate how to use the `Solution` class and the `maxDepthAfterSplit` method.

This solution should meet the requirements of the LeetCode problem and efficiently calculate the maximum nesting depths of two valid parentheses strings.