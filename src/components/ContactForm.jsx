import { useState } from 'react';
import { validateContactForm } from '../utils/validation';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateContactForm(formData);
    
    if (Object.keys(validationErrors).length === 0) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="success-message">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              rows="4"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;