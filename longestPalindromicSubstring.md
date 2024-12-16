### brute force using recursion

#include<string>
class Solution {
public:
bool isPalindrome( string s){
    int l= s.length();
    for(int i=0; i< l/2; i++){
        if(s[i]!=s[l-i-1]) return false;
    }
    return true;
}
    string longestPalindrome(string s) {
        int l = s.length();

         if(isPalindrome(s)) return s;

         string a=  longestPalindrome(s.substr(1));
         string b =  longestPalindrome(s.substr(0, l-1));

         if(a.length() > b.length()) return a;
         return b;
        
    }
};



### o(n2)

class Solution {
public:
int expandAroundCenter(string s, int left, int right){
    int l=0;
    while(left>=0 && right <=s.length() && s[left]==s[right]){
        left--;
        right++;

    }
    return right-left-1;

}
    string longestPalindrome(string s) {
         if (s.empty()) return "";
        if (s.size() == 1) return s;

        int l= s.length();
        int start = 0;
         int maxLength= 1;

        for(int i=0; i<l; i++){

            int a = expandAroundCenter(s, i, i);
            int b = expandAroundCenter(s, i, i+1);
            int len = max(a,b);

            if(len>maxLength){
                maxLength = len;
                start = i - (len-1)/2;
            }

        }
        return s.substr(start, maxLength);
        
    }
};