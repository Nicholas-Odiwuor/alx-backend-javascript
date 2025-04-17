/**
 * Represents a course at Holberton School.
 */
export default class HolbertonCourse {
  /**
   * Initializes a new instance of the HolbertonCourse class.
   *
   * @param {String} courseName - The name of the course.
   * @param {Number} courseLength - The duration of the course (in months).
   * @param {String[]} studentNames - The names of students enrolled in the course.
   */
  constructor(courseName, courseLength, studentNames) {
    this.courseName = courseName;
    this.courseLength = courseLength;
    this.studentNames = studentNames;
  }

  /**
   * Retrieves the name of the course.
   */
  get courseName() {
    return this._courseName;
  }

  /**
   * Sets the name of the course.
   */
  set courseName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Course name must be a string');
    }
    this._courseName = value;
  }

  /**
   * Retrieves the duration of the course (in months).
   */
  get courseLength() {
    return this._courseLength;
  }

  /**
   * Sets the duration of the course (in months).
   */
  set courseLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Course length must be a number');
    }
    this._courseLength = value;
  }

  /**
   * Retrieves the names of students in the course.
   */
  get studentNames() {
    return this._studentNames;
  }

  /**
   * Sets the names of students in the course.
   */
  set studentNames(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Student names must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Student names must be an array of strings');
    }
    this._studentNames = value;
  }
}
