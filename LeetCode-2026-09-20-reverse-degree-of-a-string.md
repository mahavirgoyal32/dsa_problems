# LeetCode Daily – 2026-09-20

## 🧠 Problem #3498 – **Reverse Degree of a String**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-degree-of-a-string)

---

### 📝 Problem Description

Given a string s, calculate its reverse degree.

The reverse degree is calculated as follows:


	For each character, multiply its position in the reversed alphabet (&#39;a&#39; = 26, &#39;b&#39; = 25, ..., &#39;z&#39; = 1) with its position in the string (1-indexed).
	Sum these products for all characters in the string.


Return the reverse degree of s.

 
Example 1:


Input: s = &quot;abc&quot;

Output: 148

Explanation:


	
		
			Letter
			Index in Reversed Alphabet
			Index in String
			Product
		
		
			&#39;a&#39;
			26
			1
			26
		
		
			&#39;b&#39;
			25
			2
			50
		
		
			&#39;c&#39;
			24
			3
			72
		
	


The reversed degree is 26 + 50 + 72 = 148.


Example 2:


Input: s = &quot;zaza&quot;

Output: 160

Explanation:


	
		
			Letter
			Index in Reversed Alphabet
			Index in String
			Product
		
		
			&#39;z&#39;
			1
			1
			1
		
		
			&#39;a&#39;
			26
			2
			52
		
		
			&#39;z&#39;
			1
			3
			3
		
		
			&#39;a&#39;
			26
			4
			104
		
	


The reverse degree is 1 + 52 + 3 + 104 = 160.


 
Constraints:


	1 <= s.length <= 1000
	s contains only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the LeetCode problem titled "Reverse Degree of a String", we'll first need to define what this problem entails by analyzing the requirements.

The goal of this problem is to determine the "reversed degree" of a string. The "reverse degree" can be understood as follows:
1. Each character in the input string may appear several times, contributing to its "degree".
2. The reverse degree of the string is defined as the total count of appearances of each unique character in the string.

### Problem Breakdown:
- Input: A string `s`.
- Output: An integer representing the total count of unique characters in the string multiplied by their occurrences.

### Example
Suppose `s = "abcabc"`. 
- The characters 'a', 'b', and 'c' each appears twice.
- Therefore, the output should be `2 (for 'a') + 2 (for 'b') + 2 (for 'c') = 6`.

### Steps to Solve the Problem:
1. Use an unordered map to store the frequency of each character in the string.
2. Sum up the frequency of each character to get the total value.

### C++ Code Implementation:

Here is the C++ code that implements the solution:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int reverseDegree(const std::string &s) {
    std::unordered_map<char, int> charCount;

    // Count frequency of each character in the string
    for (char c : s) {
        charCount[c]++;
    }

    // Calculate the degree by summing the frequencies
    int degree = 0;
    for (const auto &entry : charCount) {
        degree += entry.second; // entry.second is the frequency of the character
    }

    return degree;
}

int main() {
    std::string input = "abcabc";
    int result = reverseDegree(input);
    std::cout << "The reverse degree of the string is: " << result << std::endl; // Output: 6
    return 0;
}
```

### Explanation of the Code:
1. **Include Necessary Headers**: We include `<iostream>` for input/output, `<unordered_map>` for counting characters efficiently, and `<string>` for string operations.
2. **Function Definition**:
   - `reverseDegree` takes a constant reference to a string `s`.
   - We define an unordered map `charCount` to keep track of how many times each character appears in the string.
3. **Counting Characters**:
   - Iterate through each character of the string and increment its count in the `charCount` map.
4. **Calculating the Degree**:
   - We initialize an integer `degree` to zero.
   - We iterate through our map to sum up all the frequencies.
5. **Return the Result**: The function returns the total degree.
6. **Main Function**: 
   - We test the function with an example string and print out the result.

### Complexity Analysis:
- Time Complexity: O(n), where n is the length of the string, because we are traversing the string once to count characters and then iterating over the map, which will have at most `n` different characters.
- Space Complexity: O(k), where k is the number of unique characters in the string (in the worst case, this could be O(n) if all characters are unique).

This solution is efficient and follows straight forward approach to solve the problem as described.