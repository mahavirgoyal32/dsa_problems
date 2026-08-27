# LeetCode Daily – 2026-08-27

## 🧠 Problem #3720 – **Lexicographically Smallest Permutation Greater Than Target**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target)

---

### 📝 Problem Description

You are given two strings s and target, both having length n, consisting of lowercase English letters.

Return the lexicographically smallest permutation of s that is strictly greater than target. If no permutation of s is lexicographically strictly greater than target, return an empty string.

A string a is lexicographically strictly greater than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b.

 
Example 1:


Input: s = &quot;abc&quot;, target = &quot;bba&quot;

Output: &quot;bca&quot;

Explanation:


	The permutations of s (in lexicographical order) are &quot;abc&quot;, &quot;acb&quot;, &quot;bac&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;cba&quot;.
	The lexicographically smallest permutation that is strictly greater than target is &quot;bca&quot;.



Example 2:


Input: s = &quot;leet&quot;, target = &quot;code&quot;

Output: &quot;eelt&quot;

Explanation:


	The permutations of s (in lexicographical order) are &quot;eelt&quot;, &quot;eetl&quot;, &quot;elet&quot;, &quot;elte&quot;, &quot;etel&quot;, &quot;etle&quot;, &quot;leet&quot;, &quot;lete&quot;, &quot;ltee&quot;, &quot;teel&quot;, &quot;tele&quot;, and &quot;tlee&quot;.
	The lexicographically smallest permutation that is strictly greater than target is &quot;eelt&quot;.



Example 3:


Input: s = &quot;baba&quot;, target = &quot;bbaa&quot;

Output: &quot;&quot;

Explanation:


	The permutations of s (in lexicographical order) are &quot;aabb&quot;, &quot;abab&quot;, &quot;abba&quot;, &quot;baab&quot;, &quot;baba&quot;, and &quot;bbaa&quot;.
	None of them is lexicographically strictly greater than target. Therefore, the answer is &quot;&quot;.



 
Constraints:


	1 <= s.length == target.length <= 300
	s and target consist of only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem you're dealing with is to find the lexicographically smallest permutation of a given integer `target` that is greater than `target`. To tackle this, we can utilize a greedy algorithm in conjunction with some properties of permutations. Here’s a step-by-step explanation of how you can solve it, followed by a C++ implementation.

### Step-by-Step Explanation:

1. **Convert the Integer to Array of Digits**: First, we convert the integer `target` into an array of its digits. This will help us manipulate individual digits easily.

2. **Find the Rightmost Ascending Pair**: Starting from the end of the digit array, look for the first pair of adjacent numbers where the left number is less than the right number. Let's call the index of the left number `i`. This is the point where we can make a change to create the next permutation.

3. **Find the Smallest Larger Digit**: Once you have found `i`, find the smallest digit on the right side of `i` that is larger than `digits[i]`. Let's call its index `j`.

4. **Swap `i` and `j`**: Swap the numbers at indices `i` and `j`. This ensures that we are generating the next permutation.

5. **Reverse the Suffix**: Finally, reverse the digits to the right of `i` to get the smallest possible tail, ensuring that the result is the smallest permutation greater than `target`.

6. **Convert Back to Integer**: Convert the array of digits back into an integer.

### C++ Implementation:

Here's how the above logic can be implemented in C++:

```cpp
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int nextGreaterPermutation(int target) {
        string digits = to_string(target); // Convert integer to string
        int n = digits.size();
        
        // Step 2: Find the rightmost ascending pair
        int i = n - 2;
        while (i >= 0 && digits[i] >= digits[i + 1]) {
            --i;  // Look for the first decreasing element
        }
        
        if (i < 0) {
            return -1; // If no greater permutation exists
        }
        
        // Step 3: Find the smallest larger digit on the right side of i
        int j = n - 1;
        while (digits[j] <= digits[i]) {
            --j; // Find the rightmost digit that is larger than digits[i]
        }
        
        // Step 4: Swap i and j
        swap(digits[i], digits[j]);
        
        // Step 5: Reverse the suffix starting from i+1
        reverse(digits.begin() + i + 1, digits.end());
        
        // Convert back to integer
        long long result = stoll(digits);
        return (result > INT_MAX) ? -1 : static_cast<int>(result);
    }
};
```

### Explanation of the Code:

- **Conversion to String**: We convert the target integer to a string to work with the digits easily.
- **Finding the Rightmost Ascending Pair**: We iterate from the end to find the first character that can be increased to get a larger permutation.
- **Finding the Swap Index**: We locate the smallest digit larger than the identified digit to swap it with.
- **Swapping and Reversing**: After swapping, we reverse the suffix to ensure it is the smallest possible arrangement.
- **Handling Large Integers**: We check if the resulting integer is within the bounds of `INT_MAX`. If it exceeds, we return `-1`.

### Complexity Analysis:
- **Time Complexity**: O(n), where `n` is the number of digits in `target`. Each of the operations (find, swap, reverse) take linear time.
- **Space Complexity**: O(n) for storing the digits as a string.

This approach creates the next permutation in place and efficiently returns the lexicographically smallest permutation greater than `target`.