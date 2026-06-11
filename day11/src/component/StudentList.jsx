import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({ students, onToggle }) => {
  if (!students || students.length === 0) {
    return <p>No Students Added Yet</p>
  }

  return (
    <div>
      {students.map((s) => (
        <StudentCard key={s.id} student={s} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default StudentList
