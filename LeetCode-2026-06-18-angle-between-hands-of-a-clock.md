# LeetCode Daily – 2026-06-18

## 🧠 Problem #1344 – **Angle Between Hands of a Clock**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/angle-between-hands-of-a-clock)

---

### 📝 Problem Description

Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.

Answers within 10-5 of the actual value will be accepted as correct.

 
Example 1:


Input: hour = 12, minutes = 30
Output: 165


Example 2:


Input: hour = 3, minutes = 30
Output: 75


Example 3:


Input: hour = 3, minutes = 15
Output: 7.5


 
Constraints:


	1 <= hour <= 12
	0 <= minutes <= 59

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem of finding the angle between the hour and minute hands of a clock, we need to understand how to calculate the positions of each hand based on the given time, represented by hours and minutes.

### Problem Breakdown

1. **Understanding the Clock Angles**:
   - There are 360 degrees in a full circle of a clock.
   - The hour hand moves at 30 degrees for each hour (360 degrees/12 hours).
   - The minute hand moves at 6 degrees for each minute (360 degrees/60 minutes).

2. **Calculating Angles**:
   - For the hour hand's angle:
     \[
     \text{hour\_angle} = 30 \times (h \% 12) + 0.5 \times m
     \]
     The `h % 12` ensures that we wrap around to a maximum of 12 hours. The extra `0.5 * m` accounts for the additional movement of the hour hand as the minutes pass.
   
   - For the minute hand's angle:
     \[
     \text{minute\_angle} = 6 \times m
     \]

3. **Finding the Angle Between them**:
   - Calculate the absolute difference between the two angles:
     \[
     \text{angle} = |\text{hour\_angle} - \text{minute\_angle}|
     \]
   - Since a clock is circular, we need the smallest angle, so we take:
     \[
     \text{smallest\_angle} = \min(\text{angle}, 360 - \text{angle})
     \]

### C++ Implementation

Here is how we can implement the above logic in C++:

```cpp
#include <iostream>
#include <cmath>  // for std::abs and std::min

class Solution {
public:
    double angleClock(int hour, int minutes) {
        // Normalize hour to 12-hour format
        hour = hour % 12;
        
        // Calculate the angle for the minute hand
        double minute_angle = minutes * 6.0; // 360 / 60 = 6 degrees per minute
        
        // Calculate the angle for the hour hand
        double hour_angle = (hour * 30.0) + (minutes * 0.5); // 360 / 12 = 30 degrees per hour and 0.5 for each minute
        
        // Calculate the difference between the two angles
        double angle = std::abs(hour_angle - minute_angle);
        
        // The smallest angle between the two hands
        return std::min(angle, 360 - angle);
    }
};

int main() {
    Solution solution;
    int hour = 3;
    int minutes = 30;
    std::cout << "Angle: " << solution.angleClock(hour, minutes) << " degrees" << std::endl;
    return 0;
}
```

### Explanation of the Code

1. **Normalization**: The hour is normalized to 12-hour format with `hour % 12`.
2. **Angle Calculation**:
   - The angle for the minute hand is simply `minutes * 6`.
   - The angle for the hour hand is calculated based on its position due to both the hour and the passed minutes.
3. **Angle Difference**: The absolute difference between the hour and minute angles is calculated to obtain the angle.
4. **Minimum Angle**: Finally, we take the minimum of the angle and its supplementary angle to ensure we get the smaller angle between the two hands.

### Example

For `hour = 3` and `minutes = 30`:
- Minute Angle: \(30 \times 6 = 180\) degrees
- Hour Angle: \(3 \times 30 + 30 \times 0.5 = 90 + 15 = 105\) degrees
- Angle Difference: \( |105 - 180| = 75 \)
- The smallest angle between them is \(75\) degrees, which is what the function returns.

This solution efficiently computes the desired angle using constant time operations, making it efficient and well-suited for the input constraints.