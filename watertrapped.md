#### my soultion
class Solution {
public:
    int trap(vector<int>& a) {
        if(a.size()<=2) return 0;
        int max1 = a[0];
        int ans = 0;
        int k = 0;

        while(k<a.size()){
            int i;
            max1 = a[k];
            int start = k+1;
            pair<int, int> p = {INT_MIN, -1};
            int b = INT_MIN;
        for(i=start; i<a.size(); i++){
            if(a[i]>=max1){
                b=a[i];
                break;
            }
            if(a[i]>p.first){
                p.first= a[i];
                p.second = i;
            }


        }
        if(b>=max1){
            for(int j=start; j<i;j++){
                ans = ans + (max1 - a[j]);
            }
            k=i;
        }
        else{
            for(int j=start; j<p.second; j++){
                ans = ans + (p.first - a[j]);
            }
            k=p.second;
        }

        }
        return ans;
        
    }
};