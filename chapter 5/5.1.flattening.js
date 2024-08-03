let arrays = [[1, 2, 3], [4, 5], [6]];

const reduceArr = arrays.reduce((a, b) => a.concat(b));

console.log(reduceArr);

//author solution
// console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// → [1, 2, 3, 4, 5, 6]
