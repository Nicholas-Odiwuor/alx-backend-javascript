export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // Getter and setter for brand
  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = newBrand;
  }

  // Getter and setter for motor
  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = newMotor;
  }

  // Getter and setter for color
  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = newColor;
  }

  // Clone method that returns new instance of the same class
  cloneCar() {
    const NewCar = this.constructor[Symbol.species] || this.constructor;
    return new NewCar();
  }

  // Symbol.species getter to return the current constructor
  static get [Symbol.species]() {
    return this;
  }
}
