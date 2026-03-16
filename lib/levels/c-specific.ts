import { Level } from './types';

export const cSpecificLevels: Level[] = [
  {
    id: 16,
    type: 'coding',
    title: "Pointers: The Treasure Map",
    difficulty: "Advanced",
    description: "Learn about memory addresses and pointers in C.",
    story: "In C, you don't just have treasures (variables); you have maps (pointers) that tell you exactly where the treasure is buried in memory.",
    xpReward: 1000,
    content: {
      c: {
        lesson: "A pointer stores the memory address of another variable. Use `&` to get the address of a variable, and `*` to declare a pointer or get the value at an address.\n```c\nint coins = 10;\nint* map = &coins; // map points to coins\nprintf(\"%d\", *map); // Prints 10\n```",
        task: "Create a pointer `ptr` that points to the variable `secret`. Then, print the value of `secret` using the pointer `ptr`.",
        startingCode: "#include <stdio.h>\n\nint main() {\n  int secret = 42;\n  // Create a pointer named ptr pointing to secret\n  \n  // Print the value using the pointer\n  \n  return 0;\n}",
        expectedOutput: "42"
      }
    }
  },
  {
    id: 17,
    type: 'coding',
    title: "Memory Allocation: The Backpack",
    difficulty: "Expert",
    description: "Learn dynamic memory allocation using malloc and free.",
    story: "Sometimes you don't know how big your backpack needs to be until you start your journey. You must ask the system for memory dynamically.",
    xpReward: 1200,
    content: {
      c: {
        lesson: "Use `malloc` (from `stdlib.h`) to request memory during runtime. It returns a pointer to the allocated memory. Always `free` it when done!\n```c\nint* arr = (int*)malloc(3 * sizeof(int));\narr[0] = 5;\nfree(arr);\n```",
        task: "Allocate memory for an array of 2 integers using `malloc`. Set the first element to 10 and the second to 20. Print both, then `free` the memory.",
        startingCode: "#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n  // Allocate memory for 2 integers\n  int* bag = \n  \n  // Set values\n  \n  // Print values (e.g., \"10 20\\n\")\n  \n  // Free memory\n  \n  return 0;\n}",
        expectedOutput: "10 20"
      }
    }
  },
  {
    id: 18,
    type: 'coding',
    title: "Strings in C: The Character Array",
    difficulty: "Expert",
    description: "Understand how strings are represented as null-terminated character arrays in C.",
    story: "In C, words are just a sequence of characters ending with a special invisible marker '\\0'.",
    xpReward: 1100,
    content: {
      c: {
        lesson: "A string in C is an array of characters ending with `\\0`. You can modify individual characters if it's an array.\n```c\nchar word[] = \"Cat\";\nword[0] = 'B';\nprintf(\"%s\", word); // Prints Bat\n```",
        task: "Change the first letter of the string `spell` from 'H' to 'B' to cast a different spell, then print it.",
        startingCode: "#include <stdio.h>\n\nint main() {\n  char spell[] = \"Hocus\";\n  // Change 'H' to 'B'\n  \n  // Print the spell\n  \n  return 0;\n}",
        expectedOutput: "Bocus"
      }
    }
  },
  {
    id: 19,
    type: 'coding',
    title: "Struct Pointers: The Guild Roster",
    difficulty: "Master",
    description: "Learn how to use pointers with structs using the arrow operator.",
    story: "When passing large structs like a Guild Roster, it's faster to pass a map (pointer) rather than copying the whole roster.",
    xpReward: 1500,
    content: {
      c: {
        lesson: "When you have a pointer to a struct, use the arrow operator `->` to access its fields instead of the dot `.` operator.\n```c\nstruct Hero { int hp; };\nstruct Hero h = {100};\nstruct Hero* ptr = &h;\nprintf(\"%d\", ptr->hp);\n```",
        task: "Given a pointer `p` to a `Mage` struct, print their `mana` using the arrow operator.",
        startingCode: "#include <stdio.h>\n\nstruct Mage {\n  int mana;\n};\n\nint main() {\n  struct Mage gandalf = {500};\n  struct Mage* p = &gandalf;\n  \n  // Print mana using pointer p\n  \n  return 0;\n}",
        expectedOutput: "500"
      }
    }
  }
];
