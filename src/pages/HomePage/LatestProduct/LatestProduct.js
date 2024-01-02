// Import React, useEffect and useState hooks from 'react' and NavLink component from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './LatestProduct.css'; // Import the LatestProduct stylesheet

// Define a functional component LatestProduct
const LatestProduct = () => {
  // Declare a state variable latestProduct using the useState hook and initialize it to an empty array
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products?_limit=4')
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setLatestProduct(resInJson);
      })
      // .catch((err) => {
      //   console.log(err);
      // })
      .finally(() => { });
  }, []);

  // Return the JSX for the LatestProduct component
  return (
    <div className='row'>
      <h2>Latest Products</h2>
      {latestProduct?.map((product) => {
        return (
          <div className='col-md-3 mb-4 mt-1' key={product.id}>
            <div className='card h-100 shadow-sm border-removal'>
              <NavLink to='products'>
                <img
                  src={product.imageUrl}
                  alt={product.imgAltText}
                  className='card-img-top thumbnail-image'
                />
              </NavLink>
              <div className='card-body'>
                <p className='card-text m-0 fs-4'>{product.name}</p>
                <div className='mt-2 mb-2'>
                  <span>{'Rs.' + product.cost}</span>
                  <span className='mx-2 mrp'>{product.maxRetailPrice}</span>
                  <span className='discount'>({product.discountApplicable + '%OFF'})</span>
                </div>
                <button type='button' className='btn btn-danger mt-2 mb-1 px-4' data-testid='addToCartBtn'>ADD TO CART</button>
              </div>
            </div>
          </div>
        )
      })}
      <NavLink to='products' className='text-center'>
        <button className='btn btn-warning py-2 px-4 mb-3'>View All</button>
      </NavLink>
      <Outlet />
    </div>
  );
};

// Export the LatestProduct component
export default LatestProduct;
