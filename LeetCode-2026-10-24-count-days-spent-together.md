# LeetCode Daily – 2026-10-24

## 🧠 Problem #2409 – **Count Days Spent Together**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-days-spent-together)

---

### 📝 Problem Description

Alice and Bob are traveling to Rome for separate business meetings.

You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format &quot;MM-DD&quot;, corresponding to the month and day of the date.

Return the total number of days that Alice and Bob are in Rome together.

You can assume that all dates occur in the same calendar year, which is not a leap year. Note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

 
Example 1:


Input: arriveAlice = &quot;08-15&quot;, leaveAlice = &quot;08-18&quot;, arriveBob = &quot;08-16&quot;, leaveBob = &quot;08-19&quot;
Output: 3
Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.


Example 2:


Input: arriveAlice = &quot;10-01&quot;, leaveAlice = &quot;10-31&quot;, arriveBob = &quot;11-01&quot;, leaveBob = &quot;12-31&quot;
Output: 0
Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.


 
Constraints:


	All dates are provided in the format &quot;MM-DD&quot;.
	Alice and Bob&#39;s arrival dates are earlier than or equal to their leaving dates.
	The given dates are valid dates of a non-leap year.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The problem "Count Days Spent Together" on LeetCode requires us to calculate the total number of days two people spend together over a given range of dates. Let's break down the problem step-by-step and provide a solution in C++.

### Problem Explanation

We have two people, given by two date ranges:
1. Person A's vacation period, defined by a start date and an end date.
2. Person B's vacation period, defined similarly.

The dates are given in the format `YYYY-MM-DD`.

Our goal is to count the number of days they are both on vacation together.

### Steps to Solve the Problem

1. **Parse Dates**: Convert the date strings into a manageable format, typically integers representing the year, month, and day.

2. **Calculate Range**: For both individuals, determine the start and end dates of their vacations.

3. **Find Overlapping Period**: The days they spend together would be the overlap of their vacation periods. The overlap can be calculated as:
   - The start of the overlap: `max(startA, startB)`
   - The end of the overlap: `min(endA, endB)`
   - If there is a valid overlap, the number of overlapping days can be calculated.

4. **Count Days**: If there is an overlap (i.e., the end of the overlap is after or the same as the start), count the days within that range.

### C++ Code Implementation

Here is a solution that implements the above logic:

```cpp
#include <iostream>
#include <string>
#include <algorithm>
#include <sstream>
#include <tuple>

using namespace std;

class Solution {
public:
    // Function to convert date string to integer using YYYY-MM-DD format
    tuple<int, int, int> getDateComponents(const string& date) {
        int year, month, day;
        sscanf(date.c_str(), "%d-%d-%d", &year, &month, &day);
        return {year, month, day};
    }

    // Calculate the day of the year for a given date
    int dayOfYear(int year, int month, int day) {
        int daysInMonth[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            daysInMonth[2] = 29; // Account for leap year
        }
        int dayCount = day;
        for (int m = 1; m < month; ++m) {
            dayCount += daysInMonth[m];
        }
        return dayCount; // Total days from year start to given date
    }

    // Main function to determine the number of days spent together
    int countDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob) {
        // Parse the dates
        auto [aStartYear, aStartMonth, aStartDay] = getDateComponents(arriveAlice);
        auto [aEndYear, aEndMonth, aEndDay] = getDateComponents(leaveAlice);
        auto [bStartYear, bStartMonth, bStartDay] = getDateComponents(arriveBob);
        auto [bEndYear, bEndMonth, bEndDay] = getDateComponents(leaveBob);

        // Calculate the start date and end date of overlap
        int startYear = max(aStartYear, bStartYear);
        int startDayOfYear = max(dayOfYear(aStartYear, aStartMonth, aStartDay), 
                                  dayOfYear(bStartYear, bStartMonth, bStartDay));

        int endYear = min(aEndYear, bEndYear);
        int endDayOfYear = min(dayOfYear(aEndYear, aEndMonth, aEndDay), 
                               dayOfYear(bEndYear, bEndMonth, bEndDay));

        // Calculate the number of overlapping days
        if (startYear > endYear || (startYear == endYear && startDayOfYear > endDayOfYear)) {
            return 0; // No overlap
        }
        
        return endDayOfYear - startDayOfYear + 1; // Return the number of overlapping days
    }
};

// Example Usage
int main() {
    Solution solution;
    string arriveAlice = "2021-06-01";
    string leaveAlice = "2021-06-10";
    string arriveBob = "2021-06-05";
    string leaveBob = "2021-06-15";
    
    int result = solution.countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
    cout << "Days spent together: " << result << endl; // Output: 5
    return 0;
}
```

### Code Explanation

1. **Date Parsing**: The `getDateComponents` function extracts year, month, and day from the date string. 

2. **Day of Year Calculation**: The `dayOfYear` function calculates the absolute day of the year for a given date, considering leap years.

3. **Calculating Overlap**:
   - The function `countDaysTogether` calculates the overlap of the two date ranges.
   - If there’s a valid overlap, it computes the number of overlapping days and returns that count.

### Conclusion

This solution efficiently deals with the task of counting overlapping days using basic date manipulations and ensures it considers the specifics of calendar dates, such as leap years. The complexity is primarily linear concerning date processing, making this approach suitable for the problem constraints.