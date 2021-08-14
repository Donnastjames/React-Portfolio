import React from 'react';
import '../styles/NavTabs.css';

function NavFooter({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-tabs navFooter'>
      <li className='nav-item'>
        <a
          href="https://github.com/Donnastjames"
          target="_blank"
          rel="noopener noreferrer"
          alt="github"
        >
          Github
        </a>
      </li>
      <li className='nav-item'>
        <a
          href="https://www.linkedin.com/in/donna-crawford-943980195/"
          target="_blank"
          rel="noopener noreferrer"
          alt="linkedin"
        >
          LinkedIn
        </a>
      </li>
      <li className='nav-item'>
        <a
          href="https://stackoverflow.com/users/16663682/donnajames?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
          alt="stack overflow"
        >
          stack overflow
        </a>
      </li>
    </ul>
  );
}

export default NavFooter;

