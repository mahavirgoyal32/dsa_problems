class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> mp;
        int start=0;
        int maxLen = 0;
        for(int i=0; i<s.length(); i++){
            if(mp.count(s[i]) && mp[s[i]]>=start ){
                start = mp[s[i]] +1;
            }
            mp[s[i]]= i;
            maxLen = max(maxLen,i-start+1);
        }
        return maxLen;
        
    }
};