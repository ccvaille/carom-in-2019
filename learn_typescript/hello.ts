function sayHello(person: string) {
  return `Hello, ${person}`;
}

let user = 'ttt';
console.log(sayHello(user));

// let createdByNewBoolean: boolean = new Boolean(1);

// console.log(createdByNewBoolean)

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 1,
  name: 'Tom',
  gender: 'male'
};

// tom.id = 89757;

interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 3, 3, 5];
console.log(fibonacci)

let mySum: (a: number, b: number) => number = function (x: number, y: number): number {
  return x + y;
};

let xcatliu: any[] = [1, 'Xcat Liu'];

// class
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}
let cat = new Cat('Tom');