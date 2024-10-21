import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AppContext from '../provider/Context'
function GradeDetail() {
    const {students, evaluations } = useContext(AppContext);
    
    const {stdId} = useParams();

    const getName = () => {
        return students.find((stu) => stu.studentId === stdId).name;
    }
    const filterGrades = evaluations.filter((gradeItem) => gradeItem.studentId == stdId)  
  return (
    <div>
        <Link className="btn btn-success mt-3 mb-3" to={'/'}>Back to home</Link>
        <h4 style={{ textAlign: "center" }}>{getName()}'s Grade Details</h4>
        <table className='table table-bordered'>
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
  )
}

export default GradeDetail