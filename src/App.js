import React, { useState } from "react";
import StudentList from "./components/students/StudentList";
import StudentForm from "./components/students/StudentForm";

const App = () => {
  const [editingStudent, setEditingStudent] = useState(null);

  // This function handles the edit button
  const handleEdit = (student) =>{
    setEditingStudent(student);
    console.log("Test!!");
  }

  // This handle the save button when the student is created
  const handleSave = () => setEditingStudent(null);

  return (
    <div>
      <h1>School Management</h1>
      <StudentForm studentToEdit={editingStudent} onSave={handleSave} />
      <StudentList onEdit={handleEdit} />
    </div>
  );
};

export default App;

