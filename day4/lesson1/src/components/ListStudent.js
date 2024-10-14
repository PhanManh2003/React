import React, { useContext, useEffect } from "react";
import AppContext from "../provider/Context";
function ListStudent() {
  const { students, stuDetails, searchName, searchNav,
     studentSubjects, setSearchName, setSearchNav } = useContext(AppContext);

  const getDetail = (stuId) => {
    // trả về object student detail
    const detail = stuDetails.find((stu) => stu.studentId === stuId);
    return detail ? detail : "unknown";
  };

  // Lọc sinh viên theo tên hoặc môn học cách 1
  const filterStudent = students.filter((stu) => {
    const nameMatch = stu.name.toLowerCase().includes(searchName.toLowerCase())
     || searchName === '';
    const navMatch =
      searchNav?.includes(stu.studentId) || searchNav?.length === 0;

    return nameMatch && navMatch;
  });

  /**CHAT GPT: Cách 2 */
  // if (searchName) {
  //   const filteredStudents = students.filter((stu) =>
  //     stu.name.toLowerCase().includes(searchName.toLowerCase())
  //   );
  // }

  // // Lọc theo môn học đã chọn
  // if (searchNav.length > 0) {
  //   /**
  //    * độ phức tạp thời gian của đoạn mã dưới là O(n.m), trong đó:
  //    *  - n là số lượng sinh viên trong mảng filteredStudents.
  //    *  - m là số lượng phần tử trong mảng studentSubjects.
  //    */
  //  const filteredStudents = students.filter((stu) =>
  //     studentSubjects.some(
  //       (stuSub) => stuSub.studentId === stu.studentId &&
  //        searchNav.includes(stuSub.subjectId)
  //     )
  //   );
  // }

  // };

  const handleShowAll = () => {
    setSearchName('');
    setSearchNav([]);
  }

  return (
    <div>
      <h3>List of Students</h3>
      <button className="btn btn-primary" onClick={handleShowAll}>Show all</button>
      {/**
       * Luôn sử dụng onClick={() => handleFunction()} khi bạn cần truyền tham số.
       * Sử dụng onClick={handleFunction} khi không cần truyền tham số vào hàm.
       */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>StudentId</th>
            <th>Name</th>
            <th>Age</th>
            <th>Street</th>
            <th>City</th>
            <th>RegularStudent</th>
            <th>View grades</th>
          </tr>
        </thead>
        <tbody>
          {filterStudent.map((stu, index) => (
            <tr key={index}>
              <td>{stu.studentId}</td>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{getDetail(stu.studentId)?.address?.street}</td>
              <td>{getDetail(stu.studentId)?.address?.city}</td>
              <td>{stu.isRegularStudent ? "full time" : "part time"}</td>
              <td>
                <a href="">Grades</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
