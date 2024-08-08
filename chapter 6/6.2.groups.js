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
}

// //author solution
// class Group {
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
//   }

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
