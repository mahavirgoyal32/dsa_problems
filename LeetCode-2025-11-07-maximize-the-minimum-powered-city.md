# LeetCode Daily – 2025-11-07

## 🧠 Problem #2528 – **Maximize the Minimum Powered City**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximize-the-minimum-powered-city)

---

### 📝 Problem Description

You are given a 0-indexed integer array stations of length n, where stations[i] represents the number of power stations in the ith city.

Each power station can provide power to every city in a fixed range. In other words, if the range is denoted by r, then a power station at city i can provide power to all cities j such that |i - j| <= r and 0 <= i, j <= n - 1.


	Note that |x| denotes absolute value. For example, |7 - 5| = 2 and |3 - 10| = 7.


The power of a city is the total number of power stations it is being provided power from.

The government has sanctioned building k more power stations, each of which can be built in any city, and have the same range as the pre-existing ones.

Given the two integers r and k, return the maximum possible minimum power of a city, if the additional power stations are built optimally.

Note that you can build the k power stations in multiple cities.

 
Example 1:


Input: stations = [1,2,4,5,0], r = 1, k = 2
Output: 5
Explanation: 
One of the optimal ways is to install both the power stations at city 1. 
So stations will become [1,4,4,5,0].
- City 0 is provided by 1 + 4 = 5 power stations.
- City 1 is provided by 1 + 4 + 4 = 9 power stations.
- City 2 is provided by 4 + 4 + 5 = 13 power stations.
- City 3 is provided by 5 + 4 = 9 power stations.
- City 4 is provided by 5 + 0 = 5 power stations.
So the minimum power of a city is 5.
Since it is not possible to obtain a larger power, we return 5.


Example 2:


Input: stations = [4,4,4,4], r = 0, k = 3
Output: 4
Explanation: 
It can be proved that we cannot make the minimum power of a city greater than 4.


 
Constraints:


	n == stations.length
	1 <= n <= 105
	0 <= stations[i] <= 105
	0 <= r <= n - 1
	0 <= k <= 109

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of "Maximize the Minimum Powered City" from LeetCode, we need to optimize the distribution of power among a set of cities to maximize the minimum power in any city after making adjustments to its power supply. 

### Problem Understanding
Given:
- `n` cities represented by their initial power levels defined in an array `powers`.
- `k`, the maximum number of power adjustments we can make (each adjustment changes the power of a city by `1`).

The goal is to maximize the smallest power level among all cities after performing at most `k` power adjustments.

### Approach
1. **Binary Search**: We'll use binary search to determine the maximum minimum power. The idea is to search in the range of potential minimum powers (from `0` to `max powers + k`).
  
2. **Feasibility Check**: For a candidate minimum power `x`, we'll check if it is possible to make all cities have at least `x` power:
    - For each city, if its power is less than `x`, we need to compute how much power we need to add to bring it up to `x`.
    - Sum up the total adjustments needed and see if we can perform these adjustments without exceeding `k`.

3. **Execute the Binary Search**:
    - If it's possible to achieve power level `x`, we try for a larger `x`; otherwise, we reduce `x`.

### Implementing the Solution

Here's the C++ implementation of the above logic:

```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

// Function to check if we can achieve `minPower`
bool canAchieveMinPower(const vector<int>& powers, int k, int minPower) {
    int totalNeeded = 0;
    for (int power : powers) {
        if (power < minPower) {
            totalNeeded += (minPower - power);
            if (totalNeeded > k) {
                return false; // Early exit if we exceed k
            }
        }
    }
    return totalNeeded <= k;
}

int maximizeMinPower(vector<int>& powers, int k) {
    int left = 0; // Minimum possible power
    int right = *max_element(powers.begin(), powers.end()) + k; // Maximum possible power

    // Binary search for the maximum minimum power
    while (left < right) {
        int mid = left + (right - left + 1) / 2; // Midpoint bias to the right
        if (canAchieveMinPower(powers, k, mid)) {
            left = mid; // We can achieve at least mid, look for more
        } else {
            right = mid - 1; // Mid is too high, look lower
        }
    }

    return left; // After exiting the loop, left is the maximum minimum power
}

int main() {
    vector<int> powers = {1, 2, 3}; // Example powers
    int k = 2; // Number of adjustments
    cout << maximizeMinPower(powers, k) << endl; // Output the result
    return 0;
}
```

### Explanation of the Code

1. **Function `canAchieveMinPower`**: This checks whether we can achieve at least `minPower` for all cities by calculating the total adjustments needed, and returning `true` if those adjustments do not exceed `k`.

2. **Function `maximizeMinPower`**: This performs the binary search over potential minimum power values, adjusting the bounds based on whether the current mid-point can be achieved or not.

3. **Main Function**: An example is provided to test the implementation, where `powers` is the initial power levels of cities, and `k` is the maximum adjustments allowed.

### Complexity Analysis
- **Time Complexity**: The time complexity of this approach is \(O(n \log(max \text{power} + k))\), where \(n\) is the number of cities and \(max \text{power}\) is the maximum value in the powers array. The logarithmic factor comes from the binary search, and the linear factor comes from checking each city's required adjustment.

- **Space Complexity**: The space complexity is \(O(1)\) since we are using only a constant amount of extra space for variables and not using any additional data structures that grow with input size. 

This approach is efficient for the constraints in the problem and handles the maximization of the minimum powered city effectively.