# LeetCode Daily – 2026-09-25

## 🧠 Problem #1096 – **Brace Expansion II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/brace-expansion-ii)

---

### 📝 Problem Description

Under the grammar given below, strings can represent a set of lowercase words. Let R(expr) denote the set of words the expression represents.

The grammar can best be understood through simple examples:


	Single letters represent a singleton set containing that word.
	
		R(&quot;a&quot;) = {&quot;a&quot;}
		R(&quot;w&quot;) = {&quot;w&quot;}
	
	
	When we take a comma-delimited list of two or more expressions, we take the union of possibilities.
	
		R(&quot;{a,b,c}&quot;) = {&quot;a&quot;,&quot;b&quot;,&quot;c&quot;}
		R(&quot;{{a,b},{b,c}}&quot;) = {&quot;a&quot;,&quot;b&quot;,&quot;c&quot;} (notice the final set only contains each word at most once)
	
	
	When we concatenate two expressions, we take the set of possible concatenations between two words where the first word comes from the first expression and the second word comes from the second expression.
	
		R(&quot;{a,b}{c,d}&quot;) = {&quot;ac&quot;,&quot;ad&quot;,&quot;bc&quot;,&quot;bd&quot;}
		R(&quot;a{b,c}{d,e}f{g,h}&quot;) = {&quot;abdfg&quot;, &quot;abdfh&quot;, &quot;abefg&quot;, &quot;abefh&quot;, &quot;acdfg&quot;, &quot;acdfh&quot;, &quot;acefg&quot;, &quot;acefh&quot;}
	
	


Formally, the three rules for our grammar:


	For every lowercase letter x, we have R(x) = {x}.
	For expressions e1, e2, ... , ek with k >= 2, we have R({e1, e2, ...}) = R(e1) &cup; R(e2) &cup; ...
	For expressions e1 and e2, we have R(e1 + e2) = {a + b for (a, b) in R(e1) &times; R(e2)}, where + denotes concatenation, and &times; denotes the cartesian product.


Given an expression representing a set of words under the given grammar, return the sorted list of words that the expression represents.

 
Example 1:


Input: expression = &quot;{a,b}{c,{d,e}}&quot;
Output: [&quot;ac&quot;,&quot;ad&quot;,&quot;ae&quot;,&quot;bc&quot;,&quot;bd&quot;,&quot;be&quot;]


Example 2:


Input: expression = &quot;{{a,z},a{b,c},{ab,z}}&quot;
Output: [&quot;a&quot;,&quot;ab&quot;,&quot;ac&quot;,&quot;z&quot;]
Explanation: Each distinct word is written only once in the final answer.


 
Constraints:


	1 <= expression.length <= 60
	expression[i] consists of &#39;{&#39;, &#39;}&#39;, &#39;,&#39;or lowercase English letters.
	The given expression represents a set of words based on the grammar given in the description.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Brace Expansion II" requires us to expand strings that contain brace expressions, which can include nested and combined brace expressions. The goal is to return a lexicographically sorted list of all possible strings generated from the brace expressions.

### Problem Explanation

Given a string, the string may contain `{` and `}` which denotes a set of options separated by commas. For example, the expression `{a,b}` represents an option to choose either `a` or `b`. 

The main challenges here are:
1. Handling nested brace expressions.
2. Properly combining multiple brace expansions using the cartesian product.

### Key Steps to Solve the Problem

1. **Parse the Input**: We need to process the input string and identify the various parts. We will need a way to handle the nested braces as well.

2. **Use Sets and Cartesian Product**: To combine the different parts generated from the brace expansions, we will use a set to avoid duplicates and a list to help with generating combinations.

3. **Sort the Final Result**: The final result must be lexicographically sorted before being returned.

### C++ Implementation

Here's how to implement the above steps in C++.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<string> braceExpansionII(string expression) {
        return getAllExpansions(expression);
    }

private:
    set<string> getAllExpansions(const string& exp) {
        set<string> result;
        vector<string> curSet;
        size_t i = 0;

        while (i < exp.length()) {
            if (exp[i] == '{') {
                // If we encounter a '{', we find the corresponding '}'.
                int braceCount = 1;
                size_t j = i + 1; // Start looking right after '{'

                while (j < exp.length() && braceCount > 0) {
                    if (exp[j] == '{') braceCount++;
                    else if (exp[j] == '}') braceCount--;
                    j++;
                }

                // Extract the content within the braces
                string inner = exp.substr(i + 1, j - i - 2);
                // Recursively get all combinations from the inside
                set<string> innerResults = getAllExpansions(inner);
                
                // If current set is empty, initialize it with the results from inner
                if (curSet.empty()) {
                    curSet.insert(curSet.end(), innerResults.begin(), innerResults.end());
                } else {
                    set<string> newCurSet;
                    for (const auto& s1 : curSet) {
                        for (const auto& s2 : innerResults) {
                            newCurSet.insert(s1 + s2);
                        }
                    }
                    curSet.assign(newCurSet.begin(), newCurSet.end());
                }
                
                // Move our index past the '}'
                i = j;
            } else {
                // If we encounter a normal character or a comma
                size_t j = i;
                while (j < exp.length() && exp[j] != ',' && exp[j] != '{') {
                    j++;
                }

                // Extract the simple string portion
                string strPart = exp.substr(i, j - i);
                if (!curSet.empty()) {
                    // Since we already have some expansions, combine
                    set<string> newCurSet;
                    for (const auto& s : curSet) {
                        newCurSet.insert(s + strPart);
                    }
                    curSet.assign(newCurSet.begin(), newCurSet.end());
                } else {
                    // First unique set, just add it
                    curSet.push_back(strPart);
                }

                i = j; // Move the index to the next character
            }

            // If we encounter a comma just skip
            if (i < exp.length() && exp[i] == ',') {
                i++;
            }
        }

        // Add all collected strings to result set
        result.insert(curSet.begin(), curSet.end());
        return result;
    }
};

int main() {
    Solution solution;
    string expression = "{a,b}{c,{d,e}}";
    vector<string> result = solution.braceExpansionII(expression);
    
    for (const auto& s : result) {
        cout << s << " ";
    }

    return 0;
}
```

### Explanation of Code

1. **Data Structures**: 
   - A `set<string>` is used to store the results while avoiding duplicates automatically.
   - A `vector<string>` temporarily holds the current set of expansions being processed.

2. **Recursive Expansion**:
   - The `getAllExpansions` function processes the current expression. When it finds a `{`, it locates the corresponding `}` and recursively processes the contents within.
   - For text outside braces, it's directly added to the results.

3. **Combining Results**:
   - If there are existing expansions in `curSet`, we combine them with the results from the inner brace expansions.

4. **Sorting**: The result set is automatically sorted when stored in a `set`, thus we return it after processing.

5. **Main Function**: A simple `main` function demonstrates how to use the `Solution` class by running a sample input and outputting the results.

This solution efficiently handles the nested and combined brace expansions and gives a correct result as desired.