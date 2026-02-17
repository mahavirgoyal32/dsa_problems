# LeetCode Daily – 2026-02-17

## 🧠 Problem #401 – **Binary Watch**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/binary-watch)

---

### 📝 Problem Description

A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.


	For example, the below binary watch reads &quot;4:51&quot;.




Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.


	For example, &quot;01:00&quot; is not valid. It should be &quot;1:00&quot;.


The minute must consist of two digits and may contain a leading zero.


	For example, &quot;10:2&quot; is not valid. It should be &quot;10:02&quot;.


 
Example 1:
Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
Example 2:
Input: turnedOn = 9
Output: []

 
Constraints:


	0 <= turnedOn <= 10

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Binary Watch" involves creating a binary representation of the time on a watch. The challenge is to determine all possible times that can be displayed on a binary watch with a given number of LEDs that are on. The watch has 4 LEDs for hours (0-11) and 6 LEDs for minutes (0-59). 

### Problem Breakdown

1. **Understanding the watch representation**:
    - Hours range: 0 to 11 (4 bits)
    - Minutes range: 0 to 59 (6 bits)
    - Total LEDs = 4 (for hours) + 6 (for minutes) = 10 LEDs
    - Each LED can either be on (1) or off (0).

2. **Input**:
    - An integer `num` representing how many LEDs are on.

3. **Output**:
    - A list of strings representing all possible times in the format "HH:MM".

4. **Constraints**:
    - Valid hours must be between 0 and 11
    - Valid minutes must be between 0 and 59

### Approach

To solve the problem, we can use a brute-force approach where we will generate all combinations of hours and minutes for the given number of LEDs. 

1. Loop through all possible hours (0 to 11) and count how many bits are set (i.e., how many LEDs are on).
2. For each selected hour, loop through all possible minutes (0 to 59) and count the number of bits set for minutes.
3. If the total number of bits set (from hours and minutes) equals `num`, we can format it as a string and store it in the result.

### C++ Solution Code

Here’s the implementation:

```cpp
#include <vector>
#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<string> readBinaryWatch(int num) {
        vector<string> result;

        // Loop through all possible hours and minutes
        for (int h = 0; h < 12; ++h) {
            for (int m = 0; m < 60; ++m) {
                // Count the number of bits set in hours + minutes
                if (bitCount(h) + bitCount(m) == num) {
                    // Format the time in "HH:MM"
                    result.push_back(to_string(h) + ":" + (m < 10 ? "0" : "") + to_string(m));
                }
            }
        }

        return result;
    }

private:
    // Function to count number of 1s in binary representation of a number
    int bitCount(int x) {
        int count = 0;
        while (x) {
            count += (x & 1);
            x >>= 1;
        }
        return count;
    }
};

// Example usage
int main() {
    Solution sol;
    int num = 1; // Example case
    vector<string> times = sol.readBinaryWatch(num);
    for (const auto &time : times) {
        cout << time << endl;
    }
    return 0;
}
```

### Explanation of the Code:
1. **Class Definition**: We create a `Solution` class with a public method `readBinaryWatch`.
2. **Looping through Hours and Minutes**: We use two nested loops to run through all possible hours (0-11) and minutes (0-59).
3. **Counting Bits**: We call the private helper function `bitCount` to count the number of 1s (LEDs on) in the binary representation of hours and minutes.
4. **Constructing the Time String**: If the total number of LEDs on equals `num`, we format the hour and minute into a string and store it in `result`.
5. **Printing the Result**: In the `main` function, we demonstrate how to use the `readBinaryWatch` function with an example input.

With this solution, we efficiently generate all valid times based on the number of LEDs that are on and return them in the desired format.