class Solution {
    public:
        int myAtoi(string s) {
             int i = 0;
            int n = s.length();
            int sign = 1;
            long result = 0;
    
            // Step 1: Ignore leading whitespaces
            while (i < n && s[i] == ' ') {
                i++;
            }
    
            // Step 2: Check for the sign
            if (i < n && (s[i] == '+' || s[i] == '-')) {
                sign = (s[i] == '-') ? -1 : 1;
                i++;
            }
    
            // Step 3: Convert digits to integer, skipping leading zeros
            while (i < n && isdigit(s[i])) {
                int digit = s[i] - '0';
    
                // Step 4: Handle overflow by checking if adding the next digit would exceed INT_MAX/INT_MIN
                if (result > (INT_MAX - digit) / 10) {
                    return (sign == 1) ? INT_MAX : INT_MIN;
                }
    
                result = result * 10 + digit;
                i++;
            }
    
            // Step 5: Apply the sign and return the result
            return sign * result;
            
        }
    };