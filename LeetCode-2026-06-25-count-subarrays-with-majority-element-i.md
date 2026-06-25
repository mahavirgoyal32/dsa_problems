# LeetCode Daily – 2026-06-25

## 🧠 Problem #3737 – **Count Subarrays With Majority Element I**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-subarrays-with-majority-element-i)

---

### 📝 Problem Description

You are given an integer array nums and an integer target.

Return the number of subarrays of nums in which target is the majority element.

The majority element of a subarray is the element that appears strictly more than half of the times in that subarray.

 
Example 1:


Input: nums = [1,2,2,3], target = 2

Output: 5

Explanation:

Valid subarrays with target = 2 as the majority element:


	nums[1..1] = [2]
	nums[2..2] = [2]
	nums[1..2] = [2,2]
	nums[0..2] = [1,2,2]
	nums[1..3] = [2,2,3]


So there are 5 such subarrays.


Example 2:


Input: nums = [1,1,1,1], target = 1

Output: 10

Explanation: 

​​​​​​​All 10 subarrays have 1 as the majority element.


Example 3:


Input: nums = [1,2,3], target = 4

Output: 0

Explanation:

target = 4 does not appear in nums at all. Therefore, there cannot be any subarray where 4 is the majority element. Hence the answer is 0.


 
Constraints:


	1 <= nums.length <= 1000
	1 <= nums[i] <= 10​​​​​​​9
	1 <= target <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's solve the LeetCode problem titled "Count Subarrays With Majority Element I".

### Problem Explanation
You are given an integer array `nums`, and you need to find the count of subarrays where the majority element appears. The majority element is defined as an element that appears more than `n / 2` times, where `n` is the size of the array.

### Key Points
1. **Majority Element Definition**: If there is a majority element `x`, it must appear more than `n / 2` times in the whole array.
2. **Subarrays**: A subarray is a contiguous sequence of elements within the array.
3. **Return Value**: The total number of subarrays where the majority element `x` is the majority element. If `x` does not exist in the array as a majority, return 0.

### Steps to Solve
1. **Find the Majority Element**: We can find the majority element using the Boyer-Moore Voting Algorithm. This algorithm lets us find the candidate for the majority element in linear time.
2. **Count Occurrences**: Count how many times the found candidate occurs in the array.
3. **Check Validity**: If the count of this element is not greater than `n / 2`, return 0.
4. **Count Subarrays**: Use a sliding window technique to count all the subarrays where the candidate is the majority element.

### C++ Implementation
Now, let's implement this in C++.

```cpp
#include <iostream>
#include <vector>

class Solution {
public:
    int countSubarrays(std::vector<int>& nums) {
        int n = nums.size();

        // Step 1: Find the majority element using Boyer-Moore Voting Algorithm
        int count = 0, candidate;
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }

        // Step 2: Verify if the candidate is the actual majority element
        count = 0;
        for (int num : nums) {
            if (num == candidate) {
                count++;
            }
        }
        
        if (count <= n / 2) return 0; // No majority element found
        
        // Step 3: Count the number of subarrays with the majority element
        int result = 0, majorityCount = 0;

        for (int i = 0; i < n; i++) {
            if (nums[i] == candidate) {
                majorityCount++;
            }

            if (i > 0 && nums[i] != candidate) {
                // When the current number is not the majority,
                // all subarrays ending with the last majorityCount are valid.
                result += majorityCount;
            }

            // Add all subarrays that can start from the last found majority element
            if (i == n - 1 || nums[i + 1] == candidate) {
                result += majorityCount;
            }
        }

        return result;
    }
};

int main() {
    Solution solution;
    std::vector<int> nums = {2, 2, 1, 1, 5, 2, 2};
    std::cout << "Count of Subarrays with Majority Element: " << solution.countSubarrays(nums) << std::endl;
    return 0;
}
```

### Explanation of the Code
1. **Finding the Majority Element**: We use the Boyer-Moore Voting Algorithm to determine the candidate majority element in linear time.
2. **Counting the Occurrences**: We verify if this candidate truly qualifies as a majority by counting its occurrences.
3. **Counting Valid Subarrays**:
   - For every index `i`, if `nums[i]` matches the candidate, we increment `majorityCount`.
   - If the current number doesn't match the candidate, we can add `majorityCount` to the result, since all subarrays that end at `i` with at least one majority element will be valid.
   - If we reach the end of the array or encounter another majority element, we account for additional valid subarrays.

### Time Complexity
The time complexity of this solution is O(n), where `n` is the number of elements in the input array, because we make a constant number of passes over the data.

### Space Complexity
The space complexity is O(1) since we use a constant amount of space regardless of the input size.