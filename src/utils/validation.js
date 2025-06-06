/**
 * Validates if the provided string is a valid email
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a form with name, email, and message fields
 * @param {Object} formData - The form data object
 * @param {string} formData.name - Name field value
 * @param {string} formData.email - Email field value
 * @param {string} formData.message - Message field value
 * @returns {Object} Object with validation errors (empty if valid)
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return errors;
};