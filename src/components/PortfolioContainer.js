import React, { useState } from 'react';
import NavHeader from './NavHeader';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/ContactForm';
import Resume from './pages/Resume';
import NavFooter from './NavFooter';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.Fragment>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavHeader currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <NavFooter currentPage={currentPage} handlePageChange={handlePageChange} />
    </React.Fragment>
  );
}
