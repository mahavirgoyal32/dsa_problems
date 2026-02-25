# LeetCode Daily – 2026-02-25

## 🧠 Problem #1356 – **Sort Integers by The Number of 1 Bits**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits)

---

### 📝 Problem Description

You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1&#39;s in their binary representation and in case of two or more integers have the same number of 1&#39;s you have to sort them in ascending order.

Return the array after sorting it.

 
Example 1:


Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]


Example 2:


Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.


 
Constraints:


	1 <= arr.length <= 500
	0 <= arr[i] <= 104

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Sort Integers by The Number of 1 Bits", we need to sort an array of integers based on the number of 1-bits (or set bits) in their binary representation. If two integers have the same number of 1-bits, we should sort them in ascending order.

Here's a step-by-step explanation followed by the C++ code:

### Steps to Approach the Problem:
1. **Count 1-bits**: For each integer in the array, we'll need to count how many 1-bits are present in its binary representation. This can be done using built-in functions or custom logic.
  
2. **Custom Sorting**: We will sort the integers based on two criteria:
   - First by the number of 1-bits (count).
   - Second by the integer value itself (for ties in the count).

3. **Using a Comparator**: We can use a custom comparator for sorting. This comparator will compare two integers based on the aforementioned criteria.

4. **Sorting Functionality**: We can utilize C++’s `sort` function from the `<algorithm>` library.

### Example C++ Code:
```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> sortByBits(std::vector<int>& arr) {
        // Custom comparator to sort based on the number of 1 bits and the integer itself
        auto countBits = [](int n) {
            int count = 0;
            while (n) {
                count += n & 1; // Increment count if the least significant bit is 1
                n >>= 1;        // Right shift to process the next bit
            }
            return count;
        };

        std::sort(arr.begin(), arr.end(), [&countBits](int a, int b) {
            // First sort by number of 1 bits, then by value
            int bitsA = countBits(a);
            int bitsB = countBits(b);
            return bitsA == bitsB ? a < b : bitsA < bitsB;
        });

        return arr;
    }
};
```

### Explanation of the Code:
1. **Lambda Function `countBits`**:
   - This is a helper function that counts the number of 1-bits in the binary representation of a number. It loops through each bit of the number, checking if it is set (1) and counts it.

2. **Sorting with `std::sort`**:
   - We use `std::sort` to sort the integers in the `arr` vector. The sorting criteria is defined by a lambda function that uses the `countBits` function. 
   - For two numbers `a` and `b`, it first compares the number of 1-bits. If those are equal, it then compares the numbers themselves to maintain ascending order.

3. **Returning the Sorted Array**:
   - After sorting, the array `arr` will be sorted according to the specified criteria, and we return it.

This approach efficiently solves the problem and adheres to the requirements given by the specification. It executes the sorting operation in `O(n log n)` time complexity, where `n` is the number of integers in the input array. The bit-counting operation for each integer is generally efficient enough for typical input sizes.