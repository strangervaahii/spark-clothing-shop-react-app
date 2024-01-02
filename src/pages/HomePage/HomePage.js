// Import the necessary components and libraries
import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import CarouselList from './CarouselList/CarouselList';
import LatestProduct from './LatestProduct/LatestProduct';

// Define the HomePage component
const HomePage = () => {
  // Return the JSX for the home page
  return (
    <>
      {/* Set the page title using the HelmetSetup component */}
      <HelmetSetup title='Home Page' />
      {/* Render the carousel list component */}
      <CarouselList data-testid='carouselList' />
      {/* Render the latest product component */}
      <LatestProduct data-testid='latestProduct' />
      {/* Create a row with three columns, each containing a card with an icon and text */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-1">
                {/* Render a truck icon using Font Awesome */}
                <i className="fa-solid fa-truck-fast fa-2x px-2 py-4"></i>
              </div>
              <div className="col-md-11">
                <div className="card-body">
                  {/* Set the card title and text */}
                  <h5 className="card-title px-2">FREE SHIPPING & RETURN</h5>
                  <p className="card-text text-muted px-2">Free Shipping on all order over Rs.499</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-2">
                {/* Render a dollar sign icon using Font Awesome */}
                <i className="fa-solid fa-dollar-sign fa-2x px-4 py-4"></i>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  {/* Set the card title and text */}
                  <h5 className="card-title">MONEY BACK & GURANTEE</h5>
                  <p className="card-text text-muted">100% money back gurantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-2">
                {/* Render a truck icon using Font Awesome */}
                <i className="fa-solid fa-truck-fast fa-2x p-4"></i>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  {/* Set the card title and text */}
                  <h5 className="card-title">ONLINE SUPPORT 24/7</h5>
                  <p className="card-text text-muted">Reach us out at anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the HomePage component
export default HomePage;
