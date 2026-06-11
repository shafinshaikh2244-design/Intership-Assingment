import React from 'react'

const StudentCard = ({ student, onToggle }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 10, borderRadius: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: 0 }}>{student.fullName}</h4>
        <p style={{ margin: '6px 0' }}>{student.email} | {student.college} | {student.course}</p>
        <p style={{ margin: 0 }}>{student.status === 'Active' ? '🟢 Active Student' : '🔴 Inactive Student'}</p>
      </div>
      <div>
        <button onClick={() => onToggle(student.id)}>{student.status === 'Active' ? 'Make Inactive' : 'Make Active'}</button>
      </div>
    </div>
  )
}

export default StudentCard
