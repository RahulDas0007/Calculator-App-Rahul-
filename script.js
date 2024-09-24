const inputScreen = document.querySelector(".input")
const resultScreen = document.querySelector(".result")
const clearButton = document.querySelector(".clear")
const backButton = document.querySelector(".back")
const sevenButton = document.querySelector(".seven")
const eightButton = document.querySelector(".eight")
const nineButton = document.querySelector(".nine")
const fourButton = document.querySelector(".four")
const fiveButton = document.querySelector(".five")
const sixButton = document.querySelector(".six")
const oneButton = document.querySelector(".one")
const twoButton = document.querySelector(".two")
const threeButton = document.querySelector(".three")
const zeroButton = document.querySelector(".zero")
const doubleZeroButton = document.querySelector(".double-zero")
const dotButton = document.querySelector(".dot")
const equalButton = document.querySelector(".equal")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const divideButton = document.querySelector(".divide")
const multiplyButton = document.querySelector(".multiply")
const darkBtn = document.querySelector(".dark")
const lightBtn = document.querySelector(".light")

clearButton.addEventListener('click',() => { 
    inputScreen.value = ""
    resultScreen.value = ""
 })
backButton.addEventListener('click',() => { 
    inputScreen.value = inputScreen.value.toString().slice(0,-1);
 })

sevenButton.addEventListener('click',() => { 
    inputScreen.value += sevenButton.value
 })
eightButton.addEventListener('click',() => { 
    inputScreen.value += eightButton.value
 })
nineButton.addEventListener('click',() => { 
    inputScreen.value += nineButton.value
 })
fourButton.addEventListener('click',() => { 
    inputScreen.value += fourButton.value
 })
fiveButton.addEventListener('click',() => { 
    inputScreen.value += fiveButton.value
 })
sixButton.addEventListener('click',() => { 
    inputScreen.value += sixButton.value
 })
oneButton.addEventListener('click',() => { 
    inputScreen.value += oneButton.value
 })
twoButton.addEventListener('click',() => { 
    inputScreen.value += twoButton.value
 })
threeButton.addEventListener('click',() => { 
    inputScreen.value += threeButton.value
 })
plusButton.addEventListener('click',() => { 
    inputScreen.value += plusButton.value
 })
minusButton.addEventListener('click',() => { 
    inputScreen.value += minusButton.value
 })
divideButton.addEventListener('click',() => { 
    inputScreen.value += divideButton.value
 })
multiplyButton.addEventListener('click',() => { 
    inputScreen.value += multiplyButton.value
 })
zeroButton.addEventListener('click',() => { 
    inputScreen.value += zeroButton.value
 })
doubleZeroButton.addEventListener('click',() => { 
    inputScreen.value += doubleZeroButton.value
 })
dotButton.addEventListener('click',() => { 
    inputScreen.value += dotButton.value
 })

equalButton.addEventListener('click',() => { 
    try {
      resultScreen.value = new Intl.NumberFormat().format(eval(inputScreen.value));
    } catch (error) {
      resultScreen.value = "Error";
    }
 })
 darkBtn.style = "opacity: 0.1";
darkBtn.addEventListener('click',() => { 
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    darkBtn.style = "opacity: 0.1";
    lightBtn.style = "opacity: 1";

    window.localStorage.setItem('mode','dark')

 })
lightBtn.addEventListener('click',() => { 
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    darkBtn.style = "opacity: 1";
    lightBtn.style = "opacity: 0.1";


    window.localStorage.setItem('mode','light')
})


 const mode = window.localStorage.getItem('mode'); 

 if(mode == 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    darkBtn.style = "opacity: 0.1";
    lightBtn.style = "opacity: 1";
 } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    darkBtn.style = "opacity: 1";
    lightBtn.style = "opacity: 0.1";

 }