//Functions
/*let counter = 0
const interval = setInterval(function() {
    if (counter===10) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
    
}, 1000)*/

//Arrow Function
/*const arrow = (name) => {
    console.log('Hello, ' + name)
}
arrow('Artem')*/

//Parameters
/*const sum = (a = 20, b = a/4) => {
    console.log(a + b)
}
sum()*/

/*function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return (result)
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8)
console.log(res)*/

//Замыкания
function createMe(name) {
    return (function (lastName) {
        console.log(name + ' ' + lastName)
    })
}
const a = createMe('Artem')
console.log(a('Lepeshkin'))
