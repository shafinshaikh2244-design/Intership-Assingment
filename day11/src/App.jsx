import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import StudentForm from './component/StudentForm'
import StudentList from './component/StudentList'
import Footer from './component/Footer'

const App = () => {
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (students.length > 0) console.log('Student list updated')
  }, [students.length])

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { id: Date.now(), ...student, status: 'Active' }])
  }

  const toggleStatus = (id) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' } : s)))
  }

  const filtered = students.filter((s) => s.fullName.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Navbar total={students.length} onSearch={setSearch} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
        <StudentForm onAdd={addStudent} />
        <h3>Total Students: {students.length}</h3>
        <StudentList students={filtered} onToggle={toggleStatus} />
      </div>
      <Footer />
    </div>
  )
}

export default App