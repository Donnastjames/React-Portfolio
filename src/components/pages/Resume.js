import React, { useState, useEffect, useRef } from 'react';
import myResume from "../../assets/DCrawford_Resume.pdf";

const styles = {
  sectionStyles: {
    fontFamily: 'Georgia, Times New Roman, Times, serif',
  },
  fontStyles: {
    fontSize: '20px',
  },
};

export default function Resume() {
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

  return (
    <div 
      ref={ref}
      style={{ 
        position: 'fixed', 
        top: '128px',
        left: '30px',
        width: `${windowWidth - 29}px`,
        height: `${windowHeight - 205}px`, 
        overflow: 'auto'
      }}
    >
      &nbsp;
      <h1 style={styles.sectionStyles}>Resume</h1>
        <h5 style={styles.sectionStyles}>
          Download my&nbsp;
          <a 
            href={myResume} 
            download='myResume' 
            target='_blank'
            rel='noopener noreferrer'
            textDecoration='none'
          >
            resume
          </a>.
        </h5>

        <br />
        <h3 style={styles.sectionStyles}>Front-end Proficiencies</h3> 
            <ul style={{...styles.sectionStyles,...styles.fontStyles}}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>UIKit</li>
              <li>Handlebars</li>
            </ul>
          <h3 style={styles.sectionStyles}>Back-end Proficiencies</h3>
            <ul style={{...styles.sectionStyles,...styles.fontStyles}}>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>NoSQL</li>
              <li>MongoDB, Mongoose</li>
              <li>GraphQL</li>
              <li>Redux</li>
          </ul>
    </div>
  );
}