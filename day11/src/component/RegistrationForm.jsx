import React, { useState } from 'react'
import './RegistrationForm.css'

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', terms: false })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password) {
      setError('Please fill all required fields')
      return
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match')
      return
    }
    if (!form.terms) {
      setError('You must accept the terms')
      return
    }
    setSubmitted(true)
    console.log('Registered user:', { name: form.name, email: form.email })
  }

  return (
    <div className="registration">
      <h2>Register</h2>
      {submitted ? (
        <div className="success">Registration successful — welcome, {form.name}!</div>
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} />
          </label>

          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} />
          </label>

          <label>
            Confirm Password
            <input name="confirm" type="password" value={form.confirm} onChange={handleChange} />
          </label>

          <label className="terms">
            <input name="terms" type="checkbox" checked={form.terms} onChange={handleChange} /> I agree to the terms
          </label>

          {error && <div className="error">{error}</div>}

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  )
}

export default RegistrationForm
