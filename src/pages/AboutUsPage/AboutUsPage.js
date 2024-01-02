// Importing necessary dependencies from React and react-router-dom libraries
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// Importing the HelmetSetup component and AboutUsPage's specific CSS styles
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import './AboutUsPage.css';

// Defining the functional component, AboutUsPage
const AboutUsPage = () => {
  return (
    <>
      {/* Setting up the page title with HelmetSetup */}
      <HelmetSetup title='AboutUsPage' />
      {/* Creating a banner section */}
      <div className='banner bg-primary'>
        <div className='container text-white text-center my-0 py-5'>
          <p className='fs-1 hero-title mb-3'>About Us</p>
          <p className='fs-4 hero-subtitle mb-3'>We have the capabilities and experience to deliver the products you need to move forward.</p>
          {/* Adding a button with a NavLink to the 'history' route, styled with a light background and black text */}
          <button type='button' className='btn btn-light shadow-none px-5'>
            <NavLink to='history' className='text-black link-underline-light fs-4'>History</NavLink>
          </button>
        </div>
      </div>
      {/* Creating a section with four cards displaying the company's mission, vision, values, and contact information */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 mt-2 border-0'>
              <div className='card h-100'>
                <div className='card-body'>
                  <img src='./assets/images/mission.png' className='card-img-top' alt='mission' />
                  <i className='fa-solid fa-bullseye-arrow'></i>
                  {/* Adding a title and text to the card body */}
                  <h3 className='card-title text-center font-weight-bold'>Mission</h3>
                  <p className='card-text'>Empowering customers worldwide with easy access to high-quality products
                    at competitive prices, delivered with exceptional customer service.</p>
                </div>
              </div>
            </div>
            {/* Repeating the card structure for vision, values, and contact information */}
            <div className='col-md-3 mt-2 border-0'>
              <div className='card h-100'>
                <div className='card-body'>
                  <img src='./assets/images/vision.jpg' className='card-img-top my-1' alt='vision' />
                  {/* Adding a title and text to the card body */}
                  <h3 className='card-title text-center font-weight-bold'>Vision</h3>
                  <p className='card-text'>To become the most trusted and preferred online shopping destination for customers,
                    offering a seamless and personalized shopping experience that exceeds expectations,
                    and fostering long-term relationships based on trust and loyalty.</p>
                </div>
              </div>
            </div>
            {/* Repeating the card structure for vision, values, and contact information */}
            <div className='col-md-3 mt-2 border-0'>
              <div className='card h-100'>
                <div className='card-body'>
                  <img src='./assets/images/values.png' className='card-img-top my-1' alt='values' />
                  {/* Adding a title and text to the card body */}
                  <h3 className='card-title text-center font-weight-bold'>Values</h3>
                  <p className='card-text'>At our core, we value transparency, integrity, and innovation, and are committed to
                    providing a safe and secure platform that prioritizes the needs and satisfaction of our customers,
                    employees, and partners.</p>
                </div>
              </div>
            </div>
            {/* Repeating the card structure for vision, values, and contact information */}
            <div className='col-md-3 mt-2 border-0'>
              <div className='card h-100'>
                <div className='card-body'>
                  <img src='./assets/images/contact.png' className='card-img-top my-1' alt='contact' />
                  {/* Adding a title and text to the card body */}
                  <h3 className='card-title text-center font-weight-bold'>Contact</h3>
                  <p className='card-text'>Need assistance? Our customer support team is available 24/7 to
                    assist with any questions or concerns. Contact us via phone, email, or live
                    chat to get the help you need, when you need it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};
// Export the AboutUsPage component for use in other files
export default AboutUsPage;
