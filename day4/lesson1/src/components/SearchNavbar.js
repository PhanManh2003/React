import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../provider/Context";
import { Link } from "react-router-dom";
import axios from "axios";
function SearchNavbar() {
  const { subjects, searchNav, setSearchNav, studentSubjects, setSubjects } =
    useContext(AppContext);

  //  const handleSearchNav = (subId) => {
  //   // lấy ra mảng studentSubjects có subjectId = subId
  //   const getStudentSubjects = studentSubjects.filter(
  //     (stuSub) => stuSub.subjectId == subId
  //   );
  //   // lấy ra mảng studentId học môn subId
  //   const getAllStudentId = getStudentSubjects.map(
  //     (stuSub) => stuSub.studentId
  //   );
  //   setSearchNav(getAllStudentId.length > 0 ? getAllStudentId : []);

  //   /* CHAT GPT */
  //   // setSearchNav([subId]);
  // };

  // Xử lí thêm subject
  const [subjectId, setSubjectId] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const handleSubmitSubject = async (e) => {
    e.preventDefault();
    if (subjectId.length === 0 || subjectName.length === 0) {
      alert("No empty field!");
      return;
    }
    // Tạo 1 đối tượng subject mới
    const newSubject = {
      id: String(subjects.length + 1),
      subjectId: subjectId,
      name: subjectName,
    };
    try {
      const resSubject = await axios.post(
        "http://localhost:9999/subjects",
        newSubject
      );

      // Update State
      setSubjects([...subjects, resSubject.data]);

      // reset form
      setSubjectId("");
      setSubjectName("");
      alert("Add subject successfully.");
    } catch (error) {
      console.log(error);
      alert("Fail to add new subject.");
    }
  };
  return (
    <div>
      <h3>Subjects</h3>
      <ul style={{ listStyle: "none" }}>
        {subjects.map((sub, index) => (
          <li key={sub.id}>
            <Link to={`/student?subject=${sub.subjectId}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmitSubject}>
        <input
          style={{ marginBottom: "10px" }}
          className="form-control"
          type="text"
          name="id"
          value={subjectId}
          placeholder="Enter subjectId"
          onChange={(e) => {
            setSubjectId(e.target.value);
          }}
        />
        <input
          style={{ marginBottom: "10px" }}
          className="form-control"
          type="text"
          name="name"
          value={subjectName}
          placeholder="Enter subjectName"
          onChange={(e) => {
            setSubjectName(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default SearchNavbar;
