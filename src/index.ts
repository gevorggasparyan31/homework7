// // const primitive: boolean = 200;

// // Falsy values
// // 0, '', null, false, undefined

// // Truthy
// // {}, [], true, -1, 1~, function


// // let employee: object;

// // employee = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     age: 25,
// //     jobTitle: 'Web Developer',
// //     isObject: true
// // };

// // console.log(employee);


// // const skills: (number | string)[] = [5, 'HTML5', 'CSS3', 'JavaScript'];
// // let skills: [number, string] = [5, 'HTML5'];

// // console.log(skills);

// /*
// enum Month {
//     Jan = 'true',
//     Feb = 0,
//     Mar,
//     Apr,
//     May,
//     Jun,
//     Jul,
//     Aug,
//     Sep,
//     Oct,
//     Nov,
//     Dec
// };

// console.log( Month.Jan );
// console.log( Month.May );
// */

// /*
// let hardTypes: any = {};

// console.log( hardTypes );

// hardTypes = [];

// console.log( hardTypes );

// hardTypes = false;

// console.log( hardTypes );

// */

// /*
// let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error

// let buttonType: 'reset' | 'button' | 'submit';
// */

// /*
// interface IPerson {
//     firstName?: string;
//     lastName: string;
//     fn: () => void;
// }

// interface IPerson2 extends IPerson {
//   age?: number;
// }

// class GetFullNameCopy {
//   firstName: string;
//   lastName: string;
//   age: number;

//     constructor( person: IPerson2 ){
//       this.firstName = person.firstName;
//       this.lastName = person.lastName;
//       this.age = person.age;
//     }


//     getAge(){
//       return this.age;
//     }
// }

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50
// };

// const getFullNameCopy = new GetFullNameCopy(person);

// console.log(getFullNameCopy.getAge());
// */

// /*
// function getRandomStringElement<N>(items: N[]): N {
//     const randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }

// console.log(
//   getRandomStringElement(['A', 50, 'C'])
// );
// */


// /*
// console.log(concat(num, str));

// // Interface

// import {
// 	Person,
// 	ExtendedPerson
// } from "./interface";

// function getFullName(person: Person) {
//     return `${person.firstName} ${person.lastName}`;
// }

// let john = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// function getFullNameAndAge(newPerson: ExtendedPerson){
//     return `${newPerson.firstName} ${newPerson.lastName} ${newPerson.age}`;

// }

// console.log(getFullName(john));

// const johnExtended = {...john, age: 25};

// console.log(getFullNameAndAge(johnExtended));


// // Generic type
// // const genericFunc = <T>(x: T):T => x;

// // console.log( genericFunc("String" + " is here.") );
// // console.log( genericFunc(1505 / 150) );
// */

// /*
// function WithFuel(target: typeof Rocket, context?: any): typeof Rocket {
//   if (context.kind === "class") {
//     return class extends target {
//       fuel: number = 50
//       isEmpty(): boolean {
//         return this.fuel == 0
//       }
//       // notEmpty(): boolean {
//       //   return 'NOT_EMPTY'
//       // }
//     }
//   }
// }

// @WithFuel
// class Rocket {
//   fuel: number = 75;
//   isEmpty(){
//     return true;
//   }
// }

// // const rocket = new Rocket()
// // console.log(rocket);
// // console.log(rocket.notEmpty());

// // prints 50
// */



// import {
//   NUMBER_TYPE,
//   STRING_TYPE,
//   NUMBER_OR_STRING
// } from "./type";

// const num: NUMBER_TYPE = 5;
// const str: STRING_TYPE = "SOME_STRING";

// const concat = (a: NUMBER_TYPE, b: STRING_TYPE): NUMBER_OR_STRING => {
//   return a + b;
// }

// console.log(concat(1,"3"));



//Pick

import {
  Person
} from "./interface";

type PersonNameAndAge = Pick<Person, 'name' | 'age'>;

const person: PersonNameAndAge = {
  name: 'John',
  age: 25,
};

type PersonNameAgeAddress = Pick<Person,'name' | 'age' | 'address'>;
const personWithAddress: PersonNameAgeAddress = {
  name: 'John',
  age: 25,
  address: 'Paronyan 25'
};

console.log(person);
console.log(personWithAddress);


//Omit
type PersonWithoutAddress = Omit<Person, 'address'>;

const personOmit: PersonWithoutAddress = {
  name: 'John',
  age: 25,
};
console.log(personOmit);


//Record
type Fruit = 'apple' | 'banana' | 'orange';
type Price = number;

const fruitPrices: Record<Fruit, Price> = {
  apple: 1.5,
  banana: 0.75,
  orange: 0.9,
};

console.log(fruitPrices);


//Partial 
type PartialPerson = Partial<Person>;

const personPartial: PartialPerson = {
  name: 'John',
};

console.log(personPartial);


//Required
type RequiredPerson = Required<Person>;

const personRequired: RequiredPerson = {
  name: 'John',
  age: 25,
  address: '123 Main St',
}

console.log(personRequired);