import React from 'react';// Importing React library
import { Helmet } from 'react-helmet'; // Importing Helmet from react-helmet library
import { NavLink } from 'react-router-dom';// Importing NavLink from react-router-dom library

// Creating a functional component PageNotFound
const PageNotFound = () => {
  return (
    // Creating a div with text-center class
    <div className='text-center'>
      <Helmet>
        {/*  Setting the title of the page as "Error 404 (Not Found)" using Helmet library */}
        <title>Error 404 (Not Found)</title>
      </Helmet>
      {/* Creating a h1 tag with the text "404 Error" */}
      <h1>404 Error</h1>
      <p>The requested URL was not found on this server.</p>
      <img src='./assets/images/ErrorImage.jpg' alt='ErrorImage' />
      <div>
        <NavLink to=''>
          {/* Creating a button to navigate to home using NavLink from react-router-dom library */}
          <button type='button' className='btn btn-primary btn-sm'>Go to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

// Exporting the PageNotFound
export default PageNotFound;
