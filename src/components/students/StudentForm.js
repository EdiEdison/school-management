import React, { useState } from "react";
import { createStudent, updateStudent } from "../../services/api";

const StudentForm = ({ studentToEdit, onSave }) => {
  const [student, setStudent] = useState(
    studentToEdit || { name: "", age: "", studentClass: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (student.id) {
      await updateStudent(student.id, student);
    } else {
      await createStudent(student);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Age"
        type="number"
      />
      <input
        name="studentClass"
        value={student.studentClass}
        onChange={handleChange}
        placeholder="Class"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default StudentForm;
