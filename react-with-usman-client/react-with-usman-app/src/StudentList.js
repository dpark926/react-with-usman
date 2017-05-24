import React from 'react';
import NewStudent from './NewStudent'
function StudentList(props) {


  return (
    <div>
      <ul>
        {props.studentList.map((student, i) =>
          <div>
            <li key={i}>
              Student Name: {student.name} DOB: {student.dob}
            </li>
          </div>
          )
        }
      </ul>
      <NewStudent studentCreateButton={props.studentCreateButton}/>
    </div>
  )
}

export default StudentList
