import React from 'react';
import './index.css';
import Navbar from '../Navbar';

const AboutUs = () => {
  return (
    <>
    
    <Navbar/>
    <div className="container">
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h2>About Us</h2>
      </div>
      <div className="aboutus-content">
        <p>
          Welcome to our Job Portal! We are committed to connecting job seekers with their dream jobs and employers with the best talent. Our platform offers a wide range of job listings from various industries, ensuring that you find the perfect match for your skills and aspirations.
        </p>
        <p>
          Our mission is to streamline the job search process and make it more efficient for both job seekers and employers. With our user-friendly interface and advanced search features, you can easily find job opportunities that align with your career goals.
        </p>
        <p>
          We believe in the power of meaningful work and are dedicated to helping you achieve your career objectives. Join us today and take the next step towards your professional success!
        </p>
      </div>
    </div></div>
    
    
    </>
    
  );
}

export default AboutUs;
