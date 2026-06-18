import React from 'react'
import Navbar from './component/Navbar'
import StudentForm from './component/StudentForm'
import StudentList from './component/StudentList' 


const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
        <StudentForm />
        <StudentList />
      </div>
    </div>
  )
}

export default App