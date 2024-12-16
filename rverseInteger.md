int reverse(int x) {
        int a = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            // Check for overflow before multiplication or addition
            if (a > INT_MAX / 10 || (a == INT_MAX / 10 && pop > 7)) return 0;
            if (a < INT_MIN / 10 || (a == INT_MIN / 10 && pop < -8)) return 0;
            a = a * 10 + pop;
        }
        return a;
    }