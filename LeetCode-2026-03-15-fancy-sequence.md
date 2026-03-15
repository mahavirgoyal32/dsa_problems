# LeetCode Daily – 2026-03-15

## 🧠 Problem #1622 – **Fancy Sequence**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/fancy-sequence)

---

### 📝 Problem Description

Write an API that generates fancy sequences using the append, addAll, and multAll operations.

Implement the Fancy class:


	Fancy() Initializes the object with an empty sequence.
	void append(val) Appends an integer val to the end of the sequence.
	void addAll(inc) Increments all existing values in the sequence by an integer inc.
	void multAll(m) Multiplies all existing values in the sequence by an integer m.
	int getIndex(idx) Gets the current value at index idx (0-indexed) of the sequence modulo 109 + 7. If the index is greater or equal than the length of the sequence, return -1.


 
Example 1:


Input
[&quot;Fancy&quot;, &quot;append&quot;, &quot;addAll&quot;, &quot;append&quot;, &quot;multAll&quot;, &quot;getIndex&quot;, &quot;addAll&quot;, &quot;append&quot;, &quot;multAll&quot;, &quot;getIndex&quot;, &quot;getIndex&quot;, &quot;getIndex&quot;]
[[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]
Output
[null, null, null, null, null, 10, null, null, null, 26, 34, 20]

Explanation
Fancy fancy = new Fancy();
fancy.append(2);   // fancy sequence: [2]
fancy.addAll(3);   // fancy sequence: [2+3] -> [5]
fancy.append(7);   // fancy sequence: [5, 7]
fancy.multAll(2);  // fancy sequence: [5*2, 7*2] -> [10, 14]
fancy.getIndex(0); // return 10
fancy.addAll(3);   // fancy sequence: [10+3, 14+3] -> [13, 17]
fancy.append(10);  // fancy sequence: [13, 17, 10]
fancy.multAll(2);  // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
fancy.getIndex(0); // return 26
fancy.getIndex(1); // return 34
fancy.getIndex(2); // return 20


 
Constraints:


	1 <= val, inc, m <= 100
	0 <= idx <= 105
	At most 105 calls total will be made to append, addAll, multAll, and getIndex.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The "Fancy Sequence" problem on LeetCode requires you to maintain a sequence of numbers and perform various operations on that sequence such as adding, multiplying, and querying special properties, all while keeping the operations efficient.

### Problem Breakdown

You're asked to implement a custom structure to manage the sequence:

1. **Add**: You can add a number `x` to every number in the sequence.
2. **Multiply**: You can multiply every number in the sequence by `y`.
3. **Get**: For index `i`, you want to return the current value in the sequence at that index after all the operations have been applied.

### Key Observations
- Instead of directly manipulating each element of the array for every operation, you can use two additional variables `add` and `mul` to represent the cumulative addition and multiplication. This dramatically reduces the complexity.
- When you perform multiple additions and multiplications, you can keep track of their combined effect on the total sequence effectively.

### Steps to Solve

1. Maintain a base value and a multiplier.
2. For addition, increase the base value by `x`.
3. For multiplication, increase the base multiplier and adjust the base value accordingly (i.e., `add` must be combined with `mul`).
4. For fetching a value, compute the resultant value using the formula:
   ```
   result = (arr[i] * current_mul) + current_add
   ```

### C++ Implementation

Here is the C++ solution with explanations embedded:

```cpp
class Fancy {
private:
    vector<long> arr; // Store the original values
    long add;         // Total additive factor to be applied
    long mul;         // Total multiplicative factor to be applied

public:
    Fancy() : add(0), mul(1) {
        // Initialize add to 0 and mul to 1
    }

    void append(int a) {
        // Store the original value divided by current multiplication factor
        arr.push_back((a - add) / mul);
    }

    void addAll(int x) {
        // Increase the additive factor
        add += x;
    }

    void multiplyAll(int y) {
        // Increase the multiplicative factor and adjust additive factor
        add *= y;
        add %= 1000000007; // Always keep it modulo
        mul *= y;
        mul %= 1000000007; // Always keep it modulo
    }

    int getIndex(int idx) {
        if (idx >= arr.size()) return -1; // Invalid index
        // Compute the value at index idx after applying multiplication and addition
        return (arr[idx] * mul + add) % 1000000007; // Apply mod
    }
};
```

### Explanation of the Code

- **Class Members**: We maintain a vector `arr` to store original values. Two integers `add` and `mul` are used to store the cumulative addition and multiplication factors.
  
- **append(int a)**: When you add a value to `arr`, you store the adjusted value considering the current `add` and `mul`. This allows you to easily retrieve the final value later without needing to update all prior elements.

- **addAll(int x)**: This method increases the `add` factor which will be applied to all values later.

- **multiplyAll(int y)**: This increases the `mul` factor and adjusts the `add` factor to reflect the times that every element will be multiplied by `y`. This ensures the value remains accurate.

- **getIndex(int idx)**: This retrieves the value at the specified index. It checks if the index is valid and then calculates the final value by applying the stored `mul` and `add`.

### Complexity

- **Append**: O(1)
- **Add/Multiply**: O(1)
- **Get**: O(1)

This solution handles each operation in constant time.

### Conclusion

This approach efficiently manages the updates and queries while ensuring that operations do not require iterating through the entire sequence, making it feasible to handle large inputs within the constraints.