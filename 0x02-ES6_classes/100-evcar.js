import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // Getter and setter for range
  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = newRange;
  }

  // Override Symbol.species to return Car instead of EVCar
  static get [Symbol.species]() {
    return Car;
  }
}
