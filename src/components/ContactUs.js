import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:7007/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        });

        if(response.ok){
          const data = await response.json();
          //console.log(response);
          toast.success(data.message, {
            position: toast.POSITION.TOP_CENTER,
            style: {
              width: '400px', 
            },
          });

          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
    
          setTimeout(() => {
            window.location.href = '/';
          }, 10000);
        } else {
          toast.error('Oops! Something went wrong. Please try again.', {
            position: toast.POSITION.TOP_CENTER,
          });
          console.error('Oops! Something went wrong.');
        }
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
      });
        console.error('Error:', error);
      } 
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
      <ToastContainer />
    </div>
  );
};

export default ContactUs;