import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    skills: '',
    experience: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setProfile({
      ...profile,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    // Submit profile data to backend
  };

  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-header">
        <h2>Create Your Profile</h2>
        </div>
        <form onSubmit={handleSubmit} className='profile-form'>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter the name" value={profile.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={profile.email} placeholder="Enter the email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={profile.phone} placeholder="Enter the phone" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Resume</label>
            <input type="file" name="resume" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label>Skills</label>
            <input type="text" name="skills" placeholder="Enter the skills" value={profile.skills} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <textarea name="experience" placeholder="Enter the experience" value={profile.experience} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Education</label>
            <textarea name="education" placeholder="Enter the education" value={profile.education} onChange={handleChange} required />
          </div>
          <button type="submit" className='btn'>Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
