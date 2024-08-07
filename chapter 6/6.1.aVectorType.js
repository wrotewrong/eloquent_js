class Vec {
  #length;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.#length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  plus(anotherVec) {
    let sumX = this.x + anotherVec.x;
    let sumY = this.y + anotherVec.y;
    return new Vec(sumX, sumY);
  }

  minus(anotherVec) {
    let minusX = this.x - anotherVec.x;
    let minusY = this.y - anotherVec.y;
    return new Vec(minusX, minusY);
  }

  get length() {
    return this.#length;
  }
}

// //author solution
// class Vec {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }

//     plus(other) {
//       return new Vec(this.x + other.x, this.y + other.y);
//     }

//     minus(other) {
//       return new Vec(this.x - other.x, this.y - other.y);
//     }

//     get length() {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//   }

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
