import React, { useState, useEffect, useRef } from 'react';
import myPhoto from '../../assets/my-photo.jpeg';

const styles = {
  sectionStyles: {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
    padding: '30px',
  },
  paragraphStyle: {
    fontSize: '20px',
    marginTop: '10px',
  },
  photoStyle: {
    width: '142px',
    height: '167px',
  },
};

export default function AboutMe() {
  
  // https://stackoverflow.com/questions/66588340/custom-hook-for-window-resize
  const [windowHeight, setHeight] = useState(window.innerHeight);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => { setHeight(window.innerHeight) });

    return () => {
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
      });
    };
  }, [window.innerHeight]);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: '126px',
        height: `${windowHeight - 205}px`,
        overflow: 'auto',
      }}
    >
      <div style={styles.sectionStyles}>
        <h1>About Me</h1>
        <img style={styles.photoStyle} src={myPhoto} alt="My Photo" />
        <p style={styles.paragraphStyle}>
          I grew up in California where I studied and received an associates degree in Economics.  I enjoyed working professionally as a Claims Auditor, and eventually as a Business Systems Analyst at Regence Blue Shield.  I got married and took care of my son, my pride and joy.  As my son grows more independent, I have more time to study and get back into the workforce.
        </p>
        <p style={styles.paragraphStyle}>
          I am currently working as a Legal Assistant for a lawfirm in downtown Seattle.  Starting with a few text books, I took an interest in web development, and then resolved to attain certification. I have always been detail oriented, and I enjoy a good challenge.  I take pride in my work, and always strive to do better in everything that I do. 
        </p>
      </div>
    </div>
  );
}
