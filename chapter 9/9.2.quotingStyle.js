let text = "'I'm the cook,' he said, 'it's my job.'";

// //first solution
// function fixQuotation(match) {
//   if (match.includes("' ")) {
//     return '" ';
//   } else if (match.includes(" '")) {
//     return ' "';
//   } else {
//     return '"';
//   }
// }

// console.log(text.replace(/(^'|\s'|'\s|'$)/g, fixQuotation));

//second solution
console.log(text.replace(/(^|\s)'|'(\s|$)/gu, `$1"$2`));

// // author solution
// console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

// → "I'm the cook," he said, "it's my job."
