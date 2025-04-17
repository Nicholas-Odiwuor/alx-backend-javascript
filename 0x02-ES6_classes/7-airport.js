export default class Airport {
  constructor(name, code) {
    this.name = name; // Using setter
    this.code = code; // Using setter
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Default string description returns the airport code
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
