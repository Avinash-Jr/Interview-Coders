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
    "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List • Two Pointers",
    description: {
      text: "Merge two sorted linked lists and return it as a sorted list.",
      notes: [],
    },
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]"],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
}`,
      python: `def mergeTwoLists(l1, l2):
    pass`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1, 1, 2, 3, 4, 4]",
      java: "[1, 1, 2, 3, 4, 4]",
    },
  },

  "best-time-buy-sell-stock": {
    id: "best-time-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: "Find the maximum profit you can achieve from buying and selling one stock.",
      notes: [],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}`,
      python: `def maxProfit(prices):
    pass`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Return true if any value appears at least twice in the array.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}`,
      python: `def containsDuplicate(nums):
    pass`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Move all zeroes to the end while maintaining the order of non-zero elements.",
      notes: [],
    },
    examples: [
      { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
    ],
    constraints: [],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
}`,
      python: `def moveZeroes(nums):
    pass`,
      java: `class Solution {
    public static void moveZeroes(int[] nums) {
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]",
      python: "[1, 3, 12, 0, 0]",
      java: "[1, 3, 12, 0, 0]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. Each time you can climb 1 or 2 steps.",
      notes: [],
    },
    examples: [
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
}`,
      python: `def climbStairs(n):
    pass`,
      java: `class Solution {
    public static int climbStairs(int n) {
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

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Bit Manipulation",
    description: {
      text: "Every element appears twice except for one. Find that single one.",
      notes: [],
    },
    examples: [
      { input: "nums = [4,1,2,1,2]", output: "4" },
    ],
    constraints: [],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}`,
      python: `def singleNumber(nums):
    pass`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "intersection-of-two-arrays": {
    id: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Return the intersection of two arrays.",
      notes: [],
    },
    examples: [
      { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" },
    ],
    constraints: [],
    starterCode: {
      javascript: `function intersection(nums1, nums2) {
  // Write your solution here
}`,
      python: `def intersection(nums1, nums2):
    pass`,
      java: `class Solution {
    public static int[] intersection(int[] nums1, int[] nums2) {
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[2]",
      python: "[2]",
      java: "[2]",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Voting Algorithm",
    description: {
      text: "Find the element that appears more than ⌊n / 2⌋ times.",
      notes: [],
    },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
    ],
    constraints: [],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
}`,
      python: `def majorityElement(nums):
    pass`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
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

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Remove duplicates in-place such that each element appears only once.",
      notes: [],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "2" },
    ],
    constraints: [],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
}`,
      python: `def removeDuplicates(nums):
    pass`,
      java: `class Solution {
    public static int removeDuplicates(int[] nums) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    tags: ["string", "two-pointers", "in-place"],
    companyFrequency: [
      { company: "Amazon", frequency: "High" },
      { company: "Microsoft", frequency: "High" },
      { company: "Accenture", frequency: "Medium" },
    ],
    description: {
      text: "Reverse a character array in-place.",
      notes: ["O(1) extra space required."],
    },
    examples: [
      { input: '["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: '["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
  },
  "sliding-window-maximum": {
  id: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  difficulty: "Hard",
  category: "Array • Deque",
  tags: ["array", "deque", "sliding-window"],
  companyFrequency: [
    { company: "Google", frequency: "High" },
    { company: "Amazon", frequency: "High" },
    { company: "Microsoft", frequency: "Medium" },
  ],
  description: {
    text: "Return the maximum value in each sliding window of size k.",
  },
  examples: [
    { input: "[1,3,-1,-3,5,3,6,7], k=3", output: "[3,3,5,5,6,7]" },
  ],
},
"product-of-array-except-self": {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array • Prefix Sum",
  tags: ["array", "prefix-sum"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Facebook", frequency: "High" },
    { company: "Microsoft", frequency: "Medium" },
  ],
  description: {
    text: "Return an array such that each element at index i is the product of all elements in the array except the one at i.",
  },
  examples: [
    { input: "[1,2,3,4]", output: "[24,12,8,6]" },
  ],
},


  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    tags: ["string", "two-pointers", "data-cleaning"],
    companyFrequency: [
      { company: "Meta", frequency: "High" },
      { company: "Amazon", frequency: "Medium" },
      { company: "Google", frequency: "Medium" },
    ],
    description: {
      text: "Check whether a string is a palindrome after cleaning.",
    },
    examples: [
      { input: `"A man, a plan, a canal: Panama"`, output: "true" },
      { input: `"race a car"`, output: "false" },
    ],
  },

  "longest-palindromic-substring": {
  id: "longest-palindromic-substring",
  title: "Longest Palindromic Substring",
  difficulty: "Medium",
  category: "String • Two Pointers",
  tags: ["string", "two-pointers", "dynamic-programming"],
  companyFrequency: [
    { company: "Amazon", frequency: "Medium" },
    { company: "Google", frequency: "High" },
    { company: "Microsoft", frequency: "Medium" },
  ],
  description: {
    text: "Find the longest palindromic substring in a given string.",
  },
  examples: [
    { input: '"babad"', output: '"bab"' },
    { input: '"cbbd"', output: '"bb"' },
  ],
},


  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    tags: ["array", "dynamic-programming", "kadane"],
    companyFrequency: [
      { company: "Amazon", frequency: "Very High" },
      { company: "Microsoft", frequency: "High" },
      { company: "Google", frequency: "High" },
      { company: "Accenture", frequency: "Medium" },
    ],
    description: {
      text: "Find the contiguous subarray with the largest sum.",
    },
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "[1]", output: "1" },
    ],
  },

  "binary-tree-level-order-traversal": {
  id: "binary-tree-level-order-traversal",
  title: "Binary Tree Level Order Traversal",
  difficulty: "Medium",
  category: "Tree • BFS",
  tags: ["tree", "bfs", "queue"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Google", frequency: "Medium" },
    { company: "Microsoft", frequency: "High" },
  ],
  description: {
    text: "Return the level order traversal of a binary tree's nodes' values.",
  },
  examples: [
    { input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
  ],
},


  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    tags: ["array", "two-pointers", "greedy"],
    companyFrequency: [
      { company: "Meta", frequency: "Very High" },
      { company: "Amazon", frequency: "High" },
      { company: "Google", frequency: "Medium" },
    ],
    description: {
      text: "Find two vertical lines that hold the most water.",
    },
    examples: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "[1,1]", output: "1" },
    ],
  },
  "serialize-and-deserialize-binary-tree": {
  id: "serialize-and-deserialize-binary-tree",
  title: "Serialize and Deserialize Binary Tree",
  difficulty: "Hard",
  category: "Tree • Design",
  tags: ["tree", "design", "dfs", "bfs"],
  companyFrequency: [
    { company: "Google", frequency: "High" },
    { company: "Facebook", frequency: "High" },
  ],
  description: {
    text: "Design an algorithm to serialize and deserialize a binary tree.",
  },
  examples: [
    { input: "[1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" },
  ],
},

  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    tags: ["tree", "dfs", "recursion", "binary-tree"],
    companyFrequency: [
      { company: "Amazon", frequency: "Very High" },
      { company: "Microsoft", frequency: "High" },
      { company: "Google", frequency: "Medium" },
    ],
    description: {
      text: "Return the maximum depth of a binary tree.",
    },
  examples: [
    { input: "[3,9,20,null,null,15,7]", output: "3" },
    { input: "[1,null,2]", output: "2" },
  ],
},
//   give me 5 more problems like above with different ids, titles, difficulties, categories, tags, companyFrequency, descriptions and examples  
"fibonacci-number": {
  id: "fibonacci-number",
  title: "Fibonacci Number",
  difficulty: "Easy",
  category: "Math • Recursion",
  tags: ["math", "recursion", "dynamic-programming"],
  companyFrequency: [
    { company: "Google", frequency: "Medium" },
    { company: "Microsoft", frequency: "Low" },
    { company: "Amazon", frequency: "Low" },
  ],
  description: {
    text: "Return the n-th Fibonacci number.",
  },
  examples: [
    { input: "2", output: "1" },
    { input: "3", output: "2" },
  ],
},
  // "climbing-stairs": {
  //   id: "climbing-stairs",
  //   title: "Climbing Stairs",
  //   difficulty: "Easy",
  //   category: "Dynamic Programming",
  //   tags: ["dynamic-programming", "math"],
  //   companyFrequency: [
  //       { company: "Microsoft", frequency: "High" },
  //       { company: "Amazon", frequency: "Medium" },
  //       { company: "Google", frequency: "Low" },
  //   ],
  //   description: {
  //     text: "Count distinct ways to climb to the top of n stairs.",
  //   },
  //   examples: [
  //     { input: "2", output: "2" },
  //       { input: "3", output: "3" },
  //   ],
  // },
  // "merge-two-sorted-lists": {
  //   id: "merge-two-sorted-lists",
  //   title: "Merge Two Sorted Lists",
  //   difficulty: "Easy",
  //   category: "Linked List • Recursion",
  //   tags: ["linked-list", "recursion", "merge"],
  //   companyFrequency: [
  //       { company: "Meta", frequency: "High" },
  //       { company: "Amazon", frequency: "Medium" },
  //       { company: "Microsoft", frequency: "Low" },
  //   ],
  //   description: {
  //     text: "Merge two sorted linked lists and return it as a new sorted list.",
  //   },
  //   examples: [
  //     { input: "[1,2,4], [1,3,4]", output: "[1,1,2,3,4,4]" },
  //       { input: "[], []", output: "[]" },
  //   ],
  // },
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    tags: ["array", "dynamic-programming", "greedy"],
    companyFrequency: [
        { company: "Amazon", frequency: "Very High" },
        { company: "Microsoft", frequency: "High" },
        { company: "Google", frequency: "Medium" },
    ],
    description: {
        text: "Find the maximum profit from a single buy and sell of stock.",
    },
    examples: [
      { input: "[7,1,5,3,6,4]", output: "5" },
        { input: "[7,6,4,3,1]", output: "0" },
    ],
  },
  "valid-anagram": {  
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    tags: ["string", "hash-table", "sorting"],
    companyFrequency: [
        { company: "Google", frequency: "High" },
        { company: "Amazon", frequency: "Medium" },
        { company: "Microsoft", frequency: "Low" },
    ],
    description: {
      text: "Determine if two strings are anagrams of each other.",
    },  
    examples: [
      { input: '"anagram", "nagaram"', output: "true" },
        { input: '"rat", "car"', output: "false" },
    ],
  },
  "longest-substring-without-repeating-characters": {
  id: "longest-substring-without-repeating-characters",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  tags: ["string", "sliding-window", "hash-table"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Google", frequency: "High" },
    { company: "Adobe", frequency: "Medium" },
  ],
  description: {
    text: "Find the length of the longest substring without repeating characters.",
  },
  examples: [
    { input: '"abcabcbb"', output: "3" },
    { input: '"bbbbb"', output: "1" },
  ],
},
"group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "String • Hash Table",
  tags: ["string", "hash-table", "sorting"],
  companyFrequency: [
    { company: "Google", frequency: "High" },
    { company: "Facebook", frequency: "High" },
    { company: "Amazon", frequency: "Medium" },
  ],
  description: {
    text: "Group an array of strings such that anagrams are grouped together.",
  },
  examples: [
    { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
  ],
},
"minimum-window-substring": {
  id: "minimum-window-substring",
  title: "Minimum Window Substring",
  difficulty: "Hard",
  category: "String • Sliding Window",
  tags: ["string", "sliding-window", "hash-table"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Google", frequency: "High" },
    { company: "Uber", frequency: "Medium" },
  ],
  description: {
    text: "Find the minimum window substring of one string that contains all characters of another string.",
  },
  examples: [
    { input: '"ADOBECODEBANC", "ABC"', output: '"BANC"' },
  ],
},

"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack • String",
  tags: ["stack", "string"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Microsoft", frequency: "High" },
    { company: "Google", frequency: "Medium" },
  ],
  description: {
    text: "Determine if the input string has valid parentheses.",
  },
  examples: [
    { input: '"()[]{}"', output: "true" },
    { input: '"(]"', output: "false" },
  ],
},

"top-k-frequent-elements": {
  id: "top-k-frequent-elements",
  title: "Top K Frequent Elements",
  difficulty: "Medium",
  category: "Heap • Hash Table",
  tags: ["heap", "hash-table", "bucket-sort"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Facebook", frequency: "High" },
    { company: "Netflix", frequency: "Medium" },
  ],
  description: {
    text: "Return the k most frequent elements in an array.",
  },
  examples: [
    { input: "[1,1,1,2,2,3], k=2", output: "[1,2]" },
  ],
},
"encode-and-decode-strings": {
  id: "encode-and-decode-strings",
  title: "Encode and Decode Strings",
  difficulty: "Medium",
  category: "String • Design",
  tags: ["string", "design"],
  companyFrequency: [
    { company: "Google", frequency: "High" },
    { company: "Facebook", frequency: "Medium" },
  ],
  description: {
    text: "Design an algorithm to encode a list of strings to a string and decode it back.",
  },
  examples: [
    { input: '["lint","code","love","you"]', output: '["lint","code","love","you"]' },
  ],
},


"merge-k-sorted-lists": {
  id: "merge-k-sorted-lists",
  title: "Merge K Sorted Lists",
  difficulty: "Hard",
  category: "Linked List • Heap",
  tags: ["linked-list", "heap", "divide-and-conquer"],
  companyFrequency: [
    { company: "Google", frequency: "High" },
    { company: "Amazon", frequency: "High" },
    { company: "Facebook", frequency: "Medium" },
  ],
  description: {
    text: "Merge k sorted linked lists into one sorted linked list.",
  },
  examples: [
    { input: '[[1,4,5],[1,3,4],[2,6]]', output: "[1,1,2,3,4,4,5,6]" },
  ],
},

"largest-rectangle-in-histogram": {
  id: "largest-rectangle-in-histogram",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack • Array",
  tags: ["stack", "array", "monotonic-stack"],
  companyFrequency: [
    { company: "Amazon", frequency: "High" },
    { company: "Google", frequency: "High" },
    { company: "Microsoft", frequency: "Medium" },
  ],
  description: {
    text: "Find the area of the largest rectangle that can be formed in a histogram.",
  },
  examples: [
    { input: "[2,1,5,6,2,3]", output: "10" },
  ],
},

"binary-tree-maximum-path-sum": {
  id: "binary-tree-maximum-path-sum",
  title: "Binary Tree Maximum Path Sum",
  difficulty: "Hard",
  category: "Tree • DFS",
  tags: ["tree", "dfs", "dynamic-programming"],
  companyFrequency: [
    { company: "Google", frequency: "High" },
    { company: "Amazon", frequency: "High" },
    { company: "Microsoft", frequency: "Medium" },
  ],
  description: {
    text: "Find the maximum sum path in a binary tree where the path may start and end at any node.",
  },
  examples: [
    { input: "[1,2,3]", output: "6" },
    { input: "[-10,9,20,null,null,15,7]", output: "42" },
  ],
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