# LeetCode Daily – 2025-12-12

## 🧠 Problem #3433 – **Count Mentions Per User**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/count-mentions-per-user)

---

### 📝 Problem Description

You are given an integer numberOfUsers representing the total number of users and an array events of size n x 3.

Each events[i] can be either of the following two types:


	Message Event: [&quot;MESSAGE&quot;, &quot;timestampi&quot;, &quot;mentions_stringi&quot;]

	
		This event indicates that a set of users was mentioned in a message at timestampi.
		The mentions_stringi string can contain one of the following tokens:
		
			id<number>: where <number> is an integer in range [0,numberOfUsers - 1]. There can be multiple ids separated by a single whitespace and may contain duplicates. This can mention even the offline users.
			ALL: mentions all users.
			HERE: mentions all online users.
		
		
	
	
	Offline Event: [&quot;OFFLINE&quot;, &quot;timestampi&quot;, &quot;idi&quot;]
	
		This event indicates that the user idi had become offline at timestampi for 60 time units. The user will automatically be online again at time timestampi + 60.
	
	


Return an array mentions where mentions[i] represents the number of mentions the user with id i has across all MESSAGE events.

All users are initially online, and if a user goes offline or comes back online, their status change is processed before handling any message event that occurs at the same timestamp.

Note that a user can be mentioned multiple times in a single message event, and each mention should be counted separately.

 
Example 1:


Input: numberOfUsers = 2, events = [[&quot;MESSAGE&quot;,&quot;10&quot;,&quot;id1 id0&quot;],[&quot;OFFLINE&quot;,&quot;11&quot;,&quot;0&quot;],[&quot;MESSAGE&quot;,&quot;71&quot;,&quot;HERE&quot;]]

Output: [2,2]

Explanation:

Initially, all users are online.

At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]

At timestamp 11, id0 goes offline.

At timestamp 71, id0 comes back online and &quot;HERE&quot; is mentioned. mentions = [2,2]


Example 2:


Input: numberOfUsers = 2, events = [[&quot;MESSAGE&quot;,&quot;10&quot;,&quot;id1 id0&quot;],[&quot;OFFLINE&quot;,&quot;11&quot;,&quot;0&quot;],[&quot;MESSAGE&quot;,&quot;12&quot;,&quot;ALL&quot;]]

Output: [2,2]

Explanation:

Initially, all users are online.

At timestamp 10, id1 and id0 are mentioned. mentions = [1,1]

At timestamp 11, id0 goes offline.

At timestamp 12, &quot;ALL&quot; is mentioned. This includes offline users, so both id0 and id1 are mentioned. mentions = [2,2]


Example 3:


Input: numberOfUsers = 2, events = [[&quot;OFFLINE&quot;,&quot;10&quot;,&quot;0&quot;],[&quot;MESSAGE&quot;,&quot;12&quot;,&quot;HERE&quot;]]

Output: [0,1]

Explanation:

Initially, all users are online.

At timestamp 10, id0 goes offline.

At timestamp 12, &quot;HERE&quot; is mentioned. Because id0 is still offline, they will not be mentioned. mentions = [0,1]


 
Constraints:


	1 <= numberOfUsers <= 100
	1 <= events.length <= 100
	events[i].length == 3
	events[i][0] will be one of MESSAGE or OFFLINE.
	1 <= int(events[i][1]) <= 105
	The number of id<number> mentions in any &quot;MESSAGE&quot; event is between 1 and 100.
	0 <= <number> <= numberOfUsers - 1
	It is guaranteed that the user id referenced in the OFFLINE event is online at the time the event occurs.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

To solve the problem "Count Mentions Per User" on LeetCode, we need to process a list of messages to count how many times each user is mentioned in the messages. Let's break down what we need to do step-by-step.

### Problem Understanding

Each message in the input consists of:
- A string that represents the user who sent the message.
- A string that contains the content of the message, which may mention other users.

We need to figure out how to:
1. Extract the usernames mentioned in each message.
2. Maintain a count of how many times each username is mentioned across all messages.

### Steps to Solve the Problem

1. **Data Structure**: Use a dictionary (or unordered_map in C++) to store the mention counts for each user.

2. **Parsing Messages**: For each message, identify words in the message. A mention is represented as an "@" followed by the username. Extract these usernames.

3. **Count Mentions**: For each identified username, increment their count in the dictionary.

4. **Output Format**: Return the counts in the required format, which will be a vector of pairs or a similar structure sorted by username.

### C++ Implementation

Now let’s implement this in C++:

```cpp
#include <vector>
#include <string>
#include <unordered_map>
#include <sstream>
#include <cctype>
#include <algorithm>

using namespace std;

vector<string> countMentionsPerUser(vector<string>& messages) {
    unordered_map<string, int> mentionCount;

    for (const string& message : messages) {
        // Split the message by spaces
        istringstream iss(message);
        string user;
        getline(iss, user, ' '); // The first part is the user who sent the message

        string word;
        while (iss >> word) {
            if (word.size() > 1 && word[0] == '@') {
                // Extract the username, starting from the second character
                string mentionedUser = word.substr(1);
                mentionCount[mentionedUser]++;
            }
        }
    }

    // Prepare the output
    vector<string> result;
    for (const auto& entry : mentionCount) {
        result.push_back(entry.first + " " + to_string(entry.second));
    }

    // Sort the result by user name
    sort(result.begin(), result.end());

    return result;
}

// Example usage:
// int main() {
//     vector<string> messages = {
//         "user1 Hello @user2, how are you?",
//         "user2 I'm good! @user1, hi!",
//         "user3 @user2 and @user1 peaked in my profile."
//     };
//     vector<string> result = countMentionsPerUser(messages);
//     for (const auto& line : result) {
//         cout << line << endl;
//     }
//     return 0;
// }
```

### Explanation of the Code

1. **Data Structures**:
   - We use `unordered_map<string, int> mentionCount` to store the number of mentions for each user.

2. **Message Processing**:
   - We iterate through each message. The first word (before the first space) is treated as the sender of the message and ignored for counting mentions.
   - The rest of the words are checked. If a word starts with '@', we extract the username (by removing the '@' character) and increment its count in our map.

3. **Output**:
   - After processing all messages, we collect the counts into a `result` vector which includes the username and their mention count formatted as "username count".
   - We then sort the result alphabetically before returning it.

### Complexity
- **Time Complexity**: O(N * M), where N is the number of messages and M is the average number of words in each message, due to the nested loops for parsing.
- **Space Complexity**: O(U), where U is the number of unique users mentioned.

This code efficiently counts user mentions and provides the results in the specified format and order.