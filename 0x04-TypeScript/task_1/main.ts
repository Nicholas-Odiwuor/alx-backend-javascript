#!/usr/bin/env node

// task_1/js/main.ts

// 1. Teacher interface
interface Teacher {
  readonly firstName:      string;           // immutable after initialization
  readonly lastName:       string;           // immutable after initialization
          fullTimeEmployee: boolean;          // required
          yearsOfExperience?: number;         // optional
          location:         string;           // required
  [key: string]: any;                         // allow any other attributes
}

// 2. Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;                    // required additional attribute
}

// 3. Example Director
const director1: Directors = {
  firstName:        'John',
  lastName:         'Doe',
  fullTimeEmployee: true,
  location:         'London',
  numberOfReports:  17,
};

console.log(director1);

