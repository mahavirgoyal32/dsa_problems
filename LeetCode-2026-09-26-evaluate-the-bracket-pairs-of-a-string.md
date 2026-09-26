# LeetCode Daily – 2026-09-26

## 🧠 Problem #1807 – **Evaluate the Bracket Pairs of a String**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string)

---

### 📝 Problem Description

You are given a string s that contains some bracket pairs, with each pair containing a non-empty key.


	For example, in the string &quot;(name)is(age)yearsold&quot;, there are two bracket pairs that contain the keys &quot;name&quot; and &quot;age&quot;.


You know the values of a wide range of keys. This is represented by a 2D string array knowledge where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei.

You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key keyi, you will:


	Replace keyi and the bracket pair with the key&#39;s corresponding valuei.
	If you do not know the value of the key, you will replace keyi and the bracket pair with a question mark &quot;?&quot; (without the quotation marks).


Each key will appear at most once in your knowledge. There will not be any nested brackets in s.

Return the resulting string after evaluating all of the bracket pairs.

 
Example 1:


Input: s = &quot;(name)is(age)yearsold&quot;, knowledge = [[&quot;name&quot;,&quot;bob&quot;],[&quot;age&quot;,&quot;two&quot;]]
Output: &quot;bobistwoyearsold&quot;
Explanation:
The key &quot;name&quot; has a value of &quot;bob&quot;, so replace &quot;(name)&quot; with &quot;bob&quot;.
The key &quot;age&quot; has a value of &quot;two&quot;, so replace &quot;(age)&quot; with &quot;two&quot;.


Example 2:


Input: s = &quot;hi(name)&quot;, knowledge = [[&quot;a&quot;,&quot;b&quot;]]
Output: &quot;hi?&quot;
Explanation: As you do not know the value of the key &quot;name&quot;, replace &quot;(name)&quot; with &quot;?&quot;.


Example 3:


Input: s = &quot;(a)(a)(a)aaa&quot;, knowledge = [[&quot;a&quot;,&quot;yes&quot;]]
Output: &quot;yesyesyesaaa&quot;
Explanation: The same key can appear multiple times.
The key &quot;a&quot; has a value of &quot;yes&quot;, so replace all occurrences of &quot;(a)&quot; with &quot;yes&quot;.
Notice that the &quot;a&quot;s not in a bracket pair are not evaluated.


 
Constraints:


	1 <= s.length <= 105
	0 <= knowledge.length <= 105
	knowledge[i].length == 2
	1 <= keyi.length, valuei.length <= 10
	s consists of lowercase English letters and round brackets &#39;(&#39; and &#39;)&#39;.
	Every open bracket &#39;(&#39; in s will have a corresponding close bracket &#39;)&#39;.
	The key in each bracket pair of s will be non-empty.
	There will not be any nested bracket pairs in s.
	keyi and valuei consist of lowercase English letters.
	Each keyi in knowledge is unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Evaluate the Bracket Pairs of a String" requires us to evaluate expressions within brackets in a string, where each pair of brackets can correspond to different operations or values based on the characters they enclose.

To solve this problem, we need to handle the following tasks:
1. Identify and evaluate pairs of brackets.
2. Keep track of nested brackets.
3. Compute the final result based on the values or operations specified within the brackets.

### Approach:
We can use a stack data structure to help us evaluate the bracket pairs. Here's the step-by-step breakdown:

1. **Initialization**: We will use a stack to keep track of the values within the brackets. We will also keep a variable to track the current value as we parse the string.

2. **Iterate through the string**: We'll go through each character in the string. 
   - If we encounter an opening bracket `'('`, we push the current value onto the stack and reset the current value to zero.
   - If we encounter a closing bracket `')'`, we pop the top value from the stack (which is the value before the current bracketed expression) and add the current value to it.
   - If we encounter a digit, we can compile the number (in case of multi-digit numbers) and add it to the current value.

3. **Return the final value**: After we've processed the string, the current value will have the evaluated result.

### C++ Code:
Here's the implementation of the above approach in C++:

```cpp
#include <iostream>
#include <stack>
#include <string>

int evaluateBracketPairs(const std::string& s) {
    std::stack<int> stack;
    int currentValue = 0;

    for (char ch : s) {
        if (ch == '(') {
            // Push the current value onto the stack
            stack.push(currentValue);
            // Reset current value for new bracket expression
            currentValue = 0;
        } else if (ch == ')') {
            // Pop the previous value from the stack
            if (!stack.empty()) {
                int previousValue = stack.top();
                stack.pop();
                // Add current value to it
                currentValue += previousValue;
            }
        } else if (isdigit(ch)) {
            // If the character is a digit, update the current value
            currentValue += (ch - '0'); // Convert char to int and accumulate
        }
    }

    return currentValue;
}

int main() {
    std::string expression = "(1(2(3)(4))(5(6)(7)))";
    int result = evaluateBracketPairs(expression);
    std::cout << "The result of evaluating the bracket pairs is: " << result << std::endl;

    return 0;
}
```

### Explanation of the Code:
- **Header Files**: We include necessary headers for IO operations and using the stack.
- **Function `evaluateBracketPairs`**: This function evaluates the bracketed expression.
  - We use a loop to process each character from the input string.
  - We manage `currentValue` for the numbers inside the brackets, and manage values using a stack when we encounter an opening bracket or closing bracket.
- **Main function**: We invoke `evaluateBracketPairs`, passing a test string representing bracketed expressions. The result is printed to the console.

### Conclusion:
This approach efficiently utilizes a stack to handle nested brackets and compute the result of the enclosed expressions. This problem-solving technique is common for evaluating expressions, parsing trees, or handling similar nested structures.