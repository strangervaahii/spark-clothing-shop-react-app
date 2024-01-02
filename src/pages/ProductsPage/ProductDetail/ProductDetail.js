// Importing necessary modules from React and React-Router-DOM
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

// Importing custom component and utility function
import HelmetSetup from '../../../components/HelmetSetup/HelmetSetup';
import { fetchApi } from '../../../utils/fetchApi';

// Importing child components
import Review from './Review/Review';
import Comments from './Comments/Comments';

// Creating a functional component named ProductDetail
const ProductDetail = () => {
  // Defining states for loading, error and product details
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [productDetail, setProductDetail] = useState([]);

  // Getting the route parameters
  const routeParams = useParams();
  const { id } = routeParams;
  // Creating URL to fetch data from
  const url = `http://localhost:5000/products/${id}`;

  // Defining an effect to fetch data from the API
  useEffect(() => {
    fetchApi(url)
      .then((resInJson) => {
        if (resInJson.status !== 404) {
          setIsLoading(false);
          setIsError(false);
          setProductDetail(resInJson);
        } else {
          setIsLoading(false);
          setIsError(true);
          setProductDetail([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
        setProductDetail([]);
      })
      .finally(() => { })
  }, [url]);

  // Conditional rendering based on the state of loading and error
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
        Sorry! Unable to fetch product detail page ! Try Again Later
      </div>
    )
  }

  // Rendering the component with product details
  return (
    <>
      <HelmetSetup title='ProductDetail' />
      <div className='row'>
        {/* go back to products when you click the back button */}
        <NavLink to='/products'>
          <button type='button' className='btn btn-primary p-2 my-2'><i className='fas fa-arrow-left'>Back</i></button>
        </NavLink>
        <div className='col-md-5' key={productDetail.id}>
          <div className='card md-3 shadow-sm border-removal'>
            <img src={productDetail.imageUrl}
              alt={productDetail.imgAltText}
              className='card-img-top'
            />
          </div>
        </div>
        <div className='col-md-7'>
          {/* Best Seller tag for each product */}
          <h5 className='mb-0'><span className='badge text-bg-warning'>Best seller {'#' + productDetail.bestSellerRanking}</span></h5>
          <p className='card-text m-0 fs-1'>{productDetail.name}</p>
          <p className='pt-0 text-secondary'>{productDetail.description}</p>
          <hr />
          {/* description of the product */}
          <div className='p-2 bd-highlight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet
            nulla malesuada pellentesque. Lacus sed viverra tellus in hac habitasse platea dictumst.
            Massa ultricies mi quis hendrerit dolor magna eget est lorem. Malesuada bibendum arcu vitae
            elementum curabitur vitae nunc. Mauris ultrices eros in cursus turpis massa tincidunt.
            Integer enim neque volutpat ac tincidunt vitae. Dis parturient montes nascetur ridiculus
            mus mauris vitae ultricies. Non blandit massa enim nec dui nunc mattis. Nulla at volutpat diam ut.
            Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Tincidunt arcu non sodales
            neque sodales ut etiam. Vel pretium lectus quam id. Elementum tempus egestas sed sed risus
            pretium quam vulputate dignissim. Metus dictum at tempor commodo ullamcorper
            a lacus vestibulum. Dignissim suspendisse in est ante in. Arcu dui vivamus arcu felis bibendum.
            Dolor morbi non arcu risus quis.
          </div>
          <div className='d-flex flex-row align-items-center bd-highlight md-3'>
            <p className='p-2 bd-highlight fs-3'>{'Rs.' + productDetail.cost}</p>
            <p className='p-2 bd-highlight text-secondary' style={{ textDecoration: 'line-through' }}>
              {'Rs.' + productDetail.maxRetailPrice}</p>
            <p className='p-2 bd-highlight text-danger'>({productDetail.discountApplicable + '%OFF'})</p>
            <div className='text-end'>
              <p className='p-2 bd-highlight'>Added On: {productDetail.added}</p>
            </div>
          </div>
          <div className='d-flex justify-content-end align-self-center'>
            {/* render the review page */}
            <Review product={productDetail} setProductDetail={setProductDetail} />
          </div>
        </div>
        {/* render the comments page */}
        {/* <Comments product={productDetail} /> */}
        {productDetail.reviews.map(
          (review) => {
            return <Comments key={review.id} {...review} />;
          }
        )}
      </div>
      <Outlet />
    </>
  )
}

// Export the ProductDetail component
export default ProductDetail;
