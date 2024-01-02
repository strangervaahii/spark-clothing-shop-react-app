// Import React, React Router, MenuList component, and styles
import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';
import './Header.css';

// Define the Header component
const Header = () => {
  return (
    // Define the header element
    <header>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-primary'>
        <div className='container-fluid'>
          {/* Define the logo and name link */}
          <NavLink className='navbar-brand col-md-7' to=''>
            <img className='logo' src='./assets/images/spark-logo.png' alt='logo' />
            <span>Spark Clothing Shop</span>
          </NavLink>
          {/* Define the navbar toggler button */}
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'>
            <span className='navbar-toggler-icon'></span>
          </button>
          {/* Define the navbar collapse content */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            {/* Define the search bar */}
            <form className='d-flex' role='search'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            </form>
            {/* Define the menu list */}
            <MenuList />
          </div>
        </div>
      </nav>
    </header>
  );
};

// Export the Header component
export default Header;
