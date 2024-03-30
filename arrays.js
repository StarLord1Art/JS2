//Массивы
//const arr = ['artem', 'ms_duck', 16, 21, true, false, null, undefined, {1:1, 2:2, 3:3}]
//arr.push('hello')         //кладёт новый элемент массива в конец
//arr.unshift(777)          //кладёт новый элемент массива в начало
//arr.shift()               //вырезает из массива первый элемент
//arr.pop()                 //вырезает из массива последний элемент
//console.log(arr)
//console.log(arr.reverse())
//console.log(arr.indexOf(16))

/*const arr_2 = [
    {name: 'Degory', age: 26},
    {name: 'Den', age: 6},
    {name: 'Degorianskiy', age: 58}
]*/

/*for (const person of arr_2) {
    if (person.name === 'Den') {
        console.log(person)
    }
}*/

/*console.log(arr_2.findIndex((person) => {
    return(person.age === 6)
}))*/

//const arr = ['artem', 'ms_duck', 16, 21, true, false, null, undefined, {1:1, 2:2, 3:3}]
//console.log(arr.includes(16))             //проверяет наличие элемента в массиве
/*const arr_1 = ['pedro', 'huleo', 'sancho', 'don', 'mercedes']
const upper = arr_1.map((nome) => {
    return (nome.toUpperCase())
})
console.log(upper)*/

// map создает Новый массив, заполненный результатами вызова предоставленной функции на каждый элемент в вызывающем массиве

//const nums = [1, 2, 4, 5, 6, 7, 8, 9]
/*const nums_1 = nums.map((numer) => {
    return (numer**2)
})                                             // map и negativeNums возвращают Новый массив, поэтому ИХ нужно помещать в отдельную переменную
const nums_2 = nums_1.negativeNums((numer_1) => {
    return (numer_1 > 20)
})
console.log(nums_2)*/

//Task 1
//const tsk = 'Artem'
//const tsk_1 = tsk.split('').reverse().join('')      // split разбивает строку на отдельные элементы, join собирает строку
//console.log(tsk_1)

// const arr_2 = [
//   { name: "Degory", age: 26 },
//   { name: "Den", age: 6 },
//   { name: "Degorianskiy", age: 58 },
// ];

/*const allAges = arr_2.negativeNums((person) => {return(person.age > 18)}).reduce((acc, person) => {
    acc += person.age
    return(acc)
}, 0)                       // reduce приводит все элементы массива к одному значению
console.log(allAges)*/

// arr_2.splice(2, 0, "Degoriey"); // splice помещает новый элемент в массив, не изменяя и не удаляя уже существующие элементы
// console.log(arr_2)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//   sum += arr[index];
// }
// console.log(sum)

// AT
// console.log(arr.at(-3))
// console.log(arr.at(7))

// SPREAD
// let array = [1, 2, 3, 4];
// let array2 = [...array, "a", "b", "c", "d"];
// console.log(array2)

// CONCAT
// let array3 = [1, 2, 3, 4];
// let array4 = ["a", "b", "c", "d"];
// let array5 = array3.concat(array4);
// console.log(array5);

// let names = ["Hofstadter", "Cooper", "Wolowitz", "Koothrappali"];
// let names2 = names.sort().reverse();
// console.log(names2);

// ЗАДАЧИ

let a = ["Побег из Шоушенка", "Зеленая миля", "Форрест Гамп", "1+1", "Начало"];

let b = a.slice(2, 4);
// console.log(b);

let c = [1, 2, 3, 4, 5];
c.splice(1, 3, 10, 20, 30);
c.splice(1, 3, 6, 7);
// console.log(c);

// let d = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// let n = d.sort().negativeNums((h, g) => {
//   return g === d.indexOf(h);
// });
// console.log(n);

const users = [
  { name: "John", age: 26, registrationDate: new Date("2022-01-15") },
  { name: "Alice", age: 32, registrationDate: new Date("2021-10-20") },
  { name: "Bob", age: 22, registrationDate: new Date("2022-04-05") },
  { name: "Mary", age: 30, registrationDate: new Date("2022-02-28") },
  { name: "Tom", age: 28, registrationDate: new Date("2022-03-10") },
];
users.sort((k, m) => m.age - k.age);
// console.log(users);

// let nick = ["John", "Jane", "Bob", "Alice", "Charlie"];
// nick.forEach((item) => {
//   return console.log(`Hello, ${item}`);
// });

const users2 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 35 },
  { name: "Charlie", age: 28 },
];

const users3 = users2.map((item) => {
  return item.name;
});
// console.log(users3);

const numbers = [2, 4, 6, 8, 10];
// console.log(numbers.every((n) => n % 2 === 0));

const users4 = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Bob", age: 22, gender: "male" },
  { name: "Mary", age: 27, gender: "female" },
];
// const users5 = users4.negativeNums(
//   (user) => user.age <= 25 && user.gender === "male"
// );
// console.log(users5);

const employees = [
  { name: "John", salary: 5000, productivity: 150 },
  { name: "Jane", salary: 6000, productivity: 80 },
  { name: "Bob", salary: 4000, productivity: 250 },
  { name: "Mary", salary: 7000, productivity: 180 },
];

let result = employees.reduce((acc, item) => {
  let bonus = 0;
  if (item.productivity >= 100 && item.productivity <= 200) {
    bonus = item.salary * 0.1;
  } else if (item.productivity > 200) {
    bonus = item.salary * 0.2;
  }
  return acc + bonus;
}, 0);

// console.log(result);

const students = [
  { name: "John", age: 20 },
  { name: "Sarah", age: 19 },
  { name: "Bob", age: 17 },
  { name: "Alice", age: 21 },
];
// console.log(students.some((item) => item.age < 18));

const users6 = [
  { name: "John", email: "john@example.com" },
  { name: "Sarah", email: "sarah@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Alice", email: "alice@example.com" },
];

function user(email) {
  let result = users6.find((item) => {
    if (item.email === email) {
      return item;
    }
  });
  return result;
}

// console.log(user("john@example.com"));
// console.log(user("bob@example.com"));

let studentGrades = [82, 91, 75, 98, 87, 92];
// console.log(
//   studentGrades.findIndex((number) => number === Math.max(...studentGrades))
// );

let availableProducts = ["футболка", "джинсы", "платье", "шляпа", "туфли"];
let productToCheck = "платье";
let result2 = availableProducts.includes(productToCheck);
// console.log(result2);

const numbers2 = [1, 2, 3, 4, 5, 6];

function number(arr) {
  arr.forEach((num, i) => num % 2 !== 0 && arr.fill(0, i, i + 1));
  return arr;
}

// console.log(number(numbers2));

// if (num % 2 !== 0) {
//   arr.fill(0, index, index + 1);
// }
// num % 2 !== 0 && arr.fill(0, index, index + 1);

const nestedArray = [1, [2, [3, 4], 5], 6];

function flat(arr) {
  let arr2 = arr.flat(Infinity);
  return arr2;
}

// console.log(flat(colors));

const colors = [["красный", "синий"], ["зеленый", "желтый"], ["оранжевый"]];

let colors2 = colors.flatMap((color) => color, Infinity);

// console.log(colors2);

const numbers6 = [1, 2, 3, 4, 5];

let numbers7 = numbers6.join(",");

// console.log(numbers7);

const students3 = [
  { name: "Алексей", grade: 85 },
  { name: "Екатерина", grade: 92 },
  { name: "Иван", grade: 78 },
  { name: "Мария", grade: 88 },
  { name: "Петр", grade: 95 },
];
const threshold = 90;

// let students4 = students3
//   .negativeNums((student) => student.grade > threshold)
//   .map((student) => student.name)
//   .join(", ");

// console.log(students4);

const amounts = [1000, 2000, 3000, 4000, 5000];

function formatCurrency(arr) {
  let arr2 = [];
  arr2.push(arr.toLocaleString("en-IN"));
  return arr2;
}

// console.log(formatCurrency(amounts));

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

function getProperties(obj) {
  return Object.values(obj);
}

// console.log(getProperties(person));

const arr = [1, 2, 3, 2, 4, 1, 5, 1];

function countDuplicates(arr) {
  let obj = {};
  let count = 0;

  arr.forEach((num, i) => {
    if (arr.indexOf(num) !== i) {
      // console.log(Object.entries(obj));
      count++;
      obj[num] = count;
    }
  });

  return obj;
}

// console.log(countDuplicates(arr));

const numbers8 = [5, -3, 10, -8, 2, -1];

function negativeAndSortedNums(arr) {
  return arr.filter((num) => num < 0).sort((a, b) => b - a);
}

// console.log(negativeAndSortedNums(numbers8));

const names = ["Alice", "Bob", "Charlie", "David"];

function namesLength(arr) {
  return arr.map((item) => item.length);
}

// console.log(namesLength(names));

const numbers9 = [1, 2, 3, 4, 5, 6];

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// console.log(evenNumbers(numbers9));

let arr2 = [1, 2, 3, 4, true, { 1: 1 }, 5, 6, 7];

let sum = arr2.reduce((acc, num) => {
  if (typeof num === "number") {
    return acc + num;
  } else {
    return acc;
  }
}, 0);

// console.log(sum);

const string = "Привет, как дела?";

function stringToArray(str) {
  let arr = Array.from(str.split(" "));
  return arr;
}

// console.log(stringToArray(string));

const arr1 = [1, 2, 3];
const arr3 = "Привет";

function checkArray(arr) {
  if (Array.isArray(arr)) {
    return "Массив";
  } else {
    return "Не массив";
  }
}

// console.log(checkArray(arr1));
// console.log(checkArray(arr3));

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
  let arr = Array.of(arr1, arr2).flat(Infinity);
  return arr;
}

// console.log(mergeArrays(arr4, arr5));

const arr6 = [1, 2, 3, 4, 5];

function copyArray(arr, target, start, end) {
  arr.copyWithin(target, start, end);
  return arr;
}

// console.log(copyArray(arr6, 0, 2, 4));

const arr7 = [1, 2];
const arr8 = [3, 4];
const arr9 = [5, 6];

function concatArrays(arr1, arr2, arr3) {
  let arr = arr1.concat(arr2, arr3);
  return arr;
}

// console.log(concatArrays(arr7, arr8, arr9));

const arr10 = ["Tshirt", "Jeans", "dress", "hat", "Shoes"];

let studentAllGrades = [82, 91, 75, 98, 87, 92];

function getMaxGrade(grades) {
  let maxGrade = Math.max(...grades);
  let index = grades.findIndex((grade) => grade === maxGrade);
  return index;
}

// console.log(getMaxGrade(studentAllGrades));

const arr11 = [1, 2];
const arr20 = [3, 4];
const arr30 = [5, 6];

function concatArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
}

// console.log(concatArrays(arr11, arr20, arr30));

function maxSum(arr) {
  let result2 = [];
  let arrCopy = [...arr];

  let result = arrCopy.sort((a, b) => b - a);

  let max = result[0];
  let max2 = result[1];

  let index = arr.findIndex((num) => num === max);
  let index2 = arr.findIndex((num) => num === max2);

  result2 = [index, index2];
  return result2;
}

// console.log(maxSum(studentAllGrades));

let nums = [5, 2, 7, 10, 9, 4, 3, 6, 1, 8];

let res = nums.filter((num) => num % 2 === 0);
let res2 = res.sort((a, b) => a - b);

let res3 = nums.filter((num) => num % 2 !== 0);
let res4 = res3.sort((a, b) => a - b);

let res5 = res2.concat(res4);
// console.log(res5);

let nums1 = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(arr) {
  arr.reverse();
  return arr;
}

// console.log(reverseArray(nums1));

let products = [
  { name: "Телефон", price: 1000 },
  { name: "Ноутбук", price: 2000 },
  { name: "Планшет", price: 500 },
];

function increasePrice(arr) {
  return arr.map((item) => item.price * 1.1);
}

// console.log(increasePrice(products));

let numbers1 = [1, 2, 3, 4, 5];

function Pow(arr) {
  return arr.map((item) => Math.pow(item, 2));
}

// console.log(Pow(numbers1));

const students1 = ["Алексей", "Мария", "Иван", "Олег", "Елена"];

function lengthControl(arr, length) {
  return arr.filter((name) => name.length > length);
}

// console.log(lengthControl(students1, 5));

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function Reducer(arr) {
  return arr.flat(Infinity).reduce((acc, num) => acc + num, 0);
}

// console.log(Reducer(array));

let counter = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  for (let g = 0; g < element.length; g++) {
    const el = element[i];
    counter += el;
  }
}

// console.log(counter);

let arr15 = [4, 2, 1, 4, 3, 2];

function filteredAndSortedNums(arr) {
  return arr
    .filter((num, i) => i === arr.findIndex((n) => n === num))
    .sort((a, b) => b - a);
}

// console.log(filteredAndSortedNums(arr15));

function removeDuplicatesAndSort(arr) {
  // Удаляем повторяющиеся элементы из массива
  let uniqueArr = Array.from(new Set(arr));

  // Сортируем массив в порядке убывания
  let sortedArr = uniqueArr.sort((a, b) => b - a);

  return sortedArr;
}

// Пример использования:
let arr17 = [4, 2, 1, 4, 3, 2];
let result10 = removeDuplicatesAndSort(arr17);
// console.log(result10); // [4, 3, 2, 1]

let numbers10 = [2, -4, 6, 8, -10, 12];

function positiveNumbersSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}

// console.log(positiveNumbersSum(numbers10));

const students10 = [
  { name: "Алексей", math: 80, history: 75, literature: 90 },
  { name: "Ольга", math: 95, history: 85, literature: 80 },
  { name: "Иван", math: 70, history: 60, literature: 75 },
];

function figureOutAverageScore(arr) {
  let result = [];

  let mathResult = arr.reduce((acc, item) => acc + item.math, 0);
  let mathAverageResult = mathResult / arr.length;
  result.push({ math: mathAverageResult });

  let historyResult = arr.reduce((acc, item) => acc + item.history, 0);
  let historyAverageResult = historyResult / arr.length;
  result.push({ history: historyAverageResult });

  let literatureResult = arr.reduce((acc, item) => acc + item.literature, 0);
  let literatureAverageResult = literatureResult / arr.length;
  result.push({ literature: literatureAverageResult });

  return result;
}

// console.log(figureOutAverageScore(students10));

const students12 = [
  { name: "Алексей", age: 20, averageGrade: 4.5 },
  { name: "Мария", age: 19, averageGrade: 4.9 },
  { name: "Иван", age: 22, averageGrade: 4.8 },
  { name: "Елена", age: 21, averageGrade: 4.6 },
];

function getMaxAverageGrade(arr) {
  return arr.reduce((prevItem, item) => {
    if (item.averageGrade > prevItem.averageGrade) {
      return item;
    }
    return prevItem;
  });
}

// console.log(getMaxAverageGrade(students12).name);

const fruits = ["apple", "banana", "orange", "kiwi"];

// function capitalizeFruits(fruits) {
//   return fruits.map((fruit) => {
//     let a = fruit.split("");
//     a[0] = a[0].toUpperCase();
//     return a.join("");
//   });
// }

function capitalizeFruits(fruits) {
  return fruits.map((fruit) => fruit.charAt(0).toUpperCase() + fruit.slice(1));
}

// console.log(capitalizeFruits(fruits));

const metroLines = [
  { line: "Сокольническая", stations: 20 },
  { line: "Замоскворецкая", stations: 16 },
  { line: "Арбатско-Покровская", stations: 26 },
  { line: "Филевская", stations: 13 },
  { line: "Кольцевая", stations: 12 },
  { line: "Калужско-Рижская", stations: 35 },
  { line: "Таганско-Краснопресненская", stations: 22 },
  { line: "Калининская", stations: 24 },
  { line: "Серпуховско-Тимирязевская", stations: 25 },
  { line: "Люблинско-Дмитровская", stations: 27 },
  { line: "Каховская", stations: 6 },
  { line: "Бутовская", stations: 7 },
];

function getStationsSum(arr) {
  return arr.reduce((acc, item) => acc + item.stations, 0);
}

// function getStationsSum(arr) {
//   let acc = 0;
//   arr.forEach((item) => (acc += item.stations));
//   return acc;
// }

// console.log(getStationsSum(metroLines));

// function getStationsNames(arr) {
//   let names = [];
//   arr
//     .filter((item) => item.stations > 20)
//     .forEach((item) => names.push(item.line));
//   return names;
// }

function getStationsNames(arr) {
  return arr.filter((item) => item.stations > 20).map((item) => item.line);
}

// console.log(getStationsNames(metroLines));

const sights = [
  { name: "Эрмитаж", year: 1764, visitors: 4.2 },
  { name: "Петропавловская крепость", year: 1703, visitors: 2.8 },
  { name: "Церковь Спаса на Крови", year: 1907, visitors: 3.2 },
  {
    name: "Музей Русского музыкального инструмента",
    year: 1973,
    visitors: 0.1,
  },
  { name: "Кунсткамера", year: 1714, visitors: 0.5 },
  { name: "Музей артиллерии", year: 1703, visitors: 0.3 },
  { name: "Музей истории Санкт-Петербурга", year: 1938, visitors: 0.4 },
  { name: "Зоологический музей", year: 1832, visitors: 0.2 },
  { name: "Музей истории религии", year: 1932, visitors: 0.1 },
  { name: "Музей-квартира А.С. Пушкина", year: 1830, visitors: 0.3 },
];

function sortedSights(arr) {
  return arr.sort((a, b) => b.visitors - a.visitors);
}

// console.log(sortedSights(sights));

const apartments = [
  { name: "Apartment 1", price: 1000000, rooms: 2 },
  { name: "Apartment 2", price: 2000000, rooms: 3 },
  { name: "Apartment 3", price: 1500000, rooms: 1 },
  { name: "Apartment 4", price: 2500000, rooms: 4 },
];

function filterApartments(arr, maxPrice, minRooms) {
  return arr.filter((item) => item.price <= maxPrice && item.rooms >= minRooms);
}

// console.log(filterApartments(apartments, 3000000, 4));

const events = [
  { название: "Концерт", тип: "музыка" },
  { название: "Выставка", тип: "искусство" },
  { название: "Спектакль", тип: "театр" },
  { название: "Фестиваль", тип: "разное" },
  { название: "Киносеанс", тип: "кино" },
];

function filterEventsByType(events, type) {
  return events.filter((item) => item.тип === type);
}

// console.log(filterEventsByType(events, "кино"));

const events2 = [
  { название: "Концерт", тип: "музыка", дата: "2023-11-01" },
  { название: "Выставка", тип: "искусство", дата: "2023-10-29" },
  { название: "Спектакль", тип: "театр", дата: "2023-11-03" },
  { название: "Фестиваль", тип: "разное", дата: "2023-11-02" },
  { название: "Киносеанс", тип: "кино", дата: "2023-10-20" },
];

function getUpcomingEvents(events) {
  return events
    .filter((item) => new Date(item.дата) >= new Date())
    .sort((a, b) => new Date(a.дата) - new Date(b.дата));
}

// console.log(getUpcomingEvents(events2));

const users5 = ["John", "Jane", "Bob", "Alice", "Charlie"];

for (let i = 0; i < users5.length; i++) {
  const element = users5[i];
  // console.log("Hello, " + element);
}

const users7 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 35 },
  { name: "Charlie", age: 28 },
];

let newUsers7 = users7.map((user) => user.name);
// console.log(newUsers7);

const numbers3 = [2, 4, 6, 8, 10];

function checkNumbers(arr) {
  return arr.every((num) => num % 2 === 0);
}

// console.log(checkNumbers(numbers3));

const arr50 = [1, 2, 3, 2, 4, 1, 5, 1];

function countDuplicates(arr) {
  let obj = {};
  arr.forEach((num) => (obj[num] = (obj[num] || 0) + 1));
  return obj;
}

// function countDuplicates(arr) {
//   const duplicates = {};

//   for (const [key, value] of arr.entries()) {
//     if (arr.indexOf(value) !== key) {
//       if (duplicates[value]) {
//         duplicates[value]++;
//       } else {
//         duplicates[value] = 1;
//       }
//     }
//   }

//   return duplicates;
// }

// console.log(countDuplicates(arr50));

const person10 = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

function getProperties(person) {
  return Object.keys(person);
}

const properties = getProperties(person10);
// console.log(properties);

let availableProducts1 = ["футболка", "джинсы", "платье", "шляпа", "туфли"];
let productToCheck1 = "платье";

function check(arr, product) {
  if (arr.includes(product)) {
    return "ДА";
  } else {
    return "НЕТ";
  }
}

// console.log(check(availableProducts1, productToCheck1));

let a10 = [20, 30, 53, 52, 76, 89, 64, 21];
let a11 = a10.map((num) => {
  // console.log(num);
  return num + 1;
});
// console.log(a11);
// console.log(typeof null);

const library = [
  { title: "1984", author: "George Orwell", genre: "Триллер" },
  { title: "Убить пересмешника", author: "Harper Lee", genre: "Роман" },
  { title: "Великий Гэтсби", author: "F. Scott Fitzgerald", genre: "Роман" },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Триллер" },
  { title: "Над пропастью во ржи", author: "J.D. Salinger", genre: "Роман" },
];

function filteredByGenre(arr, genre) {
  return arr.filter((item) => item.genre === genre);
}

function getAllBookTitles(arr) {
  return arr.map((item) => item.title);
}

function getAllUnicAuthors(arr) {
  let arr2 = [];
  arr.forEach((item) => {
    if (!arr2.includes(item.author)) {
      arr2.push(item.author);
    }
  });
  return arr2;
}

// console.log(filteredByGenre(library, "Роман"));
// console.log(getAllBookTitles(library));
// console.log(getAllUnicAuthors(library));
