import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "../provider/Context";
import axios from "axios";
function GradeDetail() {
  const { students, evaluations, setEvaluations } = useContext(AppContext);

  const { stdId } = useParams();

  const getName = () => {
    return students.find((stu) => stu.studentId === stdId).name;
  };
  const filterGrades = evaluations.filter(
    (gradeItem) => gradeItem.studentId == stdId
  );

  // Tạo state cho việc add evaluation
  const [grade, setGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  // xử lí submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (isNaN(grade) || grade.length === 0) {
        alert("Grade must be a number");
        return;
    }
    if (explanation.length === 0) {
        alert("Please enter additional explanation");
        return;
    }

    // Prepare new evaluation data
    const newEvaluation = {
        id : String(evaluations.length + 1), // Tạo id mới cho evaluation
        studentId: stdId,
        grade: parseInt(grade),  // Chuyển đổi grade sang số
        additionalExplanation: explanation,
    };

    console.log("New Evaluation:", newEvaluation); // Kiểm tra giá trị

    try {
        const resData = await axios.post("http://localhost:9999/evaluations", newEvaluation);
        console.log("Response from server:", resData); // Kiểm tra phản hồi

        // Update evaluations state
        setEvaluations([...evaluations, resData.data]); // Cập nhật danh sách evaluations
        setGrade(""); // Reset input
        setExplanation(""); // Reset input
    } catch (error) {
        console.error("Error adding evaluation:", error);
        alert("Failed to add evaluation. Please try again.");
    }
};


  return (
    <div>
      <Link className="btn btn-success mt-3 mb-3" to={"/"}>
        Back to home
      </Link>
      <h3 style={{ textAlign: "center" }}>{getName()}'s Grade Details</h3>
      <h3>Add a new grade</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name="grade"
          value={grade}
          placeholder="Enter grade"
          style={{ width: "45%", padding: "3px", marginRight: "10px" }}
          onChange={(e) => setGrade(e.target.value)}
        />
        <input
          type="text"
          name="explanation"
          value={explanation}
          placeholder="Enter additional explanation"
          style={{ width: "45%", padding: "3px", marginRight: "10px" }}
          onChange={(e) => setExplanation(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add new
        </button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {filterGrades.map((gradeItem, index) => (
            <tr key={index}>
              <td>{gradeItem?.grade}</td>
              <td>{gradeItem?.additionalExplanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradeDetail;
