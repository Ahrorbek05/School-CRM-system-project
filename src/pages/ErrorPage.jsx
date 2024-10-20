import React from 'react'

function ErrorPage() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-6xl font-extrabold animate-bounce">404</h1>
        <p className="text-white text-2xl mt-4 font-semibold">
          Page Not Found!
        </p>
        <p className="text-white text-lg mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          className="mt-8 px-6 py-2 bg-white text-indigo-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          onClick={() => window.location.href = '/'}
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
// function factorial(n){
//   if ( n === 1){
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120


// construktor = function

// function Car(name, color){
//   this.name = name;
//   this.color = color;
//   this.Airbag = true;
// }

// const bmw = new Car('bmw', 'green')
// console.log(bmw); // name = bmw, color = red, airbag: true

// callback

// function edu(subject, callback){
//   console.log(`I'm learning ${subject}`);
//   callback();
// }

// function done(){
//   console.log('done');
// }

// done('Javascript', done);

// function Car(name, color){
//   this.name = name;
//   this.color = color;
//   this.isAirbag = true;
// }

// const bmw = new Car('name', 'green');
// console.log(bmw);

// map//
// const Number = [1, 2, 3, 4, 5, 6, 7, 8];
// const Number1 = Number.map(function(num){
//   return num  * 2;
// })
// console.log(Number1);

// reduce//
// const salom = [1, 2, 3, 4, 5, 6, 7, 8]
// const bye = salom.reduce(function(a, b){
//   return a + b;
// });
// console.log(bye);

// Iterablesga misol//
// const numbers = [10, 20, 30];

// // for...of bilan iteratsiya
// for (let number of numbers) {
//   console.log(number); // 10, 20, 30
// }

// // Spread operator yordamida iteratsiya
// const newNumbers = [...numbers];
// console.log(newNumbers); // [10, 20, 30]

// class 

// bu bir yoki bir nechta ob'ektlarni yaratish uchun ishlatiladigan shablon.
// class Person {
//   // Konstruktor metodi obyekt yaratish uchun ishlatiladi
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Metodlar class ichida aniqlanadi
//   sayHello() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// // Yangi ob'ekt yaratish
// const person1 = new Person('John', 30);
// person1.sayHello(); // "Hello, my name is John and I am 30 years old."

// Hoisting

// var myVar; // undefined
// console.log(myVar); undefined;
// myVar = 5;
// console.log(myVar); // 5

// oddiy function
// function oddiyFunksiya(x) {
//   return x * x + 3 * x + 5;
// }

// console.log(oddiyFunksiya(2));  // 15

// destruction assigment
// const fruits = ["apple", "banana", "cherry"];

// // Destructuring yordamida massivdagi qiymatlarni ajratamiz
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);  // "apple"
// console.log(secondFruit);  // "banana"
// console.log(thirdFruit);  // "cherry"

// Higher-order Function

// function greeting(name) {
//   return `Hello, ${name}!`;
// }

// function processUserInput(callback) {
//   const name = "John";
//   console.log(callback(name)); // `greeting` funksiyasini chaqiryapti
// }

// // Higher-order function: `processUserInput` boshqa funksiyani qabul qilmoqda
// processUserInput(greeting);

// Recursive function

// function factorial(n){
//   if (n === 1){
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// callback = function

// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback(); // callback funksiyani chaqiradi
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);


