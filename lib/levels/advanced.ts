import { Level } from './types';

export const advancedLevels: Level[] = [
  {
    id: 11,
    type: 'coding',
    title: "The Endless Tunnel",
    difficulty: "Expert",
    description: "Learn how to use while loops.",
    story: "You are in a dark tunnel. You must take exactly 3 steps forward using a while loop to reach the exit.",
    xpReward: 650,
    content: {
      javascript: {
        lesson: "A `while` loop repeats code as long as a condition is true.\n```javascript\nlet count = 2;\nwhile (count > 0) {\n  console.log('Go');\n  count = count - 1;\n}\n```",
        task: "Write a while loop that runs as long as `steps > 0`. Inside, print 'Step' and decrease `steps` by 1.",
        startingCode: "let steps = 3;\nwhile (steps > 0) {\n  // print 'Step'\n  // decrease steps by 1\n}",
        expectedOutput: "Step\nStep\nStep"
      },
      python: {
        lesson: "A `while` loop repeats code as long as a condition is true.\n```python\ncount = 2\nwhile count > 0:\n  print('Go')\n  count = count - 1\n```",
        task: "Write a while loop that runs as long as `steps > 0`. Inside, print 'Step' and decrease `steps` by 1.",
        startingCode: "steps = 3\nwhile steps > 0:\n  # print 'Step'\n  # decrease steps by 1\n",
        expectedOutput: "Step\nStep\nStep"
      },
      java: {
        lesson: "A `while` loop repeats code as long as a condition is true.\n```java\nint count = 2;\nwhile (count > 0) {\n  System.out.println(\"Go\");\n  count = count - 1;\n}\n```",
        task: "Write a while loop that runs as long as `steps > 0`. Inside, print \"Step\" and decrease `steps` by 1.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    int steps = 3;\n    while (steps > 0) {\n      // print \"Step\"\n      // decrease steps by 1\n    }\n  }\n}",
        expectedOutput: "Step\nStep\nStep"
      },
      cpp: {
        lesson: "A `while` loop repeats code as long as a condition is true.\n```cpp\nint count = 2;\nwhile (count > 0) {\n  std::cout << \"Go\\n\";\n  count = count - 1;\n}\n```",
        task: "Write a while loop that runs as long as `steps > 0`. Inside, print \"Step\" and decrease `steps` by 1.",
        startingCode: "#include <iostream>\n\nint main() {\n  int steps = 3;\n  while (steps > 0) {\n    // print \"Step\\n\"\n    // decrease steps by 1\n  }\n  return 0;\n}",
        expectedOutput: "Step\nStep\nStep"
      },
      c: {
        lesson: "A `while` loop repeats code as long as a condition is true.\n```c\nint count = 2;\nwhile (count > 0) {\n  printf(\"Go\\n\");\n  count = count - 1;\n}\n```",
        task: "Write a while loop that runs as long as `steps > 0`. Inside, print \"Step\" and decrease `steps` by 1.",
        startingCode: "#include <stdio.h>\n\nint main() {\n  int steps = 3;\n  while (steps > 0) {\n    // print \"Step\\n\"\n    // decrease steps by 1\n  }\n  return 0;\n}",
        expectedOutput: "Step\nStep\nStep"
      },
      csharp: {
        lesson: "A `while` loop repeats code as long as a condition is true.\n```csharp\nint count = 2;\nwhile (count > 0) {\n  Console.WriteLine(\"Go\");\n  count = count - 1;\n}\n```",
        task: "Write a while loop that runs as long as `steps > 0`. Inside, print \"Step\" and decrease `steps` by 1.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    int steps = 3;\n    while (steps > 0) {\n      // print \"Step\"\n      // decrease steps by 1\n    }\n  }\n}",
        expectedOutput: "Step\nStep\nStep"
      }
    }
  },
  {
    id: 12,
    type: 'coding',
    title: "The Treasure Sorter",
    difficulty: "Expert",
    description: "Learn how to iterate through Arrays.",
    story: "You found a chest of gems. You need to print each gem's name one by one.",
    xpReward: 700,
    content: {
      javascript: {
        lesson: "You can use a loop to go through each item in an array using its `.length` property.\n```javascript\nlet items = ['A', 'B'];\nfor (let i = 0; i < items.length; i++) {\n  console.log(items[i]);\n}\n```",
        task: "Write a for loop to print each item in the `gems` array.",
        startingCode: "let gems = ['Ruby', 'Emerald', 'Sapphire'];\nfor (let i = 0; i < gems.length; i++) {\n  // print gems[i]\n}",
        expectedOutput: "Ruby\nEmerald\nSapphire"
      },
      python: {
        lesson: "You can use a `for` loop to go through each item in a list directly.\n```python\nitems = ['A', 'B']\nfor item in items:\n  print(item)\n```",
        task: "Write a for loop to print each item in the `gems` list.",
        startingCode: "gems = ['Ruby', 'Emerald', 'Sapphire']\nfor gem in gems:\n  # print gem\n",
        expectedOutput: "Ruby\nEmerald\nSapphire"
      },
      java: {
        lesson: "You can use a loop to go through an array using its `.length` property.\n```java\nString[] items = {\"A\", \"B\"};\nfor (int i = 0; i < items.length; i++) {\n  System.out.println(items[i]);\n}\n```",
        task: "Write a for loop to print each item in the `gems` array.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    String[] gems = {\"Ruby\", \"Emerald\", \"Sapphire\"};\n    for (int i = 0; i < gems.length; i++) {\n      // print gems[i]\n    }\n  }\n}",
        expectedOutput: "Ruby\nEmerald\nSapphire"
      },
      cpp: {
        lesson: "You can use a loop to go through an array. In modern C++, you can use a range-based for loop.\n```cpp\nstd::string items[] = {\"A\", \"B\"};\nfor (std::string item : items) {\n  std::cout << item << \"\\n\";\n}\n```",
        task: "Write a range-based for loop to print each item in the `gems` array.",
        startingCode: "#include <iostream>\n#include <string>\n\nint main() {\n  std::string gems[] = {\"Ruby\", \"Emerald\", \"Sapphire\"};\n  for (std::string gem : gems) {\n    // print gem with a newline\n  }\n  return 0;\n}",
        expectedOutput: "Ruby\nEmerald\nSapphire"
      },
      c: {
        lesson: "You can use a loop to go through an array in C using its size.\n```c\nchar* items[] = {\"A\", \"B\"};\nfor (int i = 0; i < 2; i++) {\n  printf(\"%s\\n\", items[i]);\n}\n```",
        task: "Write a for loop to print each item in the `gems` array.",
        startingCode: "#include <stdio.h>\n\nint main() {\n  char* gems[] = {\"Ruby\", \"Emerald\", \"Sapphire\"};\n  for (int i = 0; i < 3; i++) {\n    // print gems[i] with a newline\n  }\n  return 0;\n}",
        expectedOutput: "Ruby\nEmerald\nSapphire"
      },
      csharp: {
        lesson: "You can use a `foreach` loop to easily go through each item in an array.\n```csharp\nstring[] items = {\"A\", \"B\"};\nforeach (string item in items) {\n  Console.WriteLine(item);\n}\n```",
        task: "Write a foreach loop to print each item in the `gems` array.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    string[] gems = {\"Ruby\", \"Emerald\", \"Sapphire\"};\n    foreach (string gem in gems) {\n      // print gem\n    }\n  }\n}",
        expectedOutput: "Ruby\nEmerald\nSapphire"
      }
    }
  },
  {
    id: 13,
    type: 'coding',
    title: "The Highest Peak",
    difficulty: "Master",
    description: "Learn basic algorithms by finding the maximum value.",
    story: "You are looking at a mountain range. Find the highest peak (maximum number) in the array.",
    xpReward: 800,
    content: {
      javascript: {
        lesson: "To find the maximum, assume the first item is the max. Then loop through the rest. If you find a bigger one, update the max.",
        task: "Complete the loop to find and print the maximum value in the `peaks` array.",
        startingCode: "let peaks = [10, 45, 30, 80, 25];\nlet max = peaks[0];\nfor (let i = 1; i < peaks.length; i++) {\n  // if peaks[i] is greater than max, set max to peaks[i]\n}\nconsole.log(max);",
        expectedOutput: "80"
      },
      python: {
        lesson: "To find the maximum, assume the first item is the max. Then loop through the rest. If you find a bigger one, update the max.",
        task: "Complete the loop to find and print the maximum value in the `peaks` list.",
        startingCode: "peaks = [10, 45, 30, 80, 25]\nmax_peak = peaks[0]\nfor peak in peaks:\n  # if peak is greater than max_peak, set max_peak to peak\n  pass\nprint(max_peak)",
        expectedOutput: "80"
      },
      java: {
        lesson: "To find the maximum, assume the first item is the max. Then loop through the rest. If you find a bigger one, update the max.",
        task: "Complete the loop to find and print the maximum value in the `peaks` array.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    int[] peaks = {10, 45, 30, 80, 25};\n    int max = peaks[0];\n    for (int i = 1; i < peaks.length; i++) {\n      // if peaks[i] is greater than max, set max to peaks[i]\n    }\n    System.out.println(max);\n  }\n}",
        expectedOutput: "80"
      },
      cpp: {
        lesson: "To find the maximum, assume the first item is the max. Then loop through the rest. If you find a bigger one, update the max.",
        task: "Complete the loop to find and print the maximum value in the `peaks` array.",
        startingCode: "#include <iostream>\n\nint main() {\n  int peaks[] = {10, 45, 30, 80, 25};\n  int max = peaks[0];\n  for (int i = 1; i < 5; i++) {\n    // if peaks[i] is greater than max, set max to peaks[i]\n  }\n  std::cout << max << \"\\n\";\n  return 0;\n}",
        expectedOutput: "80"
      },
      c: {
        lesson: "To find the maximum, assume the first item is the max. Then loop through the rest. If you find a bigger one, update the max.",
        task: "Complete the loop to find and print the maximum value in the `peaks` array.",
        startingCode: "#include <stdio.h>\n\nint main() {\n  int peaks[] = {10, 45, 30, 80, 25};\n  int max = peaks[0];\n  for (int i = 1; i < 5; i++) {\n    // if peaks[i] is greater than max, set max to peaks[i]\n  }\n  printf(\"%d\\n\", max);\n  return 0;\n}",
        expectedOutput: "80"
      },
      csharp: {
        lesson: "To find the maximum, assume the first item is the max. Then loop through the rest. If you find a bigger one, update the max.",
        task: "Complete the loop to find and print the maximum value in the `peaks` array.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    int[] peaks = {10, 45, 30, 80, 25};\n    int max = peaks[0];\n    for (int i = 1; i < peaks.Length; i++) {\n      // if peaks[i] is greater than max, set max to peaks[i]\n    }\n    Console.WriteLine(max);\n  }\n}",
        expectedOutput: "80"
      }
    }
  },
  {
    id: 14,
    type: 'coding',
    title: "The Ultimate Test",
    difficulty: "Master",
    description: "Combine loops and logic for the classic FizzBuzz challenge.",
    story: "The final guardian demands the ancient FizzBuzz incantation for numbers 1 to 5!",
    xpReward: 1000,
    content: {
      javascript: {
        lesson: "FizzBuzz: Loop from 1 to 5. If divisible by 3 and 5, print 'FizzBuzz'. Else if divisible by 3, print 'Fizz'. Else if divisible by 5, print 'Buzz'. Else print the number. Use `%` for remainder.",
        task: "Write the FizzBuzz logic inside the loop.",
        startingCode: "for (let i = 1; i <= 5; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log('FizzBuzz');\n  } else if (i % 3 === 0) {\n    console.log('Fizz');\n  } else if (i % 5 === 0) {\n    console.log('Buzz');\n  } else {\n    console.log(i);\n  }\n}",
        expectedOutput: "1\n2\nFizz\n4\nBuzz"
      },
      python: {
        lesson: "FizzBuzz: Loop from 1 to 5. If divisible by 3 and 5, print 'FizzBuzz'. Else if divisible by 3, print 'Fizz'. Else if divisible by 5, print 'Buzz'. Else print the number. Use `%` for remainder.",
        task: "Write the FizzBuzz logic inside the loop.",
        startingCode: "for i in range(1, 6):\n  if i % 3 == 0 and i % 5 == 0:\n    print('FizzBuzz')\n  elif i % 3 == 0:\n    print('Fizz')\n  elif i % 5 == 0:\n    print('Buzz')\n  else:\n    print(i)\n",
        expectedOutput: "1\n2\nFizz\n4\nBuzz"
      },
      java: {
        lesson: "FizzBuzz: Loop from 1 to 5. If divisible by 3 and 5, print 'FizzBuzz'. Else if divisible by 3, print 'Fizz'. Else if divisible by 5, print 'Buzz'. Else print the number. Use `%` for remainder.",
        task: "Write the FizzBuzz logic inside the loop.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      if (i % 3 == 0 && i % 5 == 0) {\n        System.out.println(\"FizzBuzz\");\n      } else if (i % 3 == 0) {\n        System.out.println(\"Fizz\");\n      } else if (i % 5 == 0) {\n        System.out.println(\"Buzz\");\n      } else {\n        System.out.println(i);\n      }\n    }\n  }\n}",
        expectedOutput: "1\n2\nFizz\n4\nBuzz"
      },
      cpp: {
        lesson: "FizzBuzz: Loop from 1 to 5. If divisible by 3 and 5, print 'FizzBuzz'. Else if divisible by 3, print 'Fizz'. Else if divisible by 5, print 'Buzz'. Else print the number. Use `%` for remainder.",
        task: "Write the FizzBuzz logic inside the loop.",
        startingCode: "#include <iostream>\n\nint main() {\n  for (int i = 1; i <= 5; i++) {\n    if (i % 3 == 0 && i % 5 == 0) {\n      std::cout << \"FizzBuzz\\n\";\n    } else if (i % 3 == 0) {\n      std::cout << \"Fizz\\n\";\n    } else if (i % 5 == 0) {\n      std::cout << \"Buzz\\n\";\n    } else {\n      std::cout << i << \"\\n\";\n    }\n  }\n  return 0;\n}",
        expectedOutput: "1\n2\nFizz\n4\nBuzz"
      },
      c: {
        lesson: "FizzBuzz: Loop from 1 to 5. If divisible by 3 and 5, print 'FizzBuzz'. Else if divisible by 3, print 'Fizz'. Else if divisible by 5, print 'Buzz'. Else print the number. Use `%` for remainder.",
        task: "Write the FizzBuzz logic inside the loop.",
        startingCode: "#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 5; i++) {\n    if (i % 3 == 0 && i % 5 == 0) {\n      printf(\"FizzBuzz\\n\");\n    } else if (i % 3 == 0) {\n      printf(\"Fizz\\n\");\n    } else if (i % 5 == 0) {\n      printf(\"Buzz\\n\");\n    } else {\n      printf(\"%d\\n\", i);\n    }\n  }\n  return 0;\n}",
        expectedOutput: "1\n2\nFizz\n4\nBuzz"
      },
      csharp: {
        lesson: "FizzBuzz: Loop from 1 to 5. If divisible by 3 and 5, print 'FizzBuzz'. Else if divisible by 3, print 'Fizz'. Else if divisible by 5, print 'Buzz'. Else print the number. Use `%` for remainder.",
        task: "Write the FizzBuzz logic inside the loop.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    for (int i = 1; i <= 5; i++) {\n      if (i % 3 == 0 && i % 5 == 0) {\n        Console.WriteLine(\"FizzBuzz\");\n      } else if (i % 3 == 0) {\n        Console.WriteLine(\"Fizz\");\n      } else if (i % 5 == 0) {\n        Console.WriteLine(\"Buzz\");\n      } else {\n        Console.WriteLine(i);\n      }\n    }\n  }\n}",
        expectedOutput: "1\n2\nFizz\n4\nBuzz"
      }
    }
  },
  {
    id: 15,
    type: 'quiz',
    title: "The Grandmaster's Riddle",
    difficulty: "Master",
    description: "Prove your ultimate mastery of programming.",
    story: "The Grandmaster of Code appears before you. 'To complete your journey, you must answer one final question.'",
    xpReward: 500,
    content: {
      lesson: "You have mastered variables, logic, loops, and data structures. This is the final test of your intuition.",
      question: "What is the primary purpose of an algorithm?",
      options: [
        "To make the code look complicated",
        "To provide a step-by-step solution to a problem",
        "To store data in a database",
        "To write text to the console"
      ],
      correctAnswerIndex: 1,
      explanation: "An algorithm is a sequence of instructions or a step-by-step procedure for solving a specific problem or performing a computation."
    }
  }
];
