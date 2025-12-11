# LeetCode Daily – 2025-12-11

## 🧠 Problem #3531 – **Count Covered Buildings**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-covered-buildings)

---

### 📝 Problem Description

You are given a positive integer n, representing an n x n city. You are also given a 2D grid buildings, where buildings[i] = [x, y] denotes a unique building located at coordinates [x, y].

A building is covered if there is at least one building in all four directions: left, right, above, and below.

Return the number of covered buildings.

 
Example 1:




Input: n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]

Output: 1

Explanation:


	Only building [2,2] is covered as it has at least one building:

	
		above ([1,2])
		below ([3,2])
		left ([2,1])
		right ([2,3])
	
	
	Thus, the count of covered buildings is 1.



Example 2:




Input: n = 3, buildings = [[1,1],[1,2],[2,1],[2,2]]

Output: 0

Explanation:


	No building has at least one building in all four directions.



Example 3:




Input: n = 5, buildings = [[1,3],[3,2],[3,3],[3,5],[5,3]]

Output: 1

Explanation:


	Only building [3,3] is covered as it has at least one building:

	
		above ([1,3])
		below ([5,3])
		left ([3,2])
		right ([3,5])
	
	
	Thus, the count of covered buildings is 1.



 
Constraints:


	2 <= n <= 105
	1 <= buildings.length <= 105 
	buildings[i] = [x, y]
	1 <= x, y <= n
	All coordinates of buildings are unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Count Covered Buildings" on LeetCode involves determining the number of unique buildings that are covered by various rectangular buildings defined in terms of their start and end points.

### Problem Explanation

You are given an array of rectangles where each rectangle is defined by three integers: `left`, `right`, and `height`. You need to calculate how many unit squares on the x-axis are "covered" by at least one of the given rectangles. Note that overlapping rectangles should not be counted multiple times—the coverage should only be counted once.

### Approach

To solve this problem, we can use a sweep line algorithm combined with a height tracking mechanism. Here’s how the solution can be structured:

1. **Event Points**:
   - For each rectangle's left edge, create an event that indicates the start of a building with its height.
   - For each rectangle's right edge, create an event that indicates the end of a building with its height.

2. **Sorting**:
   - Sort the event points. When sorting, prioritize the following:
     - If the x-coordinate is the same, prioritize the start events before the end events.
     - If both are start events or end events, prioritize the taller building first.

3. **Sweep Line and Height Tracking**:
   - Use a multiset to maintain the heights of overlapping buildings as you process each event.
   - Keep track of the current maximum height at each position along the x-axis.
   - As you traverse the events, whenever a new x-coordinate is encountered, calculate the contribution of covered area based on the difference in x-coordinates and the maximum height observed.

4. **Output**:
   - At the end, sum up all the covered areas to get the total count.

### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <set>
#include <tuple>
#include <algorithm>

class Solution {
public:
    int countCoveredBuildings(std::vector<std::vector<int>>& buildings) {
        std::vector<std::tuple<int, int, int>> events; // (x, height, type) where type is +1 for start, -1 for end
        
        // Prepare the events
        for (const auto& b : buildings) {
            int left = b[0];
            int right = b[1];
            int height = b[2];
            events.emplace_back(left, height, 1);   // Start of building
            events.emplace_back(right, height, -1);  // End of building
        }
        
        // Sort events based on x coordinate, and then by height
        std::sort(events.begin(), events.end(), [](const auto& a, const auto& b) {
            if (std::get<0>(a) != std::get<0>(b)) return std::get<0>(a) < std::get<0>(b);
            if (std::get<2>(a) != std::get<2>(b)) return std::get<2>(a) > std::get<2>(b); // Start before end
            return std::get<1>(a) > std::get<1>(b); // Taller buildings first
        });
        
        std::multiset<int> heights; // To track active building heights
        heights.insert(0);  // Insert ground level height
        int last_x = 0;
        int covered_area = 0;
        
        for (const auto& event : events) {
            int x = std::get<0>(event);
            int height = std::get<1>(event);
            int type = std::get<2>(event);
            
            // Calculate covered area from last_x to current x with the max height
            if (x != last_x) {
                int current_max_height = *heights.rbegin(); // Get the maximum height
                covered_area += (x - last_x) * current_max_height;
                last_x = x; // Update last processed x
            }
            
            // Adjust the heights based on event type
            if (type == 1) {
                heights.insert(height); // Start building
            } else {
                heights.erase(heights.find(height)); // End building
            }
        }
        
        return covered_area;
    }
};

// Example usage:
int main() {
    Solution solution;
    std::vector<std::vector<int>> buildings = {{1, 3, 2}, {2, 4, 3}, {4, 5, 1}};
    int result = solution.countCoveredBuildings(buildings);
    std::cout << "Total covered area: " << result << std::endl;
    return 0;
}
```

### Explanation of the Code:

1. **Event Preparation**: We prepare a list of events representing the start and end of each rectangle.

2. **Sorting Events**: The sorting ensures that we properly handle overlapping starts and ends.

3. **Multiset for Heights**: We use a `multiset` to keep track of current building heights. This allows us to efficiently add and remove heights and retrieve the maximum height.

4. **Calculating Coverage**: As we process events, we compute the area covered by calculating the area between the last x-coordinate and the current one, multiplied by the current maximum height.

5. **Final Output**: After processing all events, we return the total covered area.

This method is efficient and leverages the sweep line technique to ensure that we only compute covered areas when necessary, keeping the algorithm within a reasonable time complexity.