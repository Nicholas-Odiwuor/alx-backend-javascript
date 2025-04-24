#!/usr/bin/env node

// 1. Teacher interface
interface Teacher {
  readonly firstName:      string;           // immutable after init
  readonly lastName:       string;           // immutable after init
          fullTimeEmployee: boolean;          // required
          yearsOfExperience?: number;         // optional
          location:         string;           // required
  [key: string]: any;                         // allow any other attributes
}

// 2. Example teacher
const teacher3: Teacher = {
  firstName:      'John',
  lastName:       'Doe',
  fullTimeEmployee: false,
  location:       'London',
  contract:       false,
};

console.log(teacher3);

