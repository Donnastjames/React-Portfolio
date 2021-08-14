import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import '../../styles/ContactForm.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

const styles = {
  sectionStyles: {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
  },
  paragraphStyle: {
    fontSize: '20px',
  },
};

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // https://stackoverflow.com/questions/66588340/custom-hook-for-window-resize
  const [windowHeight, setHeight] = useState(window.innerHeight);
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => { setHeight(window.innerHeight) });

    return () => {
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
      });
    };
  }, [window.innerHeight]);

  useEffect(() => {
    window.addEventListener('resize', () => { setWidth(window.innerWidth) });

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    };
  }, [window.innerWidth]);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
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
    setErrorMessage('');
  };

  return (
    <Container>
      <div
        ref={ref}
        style={{
          position: 'fixed',
          top: '160px',
          left: '30px',
          width: `${windowWidth - 45}px`,
          height: `${windowHeight - 235}px`,
          overflow: 'auto'
        }}
      >
        <h1 style={styles.sectionStyles}>Contact</h1>
        <form
          style={{ ...styles.sectionStyles, width: `${windowWidth}px` }}
          className="form"
          
        >
          <label style={{ ...styles.paragraphStyle, width: `${windowWidth - 100}px` }}>
            Name:
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
            />
          </label>
          <br />
          <label style={{ ...styles.paragraphStyle, width: `${windowWidth - 100}px` }}>
            Email:
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
            />
          </label>
          <br />
          <label style={{ ...styles.paragraphStyle, width: `${windowWidth - 100}px` }}>
            Message:
            <br />
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              style={{ rows: '10', width: 'inherit' }}
              onBlur={() => setErrorMessage(
                message ? '' : 'Message is required'
              )}
            />
          </label>
          <br />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ContactForm;
