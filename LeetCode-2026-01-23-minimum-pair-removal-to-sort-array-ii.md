# LeetCode Daily – 2026-01-23

## 🧠 Problem #3510 – **Minimum Pair Removal to Sort Array II**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii)

---

### 📝 Problem Description

Given an array nums, you can perform the following operation any number of times:


	Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
	Replace the pair with their sum.


Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

 
Example 1:


Input: nums = [5,2,3,1]

Output: 2

Explanation:


	The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
	The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].


The array nums became non-decreasing in two operations.


Example 2:


Input: nums = [1,2,2]

Output: 0

Explanation:

The array nums is already sorted.


 
Constraints:


	1 <= nums.length <= 105
	-109 <= nums[i] <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Minimum Pair Removal to Sort Array II" on LeetCode requires us to determine the minimum number of pairs of elements we need to remove from an array in order to be able to sort the remaining elements in non-decreasing order.

### Problem Description

Given an array `A` of `2n` integers, we want to remove the minimum number of pairs `(A[i], A[j])` (with `i < j`) such that the remaining integers can be sorted.

### Approach

To solve this problem, we need an understanding of how to pair numbers and the conditions under which we can maintain sortability after some pairs are removed. 

1. **Understanding the Required Pairs**: If we can pair numbers such that their equal numbers typically come together, it could allow all other numbers to be sorted effectively.
  
2. **Count Frequencies**: We can leverage a frequency map to count how many times each integer appears in the input array.

3. **Use a Multiset**: By taking a multiset of the frequency of the elements, we can simulate and find the minimum removals needed to make pairs.

4. **Calculate the Removals**: The idea is to track the pairs from the multiset:
   - Sort the elements based on frequency.
   - For each frequency, if the count is odd, we will have to optimize that or remove one number.
   - Different conditions might apply based on the values stored and checking how the sorting after removal plays out.

The key insight is that for each remaining unpaired element, we should determine how many can be used for a valid sort by reducing the count of pairs necessary.

### Implementation

Here's a C++ implementation for the solution:

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minRemoval(vector<int>& A) {
        unordered_map<int, int> freq;
        for (int num : A) {
            freq[num]++;
        }

        // Getting the frequencies
        vector<int> frequency;
        for (const auto& entry : freq) {
            frequency.push_back(entry.second);
        }

        // Sort frequencies in descending order
        sort(frequency.begin(), frequency.end(), greater<int>());

        int n = A.size() / 2;
        int pairs = 0; // count of how many pairs can be formed
        int totalPairs = 0;

        // Count pairs
        for (int count : frequency) {
            totalPairs += count / 2; // add pairs from each frequency
            if (count % 2 != 0) {
                pairs++; // if there are odd, count how many leftovers
            }
        }

        // The number of pairs that we can remove
        int removals = pairs % 2;
        // If we have totalPairs less than n, we must remove from full pairs
        return removals + max(0, (totalPairs - n));
    }
};
```

### Explanation

1. **Frequency Map**: We first count the frequency of each element in the array.
2. **Store Frequencies**: We store these frequencies in a vector and sort them.
3. **Pair Calculation**: We count how many full pairs `(elements / 2)` we can have and check for remaining odd counts.
4. **Determine Removals**: Finally, we decide on the necessary removals based on pairs and odd counts.

### Complexity Analysis
- **Time Complexity**: The solution traverses the list to count frequencies, which is \(O(n)\), and sorting the frequency array will take \(O(k \log k)\), where \(k\) is the number of unique values. Overall complexity is dominated by the sorting step.
- **Space Complexity**: \(O(k)\) for the frequency map and the sorted frequency list, where \(k\) is the number of unique integers.

This approach should effectively help to determine the minimum pair removals to sort the array.