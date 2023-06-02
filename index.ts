// Variables
let num1 = 24;
let num2: string;
let numOrString: number | string

// Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau: string[] = []
let tableau1: (number | boolean)[] = []

// Objets

interface Player {
  id: number,
  name: string,
  jersey?: number
}

const zidane: Player = {
  id: 0,
  name: "Zidane",
  jersey: 10
}

// Classes
class Singer {
  id: number,
  name: string,
  alive?: boolean

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id
    this.name = name
    this.alive = alive
  }
}

const prince = new Singer(0, 'Prince')
// console.log(prince);

const sayMyName = (name: string) => {
  console.log(`Bonjour ${name}`);
}

// void => nothing return
const ageOfCapitaine = (age: number | string, size?: number): void => {
  if (size) {
    console.log(`La taille du capitaine est de ${size}cm et il est agé de ${age}`);
  } else {
    console.log(`Le capitaine est agé de : ${age} ans`);
  }
}

// Enue & Turple
enum Role { ADMIN, PRENIUM, BASIC }

console.log(Role.PRENIUM);

interface User {
  name: string,
  attributes: [number, string],
  role: Role
}

const user1:User = {
  name: "Julien",
  attributes: [42, 'author'],
  role: Role.ADMIN
}

if (user1.role === Role.ADMIN) {
  console.log("connexion Admin");
  
}