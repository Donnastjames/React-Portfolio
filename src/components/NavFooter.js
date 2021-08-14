import React from 'react';
import '../styles/NavTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <FontAwesomeIcon icon={['fab', 'github']} size={'2x'}/>
        </a>
      </li>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <li className='nav-item'>
        <a
          href="https://www.linkedin.com/in/donna-crawford-943980195/"
          target="_blank"
          rel="noopener noreferrer"
          alt="linkedin"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'}/>
        </a>
      </li>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <li className='nav-item'>
        <a
          href="https://stackoverflow.com/users/16663682/donnajames?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
          alt="stack overflow"
        >
          <FontAwesomeIcon icon={['fab', 'stack-overflow']} size={'2x'}/>
        </a>
      </li>
    </ul>
  );
}

export default NavFooter;

