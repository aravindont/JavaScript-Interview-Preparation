// map vs forEach
/** map method returns a new array from the existing array , after applying the callback function to each element of the existing array */

// let nums = [1, 33, 44, 55];
// const mapResult = nums.map((element) => {
//   return element + 2;
// });
// console.log(mapResult);

/**The forEach method on the other hand does not return anything. It is just used to iterate the elements of an array */

// let nums = [1, 33, 44, 55];

// const forEachResult = nums.forEach((element) => {
//   return element + 2;
// });

// console.log(forEachResult);

// let arr = [true, 1, "Rabi", 3.3];
// console.log(typeof arr);

/**The other difference between these two methods is based on chaining.
 *  We can  chain other array methods with the map method as it has a return value of an array */

// let nums = [1, 33, 44, 55];

// const mapResult = nums
//   .map((ele) => {
//     return ele + 2;
//   })
//   .filter((ele) => {
//     return ele > 3;
//   });
// console.log(mapResult);

/**While, this is not possible with forEach, as it does not return anything.
 * Instead, chaining other array methods with forEach results in a TypeError */

// let nums = [1, 33, 44, 55];

// const forEachResult = nums
//   .forEach((ele) => {
//     return ele + 2;
//   })
//   .filter((ele) => {
//     return ele + 3;
//   });

// console.log(forEachResult);

// Map Method does not mutate original array but forEach method mutates the original array

// const arr = [2, 4, 6, 8, 10];

// const mapRes = arr.map((ele) => {
//   return ele + 2;
// });

// console.log(arr, mapRes);

// const arr = [8, 7, 6, 5];

// arr.forEach((ele) => {
//   if (ele % 2 === 0) {
//     arr.pop();
//   }
// });

// console.log(arr);

//************************************************
//Prototypes in JS

// const myObject = {
//   city: "Bengaluru",
//   geet() {
//     console.log(`${this.city}`);
//   },
// };

// myObject.geet();
// Object.getPrototypeOf(myObject); // Object { }

// const arr = [1, true, "aravind"];

// const myObject = {
//   score: 12,
//   playesScoreUpdate() {
//     console.log(score + 1);
//   },
// };

// Object.prototype.aravind = function () {
//   console.log("hey aravind");
// };

// myObject.aravind();

// I want to define the heyArray method that gives the output as “total elements are ##” on any array that we access it on

// const arr1 = [1, 2, 3, 4];
// console.log(arr1.length);
// Array.prototype.heyArray = function () {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     count++;
//   }
//   console.log(count);
// };

// arr1.heyArray();

// Prototypal inheritance

// const User = {
//   name: "top name",
//   email: "example@gmail.com",
// };

// const Teacher = {
//   makesVideos: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };
//Teacher.__proto__ = User;

// Teacher.prototype = User;

// Object.setPrototypeOf(Teacher, User);
// Object.setPrototypeOf(TeachingSupport, Teacher);

// implement trueLength() function that gives length of the string by eleminating spaces

// String.prototype.trueLength = function () {
//   console.log(`true length is ${this.trim().length}`);
// };

// "aravind  ".trueLength();

//*****************

/**Hoisting in JavaScript '
 * JavaScript Engine Executes program in two phases first is the memory creation phase and second is the execution phase
 */
// console.log(playerScore);
// var playerScore = 10;

// console.log(win, howManyTimes);
// let win = true;
// const howManyTimes = 2;

// updateScore();
// function updateScore() {
//   let score = 2;
//   score = score + 1;
//   console.log(score);
// }

/**Memoization in JavaScript
 * Memoization is the way to reduce the number of expensive calculations by caching the results somewhere using database tecniques like redis cache
 * so that when we call the function with same arguments or when we visit the same website again we can retrieve the results from the cache
 * In the below example i used simple JavaScript Object to create the cache
 */

// let cache = {};
// function memo(num) {
//   if (cache[num]) {
//     console.log("cache");
//     return cache[num];
//   } else {
//     const result = sum(num);
//     cache[num] = result;
//     console.log("no cache");
//     return result;
//   }
// }

// function sum(num) {
//   const increment = 10;
//   const updatedScore = increment + num;
//   return updatedScore;
// }
// const playerScore = 10;

// console.log(memo(playerScore));
// console.log(memo(playerScore));
// console.log(memo(playerScore));

// let cache = {};

// function calculateExpensiveValue(inputValue) {
//   if (cache[inputValue]) {
//     console.log("cache hit");
//     return cache[inputValue];
//   } else {
//     console.log("cache miss");
//     const result = expensiveCalculation(inputValue);
//     cache[inputValue] = result;
//     return result;
//   }
// }

// function expensiveCalculation(input) {
//   console.log("performing expensive calculation");
//   return input * 2;
// }

// console.log(calculateExpensiveValue(5));
// console.log(calculateExpensiveValue(5));
// console.log(calculateExpensiveValue(10));
// console.log(calculateExpensiveValue(10));

// let arr1 = [1, 3, 4, 5];

// const mapResult = arr1
//   .map((element) => element + 2)
//   .filter((element) => element > 3);
// console.log(mapResult);

// const forEachResult = arr1.forEach((ele) => {
//   if (ele % 2 == 0) {
//     arr1.pop();
//   }
// });
// console.log(arr1);
