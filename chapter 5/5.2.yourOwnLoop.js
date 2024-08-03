const loop = (value, test, update, body) => {
  if (!test(value)) {
    return;
  } else {
    body(value);
    loop(update(value), test, update, body);
  }
};

// //author solution
// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
