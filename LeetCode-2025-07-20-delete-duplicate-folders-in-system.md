# LeetCode Daily – 2025-07-20

## 🧠 Problem #1948 – **Delete Duplicate Folders in System**
**Difficulty:** Hard  
**Link:** [LeetCode Problem](https://leetcode.com/problems/delete-duplicate-folders-in-system)

---

### 📝 Problem Description

Due to a bug, there are many duplicate folders in a file system. You are given a 2D array paths, where paths[i] is an array representing an absolute path to the ith folder in the file system.


	For example, [&quot;one&quot;, &quot;two&quot;, &quot;three&quot;] represents the path &quot;/one/two/three&quot;.


Two folders (not necessarily on the same level) are identical if they contain the same non-empty set of identical subfolders and underlying subfolder structure. The folders do not need to be at the root level to be identical. If two or more folders are identical, then mark the folders as well as all their subfolders.


	For example, folders &quot;/a&quot; and &quot;/b&quot; in the file structure below are identical. They (as well as their subfolders) should all be marked:

	
		/a
		/a/x
		/a/x/y
		/a/z
		/b
		/b/x
		/b/x/y
		/b/z
	
	
	However, if the file structure also included the path &quot;/b/w&quot;, then the folders &quot;/a&quot; and &quot;/b&quot; would not be identical. Note that &quot;/a/x&quot; and &quot;/b/x&quot; would still be considered identical even with the added folder.


Once all the identical folders and their subfolders have been marked, the file system will delete all of them. The file system only runs the deletion once, so any folders that become identical after the initial deletion are not deleted.

Return the 2D array ans containing the paths of the remaining folders after deleting all the marked folders. The paths may be returned in any order.

 
Example 1:


Input: paths = [[&quot;a&quot;],[&quot;c&quot;],[&quot;d&quot;],[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;d&quot;,&quot;a&quot;]]
Output: [[&quot;d&quot;],[&quot;d&quot;,&quot;a&quot;]]
Explanation: The file structure is as shown.
Folders &quot;/a&quot; and &quot;/c&quot; (and their subfolders) are marked for deletion because they both contain an empty
folder named &quot;b&quot;.


Example 2:


Input: paths = [[&quot;a&quot;],[&quot;c&quot;],[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;a&quot;,&quot;b&quot;,&quot;x&quot;],[&quot;a&quot;,&quot;b&quot;,&quot;x&quot;,&quot;y&quot;],[&quot;w&quot;],[&quot;w&quot;,&quot;y&quot;]]
Output: [[&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;a&quot;],[&quot;a&quot;,&quot;b&quot;]]
Explanation: The file structure is as shown. 
Folders &quot;/a/b/x&quot; and &quot;/w&quot; (and their subfolders) are marked for deletion because they both contain an empty folder named &quot;y&quot;.
Note that folders &quot;/a&quot; and &quot;/c&quot; are identical after the deletion, but they are not deleted because they were not marked beforehand.


Example 3:


Input: paths = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;],[&quot;c&quot;],[&quot;a&quot;]]
Output: [[&quot;c&quot;],[&quot;c&quot;,&quot;d&quot;],[&quot;a&quot;],[&quot;a&quot;,&quot;b&quot;]]
Explanation: All folders are unique in the file system.
Note that the returned array can be in a different order as the order does not matter.


 
Constraints:


	1 <= paths.length <= 2 * 104
	1 <= paths[i].length <= 500
	1 <= paths[i][j].length <= 10
	1 <= sum(paths[i][j].length) <= 2 * 105
	path[i][j] consists of lowercase English letters.
	No two paths lead to the same folder.
	For any folder not at the root level, its parent folder will also be in the input.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here
