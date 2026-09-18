# LeetCode Daily – 2026-09-18

## 🧠 Problem #1520 – **Maximum Number of Non-Overlapping Substrings**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings)

---

### 📝 Problem Description

Given a string s of lowercase letters, you need to find the maximum number of non-empty substrings of s that meet the following conditions:


	The substrings do not overlap, that is for any two substrings s[i..j] and s[x..y], either j < x or i > y is true.
	A substring that contains a certain character c must also contain all occurrences of c.


Find the maximum number of substrings that meet the above conditions. If there are multiple solutions with the same number of substrings, return the one with minimum total length. It can be shown that there exists a unique solution of minimum total length.

Notice that you can return the substrings in any order.

 
Example 1:


Input: s = &quot;adefaddaccc&quot;
Output: [&quot;e&quot;,&quot;f&quot;,&quot;ccc&quot;]
Explanation: The following are all the possible substrings that meet the conditions:
[
  &quot;adefaddaccc&quot;
  &quot;adefadda&quot;,
  &quot;ef&quot;,
  &quot;e&quot;,
  &quot;f&quot;,
  &quot;ccc&quot;,
]
If we choose the first string, we cannot choose anything else and we&#39;d get only 1. If we choose &quot;adefadda&quot;, we are left with &quot;ccc&quot; which is the only one that doesn&#39;t overlap, thus obtaining 2 substrings. Notice also, that it&#39;s not optimal to choose &quot;ef&quot; since it can be split into two. Therefore, the optimal way is to choose [&quot;e&quot;,&quot;f&quot;,&quot;ccc&quot;] which gives us 3 substrings. No other solution of the same number of substrings exist.


Example 2:


Input: s = &quot;abbaccd&quot;
Output: [&quot;d&quot;,&quot;bb&quot;,&quot;cc&quot;]
Explanation: Notice that while the set of substrings [&quot;d&quot;,&quot;abba&quot;,&quot;cc&quot;] also has length 3, it&#39;s considered incorrect since it has larger total length.


 
Constraints:


	1 <= s.length <= 105
	s contains only lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

The problem "Maximum Number of Non-Overlapping Substrings" asks us to find the maximum number of substrings from a given string such that each substring contains all of its characters' occurrences, and these substrings do not overlap. 

### Problem Breakdown

1. **Character Occurrences**: We start by determining the first and last occurrences of each character in the string. This helps us understand the bounds for each character that must be included in any valid substring that contains that character.

2. **Merging Intervals**: Based on the first and last occurrences, we can create candidate intervals (or substrings) for each character. The goal is to merge these intervals so that they do overlap and maximize the number of non-overlapping intervals.

3. **Choosing Non-Overlapping Intervals**: To achieve the maximum non-overlapping substrings, we can sort the intervals based on their ending points and greedily select the maximum number of intervals that do not overlap.

### Implementation

Here’s how you can implement this in C++:

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<string> maxNumOfSubstrings(string s) {
        // Step 1: Find the first and last occurrence of each character
        unordered_map<char, int> first, last;
        for (int i = 0; i < s.size(); i++) {
            if (first.find(s[i]) == first.end()) {
                first[s[i]] = i; // Set first occurrence
            }
            last[s[i]] = i; // Always update last occurrence
        }

        // Step 2: Create intervals for each character
        vector<pair<int, int>> intervals;
        for (const auto& entry : first) {
            char c = entry.first;
            int start = entry.second;
            int end = last[c];

            // Expand the interval to include all occurrences of characters
            for (int j = start; j <= end; j++) {
                if (first.find(s[j]) != first.end()) {
                    end = max(end, last[s[j]]);
                }
            }

            intervals.emplace_back(start, end);
        }

        // Step 3: Sort intervals based on the ending index
        sort(intervals.begin(), intervals.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
            return a.second < b.second;
        });

        // Step 4: Choose non-overlapping intervals
        vector<string> result;
        int last_endpoint = -1;

        for (const auto& interval : intervals) {
            if (interval.first > last_endpoint) {
                result.push_back(s.substr(interval.first, interval.second - interval.first + 1));
                last_endpoint = interval.second;
            }
        }

        return result;
    }
};

// Example usage
int main() {
    Solution solution;
    string s = "adefaddaccc";
    vector<string> result = solution.maxNumOfSubstrings(s);
    for (const auto& sub : result) {
        cout << sub << " ";
    }
    cout << endl;
    return 0;
}
```

### Explanation of the Code:

1. **First and Last Occurrence Mapping**: We populate two maps: `first` and `last`, which store the first and last index of each character in the string `s`.

2. **Creating Intervals**: For each character, we create a substring (interval) that starts from the first occurrence to the last occurrence and expands to ensure it includes all characters in between by checking their `first` and `last` occurrences.

3. **Sorting the Intervals**: We sort the intervals by their ending index to facilitate the selection of non-overlapping intervals.

4. **Selecting Non-Overlapping Intervals**: We iterate over the sorted intervals. If the start of the current interval is greater than the last selected interval's end, we can safely add it to the result, ensuring that they do not overlap. 

5. **Final Result**: The result is a list of non-overlapping substrings. 

### Conclusion

This approach efficiently captures all potential substrings, merges overlapping ones, and selects the maximum non-overlapping substrings using a well-known greedy algorithm, ensuring we meet the problem requirements optimally.