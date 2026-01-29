# LeetCode Daily – 2026-01-29

## 🧠 Problem #2976 – **Minimum Cost to Convert String I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-cost-to-convert-string-i)

---

### 📝 Problem Description

You are given two 0-indexed strings source and target, both of length n and consisting of lowercase English letters. You are also given two 0-indexed character arrays original and changed, and an integer array cost, where cost[i] represents the cost of changing the character original[i] to the character changed[i].

You start with the string source. In one operation, you can pick a character x from the string and change it to the character y at a cost of z if there exists any index j such that cost[j] == z, original[j] == x, and changed[j] == y.

Return the minimum cost to convert the string source to the string target using any number of operations. If it is impossible to convert source to target, return -1.

Note that there may exist indices i, j such that original[j] == original[i] and changed[j] == changed[i].

 
Example 1:


Input: source = &quot;abcd&quot;, target = &quot;acbe&quot;, original = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;e&quot;,&quot;d&quot;], changed = [&quot;b&quot;,&quot;c&quot;,&quot;b&quot;,&quot;e&quot;,&quot;b&quot;,&quot;e&quot;], cost = [2,5,5,1,2,20]
Output: 28
Explanation: To convert the string &quot;abcd&quot; to string &quot;acbe&quot;:
- Change value at index 1 from &#39;b&#39; to &#39;c&#39; at a cost of 5.
- Change value at index 2 from &#39;c&#39; to &#39;e&#39; at a cost of 1.
- Change value at index 2 from &#39;e&#39; to &#39;b&#39; at a cost of 2.
- Change value at index 3 from &#39;d&#39; to &#39;e&#39; at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.


Example 2:


Input: source = &quot;aaaa&quot;, target = &quot;bbbb&quot;, original = [&quot;a&quot;,&quot;c&quot;], changed = [&quot;c&quot;,&quot;b&quot;], cost = [1,2]
Output: 12
Explanation: To change the character &#39;a&#39; to &#39;b&#39; change the character &#39;a&#39; to &#39;c&#39; at a cost of 1, followed by changing the character &#39;c&#39; to &#39;b&#39; at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of &#39;a&#39; to &#39;b&#39;, a total cost of 3 * 4 = 12 is incurred.


Example 3:


Input: source = &quot;abcd&quot;, target = &quot;abce&quot;, original = [&quot;a&quot;], changed = [&quot;e&quot;], cost = [10000]
Output: -1
Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from &#39;d&#39; to &#39;e&#39;.


 
Constraints:


	1 <= source.length == target.length <= 105
	source, target consist of lowercase English letters.
	1 <= cost.length == original.length == changed.length <= 2000
	original[i], changed[i] are lowercase English letters.
	1 <= cost[i] <= 106
	original[i] != changed[i]

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The LeetCode problem "Minimum Cost to Convert String I" requires us to determine the minimum cost to convert a string `s` into another string `t` such that we can make character substitutions at certain costs. Let's summarize the problem details and provide a C++ solution with an explanation.

### Problem Statement

You are given two strings `s` and `t` of equal length, and an array `cost` where `cost[i]` is the cost to change the character `s[i]` to the character `t[i]`. Your task is to calculate the minimum cost to convert `s` to `t`.

### Explanation

To solve this problem, we can follow these steps:

1. **Initialization**: We start by initializing a variable to store the total cost.

2. **Iterate through the strings**: We iterate through each character of the strings `s` and `t`. If the characters at a position do not match (`s[i] != t[i]`), we add the cost of changing `s[i]` to `t[i]` (which is `cost[i]`) to the total cost.

3. **Return the total cost**: After iterating through all characters, we simply return the total cost calculated.

### C++ Code Implementation

Here is the C++ implementation of the above logic:

```cpp
#include <iostream>
#include <vector>
#include <string>

int minimumCost(std::string s, std::string t, std::vector<int>& cost) {
    int totalCost = 0;

    // Ensure strings are of the same length
    if (s.length() != t.length()) {
        return -1; // In the context of this problem, we assume inputs are valid (equal length)
    }

    // Calculate the cost of converting s to t
    for (int i = 0; i < s.length(); i++) {
        if (s[i] != t[i]) {
            totalCost += cost[i];
        }
    }

    return totalCost;
}

int main() {
    std::string s = "abc", t = "def";
    std::vector<int> cost = {1, 2, 3};

    int result = minimumCost(s, t, cost);
    std::cout << "Minimum cost to convert " << s << " to " << t << " is: " << result << std::endl;

    return 0;
}
```

### Explanation of the Code

1. **Function Signature**: `int minimumCost(std::string s, std::string t, std::vector<int>& cost)` defines the function where:
   - `s` and `t` are the strings to convert.
   - `cost` is a vector containing costs for each character position.

2. **Total Cost Initialization**: We declare `totalCost` to accumulate the cost of transformations.

3. **Checking Length**: We ensure both strings are of equal length. For the purposes of this exercise, we assume valid input.

4. **Main Loop**: We loop through each character:
   - If the characters are different, we add the corresponding cost to `totalCost`.

5. **Return Value**: Finally, we return the calculated `totalCost`.

### Complexity Analysis

- **Time Complexity**: O(n) where n is the length of the strings. We traverse each character once.
- **Space Complexity**: O(1) (excluding the input strings and the cost vector); we use a fixed amount of space for our variables.

This simple yet efficient solution guarantees that we can compute the minimum transformation cost in linear time!