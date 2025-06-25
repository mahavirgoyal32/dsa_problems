### problem no. : 2200 leet code

### label: Hard

Given two sorted 0-indexed integer arrays nums1 and nums2 as well as an integer k, return the kth (1-based) smallest product of nums1[i] * nums2[j] where 0 <= i < nums1.length and 0 <= j < nums2.length.
 



 

Example 1:

Input: nums1 = [2,5], nums2 = [3,4], k = 2
Output: 8
Explanation: The 2 smallest products are:
- nums1[0] * nums2[0] = 2 * 3 = 6
- nums1[0] * nums2[1] = 2 * 4 = 8
The 2nd smallest product is 8.
Example 2:

Input: nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6
Output: 0
Explanation: The 6 smallest products are:
- nums1[0] * nums2[1] = (-4) * 4 = -16
- nums1[0] * nums2[0] = (-4) * 2 = -8
- nums1[1] * nums2[1] = (-2) * 4 = -8
- nums1[1] * nums2[0] = (-2) * 2 = -4
- nums1[2] * nums2[0] = 0 * 2 = 0
- nums1[2] * nums2[1] = 0 * 4 = 0
The 6th smallest product is 0.
Example 3:

Input: nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3
Output: -6
Explanation: The 3 smallest products are:
- nums1[0] * nums2[4] = (-2) * 5 = -10
- nums1[0] * nums2[3] = (-2) * 4 = -8
- nums1[4] * nums2[0] = 2 * (-3) = -6
The 3rd smallest product is -6.
 

Constraints:

1 <= nums1.length, nums2.length <= 5 * 104
-105 <= nums1[i], nums2[j] <= 105
1 <= k <= nums1.length * nums2.length
nums1 and nums2 are sorted.

### Solution:


class Solution {
 public:
  long long kthSmallestProduct(vector<int>& nums1, vector<int>& nums2,
                               long long k) {
    vector<int> A1;
    vector<int> A2;
    vector<int> B1;
    vector<int> B2;

    seperate(nums1, A1, A2);
    seperate(nums2, B1, B2);

    const long negCount = A1.size() * B2.size() + A2.size() * B1.size();
    int sign = 1;

    if (k > negCount) {
      k -= negCount;  //  find (k - negCount)-th positive
    } else {
      k = negCount - k + 1;  // Find (negCount - k + 1)-th abs(negative)
      sign = -1;
      swap(B1, B2);
    }

    long l = 0;
    long r = 1e10;

    while (l < r) {
      const long m = (l + r) / 2;
      if (numProductNoGreaterThan(A1, B1, m) +
              numProductNoGreaterThan(A2, B2, m) >=
          k)
        r = m;
      else
        l = m + 1;
    }

    return sign * l;
  }

 private:
  void seperate(const vector<int>& A, vector<int>& A1, vector<int>& A2) {
    for (const int a : A)
      if (a < 0)
        A1.push_back(-a);
      else
        A2.push_back(a);
    reverse(begin(A1), end(A1));
  }

  long numProductNoGreaterThan(const vector<int>& A, const vector<int>& B,
                               long m) {
    long count = 0;
    int j = B.size() - 1;
    for (const long a : A) {
      while (j >= 0 && a * B[j] > m)
        --j;
      count += j + 1;
    }
    return count;
  }
};