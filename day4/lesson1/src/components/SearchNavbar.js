import React from "react";
import { useContext } from "react";
import AppContext from "../provider/Context";
import {Link} from "react-router-dom";
function SearchNavbar() {
  const { subjects, searchNav, setSearchNav, studentSubjects } =
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

  return (
    <div>
      <h3>Subjects</h3>
      <ul style={{ listStyle: "none" }}>
        {subjects.map((sub, index) => (
          <li key={sub.id}>
            <Link to={`/student?subject=${sub.subjectId}`} >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchNavbar;
