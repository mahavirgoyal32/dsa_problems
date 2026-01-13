# LeetCode Daily – 2026-01-13

## 🧠 Problem #3453 – **Separate Squares I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/separate-squares-i)

---

### 📝 Problem Description

You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

Find the minimum y-coordinate value of a horizontal line such that the total area of the squares above the line equals the total area of the squares below the line.

Answers within 10-5 of the actual answer will be accepted.

Note: Squares may overlap. Overlapping areas should be counted multiple times.

 
Example 1:


Input: squares = [[0,0,1],[2,2,1]]

Output: 1.00000

Explanation:



Any horizontal line between y = 1 and y = 2 will have 1 square unit above it and 1 square unit below it. The lowest option is 1.


Example 2:


Input: squares = [[0,0,2],[1,1,1]]

Output: 1.16667

Explanation:



The areas are:


	Below the line: 7/6 * 2 (Red) + 1/6 (Blue) = 15/6 = 2.5.
	Above the line: 5/6 * 2 (Red) + 5/6 (Blue) = 15/6 = 2.5.


Since the areas above and below the line are equal, the output is 7/6 = 1.16667.


 
Constraints:


	1 <= squares.length <= 5 * 104
	squares[i] = [xi, yi, li]
	squares[i].length == 3
	0 <= xi, yi <= 109
	1 <= li <= 109
	The total area of all the squares will not exceed 1012.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem titled **Separate Squares I**. In this problem, we want to rearrange an array of integers such that all the negative numbers come before all the non-negative numbers while keeping the relative order of both groups. The goal is to modify the input array in place without using extra space for another array.

### Problem Breakdown

1. **Input:** An array of integers that can contain both negative and non-negative integers.
2. **Output:** The same array, but rearranged so that all negative numbers are on the left side and all non-negative numbers on the right side.

### Approach

We will use a two-pointer technique to achieve this:

1. First, we'll maintain a pointer `negIndex` that represents the position in the array where the next negative number should be placed.
2. We will iterate through the array with a second pointer `i`.
3. Whenever we find a negative number (i.e., `nums[i] < 0`), we will swap it with the number at index `negIndex`, and then increment `negIndex`.
4. If the number is non-negative, we simply move the `i` pointer to the next index.

This approach ensures that all negative numbers are moved to the front of the array without losing the relative order of both negative and non-negative numbers.

### C++ Code

```cpp
#include <vector>
#include <iostream>

void separateSquares(std::vector<int>& nums) {
    int negIndex = 0; // Pointer for the next position to place a negative number
    
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] < 0) {
            // Swap if we find a negative number 
            std::swap(nums[negIndex], nums[i]);
            negIndex++; // Move the negIndex forward
        }
    }
}

// Helper function to print the array
void printArray(const std::vector<int>& nums) {
    for (int num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

// Example usage
int main() {
    std::vector<int> nums = {3, -1, 2, -5, 6, -4, 0, -7};
    separateSquares(nums);
    printArray(nums); // Output should show all negatives followed by all non-negatives
    return 0;
}
```

### Explanation of the Code

1. **Function Declaration:** `separateSquares` takes a reference to a vector of integers `nums`.
2. **Initialize `negIndex`:** This pointer starts at the beginning of the array.
3. **Iterate Through Array:** Using a `for` loop, we check each element:
   - If the current element (`nums[i]`) is negative, we swap it with the element at `negIndex` and then increment `negIndex`.
   - If it's non-negative, we simply continue to the next element without making any changes.
4. **Swapping:** `std::swap` is used to swap the elements.
5. **Print Function:** A helper function is implemented to display the modified array for verification.
6. **Main Function:** Example usage is created to demonstrate the function's correctness.

### Time Complexity
The time complexity of this solution is O(n), where n is the number of elements in the input array. We make a single pass through the array.

### Space Complexity
The space complexity is O(1) since we are rearranging the elements in place and using a constant amount of additional space.

This solution effectively separates negative and non-negative numbers while maintaining the required order.