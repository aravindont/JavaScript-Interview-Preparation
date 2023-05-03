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

const arr1 = [1, 2, 3, 4];
console.log(arr1.length);
Array.prototype.heyArray = function () {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    count++;
  }
  console.log(count);
};

arr1.heyArray();
