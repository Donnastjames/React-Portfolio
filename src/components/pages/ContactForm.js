import React, { useState } from 'react';
import '../../styles/ContactForm.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'userName') {
      setEmail(inputValue);
    } else if (inputType === 'email') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First, check to see if userName is empty. If so, set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage(
        'Name is required'
        );
      // Exit out of this code block if something is wrong so that the user can correct it
      return; 
    }
    // Then check to see if the email is valid. If so, set an error message.
    if (!validateEmail(email)) {
      setErrorMessage(
        'Email is invalid'
        );
      return;
    }
    // Then we check to see if the message is empty. If so, we set an error message regarding the message.
    if (!message) {
      setErrorMessage(
        'Message is required'
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful input.
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ position: 'fixed', top: '165px', height: '340px', overflow: 'auto' }}>
      <h3>Contact</h3>
      <form className="form">
        <h3>Name</h3>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
          />
        <h3>Email address:</h3>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
        <h3>Message:</h3>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
