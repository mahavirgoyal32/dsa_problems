### problem no. : 2014 leet code

### label: Hard

You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times.

For example, "bba" is repeated 2 times in the string "bababcba", because the string "bbabba", constructed by concatenating "bba" 2 times, is a subsequence of the string "bababcba".
Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string.

 

Example 1:

example 1
Input: s = "letsleetcode", k = 2
Output: "let"
Explanation: There are two longest subsequences repeated 2 times: "let" and "ete".
"let" is the lexicographically largest one.
Example 2:

Input: s = "bb", k = 2
Output: "b"
Explanation: The longest subsequence repeated 2 times is "b".
Example 3:

Input: s = "ab", k = 2
Output: ""
Explanation: There is no subsequence repeated 2 times. Empty string is returned.
 

Constraints:

n == s.length
2 <= n, k <= 2000
2 <= n < k * 8
s consists of lowercase English letters.

### Solution:


class Solution {
public:
    bool isKRepeatedSubsequence(const string& s, const string& pattern, int k) {
        int pos = 0, matched = 0;
        int m = pattern.size();

        for (char ch : s) {
            if (ch == pattern[pos]) {
                pos++;
                if (pos == m) {
                    pos = 0;
                    matched++;
                    if (matched == k) return true;
                }
            }
        }
        return false;
    }

    string longestSubsequenceRepeatedK(string s, int k) {
        vector<int> freq(26, 0);
        for (char ch : s) freq[ch - 'a']++;

        vector<char> candidates;
        for (int i = 25; i >= 0; --i) {
            if (freq[i] >= k) candidates.push_back('a' + i);
        }

        queue<string> q;
        string ans = "";

        for (char ch : candidates) {
            q.push(string(1, ch));
        }

        while (!q.empty()) {
            string curr = q.front(); q.pop();

            if (curr.size() > ans.size() || (curr.size() == ans.size() && curr > ans)) {
                if (isKRepeatedSubsequence(s, curr, k)) ans = curr;
            }

            if (curr.size() == 7) continue;

            for (char ch : candidates) {
                string next = curr + ch;
                if (isKRepeatedSubsequence(s, next, k)) q.push(next);
            }
        }

        return ans;
    }
};