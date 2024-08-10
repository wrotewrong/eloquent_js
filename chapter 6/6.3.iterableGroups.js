class Group {
  constructor() {
    this.elements = [];
  }
  add(value) {
    if (!this.elements.includes(value)) {
      this.elements.push(value);
    }
  }

  delete(value) {
    this.elements = this.elements.filter((element) => {
      return element != value;
    });
  }

  has(value) {
    return this.elements.includes(value);
  }

  static from(input) {
    const group = new Group();
    for (let value of input) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator] = function () {
    return new GroupIterator(this.elements);
  };
}

class GroupIterator {
  constructor(elements) {
    this.elements = elements;
    this.position = 0;
  }

  next() {
    let position = this.position;
    if (!this.elements[position]) {
      return { done: true };
    }
    let value = this.elements[position];
    this.position++;
    return { value, done: false };
  }
}

//   //author solution
//   class Group {
//     #members = [];

//     add(value) {
//       if (!this.has(value)) {
//         this.#members.push(value);
//       }
//     }

//     delete(value) {
//       this.#members = this.#members.filter(v => v !== value);
//     }

//     has(value) {
//       return this.#members.includes(value);
//     }

//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }

//     [Symbol.iterator]() {
//       return new GroupIterator(this.#members);
//     }
//   }

//   class GroupIterator {
//     #members;
//     #position;

//     constructor(members) {
//       this.#members = members;
//       this.#position = 0;
//     }

//     next() {
//       if (this.#position >= this.#members.length) {
//         return {done: true};
//       } else {
//         let result = {value: this.#members[this.#position],
//                       done: false};
//         this.#position++;
//         return result;
//       }
//     }
//   }

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
