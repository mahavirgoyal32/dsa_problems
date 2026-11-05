# LeetCode Daily – 2026-11-05

## 🧠 Problem #1385 – **Find the Distance Value Between Two Arrays**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-distance-value-between-two-arrays)

---

### 📝 Problem Description

Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

 
Example 1:


Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: 
For arr1[0]=4 we have: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2


Example 2:


Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2


Example 3:


Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1


 
Constraints:


	1 <= arr1.length, arr2.length <= 500
	-1000 <= arr1[i], arr2[j] <= 1000
	0 <= d <= 100

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's break down the problem titled "Find the Distance Value Between Two Arrays" and then I'll provide a C++ solution with an explanation.

### Problem Description

You are given two integer arrays `arr1` and `arr2`. The "distance value" between the two arrays is defined as the number of elements `a` in `arr1` such that there is no element `b` in `arr2` that satisfies the condition `|a - b| <= d` for a given integer `d`. Your task is to compute the distance value for the provided arrays.

### Example

For instance, given:
- `arr1 = [4,5,8]`
- `arr2 = [10,9,1,8]`
- `d = 2`

The distance value would be 2, because:
- For `4`, the closest element in `arr2` is `1` and `|4 - 1| = 3 > 2`.
- For `5`, the closest element in `arr2` is `4` and `|5 - 1| = 4 > 2`.
- For `8`, the closest element in `arr2` is `8` and `|8 - 8| = 0 <= 2`.

Hence, two values (`4` and `5`) from `arr1` have no corresponding values in `arr2` satisfying the distance condition.

### Approach

1. **Sorting**: Start by sorting `arr2`. This allows for faster searching of elements in `arr2` using binary search.
2. **Binary Search**: For each element in `arr1`, perform a binary search in `arr2` to find the closest elements and check if they satisfy the distance condition.
3. **Counting**: Count how many elements in `arr1` do not have a corresponding element in `arr2` satisfying the distance condition using the results of the binary search.

### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int findTheDistanceValue(std::vector<int>& arr1, std::vector<int>& arr2, int d) {
        // Sort the second array for binary search
        std::sort(arr2.begin(), arr2.end());
        int count = 0;

        // Iterate over each element in arr1
        for (int a : arr1) {
            // Use lower_bound to find the index of the first element in arr2
            // which is not less than (a - d)
            auto it1 = std::lower_bound(arr2.begin(), arr2.end(), a - d);
            // Use upper_bound to find the index of the first element in arr2
            // which is greater than (a + d)
            auto it2 = std::upper_bound(arr2.begin(), arr2.end(), a + d);

            // Check if there are elements in arr2 within the distance d
            if (it1 == it2) {
                // No elements in arr2 satisfy |a - b| <= d
                count++;
            }
        }

        return count;
    }
};
```

### Explanation

1. **Sorting**: We first sort `arr2`, which makes our subsequent searches efficient. The `std::sort` function has a time complexity of `O(n log n)`, where `n` is the size of `arr2`.

2. **Binary Search**: For each element `a` in `arr1`, we perform two binary searches:
   - `std::lower_bound(arr2.begin(), arr2.end(), a - d)`: This finds the first position in `arr2` that has a value not less than `a - d`.
   - `std::upper_bound(arr2.begin(), arr2.end(), a + d)`: This finds the first position in `arr2` that has a value greater than `a + d`.

3. **Count Elements**: If `it1` equals `it2`, it means there are no elements in `arr2` that lie within the range `[a - d, a + d]`, and we increase our count for that particular `a`.

Finally, we return the count of such elements.

### Conclusion

This solution efficiently finds the distance values with time complexity approximately `O(m log n)` where `m` is the size of `arr1` and `n` is the size of `arr2`, thanks to sorting and binary search.