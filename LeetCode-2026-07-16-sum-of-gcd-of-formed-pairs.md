# LeetCode Daily – 2026-07-16

## 🧠 Problem #3867 – **Sum of GCD of Formed Pairs**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sum-of-gcd-of-formed-pairs)

---

### 📝 Problem Description

You are given an integer array nums of length n.

Construct an array prefixGcd where for each index i:


	Let mxi = max(nums[0], nums[1], ..., nums[i]).
	prefixGcd[i] = gcd(nums[i], mxi).


After constructing prefixGcd:


	Sort prefixGcd in non-decreasing order.
	Form pairs by taking the smallest unpaired element and the largest unpaired element.
	Repeat this process until no more pairs can be formed.
	For each formed pair, compute the gcd of the two elements.
	If n is odd, the middle element in the prefixGcd array remains unpaired and should be ignored.


Return an integer denoting the sum of the GCD values of all formed pairs.
The term gcd(a, b) denotes the greatest common divisor of a and b.
 
Example 1:


Input: nums = [2,6,4]

Output: 2

Explanation:

Construct prefixGcd:


	
		
			i
			nums[i]
			mxi
			prefixGcd[i]
		
	
	
		
			0
			2
			2
			2
		
		
			1
			6
			6
			6
		
		
			2
			4
			6
			2
		
	


prefixGcd = [2, 6, 2]. After sorting, it forms [2, 2, 6].

Pair the smallest and largest elements: gcd(2, 6) = 2. The remaining middle element 2 is ignored. Thus, the sum is 2.


Example 2:


Input: nums = [3,6,2,8]

Output: 5

Explanation:

Construct prefixGcd:


	
		
			i
			nums[i]
			mxi
			prefixGcd[i]
		
	
	
		
			0
			3
			3
			3
		
		
			1
			6
			6
			6
		
		
			2
			2
			6
			2
		
		
			3
			8
			8
			8
		
	


prefixGcd = [3, 6, 2, 8]. After sorting, it forms [2, 3, 6, 8].

Form pairs: gcd(2, 8) = 2 and gcd(3, 6) = 3. Thus, the sum is 2 + 3 = 5.


 
Constraints:


	1 <= n == nums.length <= 105
	1 <= nums[i] <= 10​​​​​​​9

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure, I can help you with that! The problem "Sum of GCD of Formed Pairs" requires computing the sum of GCDs of all possible pairs formed from two arrays. Let's break down the problem and provide a solution in C++ along with the explanation.

### Problem Understanding

Given two arrays `A` and `B`, we need to calculate the sum of the GCDs of each pair formed by picking one element from `A` and one element from `B`. The key challenge is to do this efficiently.

### GCD (Greatest Common Divisor)

The GCD of two numbers is the largest positive integer that divides both numbers. For example, GCD(8, 12) = 4.

### Approach

1. **Naive Approach**: A straightforward approach would be to use nested loops to calculate the GCD of every pair, leading to a time complexity of O(n * m) where `n` is the length of `A` and `m` is the length of `B`.

2. **Optimized Approach**:
   - We can utilize the mathematical property of GCD and the frequency of elements in the arrays to compute the result efficiently.
   - For each integer `g` from 1 to the maximum value in both arrays, find how many numbers in `A` and `B` are multiples of `g`.
   - If `countA` is the count of elements in `A` that are multiples of `g`, and `countB` is the count of elements in `B` that are multiples of `g`, then the contribution to the sum from that `g` would be:
     \[
     g \times countA \times countB
     \]
   - We iterate from 1 to the maximum value in `A` and `B` to sum up all contributions.

### Implementation

Here's a C++ implementation of the proposed solution:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

class Solution {
public:
    int gcd(int a, int b) {
        while (b != 0) {
            int t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    int sumOfGCDs(vector<int>& A, vector<int>& B) {
        int maxVal = max(*max_element(A.begin(), A.end()), *max_element(B.begin(), B.end()));
        
        // Frequency arrays
        vector<int> freqA(maxVal + 1, 0);
        vector<int> freqB(maxVal + 1, 0);
        
        // Fill frequency for A
        for (int num : A) {
            freqA[num]++;
        }
        
        // Fill frequency for B
        for (int num : B) {
            freqB[num]++;
        }
        
        long long totalSum = 0;
        
        // Iterate over all possible GCDs
        for (int g = 1; g <= maxVal; ++g) {
            int countA = 0;
            int countB = 0;

            // Count how many multiples of g in A
            for (int multiple = g; multiple <= maxVal; multiple += g) {
                countA += freqA[multiple];
            }
            
            // Count how many multiples of g in B
            for (int multiple = g; multiple <= maxVal; multiple += g) {
                countB += freqB[multiple];
            }
            
            // Calculate contribution of g to the total sum
            totalSum += (long long) g * countA * countB;
        }
        
        return totalSum;
    }
};

int main() {
    Solution sol;
    vector<int> A = {1, 2, 3};
    vector<int> B = {4, 5};
    cout << "The sum of GCDs of formed pairs is: " << sol.sumOfGCDs(A, B) << endl;
    return 0;
}
```

### Explanation of the Code

1. **GCD Function**: A helper function to compute the GCD of two numbers.
2. **sumOfGCDs Method**:
   - Determine the maximum value in arrays `A` and `B` to set up the range for counting the multiples.
   - Use a frequency array for both `A` and `B` to determine how many times each number appears.
   - Loop through all integers from 1 to `maxVal`, count the multiples of each integer from both arrays, and aggregate the sum of their contributions.
3. **Main Function**: Tests the solution with a sample case.

### Conclusion

The presented algorithm efficiently computes the required sum of GCDs by leveraging the multiplicity of elements and efficiently counting their contributions based on GCD properties, achieving a better time complexity than direct pairwise computation.