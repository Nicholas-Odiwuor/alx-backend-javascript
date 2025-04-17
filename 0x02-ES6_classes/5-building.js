export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // Using setter
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  // Abstract method (to be overridden by child classes)
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
