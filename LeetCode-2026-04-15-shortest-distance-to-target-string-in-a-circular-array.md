# LeetCode Daily – 2026-04-15

## 🧠 Problem #2515 – **Shortest Distance to Target String in a Circular Array**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array)

---

### 📝 Problem Description

You are given a 0-indexed circular string array words and a string target. A circular array means that the array&#39;s end connects to the array&#39;s beginning.


	Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.


Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.

Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

 
Example 1:


Input: words = [&quot;hello&quot;,&quot;i&quot;,&quot;am&quot;,&quot;leetcode&quot;,&quot;hello&quot;], target = &quot;hello&quot;, startIndex = 1
Output: 1
Explanation: We start from index 1 and can reach &quot;hello&quot; by
- moving 3 units to the right to reach index 4.
- moving 2 units to the left to reach index 4.
- moving 4 units to the right to reach index 0.
- moving 1 unit to the left to reach index 0.
The shortest distance to reach &quot;hello&quot; is 1.


Example 2:


Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;leetcode&quot;], target = &quot;leetcode&quot;, startIndex = 0
Output: 1
Explanation: We start from index 0 and can reach &quot;leetcode&quot; by
- moving 2 units to the right to reach index 2.
- moving 1 unit to the left to reach index 2.
The shortest distance to reach &quot;leetcode&quot; is 1.

Example 3:


Input: words = [&quot;i&quot;,&quot;eat&quot;,&quot;leetcode&quot;], target = &quot;ate&quot;, startIndex = 0
Output: -1
Explanation: Since &quot;ate&quot; does not exist in words, we return -1.


 
Constraints:


	1 <= words.length <= 100
	1 <= words[i].length <= 100
	words[i] and target consist of only lowercase English letters.
	0 <= startIndex < words.length

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To tackle the problem of finding the shortest distance to a target string in a circular array, we need to understand how the circular structure affects our logic for calculating distances.

### Problem Explanation

You are given:
- A string `words` which is a circular array that contains a series of words.
- A target string `target`.
- A starting index `startIndex`.

Your goal is to find the shortest distance to the target string from the `startIndex`. The distance is calculated in terms of the number of indices you need to move to reach the target string, where you can wrap around the array (circular).

### Approach

To find the shortest distance to the `target`, we can take the following steps:

1. **Locate all indices of the target string**: Iterate through the `words` array and get all indices where `words[i]` is equal to `target`.
2. **Calculate the distance for each target index**: For the start index and each target index, we can determine the direct distance and the circular distance.
3. **Return the minimum distance**: Compare distances obtained from step 2 and return the smallest.

### C++ Solution

Here's a C++ implementation of the described approach:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <cmath>
#include <limits>

using namespace std;

int shortestDistance(vector<string>& words, string target, int startIndex) {
    // Step 1: Find all indices of the target string
    vector<int> targetIndices;
    for (int i = 0; i < words.size(); i++) {
        if (words[i] == target) {
            targetIndices.push_back(i);
        }
    }

    // If there are no occurrences of the target, return -1 or some indication
    if (targetIndices.empty()) {
        return -1; // or any indication as per your design
    }

    // Step 2: Calculate the minimum distance
    int minDistance = numeric_limits<int>::max();
    
    for (int index : targetIndices) {
        // Calculate direct distance and circular distance
        int directDistance = abs(index - startIndex);
        int circularDistance = words.size() - directDistance;

        // Take the minimum of both distances
        int distance = min(directDistance, circularDistance);
        
        // Update the minimum distance
        minDistance = min(minDistance, distance);
    }

    return minDistance;
}

int main() {
    vector<string> words = {"hello", "world", "leetcode", "hello"};
    string target = "hello";
    int startIndex = 1;
    
    int distance = shortestDistance(words, target, startIndex);
    cout << "Shortest distance to target: " << distance << endl;

    return 0;
}
```

### Explanation of the Code

1. **Finding Target Indices**: The `for` loop collects all positions of the `target` string from the `words` array. If `target` isn't found, we return `-1`.

2. **Distance Calculation**: For each index of `target`, we calculate:
   - `directDistance`: The straightforward distance from `startIndex` to the `target` index.
   - `circularDistance`: The distance that wraps around the end of the array, computed as `words.size() - directDistance`.
   - We take the minimum of these two distances for that target index.

3. **Minimum Distance**: We maintain a variable `minDistance` to track the smallest distance encountered across all target positions.

4. **Output**: Finally, we output the smallest distance found.

### Complexity
- **Time Complexity**: O(n) where n is the number of words in the array. This is because we traverse the entire list to find all indices and then go through them to compute distances.
- **Space Complexity**: O(k) where k is the number of occurrences of the `target` in `words` for storing target indices.

This solution effectively answers the problem while considering both direct and circular paths intelligently.