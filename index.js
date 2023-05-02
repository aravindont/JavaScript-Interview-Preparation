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

// Polyfills in JS
