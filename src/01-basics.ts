/*
    ===== Código de TypeScript =====
*/

// Object and arrays

let skills: string[] = ["programming", "sleep", "eat"];
interface Character {
  name: string;
  hp: number;
  skills: string[];
  city?: string; //'?' means optional
}
const manuela: Character = {
  name: "Lita",
  hp: 500,
  skills: ["programming", "sleep", "eat"],
};
manuela.city = "Seville";

// class Character {
//   name: string;
//   hp: number;
//   skills: string[];
//   city?: string; //'?' means optional
//   constructor(name: string, hp: number, skills: string[], city?: string) {
//     this.name = name,
//     this.hp = hp,
//     this.skills = skills,
//     this.city = city
//   }
// }

// const manuela2 = new Character('Lita', 500, ["programming", "sleep", "eat"])

type Operation = "multiply" | "add" | "divide"; //define our own types (ENUM/Java)

// const calculator = (a: number, b:number, op: Operation): number => {
//     switch(op) {
//         case 'multiply':
//             return a * b;
//         case 'add':
//             return a + b;
//         case 'divide':
//             if (b === 0) return 'Can't divide by 0;
//             return a / b;
//         default:
//         return 'Operation unknow';
//     }
// }
