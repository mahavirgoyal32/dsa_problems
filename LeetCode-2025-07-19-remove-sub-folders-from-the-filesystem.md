# LeetCode Daily – 2025-07-19

## 🧠 Problem #1233 – **Remove Sub-Folders from the Filesystem**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem)

---

### 📝 Problem Description

Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.

If a folder[i] is located within another folder[j], it is called a sub-folder of it. A sub-folder of folder[j] must start with folder[j], followed by a &quot;/&quot;. For example, &quot;/a/b&quot; is a sub-folder of &quot;/a&quot;, but &quot;/b&quot; is not a sub-folder of &quot;/a/b/c&quot;.

The format of a path is one or more concatenated strings of the form: &#39;/&#39; followed by one or more lowercase English letters.


	For example, &quot;/leetcode&quot; and &quot;/leetcode/problems&quot; are valid paths while an empty string and &quot;/&quot; are not.


 
Example 1:


Input: folder = [&quot;/a&quot;,&quot;/a/b&quot;,&quot;/c/d&quot;,&quot;/c/d/e&quot;,&quot;/c/f&quot;]
Output: [&quot;/a&quot;,&quot;/c/d&quot;,&quot;/c/f&quot;]
Explanation: Folders &quot;/a/b&quot; is a subfolder of &quot;/a&quot; and &quot;/c/d/e&quot; is inside of folder &quot;/c/d&quot; in our filesystem.


Example 2:


Input: folder = [&quot;/a&quot;,&quot;/a/b/c&quot;,&quot;/a/b/d&quot;]
Output: [&quot;/a&quot;]
Explanation: Folders &quot;/a/b/c&quot; and &quot;/a/b/d&quot; will be removed because they are subfolders of &quot;/a&quot;.


Example 3:


Input: folder = [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]
Output: [&quot;/a/b/c&quot;,&quot;/a/b/ca&quot;,&quot;/a/b/d&quot;]


 
Constraints:


	1 <= folder.length <= 4 * 104
	2 <= folder[i].length <= 100
	folder[i] contains only lowercase letters and &#39;/&#39;.
	folder[i] always starts with the character &#39;/&#39;.
	Each folder name is unique.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
