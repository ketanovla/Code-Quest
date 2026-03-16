import { Level } from './types';

export const basicsLevels: Level[] = [
  {
    id: 1,
    type: 'coding',
    title: "The Awakening",
    difficulty: "Complete Beginner",
    description: "Learn how to speak to the computer.",
    story: "You wake up in a strange digital realm. A glowing terminal floats before you. To begin your journey, you must prove you can communicate with this world.",
    xpReward: 100,
    content: {
      javascript: {
        lesson: "In programming, we often need to print messages to see what's happening. In JavaScript, we use `console.log('your message here');` to do this. The text inside the quotes is called a 'String'.",
        task: "Use console.log to print exactly: Hello, World!",
        startingCode: "// Type your code below\n",
        expectedOutput: "Hello, World!"
      },
      python: {
        lesson: "In programming, we often need to print messages to see what's happening. In Python, we use `print('your message here')` to do this. The text inside the quotes is called a 'String'.",
        task: "Use print to output exactly: Hello, World!",
        startingCode: "# Type your code below\n",
        expectedOutput: "Hello, World!"
      },
      java: {
        lesson: "In Java, every program must be inside a `class`, and execution starts in the `main` method. We use `System.out.println(\"your message here\");` to print text to the screen.",
        task: "Use System.out.println to print exactly: Hello, World!",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    // Type your code below\n    \n  }\n}",
        expectedOutput: "Hello, World!"
      },
      cpp: {
        lesson: "In C++, execution starts in the `main` function. We use `std::cout << \"your message here\";` to print text. Don't forget the `#include <iostream>` at the top!",
        task: "Use std::cout to print exactly: Hello, World!",
        startingCode: "#include <iostream>\n\nint main() {\n  // Type your code below\n  \n  return 0;\n}",
        expectedOutput: "Hello, World!"
      },
      c: {
        lesson: "In C, execution starts in the `main` function. We use `printf(\"your message here\\n\");` to print text. Don't forget `#include <stdio.h>`!",
        task: "Use printf to print exactly: Hello, World!",
        startingCode: "#include <stdio.h>\n\nint main() {\n  // Type your code below\n  \n  return 0;\n}",
        expectedOutput: "Hello, World!"
      },
      csharp: {
        lesson: "In C#, execution starts in the `Main` method of a class. We use `Console.WriteLine(\"your message here\");` to print text to the screen.",
        task: "Use Console.WriteLine to print exactly: Hello, World!",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    // Type your code below\n    \n  }\n}",
        expectedOutput: "Hello, World!"
      }
    }
  },
  {
    id: 2,
    type: 'coding',
    title: "The Storage Crates",
    difficulty: "Complete Beginner",
    description: "Learn how to store data in variables.",
    story: "You find a sword on the ground, but you can't carry it with your bare hands. You need a container!",
    xpReward: 150,
    content: {
      javascript: {
        lesson: "Variables are like labeled boxes where you can store information. You create one using the `let` keyword.\n```javascript\nlet potion = 'Health';\n```",
        task: "Create a variable named `weapon` and assign it the value 'Sword'. Then, print the weapon variable.",
        startingCode: "let weapon = 'Sword';\n// Now print the weapon variable\n",
        expectedOutput: "Sword"
      },
      python: {
        lesson: "Variables are like labeled boxes where you can store information. In Python, you just write the name and assign a value.\n```python\npotion = 'Health'\n```",
        task: "Create a variable named `weapon` and assign it the value 'Sword'. Then, print the weapon variable.",
        startingCode: "weapon = 'Sword'\n# Now print the weapon variable\n",
        expectedOutput: "Sword"
      },
      java: {
        lesson: "Variables are like labeled boxes. In Java, you must declare the *type* of data it holds. For text, we use `String`.\n```java\nString potion = \"Health\";\n```",
        task: "Create a String variable named `weapon` and assign it the value \"Sword\". Then, print the weapon variable.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    String weapon = \"Sword\";\n    // Now print the weapon variable\n    \n  }\n}",
        expectedOutput: "Sword"
      },
      cpp: {
        lesson: "Variables are like labeled boxes. In C++, you must declare the *type* of data it holds. For text, we use `std::string`.\n```cpp\nstd::string potion = \"Health\";\n```",
        task: "Create a std::string variable named `weapon` and assign it the value \"Sword\". Then, print the weapon variable.",
        startingCode: "#include <iostream>\n#include <string>\n\nint main() {\n  std::string weapon = \"Sword\";\n  // Now print the weapon variable\n  \n  return 0;\n}",
        expectedOutput: "Sword"
      },
      c: {
        lesson: "Variables are like labeled boxes. In C, text is stored as an array of characters or a pointer to characters.\n```c\nchar* potion = \"Health\";\n```",
        task: "Create a char* variable named `weapon` and assign it the value \"Sword\". Then, print it using printf(\"%s\\n\", weapon).",
        startingCode: "#include <stdio.h>\n\nint main() {\n  char* weapon = \"Sword\";\n  // Now print the weapon variable\n  \n  return 0;\n}",
        expectedOutput: "Sword"
      },
      csharp: {
        lesson: "Variables are like labeled boxes. In C#, you must declare the *type* of data it holds. For text, we use `string`.\n```csharp\nstring potion = \"Health\";\n```",
        task: "Create a string variable named `weapon` and assign it the value \"Sword\". Then, print the weapon variable.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    string weapon = \"Sword\";\n    // Now print the weapon variable\n    \n  }\n}",
        expectedOutput: "Sword"
      }
    }
  },
  {
    id: 3,
    type: 'coding',
    title: "The Goblin's Riddle",
    difficulty: "Beginner",
    description: "Learn basic math operations.",
    story: "A goblin blocks your path. 'To pass, you must calculate the sum of my two favorite numbers: 13 and 42!' he cackles.",
    xpReward: 200,
    content: {
      javascript: {
        lesson: "Computers are great at math. You can use operators like `+` (add), `-` (subtract), `*` (multiply), and `/` (divide).",
        task: "Create a variable called `answer` that stores the sum of 13 and 42. Then print `answer`.",
        startingCode: "let answer = \nconsole.log(answer);",
        expectedOutput: "55"
      },
      python: {
        lesson: "Computers are great at math. You can use operators like `+` (add), `-` (subtract), `*` (multiply), and `/` (divide).",
        task: "Create a variable called `answer` that stores the sum of 13 and 42. Then print `answer`.",
        startingCode: "answer = \nprint(answer)",
        expectedOutput: "55"
      },
      java: {
        lesson: "Computers are great at math. In Java, whole numbers are stored in `int` variables. You can use `+`, `-`, `*`, `/`.",
        task: "Create an int variable called `answer` that stores the sum of 13 and 42. Then print `answer`.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    int answer = \n    System.out.println(answer);\n  }\n}",
        expectedOutput: "55"
      },
      cpp: {
        lesson: "Computers are great at math. In C++, whole numbers are stored in `int` variables. You can use `+`, `-`, `*`, `/`.",
        task: "Create an int variable called `answer` that stores the sum of 13 and 42. Then print `answer`.",
        startingCode: "#include <iostream>\n\nint main() {\n  int answer = \n  std::cout << answer;\n  return 0;\n}",
        expectedOutput: "55"
      },
      c: {
        lesson: "Computers are great at math. In C, whole numbers are stored in `int` variables. You can use `+`, `-`, `*`, `/`.",
        task: "Create an int variable called `answer` that stores the sum of 13 and 42. Then print `answer` using printf(\"%d\\n\", answer).",
        startingCode: "#include <stdio.h>\n\nint main() {\n  int answer = \n  printf(\"%d\\n\", answer);\n  return 0;\n}",
        expectedOutput: "55"
      },
      csharp: {
        lesson: "Computers are great at math. In C#, whole numbers are stored in `int` variables. You can use `+`, `-`, `*`, `/`.",
        task: "Create an int variable called `answer` that stores the sum of 13 and 42. Then print `answer`.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    int answer = \n    Console.WriteLine(answer);\n  }\n}",
        expectedOutput: "55"
      }
    }
  },
  {
    id: 4,
    type: 'coding',
    title: "The Fork in the Road",
    difficulty: "Novice",
    description: "Learn how to make decisions with if/else.",
    story: "You reach a crossroad. The left path is safe, but the right path has a dragon. You need to write logic to choose the safe path.",
    xpReward: 250,
    content: {
      javascript: {
        lesson: "An `if` statement lets your code make decisions. Use `===` to check if two things are exactly equal.",
        task: "There is a variable `path`. Write an if/else statement. If `path` is 'left', print 'Safe'. Else, print 'Danger'.",
        startingCode: "let path = 'left';\n\nif (path === 'left') {\n  // print Safe\n} else {\n  // print Danger\n}",
        expectedOutput: "Safe"
      },
      python: {
        lesson: "An `if` statement lets your code make decisions. Use `==` to check if two things are equal. Indentation matters in Python!",
        task: "There is a variable `path`. Write an if/else statement. If `path` is 'left', print 'Safe'. Else, print 'Danger'.",
        startingCode: "path = 'left'\n\nif path == 'left':\n  # print Safe\nelse:\n  # print Danger\n",
        expectedOutput: "Safe"
      },
      java: {
        lesson: "An `if` statement lets your code make decisions. In Java, use `.equals()` to compare Strings, not `==`.",
        task: "There is a variable `path`. Write an if/else statement. If `path` equals \"left\", print \"Safe\". Else, print \"Danger\".",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    String path = \"left\";\n    if (path.equals(\"left\")) {\n      // print Safe\n    } else {\n      // print Danger\n    }\n  }\n}",
        expectedOutput: "Safe"
      },
      cpp: {
        lesson: "An `if` statement lets your code make decisions. Use `==` to check if two strings are equal in C++.",
        task: "There is a variable `path`. Write an if/else statement. If `path` is \"left\", print \"Safe\". Else, print \"Danger\".",
        startingCode: "#include <iostream>\n#include <string>\n\nint main() {\n  std::string path = \"left\";\n  if (path == \"left\") {\n    // print Safe\n  } else {\n    // print Danger\n  }\n  return 0;\n}",
        expectedOutput: "Safe"
      },
      c: {
        lesson: "An `if` statement lets your code make decisions. In C, use `strcmp()` from `<string.h>` to compare strings.",
        task: "There is a variable `path`. Write an if/else statement. If `strcmp(path, \"left\") == 0`, print \"Safe\". Else, print \"Danger\".",
        startingCode: "#include <stdio.h>\n#include <string.h>\n\nint main() {\n  char* path = \"left\";\n  if (strcmp(path, \"left\") == 0) {\n    // print Safe\n  } else {\n    // print Danger\n  }\n  return 0;\n}",
        expectedOutput: "Safe"
      },
      csharp: {
        lesson: "An `if` statement lets your code make decisions. Use `==` to check if two strings are equal in C#.",
        task: "There is a variable `path`. Write an if/else statement. If `path` is \"left\", print \"Safe\". Else, print \"Danger\".",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    string path = \"left\";\n    if (path == \"left\") {\n      // print Safe\n    } else {\n      // print Danger\n    }\n  }\n}",
        expectedOutput: "Safe"
      }
    }
  },
  {
    id: 5,
    type: 'quiz',
    title: "The Scholar's Test",
    difficulty: "Novice",
    description: "Test your knowledge of basic programming concepts.",
    story: "An old scholar blocks the bridge. 'To proceed, you must answer my riddle about the nature of programming!'",
    xpReward: 150,
    content: {
      lesson: "You've learned about printing, variables, math, and if/else statements. Let's see if you remember the core concepts.",
      question: "Which of the following is used to store information in programming?",
      options: [
        "A printer",
        "A variable",
        "An if statement",
        "A compiler"
      ],
      correctAnswerIndex: 1,
      explanation: "Variables act as labeled containers that hold data (like numbers or text) so you can use and change it later in your program."
    }
  }
];
