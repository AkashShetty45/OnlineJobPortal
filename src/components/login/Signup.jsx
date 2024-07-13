import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [select, setSelect] = useState('');
  const [jobType, setJobType] = useState(''); 
  const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');
  // const [skills, setSkills] = useState('');
  // const [experience, setExperience] = useState('');
  // const [resume, setResume] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup API call');
  };

  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-header">
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">

          <div className="form-group left">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="form-control"
            />
          </div>
          <div className="form-group left">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="form-control"
            />
          </div>
          <div className="form-group left">
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="form-control"
            />
          </div>

          <div className="form-group left">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="form-control"
            />
          </div>
          <div className="form-group left">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Role :</label>
            <select name="jobType" className="form-group" value={jobType} onChange={(e) => setJobType(e.target.value)} required>
              <option value="fullTime" >Admin</option>
              <option value="partTime" default>Fresher</option>
              <option value="Employer">Employer</option>
            </select>
          </div>
          {/* <div className="form-group right">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              className="form-control"
            />
          </div> */}
          {/* <div className="form-group right">
            <label>Skills:</label>
            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter skills"
              className="form-control"
            ></textarea>
          </div> */}

          {/* <div className="form-group right">
            <label>Experience:</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Enter experience"
              className="form-control"
            ></textarea>
          </div> */}
          {/* <div className="form-group right full-width">
            <label>Resume:</label>
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              className="form-control"
            />
          </div> */}
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
