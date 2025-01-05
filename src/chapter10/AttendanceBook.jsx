import React from "react";

const students = [
    { id: 1, name: "First student" },
    { id: 2, name: "Second student" },
    { id: 3, name: "Third student" },
    { id: 4, name: "Fourth student" }
]

const AttendanceBook = (props) => {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}> {student.name} </li>;
            })}
        </ul>
    )
}

export default AttendanceBook;