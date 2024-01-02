// Importing React and the useNavigate hook from react-router-dom library
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Defining the CarouselList component
const CarouselList = () => {
  // Initializing the useNavigate hook to navigate to a specific route
  const navigate = useNavigate();
  // Initializing the useNavigate hook to navigate to a specific route
  const handleClick = () => {
    navigate('/products');
  }

  // Returning the JSX code to display a carousel with three items
  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          {/* First Item */}
          <div className='carousel-item active'>
            <div className='row align-items-center'>
              <div className='col-md py-2'>
                <img className='d-block img-fluid w-80' src='./assets/images/banner1.jpg' alt='First slide' />
              </div>
              <div className='col-md py-2'>
                <h1 className='text-center'>Same Day Delivery!</h1>
                <p>Welcome to our clothing shop! We offer a wide selection of stylish and affordable clothing for men and women. From casual to formal, we have something for every occasion. Our inventory is constantly updated with the latest fashion trends. Shop with us today your fashion game!</p>
                {/* Button to navigate to the products page */}
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-primary p-3 text-center' onClick={handleClick}>Browse More Products</button>
                </div>
              </div>
            </div>
          </div>
          {/* Second item */}
          <div className='carousel-item'>
            <div className='row align-items-center'>
              <div className='col-md py-2'>
                <img className='d-block img-fluid w-80' src='./assets/images/banner1.webp' alt='First slide' />
              </div>
              <div className='col-md py-2'>
                <h1 className='text-center'>Same Day Delivery!</h1>
                <p>Welcome to our clothing shop! We offer a wide selection of stylish and affordable clothing for men and women. From casual to formal, we have something for every occasion. Our inventory is constantly updated with the latest fashion trends. Shop with us today your fashion game!</p>
                {/* Button to navigate to the products page */}
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-primary p-3 text-center' onClick={handleClick}>Browse More Products</button>
                </div>
              </div>
            </div>
          </div>
          {/* Third item  */}
          <div className='carousel-item'>
            <div className='row align-items-center'>
              <div className='col-md py-2'>
                <img className='d-block img-fluid w-80' src='./assets/images/banner2.jpeg' alt='First slide' />
              </div>
              <div className='col-md py-2'>
                <h1 className='text-center'>Same Day Delivery!</h1>
                <p>Welcome to our clothing shop! We offer a wide selection of stylish and affordable clothing for men and women. From casual to formal, we have something for every occasion. Our inventory is constantly updated with the latest fashion trends. Shop with us today your fashion game!</p>
                {/* Button to navigate to the products page */}
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-primary p-3 text-center' onClick={handleClick}>Browse More Products</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
};

// Export the CarouselList component
export default CarouselList;
