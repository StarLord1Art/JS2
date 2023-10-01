//const inter = '56'
//const floater = '56.56'
//console.log(parseInt(inter)+10)
//console.log(parseFloat(floater)+10)

//BigInt
//console.log(900719925474099199999n - 9007199254740991999n)
//console.log(10n - BigInt(4))
//console.log(5n / 2n) // =2n   так как 2.5 это float, поэтому BigInt "вырезает" цифры после точки
//console.log(Math.random())  

//Example
function getRandom (min, max) {
    return (Math.round(Math.random() * (max-min) + min)
    
    )
}
console.log(getRandom(10, 20))

//String
/*const u = 'Artem'
const age = 16
const output = `Hello everyone! My name is ${u} and my age is ${age} years. `
console.log(output)*/

/*function logPerson (s, name, age) {
    return(`${s[0]}${name}${s[1]}${age}${s[2]}`)
}
const na = 'Artem'
const age = 16

const output = logPerson`Name: ${na} Age: ${age}!`
console.log(output)*/