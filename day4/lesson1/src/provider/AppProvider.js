import React, { useState, useEffect } from "react";
import AppContext from "./Context";
import axios from "axios";

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [stuDetails, setStuDetails] = useState([]);
  const [studentSubjects, setStudentSubjects] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchNav, setSearchNav] = useState([]);
  const [evaluations, setEvaluations] = useState([]);
  useEffect(() => {
    // cách 1: dùng fetch
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((response) => setTodos(response));

    // cách 2: dùng axios
    // async await
    const fetchFunction = async () => {
      // lấy data từ API có lúc sẽ xảy ra lỗi
      try {
        // get data từ API
        const resStudent = await axios.get("http://localhost:9999/students"); // muốn dùng await thì phải dùng async
        setStudents(resStudent.data);
        const resSubject = await axios.get("http://localhost:9999/subjects"); // muốn dùng await thì phải dùng async
        setSubjects(resSubject.data);
        const resStuDetails = await axios.get(
          "http://localhost:9999/student_details"
        ); // muốn dùng await thì phải dùng async
        setStuDetails(resStuDetails.data);

        const resStudentSubjects = await axios.get(
          "http://localhost:9999/students_subjetcs"
        );
        setStudentSubjects(resStudentSubjects.data);

        const resEvaluations = await axios.get("http://localhost:9999/evaluations");
        setEvaluations(resEvaluations.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFunction();
  }, []);

  const data = {
    // mặc định truyền cho con ở đây cứ thế mà áp dụng
    // sau khi lấy và set xong thì vứt nó vào đây
    students,
    setStudents,
    subjects,
    setSubjects,
    stuDetails,
    setStuDetails,
    searchName,
    setSearchName,
    searchNav,
    setSearchNav,
    studentSubjects,
    setStudentSubjects,
    evaluations,
    setEvaluations,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;
