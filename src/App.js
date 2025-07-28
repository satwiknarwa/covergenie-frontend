import React, { useState } from 'react';
import './App.css';
import handleSubmitFn from './utils/handleSubmit';

function App() {
  const [formData, setFormData] = useState({
    Name: '',
    JobTitle: '',
    Company: '',
    Skills: '',
    Experience: '',
  });

  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitFn(formData, setLoading, setCoverLetter);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CoverGenie</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#footer-about">About</a></li> {/* will scroll to footer */}
        </ul>
      </nav>

      {/* Hero */}
      <header className="hero" id="home">
        <h1>CoverGenie</h1>
        <p>Your AI Assistant for Perfect Cover Letters</p>
      </header>

      {/* Form */}
      <form className="cover-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="JobTitle"
          placeholder="Job Title"
          value={formData.JobTitle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Company"
          placeholder="Company Name"
          value={formData.Company}
          onChange={handleChange}
          required
        />
        <textarea
          name="Skills"
          placeholder="Your Key Skills"
          value={formData.Skills}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="Experience"
          placeholder="Your Experience Summary"
          value={formData.Experience}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Cover Letter'}
        </button>
      </form>

      {/* Cover Letter Output */}
      {coverLetter && (
        <div className="result-box">
          <h3>Your AI Cover Letter</h3>
          <pre>{coverLetter}</pre>
        </div>
      )}

      {/* Footer with About inside */}
      <footer className="footer" id="footer-about">
        <div className="footer-about">
          <h4>About CoverGenie</h4>
          <p>
            CoverGenie is an AI-powered tool that helps job seekers generate personalized and polished cover letters in seconds.
            Whether you're applying for your first job or your next big role, CoverGenie helps you stand out effortlessly.
          </p>
        </div>
        <p>&copy; 2025 CoverGenie. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
