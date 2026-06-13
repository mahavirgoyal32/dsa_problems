# LeetCode Daily – 2026-06-13

## 🧠 Problem #3838 – **Weighted Word Mapping**
**Difficulty:** Easy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/weighted-word-mapping)

---

### 📝 Problem Description

You are given an array of strings words, where each string represents a word containing lowercase English letters.

You are also given an integer array weights of length 26, where weights[i] represents the weight of the ith lowercase English letter.

The weight of a word is defined as the sum of the weights of its characters.

For each word, take its weight modulo 26 and map the result to a lowercase English letter using reverse alphabetical order (0 -> &#39;z&#39;, 1 -> &#39;y&#39;, ..., 25 -> &#39;a&#39;).

Return a string formed by concatenating the mapped characters for all words in order.

 
Example 1:


Input: words = [&quot;abcd&quot;,&quot;def&quot;,&quot;xyz&quot;], weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2]

Output: &quot;rij&quot;

Explanation:


	The weight of &quot;abcd&quot; is 5 + 3 + 12 + 14 = 34. The result modulo 26 is 34 % 26 = 8, which maps to &#39;r&#39;.
	The weight of &quot;def&quot; is 14 + 1 + 2 = 17. The result modulo 26 is 17 % 26 = 17, which maps to &#39;i&#39;.
	The weight of &quot;xyz&quot; is 7 + 7 + 2 = 16. The result modulo 26 is 16 % 26 = 16, which maps to &#39;j&#39;.


Thus, the string formed by concatenating the mapped characters is &quot;rij&quot;.


Example 2:


Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;], weights = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

Output: &quot;yyy&quot;

Explanation:

Each word has weight 1. The result modulo 26 is 1 % 26 = 1, which maps to &#39;y&#39;.

Thus, the string formed by concatenating the mapped characters is &quot;yyy&quot;.


Example 3:


Input: words = [&quot;abcd&quot;], weights = [7,5,3,4,3,5,4,9,4,2,2,7,10,2,5,10,6,1,2,2,4,1,3,4,4,5]

Output: &quot;g&quot;

Explanation:​​​​​​​

The weight of &quot;abcd&quot; is 7 + 5 + 3 + 4 = 19. The result modulo 26 is 19 % 26 = 19, which maps to &#39;g&#39;.

Thus, the string formed by concatenating the mapped characters is &quot;g&quot;.


 
Constraints:


	1 <= words.length <= 100
	1 <= words[i].length <= 10
	weights.length == 26
	1 <= weights[i] <= 100
	words[i] consists of lowercase English letters.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Sure! Let's discuss the "Weighted Word Mapping" problem on LeetCode, go through the requirements, and then provide a C++ solution along with explanations.

### Problem Summary

The problem is about creating a weighted mapping for substrings of words based on given weights. Specifically, you should implement a method to calculate the weight of the given words based on provided distances, and you need to answer some queries regarding whether a word has a specific weight.

### Steps to Solve the Problem

1. **Data Structures**: Use a dictionary (map) to associate each word with its weight. As you process each word and its corresponding weight, you can easily store and retrieve weights.

2. **Input Parsing**: Read input data to get words and their associated weights. You will likely be provided with a list of tuples where each tuple contains a word and its weight.

3. **Weight Calculation**: As you encounter each word, keep a running total weight if a word appears multiple times or simply overwrite any existing weight with the new weight.

4. **Query Execution**: For each query, check if a word exists in the dictionary. If it does, return its weight; otherwise, return a default value (like zero).

### C++ Implementation

Here’s how you can implement this in C++:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

class WeightedWordMapping {
private:
    std::unordered_map<std::string, int> wordWeights;

public:
    // Constructor to initialize the WeightedWordMapping with words and their weights
    WeightedWordMapping(const std::vector<std::pair<std::string, int>>& words) {
        for (const auto& [word, weight] : words) {
            wordWeights[word] += weight;  // Accumulate the weights
        }
    }

    // Method to get the weight of a specific word
    int getWeight(const std::string& word) {
        // Check if the word exists in the mapping
        if (wordWeights.find(word) != wordWeights.end()) {
            return wordWeights[word];
        }
        return 0;  // If the word doesn't exist, return 0
    }
};

int main() {
    // Example of initialization with words and weights
    std::vector<std::pair<std::string, int>> input = {{"hello", 5}, {"world", 10}, {"hello", 3}};
    WeightedWordMapping wwm(input);
    
    // Test the weight retrieval for different words
    std::cout << "Weight of 'hello': " << wwm.getWeight("hello") << std::endl; // Output: 8
    std::cout << "Weight of 'world': " << wwm.getWeight("world") << std::endl; // Output: 10
    std::cout << "Weight of 'unknown': " << wwm.getWeight("unknown") << std::endl; // Output: 0
    
    return 0;
}
```

### Explanation

1. **Header Files**:
   - We include relevant header files for input-output (`iostream`), unordered maps (`unordered_map`), vectors (`vector`), and strings (`string`).

2. **Class Definition**:
   - We create a class `WeightedWordMapping` that encapsulates the dictionary of weights as an `unordered_map`.

3. **Constructor**:
   - The constructor takes a vector of pairs where each pair consists of a word and its weight. The weights are aggregated using the `+=` operator in the loop.

4. **Get Weight Method**:
   - This method checks whether the provided word exists in the dictionary. If it does, it returns its weight; otherwise, it returns zero.

5. **Main Function**:
   - In the main function, we create an instance of the `WeightedWordMapping` class with a sample list of words and weights. We then demonstrate retrieving weights for various words, including a word that does not exist in the mapping.

### Conclusion
This C++ implementation efficiently computes and retrieves the weights of words. The time complexity of inserting and querying weights is O(1) on average due to the underlying hash table implementation of `unordered_map`, making this solution very efficient.