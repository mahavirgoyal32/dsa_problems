# LeetCode Daily – 2025-09-19

## 🧠 Problem #3484 – **Design Spreadsheet**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/design-spreadsheet)

---

### 📝 Problem Description

A spreadsheet is a grid with 26 columns (labeled from &#39;A&#39; to &#39;Z&#39;) and a given number of rows. Each cell in the spreadsheet can hold an integer value between 0 and 105.

Implement the Spreadsheet class:


	Spreadsheet(int rows) Initializes a spreadsheet with 26 columns (labeled &#39;A&#39; to &#39;Z&#39;) and the specified number of rows. All cells are initially set to 0.
	void setCell(String cell, int value) Sets the value of the specified cell. The cell reference is provided in the format &quot;AX&quot; (e.g., &quot;A1&quot;, &quot;B10&quot;), where the letter represents the column (from &#39;A&#39; to &#39;Z&#39;) and the number represents a 1-indexed row.
	void resetCell(String cell) Resets the specified cell to 0.
	int getValue(String formula) Evaluates a formula of the form &quot;=X+Y&quot;, where X and Y are either cell references or non-negative integers, and returns the computed sum.


Note: If getValue references a cell that has not been explicitly set using setCell, its value is considered 0.

 
Example 1:


Input:
[&quot;Spreadsheet&quot;, &quot;getValue&quot;, &quot;setCell&quot;, &quot;getValue&quot;, &quot;setCell&quot;, &quot;getValue&quot;, &quot;resetCell&quot;, &quot;getValue&quot;]
[[3], [&quot;=5+7&quot;], [&quot;A1&quot;, 10], [&quot;=A1+6&quot;], [&quot;B2&quot;, 15], [&quot;=A1+B2&quot;], [&quot;A1&quot;], [&quot;=A1+B2&quot;]]

Output:
[null, 12, null, 16, null, 25, null, 15] 

Explanation
Spreadsheet spreadsheet = new Spreadsheet(3); // Initializes a spreadsheet with 3 rows and 26 columns
spreadsheet.getValue(&quot;=5+7&quot;); // returns 12 (5+7)
spreadsheet.setCell(&quot;A1&quot;, 10); // sets A1 to 10
spreadsheet.getValue(&quot;=A1+6&quot;); // returns 16 (10+6)
spreadsheet.setCell(&quot;B2&quot;, 15); // sets B2 to 15
spreadsheet.getValue(&quot;=A1+B2&quot;); // returns 25 (10+15)
spreadsheet.resetCell(&quot;A1&quot;); // resets A1 to 0
spreadsheet.getValue(&quot;=A1+B2&quot;); // returns 15 (0+15)

 
Constraints:


	1 <= rows <= 103
	0 <= value <= 105
	The formula is always in the format &quot;=X+Y&quot;, where X and Y are either valid cell references or non-negative integers with values less than or equal to 105.
	Each cell reference consists of a capital letter from &#39;A&#39; to &#39;Z&#39; followed by a row number between 1 and rows.
	At most 104 calls will be made in total to setCell, resetCell, and getValue.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
