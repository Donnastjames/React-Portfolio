import React from 'react';
import '../styles/NavTabs.css';

function NavFooter({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-tabs navFooter'>
      <li className='nav-item'>
        <a
        href= "https://github.com/Donnastjames" target="_blank" rel="noopener noreferrer" alt="github" >
          Github
        </a>
      </li>
      <li className='nav-item'>
        <a
        href= "https://www.linkedin.com/in/donna-crawford-943980195/" target="_blank" rel="noopener noreferrer" alt="linkedin" >
          LinkedIn
        </a>
      </li>
      <li className='nav-item'>
        <a
        href= "mailto:crawford0774@gmail.com" alt="email" >
          Email
        </a>
      </li>
    </ul>
  );
}

export default NavFooter;

