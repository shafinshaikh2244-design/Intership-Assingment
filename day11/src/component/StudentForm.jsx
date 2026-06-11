import React, { useState } from 'react'

const StudentForm = ({ onAdd }) => {
  const [form, setForm] = useState({ fullName: '', email: '', college: '', course: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.fullName.trim()) return alert('Please enter full name')
    onAdd(form)
    setForm({ fullName: '', email: '', college: '', course: '' })
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
      <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="college" value={form.college} onChange={handleChange} placeholder="College Name" />
      <input name="course" value={form.course} onChange={handleChange} placeholder="Course" />
      <div style={{ gridColumn: '1 / -1' }}>
        <button type="submit">Add Student</button>
      </div>
    </form>
  )
}

export default StudentForm
