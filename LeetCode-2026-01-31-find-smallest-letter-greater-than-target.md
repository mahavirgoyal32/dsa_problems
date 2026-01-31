# LeetCode Daily – 2026-01-31

## 🧠 Problem #744 – **Find Smallest Letter Greater Than Target**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-smallest-letter-greater-than-target)

---

### 📝 Problem Description

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 
Example 1:


Input: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;a&quot;
Output: &quot;c&quot;
Explanation: The smallest character that is lexicographically greater than &#39;a&#39; in letters is &#39;c&#39;.


Example 2:


Input: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;c&quot;
Output: &quot;f&quot;
Explanation: The smallest character that is lexicographically greater than &#39;c&#39; in letters is &#39;f&#39;.


Example 3:


Input: letters = [&quot;x&quot;,&quot;x&quot;,&quot;y&quot;,&quot;y&quot;], target = &quot;z&quot;
Output: &quot;x&quot;
Explanation: There are no characters in letters that is lexicographically greater than &#39;z&#39; so we return letters[0].


 
Constraints:


	2 <= letters.length <= 104
	letters[i] is a lowercase English letter.
	letters is sorted in non-decreasing order.
	letters contains at least two different characters.
	target is a lowercase English letter.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Find Smallest Letter Greater Than Target" on LeetCode, we need to find the smallest letter in a sorted list of characters that is greater than a given target character. We can achieve this efficiently using binary search given that the list of characters is sorted.

### Problem Explanation
The input consists of:
- An array of characters, `letters`, sorted in ascending order.
- A character, `target`, for which we need to find the smallest character in `letters` that is greater than `target`.

### Key Points
- The letters will wrap around, meaning if the target is greater than or equal to the largest letter in `letters`, we should return the smallest letter in the list.
- The time complexity for this problem can be O(log n) with a binary search approach, which is optimal for sorted arrays.

### Steps to Solve
1. Initialize two pointers, `left` and `right`, which represent the bounds of the search area in the `letters` array.
2. Perform a binary search:
   - Calculate the middle index.
   - Check if the middle character is less than or equal to the target.
   - If it's less than or equal, move the left pointer to `mid + 1` (to look for a larger character).
   - If it's greater, move the right pointer to `mid` (to narrow down the search).
3. Once the search completes, if `left` exceeds the size of the array, wrap around by using modulo to find the appropriate character.

### Example
For `letters = ['c', 'f', 'j']` and `target = 'a'`, the smallest letter greater than 'a' is 'c'. If `target = 'j'`, the result should wrap around to give 'c'.

### C++ Implementation
Here’s how you could implement this:

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int left = 0;
        int right = letters.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            // If the middle character is less than or equal to target, search in the right half
            if (letters[mid] <= target) {
                left = mid + 1;
            } else { // Middle character is greater than target
                right = mid; // Keep mid in consideration as it could be the answer
            }
        }
        
        // At the end of the loop, left is the position of the smallest letter greater than target
        return letters[left % letters.size()]; // Wrap around using modulo
    }
};
```

### Explanation of the Code
- We define a class `Solution` with a member function `nextGreatestLetter`.
- We perform a binary search using a `while` loop that continues until `left` is no longer less than `right`.
- Adjust `left` and `right` based on the comparison of `letters[mid]` with the `target`.
- Once the loop concludes, we use `left` to fetch the result, ensuring we handle cases where the target is greater than all letters using the modulo operation.

### Complexity Analysis
- **Time Complexity**: O(log n) due to binary search.
- **Space Complexity**: O(1) since we are using only a constant amount of extra space. 

This solution efficiently finds the smallest letter that is greater than the target character in a sorted array of characters.