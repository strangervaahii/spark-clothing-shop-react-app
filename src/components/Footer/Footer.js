import React from 'react';
import MenuList from '../MenuList/MenuList';

// Define the Footer component
const Footer = () => {
  // Get the current year using the Date object
  const copyrightYear = new Date().getFullYear();
  // Define the developer name
  const developerName = 'Spark Clothing Shop';
  return (
    // Use a fragment to group the HTML elements
    <>
      <footer>
        <nav className='navbar navbar-expand-lg bg-body-teritary'>
          <div className='container-fluid'>
            <div className='collapse navbar-collapse'>
              <div className='navbar-nav'>
                {/* Use the MenuList component to display navigation links */}
                <MenuList />
                {/* Display social media icons */}
                <p>
                  <i className='fa-brands fa-facebook p-2 mt-1' data-testid='facebookIcon'></i>
                  <i className='fa-brands fa-square-twitter p-2 mt-1' data-tesid='twitterIcon'></i>
                  <i className='fa-brands fa-instagram p-2 mt-1' data-testid='instagramIcon'></i>
                  <i className='fa-brands fa-whatsapp p-2 mt-1' data-testid='whatsappIcon'></i>
                </p>
              </div>
            </div>
            {/* Display the copyright year and developer name */}
            <p className='text-muted'>©Copyright {copyrightYear} | {developerName}</p>
          </div>
        </nav>
      </footer>
    </>
  );
};
// Export the Footer component for use in other files
export default Footer;
