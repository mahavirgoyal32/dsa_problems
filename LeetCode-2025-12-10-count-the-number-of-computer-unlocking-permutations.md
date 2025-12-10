# LeetCode Daily – 2025-12-10

## 🧠 Problem #3577 – **Count the Number of Computer Unlocking Permutations**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations)

---

### 📝 Problem Description

You are given an array complexity of length n.

There are n locked computers in a room with labels from 0 to n - 1, each with its own unique password. The password of the computer i has a complexity complexity[i].

The password for the computer labeled 0 is already decrypted and serves as the root. All other computers must be unlocked using it or another previously unlocked computer, following this information:


	You can decrypt the password for the computer i using the password for computer j, where j is any integer less than i with a lower complexity. (i.e. j < i and complexity[j] < complexity[i])
	To decrypt the password for computer i, you must have already unlocked a computer j such that j < i and complexity[j] < complexity[i].


Find the number of permutations of [0, 1, 2, ..., (n - 1)] that represent a valid order in which the computers can be unlocked, starting from computer 0 as the only initially unlocked one.

Since the answer may be large, return it modulo 109 + 7.

Note that the password for the computer with label 0 is decrypted, and not the computer with the first position in the permutation.

 
Example 1:


Input: complexity = [1,2,3]

Output: 2

Explanation:

The valid permutations are:


	[0, 1, 2]
	
		Unlock computer 0 first with root password.
		Unlock computer 1 with password of computer 0 since complexity[0] < complexity[1].
		Unlock computer 2 with password of computer 1 since complexity[1] < complexity[2].
	
	
	[0, 2, 1]
	
		Unlock computer 0 first with root password.
		Unlock computer 2 with password of computer 0 since complexity[0] < complexity[2].
		Unlock computer 1 with password of computer 0 since complexity[0] < complexity[1].
	
	



Example 2:


Input: complexity = [3,3,3,4,4,4]

Output: 0

Explanation:

There are no possible permutations which can unlock all computers.


 
Constraints:


	2 <= complexity.length <= 105
	1 <= complexity[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count the Number of Computer Unlocking Permutations" can be broken down into a combinatorial challenge where we need to find all possible unique orders in which we can unlock a computer using specific keys. The keys are represented by a string where each unique character corresponds to a distinct key.

### Problem Breakdown

Given a string `s`, which represents the keys used to unlock the computer, the goal is to count the number of distinct permutations we can generate.

The key points to consider for this problem:
- If all characters in `s` are unique, the number of permutations is simply the factorial of the length of the string.
- If there are duplicate characters, the number of unique permutations can be computed using the formula:
  
  \[
  \text{Total permutations} = \frac{n!}{k_1! \times k_2! \times ... \times k_m!}
  \]

  where `n` is the total number of characters in the string, and `k_i` is the frequency of each distinct character.

### Solution Steps

1. Count the frequencies of each character in the string.
2. Compute the total permutations using the formula mentioned above.

### Implementation in C++

Here’s how you can implement this logic in C++:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

class Solution {
public:
    int countPermutations(string s) {
        unordered_map<char, int> freq;
        
        // Count frequency of each character
        for (char c : s) {
            freq[c]++;
        }
        
        // Calculate the numerator (n!)
        long long numerator = 1;
        for (size_t i = 1; i <= s.size(); ++i) {
            numerator *= i; // This calculates n!
        }

        // Calculate the denominator (k1! * k2! * ...)
        long long denominator = 1;
        for (const auto& entry : freq) {
            long long denominatorFactorial = 1;
            for (size_t j = 1; j <= entry.second; ++j) {
                denominatorFactorial *= j; // This calculates k_i!
            }
            denominator *= denominatorFactorial;
        }

        // Result is total permutations divided by the repetitions
        return numerator / denominator;
    }
};

// Example usage
int main() {
    Solution solution;
    string s = "aabb";
    cout << "Number of unique permutations: " << solution.countPermutations(s) << endl;
    return 0;
}
```

### Explanation of the Code
1. **Character Frequency Count**: We use an unordered map to count how many times each character appears in the string.
   
2. **Numerator Calculation**: We calculate `n!` (the factorial of the length of the string).

3. **Denominator Calculation**: For each character that appears in the string, we compute its factorial and multiply all these factorials together.

4. **Final Result**: The number of unique permutations is the total permutations divided by the product of the factorials of the counts of each character.

### Conclusion
This solution efficiently counts the number of unique permutations of the unlocking keys represented by the string. It takes care of both unique and duplicate characters to avoid over-counting permutations that are indistinguishable due to identical characters. The complexity primarily depends on the length of the input string because we traverse through it to create a frequency map.