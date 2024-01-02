import React, { useState } from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import axios from 'axios';
import Proptypes from 'prop-types';

const Review = ({ product, setProductDetail }) => {
  // Define the initial values for the form fields
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    rating: ''
  };

  // Define state variables to check if the data is saved and if the form is pending submission
  const [isSaved, setIsSaved] = useState(false);
  const [isPending, setIsPending] = useState(false);
  // Define state variable to toggle the display of a modal
  const [show, setShow] = useState(false);

  // Define functions to handle modal display
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Define the submit function that sends form data to a server and resets the form
  const onSubmit = async (values, { resetForm }) => {
    // Check if the email is already taken
    const formData = {
      id: Math.floor(Math.random() * 10000),
      name: values.name,
      email: values.email,
      message: values.message,
      phone: values.phone,
      rating: values.rating
    }
    const updatedProduct = { ...product, reviews: [...product.reviews, formData] }
    axios.put(`http://localhost:5000/products/${product.id}`, updatedProduct)
      .then((resInJson) => {
        // fetch data and passing throught the setContactData
        if (resInJson.status !== 404) {
          setProductDetail(updatedProduct);
          setIsSaved(false);
          setIsPending(true);
        } else {
          // if the 404 error caught then display nothing
          alert('error');
          setIsPending(false);
          setIsSaved(false);
        }
      })
      .catch((err) => {
        alert('something went wrong try again!!!');
        console.log(err);
        setIsPending(false);
        setIsSaved(false);
      });
    // Reset the form after submission
    resetForm({ values: '' });
  };

  // Define a validation schema for the form fields
  const validationSchema = Yup.object({
    name: Yup.string().required('User Name is Required!!!!'),
    email: Yup.string().email('Invalid email format').required('email id is Required!!!!'),
    phone: Yup.number().required('A phone number is required'),
    message: Yup.string().required('Required!!!'),
    rating: Yup.string().required('Required')
  });

  // Use the useFormik hook to create a formik object with the above defined properties
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <>
      <Button variant='primary' onClick={handleShow}>Write a Review</Button>
      <Modal size='lg'
        aria-labelledby='contained-modal-title-vcenter' centered
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Review</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className='p-5'>
            {/* justify is to have the box in center  */}
            <div className='col d-flex justify-content-center pb-5'>
              <div className='card w-100 contact-box'>
                <h3 className='p-3 bg-primary text-white'>
                  Review
                </h3>
                <form className='p-3' onSubmit={formik.handleSubmit}>
                  <div className='mb-3'>
                    {/* htmlFor and the id should be same */}
                    {/* in input must have name  */}
                    {/* so the data will be collect in the name and submit to backend  */}
                    <label
                      // name field
                      htmlFor='name'
                      className='form-label'
                      data-testid='nameLabel'
                    >
                      Enter Your Name
                    </label>
                    {/* onChange is a event because changes will be updated while changing the input field */}
                    {/* must have a name while form submission the data will be pass to db  */}
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Enter Your Name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-label='name-input'
                    />
                    {formik.touched.name && formik.errors.name && (
                      <span className='text-danger'>{formik.errors.name}</span>
                    )}
                  </div>
                  <div className='mb-3'>
                    {/* emailaddress */}
                    <label
                      htmlFor='email'
                      className='form-label'
                      data-testid='emailLabel'
                    >
                      Email address
                    </label>
                    {/* must have a email address while form submission the data will be pass to db  */}
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      aria-describedby='emailHelp'
                      name='email'
                      placeholder='Enter Your Email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className='text-danger'>{formik.errors.email}</span>
                    )}
                    <div id='emailHelp' className='form-text'>
                      Well never share your email with anyone else.
                    </div>
                  </div>
                  <div className='mb-3'>
                    {/* phone number */}
                    <label
                      htmlFor='phone'
                      className='form-label'
                      data-testid='phoneLabel'
                    >
                      Phone number
                    </label>
                    {/* must have a phone while form submission the data will be pass to db  */}
                    <input
                      type='number'
                      className='form-control'
                      name='phone'
                      placeholder='Enter your phone number'
                      id='phone'
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <span className='text-danger'>{formik.errors.phone}</span>
                    )}
                  </div>
                  {/* to collect the rating  */}
                  <div className='mb-3'>
                    {/* rating field */}
                    <label
                      htmlFor='rating'
                      className='form-label'
                      data-testid='ratingLabel'
                    >
                      Rating
                    </label>
                    <select
                      className='form-select'
                      id='rating'
                      name='rating'
                      aria-label='Default select example'
                      value={formik.values.rating}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option defaultValue='Give Your Rating Here'>
                        Give Your Rating Here
                      </option>
                      {/* data in value will be pass to the db  */}
                      <option value='Excellent'>Excellent</option>
                      <option value='Good'>Good</option>
                      <option value='Medium'>Medium</option>
                      <option value='Poor'>Poor</option>
                      <option value='Very Bad'>Very Bad</option>
                    </select>
                    {formik.touched.rating && formik.errors.rating && (
                      <span className='text-danger'>{formik.errors.rating}</span>
                    )}
                  </div>
                  <label htmlFor='messageArea'>Comments</label>
                  {/* comment field  */}
                  <textarea
                    className='form-control'
                    placeholder='Leave a comment here'
                    id='messageArea'
                    name='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <span className='text-danger'>{formik.errors.message}</span>
                  )}
                  <div className='pt-2'>
                    {!isSaved && (
                      <button
                        type='submit'
                        className='btn btn-primary'
                        disabled={formik.values.name === ''}
                      >
                        Submit
                      </button>
                    )}

                    {isSaved && (
                      <button type='submit' className='btn btn-info'>
                        Uploading....
                      </button>
                    )}

                    <div>
                      {isPending ? (
                        <div
                          data-testid='isPending'
                          className='alert alert-success mt-3'
                        >
                          Saved Successfully
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Review.propTypes = {
  product: Proptypes.object,
  setProductDetail: Proptypes.func
}
// Export the Review component
export default Review;
