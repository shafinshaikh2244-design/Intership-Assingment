import { useState } from 'react';
import LifecycleDemo from '../components/LifecycleDemo.jsx';
import './PageStyles.css';

function StudentForm() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [message, setMessage] = useState('Fill in the form to register a student.');
  const [showLifecycle, setShowLifecycle] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage(`${name} updated to ${value}`);
  };

  const handleFocus = (event) => {
    setMessage(`Focused on ${event.target.name}`);
  };

  const handleKeyDown = (event) => {
    setMessage(`Key pressed: ${event.key}`);
  };

  const handleMouseOver = () => {
    setMessage('Hovering over the submit card.');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Student registered: ${formData.name || 'Unknown Student'}`);
    console.log('Form submitted with', formData);
    setFormData({ name: '', email: '', course: '' });
  };

  const handleButtonClick = () => {
    setMessage('Submit button clicked. Ready to register!');
  };

  return (
    <section className="page-section form-page fade-in">
      <div className="form-container">
        <div className="form-intro slide-up">
          <h1>Student Registration</h1>
          <p>Practice React event handling while registering a student.</p>
          <p className="event-message">Event message: {message}</p>
        </div>

        <form className="student-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              placeholder="Enter full name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyUp={handleKeyDown}
              placeholder="Enter email address"
              required
            />
          </label>

          <label>
            Course
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              onFocus={handleFocus}
              required
            >
              <option value="">Select course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Business Administration">Business Administration</option>
            </select>
          </label>

          <div className="submit-card" onMouseOver={handleMouseOver}>
            <button type="submit" onClick={handleButtonClick}>
              Register Student
            </button>
          </div>
        </form>

        <div className="lifecycle-toggle">
          <button type="button" onClick={() => setShowLifecycle((prev) => !prev)}>
            {showLifecycle ? 'Hide' : 'Show'} Lifecycle Demo
          </button>
        </div>

        {showLifecycle && <LifecycleDemo />}
      </div>
    </section>
  );
}

export default StudentForm;
