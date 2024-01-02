// Importing React and useState and useEffect hooks from React library
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

// Importing the fetchApi function from a separate file
import { fetchApi } from '../../utils/fetchApi';
import './ProductsPage.css';

const useQuery = () => new URLSearchParams(useLocation().search);

// Defining a functional component called ProductsPage
const ProductsPage = () => {
  // Defining state variables to manage loading, error, products data, and sort order
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);
  // const [sortBy, setSortBy] = useState();

  // Initializing the url variable to null
  let url = null;

  // Using the useQuery hook to get the 'category' query parameter from the URL
  const query = useQuery();
  const queryParam = query.get('category');

  // Using a switch statement to set the url variable based on the query parameter and sort order
  // RUN THIS COMMAND TO START JSON SERVER : npx json-server --watch db.json --port 5000.
  if (queryParam === 'kids') {
    url = 'http://localhost:5000/products?category=kids'
  } else if (queryParam === 'men') {
    url = 'http://localhost:5000/products?category=men'
  } else if (queryParam === 'women') {
    url = 'http://localhost:5000/products?category=women'
  } else {
    url = 'http://localhost:5000/products'
  }

  // Using the useEffect hook to fetch data from the API based on the current url and sort order
  useEffect(() => {
    fetchApi(url)
      .then((resInJson) => {
        // If the response status is not 404, set the products data and change the loading and error states
        if ((resInJson.status !== 404)) {
          // Using setTimeout to simulate a loading delay of 1 second
          setTimeout(() => {
            setIsLoading(false);
            setIsError(false);
            setProducts(resInJson);
          }, 1000);
        } else {
          // If the response status is not 404, set the products data and change the loading and error states
          setIsLoading(false);
          setIsError(true);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
        setProducts([]);
      })
  }, [url]);

  // const handleSortPrice = (sortOrder) => {
  //   setSortBy(sortOrder);
  // }

  if (isLoading) {
    return (
      <div className='text-center'>
        <div className='spinner-border text-danger'></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className='alert alert-danger'>
        Sorry! Unable to fetch product page ! Try Again Later.
      </div>
    )
  }
  return (
    <>
      <HelmetSetup title='ProductsPage' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 bg-primary'>
            <ul className='list-group'>
              <li className='list-group-item list-group-item-action active'>
                <NavLink to='/products' className='text-white text-decoration-none'>
                  PRODUCT
                </NavLink>
              </li>
              {/* Categories of all products based on men, women and kids */}
              <h5 className='list-group-item list-group-item-action mb-0 p-3'>Categories</h5>
              <li className='list-group-item list-group-item-action'>
                {/* link for all products */}
                <NavLink
                  className='text-dark text-decoration-none'
                  aria-current='page'
                  to='/products'
                >
                  All
                </NavLink>
              </li>
              <li className='list-group-item list-group-item-action'>
                {/* link for mens products */}
                <NavLink
                  className='text-dark text-decoration-none'
                  aria-current='page'
                  to='/products?category=men'
                >
                  Men
                </NavLink>
              </li>
              <li className='list-group-item list-group-item-action'>
                {/* link for womens products */}
                <NavLink
                  className='text-dark text-decoration-none'
                  aria-current='page'
                  to='/products?category=women'
                >
                  Women
                </NavLink>
              </li>
              <li className='list-group-item list-group-item-action'>
                {/* link for kids products */}
                <NavLink
                  className='text-dark text-decoration-none'
                  aria-current='page'
                  to='/products?category=kids'
                >
                  Kids
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col-md-9'>
            <div className='d-flex row mb-3'>
              <div className='d-flex' id='sortBy'>
                {/* products found displays */}
                <span className='mt-0 mb-0 fs-4' id='productFound'>{products.length} products found</span>
                {/* handle Sorting the price from low to high and high to low */}
                <label htmlFor='price fs-3 mt-2'>Sort By:</label>
                <select className='badge text-bg-primary'>
                  {/* onChange={(e) => handleSortPrice(e.target.value)} */}
                  <option value='low to high'>Low to High</option>
                  <option value='high to low'>High to Low</option>
                </select>
              </div>
              {products.map(
                ({
                  id,
                  imageUrl,
                  imgAltText,
                  name,
                  description,
                  cost,
                  maxRetailPrice,
                  discountApplicable,
                  bestSellerRanking
                }) => (
                  // must return
                  <div className='col-md-4 col-lg-4 gy-3' key={id}>
                    <div className='card h-100 shadow-sm border-removal'>
                      <h5 className='mb-0'><span className='badge text-bg-warning'>Best seller {'#' + bestSellerRanking}</span></h5>
                      <NavLink to={`/products/${id}`}>
                        <img
                          src={imageUrl}
                          alt={imgAltText}
                          className='card-img-top thumbnail-image'
                          data-testid='productImage' />
                      </NavLink>
                      <div className='card-body'>
                        <p className='card-text m-0'>{name}</p>
                        <p className='pt-0 description'>{description}</p>
                        <div>
                          <span>{'Rs.' + cost}</span>
                          <span className='mx-2 mrp'>{maxRetailPrice}</span>
                          <span className='discount'>({discountApplicable + '%OFF'})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export the productpage component
export default ProductsPage;
