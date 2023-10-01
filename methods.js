
// let arr = [1, 2, 3];
// arr.splice(1,0, '123');
// console.log(arr.slice(2,3)); 

// console.log(arr.at(1));
// console.log(arr[arr.length-3]);


// CONCAT
// const arr1 = ['a', 'b'];
// const arr2 = ['c', 'd'];

// const arr3 = arr1.concat(arr2); //[ 'a', 'b', 'c', 'd' ]
// console.log(arr3);

// SPREAD
// const arr1 = ['a', 'b'];
// const arr2 = [...arr1, 'c', 'd'];

// console.log(arr2); 

// [1, 2, 3].fill(4);               // [4, 4, 4]
// [1, 2, 3].fill(4, 1);            // [1, 4, 4]
// [1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
// [1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
// [1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
// [1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
// [1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
// [1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
// Array(3).fill(4);                // [4, 4, 4]
// [].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// let arr = [3];
// console.log(Array(1).fill(3))

// let gameScore = [100, 120, 90, 350, 420];

// let scorePlayer = Array(gameScore.length).fill(0);
// console.log(scorePlayer);


// CONSTRUCTOR 
// const fruits = ["apple", "banana", "orange"];

// if (fruits.constructor === Array) {
//   console.log("fruits is an array");
// } else {
//   console.log("fruits is not an array");
// }


// const myArray = new fruits.constructor("pear", "kiwi");

// console.log(myArray); // ["pear", "kiwi"]



// Метод reduce() в JavaScript применяется для свертки (аккумуляции) массива в одно значение. Он принимает два аргумента: функцию обратного вызова и начальное значение аккумулятора.

// Функция обратного вызова, передаваемая методу reduce(), принимает четыре аргумента: аккумулятор, текущий элемент массива, индекс текущего элемента и сам массив.

// Вот несколько примеров использования метода reduce():

// Вычисление суммы элементов массива:
// javascript
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15
// Вычисление произведения элементов массива:
// javascript
// const arr = [1, 2, 3, 4, 5];
// const product = arr.reduce((acc, curr) => acc * curr, 1);
// console.log(product); // 120
// Поиск максимального значения в массиве:
// javascript
// const arr = [1, 2, 3, 4, -5];
// const max = arr.reduce((acc, curr) => acc > curr ? acc : curr, -Infinity);
// console.log(max); // 5
// Объединение всех элементов массива в одну строку:
// javascript
// const arr = ['Hello', ' ', 'world', '!'];
// const message = arr.reduce((acc, curr) => acc + curr, '');
// console.log(message); // 'Hello world!'
// В общем, метод reduce() может использоваться для решения различных задач связанных со сверткой массива в одно значение.
