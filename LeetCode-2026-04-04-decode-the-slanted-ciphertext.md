# LeetCode Daily – 2026-04-04

## 🧠 Problem #2075 – **Decode the Slanted Ciphertext**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/decode-the-slanted-ciphertext)

---

### 📝 Problem Description

A string originalText is encoded using a slanted transposition cipher to a string encodedText with the help of a matrix having a fixed number of rows rows.

originalText is placed first in a top-left to bottom-right manner.

The blue cells are filled first, followed by the red cells, then the yellow cells, and so on, until we reach the end of originalText. The arrow indicates the order in which the cells are filled. All empty cells are filled with &#39; &#39;. The number of columns is chosen such that the rightmost column will not be empty after filling in originalText.

encodedText is then formed by appending all characters of the matrix in a row-wise fashion.

The characters in the blue cells are appended first to encodedText, then the red cells, and so on, and finally the yellow cells. The arrow indicates the order in which the cells are accessed.

For example, if originalText = &quot;cipher&quot; and rows = 3, then we encode it in the following manner:

The blue arrows depict how originalText is placed in the matrix, and the red arrows denote the order in which encodedText is formed. In the above example, encodedText = &quot;ch ie pr&quot;.

Given the encoded string encodedText and number of rows rows, return the original string originalText.

Note: originalText does not have any trailing spaces &#39; &#39;. The test cases are generated such that there is only one possible originalText.

 
Example 1:


Input: encodedText = &quot;ch   ie   pr&quot;, rows = 3
Output: &quot;cipher&quot;
Explanation: This is the same example described in the problem description.


Example 2:


Input: encodedText = &quot;iveo    eed   l te   olc&quot;, rows = 4
Output: &quot;i love leetcode&quot;
Explanation: The figure above denotes the matrix that was used to encode originalText. 
The blue arrows show how we can find originalText from encodedText.


Example 3:


Input: encodedText = &quot;coding&quot;, rows = 1
Output: &quot;coding&quot;
Explanation: Since there is only 1 row, both originalText and encodedText are the same.


 
Constraints:


	0 <= encodedText.length <= 106
	encodedText consists of lowercase English letters and &#39; &#39; only.
	encodedText is a valid encoding of some originalText that does not have trailing spaces.
	1 <= rows <= 1000
	The testcases are generated such that there is only one possible originalText.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! Let's break down the problem "Decode the Slanted Ciphertext" from LeetCode and solve it in C++. 

### Problem Overview:
The problem provides a string `s` and a number `numRows`, which represent a piece of ciphertext arranged in a slanted diagonal pattern. Our task is to decode this ciphertext by reconstructing the original message.

### Steps to Decode:
1. **Understanding the Arrangement**: The characters are arranged in a diagonal zig-zag pattern across `numRows` rows. For example, if `numRows = 3` and `s = "PAYPALISHIRING"`, the characters are arranged as follows:
   ```
   P   I   N
   A L S I G
   Y   H
   ```
   This means we extract characters from top to bottom, then diagonally back up, repeating this process.

2. **Constructing the Rows**: We can simulate the construction of the message by using a simple loop to place characters into their corresponding rows.

3. **Reading Across Rows**: After storing the characters in their respective rows, we will concatenate the rows to form the final decoded string.

### C++ Implementation:
Here's how you can translate the above steps into C++ code:

```cpp
#include <iostream>
#include <vector>
#include <string>

std::string decodeCiphertext(const std::string& s, int numRows) {
    if (numRows == 1 || s.empty()) return s; // Special case handling

    std::vector<std::string> rows(std::min(numRows, static_cast<int>(s.length()))); // Create rows
    int currRow = 0; // Start at the first row
    bool goingDown = false; // Direction of traversal: down or up

    // Fill in the characters in the rows
    for (char c : s) {
        rows[currRow] += c; // Add character to the current row
        if (currRow == 0) {
            goingDown = true; // Start going down
        } else if (currRow == numRows - 1) {
            goingDown = false; // Start going up
        }
        currRow += goingDown ? 1 : -1; // Move up or down
    }

    // Build the result from rows
    std::string result;
    for (const auto& row : rows) {
        result += row;
    }

    // Remove trailing spaces
    while (!result.empty() && result.back() == ' ') {
        result.pop_back();
    }

    return result; // Return the decoded message
}

int main() {
    std::string s = "PAYPALISHIRING";
    int numRows = 3;
    std::string decodedMessage = decodeCiphertext(s, numRows);
    std::cout << "Decoded message: " << decodedMessage << std::endl;

    return 0;
}
```

### Explanation of the Code:
1. **Input Handling**: If `numRows` is 1 or if the string is empty, we can return the string itself, as no zig-zag arrangement is possible in these cases.

2. **Row Storage**: We create a vector `rows` to maintain each row of the zig-zag structure. The size of `rows` is the minimum between `numRows` and the length of `s`.

3. **Character Placement**: We iterate through each character in the string `s`. Depending on the current row, we append the character to the respective row. We switch the direction of traversal whenever we hit the top or bottom row.

4. **Result Compilation**: Finally, we append all the rows together to form the decoded message. We also strip any trailing spaces from the result for cleaner output.

5. **Output**: The main function demonstrates how the function works, calling it with a sample input and printing the result.

### Complexity:
- **Time Complexity**: O(n), where n is the length of the string `s`, because we iterate through the string once.
- **Space Complexity**: O(n) for storing the characters in the rows.

This implementation efficiently decodes the slanted ciphertext as required by the problem statement.