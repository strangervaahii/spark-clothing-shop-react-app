// Importing necessary dependencies for the component
import axios from 'axios';
import React, { useState } from 'react';
import * as Yup from 'yup'; // for form validation
import { useFormik } from 'formik'; // for handling form submission and validation

// Creating a functional component called GetInTouch
const GetInTouch = () => {
  // Defining and initializing state variables using the useState hook
  const [isSaved, setIsSaved] = useState(false); // to indicate whether the form data has been saved or not
  const [isPending, setIsPending] = useState(false); // to indicate whether the form submission is pending or not
  const [isError, setIsError] = useState(false);

  // Defining and initializing the initial values for the form
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  // Defining the onSubmit function that will be called when the form is submitted
  const onSubmit = (values, { resetForm }) => {
    // Making an HTTP POST request to save the form data
    axios
      .post('http://localhost:5000/getInTouchData', values)
      .then((resInJson) => {
        // If the form data was saved successfully, update the state variables accordingly
        if (resInJson.status !== 404) {
          setIsSaved(false);
          setIsPending(true);
        } else {
          // If there was an error while saving the form data
          setIsPending(false);
          setIsSaved(false);
        }
      })
      .catch((err) => {
        // If there was an error while making the HTTP request, update the state variables accordingly
        console.log(err);
        setIsError(true);
        setIsPending(false);
        setIsSaved(false);
      });

    // Resetting the form values to empty after the form has been submitted
    resetForm({ values: '' });
  };

  // Defining the form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    message: Yup.string().required('Required!')
  });

  // Creating an instance of the useFormik hook to handle form submission and validation
  const formik = useFormik({
    initialValues, // initial values for the form
    onSubmit, // onSubmit function to be called when the form is submitted
    validationSchema // validation schema for the form
  });

  // Rendering the UI for the component
  return (
    <>
      <div className='col-md-6'>
        {/* title for get in touch  */}
        <h4 className='mb-2'>Get In Touch</h4>
        <form className='mb-5' method='post' id='contactForm' name='contactForm' onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-md-12 form-group'>
              {/* label for the name input tag */}
              <label htmlFor='nameInput' className='col-form-label' data-testid="nameLabel">Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                data-testid='nameInput'
                placeholder='Enter Your Name'
                id='nameInput'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <span className='text-danger'>{formik.errors.name}</span>
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group'>
              {/* label for the email input tag */}
              <label htmlFor='emailInput' className='col-form-label' data-testid="emailLabel">Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Enter Your Email'
                id='emailInput'
                data-testid="emailInput"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span className='text-danger'>{formik.errors.email}</span>
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 form-group mb-3'>
              {/* label for the message input tag */}
              <label htmlFor='messageInput' className='col-form-label'>Message</label>
              <textarea
                className='form-control'
                name='message'
                id='messageInput'
                placeholder='Enter Your Message'
                data-testid="messageArea"
                cols='30'
                rows='7'
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
              </textarea>
              {formik.touched.message && formik.errors.message && (
                <span className='text-danger'>{formik.errors.message}</span>
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              {/* Submit functionality */}
              {!isSaved && (
                <button type='submit' className='btn btn-primary' disabled={formik.values.name === ''} data-testid='submitButton'>
                  Submit
                </button>
              )}
              {isSaved && (
                <button type='submit' className='btn btn-info'>Uploading...</button>
              )}
            </div>
            {isPending ? (
              <div className='alert alert-success mt-2 px-4' data-testid="isPending">
                Saved Successfully
              </div>
            ) : ('')}
            {isError ? (
              <div className='alert alert-danger mt-2 px-4'>Some Error Occurred. Try again later!</div>
            ) : (
              ''
            )}
          </div>
        </form >
      </div >
    </>
  )
}

// export the GetInTouch component
export default GetInTouch;
