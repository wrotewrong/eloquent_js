class PGroup {
  static empty = new PGroup([]);

  constructor(elements) {
    this.elements = elements;
  }

  add(value) {
    if (this.elements.includes(value)) {
      return this;
    }
    return new PGroup(this.elements.concat([value]));
  }

  delete(value) {
    if (!this.elements.includes(value)) {
      return this;
    }
    return new PGroup(
      this.elements.filter((element) => {
        return element != value;
      })
    );
  }

  has(value) {
    return this.elements.includes(value);
  }
}

// //author solution
// class PGroup {
//     #members;
//     constructor(members) {
//       this.#members = members;
//     }

//     add(value) {
//       if (this.has(value)) return this;
//       return new PGroup(this.#members.concat([value]));
//     }

//     delete(value) {
//       if (!this.has(value)) return this;
//       return new PGroup(this.#members.filter(m => m !== value));
//     }

//     has(value) {
//       return this.#members.includes(value);
//     }

//     static empty = new PGroup([]);
//   }

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
