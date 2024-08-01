const deepEqual = (valOne, valTwo) => {
  if (typeof valOne == 'object' && valOne != null) {
    const propsOne = Object.keys(valOne);
    const propsTwo = Object.keys(valTwo);
    if (propsOne.length === propsTwo.length) {
      for (let prop of propsOne) {
        if (
          !propsTwo.includes(prop) ||
          !deepEqual(valOne[prop], valTwo[prop])
        ) {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    if (valOne === valTwo) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

//   //author solution
//   function deepEqual(a, b) {
//     if (a === b) return true;

//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;

//     let keysA = Object.keys(a), keysB = Object.keys(b);

//     if (keysA.length != keysB.length) return false;

//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }

//     return true;
//   }

let obj = { here: { is: 'an' }, object: 2 };
console.log(
  deepEqual(
    { here: { is: 'an' }, a: { x: 1 } },
    { here: { is: 'an' }, a: { x: 1 } }
  )
);
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
