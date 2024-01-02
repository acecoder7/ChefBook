import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission (e.g., sending data to the server)
    console.log('Form submitted:', formData);
    // You may want to reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      <div className="left-section">
        <h2 className='left-heading'>🌮 Discover Culinary Delights with Tasty Tips! 🍰</h2>
          <p>
          Have inquiries, thoughts, or delightful recipe ideas? Reach out to us through the form on the right. Your feedback is our recipe for success, and we're eager to connect with you! 📩
          </p>
          <p>
          Ensure you share precise details in the form, enabling us to offer tailored assistance for a more delightful culinary experience. 🍳👩‍🍳
          </p>
        </div>

      <div className="right-section">
        <h2 className='right-heading'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='form'>
          <div className="form-group">
            <label htmlFor="name" className="label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="label">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="label">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="input"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;