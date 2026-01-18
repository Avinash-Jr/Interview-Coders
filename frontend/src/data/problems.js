export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Hard",
    category: "Array • Sorting • Interval",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of non-overlapping intervals that cover all the intervals.",
      notes: [
        "Sort intervals by starting time.",
        "Iterate through intervals and merge overlapping ones.",
        "Return the merged intervals in ascending order of start time.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ starti ≤ endi ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
}`,

      python: `def merge(intervals):
    pass`,

      java: `import java.util.*;
class Solution {
    public static int[][] merge(int[][] intervals) {
        return new int[0][0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      python: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      java: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
    },
  },

  "serialize-and-deserialize-binary-tree": {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "Tree • DFS • BFS",
    description: {
      text: "Design an algorithm to serialize a binary tree to a string and deserialize it back to the original tree structure.",
      notes: [
        "Use preorder traversal with null markers for DFS approach.",
        "Or BFS level-order traversal with placeholders.",
        "Aim for O(n) time complexity and O(n) space.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "Serialization example: '1,2,null,null,3,4,null,null,5,null,null'",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
    starterCode: {
      javascript: `function serialize(root) {
  // Write your serialization here
}

function deserialize(data) {
  // Write your deserialization here
}`,

      python: `def serialize(root):
    pass

def deserialize(data):
    pass`,

      java: `import java.util.*;
class Codec {
    public String serialize(TreeNode root) {
        return "";
    }
    public TreeNode deserialize(String data) {
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "1,2,null,null,3,4,null,null,5,null,null",
      python: "1,2,null,null,3,4,null,null,5,null,null",
      java: "1,2,null,null,3,4,null,null,5,null,null",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",
    description: {
      text: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
      notes: [
        "Use two-pointer approach for O(n) time and O(1) space.",
        "Keep track of left max and right max while scanning.",
        "Water trapped at each index = min(leftMax, rightMax) - height[i].",
      ],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: [
      "n == height.length",
      "0 ≤ n ≤ 10⁵",
      "0 ≤ height[i] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
}`,

      python: `def trap(height):
    pass`,

      java: `class Solution {
    public static int trap(int[] height) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "fibonacci-number": {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    category: "Math • Recursion",
    description: {
      text: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.",
      notes: ["Given n, calculate F(n)."],
    },
    examples: [
      {
        input: "n = 2",
        output: "1",
        explanation: "F(2) = F(1) + F(0) = 1 + 0 = 1",
      },
      {
        input: "n = 5",
        output: "5",
        explanation: "F(5) = F(4) + F(3) = 3 + 2 = 5",
      },
      {
        input: "n = 0",
        output: "0",
        explanation: "F(0) = 0",
      },
    ],
    constraints: ["0 ≤ n ≤ 30"],
    starterCode: {
      javascript:
        "function fib(n) {\n  // Write your solution here\n}\n\nconsole.log(fib(2));\nconsole.log(fib(5));\nconsole.log(fib(0));",
      python:
        "def fib(n):\n    # Write your solution here\n    pass\n\nprint(fib(2))\nprint(fib(5))\nprint(fib(0))",
      java: "class Solution {\n    public static int fib(int n) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(fib(2));\n        System.out.println(fib(5));\n        System.out.println(fib(0));\n    }\n}",
    },
    expectedOutput: {
      javascript: "1\n5\n0",
      python: "1\n5\n0",
      java: "1\n5\n0",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
      notes: ["You may not create new nodes; just re-link existing ones."],
    },
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "Merging [1,2,4] and [1,3,4] gives [1,1,2,3,4,4]",
      },
      {
        input: "l1 = [], l2 = []",
        output: "[]",
        explanation: "Merging two empty lists gives an empty list",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript:
        "function mergeTwoLists(l1, l2) {\n  // Write your solution here\n}\n\nconsole.log(mergeTwoLists([1,2,4],[1,3,4]));\nconsole.log(mergeTwoLists([],[]));",
      python:
        "def mergeTwoLists(l1, l2):\n    # Write your solution here\n    pass\n\nprint(mergeTwoLists([1,2,4],[1,3,4]))\nprint(mergeTwoLists([],[]))",
      java: "class Solution {\n    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        // Write your solution here\n        return null;\n    }\n\n    public static void main(String[] args) {\n        // Example test cases\n    }\n}",
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]",
      python: "[1,1,2,3,4,4]\n[]",
      java: "[1,1,2,3,4,4]\n[]",
    },
  },

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List • Two Pointers",
    description: {
      text: "Given the head of a singly linked list, reverse the list and return the reversed list.",
      notes: [
        "Iteratively reverse pointers using two or three pointers.",
        "Can also solve recursively.",
        "Maintain O(1) space for iterative approach.",
      ],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 5000]",
      "-5000 ≤ Node.val ≤ 5000",
    ],
    starterCode: {
      javascript: `function reverseList(head) {
  // Write your solution here
}`,

      python: `def reverseList(head):
    pass`,

      java: `class Solution {
    public ListNode reverseList(ListNode head) {
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]",
      python: "[5,4,3,2,1]\n[2,1]",
      java: "[5,4,3,2,1]\n[2,1]",
    },
  },

  "linked-list-cycle-ii": {
    id: "linked-list-cycle-ii",
    title: "Linked List Cycle II",
    difficulty: "Hard",
    category: "Linked List • Two Pointers • Cycle Detection",
    description: {
      text: "Given a linked list, return the node where the cycle begins. If there is no cycle, return null.",
      notes: [
        "Use Floyd’s Tortoise and Hare (slow + fast pointers).",
        "Once a cycle is detected, move one pointer to head and advance both by one to find the entry.",
        "Do not modify the linked list.",
      ],
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "Node at index 1 (value 2)",
      },
      {
        input: "head = [1,2], pos = 0",
        output: "Node at index 0 (value 1)",
      },
    ],
    constraints: [
      "The number of nodes is in the range [0, 10⁴]",
      "-10⁵ ≤ Node.val ≤ 10⁵",
      "pos is -1 or a valid index",
    ],
    starterCode: {
      javascript: `function detectCycle(head) {
  // Write your solution here
}`,

      python: `def detectCycle(head):
    pass`,

      java: `class Solution {
    public ListNode detectCycle(ListNode head) {
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "Node at index 1 (value 2)\nNode at index 0 (value 1)",
      python: "Node at index 1 (value 2)\nNode at index 0 (value 1)",
      java: "Node at index 1 (value 2)\nNode at index 0 (value 1)",
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Heap / Divide & Conquer",
    description: {
      text: "Merge k sorted linked lists into one sorted linked list and return it.",
      notes: [
        "Optimal solution uses a min-heap or divide-and-conquer.",
        "Time complexity: O(N log k), where N is total nodes.",
        "Can also merge two lists at a time recursively.",
      ],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
      },
      {
        input: "lists = []",
        output: "[]",
      },
    ],
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function mergeKLists(lists) {
  // Write your solution here
}`,

      python: `def mergeKLists(lists):
    pass`,

      java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]\n[]",
      python: "[1,1,2,3,4,4,5,6]\n[]",
      java: "[1,1,2,3,4,4,5,6]\n[]",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Hard",
    category: "Graph • DFS / BFS",
    description: {
      text: "Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
      notes: [
        "Use DFS or BFS to explore each island.",
        "Mark visited cells to avoid double counting.",
        "Return the total number of distinct islands.",
      ],
    },
    examples: [
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 300",
      "grid[i][j] is '0' or '1'",
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
}`,

      python: `def numIslands(grid):
    pass`,

      java: `class Solution {
    public int numIslands(char[][] grid) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Hard",
    category: "Graph • DFS / Topological Sort",
    description: {
      text: "There are n courses labeled from 0 to n-1. Some courses have prerequisites. Determine if you can finish all courses.",
      notes: [
        "Model courses as nodes and prerequisites as directed edges.",
        "Detect cycles in the graph using DFS.",
        "Return true if no cycles exist, else false.",
      ],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 10⁵",
      "0 ≤ prerequisites.length ≤ 10⁵",
      "prerequisites[i].length == 2",
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
}`,

      python: `def canFinish(numCourses, prerequisites):
    pass`,

      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Given two words (beginWord and endWord) and a dictionary, find the length of the shortest transformation sequence from beginWord to endWord. Only one letter can be changed at a time and each transformed word must exist in the dictionary.",
      notes: [
        "Use BFS for shortest path search.",
        "Transform one character at a time.",
        "Return 0 if no transformation sequence exists.",
      ],
    },
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
      },
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "endWord.length == beginWord.length",
      "1 ≤ wordList.length ≤ 5000",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}`,

      python: `def ladderLength(beginWord, endWord, wordList):
    pass`,

      java: `class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      notes: ["Use Kadane's algorithm for optimal O(n) solution."]
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The contiguous subarray [4,-1,2,1] has the largest sum = 6."
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The array itself has sum 1."
      }
    ],
    constraints: ["1 ≤ nums.length ≤ 10^5", "-10^4 ≤ nums[i] ≤ 10^4"],
    starterCode: {
      javascript: "function maxSubArray(nums) {\n  // Write your solution here\n}\n\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));\nconsole.log(maxSubArray([1]));",
      python: "def maxSubArray(nums):\n    # Write your solution here\n    pass\n\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))\nprint(maxSubArray([1]))",
      java: "class Solution {\n    public static int maxSubArray(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));\n        System.out.println(maxSubArray(new int[]{1}));\n    }\n}"
    },
    expectedOutpu: {
      javascript: "6\n1",
      python: "6\n1",
      java: "6\n1"
    }
  },

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and return the new length.",
      notes: ["Do not allocate extra space for another array; modify the input array in-place."]
    },
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2",
        explanation: "After removing duplicates, the first two elements are [1,2]."
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
        explanation: "After removing duplicates, the first five elements are [0,1,2,3,4]."
      }
    ],
    constraints: ["0 ≤ nums.length ≤ 10^4", "-10^4 ≤ nums[i] ≤ 10^4", "nums is sorted in non-decreasing order"],
    starterCode: {
      javascript: "function removeDuplicates(nums) {\n  // Write your solution here\n}\n\nconsole.log(removeDuplicates([1,1,2]));\nconsole.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));",
      python: "def removeDuplicates(nums):\n    # Write your solution here\n    pass\n\nprint(removeDuplicates([1,1,2]))\nprint(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))",
      java: "class Solution {\n    public static int removeDuplicates(int[] nums) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(removeDuplicates(new int[]{1,1,2}));\n        System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4}));\n    }\n}"
    },
    expectedOutput: {
      javascript: "2\n5",
      python: "2\n5",
      java: "2\n5"
    }
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hashing",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: ["An Anagram is a word formed by rearranging the letters of another."]
    },
    examples: [
      {
        input: "s = 'anagram', t = 'nagaram'",
        output: "true",
        explanation: "Rearranging 'anagram' gives 'nagaram'."
      },
      {
        input: "s = 'rat', t = 'car'",
        output: "false",
        explanation: "'car' cannot be formed by rearranging 'rat'."
      }
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10^4", "s and t consist of lowercase letters"],
    starterCode: {
      javascript: "function isAnagram(s, t) {\n  // Write your solution here\n}\n\nconsole.log(isAnagram('anagram','nagaram'));\nconsole.log(isAnagram('rat','car'));",
      python: "def isAnagram(s, t):\n    # Write your solution here\n    pass\n\nprint(isAnagram('anagram','nagaram'))\nprint(isAnagram('rat','car'))",
      java: "class Solution {\n    public static boolean isAnagram(String s, String t) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(isAnagram('anagram','nagaram'));\n        System.out.println(isAnagram('rat','car'));\n    }\n}"
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse"
    }
  },
  
  "climb-stairs": {
    id: "climb-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: ["Use DP to calculate number of ways efficiently."]
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways: 1+1 or 2."
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1+1+1, 1+2, 2+1."
      }
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: "function climbStairs(n) {\n  // Write your solution here\n}\n\nconsole.log(climbStairs(2));\nconsole.log(climbStairs(3));",
      python: "def climbStairs(n):\n    # Write your solution here\n    pass\n\nprint(climbStairs(2))\nprint(climbStairs(3))",
      java: "class Solution {\n    public static int climbStairs(int n) {\n        // Write your solution here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(climbStairs(2));\n        System.out.println(climbStairs(3));\n    }\n}"
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3"
    }
  },

  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
  category: "Linked List • Two Pointers",
    description: {
      text: "Given a linked list, determine if it has a cycle in it.",
      notes: ["Use fast and slow pointer method for O(n) time and O(1) space."]
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "There is a cycle connecting tail to node index 1."
      },
      {
        input: "head = [1,2], pos = 0",
        output: "true",
        explanation: "There is a cycle connecting tail to node index 0."
      },
      {
        input: "head = [1], pos = -1",
        output: "false",
        explanation: "No cycle."
      }
    ],
    constraints: ["The number of nodes is in the range [0, 10^4]", "-10^5 ≤ Node.val ≤ 10^5"],
    starterCode: {
      javascript: "function hasCycle(head) {\n  // Write your solution here\n}\n\nconsole.log(hasCycle([3,2,0,-4],1));\nconsole.log(hasCycle([1,2],0));\nconsole.log(hasCycle([1],-1));",
    python: "def hasCycle(head):\n    # Write your solution here\n    pass\n\nprint(hasCycle([3,2,0,-4],1))\nprint(hasCycle([1,2],0))\nprint(hasCycle([1],-1))",
    java: "class Solution {\n    public static boolean hasCycle(ListNode head) {\n        // Write your solution here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        // Example test cases\n    }\n}"
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse"
    }
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Hard",
    category: "Dynamic Programming",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [
        "Use DP where dp[i] = length of LIS ending at index i.",
        "Time complexity O(n^2) is acceptable; O(n log n) with patience sorting is optimal.",
        "Consider previous elements smaller than current to update dp[i].",
      ],
    },
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
      },
      {
        input: "nums = [0,1,0,3,2,3]",
        output: "4",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 2500",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here
}`,

      python: `def lengthOfLIS(nums):
    pass`,

      java: `class Solution {
    public int lengthOfLIS(int[] nums) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n4",
      python: "4\n4",
      java: "4\n4",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Hard",
    category: "Dynamic Programming",
    description: {
      text: "Given an array of coin denominations and a total amount, return the fewest number of coins needed to make up that amount. If not possible, return -1.",
      notes: [
        "Use bottom-up DP array where dp[i] = min coins to make i.",
        "Iterate over coins and amounts to update dp.",
        "Initial dp[0] = 0, dp[i] = Infinity for i > 0.",
      ],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "1 ≤ coins[i] ≤ 2³¹ - 1",
      "0 ≤ amount ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
}`,

      python: `def coinChange(coins, amount):
    pass`,

      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1",
      python: "3\n-1",
      java: "3\n-1",
    },
  },

  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) required to convert word1 to word2.",
      notes: [
        "Use a 2D DP array dp[i][j] = min operations for first i chars of word1 to first j chars of word2.",
        "Transition: if chars match, dp[i][j] = dp[i-1][j-1]; else dp[i][j] = 1 + min(insert, delete, replace).",
        "Time complexity O(m*n), space O(m*n) or optimized to O(n).",
      ],
    },
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
      },
    ],
    constraints: [
      "0 ≤ word1.length, word2.length ≤ 500",
      "word1 and word2 consist of lowercase English letters.",
    ],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
}`,

      python: `def minDistance(word1, word2):
    pass`,

      java: `class Solution {
    public int minDistance(String word1, String word2) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
    },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking • DFS",
    description: {
      text: "Place n queens on an n×n chessboard so that no two queens attack each other. Return all distinct solutions.",
      notes: [
        "Use backtracking row by row.",
        "Check columns and diagonals for conflicts.",
        "Each solution can be represented as an array of strings.",
      ],
    },
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
    ],
    constraints: [
      "1 ≤ n ≤ 9",
    ],
    starterCode: {
      javascript: `function solveNQueens(n) {
  // Write your solution here
}`,

      python: `def solveNQueens(n):
    pass`,

      java: `import java.util.*;
class Solution {
    public List<List<String>> solveNQueens(int n) {
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      python: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      java: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Hard",
    category: "Backtracking • DFS",
    description: {
      text: "Given a 2D board and a word, return true if the word exists in the board. The word can be constructed from letters of sequentially adjacent cells.",
      notes: [
        "Use DFS to explore each path.",
        "Mark cells as visited to avoid revisiting in the same path.",
        "Backtrack when the path does not match the word.",
      ],
    },
    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: "true",
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 6",
      "1 ≤ word.length ≤ 15",
      "board and word consist of uppercase and lowercase English letters.",
    ],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
}`,

      python: `def exist(board, word):
    pass`,

      java: `class Solution {
    public boolean exist(char[][] board, String word) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue",
      python: "True\nTrue",
      java: "true\ntrue",
    },
  },

  "palindrome-partitioning": {
    id: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "Hard",
    category: "Backtracking • DFS",
    description: {
      text: "Given a string s, partition s such that every substring is a palindrome. Return all possible palindrome partitioning solutions.",
      notes: [
        "Use DFS to explore all partitioning options.",
        "Check if a substring is a palindrome before continuing the recursion.",
        "Backtrack to explore other partition possibilities.",
      ],
    },
    examples: [
      {
        input: 's = "aab"',
        output: '[["a","a","b"],["aa","b"]]',
      },
      {
        input: 's = "a"',
        output: '[["a"]]',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 16",
      "s contains only lowercase English letters.",
    ],
    starterCode: {
      javascript: `function partition(s) {
  // Write your solution here
}`,

      python: `def partition(s):
    pass`,

      java: `import java.util.*;
class Solution {
    public List<List<String>> partition(String s) {
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: '[["a","a","b"],["aa","b"]]\n[["a"]]',
      python: '[["a","a","b"],["aa","b"]]\n[["a"]]',
      java: '[["a","a","b"],["aa","b"]]\n[["a"]]',
    },
  },
};



export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", icon: "/javascript.png", monacoLang: "javascript" },
  python: { name: "Python", icon: "/python.png", monacoLang: "python" },
  java: { name: "Java", icon: "/java.png", monacoLang: "java" },
  // cpp: { name: "C++", icon: "/cpp.png", monacoLang: "cpp" },
  // c: { name: "C", icon: "/c.png", monacoLang: "c" },
  // swift: { name: "Swift", icon: "/swift.png", monacoLang: "swift" },
  // go: { name: "Go", icon: "/go.png", monacoLang: "go" },
  // typescript: { name: "TypeScript", icon: "/typescript.png", monacoLang: "typescript" },
};
export const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];
export const CATEGORIES = [
  "Array",
  "String",
  "Hash Table",
  "Two Pointers",
  "Dynamic Programming",
  "Tree",
  "DFS",
];