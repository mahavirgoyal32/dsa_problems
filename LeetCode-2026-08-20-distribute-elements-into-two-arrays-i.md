# LeetCode Daily – 2026-08-20

## 🧠 Problem #3069 – **Distribute Elements Into Two Arrays I**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/distribute-elements-into-two-arrays-i)

---

### 📝 Problem Description

You are given a 1-indexed array of distinct integers nums of length n.

You need to distribute all the elements of nums between two arrays arr1 and arr2 using n operations. In the first operation, append nums[1] to arr1. In the second operation, append nums[2] to arr2. Afterwards, in the ith operation:


	If the last element of arr1 is greater than the last element of arr2, append nums[i] to arr1. Otherwise, append nums[i] to arr2.


The array result is formed by concatenating the arrays arr1 and arr2. For example, if arr1 == [1,2,3] and arr2 == [4,5,6], then result = [1,2,3,4,5,6].

Return the array result.

 
Example 1:


Input: nums = [2,1,3]
Output: [2,3,1]
Explanation: After the first 2 operations, arr1 = [2] and arr2 = [1].
In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (2 > 1), append nums[3] to arr1.
After 3 operations, arr1 = [2,3] and arr2 = [1].
Hence, the array result formed by concatenation is [2,3,1].


Example 2:


Input: nums = [5,4,3,8]
Output: [5,3,4,8]
Explanation: After the first 2 operations, arr1 = [5] and arr2 = [4].
In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (5 > 4), append nums[3] to arr1, hence arr1 becomes [5,3].
In the 4th operation, as the last element of arr2 is greater than the last element of arr1 (4 > 3), append nums[4] to arr2, hence arr2 becomes [4,8].
After 4 operations, arr1 = [5,3] and arr2 = [4,8].
Hence, the array result formed by concatenation is [5,3,4,8].


 
Constraints:


	3 <= n <= 50
	1 <= nums[i] <= 100
	All elements in nums are distinct.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Distribute Elements Into Two Arrays I" aims to split an array into two arrays such that the combined contents are the same, and each element is used exactly once. The main requirement is that the lengths of the two resulting arrays must be as equal as possible.

Here's a structured approach to solving this problem in C++, along with an explanation of the code.

### Problem Analysis
1. **Input and Output Explanation**:
   - Input: An integer array `nums`.
   - Output: Two arrays, `arr1` and `arr2`, such that the contents of `arr1` and `arr2` together are exactly the same as `nums`, and their lengths differ by at most 1.

2. **Constraints**:
   - The length of `nums` will always be even, ensuring both arrays can split evenly.

### Strategy
The task can be implemented by following these steps:
1. Create two arrays to hold the results.
2. Iterate through the input array and assign alternate elements to the two result arrays.
3. Since the length of `nums` is guaranteed to be even, this method ensures that both arrays will either have the same length or differ by one.

### C++ Solution

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> distributeElements(vector<int>& nums) {
    // Declare two vectors to hold the output arrays
    vector<int> arr1, arr2;
    
    // Distribute the elements alternatively
    for (int i = 0; i < nums.size(); i++) {
        // If index is even, add to arr1, else add to arr2
        if (i % 2 == 0) {
            arr1.push_back(nums[i]);
        } else {
            arr2.push_back(nums[i]);
        }
    }
    
    // Prepare the final result
    return {arr1, arr2};
}

int main() {
    // Sample input
    vector<int> nums = {1, 2, 3, 4, 5, 6};
    
    // Distributing the elements
    vector<vector<int>> result = distributeElements(nums);
    
    // Displaying the result
    cout << "Array 1: ";
    for (int num : result[0]) {
        cout << num << " ";
    }
    cout << endl << "Array 2: ";
    for (int num : result[1]) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}
```

### Explanation of the Code
1. **Function Definition**: The `distributeElements` function takes a vector of integers `nums` as input.
2. **Two Result Vectors**: We initialize two vectors, `arr1` and `arr2`, to store the elements of the two result arrays.
3. **Distribution Logic**:
   - We loop through each element of `nums` using the index `i`.
   - If the index `i` is even (`i % 2 == 0`), the corresponding element goes into `arr1`.
   - If the index `i` is odd, it goes into `arr2`.
4. **Returning Results**: Finally, we return both arrays as a vector of vectors.
5. **Main Function**:
   - We test the function with an example array.
   - The results are printed to show the two distributed arrays.

### Time Complexity
- The time complexity of the solution is \(O(n)\), where \(n\) is the number of elements in the input array since we are iterating through the array once.

### Space Complexity
- The space complexity is also \(O(n)\) because we are creating two additional arrays to store the split results.

This solution effectively divides the input array into two required result arrays while also ensuring that all constraints are respected.