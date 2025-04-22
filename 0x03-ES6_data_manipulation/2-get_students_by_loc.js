// File: 1-get_list_student_ids.js
// --------------------------------
// Returns an array of student IDs from an array of student objects.
// If input is not an array, returns an empty array.
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map((student) => student.id);
}


// File: 2-get_students_by_loc.js
// -------------------------------
// Returns a filtered array of student objects located in the given city.
// Uses Array.filter().
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter(
    (student) => student.location === city
  );
}

