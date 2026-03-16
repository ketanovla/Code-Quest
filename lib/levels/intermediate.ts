import { Level } from './types';

export const intermediateLevels: Level[] = [
  {
    id: 6,
    type: 'coding',
    title: "The Echo Cave",
    difficulty: "Intermediate",
    description: "Learn how to repeat actions with loops.",
    story: "You enter a cave where everything echoes exactly 3 times. You need to simulate this echo to open the door.",
    xpReward: 300,
    content: {
      javascript: {
        lesson: "A `for` loop repeats code. It has 3 parts: setup, condition, and step.\n```javascript\nfor (let i = 0; i < 3; i++) {\n  console.log('Echo');\n}\n```",
        task: "Write a for loop that prints 'Hello' exactly 3 times.",
        startingCode: "for (let i = 0; i < 3; i++) {\n  // print Hello\n}",
        expectedOutput: "Hello\nHello\nHello"
      },
      python: {
        lesson: "A `for` loop repeats code. In Python, `range(3)` creates a sequence of numbers from 0 to 2.\n```python\nfor i in range(3):\n  print('Echo')\n```",
        task: "Write a for loop that prints 'Hello' exactly 3 times.",
        startingCode: "for i in range(3):\n  # print Hello\n",
        expectedOutput: "Hello\nHello\nHello"
      },
      java: {
        lesson: "A `for` loop repeats code. It has 3 parts: setup, condition, and step.\n```java\nfor (int i = 0; i < 3; i++) {\n  System.out.println(\"Echo\");\n}\n```",
        task: "Write a for loop that prints \"Hello\" exactly 3 times.",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++) {\n      // print Hello\n    }\n  }\n}",
        expectedOutput: "Hello\nHello\nHello"
      },
      cpp: {
        lesson: "A `for` loop repeats code. It has 3 parts: setup, condition, and step.\n```cpp\nfor (int i = 0; i < 3; i++) {\n  std::cout << \"Echo\\n\";\n}\n```",
        task: "Write a for loop that prints \"Hello\" exactly 3 times (with a newline after each).",
        startingCode: "#include <iostream>\n\nint main() {\n  for (int i = 0; i < 3; i++) {\n    // print Hello with a newline (\\n)\n  }\n  return 0;\n}",
        expectedOutput: "Hello\nHello\nHello"
      },
      c: {
        lesson: "A `for` loop repeats code. It has 3 parts: setup, condition, and step.\n```c\nfor (int i = 0; i < 3; i++) {\n  printf(\"Echo\\n\");\n}\n```",
        task: "Write a for loop that prints \"Hello\" exactly 3 times (with a newline after each).",
        startingCode: "#include <stdio.h>\n\nint main() {\n  for (int i = 0; i < 3; i++) {\n    // print Hello with a newline (\\n)\n  }\n  return 0;\n}",
        expectedOutput: "Hello\nHello\nHello"
      },
      csharp: {
        lesson: "A `for` loop repeats code. It has 3 parts: setup, condition, and step.\n```csharp\nfor (int i = 0; i < 3; i++) {\n  Console.WriteLine(\"Echo\");\n}\n```",
        task: "Write a for loop that prints \"Hello\" exactly 3 times.",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    for (int i = 0; i < 3; i++) {\n      // print Hello\n    }\n  }\n}",
        expectedOutput: "Hello\nHello\nHello"
      }
    }
  },
  {
    id: 7,
    type: 'coding',
    title: "The Magic Spell",
    difficulty: "Intermediate",
    description: "Learn how to create reusable functions.",
    story: "You find a spellbook. Instead of rewriting the spell every time, you can define it once as a 'function' and call it whenever you need it.",
    xpReward: 400,
    content: {
      javascript: {
        lesson: "Functions are reusable blocks of code. You define them and then 'call' them.\n```javascript\nfunction sayHi(name) {\n  console.log('Hi ' + name);\n}\nsayHi('Alice');\n```",
        task: "Create a function called `castSpell` that takes a `target` parameter and prints 'Casting spell on ' + target. Then call it with 'Goblin'.",
        startingCode: "function castSpell(target) {\n  \n}\n\n// Call the function here\n",
        expectedOutput: "Casting spell on Goblin"
      },
      python: {
        lesson: "Functions are reusable blocks of code. You define them using `def` and then 'call' them.\n```python\ndef say_hi(name):\n  print('Hi ' + name)\nsay_hi('Alice')\n```",
        task: "Create a function called `castSpell` that takes a `target` parameter and prints 'Casting spell on ' + target. Then call it with 'Goblin'.",
        startingCode: "def castSpell(target):\n  pass # Replace pass with your print statement\n\n# Call the function here\n",
        expectedOutput: "Casting spell on Goblin"
      },
      java: {
        lesson: "Functions (called methods in Java) are reusable blocks of code. You define them inside a class.\n```java\nstatic void sayHi(String name) {\n  System.out.println(\"Hi \" + name);\n}\n```",
        task: "Create a method called `castSpell` that takes a String `target` parameter and prints \"Casting spell on \" + target. Then call it with \"Goblin\" from main.",
        startingCode: "public class Main {\n  static void castSpell(String target) {\n    // print statement here\n  }\n\n  public static void main(String[] args) {\n    // Call the function here\n  }\n}",
        expectedOutput: "Casting spell on Goblin"
      },
      cpp: {
        lesson: "Functions are reusable blocks of code. You define them above `main`.\n```cpp\nvoid sayHi(std::string name) {\n  std::cout << \"Hi \" << name;\n}\n```",
        task: "Create a function called `castSpell` that takes a std::string `target` parameter and prints \"Casting spell on \" + target. Then call it with \"Goblin\" from main.",
        startingCode: "#include <iostream>\n#include <string>\n\nvoid castSpell(std::string target) {\n  // print statement here\n}\n\nint main() {\n  // Call the function here\n  return 0;\n}",
        expectedOutput: "Casting spell on Goblin"
      },
      c: {
        lesson: "Functions are reusable blocks of code. You define them above `main`.\n```c\nvoid sayHi(char* name) {\n  printf(\"Hi %s\\n\", name);\n}\n```",
        task: "Create a function called `castSpell` that takes a char* `target` parameter and prints \"Casting spell on %s\\n\" with target. Then call it with \"Goblin\" from main.",
        startingCode: "#include <stdio.h>\n\nvoid castSpell(char* target) {\n  // print statement here\n}\n\nint main() {\n  // Call the function here\n  return 0;\n}",
        expectedOutput: "Casting spell on Goblin"
      },
      csharp: {
        lesson: "Functions (called methods in C#) are reusable blocks of code. You define them inside a class.\n```csharp\nstatic void SayHi(string name) {\n  Console.WriteLine(\"Hi \" + name);\n}\n```",
        task: "Create a method called `CastSpell` that takes a string `target` parameter and prints \"Casting spell on \" + target. Then call it with \"Goblin\" from Main.",
        startingCode: "using System;\n\nclass Program {\n  static void CastSpell(string target) {\n    // print statement here\n  }\n\n  static void Main() {\n    // Call the function here\n  }\n}",
        expectedOutput: "Casting spell on Goblin"
      }
    }
  },
  {
    id: 8,
    type: 'coding',
    title: "The Inventory Bag",
    difficulty: "Advanced",
    description: "Learn how to store multiple items in an Array.",
    story: "Your pockets are full! You need a bag to hold multiple items in a specific order.",
    xpReward: 500,
    content: {
      javascript: {
        lesson: "An Array is a list of items, enclosed in square brackets `[]`. You can access items by their position (starting at 0).\n```javascript\nlet bag = ['Map', 'Coin'];\nconsole.log(bag[0]); // Prints: Map\n```",
        task: "Create an array called `inventory` containing 'Potion', 'Shield', and 'Key'. Print the second item ('Shield').",
        startingCode: "let inventory = \n// Print the second item\n",
        expectedOutput: "Shield"
      },
      python: {
        lesson: "A List (Array) stores multiple items, enclosed in square brackets `[]`. You can access items by their position (starting at 0).\n```python\nbag = ['Map', 'Coin']\nprint(bag[0]) # Prints: Map\n```",
        task: "Create a list called `inventory` containing 'Potion', 'Shield', and 'Key'. Print the second item ('Shield').",
        startingCode: "inventory = \n# Print the second item\n",
        expectedOutput: "Shield"
      },
      java: {
        lesson: "An Array stores multiple items of the same type. You access items by their position (starting at 0).\n```java\nString[] bag = {\"Map\", \"Coin\"};\nSystem.out.println(bag[0]); // Prints: Map\n```",
        task: "Create a String array called `inventory` containing \"Potion\", \"Shield\", and \"Key\". Print the second item (\"Shield\").",
        startingCode: "public class Main {\n  public static void main(String[] args) {\n    String[] inventory = \n    // Print the second item\n  }\n}",
        expectedOutput: "Shield"
      },
      cpp: {
        lesson: "An Array stores multiple items of the same type. You access items by their position (starting at 0).\n```cpp\nstd::string bag[] = {\"Map\", \"Coin\"};\nstd::cout << bag[0]; // Prints: Map\n```",
        task: "Create a std::string array called `inventory` containing \"Potion\", \"Shield\", and \"Key\". Print the second item (\"Shield\").",
        startingCode: "#include <iostream>\n#include <string>\n\nint main() {\n  std::string inventory[] = \n  // Print the second item\n  return 0;\n}",
        expectedOutput: "Shield"
      },
      c: {
        lesson: "An Array stores multiple items of the same type. You access items by their position (starting at 0).\n```c\nchar* bag[] = {\"Map\", \"Coin\"};\nprintf(\"%s\\n\", bag[0]); // Prints: Map\n```",
        task: "Create a char* array called `inventory` containing \"Potion\", \"Shield\", and \"Key\". Print the second item (\"Shield\").",
        startingCode: "#include <stdio.h>\n\nint main() {\n  char* inventory[] = \n  // Print the second item\n  return 0;\n}",
        expectedOutput: "Shield"
      },
      csharp: {
        lesson: "An Array stores multiple items of the same type. You access items by their position (starting at 0).\n```csharp\nstring[] bag = {\"Map\", \"Coin\"};\nConsole.WriteLine(bag[0]); // Prints: Map\n```",
        task: "Create a string array called `inventory` containing \"Potion\", \"Shield\", and \"Key\". Print the second item (\"Shield\").",
        startingCode: "using System;\n\nclass Program {\n  static void Main() {\n    string[] inventory = \n    // Print the second item\n  }\n}",
        expectedOutput: "Shield"
      }
    }
  },
  {
    id: 9,
    type: 'coding',
    title: "The Hero's Stats",
    difficulty: "Advanced",
    description: "Learn how to group related data in Objects/Classes.",
    story: "You need to keep track of your hero's stats: health, strength, and name. Grouping them together is perfect for this!",
    xpReward: 600,
    content: {
      javascript: {
        lesson: "An Object groups related data using curly braces `{}` and key-value pairs.\n```javascript\nlet player = {\n  name: 'Hero',\n  hp: 100\n};\nconsole.log(player.name);\n```",
        task: "Create an object called `hero` with `name` set to 'Knight' and `hp` set to 50. Then print the hero's hp.",
        startingCode: "let hero = {\n  \n};\n// Print the hero's hp\n",
        expectedOutput: "50"
      },
      python: {
        lesson: "A Dictionary groups related data using curly braces `{}` and key-value pairs.\n```python\nplayer = {\n  'name': 'Hero',\n  'hp': 100\n}\nprint(player['name'])\n```",
        task: "Create a dictionary called `hero` with `'name'` set to 'Knight' and `'hp'` set to 50. Then print the hero's hp.",
        startingCode: "hero = {\n  \n}\n# Print the hero's hp\n",
        expectedOutput: "50"
      },
      java: {
        lesson: "A Class is a blueprint for grouping data. You create an object from a class using `new`.\n```java\nclass Player {\n  String name = \"Hero\";\n  int hp = 100;\n}\n```",
        task: "Create a `Hero` class with a String `name` (\"Knight\") and an int `hp` (50). In main, create a new Hero object and print its hp.",
        startingCode: "class Hero {\n  // Add fields here\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Hero hero = new Hero();\n    // Print the hero's hp\n  }\n}",
        expectedOutput: "50"
      },
      cpp: {
        lesson: "A Struct or Class groups related data.\n```cpp\nstruct Player {\n  std::string name = \"Hero\";\n  int hp = 100;\n};\n```",
        task: "Create a `Hero` struct with a std::string `name` (\"Knight\") and an int `hp` (50). In main, create a Hero object and print its hp.",
        startingCode: "#include <iostream>\n#include <string>\n\nstruct Hero {\n  // Add fields here\n};\n\nint main() {\n  Hero hero;\n  // Print the hero's hp\n  return 0;\n}",
        expectedOutput: "50"
      },
      c: {
        lesson: "A Struct groups related data in C.\n```c\nstruct Player {\n  char* name;\n  int hp;\n};\n```",
        task: "Create a `Hero` struct with a char* `name` and an int `hp`. In main, create a struct Hero object, set name to \"Knight\" and hp to 50, and print its hp.",
        startingCode: "#include <stdio.h>\n\nstruct Hero {\n  // Add fields here\n};\n\nint main() {\n  struct Hero hero;\n  // Set fields and print the hero's hp\n  return 0;\n}",
        expectedOutput: "50"
      },
      csharp: {
        lesson: "A Class is a blueprint for grouping data. You create an object from a class using `new`.\n```csharp\nclass Player {\n  public string Name = \"Hero\";\n  public int Hp = 100;\n}\n```",
        task: "Create a `Hero` class with a public string `Name` (\"Knight\") and a public int `Hp` (50). In Main, create a new Hero object and print its Hp.",
        startingCode: "using System;\n\nclass Hero {\n  // Add fields here\n}\n\nclass Program {\n  static void Main() {\n    Hero hero = new Hero();\n    // Print the hero's Hp\n  }\n}",
        expectedOutput: "50"
      }
    }
  },
  {
    id: 10,
    type: 'quiz',
    title: "The Master's Challenge",
    difficulty: "Advanced",
    description: "Test your knowledge of intermediate programming concepts.",
    story: "A master coder challenges you to a duel of wits. 'Show me you understand loops and data structures!'",
    xpReward: 200,
    content: {
      lesson: "You've learned about loops, functions, arrays, and objects/classes. Let's see if you remember how they work.",
      question: "Which of the following is used to repeat a block of code multiple times?",
      options: [
        "An if statement",
        "A variable",
        "A for loop",
        "An array"
      ],
      correctAnswerIndex: 2,
      explanation: "A 'for' loop (or any loop) is specifically designed to execute a block of code repeatedly until a certain condition is met."
    }
  }
];
