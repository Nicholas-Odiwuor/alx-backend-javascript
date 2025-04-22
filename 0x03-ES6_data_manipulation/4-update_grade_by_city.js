export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents.map((student) => {
    let grade = 'N/A';
    if (Array.isArray(newGrades)) {
      const gradeObj = newGrades.find((g) => g.studentId === student.id);
      if (gradeObj && typeof gradeObj.grade !== 'undefined') {
        grade = gradeObj.grade;
      }
    }
    return { ...student, grade };
  });
}
