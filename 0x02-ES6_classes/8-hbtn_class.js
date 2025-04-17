export default class ALXClass {
  constructor(size, location) {
    this.size = size;         // Using setter
    this.location = location; // Using setter
  }

  // Getter and setter for size
  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = newSize;
  }

  // Getter and setter for location
  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = newLocation;
  }

  // Number coercion - returns size
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this._size; // default to number
  }

  // Explicit valueOf for number coercion (alternative approach)
  valueOf() {
    return this._size;
  }

  // Explicit toString for string coercion (alternative approach)
  toString() {
    return this._location;
  }
}
