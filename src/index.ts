
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