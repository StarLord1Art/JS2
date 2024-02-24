//Objects
const person = {
  name: "Artem",
  lastName: "Lepeshkin",
  age: 16,
  arr: [1, 2, 3],
  greet: function () {
    console.log("You get hello from greet!");
  },
  key: "hey",
  ["key_" + (3 + 2)]: "computed key", // key_5
  info() {
    console.info("INFO about a person called " + this.name);
  },
};
//console.log(person.greet())
//console.log(person['key_5'])

//delete person['key_5']
//console.log(person)

//Деструктуризация объекта
const { name, age: personAge, greet } = person;
//console.log(name, personAge, greet())

const keys = Object.keys(person);
//console.log(keys)
/*keys.forEach((key) => {
    console.log('KEY: ' + key)
    console.log('VALUE: ' + person[key])
})*/

//Context
//person.info()
const logger = {
  keys() {
    console.log(Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`${key} : ${this[key]}`);
    });
  },
  withParams(top, between, bottom) {
    if (top) {
      console.log("---START---");
    }
    Object.keys(this).forEach((key, index, arr) => {
      console.log(`${key} : ${this[key]}`);
      if (between && index !== arr.length - 1) {
        console.log("---IN PROGRESS---");
      }
    });
    if (bottom) {
      console.log("---END---");
    }
  },
};
const bound = logger.keys.bind(person); //метод bind привязывает метод keys к определённому объекту, т.е. вместо this мы помещаем какой-то конкретный объект
//bound()                                  //метод bind возвращает функцию, поэтому его надо помещать в переменную

//logger.keys.call(person)                 //метод call делает то же самое, что и bind, только не возвращает функцию
//logger.keysAndValues.call(person)
//logger.withParams.call(person, true, true, true)
//logger.withParams.apply(person, [true, true, true])     //метод apply делает то же самое, что и call, только принимает в себя лишь два параметра, второй из которых всегда массив

// Глубокое клонирование объекта
let obj = { one: 1, two: 2, three: 3 };

// let obj2 = JSON.stringify(obj)
// obj2 = JSON.parse(obj2)

let obj2 = structuredClone(obj);

obj["four"] = 4;

// console.log(obj);
// console.log(obj2);

//CLASSES
class Animal {
  constructor(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello from ${this.name}`);
  }
}

let dog = new Animal("dog", "BenTen", 13);
// dog.sayHello();

class Rabbit extends Animal {
  constructor(type, name, age) {
    super(type, name, age);
    this.rabbitJump = false;
    this.isBlind = true;
  }
  isJumping(flag) {
    this.rabbitJump = flag;
  }
  Blind(flag) {
    this.isBlind = flag;
  }
}

let rabbit = new Rabbit("rabbit", "Peter", 21);
rabbit.isJumping(true);
rabbit.Blind(false);
// rabbit.sayHello();

// Promise
const getRnMCharacter = async (id) => {
  if (id === 0) {
    throw "Invalid id";
  }

  const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await result.json();

  return data;
};
// getRnMCharacter(3)
//   .then((res) => console.log(res))
//   .catch();

Promise.all([getRnMCharacter(1), getRnMCharacter(2), getRnMCharacter(3)])
  .then((responses) =>
    console.log(responses.forEach((el) => console.log(el.name)))
  )
  .catch((error) => console.log(error));
