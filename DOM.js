//window.alert('Hello!')
const heading = document.getElementById('hello')
//console.dir(data)
const heading_1 = document.querySelector('#hey')
//console.dir(heading_1)
const heading_2 = document.querySelector('#hi')
//console.dir(heading_2)
function addStyles (node, text, color = 'red', fontSize) {
    node.style.width = '100%'
    node.style.display = 'block'
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}
setTimeout(() => {
    addStyles(heading, 'Hello from JS!')
}, 1500)
setTimeout(() => {
    addStyles(heading_1, 'What`s up man?', 'white')
}, 2000)
setTimeout(() => {
    addStyles(heading_2.querySelector('a'), 'Lets practice', 'blue', '3rem')
}, 3000)

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'purple'
        heading.style.backgroundColor = 'aqua'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}
heading_1.addEventListener('dblclick', () => {
    if (heading_1.style.color === 'white') {
        heading_1.style.color = 'yellow'
        heading_1.style.backgroundColor = 'grey'
    } else {
        heading_1.style.color = 'white'
        heading_1.style.backgroundColor = 'black'
    }
}) 
