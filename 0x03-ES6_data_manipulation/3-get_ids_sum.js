// File: 3-get_ids_sum.js
// ----------------------
// Returns the sum of all student IDs using Array.reduce()
// If input is not an array, returns 0.
export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  return students.reduce((sum, student) => sum + student.id, 0);
}

