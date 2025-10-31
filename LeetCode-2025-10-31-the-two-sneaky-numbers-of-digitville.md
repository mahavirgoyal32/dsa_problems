# LeetCode Daily – 2025-10-31

## 🧠 Problem #3289 – **The Two Sneaky Numbers of Digitville**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville)

---

### 📝 Problem Description

In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

 
Example 1:


Input: nums = [0,1,1,0]

Output: [0,1]

Explanation:

The numbers 0 and 1 each appear twice in the array.


Example 2:


Input: nums = [0,3,2,1,3,2]

Output: [2,3]

Explanation: 

The numbers 2 and 3 each appear twice in the array.


Example 3:


Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]

Output: [4,5]

Explanation: 

The numbers 4 and 5 each appear twice in the array.


 
Constraints:


	2 <= n <= 100
	nums.length == n + 2
	0 <= nums[i] < n
	The input is generated such that nums contains exactly two repeated elements.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Let's solve the problem "The Two Sneaky Numbers of Digitville." Here’s a breakdown of the problem and a C++ solution.

### Problem Explanation

The problem states that we need to find two "sneaky" numbers given a digit `n`. A sneaky number is a two-digit number formed by the digits `n` and `n+1` or `n` and `n-1` (depending on the constraints). The goal is to ensure that both numbers fall within the valid range of two-digit numbers, which is from `10` to `99`.

### Steps to Solve

1. **Identify the Two Possible Options**:
   - For a given `n`, you can form two pairs:
     1. The first sneaky number using the digits `n` and `n+1`.
     2. The second sneaky number using the digits `n` and `n-1`.
  
2. **Check Validity**:
   - Ensure that both `n` and `n+1` are in the range [10, 99].
   - Ensure that both `n` and `n-1` are in the range [10, 99].

3. **Output**:
   - Depending on the validity check, print the two sneaky numbers.

### C++ Solution

Below is the C++ code to implement the above logic:

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> findSneakyNumbers(int n) {
    vector<int> sneakyNumbers;

    // First sneaky number formed by (n, n+1)
    if (n >= 10 && n + 1 <= 99) {
        sneakyNumbers.push_back(stoi(to_string(n) + to_string(n + 1)));
    }

    // Second sneaky number formed by (n, n-1)
    if (n >= 11 && n <= 99) { // n must be at least 11 to have at least one digit less than it.
        sneakyNumbers.push_back(stoi(to_string(n) + to_string(n - 1)));
    }

    return sneakyNumbers;
}

int main() {
    int n;
    cout << "Enter a digit (n): ";
    cin >> n;

    vector<int> sneakyNumbers = findSneakyNumbers(n);
    cout << "The two sneaky numbers are: ";
    for (int number : sneakyNumbers) {
        cout << number << " ";
    }
    cout << endl;

    return 0;
}
```

### Explanation of the Code

- We first include the necessary headers and utilize the `std` namespace.
- The function `findSneakyNumbers(int n)` accepts an integer `n`.
  - It checks if `n` and `n+1` form a valid two-digit number and adds it to the results.
  - It checks if `n` and `n-1` also form a valid two-digit number and adds it to the results if valid.
- The main function prompts the user for a digit, calls the `findSneakyNumbers` function, and then prints the results.

### Validity Checks
- The code ensures that both numbers are formed only if they lie in the valid range of two-digit numbers [10, 99].
- Special attention is given to make sure that when using `n-1`, `n` should be at least `11` to ensure `n-1` is still a valid digit. 

### Edge Cases
- If `n` is less than `10`, no two-digit numbers can be formed.
- If `n` equals `9`, only one valid combination exists, which is `99`.
- Both combinations being generated ensures that we either find 1 or 2 sneaky numbers based on the input.

Feel free to execute the provided code with different values of `n` to see how it behaves!