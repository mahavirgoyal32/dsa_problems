int totalFruits(vector<int>& arr) {
        int a = -1, b = -1;  // Two types of fruits
        int start = 0;       // Start of the sliding window
        int maxlen = 0;      // Maximum length of the subarray
        int lastFruitIndex = 0; // Tracks the last occurrence of the second type of fruit

        for (int i = 0; i < arr.size(); i++) {
            // If the current fruit is not one of the two types
            if (arr[i] != a && arr[i] != b) {
                // Update the start of the window
                start = lastFruitIndex;

                // Update the two fruit types
                a = arr[start];
                b = arr[i];
            }

            // Update the last occurrence of the second type of fruit
            if (arr[i] != arr[i - 1]) {
                lastFruitIndex = i;
            }

            // Calculate the maximum length of the window
            maxlen = max(maxlen, i - start + 1);
        }

        return maxlen;
    }