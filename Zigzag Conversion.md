### my solution

#include<string>
class Solution {
public:
    string convert(string s, int numRows) {
        int l= s.length();

        vector<string> a(numRows, "");

        for(int i=0; i<s.length(); i= i){
            for(int j=0; j< numRows && i<l; j++){
                a[j].push_back(s[i]);
                i++;
            }
            for(int j= numRows-1; j>1 && i<l; j=j-1){
                a[j-1].push_back(s[i]);
                i++;
            }
        }
string ans = "";
        for(int i=0; i<numRows; i++){
            ans = ans + a[i];

        }
        return ans;

        
    }
};


#### chat gpt
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) return s;  // Special case when numRows is 1

        vector<string> rows(min(numRows, int(s.length())));  // Create rows
        int curRow = 0;
        bool goingDown = false;

        for (char c : s) {
            rows[curRow] += c;  // Append the character to the current row
            if (curRow == 0 || curRow == numRows - 1) {
                goingDown = !goingDown;  // Change direction at the top or bottom row
            }
            curRow += goingDown ? 1 : -1;  // Move to the next row
        }

        string ans;
        for (string row : rows) {
            ans += row;  // Concatenate all rows to get the final string
        }

        return ans;
    }
};
