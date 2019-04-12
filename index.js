"use strict"

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

const divideRegular = divide(1231, 243)

const dividationFloor = Math.random(10 * 6) * divideRegular

const mathPowFloor = Math.pow(dividationFloor, 4)

console.log(divideRegular);
console.log(Math.floor(dividationFloor))
console.log(mathPowFloor);


const dividationCeil = Math.random(5 * 5) * Math.ceil(divide(1231, 243) * 100)
console.log(dividationCeil)