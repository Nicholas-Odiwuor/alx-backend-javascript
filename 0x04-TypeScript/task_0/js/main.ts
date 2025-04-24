// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName:  string;
  age:       number;
  location:  string;
}

// Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName:  'Wong',
  age:       23,
  location:  'New York'
};

const student2: Student = {
  firstName: 'Bob',
  lastName:  'Smith',
  age:       30,
  location:  'San Francisco'
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create table and header row
const table: HTMLTableElement = document.createElement('table');
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.textContent = 'First Name';
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = 'Location';

// Append a row for each student
studentsList.forEach((student: Student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  nameCell.textContent = student.firstName;
  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

// Attach the table to the document body
document.body.appendChild(table);


