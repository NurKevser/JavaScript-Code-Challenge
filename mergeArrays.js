/* let firstArray = [12, 14, 16];
let secondArray = [11, 13, 17]; */
/* let firstArray = [];
let secondArray = []; */

function mergeArrays(firstArray, secondArray) {
    let lastArray = firstArray.concat(secondArray);
     return (lastArray.sort().reverse());
}
console.log(mergeArrays([7, 9, 8],[]));